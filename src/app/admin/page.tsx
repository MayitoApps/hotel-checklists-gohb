'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Building2, 
  Users, 
  ClipboardList, 
  Calendar, 
  CalendarRange,
  Filter, 
  Search, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  PlusCircle, 
  Download,
  Trash2,
  ChevronRight,
  Eye,
  X,
  ArrowLeft,
  Lock,
  KeyRound,
  LogOut,
  ShieldAlert
} from 'lucide-react';
import { HOTELS, PUESTOS_BY_HOTEL, Employee } from '@/data/initialData';
import AdminCharts from '@/components/AdminCharts';
import { 
  getEmployees, 
  fetchEmployees,
  saveEmployee, 
  deleteEmployee, 
  getSubmissions, 
  fetchSubmissions,
  clearAllSubmissions, 
  clearAllEmployees,
  checkDatabaseStatus
} from '@/lib/storage';
import { ChecklistSubmission } from '@/lib/types';

export type DatePreset = 'today' | 'yesterday' | 'week' | 'month' | 'prev_month' | 'all' | 'custom';

function toLocalIso(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function getPresetDates(preset: DatePreset): { start: string; end: string } {
  const now = new Date();
  const today = toLocalIso(now);

  switch (preset) {
    case 'today':
      return { start: today, end: today };
    case 'yesterday': {
      const y = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
      const yStr = toLocalIso(y);
      return { start: yStr, end: yStr };
    }
    case 'week': {
      const w = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 6);
      return { start: toLocalIso(w), end: today };
    }
    case 'month': {
      const mStart = new Date(now.getFullYear(), now.getMonth(), 1);
      return { start: toLocalIso(mStart), end: today };
    }
    case 'prev_month': {
      const pmStart = new Date(now.getFullYear(), now.getMonth() - 1, 1);
      const pmEnd = new Date(now.getFullYear(), now.getMonth(), 0);
      return { start: toLocalIso(pmStart), end: toLocalIso(pmEnd) };
    }
    case 'all':
      return { start: '', end: '' };
    case 'custom':
    default:
      return { start: today, end: today };
  }
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [pinInput, setPinInput] = useState<string>('');
  const [pinError, setPinError] = useState<string>('');
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);
  const pinInputRef = useRef<HTMLInputElement>(null);

  const [activeTab, setActiveTab] = useState<'monitor' | 'employees' | 'tasks'>('monitor');
  const [submissions, setSubmissions] = useState<ChecklistSubmission[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [dbStatus, setDbStatus] = useState<{ connected: boolean; provider: string }>({ connected: false, provider: 'Local Storage' });

  // Filters: Date Range & Hotel
  const [datePreset, setDatePreset] = useState<DatePreset>('today');
  const [startDate, setStartDate] = useState<string>(toLocalIso(new Date()));
  const [endDate, setEndDate] = useState<string>(toLocalIso(new Date()));
  const [showCustomPicker, setShowCustomPicker] = useState<boolean>(false);
  const [selectedHotel, setSelectedHotel] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSubmission, setSelectedSubmission] = useState<ChecklistSubmission | null>(null);

  const selectedDate = startDate === endDate ? startDate : '';

  const handleSelectPreset = (preset: DatePreset) => {
    setDatePreset(preset);
    if (preset === 'custom') {
      setShowCustomPicker(true);
    } else {
      setShowCustomPicker(false);
      const dates = getPresetDates(preset);
      setStartDate(dates.start);
      setEndDate(dates.end);
    }
  };

  const dateRangeLabel = useMemo(() => {
    if (datePreset === 'all') return 'Todo el Historial';
    if (datePreset === 'today') return `Hoy (${startDate})`;
    if (datePreset === 'yesterday') return `Ayer (${startDate})`;
    if (datePreset === 'week') return `Últimos 7 días (${startDate} al ${endDate})`;
    if (datePreset === 'month') return `Este Mes (${startDate} al ${endDate})`;
    if (datePreset === 'prev_month') return `Mes Anterior (${startDate} al ${endDate})`;
    if (startDate === endDate) return startDate;
    return `${startDate} al ${endDate}`;
  }, [datePreset, startDate, endDate]);

  // New Employee Form State
  const [newEmpNum, setNewEmpNum] = useState('');
  const [newEmpName, setNewEmpName] = useState('');
  const [newEmpHotel, setNewEmpHotel] = useState(HOTELS[0].slug);
  const [newEmpPuestoId, setNewEmpPuestoId] = useState('');
  const [empFormMessage, setEmpFormMessage] = useState({ text: '', type: '' });

  // Task Inspector State
  const [taskInspectorHotel, setTaskInspectorHotel] = useState(HOTELS[0].slug);
  const [taskInspectorPuestoId, setTaskInspectorPuestoId] = useState('');

  // Check auth session on mount via secure server endpoint
  useEffect(() => {
    fetch('/api/auth/session')
      .then(res => res.json())
      .then(data => {
        if (data?.authenticated) {
          setIsAuthenticated(true);
        }
      })
      .catch(() => {});
  }, []);

  // Focus PIN input when unauthenticated
  useEffect(() => {
    if (!isAuthenticated && pinInputRef.current) {
      pinInputRef.current.focus();
    }
  }, [isAuthenticated]);

  // Load data and auto-refresh every 5 seconds for real-time monitoring across hotels
  useEffect(() => {
    if (!isAuthenticated) return;

    checkDatabaseStatus().then(status => setDbStatus(status));

    const loadData = () => {
      fetchSubmissions().then(subs => setSubmissions(subs));
      fetchEmployees().then(emps => setEmployees(emps));
    };

    setSubmissions(getSubmissions());
    setEmployees(getEmployees());
    loadData();

    // Auto-polling for real-time live updates
    const interval = setInterval(() => {
      loadData();
      checkDatabaseStatus().then(status => setDbStatus(status));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAuthenticated]);

  // Set default puestoId when newEmpHotel changes
  useEffect(() => {
    const puestos = PUESTOS_BY_HOTEL[newEmpHotel] || [];
    if (puestos.length > 0) {
      setNewEmpPuestoId(puestos[0].id);
    }
  }, [newEmpHotel]);

  // Set default task inspector puesto when hotel changes
  useEffect(() => {
    const puestos = PUESTOS_BY_HOTEL[taskInspectorHotel] || [];
    if (puestos.length > 0) {
      setTaskInspectorPuestoId(puestos[0].id);
    }
  }, [taskInspectorHotel]);

  // Handle PIN Submission via secure server endpoint
  const handlePinSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPinError('');

    const entered = pinInput.trim();
    if (!entered) {
      setPinError('Por favor ingresa tu código de acceso.');
      return;
    }

    setIsLoggingIn(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pin: entered })
      });
      const data = await res.json();
      if (data.success) {
        setIsAuthenticated(true);
        setPinInput('');
      } else {
        setPinError(data.error || 'Código incorrecto. Verifica la clave de administrador.');
      }
    } catch {
      setPinError('Error al conectar con el servidor de autenticación.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch {}
    setIsAuthenticated(false);
    setPinInput('');
  };

  // Filtered Submissions by Hotel, Date Range and Search Query
  const filteredSubmissions = useMemo(() => {
    return submissions.filter(sub => {
      const matchHotel = selectedHotel === 'all' || sub.hotelSlug === selectedHotel;
      const matchDate = (!startDate || sub.date >= startDate) && (!endDate || sub.date <= endDate);
      const q = searchQuery.toLowerCase().trim();
      const matchSearch = !q || 
        sub.employeeName.toLowerCase().includes(q) || 
        sub.employeeNumber.includes(q) || 
        sub.puestoNombre.toLowerCase().includes(q) ||
        sub.area.toLowerCase().includes(q);
      return matchHotel && matchDate && matchSearch;
    });
  }, [submissions, selectedHotel, startDate, endDate, searchQuery]);

  // Hotel KPI Metrics (aggregated over selected date range)
  const hotelStats = useMemo(() => {
    return HOTELS.map(hotel => {
      const hotelSubs = submissions.filter(s => {
        const matchHotel = s.hotelSlug === hotel.slug;
        const matchDate = (!startDate || s.date >= startDate) && (!endDate || s.date <= endDate);
        return matchHotel && matchDate;
      });
      const totalSubs = hotelSubs.length;
      const avgCompliance = totalSubs > 0 
        ? Math.round(hotelSubs.reduce((acc, s) => acc + s.compliancePercentage, 0) / totalSubs)
        : 0;
      const problemCount = hotelSubs.reduce((acc, s) => acc + s.problemTasks, 0);

      return {
        ...hotel,
        totalSubmissions: totalSubs,
        avgCompliance,
        problemCount
      };
    });
  }, [submissions, startDate, endDate]);

  // Handle adding employee
  const handleAddEmployee = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEmpNum.trim() || !newEmpName.trim()) {
      setEmpFormMessage({ text: 'Por favor completa todos los campos requeridos.', type: 'error' });
      return;
    }

    const hotelPuestos = PUESTOS_BY_HOTEL[newEmpHotel] || [];
    const puesto = hotelPuestos.find(p => p.id === newEmpPuestoId) || hotelPuestos[0];

    if (!puesto) {
      setEmpFormMessage({ text: 'No hay puestos ni formularios configurados para este hotel. Primero deben cargarse los puestos.', type: 'error' });
      return;
    }

    const newEmp: Employee = {
      id: `emp_${Date.now()}`,
      numeroEmpleado: newEmpNum.trim(),
      nombre: newEmpName.trim(),
      hotelSlug: newEmpHotel,
      puestoId: puesto.id,
      puestoNombre: puesto.nombre,
      area: puesto.area
    };

    const updated = await saveEmployee(newEmp);
    setEmployees(updated);
    setNewEmpNum('');
    setNewEmpName('');
    setEmpFormMessage({ text: `Empleado ${newEmp.nombre} (#${newEmp.numeroEmpleado}) guardado exitosamente.`, type: 'success' });
    setTimeout(() => setEmpFormMessage({ text: '', type: '' }), 4000);
  };

  const handleDeleteEmployee = async (id: string, name: string) => {
    if (confirm(`¿Estás seguro de eliminar al empleado ${name}?`)) {
      const updated = await deleteEmployee(id);
      setEmployees(updated);
    }
  };

  const handleClearSubmissions = async () => {
    if (confirm('¿Estás seguro de que deseas eliminar TODOS los registros de checklist? Esta acción no se puede deshacer.')) {
      await clearAllSubmissions();
      setSubmissions([]);
      setSelectedSubmission(null);
    }
  };

  const handleClearEmployees = async () => {
    if (confirm('¿Estás seguro de que deseas eliminar TODOS los empleados registrados?')) {
      await clearAllEmployees();
      setEmployees([]);
    }
  };

  // Export to CSV con sanitización contra Inyección de Fórmulas (CWE-1236)
  const handleExportCSV = () => {
    if (filteredSubmissions.length === 0) {
      alert('No hay registros en el filtro actual para exportar.');
      return;
    }

    const cleanCell = (val: unknown): string => {
      if (val === null || val === undefined) return '""';
      let str = String(val);
      const dangerousPrefixes = ['=', '+', '-', '@', '\t', '\r'];
      if (dangerousPrefixes.some(p => str.startsWith(p))) {
        str = `'${str}`;
      }
      return `"${str.replace(/"/g, '""')}"`;
    };

    const headers = ['ID', 'Hotel', 'Fecha', 'Hora', 'Num_Empleado', 'Nombre_Empleado', 'Puesto', 'Area', 'Total_Tareas', 'Completadas', 'Problemas', 'No_Aplica', 'Cumplimiento_%', 'Notas_Generales'];
    const rows = filteredSubmissions.map(s => [
      cleanCell(s.id),
      cleanCell(s.hotelName),
      cleanCell(s.date),
      cleanCell(new Date(s.submittedAt).toLocaleTimeString('es-MX')),
      cleanCell(s.employeeNumber),
      cleanCell(s.employeeName),
      cleanCell(s.puestoNombre),
      cleanCell(s.area),
      s.totalTasks,
      s.completedTasks,
      s.problemTasks,
      s.notApplicableTasks,
      cleanCell(`${s.compliancePercentage}%`),
      cleanCell(s.generalNotes || '')
    ]);

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `checklists_${selectedHotel}_${startDate || 'inicio'}_al_${endDate || 'actual'}.csv`;
    link.click();
  };

  // ==========================================
  // VIEW: AUTHENTICATION LOCK SCREEN
  // ==========================================
  if (!isAuthenticated) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'var(--bg-app)',
        padding: '1.5rem'
      }}>
        <div className="login-kiosk-box animate-fade-in" style={{ maxWidth: '440px', width: '100%', padding: 'clamp(2rem, 5vw, 3rem) clamp(1.25rem, 4vw, 2rem)' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <Image
              src="/logos/gohb-negro.png"
              alt="Grupo Orgánico Hotel Boutique"
              width={160}
              height={55}
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>

          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'var(--color-gold-light)',
            color: 'var(--color-gold)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.25rem auto'
          }}>
            <Lock size={28} />
          </div>

          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.35rem' }}>
            Acceso Administrativo
          </h2>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-subtle)', marginBottom: '1.75rem' }}>
            Ingresa tu código de seguridad para acceder al panel de supervisión de hoteles.
          </p>

          <form onSubmit={handlePinSubmit}>
            <div style={{ marginBottom: '1.25rem' }}>
              <input
                ref={pinInputRef}
                type="password"
                inputMode="numeric"
                pattern="[0-9]*"
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                placeholder="Código de acceso"
                className="kiosk-number-input"
                style={{ fontSize: '1.5rem', letterSpacing: '0.2em' }}
              />
            </div>

            {pinError && (
              <div style={{
                background: '#fef2f2',
                border: '1px solid #fecaca',
                color: '#991b1b',
                padding: '0.65rem 0.85rem',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.85rem',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                textAlign: 'left'
              }}>
                <ShieldAlert size={16} style={{ flexShrink: 0 }} />
                <span>{pinError}</span>
              </div>
            )}

            <button type="submit" className="btn-primary" style={{ padding: '0.85rem' }} disabled={isLoggingIn}>
              <KeyRound size={18} />
              <span>{isLoggingIn ? 'Verificando...' : 'Entrar al Dashboard'}</span>
            </button>
          </form>

          <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-light)' }}>
            <Link
              href="/"
              style={{
                fontSize: '0.85rem',
                color: 'var(--text-subtle)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                textDecoration: 'none'
              }}
            >
              <ArrowLeft size={15} />
              <span>Volver a la selección de hoteles</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // VIEW: AUTHENTICATED DASHBOARD
  // ==========================================
  return (
    <div className="admin-layout">
      {/* Top Admin Navbar */}
      <nav className="admin-navbar">
        <div className="admin-brand">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#ffffff' }}>
              <ArrowLeft size={16} />
              <span>Portal</span>
            </Link>
            <span style={{ opacity: 0.3 }}>/</span>
            <span style={{ color: 'var(--color-gold)' }}>Supervisión</span>
            {dbStatus.connected ? (
              <span style={{
                fontSize: '0.72rem',
                background: 'rgba(34, 197, 94, 0.15)',
                color: '#86efac',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                padding: '0.15rem 0.5rem',
                borderRadius: 'var(--radius-full)',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                Base Vercel en Vivo
              </span>
            ) : (
              <span style={{
                fontSize: '0.72rem',
                background: 'rgba(234, 179, 8, 0.15)',
                color: '#fde047',
                border: '1px solid rgba(234, 179, 8, 0.3)',
                padding: '0.15rem 0.5rem',
                borderRadius: 'var(--radius-full)',
                fontWeight: 600
              }}>
                Modo Local (Sin BD Vercel)
              </span>
            )}
          </div>
        </div>

        <div className="admin-nav-links">
          <button
            type="button"
            onClick={() => setActiveTab('monitor')}
            className={`admin-nav-item ${activeTab === 'monitor' ? 'active' : ''}`}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            📊 Monitoreo Diario
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('employees')}
            className={`admin-nav-item ${activeTab === 'employees' ? 'active' : ''}`}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            👥 Gestión de Empleados
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('tasks')}
            className={`admin-nav-item ${activeTab === 'tasks' ? 'active' : ''}`}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            📋 Catálogo de Tareas
          </button>

          <button
            type="button"
            onClick={handleLogout}
            className="admin-nav-item"
            style={{
              background: 'rgba(239, 68, 68, 0.15)',
              color: '#fca5a5',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}
            title="Bloquear sesión"
          >
            <LogOut size={15} />
            <span>Salir</span>
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="admin-content">
        {/* TAB 1: DAILY MONITOR */}
        {activeTab === 'monitor' && (
          <div className="animate-fade-in">
            {/* Header with Title and Global Actions */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
                  Control Operativo y Cumplimiento
                </h1>
                <p style={{ color: 'var(--text-subtle)', fontSize: '0.9rem' }}>
                  Supervisa en tiempo real el llenado de checklists por hotel, puesto y turno en el periodo seleccionado.
                </p>
              </div>

              <div className="admin-date-actions">
                <button
                  type="button"
                  onClick={handleExportCSV}
                  className="btn-secondary"
                  style={{ padding: '0.5rem 1rem' }}
                >
                  <Download size={16} />
                  <span>Exportar a Excel ({filteredSubmissions.length})</span>
                </button>

                {submissions.length > 0 && (
                  <button
                    type="button"
                    onClick={handleClearSubmissions}
                    className="btn-secondary"
                    style={{ padding: '0.5rem 1rem', color: '#dc2626', borderColor: '#fecaca', background: '#fef2f2' }}
                    title="Eliminar todos los registros de checklist"
                  >
                    <Trash2 size={16} />
                    <span>Vaciar Registros</span>
                  </button>
                )}
              </div>
            </div>

            {/* DATE RANGE PRESETS BAR (Daily, Weekly, Monthly, Historical, Custom) */}
            <div className="card" style={{ padding: '0.95rem 1.25rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
                {/* Presets Button Group */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-subtle)', textTransform: 'uppercase', marginRight: '0.25rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                    <CalendarRange size={15} color="var(--color-gold)" />
                    Periodo:
                  </span>
                  {(
                    [
                      { id: 'today', label: 'Hoy' },
                      { id: 'yesterday', label: 'Ayer' },
                      { id: 'week', label: 'Últimos 7 días' },
                      { id: 'month', label: 'Este Mes' },
                      { id: 'prev_month', label: 'Mes Anterior' },
                      { id: 'all', label: 'Histórico' },
                      { id: 'custom', label: 'Personalizado' },
                    ] as { id: DatePreset; label: string }[]
                  ).map(p => {
                    const isActive = datePreset === p.id;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => handleSelectPreset(p.id)}
                        style={{
                          padding: '0.35rem 0.85rem',
                          borderRadius: 'var(--radius-full)',
                          fontSize: '0.8rem',
                          fontWeight: isActive ? 700 : 500,
                          border: `1.5px solid ${isActive ? 'var(--color-gold)' : 'var(--border-light)'}`,
                          background: isActive ? 'var(--color-gold)' : 'var(--bg-subtle)',
                          color: isActive ? '#ffffff' : 'var(--text-main)',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        {p.label}
                      </button>
                    );
                  })}
                </div>

                {/* Range Indicator Badge */}
                <div style={{
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--text-muted)',
                  background: 'var(--bg-subtle)',
                  padding: '0.35rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--border-light)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}>
                  <Calendar size={14} color="var(--color-gold)" />
                  <span>{dateRangeLabel}</span>
                  <span style={{ color: 'var(--color-brand)', fontWeight: 700 }}>
                    • {filteredSubmissions.length} {filteredSubmissions.length === 1 ? 'checklist' : 'checklists'}
                  </span>
                </div>
              </div>

              {/* Expandable Custom Date Picker */}
              {showCustomPicker && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  marginTop: '0.85rem',
                  paddingTop: '0.85rem',
                  borderTop: '1px dashed var(--border-light)',
                  flexWrap: 'wrap'
                }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-subtle)' }}>Desde:</span>
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => {
                        setStartDate(e.target.value);
                        setDatePreset('custom');
                      }}
                      style={{
                        padding: '0.35rem 0.65rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-light)',
                        fontSize: '0.85rem',
                        color: 'var(--text-main)',
                        background: '#ffffff'
                      }}
                    />
                  </div>

                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-subtle)' }}>Hasta:</span>
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => {
                        setEndDate(e.target.value);
                        setDatePreset('custom');
                      }}
                      style={{
                        padding: '0.35rem 0.65rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-light)',
                        fontSize: '0.85rem',
                        color: 'var(--text-main)',
                        background: '#ffffff'
                      }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Hotel KPI Cards */}
            <div className="hotel-kpi-grid">
              {hotelStats.map(stat => (
                <div 
                  key={stat.id} 
                  className="kpi-card"
                  onClick={() => setSelectedHotel(stat.slug === selectedHotel ? 'all' : stat.slug)}
                  style={{
                    cursor: 'pointer',
                    borderColor: selectedHotel === stat.slug ? 'var(--color-gold)' : 'var(--border-light)',
                    background: selectedHotel === stat.slug ? '#fcfbf8' : '#ffffff'
                  }}
                >
                  <p className="kpi-hotel-title">{stat.shortName}</p>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                    <span className="kpi-value">
                      {stat.totalSubmissions > 0 ? `${stat.avgCompliance}%` : '—'}
                    </span>
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: stat.totalSubmissions > 0 ? 'var(--color-success)' : 'var(--text-light)' }}>
                      {stat.totalSubmissions} checklist{stat.totalSubmissions === 1 ? '' : 's'}
                    </span>
                  </div>
                  {stat.problemCount > 0 ? (
                    <p className="kpi-subtitle" style={{ color: 'var(--color-warning)', fontWeight: 600 }}>
                      ⚠️ {stat.problemCount} incidencia{stat.problemCount === 1 ? '' : 's'} reportada{stat.problemCount === 1 ? '' : 's'}
                    </p>
                  ) : (
                    <p className="kpi-subtitle">
                      {stat.totalSubmissions > 0 ? 'Sin incidencias reportadas' : 'Sin registros en el periodo'}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Visual Charts: Tasks Status by Hotel & Group Distribution */}
            <AdminCharts
              submissions={submissions}
              startDate={startDate}
              endDate={endDate}
              dateLabel={dateRangeLabel}
              selectedHotel={selectedHotel}
              onSelectHotel={setSelectedHotel}
              hotels={HOTELS}
            />

            {/* Filter Bar */}
            <div className="card admin-filter-bar" style={{ padding: '1rem 1.5rem', marginBottom: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1, minWidth: '220px' }}>
                <Search size={18} color="var(--text-subtle)" />
                <input
                  type="text"
                  placeholder="Buscar por empleado, número o puesto..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ width: '100%', border: 'none', outline: 'none', fontSize: '0.9rem' }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Filter size={16} color="var(--text-subtle)" />
                <select
                  value={selectedHotel}
                  onChange={(e) => setSelectedHotel(e.target.value)}
                  style={{
                    padding: '0.45rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-light)',
                    background: 'var(--bg-app)',
                    fontSize: '0.85rem'
                  }}
                >
                  <option value="all">Todos los Hoteles</option>
                  {HOTELS.map(h => (
                    <option key={h.id} value={h.slug}>{h.shortName}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Submissions Table */}
            {filteredSubmissions.length === 0 ? (
              <div className="card" style={{ textAlign: 'center', padding: '3.5rem 1.5rem', color: 'var(--text-muted)' }}>
                <Clock size={40} style={{ opacity: 0.3, marginBottom: '0.75rem' }} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                  No se encontraron registros de checklist
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-subtle)' }}>
                  Aún no se han enviado checklists en el periodo seleccionado ({dateRangeLabel}).
                </p>
              </div>
            ) : (
              <>
                {/* Desktop View: Full Table */}
                <div className="desktop-table-container card" style={{ padding: 0, overflow: 'hidden' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                    <thead>
                      <tr style={{ background: 'var(--bg-subtle)', borderBottom: '1px solid var(--border-light)', color: 'var(--text-subtle)', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase' }}>
                        <th style={{ padding: '0.85rem 1.25rem' }}>Fecha / Hora</th>
                        <th style={{ padding: '0.85rem 1.25rem' }}>Hotel</th>
                        <th style={{ padding: '0.85rem 1.25rem' }}>Empleado</th>
                        <th style={{ padding: '0.85rem 1.25rem' }}>Puesto / Área</th>
                        <th style={{ padding: '0.85rem 1.25rem' }}>Cumplimiento</th>
                        <th style={{ padding: '0.85rem 1.25rem' }}>Incidencias</th>
                        <th style={{ padding: '0.85rem 1.25rem', textAlign: 'right' }}>Acción</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredSubmissions.map(sub => {
                        const timeStr = new Date(sub.submittedAt).toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' });
                        const isHigh = sub.compliancePercentage >= 90;
                        const isMedium = sub.compliancePercentage >= 70 && sub.compliancePercentage < 90;

                        return (
                          <tr 
                            key={sub.id} 
                            style={{ borderBottom: '1px solid var(--border-light)', transition: 'background 0.15s ease' }}
                            onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-subtle)'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                          >
                            <td style={{ padding: '0.85rem 1.25rem', color: 'var(--text-main)', fontWeight: 500 }}>
                              <div style={{ fontWeight: 600 }}>{timeStr}</div>
                              <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>{sub.date}</div>
                            </td>
                            <td style={{ padding: '0.85rem 1.25rem', fontWeight: 600, color: 'var(--text-main)' }}>
                              {sub.hotelName}
                            </td>
                            <td style={{ padding: '0.85rem 1.25rem' }}>
                              <div style={{ fontWeight: 600 }}>{sub.employeeName}</div>
                              <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>#{sub.employeeNumber}</div>
                            </td>
                            <td style={{ padding: '0.85rem 1.25rem' }}>
                              <span style={{
                                display: 'inline-block',
                                background: 'var(--bg-subtle)',
                                padding: '0.2rem 0.55rem',
                                borderRadius: 'var(--radius-sm)',
                                fontSize: '0.8rem',
                                fontWeight: 500
                              }}>
                                {sub.puestoNombre}
                              </span>
                            </td>
                            <td style={{ padding: '0.85rem 1.25rem' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{
                                  fontWeight: 700,
                                  color: isHigh ? 'var(--color-success)' : isMedium ? 'var(--color-warning)' : '#dc2626'
                                }}>
                                  {sub.compliancePercentage}%
                                </span>
                                <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>
                                  ({sub.completedTasks}/{sub.totalTasks})
                                </span>
                              </div>
                            </td>
                            <td style={{ padding: '0.85rem 1.25rem' }}>
                              {sub.problemTasks > 0 ? (
                                <span style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '0.3rem',
                                  color: 'var(--color-warning)',
                                  fontWeight: 600,
                                  fontSize: '0.8rem'
                                }}>
                                  <AlertTriangle size={14} />
                                  <span>{sub.problemTasks} con problema</span>
                                </span>
                              ) : (
                                <span style={{ color: 'var(--color-success)', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                                  <CheckCircle2 size={14} />
                                  <span>Sin problemas</span>
                                </span>
                              )}
                            </td>
                            <td style={{ padding: '0.85rem 1.25rem', textAlign: 'right' }}>
                              <button
                                type="button"
                                onClick={() => setSelectedSubmission(sub)}
                                className="btn-secondary"
                                style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem' }}
                              >
                                <Eye size={14} />
                                <span>Ver</span>
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Mobile View: High-Touch Cards */}
                <div className="mobile-card-list">
                  {filteredSubmissions.map(sub => {
                    const timeStr = new Date(sub.submittedAt).toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' });
                    const isHigh = sub.compliancePercentage >= 90;
                    const isMedium = sub.compliancePercentage >= 70 && sub.compliancePercentage < 90;

                    return (
                      <div key={sub.id} className="mobile-submission-card">
                        <div className="mobile-card-header">
                          <span className="mobile-hotel-badge">{sub.hotelName}</span>
                          <span className="mobile-time-badge">
                            <Clock size={12} />
                            {sub.date} • {timeStr}
                          </span>
                        </div>

                        <div className="mobile-emp-row">
                          <span className="mobile-emp-name">{sub.employeeName}</span>
                          <span className="mobile-emp-id">#{sub.employeeNumber}</span>
                        </div>

                        <div>
                          <span className="mobile-role-pill">
                            {sub.puestoNombre} • {sub.area}
                          </span>
                        </div>

                        <div className="mobile-stats-row">
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{
                              fontWeight: 800,
                              fontSize: '1rem',
                              color: isHigh ? 'var(--color-success)' : isMedium ? 'var(--color-warning)' : '#dc2626'
                            }}>
                              {sub.compliancePercentage}%
                            </span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>
                              ({sub.completedTasks}/{sub.totalTasks} tareas)
                            </span>
                          </div>

                          {sub.problemTasks > 0 ? (
                            <span style={{ color: 'var(--color-warning)', fontWeight: 600, fontSize: '0.75rem', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                              <AlertTriangle size={13} />
                              {sub.problemTasks} incidencia{sub.problemTasks === 1 ? '' : 's'}
                            </span>
                          ) : (
                            <span style={{ color: 'var(--color-success)', fontSize: '0.75rem', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontWeight: 600 }}>
                              <CheckCircle2 size={13} />
                              Sin problemas
                            </span>
                          )}
                        </div>

                        <button
                          type="button"
                          onClick={() => setSelectedSubmission(sub)}
                          className="btn-secondary"
                          style={{
                            width: '100%',
                            marginTop: '0.25rem',
                            padding: '0.65rem',
                            fontSize: '0.85rem',
                            justifyContent: 'center',
                            minHeight: '44px'
                          }}
                        >
                          <Eye size={15} />
                          <span>Ver Detalle del Checklist</span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        )}

        {/* TAB 2: EMPLOYEE MANAGEMENT */}
        {activeTab === 'employees' && (
          <div className="animate-fade-in">
            <div style={{ marginBottom: '1.5rem' }}>
              <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
                Gestión de Empleados
              </h1>
              <p style={{ color: 'var(--text-subtle)', fontSize: '0.9rem' }}>
                Asigna a cada trabajador su número único y puesto en el hotel correspondiente.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 290px), 1fr))', gap: '1.5rem' }}>
              {/* Form: Add New Employee */}
              <div className="card">
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <PlusCircle size={20} color="var(--color-gold)" />
                  <span>Dar de Alta Nuevo Empleado</span>
                </h3>

                {empFormMessage.text && (
                  <div style={{
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.85rem',
                    marginBottom: '1rem',
                    background: empFormMessage.type === 'success' ? 'var(--color-success-bg)' : '#fef2f2',
                    color: empFormMessage.type === 'success' ? 'var(--color-success)' : '#991b1b',
                    border: `1px solid ${empFormMessage.type === 'success' ? 'var(--color-success-border)' : '#fecaca'}`
                  }}>
                    {empFormMessage.text}
                  </div>
                )}

                <form onSubmit={handleAddEmployee}>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem', color: 'var(--text-main)' }}>
                      Hotel de Pertenencia:
                    </label>
                    <select
                      value={newEmpHotel}
                      onChange={(e) => setNewEmpHotel(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.65rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-light)',
                        background: 'var(--bg-app)'
                      }}
                    >
                      {HOTELS.map(h => (
                        <option key={h.id} value={h.slug}>{h.name}</option>
                      ))}
                    </select>
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem', color: 'var(--text-main)' }}>
                      Puesto Asignado:
                    </label>
                    <select
                      value={newEmpPuestoId}
                      onChange={(e) => setNewEmpPuestoId(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.65rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-light)',
                        background: 'var(--bg-app)'
                      }}
                    >
                      {(PUESTOS_BY_HOTEL[newEmpHotel] || []).length > 0 ? (
                        (PUESTOS_BY_HOTEL[newEmpHotel] || []).map(p => (
                          <option key={p.id} value={p.id}>
                            {p.nombre} ({p.area}) - {p.tasks.length} tareas
                          </option>
                        ))
                      ) : (
                        <option value="">(Sin puestos configurados aún)</option>
                      )}
                    </select>
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem', color: 'var(--text-main)' }}>
                      Número de Empleado (PIN de acceso):
                    </label>
                    <input
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      placeholder="Ej. 105"
                      value={newEmpNum}
                      onChange={(e) => setNewEmpNum(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.65rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-light)',
                        background: 'var(--bg-app)'
                      }}
                    />
                    <small style={{ color: 'var(--text-subtle)', fontSize: '0.75rem' }}>
                      Este número lo tecleará el empleado en la computadora de su hotel.
                    </small>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem', color: 'var(--text-main)' }}>
                      Nombre Completo:
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. Juan Manuel Pérez"
                      value={newEmpName}
                      onChange={(e) => setNewEmpName(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.65rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-light)',
                        background: 'var(--bg-app)'
                      }}
                    />
                  </div>

                  <button type="submit" className="btn-primary">
                    <PlusCircle size={18} />
                    <span>Guardar y Asignar Empleado</span>
                  </button>
                </form>
              </div>

              {/* List of Registered Employees */}
              <div className="card" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span>Empleados Registrados ({employees.length})</span>
                  {employees.length > 0 && (
                    <button
                      type="button"
                      onClick={handleClearEmployees}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#ef4444',
                        fontSize: '0.8rem',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.25rem'
                      }}
                      title="Eliminar todos los empleados"
                    >
                      <Trash2 size={14} />
                      <span>Vaciar Todos</span>
                    </button>
                  )}
                </h3>

                <div style={{ maxHeight: '450px', overflowY: 'auto' }}>
                  {employees.length === 0 ? (
                    <div style={{ padding: '2.5rem 1rem', textAlign: 'center', color: 'var(--text-subtle)' }}>
                      <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.25rem' }}>No hay colaboradores registrados</p>
                      <p style={{ fontSize: '0.8rem' }}>La plantilla y numeración se encuentran en blanco a la espera de los nuevos datos.</p>
                    </div>
                  ) : (
                    employees.map(emp => {
                    const hotelObj = HOTELS.find(h => h.slug === emp.hotelSlug);
                    return (
                      <div
                        key={emp.id}
                        style={{
                          padding: '0.85rem',
                          borderBottom: '1px solid var(--border-light)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <div>
                          <div style={{ fontWeight: 600, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{
                              background: 'var(--bg-subtle)',
                              padding: '0.15rem 0.45rem',
                              borderRadius: 'var(--radius-sm)',
                              fontSize: '0.75rem',
                              color: 'var(--text-muted)'
                            }}>
                              #{emp.numeroEmpleado}
                            </span>
                            <span>{emp.nombre}</span>
                          </div>
                          <div style={{ fontSize: '0.8rem', color: 'var(--text-subtle)', marginTop: '0.2rem' }}>
                            {emp.puestoNombre} • <em>{hotelObj?.shortName || emp.hotelSlug}</em>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleDeleteEmployee(emp.id, emp.nombre)}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: '#ef4444',
                            cursor: 'pointer',
                            padding: '0.4rem',
                            opacity: 0.7
                          }}
                          title="Eliminar empleado"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    );
                  }))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: TASK CATALOG INSPECTOR */}
        {activeTab === 'tasks' && (
          <div className="animate-fade-in">
            <div style={{ marginBottom: '1.5rem' }}>
              <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
                Catálogo de Puestos y Tareas Extraídas
              </h1>
              <p style={{ color: 'var(--text-subtle)', fontSize: '0.9rem' }}>
                Consulta el árbol exacto de actividades diarias extraídas de tus hojas de Excel por puesto.
              </p>
            </div>

            <div className="card" style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '220px' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.3rem', color: 'var(--text-subtle)' }}>
                  Seleccionar Hotel:
                </label>
                <select
                  value={taskInspectorHotel}
                  onChange={(e) => setTaskInspectorHotel(e.target.value)}
                  style={{ width: '100%', padding: '0.6rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}
                >
                  {HOTELS.map(h => (
                    <option key={h.id} value={h.slug}>{h.name}</option>
                  ))}
                </select>
              </div>

              <div style={{ flex: 1, minWidth: '240px' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.3rem', color: 'var(--text-subtle)' }}>
                  Seleccionar Puesto:
                </label>
                <select
                  value={taskInspectorPuestoId}
                  onChange={(e) => setTaskInspectorPuestoId(e.target.value)}
                  style={{ width: '100%', padding: '0.6rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}
                >
                  {(PUESTOS_BY_HOTEL[taskInspectorHotel] || []).length > 0 ? (
                    (PUESTOS_BY_HOTEL[taskInspectorHotel] || []).map(p => (
                      <option key={p.id} value={p.id}>
                        {p.nombre} ({p.area}) — {p.tasks.length} tareas
                      </option>
                    ))
                  ) : (
                    <option value="">(Sin puestos ni formularios registrados)</option>
                  )}
                </select>
              </div>
            </div>

            {/* Display tasks */}
            {(() => {
              const currentPuestos = PUESTOS_BY_HOTEL[taskInspectorHotel] || [];
              const selectedP = currentPuestos.find(p => p.id === taskInspectorPuestoId) || currentPuestos[0];

              if (!selectedP) {
                return (
                  <div className="card" style={{ textAlign: 'center', padding: '3.5rem 1.5rem', background: '#ffffff' }}>
                    <div style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: 'var(--bg-app)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.25rem auto',
                      color: 'var(--text-subtle)'
                    }}>
                      <Building2 size={28} />
                    </div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                      No hay puestos ni formularios en este hotel
                    </h3>
                    <p style={{ color: 'var(--text-subtle)', fontSize: '0.9rem', maxWidth: '480px', margin: '0 auto', lineHeight: 1.5 }}>
                      El catálogo y los checklists de este hotel han sido vaciados y se encuentran en blanco, listos para recibir la nueva estructura de puestos y tareas.
                    </p>
                  </div>
                );
              }

              return (
                <div className="card">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-light)' }}>
                    <div>
                      <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-main)' }}>
                        {selectedP.nombre}
                      </h2>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-subtle)' }}>
                        Área: <strong>{selectedP.area}</strong> • Total: <strong>{selectedP.tasks.length} actividades</strong>
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {selectedP.tasks.map((task, idx) => (
                      <div
                        key={task.id}
                        style={{
                          padding: '0.85rem 1rem',
                          background: 'var(--bg-app)',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border-light)',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.75rem'
                        }}
                      >
                        <span style={{
                          background: '#ffffff',
                          border: '1px solid var(--border-light)',
                          color: 'var(--text-muted)',
                          borderRadius: 'var(--radius-full)',
                          width: '24px',
                          height: '24px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          flexShrink: 0
                        }}>
                          {idx + 1}
                        </span>

                        <div style={{ flex: 1 }}>
                          <span style={{
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            color: 'var(--color-gold)',
                            display: 'block',
                            marginBottom: '0.15rem'
                          }}>
                            {task.categoria}
                          </span>
                          <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: 1.45 }}>
                            {task.tarea}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* SUBMISSION DETAIL MODAL */}
        {selectedSubmission && (
          <div className="modal-overlay" onClick={() => setSelectedSubmission(null)}>
            <div className="modal-content animate-fade-in" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                onClick={() => setSelectedSubmission(null)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'var(--bg-subtle)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-full)',
                  cursor: 'pointer',
                  color: 'var(--text-main)',
                  width: '38px',
                  height: '38px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                title="Cerrar ventana"
              >
                <X size={18} />
              </button>

              <div style={{ marginBottom: '1.25rem', paddingBottom: '0.85rem', borderBottom: '1px solid var(--border-light)', paddingRight: '2.5rem' }}>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--color-gold)'
                }}>
                  {selectedSubmission.hotelName}
                </span>
                <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '0.2rem', lineHeight: 1.25 }}>
                  Checklist de {selectedSubmission.employeeName}
                </h2>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-subtle)', marginTop: '0.25rem', lineHeight: 1.4 }}>
                  Empleado <strong>#{selectedSubmission.employeeNumber}</strong> • Puesto: <strong>{selectedSubmission.puestoNombre}</strong> • <em>{new Date(selectedSubmission.submittedAt).toLocaleString('es-MX')}</em>
                </p>
              </div>

              {selectedSubmission.generalNotes && (
                <div style={{
                  background: 'var(--color-warning-bg)',
                  border: '1px solid var(--color-warning-border)',
                  padding: '0.85rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  marginBottom: '1.25rem'
                }}>
                  <strong style={{ fontSize: '0.825rem', color: 'var(--color-warning)', display: 'block', marginBottom: '0.2rem' }}>
                    Notas Generales Reportadas por el Trabajador:
                  </strong>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-main)', lineHeight: 1.45 }}>
                    {selectedSubmission.generalNotes}
                  </p>
                </div>
              )}

              <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.65rem', color: 'var(--text-main)' }}>
                Detalle Tarea por Tarea ({selectedSubmission.tasks.length}):
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {selectedSubmission.tasks.map((task, idx) => {
                  const isDone = task.status === 'completed';
                  const isProblem = task.status === 'problem';

                  return (
                    <div
                      key={idx}
                      style={{
                        padding: '0.75rem',
                        borderRadius: 'var(--radius-sm)',
                        background: isProblem ? '#fffdfa' : isDone ? '#fbfefb' : '#fafafa',
                        border: '1px solid var(--border-light)',
                        borderLeft: `4px solid ${isProblem ? 'var(--color-warning)' : isDone ? 'var(--color-success)' : 'var(--color-na)'}`
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.65rem' }}>
                        <div style={{ flex: 1 }}>
                          <small style={{ fontSize: '0.7rem', color: 'var(--text-subtle)', textTransform: 'uppercase', fontWeight: 700, display: 'block' }}>
                            {task.categoria}
                          </small>
                          <p style={{ fontSize: '0.875rem', color: 'var(--text-main)', marginTop: '0.1rem', lineHeight: 1.4 }}>
                            {task.tarea}
                          </p>
                        </div>
                        <span style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          padding: '0.2rem 0.5rem',
                          borderRadius: 'var(--radius-sm)',
                          background: isDone ? 'var(--color-success-bg)' : isProblem ? 'var(--color-warning-bg)' : 'var(--color-na-bg)',
                          color: isDone ? 'var(--color-success)' : isProblem ? 'var(--color-warning)' : 'var(--color-na)',
                          whiteSpace: 'nowrap',
                          flexShrink: 0
                        }}>
                          {isDone ? 'Realizada' : isProblem ? 'Problema' : 'N/A'}
                        </span>
                      </div>

                      {task.note && (
                        <div style={{ marginTop: '0.4rem', fontSize: '0.8rem', color: 'var(--color-warning)', fontWeight: 500, background: 'rgba(217, 119, 6, 0.08)', padding: '0.35rem 0.6rem', borderRadius: '4px' }}>
                          ⚠️ Nota: {task.note}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  onClick={() => setSelectedSubmission(null)}
                  className="btn-primary"
                  style={{ width: '100%', minHeight: '46px', padding: '0.75rem 1.5rem' }}
                >
                  Cerrar Detalle
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
