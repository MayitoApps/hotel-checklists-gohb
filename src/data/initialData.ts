// CATALOG DATA CONFIGURATION WITH TEST EMPLOYEES & TEST CHECKLIST FORMS
export interface HotelConfig {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  logo: string;
  tagline: string;
}

export interface TaskTemplate {
  id: string;
  categoria: string;
  tarea: string;
}

export interface PuestoTemplate {
  id: string;
  nombre: string;
  area: string;
  hotelSlug: string;
  tasks: TaskTemplate[];
}

export const HOTELS: HotelConfig[] = [
  {
    "id": "ajusco",
    "slug": "ajusco",
    "name": "Orgánico Hotel Boutique Ajusco",
    "shortName": "Ajusco",
    "logo": "/logos/organico-ajusco.png",
    "tagline": "Boutique Hotel & Mountain Sanctuary"
  },
  {
    "id": "valle-de-bravo",
    "slug": "valle-de-bravo",
    "name": "Orgánico Hotel Boutique Valle de Bravo",
    "shortName": "Valle de Bravo",
    "logo": "/logos/organico-valle-de-bravo.png",
    "tagline": "Luxury, Nature & Serenity"
  },
  {
    "id": "tepoztlan",
    "slug": "tepoztlan",
    "name": "Orgánico Hotel Boutique Tepoztlán",
    "shortName": "Tepoztlán",
    "logo": "/logos/organico-tepoztlan.png",
    "tagline": "Mystic Retreat & Holistic Experience"
  },
  {
    "id": "quinta-soledad",
    "slug": "quinta-soledad",
    "name": "Centro Cultural Quinta Soledad",
    "shortName": "Quinta Soledad",
    "logo": "/logos/quinta-soledad.png",
    "tagline": "Arte, Cultura & Hospitalidad Histórica"
  },
  {
    "id": "frontera-49",
    "slug": "frontera-49",
    "name": "Frontera 49 Roma Norte",
    "shortName": "Frontera 49",
    "logo": "/logos/frontera-49.png",
    "tagline": "Cultura, Diseño & Estilo Roma Norte"
  }
];

