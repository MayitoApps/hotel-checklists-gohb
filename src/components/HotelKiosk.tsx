'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  CheckCircle2, 
  AlertTriangle, 
  MinusCircle, 
  CheckCheck, 
  RotateCcw, 
  Send, 
  ArrowLeft,
  UserCheck,
  ShieldAlert
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { HotelConfig, PuestoTemplate, PUESTOS_BY_HOTEL } from '@/data/initialData';
import { Employee } from '@/data/initialData';
import { findEmployeeByNumberAndHotel, saveSubmission, getEmployees, fetchEmployees } from '@/lib/storage';
import { TaskStatus, ChecklistSubmission, TaskRecord } from '@/lib/types';

interface HotelKioskProps {
  hotel: HotelConfig;
}

export default function HotelKiosk({ hotel }: HotelKioskProps) {
  const [step, setStep] = useState<'input_employee' | 'checklist' | 'success'>('input_employee');
  const [employeeNumInput, setEmployeeNumInput] = useState('');
  const [activeEmployee, setActiveEmployee] = useState<Employee | null>(null);
  const [activePuesto, setActivePuesto] = useState<PuestoTemplate | null>(null);
  const [taskStates, setTaskStates] = useState<Record<string, { status: TaskStatus; note: string }>>({});
  const [generalNotes, setGeneralNotes] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [countdown, setCountdown] = useState(5);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [availableEmployees, setAvailableEmployees] = useState<Employee[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  // Load available employees for this hotel on mount
  useEffect(() => {
    const all = getEmployees();
    setAvailableEmployees(all.filter(e => e.hotelSlug === hotel.slug));
    fetchEmployees().then(emps => {
      setAvailableEmployees(emps.filter(e => e.hotelSlug === hotel.slug));
    });
  }, [hotel.slug]);

  // Focus employee number input automatically
  useEffect(() => {
    if (step === 'input_employee' && inputRef.current) {
      inputRef.current.focus();
    }
  }, [step]);

  // Countdown timer on success step
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (step === 'success') {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Safe fallback
      }

      setCountdown(5);
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            resetKiosk();
            return 5;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [step]);

  const resetKiosk = () => {
    setStep('input_employee');
    setEmployeeNumInput('');
    setActiveEmployee(null);
    setActivePuesto(null);
    setTaskStates({});
    setGeneralNotes('');
    setErrorMessage('');
  };

  const handleLookupEmployee = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setErrorMessage('');

    const cleanNum = employeeNumInput.trim();
    if (!cleanNum) {
      setErrorMessage('Por favor ingresa tu número de empleado.');
      return;
    }

    const employee = findEmployeeByNumberAndHotel(cleanNum, hotel.slug);
    if (!employee) {
      setErrorMessage(`El número "${cleanNum}" no está registrado en ${hotel.shortName}.`);
      return;
    }

    // Find the template for their role in this hotel
    const hotelPuestos = PUESTOS_BY_HOTEL[hotel.slug] || [];
    // Match by puestoId or by name
    const puesto = hotelPuestos.find(p => p.id === employee.puestoId || p.nombre.toLowerCase() === employee.puestoNombre.toLowerCase()) 
      || hotelPuestos[0]; // fallback to first if none

    if (!puesto) {
      setErrorMessage(`No se encontró la plantilla de tareas para el puesto: ${employee.puestoNombre}`);
      return;
    }

    setActiveEmployee(employee);
    setActivePuesto(puesto);

    // Initialize all tasks as completed by default or empty
    const initialTasks: Record<string, { status: TaskStatus; note: string }> = {};
    puesto.tasks.forEach(t => {
      initialTasks[t.id] = { status: 'completed', note: '' };
    });
    setTaskStates(initialTasks);

    setStep('checklist');
  };

  const setTaskStatus = (taskId: string, status: TaskStatus) => {
    setTaskStates(prev => ({
      ...prev,
      [taskId]: {
        ...prev[taskId],
        status,
        note: status !== 'problem' ? '' : prev[taskId]?.note || ''
      }
    }));
  };

  const setTaskNote = (taskId: string, note: string) => {
    setTaskStates(prev => ({
      ...prev,
      [taskId]: {
        ...prev[taskId],
        note
      }
    }));
  };

  const handleMarkAll = (status: TaskStatus) => {
    if (!activePuesto) return;
    const updated: Record<string, { status: TaskStatus; note: string }> = {};
    activePuesto.tasks.forEach(t => {
      updated[t.id] = { status, note: '' };
    });
    setTaskStates(updated);
  };

  const handleSubmitChecklist = async () => {
    if (!activeEmployee || !activePuesto) return;
    setIsSubmitting(true);

    const taskRecords: TaskRecord[] = activePuesto.tasks.map(t => {
      const state = taskStates[t.id] || { status: 'completed', note: '' };
      return {
        taskId: t.id,
        categoria: t.categoria,
        tarea: t.tarea,
        status: state.status,
        note: state.note
      };
    });

    const total = taskRecords.length;
    const completed = taskRecords.filter(t => t.status === 'completed').length;
    const problem = taskRecords.filter(t => t.status === 'problem').length;
    const na = taskRecords.filter(t => t.status === 'not_applicable').length;
    const compliance = total > 0 ? Math.round((completed / (total - na > 0 ? total - na : total)) * 100) : 100;

    const submission: ChecklistSubmission = {
      id: `sub_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      hotelSlug: hotel.slug,
      hotelName: hotel.name,
      employeeId: activeEmployee.id,
      employeeNumber: activeEmployee.numeroEmpleado,
      employeeName: activeEmployee.nombre,
      puestoId: activePuesto.id,
      puestoNombre: activeEmployee.puestoNombre,
      area: activePuesto.area,
      date: new Date().toISOString().split('T')[0],
      submittedAt: new Date().toISOString(),
      tasks: taskRecords,
      generalNotes: generalNotes.trim(),
      totalTasks: total,
      completedTasks: completed,
      problemTasks: problem,
      notApplicableTasks: na,
      compliancePercentage: compliance
    };

    await saveSubmission(submission);
    setIsSubmitting(false);
    setStep('success');
  };

  // Group tasks by category
  const categories = React.useMemo(() => {
    if (!activePuesto) return [];
    const map = new Map<string, typeof activePuesto.tasks>();
    activePuesto.tasks.forEach(task => {
      const cat = task.categoria || 'Actividades Principales';
      if (!map.has(cat)) {
        map.set(cat, []);
      }
      map.get(cat)!.push(task);
    });
    return Array.from(map.entries()).map(([name, tasks]) => ({ name, tasks }));
  }, [activePuesto]);

  // Statistics calculation for active checklist
  const stats = React.useMemo(() => {
    if (!activePuesto) return { total: 0, completed: 0, problem: 0, na: 0, percent: 0 };
    const total = activePuesto.tasks.length;
    let completed = 0;
    let problem = 0;
    let na = 0;
    activePuesto.tasks.forEach(t => {
      const s = taskStates[t.id]?.status || 'completed';
      if (s === 'completed') completed++;
      else if (s === 'problem') problem++;
      else if (s === 'not_applicable') na++;
    });
    const effectiveTotal = total - na > 0 ? total - na : total;
    const percent = total > 0 ? Math.round((completed / effectiveTotal) * 100) : 100;
    return { total, completed, problem, na, percent };
  }, [activePuesto, taskStates]);

  return (
    <div className="kiosk-container">
      {/* KIOSK HEADER WITH OFFICIAL HOTEL LOGO */}
      <header className="kiosk-header">
        <div className="hotel-logo-wrapper">
          <Image
            src={hotel.logo}
            alt={hotel.name}
            width={220}
            height={70}
            className="hotel-logo-img"
            priority
          />
        </div>
        <h1 className="hotel-title">{hotel.name}</h1>
        <p className="hotel-tagline">{hotel.tagline}</p>
      </header>

      {/* STEP 1: ENTER EMPLOYEE NUMBER */}
      {step === 'input_employee' && (
        <main className="animate-fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="login-kiosk-box">
            <h2 className="kiosk-prompt">Control de Tareas Diarias</h2>
            <p className="kiosk-subprompt">Ingresa tu número de empleado para abrir tu formulario</p>

            <form onSubmit={handleLookupEmployee}>
              <div className="pin-input-group">
                <input
                  ref={inputRef}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={employeeNumInput}
                  onChange={(e) => setEmployeeNumInput(e.target.value)}
                  placeholder="000"
                  className="kiosk-number-input"
                  autoComplete="off"
                  maxLength={6}
                />
              </div>

              {errorMessage && (
                <div style={{
                  background: '#fef2f2',
                  border: '1px solid #fecaca',
                  color: '#991b1b',
                  padding: '0.75rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.85rem',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textAlign: 'left'
                }}>
                  <ShieldAlert size={18} style={{ flexShrink: 0 }} />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button type="submit" className="btn-primary">
                <UserCheck size={20} />
                <span>Continuar a mi Formulario</span>
              </button>
            </form>

            {/* Quick Helper for Demo / Testing */}
            {availableEmployees.length > 0 && (
              <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px dashed var(--border-light)' }}>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', marginBottom: '0.5rem', fontWeight: 600 }}>
                  EMPLEADOS REGISTRADOS EN ESTA PROPIEDAD:
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', justifyContent: 'center' }}>
                  {availableEmployees.map(emp => (
                    <button
                      key={emp.id}
                      type="button"
                      onClick={() => {
                        setEmployeeNumInput(emp.numeroEmpleado);
                        setErrorMessage('');
                      }}
                      style={{
                        background: 'var(--bg-subtle)',
                        border: '1px solid var(--border-light)',
                        borderRadius: 'var(--radius-sm)',
                        padding: '0.3rem 0.6rem',
                        fontSize: '0.75rem',
                        cursor: 'pointer',
                        color: 'var(--text-main)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem'
                      }}
                    >
                      <strong>#{emp.numeroEmpleado}</strong> {emp.nombre.split(' ')[0]} ({emp.puestoNombre})
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>
      )}

      {/* STEP 2: CHECKLIST FORM */}
      {step === 'checklist' && activeEmployee && activePuesto && (
        <main className="animate-fade-in" style={{ flex: 1 }}>
          {/* Welcome & Role Card */}
          <div className="employee-welcome-banner">
            <div className="welcome-info">
              <h2>¡Hola, {activeEmployee.nombre}!</h2>
              <p>Departamento: <strong>{activePuesto.area}</strong> • Fecha: <strong>{new Date().toLocaleDateString('es-MX', { weekday: 'long', day: 'numeric', month: 'long' })}</strong></p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span className="badge-role">{activeEmployee.puestoNombre}</span>
              <button 
                type="button" 
                onClick={resetKiosk}
                className="btn-secondary"
                style={{ background: 'rgba(255,255,255,0.1)', color: '#ffffff', borderColor: 'rgba(255,255,255,0.2)' }}
                title="Cambiar de empleado"
              >
                <ArrowLeft size={16} />
                <span>Salir</span>
              </button>
            </div>
          </div>

          {/* Action Toolbar & Stats */}
          <div className="checklist-toolbar">
            <div className="progress-counter">
              <span>Avance: <strong>{stats.completed}</strong> de {stats.total} tareas ({stats.percent}%)</span>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                type="button"
                onClick={() => handleMarkAll('completed')}
                className="btn-secondary"
                title="Marcar todas como completadas"
              >
                <CheckCheck size={16} color="var(--color-success)" />
                <span>Todo Hecho</span>
              </button>
              <button
                type="button"
                onClick={() => handleMarkAll('problem')}
                className="btn-secondary"
                style={{ fontSize: '0.8rem' }}
                title="Reiniciar selección"
              >
                <RotateCcw size={14} />
                <span>Reiniciar</span>
              </button>
            </div>
          </div>

          {/* Categories and Tasks */}
          <div style={{ marginBottom: '2rem' }}>
            {categories.map((cat, catIdx) => (
              <div key={catIdx} className="category-block">
                <h3 className="category-title">{cat.name}</h3>
                
                {cat.tasks.map((task) => {
                  const currentStatus = taskStates[task.id]?.status || 'completed';
                  const currentNote = taskStates[task.id]?.note || '';

                  return (
                    <div 
                      key={task.id} 
                      className={`task-item-card state-${currentStatus}`}
                    >
                      <div className="task-content-row">
                        <span className="task-desc">{task.tarea}</span>

                        <div className="task-actions">
                          {/* Botón Hecho */}
                          <button
                            type="button"
                            onClick={() => setTaskStatus(task.id, 'completed')}
                            className={`status-btn ${currentStatus === 'completed' ? 'active-completed' : ''}`}
                            title="Tarea realizada"
                          >
                            <CheckCircle2 size={16} />
                            <span>Hecho</span>
                          </button>

                          {/* Botón Problema / Pendiente */}
                          <button
                            type="button"
                            onClick={() => setTaskStatus(task.id, 'problem')}
                            className={`status-btn ${currentStatus === 'problem' ? 'active-problem' : ''}`}
                            title="No realizada o con problema"
                          >
                            <AlertTriangle size={16} />
                            <span>Problema</span>
                          </button>

                          {/* Botón No Aplica */}
                          <button
                            type="button"
                            onClick={() => setTaskStatus(task.id, 'not_applicable')}
                            className={`status-btn ${currentStatus === 'not_applicable' ? 'active-not_applicable' : ''}`}
                            title="No aplica hoy"
                          >
                            <MinusCircle size={16} />
                            <span>N/A</span>
                          </button>
                        </div>
                      </div>

                      {/* Caja de nota si se marcó con problema */}
                      {currentStatus === 'problem' && (
                        <div className="task-note-box animate-fade-in">
                          <input
                            type="text"
                            value={currentNote}
                            onChange={(e) => setTaskNote(task.id, e.target.value)}
                            placeholder="⚠️ Motivo por el que no se pudo realizar o anomalía encontrada..."
                            className="task-note-input"
                            autoFocus
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* General Observations */}
          <div className="card" style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)' }}>
              Notas generales o incidencias del turno (Opcional):
            </h4>
            <textarea
              value={generalNotes}
              onChange={(e) => setGeneralNotes(e.target.value)}
              placeholder="Escribe aquí cualquier eventualidad, reporte a gerencia o detalle relevante de tus actividades..."
              rows={3}
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-light)',
                background: 'var(--bg-app)',
                outline: 'none',
                resize: 'vertical'
              }}
            />
          </div>

          {/* Submit Button (Desktop) */}
          <div className="desktop-only" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <button
              type="button"
              onClick={handleSubmitChecklist}
              disabled={isSubmitting}
              className="btn-primary"
              style={{ padding: '1.15rem 2.5rem', fontSize: '1.05rem', maxWidth: '420px', margin: '0 auto' }}
            >
              <Send size={20} />
              <span>{isSubmitting ? 'Guardando...' : 'Finalizar Turno y Enviar Checklist'}</span>
            </button>
          </div>

          {/* Mobile spacing block to prevent sticky bar overlap */}
          <div className="mobile-only" style={{ height: '4.5rem' }} />

          {/* Mobile Sticky Action Bar */}
          <div className="mobile-sticky-action-bar">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
              <div style={{ minWidth: '70px' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-main)', display: 'block' }}>
                  {stats.completed}/{stats.total}
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-subtle)', fontWeight: 600 }}>
                  {stats.percent}% listo
                </span>
              </div>
              <button
                type="button"
                onClick={handleSubmitChecklist}
                disabled={isSubmitting}
                className="btn-primary"
                style={{ width: 'auto', flex: 1, padding: '0.75rem 1rem', fontSize: '0.9rem', minHeight: '44px' }}
              >
                <Send size={16} />
                <span>{isSubmitting ? 'Guardando...' : 'Finalizar y Enviar'}</span>
              </button>
            </div>
          </div>
        </main>
      )}

      {/* STEP 3: SUCCESS SCREEN */}
      {step === 'success' && activeEmployee && (
        <main className="animate-fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="login-kiosk-box" style={{ maxWidth: '520px', padding: 'clamp(2rem, 5vw, 3.5rem) clamp(1.25rem, 4vw, 2rem)' }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'var(--color-success-bg)',
              color: 'var(--color-success)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto'
            }}>
              <CheckCircle2 size={48} />
            </div>

            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-main)' }}>
              ¡Checklist Registrado con Éxito!
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
              Muchas gracias, <strong>{activeEmployee.nombre}</strong>. Las tareas de tu puesto <em>({activeEmployee.puestoNombre})</em> han quedado registradas en el sistema para supervisión de gerencia.
            </p>

            <div style={{
              background: 'var(--bg-subtle)',
              padding: '0.75rem 1rem',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.85rem',
              color: 'var(--text-subtle)',
              marginBottom: '1.5rem'
            }}>
              La pantalla se reiniciará automáticamente en <strong>{countdown} segundos</strong> para el siguiente compañero...
            </div>

            <button
              type="button"
              onClick={resetKiosk}
              className="btn-secondary"
              style={{ width: '100%', padding: '0.85rem' }}
            >
              <span>Volver a la pantalla de inicio ahora</span>
            </button>
          </div>
        </main>
      )}

      {/* FOOTER */}
      <footer style={{ 
        textAlign: 'center', 
        paddingTop: '1.5rem', 
        borderTop: '1px solid var(--border-light)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.75rem',
        fontSize: '0.8rem',
        color: 'var(--text-light)'
      }}>
        <span>{hotel.name} • Terminal Kiosco de Operaciones</span>
        <Link 
          href="/admin" 
          style={{ color: 'var(--text-subtle)', textDecoration: 'underline', fontWeight: 500, padding: '0.25rem 0' }}
        >
          Acceso Administrador
        </Link>
      </footer>
    </div>
  );
}
