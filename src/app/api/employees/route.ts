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
      SELECT * FROM public.empleados 
      ORDER BY created_at DESC
    `;

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

export async function POST(req: Request) {
  if (!isDbConfigured || !sql) {
    return NextResponse.json({ success: false, connected: false, message: 'Database not connected' });
  }

  try {
    await ensureTables();
    const emp = await req.json();

    // Upsert employee by id or (hotel_slug, numero_empleado)
    await sql`
      INSERT INTO public.empleados (
        id, numero_empleado, nombre, hotel_slug, puesto_id, puesto_nombre, area
      ) VALUES (
        ${emp.id}, ${emp.numeroEmpleado}, ${emp.nombre}, ${emp.hotelSlug},
        ${emp.puestoId}, ${emp.puestoNombre}, ${emp.area}
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

export async function DELETE(req: Request) {
  if (!isDbConfigured || !sql) {
    return NextResponse.json({ success: false, connected: false });
  }

  try {
    await ensureTables();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (id) {
      await sql`DELETE FROM public.empleados WHERE id = ${id};`;
    } else {
      await sql`DELETE FROM public.empleados;`;
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
