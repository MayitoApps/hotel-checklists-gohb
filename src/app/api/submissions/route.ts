import { NextResponse } from 'next/server';
import { sql, ensureTables, isDbConfigured } from '@/lib/db';
import { isAdminAuthenticated } from '@/lib/auth';

export const dynamic = 'force-dynamic';

// GET: Solo accesible por Administradores / Supervisores autenticados
export async function GET(req: Request) {
  const isAuth = await isAdminAuthenticated(req);
  if (!isAuth) {
    return NextResponse.json(
      { success: false, error: 'No autorizado: Acceso confidencial reservado para supervisores', data: [] }, 
      { status: 401 }
    );
  }

  if (!isDbConfigured || !sql) {
    return NextResponse.json({ success: false, connected: false, data: [] });
  }

  try {
    await ensureTables();
    const rows = await sql`
      SELECT * FROM public.registros_checklist 
      ORDER BY submitted_at DESC
    `;

    const mapped = rows.map((r: any) => ({
      id: r.id,
      hotelSlug: r.hotel_slug,
      hotelName: r.hotel_name,
      employeeId: r.employee_id,
      employeeNumber: r.employee_number,
      employeeName: r.employee_name,
      puestoId: r.puesto_id,
      puestoNombre: r.puesto_nombre,
      area: r.area,
      date: typeof r.date === 'string' ? r.date.split('T')[0] : new Date(r.date).toISOString().split('T')[0],
      submittedAt: r.submitted_at,
      totalTasks: r.total_tasks,
      completedTasks: r.completed_tasks,
      problemTasks: r.problem_tasks,
      notApplicableTasks: r.not_applicable_tasks,
      compliancePercentage: Number(r.compliance_percentage),
      generalNotes: r.general_notes || '',
      tasks: r.tasks || []
    }));

    return NextResponse.json({ success: true, connected: true, data: mapped });
  } catch (err: any) {
    console.error('Error fetching submissions from Vercel Postgres:', err);
    return NextResponse.json({ success: false, connected: true, error: err.message, data: [] }, { status: 500 });
  }
}

// POST: Envío de checklist desde Kiosco de Hotel (con validación y sanitización estricta)
export async function POST(req: Request) {
  if (!isDbConfigured || !sql) {
    return NextResponse.json({ success: false, connected: false, message: 'Base de datos no conectada' });
  }

  try {
    await ensureTables();
    const body = await req.json().catch(() => null);

    if (!body || typeof body !== 'object') {
      return NextResponse.json({ success: false, error: 'Cuerpo de solicitud inválido' }, { status: 400 });
    }

    // Sanitización y validación de tipos
    const id = String(body.id || `sub_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`).trim().slice(0, 100);
    const hotelSlug = String(body.hotelSlug || '').trim().slice(0, 50);
    const hotelName = String(body.hotelName || '').trim().slice(0, 100);
    const employeeId = String(body.employeeId || '').trim().slice(0, 100);
    const employeeNumber = String(body.employeeNumber || '').trim().slice(0, 50);
    const employeeName = String(body.employeeName || '').trim().slice(0, 150);
    const puestoId = String(body.puestoId || '').trim().slice(0, 100);
    const puestoNombre = String(body.puestoNombre || '').trim().slice(0, 100);
    const area = String(body.area || '').trim().slice(0, 100);
    
    // Validación de fecha
    const rawDate = String(body.date || '').trim();
    const date = /^\d{4}-\d{2}-\d{2}$/.test(rawDate) ? rawDate : new Date().toISOString().split('T')[0];
    const submittedAt = body.submittedAt && !isNaN(Date.parse(body.submittedAt)) 
      ? new Date(body.submittedAt).toISOString() 
      : new Date().toISOString();

    if (!hotelSlug || !employeeNumber || !employeeName) {
      return NextResponse.json(
        { success: false, error: 'Datos de empleado y hotel requeridos para el envío' }, 
        { status: 400 }
      );
    }

    // Validar contadores
    const totalTasks = Math.max(0, Math.min(1000, Number(body.totalTasks) || 0));
    const completedTasks = Math.max(0, Math.min(1000, Number(body.completedTasks) || 0));
    const problemTasks = Math.max(0, Math.min(1000, Number(body.problemTasks) || 0));
    const notApplicableTasks = Math.max(0, Math.min(1000, Number(body.notApplicableTasks) || 0));
    const compliancePercentage = Math.max(0, Math.min(100, Number(body.compliancePercentage) || 0));

    // Sanitizar notas generales (máximo 3000 caracteres)
    const generalNotes = String(body.generalNotes || '').trim().slice(0, 3000);

    // Sanitizar array de tareas (máximo 500 tareas, cada una con notas truncadas)
    const rawTasks = Array.isArray(body.tasks) ? body.tasks.slice(0, 500) : [];
    const sanitizedTasks = rawTasks.map((t: any) => ({
      taskId: String(t?.taskId || '').slice(0, 100),
      categoria: String(t?.categoria || '').slice(0, 100),
      tarea: String(t?.tarea || '').slice(0, 300),
      status: ['completed', 'problem', 'not_applicable'].includes(t?.status) ? t.status : 'completed',
      note: t?.note ? String(t.note).slice(0, 500) : undefined
    }));

    await sql`
      INSERT INTO public.registros_checklist (
        id, hotel_slug, hotel_name, employee_id, employee_number,
        employee_name, puesto_id, puesto_nombre, area, date,
        submitted_at, total_tasks, completed_tasks, problem_tasks,
        not_applicable_tasks, compliance_percentage, general_notes, tasks
      ) VALUES (
        ${id}, ${hotelSlug}, ${hotelName}, ${employeeId},
        ${employeeNumber}, ${employeeName}, ${puestoId},
        ${puestoNombre}, ${area}, ${date}, ${submittedAt},
        ${totalTasks}, ${completedTasks}, ${problemTasks},
        ${notApplicableTasks}, ${compliancePercentage},
        ${generalNotes}, ${JSON.stringify(sanitizedTasks)}::jsonb
      )
      ON CONFLICT (id) DO NOTHING
    `;

    return NextResponse.json({ success: true, connected: true });
  } catch (err: any) {
    console.error('Error saving submission to Vercel Postgres:', err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

// DELETE: Eliminar registros (Solo Administradores con confirmación explícita)
export async function DELETE(req: Request) {
  const isAuth = await isAdminAuthenticated(req);
  if (!isAuth) {
    return NextResponse.json(
      { success: false, error: 'No autorizado: Se requiere sesión de administrador para eliminar registros' }, 
      { status: 401 }
    );
  }

  if (!isDbConfigured || !sql) {
    return NextResponse.json({ success: false, connected: false });
  }

  try {
    await ensureTables();
    const { searchParams } = new URL(req.url);
    const confirmAll = searchParams.get('confirmAll') === 'true';

    if (!confirmAll) {
      return NextResponse.json(
        { success: false, error: 'Se requiere confirmación explícita (?confirmAll=true) para borrar los registros' },
        { status: 400 }
      );
    }

    await sql`DELETE FROM public.registros_checklist;`;
    return NextResponse.json({ success: true, message: 'Todos los registros de checklist han sido eliminados' });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
