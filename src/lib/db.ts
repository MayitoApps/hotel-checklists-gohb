import { neon } from '@neondatabase/serverless';

function getConnectionString(): string {
  if (process.env.POSTGRES_URL) return process.env.POSTGRES_URL;
  if (process.env.STORAGE_URL) return process.env.STORAGE_URL;
  if (process.env.DATABASE_URL) return process.env.DATABASE_URL;
  if (process.env.POSTGRES_PRISMA_URL) return process.env.POSTGRES_PRISMA_URL;

  // Dynamic fallback: pick up any Postgres connection string injected by Vercel
  for (const [, value] of Object.entries(process.env)) {
    if (typeof value === 'string' && (value.startsWith('postgres://') || value.startsWith('postgresql://'))) {
      return value;
    }
  }
  return '';
}

const connectionString = getConnectionString();

export const isDbConfigured = Boolean(
  connectionString && 
  (connectionString.startsWith('postgres://') || connectionString.startsWith('postgresql://'))
);

export const sql = isDbConfigured ? neon(connectionString) : null;

// Auto-crear las tablas si aún no existen en la base de datos de Vercel
let tablesEnsured = false;

export async function ensureTables() {
  if (!sql || tablesEnsured) return;

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS public.empleados (
        id TEXT PRIMARY KEY,
        numero_empleado TEXT NOT NULL,
        nombre TEXT NOT NULL,
        hotel_slug TEXT NOT NULL,
        puesto_id TEXT NOT NULL,
        puesto_nombre TEXT NOT NULL,
        area TEXT NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS public.registros_checklist (
        id TEXT PRIMARY KEY,
        hotel_slug TEXT NOT NULL,
        hotel_name TEXT NOT NULL,
        employee_id TEXT NOT NULL,
        employee_number TEXT NOT NULL,
        employee_name TEXT NOT NULL,
        puesto_id TEXT NOT NULL,
        puesto_nombre TEXT NOT NULL,
        area TEXT NOT NULL,
        date DATE NOT NULL,
        submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        total_tasks INT NOT NULL,
        completed_tasks INT NOT NULL,
        problem_tasks INT NOT NULL,
        not_applicable_tasks INT NOT NULL,
        compliance_percentage NUMERIC(5,2) NOT NULL,
        general_notes TEXT,
        tasks JSONB NOT NULL DEFAULT '[]'::jsonb,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
    `;

    await sql`
      CREATE INDEX IF NOT EXISTS idx_reg_fecha ON public.registros_checklist(date DESC);
    `;
    await sql`
      CREATE INDEX IF NOT EXISTS idx_reg_hotel ON public.registros_checklist(hotel_slug);
    `;

    tablesEnsured = true;
  } catch (err) {
    console.error('Error ensuring database tables:', err);
  }
}