export const PUESTOS_BY_HOTEL: Record<string, PuestoTemplate[]> = {
  "ajusco": [
    {
      id: "ajusco_recepcion",
      nombre: "Recepcionista A",
      area: "Recepción y Administración",
      hotelSlug: "ajusco",
      tasks: [
        {
          id: "ajusco_rec_01",
          categoria: "Apertura y Turno",
          tarea: "Revisar bitácora de novedades y reportes pendientes del turno anterior"
        },
        {
          id: "ajusco_rec_02",
          categoria: "Apertura y Turno",
          tarea: "Realizar arqueo de caja chica y comprobar conexión de terminales bancarias"
        },
        {
          id: "ajusco_rec_03",
          categoria: "Apertura y Turno",
          tarea: "Verificar lista de llegadas (check-in) y salidas (check-out) programadas del día"
        },
        {
          id: "ajusco_rec_04",
          categoria: "Operación y Atención al Huésped",
          tarea: "Realizar bienvenida personalizada, entrega de llaves y registro oficial de huéspedes"
        },
        {
          id: "ajusco_rec_05",
          categoria: "Operación y Atención al Huésped",
          tarea: "Coordinar asignación de cabañas y confirmar estatus de limpieza con Ama de Llaves"
        },
        {
          id: "ajusco_rec_06",
          categoria: "Operación y Atención al Huésped",
          tarea: "Atender solicitudes especiales de huéspedes (fogata, recorridos de montaña y amenidades)"
        },
        {
          id: "ajusco_rec_07",
          categoria: "Cierre y Auditoría",
          tarea: "Efectuar corte diario de terminales de cobro y cuadre con sistema administrativo"
        },
        {
          id: "ajusco_rec_08",
          categoria: "Cierre y Auditoría",
          tarea: "Elaborar reporte de incidencias y realizar entrega formal de bitácora al siguiente turno"
        }
      ]
    }
  ],
  "valle-de-bravo": [
    {
      id: "valle_ama_llaves",
      nombre: "Camarista / Ama de Llaves",
      area: "Ama de Llaves y Habitaciones",
      hotelSlug: "valle-de-bravo",
      tasks: [
        {
          id: "valle_ama_01",
          categoria: "Preparación e Insumos",
          tarea: "Revisar reporte diario de ocupación de suites y prioridades de limpieza"
        },
        {
          id: "valle_ama_02",
          categoria: "Preparación e Insumos",
          tarea: "Abastecer carrito de servicio con blancos limpios, toallas y amenidades ecológicas"
        },
        {
          id: "valle_ama_03",
          categoria: "Limpieza y Desinfección de Cabañas",
          tarea: "Ventilar suite, retirar blancos usados y desinfectar superficies de alto contacto"
        },
        {
          id: "valle_ama_04",
          categoria: "Limpieza y Desinfección de Cabañas",
          tarea: "Tender camas bajo estándar boutique con blancos planchados y almohadas alineadas"
        },
        {
          id: "valle_ama_05",
          categoria: "Limpieza y Desinfección de Cabañas",
          tarea: "Limpiar a fondo baño, regadera, cancelería, espejos y reponer toallas limpias"
        },
        {
          id: "valle_ama_06",
          categoria: "Detalle, Montaje y Cierre",
          tarea: "Montar set de bienvenida, cafetera, botellas de agua y amenidades de baño"
        },
        {
          id: "valle_ama_07",
          categoria: "Detalle, Montaje y Cierre",
          tarea: "Inspeccionar funcionamiento de luces, chimenea, persianas y terraza privada"
        },
        {
          id: "valle_ama_08",
          categoria: "Detalle, Montaje y Cierre",
          tarea: "Notificar a recepción y supervisión la liberación de la habitación lista para check-in"
        }
      ]
    }
  ],
  "tepoztlan": [
    {
      id: "tepoztlan_ab",
      nombre: "Capitán de Alimentos y Bebidas",
      area: "Alimentos y Bebidas / Restaurante",
      hotelSlug: "tepoztlan",
      tasks: [
        {
          id: "tepoztlan_ab_01",
          categoria: "Apertura y Montaje de Salón",
          tarea: "Inspeccionar montaje de mesas, cristalería y cubertería en restaurante y terraza"
        },
        {
          id: "tepoztlan_ab_02",
          categoria: "Apertura y Montaje de Salón",
          tarea: "Verificar abastecimiento de estación de servicio, servilletas, cartas y condimentos"
        },
        {
          id: "tepoztlan_ab_03",
          categoria: "Apertura y Montaje de Salón",
          tarea: "Realizar junta de inicio de turno (briefing) con meseros: menú especial y reservaciones"
        },
        {
          id: "tepoztlan_ab_04",
          categoria: "Servicio y Comensales",
          tarea: "Supervisar tiempos de despacho y presentación de alimentos desde cocina"
        },
        {
          id: "tepoztlan_ab_05",
          categoria: "Servicio y Comensales",
          tarea: "Atender a comensales en mesa, validar satisfacción y resolver solicitudes especiales"
        },
        {
          id: "tepoztlan_ab_06",
          categoria: "Servicio y Comensales",
          tarea: "Monitorear correcta captura de comandas y cobro ágil en punto de venta"
        },
        {
          id: "tepoztlan_ab_07",
          categoria: "Cierre de Turno y Salón",
          tarea: "Realizar inventario rápido de licores, vinos y bebidas de mayor rotación"
        },
        {
          id: "tepoztlan_ab_08",
          categoria: "Cierre de Turno y Salón",
          tarea: "Supervisar limpieza profunda de mobiliario, barras y estación de café"
        }
      ]
    }
  ],
  "quinta-soledad": [
    {
      id: "quinta_cocina",
      nombre: "Chef de Cocina y Panadería",
      area: "Cocina y Gastronomía",
      hotelSlug: "quinta-soledad",
      tasks: [
        {
          id: "quinta_coc_01",
          categoria: "Recepción e Inocuidad Alimentaria",
          tarea: "Registrar temperaturas de refrigeradores y congeladores en bitácora sanitaria"
        },
        {
          id: "quinta_coc_02",
          categoria: "Recepción e Inocuidad Alimentaria",
          tarea: "Inspeccionar frescura, calidad y fechas de caducidad de materias primas recibidas"
        },
        {
          id: "quinta_coc_03",
          categoria: "Producción y Pase de Platillos",
          tarea: "Coordinar mise en place de verduras, carnes, caldos y repostería artesanal"
        },
        {
          id: "quinta_coc_04",
          categoria: "Producción y Pase de Platillos",
          tarea: "Supervisar sazón, temperatura y montaje estético de platillos antes de salir al pase"
        },
        {
          id: "quinta_coc_05",
          categoria: "Producción y Pase de Platillos",
          tarea: "Aplicar sistema PEPS (Primeras Entradas, Primeras Salidas) en almacén y cámaras frías"
        },
        {
          id: "quinta_coc_06",
          categoria: "Sanitización y Cierre de Cocina",
          tarea: "Sanitizar tablas de corte, cuchillos, freidoras y superficies de trabajo en acero inoxidable"
        },
        {
          id: "quinta_coc_07",
          categoria: "Sanitización y Cierre de Cocina",
          tarea: "Etiquetar y fechar todos los alimentos procesados y conservados en frío"
        },
        {
          id: "quinta_coc_08",
          categoria: "Sanitización y Cierre de Cocina",
          tarea: "Cerrar llaves de paso de gas, apagar campanas de extracción y verificar orden final"
        }
      ]
    }
  ],
  "frontera-49": [
    {
      id: "frontera_mantenimiento",
      nombre: "Encargado de Mantenimiento y Servicios",
      area: "Mantenimiento y Operaciones",
      hotelSlug: "frontera-49",
      tasks: [
        {
          id: "frontera_mant_01",
          categoria: "Ronda Matutina de Instalaciones",
          tarea: "Verificar presión del sistema hidroneumático y temperatura de calentadores de agua"
        },
        {
          id: "frontera_mant_02",
          categoria: "Ronda Matutina de Instalaciones",
          tarea: "Revisar encendido y funcionamiento de luminarias en áreas comunes, pasillos y fachada"
        },
        {
          id: "frontera_mant_03",
          categoria: "Ronda Matutina de Instalaciones",
          tarea: "Inspeccionar cerraduras electrónicas y funcionamiento de puertas de acceso principal"
        },
        {
          id: "frontera_mant_04",
          categoria: "Mantenimiento Preventivo y Correctivo",
          tarea: "Atender y resolver reportes prioritarios de mantenimiento generados por recepción"
        },
        {
          id: "frontera_mant_05",
          categoria: "Mantenimiento Preventivo y Correctivo",
          tarea: "Revisar y dar limpieza a filtros de aire acondicionado y sistemas de ventilación"
        },
        {
          id: "frontera_mant_06",
          categoria: "Mantenimiento Preventivo y Correctivo",
          tarea: "Inspeccionar estado operativo de conexiones eléctricas, interruptores y centros de carga"
        },
        {
          id: "frontera_mant_07",
          categoria: "Seguridad y Cierre de Bitácora",
          tarea: "Verificar presión de extintores, detectores de humo y rutas de evacuación libres"
        },
        {
          id: "frontera_mant_08",
          categoria: "Seguridad y Cierre de Bitácora",
          tarea: "Tomar lecturas de medidores de luz y agua y registrar reporte en bitácora de turno"
        }
      ]
    }
  ]
};

