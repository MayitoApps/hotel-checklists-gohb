// ==============================================================================
// AUTHENTICATION & SECURITY UTILITIES (SERVER-SIDE ONLY)
// Grupo Orgánico Hotel Boutique - Control Operativo
// ==============================================================================

const SESSION_COOKIE_NAME = 'gohb_admin_session';
const SESSION_DURATION_SECONDS = 60 * 60 * 12; // 12 horas

const DEFAULT_SECRET = 'gohb-hotel-secret-key-salt-2026-secure-session-token';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '132435';

function getSecret(): string {
  return process.env.ADMIN_SESSION_SECRET || DEFAULT_SECRET;
}

// Helper para convertir Buffer / Uint8Array a Base64URL
function base64UrlEncode(str: string): string {
  if (typeof Buffer !== 'undefined') {
    return Buffer.from(str, 'utf-8').toString('base64url');
  }
  return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function base64UrlDecode(str: string): string {
  if (typeof Buffer !== 'undefined') {
    return Buffer.from(str, 'base64url').toString('utf-8');
  }
  let b64 = str.replace(/-/g, '+').replace(/_/g, '/');
  while (b64.length % 4) b64 += '=';
  return atob(b64);
}

function bufferToBase64Url(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

// Generar HMAC-SHA256 con WebCrypto (compatible con Node.js y Edge Runtime de Next.js)
async function generateHmac(message: string, secret: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const signature = await crypto.subtle.sign('HMAC', key, enc.encode(message));
  return bufferToBase64Url(signature);
}

// Comparación en tiempo constante para mitigar ataques de temporización
export function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

// Validar PIN administrativo
export function verifyAdminPassword(pin: string): boolean {
  if (!pin || typeof pin !== 'string') return false;
  const cleanPin = pin.trim();
  return timingSafeEqual(cleanPin, ADMIN_PASSWORD);
}

// Crear token firmado de sesión administrativa
export async function createAdminSessionToken(): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    role: 'admin',
    iat: now,
    exp: now + SESSION_DURATION_SECONDS
  };

  const payloadEncoded = base64UrlEncode(JSON.stringify(payload));
  const signature = await generateHmac(payloadEncoded, getSecret());
  return `${payloadEncoded}.${signature}`;
}

// Verificar token firmado
export async function verifyAdminSessionToken(token: string | null | undefined): Promise<boolean> {
  if (!token || typeof token !== 'string') return false;

  const parts = token.split('.');
  if (parts.length !== 2) return false;

  const [payloadEncoded, signature] = parts;

  try {
    const expectedSig = await generateHmac(payloadEncoded, getSecret());
    if (!timingSafeEqual(signature, expectedSig)) {
      return false;
    }

    const payloadJson = base64UrlDecode(payloadEncoded);
    const payload = JSON.parse(payloadJson);

    if (payload.role !== 'admin') return false;
    if (typeof payload.exp !== 'number' || payload.exp < Math.floor(Date.now() / 1000)) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
}

// Extraer cookies de una cabecera Cookie
export function getCookieValue(cookieHeader: string | null, cookieName: string): string | null {
  if (!cookieHeader) return null;
  const match = cookieHeader
    .split(';')
    .map(c => c.trim())
    .find(c => c.startsWith(`${cookieName}=`));

  if (!match) return null;
  return decodeURIComponent(match.substring(cookieName.length + 1));
}

// Verificar autenticación admin a partir de un Request estándar
export async function isAdminAuthenticated(req: Request): Promise<boolean> {
  const cookieHeader = req.headers.get('cookie');
  const token = getCookieValue(cookieHeader, SESSION_COOKIE_NAME);
  return verifyAdminSessionToken(token);
}

export { SESSION_COOKIE_NAME, SESSION_DURATION_SECONDS };

// ==============================================================================
// SANITIZACIÓN DE INYECCIÓN DE FÓRMULAS CSV (CWE-1236)
// ==============================================================================
export function sanitizeCsvCell(value: unknown): string {
  if (value === null || value === undefined) return '';
  let str = String(value);

  // Si comienza con caracteres que una hoja de cálculo interpreta como fórmula,
  // anteponer una comilla simple (') para neutralizarlo.
  const dangerousPrefixes = ['=', '+', '-', '@', '\t', '\r'];
  if (dangerousPrefixes.some(p => str.startsWith(p))) {
    str = `'${str}`;
  }

  // Escapar comillas dobles internas
  return `"${str.replace(/"/g, '""')}"`;
}
