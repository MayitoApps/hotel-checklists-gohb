import { NextResponse } from 'next/server';
import { 
  verifyAdminPassword, 
  createAdminSessionToken, 
  SESSION_COOKIE_NAME, 
  SESSION_DURATION_SECONDS 
} from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const pin = body?.pin;

    if (!pin || typeof pin !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Código de acceso requerido' }, 
        { status: 400 }
      );
    }

    const isValid = verifyAdminPassword(pin);
    if (!isValid) {
      // Retraso artificial para mitigar ataques de fuerza bruta de timing
      await new Promise(r => setTimeout(r, 450));
      return NextResponse.json(
        { success: false, error: 'Código de acceso incorrecto. Verifica la clave.' }, 
        { status: 401 }
      );
    }

    const token = await createAdminSessionToken();
    const response = NextResponse.json({ success: true, message: 'Sesión iniciada correctamente' });

    response.cookies.set({
      name: SESSION_COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: SESSION_DURATION_SECONDS
    });

    return response;
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: 'Error en el servidor de autenticación' }, 
      { status: 500 }
    );
  }
}
