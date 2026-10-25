-- ========================================================
-- ESQUEMA DE BASE DE DATOS EN LA NUBE (SUPABASE / POSTGRESQL)
-- GRUPO ORGÁNICO HOTEL BOUTIQUE - SISTEMA DE CHECKLISTS DIARIOS
-- POLÍTICAS DE SEGURIDAD EMPRESARIAL Y PROTECCIÓN DE DATOS
-- ========================================================

-- 1. TABLA DE EMPLEADOS
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

-- 2. TABLA DE REGISTROS DE CHECKLIST
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

-- 3. POLÍTICAS DE ROW LEVEL SECURITY (RLS) PROTEGIDAS
-- Protege datos personales de empleados y registros confidenciales del hotel

-- Tabla: Empleados
ALTER TABLE public.empleados ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Acceso total empleados" ON public.empleados;
DROP POLICY IF EXISTS "Permitir solo backend o servicio" ON public.empleados;

-- El acceso a la nómina de empleados queda restringido al backend (service_role)
CREATE POLICY "Permitir solo backend o servicio" 
ON public.empleados 
FOR ALL 
TO service_role 
USING (true) 
WITH CHECK (true);

-- Tabla: Registros de Checklist
ALTER TABLE public.registros_checklist ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Acceso total checklists" ON public.registros_checklist;
DROP POLICY IF EXISTS "Permitir lectura solo a servicio autenticado" ON public.registros_checklist;
DROP POLICY IF EXISTS "Permitir insercion desde kiosco" ON public.registros_checklist;

-- Kioscos pueden insertar sus checklists diarios, pero no leer historiales ajenos
CREATE POLICY "Permitir insercion desde kiosco" 
ON public.registros_checklist 
FOR INSERT 
TO anon, authenticated, service_role 
WITH CHECK (
    id IS NOT NULL AND 
    hotel_slug IS NOT NULL AND 
    employee_number IS NOT NULL AND 
    date IS NOT NULL
);

-- Lectura, modificación y borrado reservado para administradores/backend (service_role)
CREATE POLICY "Permitir lectura y gestion a servicio autenticado" 
ON public.registros_checklist 
FOR ALL 
TO service_role 
USING (true) 
WITH CHECK (true);

-- 4. ÍNDICES DE ALTO RENDIMIENTO
CREATE INDEX IF NOT EXISTS idx_reg_fecha ON public.registros_checklist(date DESC);
CREATE INDEX IF NOT EXISTS idx_reg_hotel ON public.registros_checklist(hotel_slug);
CREATE INDEX IF NOT EXISTS idx_emp_hotel_num ON public.empleados(hotel_slug, numero_empleado);

-- 5. HABILITAR TIEMPO REAL SEGURO (WebSockets)
DO $$
BEGIN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.registros_checklist;
EXCEPTION WHEN OTHERS THEN
    NULL;
END $$;
