'use client';

import { Employee, HOTELS, INITIAL_EMPLOYEES } from '@/data/initialData';
import { ChecklistSubmission } from './types';

const STORAGE_KEYS = {
  EMPLOYEES: 'gohb_employees_v4',
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
// STATUS CHECK
// ==========================================
export async function checkDatabaseStatus(): Promise<{ connected: boolean; provider: string }> {
  try {
    const res = await fetch('/api/status', { cache: 'no-store' });
    if (res.ok) {
      return await res.json();
    }
  } catch (e) {
    // offline or local
  }
  return { connected: false, provider: 'Local Storage' };
}

// ==========================================
// EMPLOYEES (ADMINISTRATIVE & KIOSK LOOKUP)
// ==========================================
export function getEmployees(): Employee[] {
  const cached = getItem<Employee[]>(STORAGE_KEYS.EMPLOYEES, []);
  if (cached && cached.length > 0) {
    // Merge any missing initial employees (e.g. newly added Quinta Soledad roster)
    const existingKeys = new Set(cached.map(e => `${e.hotelSlug}_${e.numeroEmpleado}`));
    const missing = INITIAL_EMPLOYEES.filter(e => !existingKeys.has(`${e.hotelSlug}_${e.numeroEmpleado}`));
    if (missing.length > 0) {
      const merged = [...cached, ...missing];
      setItem(STORAGE_KEYS.EMPLOYEES, merged);
      return merged;
    }
    return cached;
  }
  if (INITIAL_EMPLOYEES && INITIAL_EMPLOYEES.length > 0) {
    setItem(STORAGE_KEYS.EMPLOYEES, INITIAL_EMPLOYEES);
    return INITIAL_EMPLOYEES;
  }
  return [];
}

// Para panel de administración (requiere cookie de sesión admin)
export async function fetchEmployees(): Promise<Employee[]> {
  try {
    const res = await fetch('/api/employees', { cache: 'no-store' });
    if (res.ok) {
      const json = await res.json();
      if (json.success && Array.isArray(json.data) && json.data.length > 0) {
        setItem(STORAGE_KEYS.EMPLOYEES, json.data);
        return json.data;
      }
    }
  } catch (err) {
    console.warn('API /api/employees unreachable, using local cache');
  }
  return getEmployees();
}

// Consulta segura y acotada por kiosco (solo busca al empleado puntual sin descargar toda la nómina)
export async function lookupEmployee(numeroEmpleado: string, hotelSlug: string): Promise<Employee | null> {
  const cleanNumber = numeroEmpleado.trim();
  if (!cleanNumber || !hotelSlug) return null;

  // 1. Verificar si está en caché local reciente o en INITIAL_EMPLOYEES
  const list = getEmployees();
  const cached = list.find(e => e.numeroEmpleado === cleanNumber && e.hotelSlug === hotelSlug);
  if (cached) return cached;

  // 2. Consultar endpoint acotado del servidor
  try {
    const res = await fetch(
      `/api/employees/lookup?numero=${encodeURIComponent(cleanNumber)}&hotel=${encodeURIComponent(hotelSlug)}`,
      { cache: 'no-store' }
    );
    if (res.ok) {
      const json = await res.json();
      if (json.success && json.found && json.data) {
        // Cachear únicamente a este colaborador para reingresos y offline
        const existing = getEmployees();
        const filtered = existing.filter(e => e.id !== json.data.id && e.numeroEmpleado !== json.data.numeroEmpleado);
        setItem(STORAGE_KEYS.EMPLOYEES, [json.data, ...filtered]);
        return json.data;
      }
    }
  } catch (err) {
    console.warn('Error querying /api/employees/lookup:', err);
  }

  // 3. Fallback directo a INITIAL_EMPLOYEES si fetch falla o está offline
  const directFallback = INITIAL_EMPLOYEES.find(e => e.numeroEmpleado === cleanNumber && e.hotelSlug === hotelSlug);
  if (directFallback) {
    return directFallback;
  }

  return null;
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

  try {
    await fetch('/api/employees', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(employee)
    });
  } catch (err) {
    console.error('Error syncing employee to Vercel Postgres API:', err);
  }

  return updated;
}

export async function deleteEmployee(id: string): Promise<Employee[]> {
  const list = getEmployees().filter(e => e.id !== id);
  setItem(STORAGE_KEYS.EMPLOYEES, list);

  try {
    await fetch(`/api/employees?id=${id}`, { method: 'DELETE' });
  } catch (err) {
    console.error('Error deleting employee on Vercel Postgres API:', err);
  }

  return list;
}

export async function clearAllEmployees(): Promise<Employee[]> {
  setItem(STORAGE_KEYS.EMPLOYEES, []);

  try {
    await fetch('/api/employees?confirmAll=true', { method: 'DELETE' });
  } catch (err) {
    console.error('Error clearing employees on Vercel Postgres API:', err);
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

// Para panel de administración (requiere cookie de sesión admin)
export async function fetchSubmissions(): Promise<ChecklistSubmission[]> {
  try {
    const res = await fetch('/api/submissions', { cache: 'no-store' });
    if (res.ok) {
      const json = await res.json();
      if (json.success && json.connected && Array.isArray(json.data)) {
        setItem(STORAGE_KEYS.SUBMISSIONS, json.data);
        return json.data;
      }
    }
  } catch (err) {
    console.warn('API /api/submissions unreachable, using local cache');
  }
  return getSubmissions();
}

export async function saveSubmission(submission: ChecklistSubmission): Promise<ChecklistSubmission[]> {
  const list = getSubmissions();
  const updated = [submission, ...list];
  setItem(STORAGE_KEYS.SUBMISSIONS, updated);

  try {
    await fetch('/api/submissions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(submission)
    });
  } catch (err) {
    console.error('Error syncing submission to Vercel Postgres API:', err);
  }

  return updated;
}

export async function clearAllSubmissions(): Promise<ChecklistSubmission[]> {
  setItem(STORAGE_KEYS.SUBMISSIONS, []);

  try {
    await fetch('/api/submissions?confirmAll=true', { method: 'DELETE' });
  } catch (err) {
    console.error('Error clearing submissions on Vercel Postgres API:', err);
  }

  return [];
}

// Helper to get hotel info
export function getHotelBySlug(slug: string) {
  return HOTELS.find(h => h.slug === slug) || null;
}
