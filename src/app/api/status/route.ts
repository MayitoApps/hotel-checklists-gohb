import { NextResponse } from 'next/server';
import { isDbConfigured } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({
    connected: isDbConfigured,
    provider: isDbConfigured ? 'Vercel Postgres (Neon)' : 'Local Storage'
  });
}
