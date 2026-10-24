'use client';

import React, { useMemo } from 'react';
import { ChecklistSubmission } from '@/lib/types';
import { HotelConfig } from '@/data/initialData';
import { 
  BarChart3, 
  PieChart as PieIcon, 
  CheckCircle2, 
  AlertTriangle, 
  MinusCircle, 
  Layers, 
  TrendingUp,
  Building2,
  ChevronRight
} from 'lucide-react';

interface AdminChartsProps {
  submissions: ChecklistSubmission[];
  selectedDate: string;
  selectedHotel: string;
  onSelectHotel: (slug: string) => void;
  hotels: HotelConfig[];
}

export default function AdminCharts({
  submissions,
  selectedDate,
  selectedHotel,
  onSelectHotel,
  hotels
}: AdminChartsProps) {
  // Filter submissions by currently selected date
  const dateSubmissions = useMemo(() => {
    if (!selectedDate) return submissions;
    return submissions.filter(s => s.date === selectedDate);
  }, [submissions, selectedDate]);

  // Global Aggregate Metrics
  const globalMetrics = useMemo(() => {
    let totalCompleted = 0;
    let totalProblem = 0;
    let totalNA = 0;
    let totalTasks = 0;

    dateSubmissions.forEach(s => {
      totalCompleted += s.completedTasks;
      totalProblem += s.problemTasks;
      totalNA += s.notApplicableTasks;
      totalTasks += s.totalTasks;
    });

    const effectiveTotal = totalCompleted + totalProblem;
    const globalPercent = effectiveTotal > 0 
      ? Math.round((totalCompleted / effectiveTotal) * 100) 
      : (dateSubmissions.length > 0 ? 100 : 0);

    return {
      totalSubmissions: dateSubmissions.length,
      totalTasks,
      totalCompleted,
      totalProblem,
      totalNA,
      globalPercent
    };
  }, [dateSubmissions]);

  // Per-Hotel Detailed Task Stats
  const hotelTaskStats = useMemo(() => {
    return hotels.map(hotel => {
      const subs = dateSubmissions.filter(s => s.hotelSlug === hotel.slug);
      let completed = 0;
      let problem = 0;
      let na = 0;
      let tasksTotal = 0;

      subs.forEach(s => {
        completed += s.completedTasks;
        problem += s.problemTasks;
        na += s.notApplicableTasks;
        tasksTotal += s.totalTasks;
      });

      const effective = completed + problem;
      const compliance = effective > 0 ? Math.round((completed / effective) * 100) : (subs.length > 0 ? 100 : 0);

      // Unique employees submitted today
      const employeesSet = new Set(subs.map(s => s.employeeNumber));

      return {
        ...hotel,
        submissionCount: subs.length,
        employeeCount: employeesSet.size,
        completed,
        problem,
        na,
        tasksTotal,
        compliance,
        hasData: subs.length > 0
      };
    });
  }, [hotels, dateSubmissions]);

  // Area / Department Breakdown
  const departmentStats = useMemo(() => {
    const map = new Map<string, { total: number; completed: number; problem: number; na: number }>();

    dateSubmissions.forEach(sub => {
      const area = sub.area || 'Operación General';
      const cur = map.get(area) || { total: 0, completed: 0, problem: 0, na: 0 };
      cur.total += sub.totalTasks;
      cur.completed += sub.completedTasks;
      cur.problem += sub.problemTasks;
      cur.na += sub.notApplicableTasks;
      map.set(area, cur);
    });

    return Array.from(map.entries()).map(([area, counts]) => {
      const effective = counts.completed + counts.problem;
      const percent = effective > 0 ? Math.round((counts.completed / effective) * 100) : 100;
      return {
        area,
        ...counts,
        percent
      };
    }).sort((a, b) => b.total - a.total);
  }, [dateSubmissions]);

  // Donut SVG Calculations
  const radius = 64;
  const strokeWidth = 18;
  const circumference = 2 * Math.PI * radius;

  const totalEvaluated = globalMetrics.totalCompleted + globalMetrics.totalProblem + globalMetrics.totalNA;
  
  const completedRatio = totalEvaluated > 0 ? globalMetrics.totalCompleted / totalEvaluated : 0;
  const problemRatio = totalEvaluated > 0 ? globalMetrics.totalProblem / totalEvaluated : 0;
  const naRatio = totalEvaluated > 0 ? globalMetrics.totalNA / totalEvaluated : 0;

  const completedDash = completedRatio * circumference;
  const problemDash = problemRatio * circumference;
  const naDash = naRatio * circumference;

  const problemOffset = -completedDash;
  const naOffset = -(completedDash + problemDash);

  return (
    <div style={{ marginBottom: '2rem' }}>
      {/* SECTION HEADER */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        marginBottom: '1rem',
        flexWrap: 'wrap',
        gap: '0.75rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{
            background: 'var(--color-gold-light)',
            color: 'var(--color-gold)',
            width: '32px',
            height: '32px',
            borderRadius: 'var(--radius-sm)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <BarChart3 size={18} />
          </div>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.01em' }}>
              Estado Visual de Tareas por Hotel
            </h2>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-subtle)' }}>
              Comparativa de avance en tiempo real entre propiedades del grupo.
            </p>
          </div>
        </div>

        {selectedHotel !== 'all' && (
          <button
            type="button"
            onClick={() => onSelectHotel('all')}
            className="btn-secondary"
            style={{ 
              fontSize: '0.75rem', 
              padding: '0.35rem 0.75rem', 
              borderRadius: 'var(--radius-full)',
              background: '#ffffff'
            }}
          >
            ✕ Quitar filtro por hotel
          </button>
        )}
      </div>

      {/* MAIN VISUAL GRID: BARS & DONUT */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
        gap: '1.25rem',
        marginBottom: '1.25rem'
      }}>
        {/* PANEL 1: HOTEL COMPARATIVE BARS */}
        <div className="card" style={{ padding: '1.35rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <Building2 size={16} color="var(--color-gold)" />
              Avance de Tareas por Propiedad
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>
              Toca un hotel para filtrar
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {hotelTaskStats.map(hotel => {
              const isSelected = selectedHotel === hotel.slug;
              const hasChecklists = hotel.submissionCount > 0;

              // Percentages for segmented bar
              const totalBar = hotel.tasksTotal > 0 ? hotel.tasksTotal : 1;
              const pCompleted = hasChecklists ? (hotel.completed / totalBar) * 100 : 0;
              const pProblem = hasChecklists ? (hotel.problem / totalBar) * 100 : 0;
              const pNA = hasChecklists ? (hotel.na / totalBar) * 100 : 0;

              const isHigh = hotel.compliance >= 90;
              const isMedium = hotel.compliance >= 70 && hotel.compliance < 90;

              return (
                <div
                  key={hotel.id}
                  onClick={() => onSelectHotel(isSelected ? 'all' : hotel.slug)}
                  style={{
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: `1.5px solid ${isSelected ? 'var(--color-gold)' : 'var(--border-light)'}`,
                    background: isSelected ? 'var(--color-gold-light)' : '#ffffff',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) e.currentTarget.style.borderColor = 'var(--border-focus)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) e.currentTarget.style.borderColor = 'var(--border-light)';
                  }}
                >
                  {/* Hotel Header & Compliance */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.45rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ 
                        fontWeight: 700, 
                        fontSize: '0.925rem', 
                        color: isSelected ? 'var(--color-brand)' : 'var(--text-main)' 
                      }}>
                        {hotel.shortName}
                      </span>
                      {hasChecklists && (
                        <span style={{
                          fontSize: '0.7rem',
                          background: 'rgba(0,0,0,0.06)',
                          color: 'var(--text-muted)',
                          padding: '0.1rem 0.45rem',
                          borderRadius: 'var(--radius-full)',
                          fontWeight: 600
                        }}>
                          {hotel.submissionCount} {hotel.submissionCount === 1 ? 'checklist' : 'checklists'}
                        </span>
                      )}
                    </div>

                    <div>
                      {hasChecklists ? (
                        <span style={{
                          fontSize: '0.85rem',
                          fontWeight: 800,
                          color: isHigh ? 'var(--color-success)' : isMedium ? 'var(--color-warning)' : '#dc2626'
                        }}>
                          {hotel.compliance}% Cumplimiento
                        </span>
                      ) : (
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontStyle: 'italic' }}>
                          Sin actividad hoy
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Segmented Progress Bar */}
                  <div style={{
                    width: '100%',
                    height: '10px',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--bg-subtle)',
                    overflow: 'hidden',
                    display: 'flex',
                    marginBottom: '0.5rem'
                  }}>
                    {hasChecklists ? (
                      <>
                        {/* Completed segment */}
                        <div
                          style={{
                            width: `${pCompleted}%`,
                            background: '#15803d',
                            transition: 'width 0.4s ease'
                          }}
                          title={`Completadas: ${hotel.completed}`}
                        />
                        {/* Problem segment */}
                        <div
                          style={{
                            width: `${pProblem}%`,
                            background: '#d97706',
                            transition: 'width 0.4s ease'
                          }}
                          title={`Incidencias: ${hotel.problem}`}
                        />
                        {/* NA segment */}
                        <div
                          style={{
                            width: `${pNA}%`,
                            background: '#9ca3af',
                            transition: 'width 0.4s ease'
                          }}
                          title={`No Aplica: ${hotel.na}`}
                        />
                      </>
                    ) : (
                      <div style={{ width: '100%', background: '#f3f4f6' }} />
                    )}
                  </div>

                  {/* Task Stat Pills */}
                  {hasChecklists ? (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem', flexWrap: 'wrap', gap: '0.4rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span style={{ color: 'var(--color-success)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#15803d', display: 'inline-block' }} />
                          {hotel.completed} Hechas
                        </span>

                        {hotel.problem > 0 && (
                          <span style={{ color: 'var(--color-warning)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#d97706', display: 'inline-block' }} />
                            {hotel.problem} Incidencias
                          </span>
                        )}

                        {hotel.na > 0 && (
                          <span style={{ color: 'var(--text-subtle)', display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#9ca3af', display: 'inline-block' }} />
                            {hotel.na} N/A
                          </span>
                        )}
                      </div>

                      <span style={{ color: 'var(--text-subtle)', fontSize: '0.7rem' }}>
                        {hotel.employeeCount} {hotel.employeeCount === 1 ? 'colaborador' : 'colaboradores'}
                      </span>
                    </div>
                  ) : (
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-light)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span>En espera de reporte de turno</span>
                      <ChevronRight size={12} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* PANEL 2: GLOBAL DONUT CHART & SUMMARY */}
        <div className="card" style={{ padding: '1.35rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <PieIcon size={16} color="var(--color-gold)" />
              Distribución Total del Grupo
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>
              Hoy ({globalMetrics.totalTasks} tareas)
            </span>
          </div>

          {/* Donut Chart SVG */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '1rem 0' }}>
            <div style={{ position: 'relative', width: '160px', height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="160" height="160" viewBox="0 0 160 160" style={{ transform: 'rotate(-90deg)' }}>
                {/* Background Track */}
                <circle
                  cx="80"
                  cy="80"
                  r={radius}
                  fill="none"
                  stroke="var(--bg-subtle)"
                  strokeWidth={strokeWidth}
                />

                {totalEvaluated > 0 ? (
                  <>
                    {/* Completed Arc */}
                    {completedDash > 0 && (
                      <circle
                        cx="80"
                        cy="80"
                        r={radius}
                        fill="none"
                        stroke="#15803d"
                        strokeWidth={strokeWidth}
                        strokeDasharray={`${completedDash} ${circumference - completedDash}`}
                        strokeDashoffset="0"
                        strokeLinecap="round"
                        style={{ transition: 'stroke-dasharray 0.5s ease' }}
                      />
                    )}

                    {/* Problem Arc */}
                    {problemDash > 0 && (
                      <circle
                        cx="80"
                        cy="80"
                        r={radius}
                        fill="none"
                        stroke="#d97706"
                        strokeWidth={strokeWidth}
                        strokeDasharray={`${problemDash} ${circumference - problemDash}`}
                        strokeDashoffset={problemOffset}
                        strokeLinecap="round"
                        style={{ transition: 'stroke-dasharray 0.5s ease' }}
                      />
                    )}

                    {/* NA Arc */}
                    {naDash > 0 && (
                      <circle
                        cx="80"
                        cy="80"
                        r={radius}
                        fill="none"
                        stroke="#9ca3af"
                        strokeWidth={strokeWidth}
                        strokeDasharray={`${naDash} ${circumference - naDash}`}
                        strokeDashoffset={naOffset}
                        strokeLinecap="round"
                        style={{ transition: 'stroke-dasharray 0.5s ease' }}
                      />
                    )}
                  </>
                ) : null}
              </svg>

              {/* Center Donut Label */}
              <div style={{
                position: 'absolute',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <span style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1 }}>
                  {totalEvaluated > 0 ? `${globalMetrics.globalPercent}%` : '—'}
                </span>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, marginTop: '0.2rem' }}>
                  Cumplimiento
                </span>
              </div>
            </div>
          </div>

          {/* Legend and Stats Breakdown */}
          <div style={{
            background: 'var(--bg-app)',
            borderRadius: 'var(--radius-md)',
            padding: '0.85rem',
            border: '1px solid var(--border-light)'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', textAlign: 'center' }}>
              {/* Completed */}
              <div style={{ padding: '0.35rem' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.72rem', color: 'var(--color-success)', fontWeight: 700 }}>
                  <CheckCircle2 size={13} />
                  <span>Hechas</span>
                </div>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '0.15rem' }}>
                  {globalMetrics.totalCompleted}
                </div>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-subtle)' }}>
                  {totalEvaluated > 0 ? `${Math.round(completedRatio * 100)}%` : '0%'}
                </span>
              </div>

              {/* Incidencias */}
              <div style={{ padding: '0.35rem', borderLeft: '1px solid var(--border-light)', borderRight: '1px solid var(--border-light)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.72rem', color: 'var(--color-warning)', fontWeight: 700 }}>
                  <AlertTriangle size={13} />
                  <span>Problemas</span>
                </div>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: globalMetrics.totalProblem > 0 ? 'var(--color-warning)' : 'var(--text-main)', marginTop: '0.15rem' }}>
                  {globalMetrics.totalProblem}
                </div>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-subtle)' }}>
                  {totalEvaluated > 0 ? `${Math.round(problemRatio * 100)}%` : '0%'}
                </span>
              </div>

              {/* No Aplica */}
              <div style={{ padding: '0.35rem' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 700 }}>
                  <MinusCircle size={13} />
                  <span>N/A</span>
                </div>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '0.15rem' }}>
                  {globalMetrics.totalNA}
                </div>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-subtle)' }}>
                  {totalEvaluated > 0 ? `${Math.round(naRatio * 100)}%` : '0%'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PANEL 3: PERFORMANCE BY DEPARTMENT / AREA */}
      {departmentStats.length > 0 && (
        <div className="card" style={{ padding: '1.35rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <Layers size={16} color="var(--color-gold)" />
              Cumplimiento por Área Operativa
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>
              {departmentStats.length} departamentos activos hoy
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '0.85rem' }}>
            {departmentStats.map((dep, idx) => {
              const isHigh = dep.percent >= 90;
              const isMed = dep.percent >= 70 && dep.percent < 90;

              return (
                <div
                  key={idx}
                  style={{
                    background: 'var(--bg-app)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.85rem',
                    border: '1px solid var(--border-light)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                    <span style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--text-main)' }}>
                      {dep.area}
                    </span>
                    <span style={{
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      color: isHigh ? 'var(--color-success)' : isMed ? 'var(--color-warning)' : '#dc2626'
                    }}>
                      {dep.percent}%
                    </span>
                  </div>

                  {/* Department Bar */}
                  <div style={{
                    width: '100%',
                    height: '6px',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(0,0,0,0.06)',
                    overflow: 'hidden',
                    marginBottom: '0.4rem'
                  }}>
                    <div style={{
                      width: `${dep.percent}%`,
                      height: '100%',
                      background: isHigh ? 'var(--color-success)' : isMed ? 'var(--color-warning)' : '#dc2626',
                      borderRadius: 'var(--radius-full)',
                      transition: 'width 0.4s ease'
                    }} />
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--text-subtle)' }}>
                    <span>{dep.completed} hechas / {dep.total} total</span>
                    {dep.problem > 0 && (
                      <span style={{ color: 'var(--color-warning)', fontWeight: 600 }}>
                        ⚠️ {dep.problem} {dep.problem === 1 ? 'incidencia' : 'incidencias'}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
