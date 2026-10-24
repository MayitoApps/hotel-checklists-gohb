import { NextResponse } from 'next/server';
import { sql, ensureTables, isDbConfigured } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
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

export async function POST(req: Request) {
  if (!isDbConfigured || !sql) {
    return NextResponse.json({ success: false, connected: false, message: 'Database not connected' });
  }

  try {
    await ensureTables();
    const body = await req.json();

    await sql`
      INSERT INTO public.registros_checklist (
        id, hotel_slug, hotel_name, employee_id, employee_number,
        employee_name, puesto_id, puesto_nombre, area, date,
        submitted_at, total_tasks, completed_tasks, problem_tasks,
        not_applicable_tasks, compliance_percentage, general_notes, tasks
      ) VALUES (
        ${body.id}, ${body.hotelSlug}, ${body.hotelName}, ${body.employeeId},
        ${body.employeeNumber}, ${body.employeeName}, ${body.puestoId},
        ${body.puestoNombre}, ${body.area}, ${body.date}, ${body.submittedAt},
        ${body.totalTasks}, ${body.completedTasks}, ${body.problemTasks},
        ${body.notApplicableTasks}, ${body.compliancePercentage},
        ${body.generalNotes || ''}, ${JSON.stringify(body.tasks || [])}::jsonb
      )
      ON CONFLICT (id) DO NOTHING
    `;

    return NextResponse.json({ success: true, connected: true });
  } catch (err: any) {
    console.error('Error saving submission to Vercel Postgres:', err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function DELETE() {
  if (!isDbConfigured || !sql) {
    return NextResponse.json({ success: false, connected: false });
  }

  try {
    await ensureTables();
    await sql`DELETE FROM public.registros_checklist;`;
    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
