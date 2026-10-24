'use client';

import { Employee, HOTELS } from '@/data/initialData';
import { ChecklistSubmission } from './types';
import { supabase, isSupabaseConfigured } from './supabase';

const STORAGE_KEYS = {
  EMPLOYEES: 'gohb_employees_v2',
  SUBMISSIONS: 'gohb_submissions_v2',
};

// Safe localStorage access
function getItem<T>(key: string, defaultValue: T): T {
  if (typeof window === 'undefined') return defaultValue;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return defaultValue;
    return JSON.parse(raw);
  } catch (e) {
    console.error(`Error reading ${key} from localStorage`, e);
    return defaultValue;
  }
}

function setItem<T>(key: string, value: T): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(`Error saving ${key} to localStorage`, e);
  }
}

// ==========================================
// EMPLOYEES
// ==========================================
export function getEmployees(): Employee[] {
  return getItem<Employee[]>(STORAGE_KEYS.EMPLOYEES, []);
}

export async function fetchEmployees(): Promise<Employee[]> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('empleados')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data) {
        const mapped: Employee[] = data.map(item => ({
          id: item.id,
          numeroEmpleado: item.numero_empleado,
          nombre: item.nombre,
          hotelSlug: item.hotel_slug,
          puestoId: item.puesto_id,
          puestoNombre: item.puesto_nombre,
          area: item.area
        }));
        setItem(STORAGE_KEYS.EMPLOYEES, mapped);
        return mapped;
      }
    } catch (err) {
      console.warn('Could not fetch employees from Supabase, using local cache', err);
    }
  }
  return getEmployees();
}

export async function saveEmployee(employee: Employee): Promise<Employee[]> {
  const list = getEmployees();
  const existingIdx = list.findIndex(e => e.id === employee.id || e.numeroEmpleado === employee.numeroEmpleado);
  let updated: Employee[];
  if (existingIdx >= 0) {
    updated = [...list];
    updated[existingIdx] = employee;
  } else {
    updated = [employee, ...list];
  }
  setItem(STORAGE_KEYS.EMPLOYEES, updated);

  if (isSupabaseConfigured && supabase) {
    try {
      await supabase.from('empleados').upsert({
        id: employee.id,
        numero_empleado: employee.numeroEmpleado,
        nombre: employee.nombre,
        hotel_slug: employee.hotelSlug,
        puesto_id: employee.puestoId,
        puesto_nombre: employee.puestoNombre,
        area: employee.area
      });
    } catch (err) {
      console.error('Error saving employee to Supabase', err);
    }
  }

  return updated;
}

export async function deleteEmployee(id: string): Promise<Employee[]> {
  const list = getEmployees().filter(e => e.id !== id);
  setItem(STORAGE_KEYS.EMPLOYEES, list);

  if (isSupabaseConfigured && supabase) {
    try {
      await supabase.from('empleados').delete().eq('id', id);
    } catch (err) {
      console.error('Error deleting employee from Supabase', err);
    }
  }

  return list;
}

export async function clearAllEmployees(): Promise<Employee[]> {
  setItem(STORAGE_KEYS.EMPLOYEES, []);

  if (isSupabaseConfigured && supabase) {
    try {
      await supabase.from('empleados').delete().neq('id', '');
    } catch (err) {
      console.error('Error clearing employees in Supabase', err);
    }
  }

  return [];
}

export function findEmployeeByNumberAndHotel(numeroEmpleado: string, hotelSlug: string): Employee | null {
  const list = getEmployees();
  const cleanNumber = numeroEmpleado.trim();
  return list.find(e => e.numeroEmpleado === cleanNumber && e.hotelSlug === hotelSlug) || null;
}

// ==========================================
// SUBMISSIONS
// ==========================================
export function getSubmissions(): ChecklistSubmission[] {
  return getItem<ChecklistSubmission[]>(STORAGE_KEYS.SUBMISSIONS, []);
}

export async function fetchSubmissions(): Promise<ChecklistSubmission[]> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('registros_checklist')
        .select('*')
        .order('submitted_at', { ascending: false });

      if (!error && data) {
        const mapped: ChecklistSubmission[] = data.map(item => ({
          id: item.id,
          hotelSlug: item.hotel_slug,
          hotelName: item.hotel_name,
          employeeId: item.employee_id,
          employeeNumber: item.employee_number,
          employeeName: item.employee_name,
          puestoId: item.puesto_id,
          puestoNombre: item.puesto_nombre,
          area: item.area,
          date: item.date,
          submittedAt: item.submitted_at,
          totalTasks: item.total_tasks,
          completedTasks: item.completed_tasks,
          problemTasks: item.problem_tasks,
          notApplicableTasks: item.not_applicable_tasks,
          compliancePercentage: Number(item.compliance_percentage),
          generalNotes: item.general_notes || '',
          tasks: item.tasks || []
        }));
        setItem(STORAGE_KEYS.SUBMISSIONS, mapped);
        return mapped;
      }
    } catch (err) {
      console.warn('Could not fetch submissions from Supabase, using local cache', err);
    }
  }
  return getSubmissions();
}

export async function saveSubmission(submission: ChecklistSubmission): Promise<ChecklistSubmission[]> {
  const list = getSubmissions();
  const updated = [submission, ...list];
  setItem(STORAGE_KEYS.SUBMISSIONS, updated);

  if (isSupabaseConfigured && supabase) {
    try {
      await supabase.from('registros_checklist').insert({
        id: submission.id,
        hotel_slug: submission.hotelSlug,
        hotel_name: submission.hotelName,
        employee_id: submission.employeeId,
        employee_number: submission.employeeNumber,
        employee_name: submission.employeeName,
        puesto_id: submission.puestoId,
        puesto_nombre: submission.puestoNombre,
        area: submission.area,
        date: submission.date,
        submitted_at: submission.submittedAt,
        total_tasks: submission.totalTasks,
        completed_tasks: submission.completedTasks,
        problem_tasks: submission.problemTasks,
        not_applicable_tasks: submission.notApplicableTasks,
        compliance_percentage: submission.compliancePercentage,
        general_notes: submission.generalNotes || '',
        tasks: submission.tasks
      });
    } catch (err) {
      console.error('Error saving submission to Supabase', err);
    }
  }

  return updated;
}

export async function clearAllSubmissions(): Promise<ChecklistSubmission[]> {
  setItem(STORAGE_KEYS.SUBMISSIONS, []);

  if (isSupabaseConfigured && supabase) {
    try {
      await supabase.from('registros_checklist').delete().neq('id', '');
    } catch (err) {
      console.error('Error clearing submissions in Supabase', err);
    }
  }

  return [];
}

// Helper to get hotel info
export function getHotelBySlug(slug: string) {
  return HOTELS.find(h => h.slug === slug) || null;
}