export interface Employee {
  id: string;
  numeroEmpleado: string;
  nombre: string;
  hotelSlug: string;
  puestoId: string;
  puestoNombre: string;
  area: string;
}

export const INITIAL_EMPLOYEES: Employee[] = [
  {
    id: "emp_ajusco_101",
    numeroEmpleado: "101",
    nombre: "Alejandro Morales Rivera",
    hotelSlug: "ajusco",
    puestoId: "ajusco_recepcion",
    puestoNombre: "Recepcionista A",
    area: "Recepción y Administración"
  },
  {
    id: "emp_valle_201",
    numeroEmpleado: "201",
    nombre: "Sofía Mendoza Castillo",
    hotelSlug: "valle-de-bravo",
    puestoId: "valle_ama_llaves",
    puestoNombre: "Camarista / Ama de Llaves",
    area: "Ama de Llaves y Habitaciones"
  },
  {
    id: "emp_tepoztlan_301",
    numeroEmpleado: "301",
    nombre: "Mateo Hernández Bautista",
    hotelSlug: "tepoztlan",
    puestoId: "tepoztlan_ab",
    puestoNombre: "Capitán de Alimentos y Bebidas",
    area: "Alimentos y Bebidas / Restaurante"
  },
  {
    id: "emp_quinta_401",
    numeroEmpleado: "401",
    nombre: "Valentina Torres Gómez",
    hotelSlug: "quinta-soledad",
    puestoId: "quinta_cocina",
    puestoNombre: "Chef de Cocina y Panadería",
    area: "Cocina y Gastronomía"
  },
  {
    id: "emp_frontera_501",
    numeroEmpleado: "501",
    nombre: "Diego Ramírez Salgado",
    hotelSlug: "frontera-49",
    puestoId: "frontera_mantenimiento",
    puestoNombre: "Encargado de Mantenimiento y Servicios",
    area: "Mantenimiento y Operaciones"
  }
];
