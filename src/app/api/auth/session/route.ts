import { NextResponse } from 'next/server';
import { isAdminAuthenticated } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  const authenticated = await isAdminAuthenticated(req);
  return NextResponse.json({ authenticated });
}
