# Sistema de Checklists y Control Operativo - Hoteles Boutique

Sistema web moderno desarrollado en **Next.js 15 (App Router)** para el registro de actividades diarias y supervisión de calidad en propiedades de hospitalidad boutique.

---

## 🏨 Hoteles Integrados y Rutas de Kiosco

Cada hotel cuenta con su página dedicada para la computadora asignada a su personal, manteniendo la misma línea estética con su logotipo oficial y fondo claro:

| Hotel | Ruta Kiosco | Logotipo Oficial | Total Tareas Auditadas |
| :--- | :--- | :--- | :---: |
| **Orgánico Hotel Boutique Ajusco** | [`/ajusco`](http://localhost:3000/ajusco) | `organico-ajusco.png` | 78 tareas |
| **Orgánico Hotel Boutique Valle de Bravo** | [`/valle-de-bravo`](http://localhost:3000/valle-de-bravo) | `organico-valle-de-bravo.png` | 60 tareas |
| **Orgánico Hotel Boutique Tepoztlán** | [`/tepoztlan`](http://localhost:3000/tepoztlan) | `organico-tepoztlan.png` | 65 tareas |
| **Centro Cultural Quinta Soledad** | [`/quinta-soledad`](http://localhost:3000/quinta-soledad) | `quinta-soledad.png` | 146 tareas |
| **Frontera 49 Roma Norte** | [`/frontera-49`](http://localhost:3000/frontera-49) | `frontera-49.png` | 56 tareas |

---

## ✨ Características Principales

### 1. Experiencia de Kiosco para Computadora Compartida
* **Acceso Inmediato por Número de Empleado**: El cursor inicia siempre enfocado en el campo numérico. El empleado solo ingresa su número (ej. `101`) y da **Enter**.
* **Identificación Automática**: El sistema reconoce quién es, su hotel y su puesto exacto (*ej. "¡Hola, Carlos Mendoza — Recepcionista A!"*).
* **Checklist Dinámico por Puesto**: Carga exclusivamente las tareas de su rol agrupadas por categorías operativas (*Supervisión del Servicio, Higiene, Control y Cierre, etc.*).
* **Interacción Rápida**:
  * ✅ **Hecho** (Verde)
  * ⚠️ **Problema / Incidencia** (Habilita una caja de texto inmediata para justificar el motivo o reportar avería a gerencia)
  * ⚪ **No Aplica** (Gris)
  * Botón rápido: **"Todo Hecho"** para marcar en lote con un solo clic.
* **Auto-reinicio de Seguridad**: Al enviar, muestra pantalla de confirmación con animación de confeti y se reinicia en **5 segundos** automáticamente para el siguiente empleado.

### 2. Dashboard de Supervisión para Jefes y Gerentes ([`/admin`](http://localhost:3000/admin))
* **Semáforo y KPIs en Vivo**: Cumplimiento porcentual del día por hotel y conteo de incidencias reportadas.
* **Filtros Avanzados**: Filtrado por Hotel, Fecha específica y búsqueda en vivo por empleado o puesto.
* **Detalle Tarea por Tarea**: Inspección completa de lo que cada trabajador marcó, con notas de incidentes resaltadas.
* **Exportación a Excel / CSV**: Descarga inmediata con un clic para juntas de dirección y auditorías.
* **Módulo de Gestión de Empleados**: Permite registrar nuevos empleados conforme los vayas teniendo (Número, Nombre, Hotel y Puesto) sin necesidad de tocar código.
* **Catálogo de Tareas**: Inspector de todas las actividades extraídas de los 5 archivos Excel.

---

## 🚀 Despliegue en Vercel

1. Sube este repositorio a **GitHub**.
2. Entra a [vercel.com](https://vercel.com) y selecciona **"Add New Project"** ➔ Importa el repositorio.
3. El framework se detectará automáticamente como **Next.js**.
4. Haz clic en **Deploy**. ¡Listo en menos de 2 minutos!

---

## 🗄️ Base de Datos (Supabase / PostgreSQL)

El sistema cuenta con resiliencia y funcionamiento **híbrido**:
* Funciona de inmediato de forma local y offline con persistencia en el navegador (`localStorage`).
* Incluye el archivo [`supabase_schema.sql`](./supabase_schema.sql) listo para producción: solo copia y pega su contenido en el **SQL Editor** de tu proyecto en [Supabase](https://supabase.com).
