import Link from 'next/link';
import Image from 'next/image';
import { HOTELS } from '@/data/initialData';
import { ArrowRight, LayoutDashboard, Building2, CheckCircle } from 'lucide-react';

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-app)' }}>
      {/* Top Navbar */}
      <header style={{
        background: '#ffffff',
        borderBottom: '1px solid var(--border-light)',
        padding: '1rem clamp(1rem, 3vw, 2rem)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.85rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', minWidth: '180px' }}>
          <Image
            src="/logos/gohb-negro.png"
            alt="Grupo Orgánico Hotel Boutique"
            width={150}
            height={46}
            style={{ objectFit: 'contain', maxHeight: '44px', width: 'auto' }}
            priority
          />
          <div className="desktop-only" style={{ height: '22px', width: '1px', background: 'var(--border-light)' }} />
          <span className="desktop-only" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)' }}>
            Control Operativo Diario
          </span>
        </div>

        <Link
          href="/admin"
          className="btn-primary"
          style={{ 
            width: 'auto', 
            padding: '0.6rem 1.15rem', 
            fontSize: '0.85rem',
            minHeight: '42px',
            whiteSpace: 'nowrap'
          }}
        >
          <LayoutDashboard size={15} />
          <span>Acceso Administrador</span>
        </Link>
      </header>

      {/* Main Hub Content */}
      <main style={{ 
        flex: 1, 
        maxWidth: '1180px', 
        width: '100%', 
        margin: '0 auto', 
        padding: 'clamp(1.75rem, 4vw, 3.5rem) clamp(1rem, 3vw, 1.5rem)' 
      }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            background: 'var(--color-gold-light)',
            color: 'var(--color-gold)',
            padding: '0.35rem 0.9rem',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '0.85rem'
          }}>
            <Building2 size={14} />
            <span>Terminales por Propiedad</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.65rem, 5vw, 2.5rem)',
            fontWeight: 700,
            color: 'var(--text-main)',
            letterSpacing: '-0.02em',
            lineHeight: 1.25,
            marginBottom: '0.75rem'
          }}>
            Selecciona la Computadora / Hotel
          </h1>
          <p style={{ 
            color: 'var(--text-muted)', 
            fontSize: 'clamp(0.9rem, 2.5vw, 1.05rem)', 
            maxWidth: '640px', 
            margin: '0 auto',
            lineHeight: 1.5
          }}>
            Cada hotel cuenta con su terminal dedicada para el personal. Al ingresar tu número de empleado se desplegará el checklist diario de tu puesto.
          </p>
        </div>

        {/* Hotels Grid - CENTERED CARDS */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: 'clamp(1rem, 3vw, 2rem)'
        }}>
          {HOTELS.map((hotel) => (
            <div
              key={hotel.id}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                justifyContent: 'space-between',
                padding: 'clamp(1.75rem, 3vw, 2.5rem) clamp(1.25rem, 2.5vw, 2rem)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                {/* Logo centered */}
                <div style={{
                  height: '75px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  marginBottom: '1.25rem'
                }}>
                  <Image
                    src={hotel.logo}
                    alt={hotel.name}
                    width={200}
                    height={70}
                    style={{ objectFit: 'contain', maxHeight: '70px', maxWidth: '100%', width: 'auto' }}
                  />
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
                  fontWeight: 600,
                  color: 'var(--text-main)',
                  marginBottom: '0.35rem',
                  lineHeight: 1.3
                }}>
                  {hotel.name}
                </h3>
                <p style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-subtle)',
                  marginBottom: '1.5rem',
                  lineHeight: 1.45,
                  maxWidth: '280px'
                }}>
                  {hotel.tagline}
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                {/* Status Indicator centered */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.45rem',
                  fontSize: '0.78rem',
                  color: 'var(--color-success)',
                  fontWeight: 600,
                  marginBottom: '1.25rem',
                  background: 'var(--color-success-bg)',
                  padding: '0.3rem 0.8rem',
                  borderRadius: 'var(--radius-full)'
                }}>
                  <CheckCircle size={14} />
                  <span>Kiosco configurado y listo</span>
                </div>

                {/* Button centered */}
                <Link
                  href={`/${hotel.slug}`}
                  className="btn-primary"
                  style={{
                    background: 'var(--text-main)',
                    color: '#ffffff',
                    width: '100%',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '0.85rem 1.25rem',
                    minHeight: '46px',
                    fontSize: '0.9rem'
                  }}
                >
                  <span>Abrir Kiosco {hotel.shortName}</span>
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        background: '#ffffff',
        borderTop: '1px solid var(--border-light)',
        padding: '2rem 1.25rem',
        paddingBottom: 'max(2rem, calc(env(safe-area-inset-bottom, 0px) + 1.25rem))',
        textAlign: 'center',
        fontSize: '0.85rem',
        color: 'var(--text-subtle)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
          <Image
            src="/logos/gohb-negro.png"
            alt="Grupo Orgánico Hotel Boutique"
            width={120}
            height={40}
            style={{ objectFit: 'contain', opacity: 0.8, width: 'auto' }}
          />
        </div>
        <p style={{ fontWeight: 500 }}>Grupo Orgánico Hotel Boutique • Control Operativo Diario</p>
        <p style={{ marginTop: '0.35rem', fontSize: '0.8rem', color: 'var(--text-light)' }}>
          Alojado en Vercel con soporte PostgreSQL para multi-propiedades
        </p>
      </footer>
    </div>
  );
}

