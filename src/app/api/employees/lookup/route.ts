import { NextResponse } from 'next/server';
import { sql, ensureTables, isDbConfigured } from '@/lib/db';
import { INITIAL_EMPLOYEES } from '@/data/initialData';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const numero = searchParams.get('numero')?.trim();
    const hotel = searchParams.get('hotel')?.trim();

    if (!numero || !hotel) {
      return NextResponse.json(
        { success: false, error: 'Parámetros numero y hotel requeridos' }, 
        { status: 400 }
      );
    }

    // Limitar longitud para evitar payloads abusivos
    if (numero.length > 50 || hotel.length > 50) {
      return NextResponse.json(
        { success: false, error: 'Parámetros inválidos' }, 
        { status: 400 }
      );
    }

    if (!isDbConfigured || !sql) {
      const match = INITIAL_EMPLOYEES.find(
        e => e.hotelSlug === hotel && e.numeroEmpleado.toLowerCase() === numero.toLowerCase()
      );
      if (match) {
        return NextResponse.json({
          success: true,
          connected: false,
          found: true,
          data: match
        });
      }
      return NextResponse.json({ 
        success: true, 
        connected: false, 
        found: false, 
        data: null 
      });
    }

    await ensureTables();

    const rows = await sql`
      SELECT id, numero_empleado, nombre, hotel_slug, puesto_id, puesto_nombre, area
      FROM public.empleados
      WHERE hotel_slug = ${hotel} AND LOWER(TRIM(numero_empleado)) = LOWER(TRIM(${numero}))
      LIMIT 1
    `;

    if (rows && rows.length > 0) {
      const r = rows[0];
      return NextResponse.json({
        success: true,
        connected: true,
        found: true,
        data: {
          id: r.id,
          numeroEmpleado: r.numero_empleado,
          nombre: r.nombre,
          hotelSlug: r.hotel_slug,
          puestoId: r.puesto_id,
          puestoNombre: r.puesto_nombre,
          area: r.area
        }
      });
    }

    // Fallback: Si no está en Postgres, buscar en el catálogo oficial inicial y auto-sembrar
    const match = INITIAL_EMPLOYEES.find(
      e => e.hotelSlug === hotel && e.numeroEmpleado.toLowerCase() === numero.toLowerCase()
    );
    if (match) {
      try {
        await sql`
          INSERT INTO public.empleados (
            id, numero_empleado, nombre, hotel_slug, puesto_id, puesto_nombre, area
          ) VALUES (
            ${match.id}, ${match.numeroEmpleado}, ${match.nombre}, ${match.hotelSlug},
            ${match.puestoId}, ${match.puestoNombre}, ${match.area}
          )
          ON CONFLICT (id) DO NOTHING;
        `;
      } catch (e) {
        console.warn('Auto-seed employee in lookup failed:', e);
      }
      return NextResponse.json({
        success: true,
        connected: true,
        found: true,
        data: match
      });
    }

    return NextResponse.json({
      success: true,
      connected: true,
      found: false,
      data: null
    });
  } catch (err: any) {
    console.error('Error in /api/employees/lookup:', err);
    return NextResponse.json(
      { success: false, error: err.message, found: false }, 
      { status: 500 }
    );
  }
}
