import { NextResponse } from 'next/server';
import { sql, ensureTables, isDbConfigured } from '@/lib/db';
import { isAdminAuthenticated } from '@/lib/auth';

export const dynamic = 'force-dynamic';

// GET: Solo accesible por Administradores / Supervisores autenticados
export async function GET(req: Request) {
  const isAuth = await isAdminAuthenticated(req);
  if (!isAuth) {
    return NextResponse.json(
      { success: false, error: 'No autorizado: Acceso reservado para supervisores y administradores', data: [] }, 
      { status: 401 }
    );
  }

  if (!isDbConfigured || !sql) {
    return NextResponse.json({ success: false, connected: false, data: [] });
  }

  try {
    await ensureTables();
    const { searchParams } = new URL(req.url);
    const hotelSlug = searchParams.get('hotelSlug');

    const rows = hotelSlug
      ? await sql`SELECT * FROM public.empleados WHERE hotel_slug = ${hotelSlug} ORDER BY created_at DESC`
      : await sql`SELECT * FROM public.empleados ORDER BY created_at DESC`;

    const mapped = rows.map((r: any) => ({
      id: r.id,
      numeroEmpleado: r.numero_empleado,
      nombre: r.nombre,
      hotelSlug: r.hotel_slug,
      puestoId: r.puesto_id,
      puestoNombre: r.puesto_nombre,
      area: r.area
    }));

    return NextResponse.json({ success: true, connected: true, data: mapped });
  } catch (err: any) {
    console.error('Error fetching employees from Vercel Postgres:', err);
    return NextResponse.json({ success: false, connected: true, error: err.message, data: [] }, { status: 500 });
  }
}

// POST: Registrar o actualizar empleado (Solo Administradores)
export async function POST(req: Request) {
  const isAuth = await isAdminAuthenticated(req);
  if (!isAuth) {
    return NextResponse.json(
      { success: false, error: 'No autorizado: Se requiere sesión de administrador' }, 
      { status: 401 }
    );
  }

  if (!isDbConfigured || !sql) {
    return NextResponse.json({ success: false, connected: false, message: 'Base de datos no conectada' });
  }

  try {
    await ensureTables();
    const emp = await req.json().catch(() => null);

    if (!emp || typeof emp !== 'object') {
      return NextResponse.json({ success: false, error: 'Cuerpo de solicitud inválido' }, { status: 400 });
    }

    // Validación estricta de campos obligatorios
    const numeroEmpleado = String(emp.numeroEmpleado || '').trim();
    const nombre = String(emp.nombre || '').trim();
    const hotelSlug = String(emp.hotelSlug || '').trim();
    const puestoId = String(emp.puestoId || '').trim();
    const puestoNombre = String(emp.puestoNombre || '').trim();
    const area = String(emp.area || '').trim();
    const id = String(emp.id || `emp_${Date.now()}`).trim();

    if (!numeroEmpleado || !nombre || !hotelSlug || !puestoNombre) {
      return NextResponse.json(
        { success: false, error: 'Todos los campos requeridos deben completarse con valores válidos' }, 
        { status: 400 }
      );
    }

    if (numeroEmpleado.length > 50 || nombre.length > 150) {
      return NextResponse.json({ success: false, error: 'Longitud de campos excede los límites permitidos' }, { status: 400 });
    }

    // Upsert employee by id or (hotel_slug, numero_empleado)
    await sql`
      INSERT INTO public.empleados (
        id, numero_empleado, nombre, hotel_slug, puesto_id, puesto_nombre, area
      ) VALUES (
        ${id}, ${numeroEmpleado}, ${nombre}, ${hotelSlug},
        ${puestoId}, ${puestoNombre}, ${area}
      )
      ON CONFLICT (id) DO UPDATE SET
        numero_empleado = EXCLUDED.numero_empleado,
        nombre = EXCLUDED.nombre,
        puesto_id = EXCLUDED.puesto_id,
        puesto_nombre = EXCLUDED.puesto_nombre,
        area = EXCLUDED.area;
    `;

    return NextResponse.json({ success: true, connected: true });
  } catch (err: any) {
    console.error('Error saving employee to Vercel Postgres:', err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

// DELETE: Eliminar empleado o limpiar (Solo Administradores con confirmación)
export async function DELETE(req: Request) {
  const isAuth = await isAdminAuthenticated(req);
  if (!isAuth) {
    return NextResponse.json(
      { success: false, error: 'No autorizado: Se requiere sesión de administrador' }, 
      { status: 401 }
    );
  }

  if (!isDbConfigured || !sql) {
    return NextResponse.json({ success: false, connected: false });
  }

  try {
    await ensureTables();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const confirmAll = searchParams.get('confirmAll') === 'true';

    if (id) {
      await sql`DELETE FROM public.empleados WHERE id = ${id};`;
      return NextResponse.json({ success: true, message: `Empleado ${id} eliminado` });
    } else if (confirmAll) {
      await sql`DELETE FROM public.empleados;`;
      return NextResponse.json({ success: true, message: 'Todos los empleados han sido eliminados' });
    } else {
      return NextResponse.json(
        { success: false, error: 'Se requiere el parámetro ?id=... o ?confirmAll=true para autorizar el borrado' },
        { status: 400 }
      );
    }
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
