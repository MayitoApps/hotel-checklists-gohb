// AUTO-GENERATED INITIAL CATALOG DATA FROM AUDITED EXCEL FILES
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
        "id": "ajusco_01",
        "nombre": "Gerencia General",
        "area": "Gerente",
        "hotelSlug": "ajusco",
        "tasks": [
            {
                "id": "ajusco_01_t01",
                "categoria": "Supervisión Operativa",
                "tarea": "Revisar diariamente las condiciones del inmueble (salones, jardines, baños, exposiciones y áreas históricas)."
            },
            {
                "id": "ajusco_01_t02",
                "categoria": "Supervisión Operativa",
                "tarea": "Supervisar todas las áreas operativas (recepción, A&B, limpieza, áreas comunes, jardines, mantenimiento y administración)."
            },
            {
                "id": "ajusco_01_t03",
                "categoria": "Gestión y Control",
                "tarea": "Monitorear inventarios, insumos, consumos y reporte de gastos."
            },
            {
                "id": "ajusco_01_t04",
                "categoria": "Gestión y Control",
                "tarea": "Aprobar compras menores y validar necesidades del inmueble."
            },
            {
                "id": "ajusco_01_t05",
                "categoria": "Gestión y Control",
                "tarea": "Revisar bitácoras operativas, de mantenimiento y de eventos."
            },
            {
                "id": "ajusco_01_t06",
                "categoria": "Personal y Comunicación",
                "tarea": "Supervisar puntualidad, presentación, actitud y desempeño del personal."
            },
            {
                "id": "ajusco_01_t07",
                "categoria": "Personal y Comunicación",
                "tarea": "Realizar juntas operativas semanales y asegurar el cumplimiento de acuerdos."
            },
            {
                "id": "ajusco_01_t08",
                "categoria": "Personal y Comunicación",
                "tarea": "Validar que los montajes, tiempos y servicios de eventos cumplan con lo cotizado."
            },
            {
                "id": "ajusco_01_t09",
                "categoria": "Experiencia del Visitante",
                "tarea": "Asegurar una experiencia cálida, ordenada y alineada a la esencia cultural."
            },
            {
                "id": "ajusco_01_t10",
                "categoria": "Experiencia del Visitante",
                "tarea": "Supervisar la atención a eventos, recorridos, producciones y visitantes generales."
            },
            {
                "id": "ajusco_01_t11",
                "categoria": "Administración y Control",
                "tarea": "Supervisar bitácoras operativas, de mantenimiento y de eventos"
            }
        ]
    },
    {
        "id": "ajusco_02",
        "nombre": "Recepcionista A",
        "area": "Administración",
        "hotelSlug": "ajusco",
        "tasks": [
            {
                "id": "ajusco_02_t01",
                "categoria": "Atención a Huéspedes",
                "tarea": "Dar seguimiento a  reservas que arriban durante el día"
            },
            {
                "id": "ajusco_02_t02",
                "categoria": "Atención a Huéspedes",
                "tarea": "Verificar las reservas recibidas asegurando que la información este correcta y actualisada"
            },
            {
                "id": "ajusco_02_t03",
                "categoria": "Atención a Huéspedes",
                "tarea": "Seguimiento diario de las reservaciones con status de no show"
            },
            {
                "id": "ajusco_02_t04",
                "categoria": "Atención a Huéspedes",
                "tarea": "Recibir, registrar y asignar habitaciones a los huéspedes."
            },
            {
                "id": "ajusco_02_t05",
                "categoria": "Atención a Huéspedes",
                "tarea": "Proporcionar información sobre los servicios, facilidades, precios y disponibilidad del hotel."
            },
            {
                "id": "ajusco_02_t06",
                "categoria": "Atención a Huéspedes",
                "tarea": "Realizar el proceso de check-out y procesar pagos."
            },
            {
                "id": "ajusco_02_t07",
                "categoria": "Atención a Huéspedes",
                "tarea": "Resolver problemas, quejas y ofrecer recomendaciones de actividades en el área."
            },
            {
                "id": "ajusco_02_t08",
                "categoria": "Gestión Administrativa",
                "tarea": "Gestionar, confirmar y actualizar las reservas de habitaciones (cambios y cancelaciones)."
            },
            {
                "id": "ajusco_02_t09",
                "categoria": "Gestión Administrativa",
                "tarea": "Procesar pagos, gestionar facturas y mantener registros organizados."
            },
            {
                "id": "ajusco_02_t10",
                "categoria": "Gestión Administrativa",
                "tarea": "Generar venta de experiencias"
            }
        ]
    },
    {
        "id": "ajusco_03",
        "nombre": "Mesero A",
        "area": "A&B",
        "hotelSlug": "ajusco",
        "tasks": [
            {
                "id": "ajusco_03_t01",
                "categoria": "Atención y Servicio",
                "tarea": "Atender a los clientes con amabilidad, tomar pedidos y ofrecer información sobre menús y especialidades."
            },
            {
                "id": "ajusco_03_t02",
                "categoria": "Atención y Servicio",
                "tarea": "Servir alimentos y bebidas de manera eficiente y segura."
            },
            {
                "id": "ajusco_03_t03",
                "categoria": "Atención y Servicio",
                "tarea": "Retirar platos, limpiar mesas de forma constante y mantener limpias las áreas de trabajo."
            },
            {
                "id": "ajusco_03_t04",
                "categoria": "Atención y Servicio",
                "tarea": "Apoyar en el montaje y desmontaje según las indicaciones del gerente."
            },
            {
                "id": "ajusco_03_t05",
                "categoria": "Atención y Servicio",
                "tarea": "Generar venta a traves de recomendaciones de alimentos y bebidas."
            }
        ]
    },
    {
        "id": "ajusco_04",
        "nombre": "Mesero B",
        "area": "A&B",
        "hotelSlug": "ajusco",
        "tasks": [
            {
                "id": "ajusco_04_t01",
                "categoria": "Atención y Servicio",
                "tarea": "Atender a los clientes con amabilidad, tomar pedidos y ofrecer información sobre menús y especialidades."
            },
            {
                "id": "ajusco_04_t02",
                "categoria": "Atención y Servicio",
                "tarea": "Servir alimentos y bebidas de manera eficiente y segura."
            },
            {
                "id": "ajusco_04_t03",
                "categoria": "Atención y Servicio",
                "tarea": "Retirar platos, limpiar mesas de forma constante y mantener limpias las áreas de trabajo."
            },
            {
                "id": "ajusco_04_t04",
                "categoria": "Atención y Servicio",
                "tarea": "Apoyar en el montaje y desmontaje según las indicaciones del gerente."
            },
            {
                "id": "ajusco_04_t05",
                "categoria": "Atención y Servicio",
                "tarea": "Generar venta a traves de recomendaciones de alimentos y bebidas."
            }
        ]
    },
    {
        "id": "ajusco_05",
        "nombre": "Chef",
        "area": "Cocina",
        "hotelSlug": "ajusco",
        "tasks": [
            {
                "id": "ajusco_05_t01",
                "categoria": "Producción y Calidad",
                "tarea": "Preparar y cocinar los alimentos siguiendo estrictamente las recetas y estándares de calidad e higiene."
            },
            {
                "id": "ajusco_05_t02",
                "categoria": "Producción y Calidad",
                "tarea": "Mantener al día el control administrativo de pedidos, inventarios y planificación de menús."
            },
            {
                "id": "ajusco_05_t03",
                "categoria": "Producción y Calidad",
                "tarea": "Asegurar la organización, limpieza y desinfección constante de la cocina."
            },
            {
                "id": "ajusco_05_t04",
                "categoria": "Producción y Calidad",
                "tarea": "Supervisar y dirigir al personal de cocina"
            }
        ]
    },
    {
        "id": "ajusco_06",
        "nombre": "Ayudantes de cocina",
        "area": "Cocina",
        "hotelSlug": "ajusco",
        "tasks": [
            {
                "id": "ajusco_06_t01",
                "categoria": "Producción y Calidad",
                "tarea": "Respaldar actividades indicadas por el chef en tiempo y forma"
            },
            {
                "id": "ajusco_06_t02",
                "categoria": "Producción y Calidad",
                "tarea": "Ayudar en la preparación y cocción de alimentos."
            },
            {
                "id": "ajusco_06_t03",
                "categoria": "Producción y Calidad",
                "tarea": "Asegurar la preparación y el servicio seguro e higiénico de los alimentos."
            },
            {
                "id": "ajusco_06_t04",
                "categoria": "Producción y Calidad",
                "tarea": "Limpieza y organización de estaciones"
            }
        ]
    },
    {
        "id": "ajusco_07",
        "nombre": "Encargado de bar",
        "area": "Bar",
        "hotelSlug": "ajusco",
        "tasks": [
            {
                "id": "ajusco_07_t01",
                "categoria": "Producción y Calidad",
                "tarea": "Preparar y cocinar los alimentos siguiendo estrictamente las recetas y estándares de calidad e higiene."
            },
            {
                "id": "ajusco_07_t02",
                "categoria": "Producción y Calidad",
                "tarea": "Mantener al día el control administrativo de pedidos, inventarios y planificación de menús."
            },
            {
                "id": "ajusco_07_t03",
                "categoria": "Producción y Calidad",
                "tarea": "Asegurar la organización, limpieza y desinfección constante de la cocina."
            },
            {
                "id": "ajusco_07_t04",
                "categoria": "Atención y Servicio",
                "tarea": "Atender a los clientes con amabilidad, tomar pedidos y ofrecer información sobre menús y especialidades."
            },
            {
                "id": "ajusco_07_t05",
                "categoria": "Atención y Servicio",
                "tarea": "Servir alimentos y bebidas de manera eficiente y segura."
            },
            {
                "id": "ajusco_07_t06",
                "categoria": "Atención y Servicio",
                "tarea": "Retirar platos, limpiar mesas de forma constante y mantener limpias las áreas de trabajo."
            },
            {
                "id": "ajusco_07_t07",
                "categoria": "Atención y Servicio",
                "tarea": "Apoyar en el montaje y desmontaje según las indicaciones del gerente."
            },
            {
                "id": "ajusco_07_t08",
                "categoria": "Atención y Servicio",
                "tarea": "Generar venta a traves de recomendaciones de alimentos y bebidas."
            }
        ]
    },
    {
        "id": "ajusco_08",
        "nombre": "Mucama",
        "area": "AMA DE LLAVESLIMPIEZA",
        "hotelSlug": "ajusco",
        "tasks": [
            {
                "id": "ajusco_08_t01",
                "categoria": "Limpieza de Habitaciones",
                "tarea": "Limpiar y organizar las habitaciones de acuerdo con los estándares de calidad del establecimiento."
            },
            {
                "id": "ajusco_08_t02",
                "categoria": "Limpieza de Habitaciones",
                "tarea": "Cambiar la ropa de cama y las toallas"
            },
            {
                "id": "ajusco_08_t03",
                "categoria": "Limpieza de Habitaciones",
                "tarea": "Aseo profundo de baños y abastecimiento de productos de higiene."
            },
            {
                "id": "ajusco_08_t04",
                "categoria": "Limpieza de Habitaciones",
                "tarea": "Retirar residuos, vaciar papeleras y dejar las habitaciones listas para la llegada de nuevos huéspedes."
            },
            {
                "id": "ajusco_08_t05",
                "categoria": "Limpieza de Habitaciones",
                "tarea": "Limpieza de áreas comunes como recepción, pasillos, casa club, área de spa y área de alberca"
            }
        ]
    },
    {
        "id": "ajusco_09",
        "nombre": "Jefe de mantenimiento",
        "area": "MANTENIMIENTO",
        "hotelSlug": "ajusco",
        "tasks": [
            {
                "id": "ajusco_09_t01",
                "categoria": "Inspección y Reparación",
                "tarea": "Supervisar y coordinar las actividades de mantenimiento preventivo"
            },
            {
                "id": "ajusco_09_t02",
                "categoria": "Inspección y Reparación",
                "tarea": "Inventario de  activos y equipos"
            },
            {
                "id": "ajusco_09_t03",
                "categoria": "Inspección y Reparación",
                "tarea": "Realizar inspecciones y evaluaciones de los activos y equipos para identificar necesidades de mantenimiento"
            },
            {
                "id": "ajusco_09_t04",
                "categoria": "Inspección y Reparación",
                "tarea": "Cumplir rigurosamente con las normativas y regulaciones de seguridad."
            },
            {
                "id": "ajusco_09_t05",
                "categoria": "Inspección y Reparación",
                "tarea": "Coordinar con otros departamentos la disponibilidad de equipos y espacios."
            }
        ]
    },
    {
        "id": "ajusco_10",
        "nombre": "Mantenimiento",
        "area": "MANTENIMIENTO",
        "hotelSlug": "ajusco",
        "tasks": [
            {
                "id": "ajusco_10_t01",
                "categoria": "Inspección y Reparación",
                "tarea": "Realizar inspecciones periódicas a los equipos e instalaciones para identificar necesidades de mantenimiento preventivo y correctivo."
            },
            {
                "id": "ajusco_10_t02",
                "categoria": "Inspección y Reparación",
                "tarea": "Asegurar el buen funcionamiento, seguridad y eficiencia de los activos del hotel."
            },
            {
                "id": "ajusco_10_t03",
                "categoria": "Inspección y Reparación",
                "tarea": "Coordinar con otros departamentos la disponibilidad de equipos y espacios."
            },
            {
                "id": "ajusco_10_t04",
                "categoria": "Inspección y Reparación",
                "tarea": "Cumplir rigurosamente con las normativas y regulaciones de seguridad."
            }
        ]
    },
    {
        "id": "ajusco_11",
        "nombre": "Jefe de Jardineria",
        "area": "MANTENIMIENTO",
        "hotelSlug": "ajusco",
        "tasks": [
            {
                "id": "ajusco_11_t01",
                "categoria": "Cuidado de Áreas Verdes",
                "tarea": "Realizar tareas de jardinería esenciales: podar, regar, fertilizar y controlar plagas en plantas y flores."
            },
            {
                "id": "ajusco_11_t02",
                "categoria": "Cuidado de Áreas Verdes",
                "tarea": "Mantener la limpieza, el orden y la seguridad en los caminos y espacios verdes para el libre tránsito de los visitantes."
            }
        ]
    },
    {
        "id": "ajusco_12",
        "nombre": "Jardinero",
        "area": "MANTENIMIENTO",
        "hotelSlug": "ajusco",
        "tasks": [
            {
                "id": "ajusco_12_t01",
                "categoria": "Cuidado de Áreas Verdes",
                "tarea": "Realizar tareas de jardinería esenciales: podar, regar, fertilizar y controlar plagas en plantas y flores."
            },
            {
                "id": "ajusco_12_t02",
                "categoria": "Cuidado de Áreas Verdes",
                "tarea": "Mantener la limpieza, el orden y la seguridad en los caminos y espacios verdes para el libre tránsito de los visitantes."
            }
        ]
    },
    {
        "id": "ajusco_13",
        "nombre": "Encargado de spa",
        "area": "Origen Centro Holistico",
        "hotelSlug": "ajusco",
        "tasks": [
            {
                "id": "ajusco_13_t01",
                "categoria": "Seguridad e higiene",
                "tarea": "Supervisar el cumplimiento estricto de los protocolos de higiene, normativas de salud, seguridad y protección civil."
            },
            {
                "id": "ajusco_13_t02",
                "categoria": "Administración y control",
                "tarea": "Revisar los reportes de ingresos diarios generados por hospedaje, tratamientos y experiencias holísticas."
            },
            {
                "id": "ajusco_13_t03",
                "categoria": "Administración y control",
                "tarea": "Dirigir y coordinar al equipo de terapeutas, facilitadores y guías de ceremonias asignados al turno."
            },
            {
                "id": "ajusco_13_t04",
                "categoria": "Control de agenda",
                "tarea": ": Revisar la agenda diaria de recepción, check-ins, check-outs y reservas de terapia"
            },
            {
                "id": "ajusco_13_t05",
                "categoria": "Supervisión de instalaciones",
                "tarea": "Verificar que las cabinas, áreas de spa y zonas comunes se encuentren en condiciones óptimas, limpias y armonizadas."
            },
            {
                "id": "ajusco_13_t06",
                "categoria": "Venta",
                "tarea": "Coordinar promociones, paquetes especiales (retiros, días de spa) y apoyar al área comercial en la detección, prospección y  atención de nuevos clientes."
            }
        ]
    },
    {
        "id": "ajusco_14",
        "nombre": "TERAPEUTAS INTERNAS",
        "area": "Origen Centro Holistico",
        "hotelSlug": "ajusco",
        "tasks": [
            {
                "id": "ajusco_14_t01",
                "categoria": "Seguridad e higiene",
                "tarea": "Mantener una higiene personal impecable y desinfectar camillas, utensilios y materiales de inmediato tras cada servicio."
            },
            {
                "id": "ajusco_14_t02",
                "categoria": "Administración y control",
                "tarea": "Revisar los reportes de ingresos diarios generados por hospedaje, tratamientos y experiencias holísticas."
            },
            {
                "id": "ajusco_14_t03",
                "categoria": "Atención al cliente y operación",
                "tarea": "Realizar los tratamientos y masajes conforme a los protocolos establecidos del centro."
            },
            {
                "id": "ajusco_14_t04",
                "categoria": "Control de insumos",
                "tarea": "Verificar la disponibilidad constante de suministros esenciales en cabina (aceites, velas, toallas, instrumentos)."
            },
            {
                "id": "ajusco_14_t05",
                "categoria": "Registro de bitacora",
                "tarea": "Registrar puntualmente cada servicio en la bitácora oficial y reportar incidencias o necesidades de material a la gerencia."
            },
            {
                "id": "ajusco_14_t06",
                "categoria": "Venta",
                "tarea": "Apoyar al área comercial en la detección, prospección y  atención de nuevos clientes."
            },
            {
                "id": "ajusco_14_t07",
                "categoria": "Venta",
                "tarea": "Ofrecer recomendaciones personalizadas posteriores al tratamiento (ejercicios de respiración, infusiones) y orientar sobre otras experiencias del centro"
            }
        ]
    }
],
  "valle-de-bravo": [
    {
        "id": "valle-de-bravo_01",
        "nombre": "Gerencia General",
        "area": "Gerente",
        "hotelSlug": "valle-de-bravo",
        "tasks": [
            {
                "id": "valle-de-bravo_01_t01",
                "categoria": "Supervisión Operativa",
                "tarea": "Revisar diariamente las condiciones del inmueble (salones, jardines, baños, exposiciones y áreas históricas)."
            },
            {
                "id": "valle-de-bravo_01_t02",
                "categoria": "Supervisión Operativa",
                "tarea": "Supervisar todas las áreas operativas (recepción, A&B, limpieza, áreas comunes, jardines, mantenimiento y administración)."
            },
            {
                "id": "valle-de-bravo_01_t03",
                "categoria": "Gestión y Control",
                "tarea": "Monitorear inventarios, insumos, consumos y reporte de gastos."
            },
            {
                "id": "valle-de-bravo_01_t04",
                "categoria": "Gestión y Control",
                "tarea": "Aprobar compras menores y validar necesidades del inmueble."
            },
            {
                "id": "valle-de-bravo_01_t05",
                "categoria": "Gestión y Control",
                "tarea": "Revisar bitácoras operativas, de mantenimiento y de eventos."
            },
            {
                "id": "valle-de-bravo_01_t06",
                "categoria": "Personal y Comunicación",
                "tarea": "Supervisar puntualidad, presentación, actitud y desempeño del personal."
            },
            {
                "id": "valle-de-bravo_01_t07",
                "categoria": "Personal y Comunicación",
                "tarea": "Realizar juntas operativas semanales y asegurar el cumplimiento de acuerdos."
            },
            {
                "id": "valle-de-bravo_01_t08",
                "categoria": "Personal y Comunicación",
                "tarea": "Validar que los montajes, tiempos y servicios de eventos cumplan con lo cotizado."
            },
            {
                "id": "valle-de-bravo_01_t09",
                "categoria": "Experiencia del Visitante",
                "tarea": "Asegurar una experiencia cálida, ordenada y alineada a la esencia cultural."
            },
            {
                "id": "valle-de-bravo_01_t10",
                "categoria": "Experiencia del Visitante",
                "tarea": "Supervisar la atención a eventos, recorridos, producciones y visitantes generales."
            },
            {
                "id": "valle-de-bravo_01_t11",
                "categoria": "Administración y Control",
                "tarea": "Supervisar bitácoras operativas, de mantenimiento y de eventos"
            }
        ]
    },
    {
        "id": "valle-de-bravo_02",
        "nombre": "Recepcionista A",
        "area": "Administración",
        "hotelSlug": "valle-de-bravo",
        "tasks": [
            {
                "id": "valle-de-bravo_02_t01",
                "categoria": "Atención a Huéspedes",
                "tarea": "Dar seguimiento a  reservas que arriban durante el día"
            },
            {
                "id": "valle-de-bravo_02_t02",
                "categoria": "Atención a Huéspedes",
                "tarea": "Verificar las reservas recibidas asegurando que la información este correcta y actualisada"
            },
            {
                "id": "valle-de-bravo_02_t03",
                "categoria": "Atención a Huéspedes",
                "tarea": "Seguimiento diario de las reservaciones con status de no show"
            },
            {
                "id": "valle-de-bravo_02_t04",
                "categoria": "Atención a Huéspedes",
                "tarea": "Recibir, registrar y asignar habitaciones a los huéspedes."
            },
            {
                "id": "valle-de-bravo_02_t05",
                "categoria": "Atención a Huéspedes",
                "tarea": "Proporcionar información sobre los servicios, facilidades, precios y disponibilidad del hotel."
            },
            {
                "id": "valle-de-bravo_02_t06",
                "categoria": "Atención a Huéspedes",
                "tarea": "Realizar el proceso de check-out y procesar pagos."
            },
            {
                "id": "valle-de-bravo_02_t07",
                "categoria": "Atención a Huéspedes",
                "tarea": "Resolver problemas, quejas y ofrecer recomendaciones de actividades en el área."
            },
            {
                "id": "valle-de-bravo_02_t08",
                "categoria": "Gestión Administrativa",
                "tarea": "Gestionar, confirmar y actualizar las reservas de habitaciones (cambios y cancelaciones)."
            },
            {
                "id": "valle-de-bravo_02_t09",
                "categoria": "Gestión Administrativa",
                "tarea": "Procesar pagos, gestionar facturas y mantener registros organizados."
            },
            {
                "id": "valle-de-bravo_02_t10",
                "categoria": "Gestión Administrativa",
                "tarea": "Generar venta de experiencias"
            }
        ]
    },
    {
        "id": "valle-de-bravo_03",
        "nombre": "Mesero A",
        "area": "A&B",
        "hotelSlug": "valle-de-bravo",
        "tasks": [
            {
                "id": "valle-de-bravo_03_t01",
                "categoria": "Atención y Servicio",
                "tarea": "Atender a los clientes con amabilidad, tomar pedidos y ofrecer información sobre menús y especialidades."
            },
            {
                "id": "valle-de-bravo_03_t02",
                "categoria": "Atención y Servicio",
                "tarea": "Servir alimentos y bebidas de manera eficiente y segura."
            },
            {
                "id": "valle-de-bravo_03_t03",
                "categoria": "Atención y Servicio",
                "tarea": "Retirar platos, limpiar mesas de forma constante y mantener limpias las áreas de trabajo."
            },
            {
                "id": "valle-de-bravo_03_t04",
                "categoria": "Atención y Servicio",
                "tarea": "Apoyar en el montaje y desmontaje según las indicaciones del gerente."
            },
            {
                "id": "valle-de-bravo_03_t05",
                "categoria": "Atención y Servicio",
                "tarea": "Generar venta a traves de recomendaciones de alimentos y bebidas."
            }
        ]
    },
    {
        "id": "valle-de-bravo_04",
        "nombre": "Mesero C",
        "area": "A&B",
        "hotelSlug": "valle-de-bravo",
        "tasks": [
            {
                "id": "valle-de-bravo_04_t01",
                "categoria": "Atención y Servicio",
                "tarea": "Atender a los clientes con amabilidad, tomar pedidos y ofrecer información sobre menús y especialidades."
            },
            {
                "id": "valle-de-bravo_04_t02",
                "categoria": "Atención y Servicio",
                "tarea": "Servir alimentos y bebidas de manera eficiente y segura."
            },
            {
                "id": "valle-de-bravo_04_t03",
                "categoria": "Atención y Servicio",
                "tarea": "Retirar platos, limpiar mesas de forma constante y mantener limpias las áreas de trabajo."
            },
            {
                "id": "valle-de-bravo_04_t04",
                "categoria": "Atención y Servicio",
                "tarea": "Apoyar en el montaje y desmontaje según las indicaciones del gerente."
            },
            {
                "id": "valle-de-bravo_04_t05",
                "categoria": "Atención y Servicio",
                "tarea": "Generar venta a traves de recomendaciones de alimentos y bebidas."
            }
        ]
    },
    {
        "id": "valle-de-bravo_05",
        "nombre": "Chef",
        "area": "Cocina",
        "hotelSlug": "valle-de-bravo",
        "tasks": [
            {
                "id": "valle-de-bravo_05_t01",
                "categoria": "Producción y Calidad",
                "tarea": "Preparar y cocinar los alimentos siguiendo estrictamente las recetas y estándares de calidad e higiene."
            },
            {
                "id": "valle-de-bravo_05_t02",
                "categoria": "Producción y Calidad",
                "tarea": "Mantener al día el control administrativo de pedidos, inventarios y planificación de menús."
            },
            {
                "id": "valle-de-bravo_05_t03",
                "categoria": "Producción y Calidad",
                "tarea": "Asegurar la organización, limpieza y desinfección constante de la cocina."
            },
            {
                "id": "valle-de-bravo_05_t04",
                "categoria": "Producción y Calidad",
                "tarea": "Supervisar y dirigir al personal de cocina"
            }
        ]
    },
    {
        "id": "valle-de-bravo_06",
        "nombre": "Segunda de Cocina",
        "area": "Cocina",
        "hotelSlug": "valle-de-bravo",
        "tasks": [
            {
                "id": "valle-de-bravo_06_t01",
                "categoria": "Producción y Calidad",
                "tarea": "Respaldar actividades indicadas por el chef en tiempo y forma"
            },
            {
                "id": "valle-de-bravo_06_t02",
                "categoria": "Producción y Calidad",
                "tarea": "Ayudar en la preparación y cocción de alimentos."
            },
            {
                "id": "valle-de-bravo_06_t03",
                "categoria": "Producción y Calidad",
                "tarea": "Asegurar la preparación y el servicio seguro e higiénico de los alimentos."
            },
            {
                "id": "valle-de-bravo_06_t04",
                "categoria": "Producción y Calidad",
                "tarea": "Limpieza y organización de estaciones"
            }
        ]
    },
    {
        "id": "valle-de-bravo_07",
        "nombre": "Ayudantes",
        "area": "Cocina",
        "hotelSlug": "valle-de-bravo",
        "tasks": [
            {
                "id": "valle-de-bravo_07_t01",
                "categoria": "Producción y Calidad",
                "tarea": "Respaldar actividades indicadas por el chef en tiempo y forma"
            },
            {
                "id": "valle-de-bravo_07_t02",
                "categoria": "Producción y Calidad",
                "tarea": "Ayudar en la preparación y cocción de alimentos."
            },
            {
                "id": "valle-de-bravo_07_t03",
                "categoria": "Producción y Calidad",
                "tarea": "Asegurar la preparación y el servicio seguro e higiénico de los alimentos."
            },
            {
                "id": "valle-de-bravo_07_t04",
                "categoria": "Producción y Calidad",
                "tarea": "Limpieza y organización de estaciones"
            },
            {
                "id": "valle-de-bravo_07_t05",
                "categoria": "Producción y Calidad",
                "tarea": "Limpieza y organización de loza"
            }
        ]
    },
    {
        "id": "valle-de-bravo_08",
        "nombre": "Mucama",
        "area": "AMA DE LLAVESLIMPIEZA",
        "hotelSlug": "valle-de-bravo",
        "tasks": [
            {
                "id": "valle-de-bravo_08_t01",
                "categoria": "Limpieza de Habitaciones",
                "tarea": "Limpiar y organizar las habitaciones de acuerdo con los estándares de calidad del establecimiento."
            },
            {
                "id": "valle-de-bravo_08_t02",
                "categoria": "Limpieza de Habitaciones",
                "tarea": "Cambiar la ropa de cama y las toallas"
            },
            {
                "id": "valle-de-bravo_08_t03",
                "categoria": "Limpieza de Habitaciones",
                "tarea": "Aseo profundo de baños y abastecimiento de productos de higiene."
            },
            {
                "id": "valle-de-bravo_08_t04",
                "categoria": "Limpieza de Habitaciones",
                "tarea": "Retirar residuos, vaciar papeleras y dejar las habitaciones listas para la llegada de nuevos huéspedes."
            },
            {
                "id": "valle-de-bravo_08_t05",
                "categoria": "Limpieza de Habitaciones",
                "tarea": "Limpieza de áreas comunes como recepción, pasillos, casa club, área de spa y área de alberca"
            }
        ]
    },
    {
        "id": "valle-de-bravo_09",
        "nombre": "Jefe de mantenimiento",
        "area": "MANTENIMIENTO",
        "hotelSlug": "valle-de-bravo",
        "tasks": [
            {
                "id": "valle-de-bravo_09_t01",
                "categoria": "Inspección y Reparación",
                "tarea": "Supervisar y coordinar las actividades de mantenimiento preventivo"
            },
            {
                "id": "valle-de-bravo_09_t02",
                "categoria": "Inspección y Reparación",
                "tarea": "Inventario de  activos y equipos"
            },
            {
                "id": "valle-de-bravo_09_t03",
                "categoria": "Inspección y Reparación",
                "tarea": "Realizar inspecciones y evaluaciones de los activos y equipos para identificar necesidades de mantenimiento"
            },
            {
                "id": "valle-de-bravo_09_t04",
                "categoria": "Inspección y Reparación",
                "tarea": "Cumplir rigurosamente con las normativas y regulaciones de seguridad."
            },
            {
                "id": "valle-de-bravo_09_t05",
                "categoria": "Inspección y Reparación",
                "tarea": "Coordinar con otros departamentos la disponibilidad de equipos y espacios."
            }
        ]
    },
    {
        "id": "valle-de-bravo_10",
        "nombre": "Mantenimiento",
        "area": "MANTENIMIENTO",
        "hotelSlug": "valle-de-bravo",
        "tasks": [
            {
                "id": "valle-de-bravo_10_t01",
                "categoria": "Inspección y Reparación",
                "tarea": "Realizar inspecciones periódicas a los equipos e instalaciones para identificar necesidades de mantenimiento preventivo y correctivo."
            },
            {
                "id": "valle-de-bravo_10_t02",
                "categoria": "Inspección y Reparación",
                "tarea": "Asegurar el buen funcionamiento, seguridad y eficiencia de los activos del hotel."
            },
            {
                "id": "valle-de-bravo_10_t03",
                "categoria": "Inspección y Reparación",
                "tarea": "Coordinar con otros departamentos la disponibilidad de equipos y espacios."
            },
            {
                "id": "valle-de-bravo_10_t04",
                "categoria": "Inspección y Reparación",
                "tarea": "Cumplir rigurosamente con las normativas y regulaciones de seguridad."
            }
        ]
    },
    {
        "id": "valle-de-bravo_11",
        "nombre": "Jardinero",
        "area": "MANTENIMIENTO",
        "hotelSlug": "valle-de-bravo",
        "tasks": [
            {
                "id": "valle-de-bravo_11_t01",
                "categoria": "Cuidado de Áreas Verdes",
                "tarea": "Realizar tareas de jardinería esenciales: podar, regar, fertilizar y controlar plagas en plantas y flores."
            },
            {
                "id": "valle-de-bravo_11_t02",
                "categoria": "Cuidado de Áreas Verdes",
                "tarea": "Mantener la limpieza, el orden y la seguridad en los caminos y espacios verdes para el libre tránsito de los visitantes."
            }
        ]
    }
],
  "tepoztlan": [
    {
        "id": "tepoztlan_01",
        "nombre": "Gerencia General",
        "area": "Gerente",
        "hotelSlug": "tepoztlan",
        "tasks": [
            {
                "id": "tepoztlan_01_t01",
                "categoria": "Supervisión Operativa",
                "tarea": "Revisar diariamente las condiciones del inmueble (salones, jardines, baños, exposiciones y áreas históricas)."
            },
            {
                "id": "tepoztlan_01_t02",
                "categoria": "Supervisión Operativa",
                "tarea": "Supervisar todas las áreas operativas (recepción, A&B, limpieza, áreas comunes, jardines, mantenimiento y administración)."
            },
            {
                "id": "tepoztlan_01_t03",
                "categoria": "Gestión y Control",
                "tarea": "Monitorear inventarios, insumos, consumos y reporte de gastos."
            },
            {
                "id": "tepoztlan_01_t04",
                "categoria": "Gestión y Control",
                "tarea": "Aprobar compras menores y validar necesidades del inmueble."
            },
            {
                "id": "tepoztlan_01_t05",
                "categoria": "Gestión y Control",
                "tarea": "Revisar bitácoras operativas, de mantenimiento y de eventos."
            },
            {
                "id": "tepoztlan_01_t06",
                "categoria": "Personal y Comunicación",
                "tarea": "Supervisar puntualidad, presentación, actitud y desempeño del personal."
            },
            {
                "id": "tepoztlan_01_t07",
                "categoria": "Personal y Comunicación",
                "tarea": "Realizar juntas operativas semanales y asegurar el cumplimiento de acuerdos."
            },
            {
                "id": "tepoztlan_01_t08",
                "categoria": "Personal y Comunicación",
                "tarea": "Validar que los montajes, tiempos y servicios de eventos cumplan con lo cotizado."
            },
            {
                "id": "tepoztlan_01_t09",
                "categoria": "Experiencia del Visitante",
                "tarea": "Asegurar una experiencia cálida, ordenada y alineada a la esencia cultural."
            },
            {
                "id": "tepoztlan_01_t10",
                "categoria": "Experiencia del Visitante",
                "tarea": "Supervisar la atención a eventos, recorridos, producciones y visitantes generales."
            },
            {
                "id": "tepoztlan_01_t11",
                "categoria": "Administración y Control",
                "tarea": "Supervisar bitácoras operativas, de mantenimiento y de eventos"
            },
            {
                "id": "tepoztlan_01_t12",
                "categoria": "Administración y Control",
                "tarea": "Realizar cortes diarios, conciliaciones, comprobación de gastos y gestión de pagos, facturación y presupuestos."
            },
            {
                "id": "tepoztlan_01_t13",
                "categoria": "Administración y Control",
                "tarea": "Supervisar y registrar los inventarios de A&B, limpieza y mantenimiento, manteniendo actualizada la carpeta de mermas y coordinando reposiciones con gerencia para evitar desabastos"
            },
            {
                "id": "tepoztlan_01_t14",
                "categoria": "Administración y Control",
                "tarea": "Gestionar la documentación fiscal, notas de venta, solicitudes de compra y la relación con proveedores, contratos y acuerdos institucionales."
            }
        ]
    },
    {
        "id": "tepoztlan_02",
        "nombre": "Subgerencia",
        "area": "Subgerente",
        "hotelSlug": "tepoztlan",
        "tasks": [
            {
                "id": "tepoztlan_02_t01",
                "categoria": "Monitoreo de Instalaciones",
                "tarea": "Verificar la limpieza, el orden y la presentación visual de salones, jardines, cafetería, baños y pasillos antes, durante y después de la apertura."
            },
            {
                "id": "tepoztlan_02_t02",
                "categoria": "Operación y Atención",
                "tarea": "Apoyar a recepción en la atención a grupos, artistas, proveedores y visitantes."
            },
            {
                "id": "tepoztlan_02_t03",
                "categoria": "Operación y Atención",
                "tarea": "Asegurar que el personal cumpla con los protocolos de apertura, operación y cierre."
            },
            {
                "id": "tepoztlan_02_t04",
                "categoria": "Operación y Atención",
                "tarea": "Mantener actualizada la bitácora de incidencias y prioridades del día."
            },
            {
                "id": "tepoztlan_02_t05",
                "categoria": "Operación y Atención",
                "tarea": "Supervisar puntualidad, presentación, actitud y desempeño."
            }
        ]
    },
    {
        "id": "tepoztlan_03",
        "nombre": "Capitán 1",
        "area": "A&B",
        "hotelSlug": "tepoztlan",
        "tasks": [
            {
                "id": "tepoztlan_03_t01",
                "categoria": "Supervisión del Servicio",
                "tarea": "Dirigir al equipo de meseros y ayudantes durante turnos y eventos."
            },
            {
                "id": "tepoztlan_03_t02",
                "categoria": "Supervisión del Servicio",
                "tarea": "Validar el montaje previo de mesas, cristalería, loza, cubiertos y estaciones (coffee break, cocteles, etc.)."
            },
            {
                "id": "tepoztlan_03_t03",
                "categoria": "Supervisión del Servicio",
                "tarea": "Verificar que la presentación de platillos y bebidas cumpla con los estándares antes de salir a servicio."
            },
            {
                "id": "tepoztlan_03_t04",
                "categoria": "Control y Cierre",
                "tarea": "Revisar existencias de insumos básicos (bebidas, cristalería, consumibles) y reportar faltantes."
            },
            {
                "id": "tepoztlan_03_t05",
                "categoria": "Control y Cierre",
                "tarea": "Supervisar el desmontaje, la limpieza general y la correcta ubicación del mobiliario al finalizar."
            },
            {
                "id": "tepoztlan_03_t06",
                "categoria": "Control y Cierre",
                "tarea": "Entregar reportes de consumos, incidencias y observaciones del turno."
            }
        ]
    },
    {
        "id": "tepoztlan_04",
        "nombre": "Mesero A",
        "area": "A&B",
        "hotelSlug": "tepoztlan",
        "tasks": [
            {
                "id": "tepoztlan_04_t01",
                "categoria": "Atención y Servicio",
                "tarea": "Atender a los clientes con amabilidad, tomar pedidos y ofrecer información sobre menús y especialidades."
            },
            {
                "id": "tepoztlan_04_t02",
                "categoria": "Atención y Servicio",
                "tarea": "Servir alimentos y bebidas de manera eficiente y segura."
            },
            {
                "id": "tepoztlan_04_t03",
                "categoria": "Atención y Servicio",
                "tarea": "Retirar platos, limpiar mesas de forma constante y mantener limpias las áreas de trabajo."
            },
            {
                "id": "tepoztlan_04_t04",
                "categoria": "Atención y Servicio",
                "tarea": "Apoyar en el montaje y desmontaje según las indicaciones del Capitán."
            },
            {
                "id": "tepoztlan_04_t05",
                "categoria": "Atención y Servicio",
                "tarea": "Generar venta a traves de recomendaciones de alimentos y bebidas."
            }
        ]
    },
    {
        "id": "tepoztlan_05",
        "nombre": "Mesero B",
        "area": "A&B",
        "hotelSlug": "tepoztlan",
        "tasks": [
            {
                "id": "tepoztlan_05_t01",
                "categoria": "Atención y Servicio",
                "tarea": "Atender a los clientes con amabilidad, tomar pedidos y ofrecer información sobre menús y especialidades."
            },
            {
                "id": "tepoztlan_05_t02",
                "categoria": "Atención y Servicio",
                "tarea": "Servir alimentos y bebidas de manera eficiente y segura."
            },
            {
                "id": "tepoztlan_05_t03",
                "categoria": "Atención y Servicio",
                "tarea": "Retirar platos, limpiar mesas de forma constante y mantener limpias las áreas de trabajo."
            },
            {
                "id": "tepoztlan_05_t04",
                "categoria": "Atención y Servicio",
                "tarea": "Apoyar en el montaje y desmontaje según las indicaciones del Capitán."
            },
            {
                "id": "tepoztlan_05_t05",
                "categoria": "Atención y Servicio",
                "tarea": "Generar venta a traves de recomendaciones de alimentos y bebidas."
            }
        ]
    },
    {
        "id": "tepoztlan_06",
        "nombre": "Chef",
        "area": "Cocina",
        "hotelSlug": "tepoztlan",
        "tasks": [
            {
                "id": "tepoztlan_06_t01",
                "categoria": "Producción y Calidad",
                "tarea": "Preparar y cocinar los alimentos siguiendo estrictamente las recetas y estándares de calidad e higiene."
            },
            {
                "id": "tepoztlan_06_t02",
                "categoria": "Producción y Calidad",
                "tarea": "Mantener al día el control administrativo de pedidos, inventarios y planificación de menús."
            },
            {
                "id": "tepoztlan_06_t03",
                "categoria": "Producción y Calidad",
                "tarea": "Asegurar la organización, limpieza y desinfección constante de la cocina."
            },
            {
                "id": "tepoztlan_06_t04",
                "categoria": "Producción y Calidad",
                "tarea": "Supervisar y dirigir al personal de cocina"
            }
        ]
    },
    {
        "id": "tepoztlan_07",
        "nombre": "Ayudantes de cocina",
        "area": "Cocina",
        "hotelSlug": "tepoztlan",
        "tasks": [
            {
                "id": "tepoztlan_07_t01",
                "categoria": "Producción y Calidad",
                "tarea": "Respaldar actividades indicadas por el chef en tiempo y forma"
            },
            {
                "id": "tepoztlan_07_t02",
                "categoria": "Producción y Calidad",
                "tarea": "Ayudar en la preparación y cocción de alimentos."
            },
            {
                "id": "tepoztlan_07_t03",
                "categoria": "Producción y Calidad",
                "tarea": "Asegurar la preparación y el servicio seguro e higiénico de los alimentos."
            },
            {
                "id": "tepoztlan_07_t04",
                "categoria": "Producción y Calidad",
                "tarea": "Limpieza y organización de estaciones"
            }
        ]
    },
    {
        "id": "tepoztlan_08",
        "nombre": "Mucama",
        "area": "AMA DE LLAVESLIMPIEZA",
        "hotelSlug": "tepoztlan",
        "tasks": [
            {
                "id": "tepoztlan_08_t01",
                "categoria": "Limpieza de Habitaciones",
                "tarea": "Limpiar y organizar las habitaciones de acuerdo con los estándares de calidad del establecimiento."
            },
            {
                "id": "tepoztlan_08_t02",
                "categoria": "Limpieza de Habitaciones",
                "tarea": "Cambiar la ropa de cama y las toallas"
            },
            {
                "id": "tepoztlan_08_t03",
                "categoria": "Limpieza de Habitaciones",
                "tarea": "Aseo profundo de baños y abastecimiento de productos de higiene."
            },
            {
                "id": "tepoztlan_08_t04",
                "categoria": "Limpieza de Habitaciones",
                "tarea": "Retirar residuos, vaciar papeleras y dejar las habitaciones listas para la llegada de nuevos huéspedes."
            },
            {
                "id": "tepoztlan_08_t05",
                "categoria": "Limpieza de Habitaciones",
                "tarea": "Limpieza de áreas comunes como recepción, pasillos, casa club, área de spa y área de alberca"
            }
        ]
    },
    {
        "id": "tepoztlan_09",
        "nombre": "Jefe de Mantenimiento",
        "area": "MANTENIMIENTO",
        "hotelSlug": "tepoztlan",
        "tasks": [
            {
                "id": "tepoztlan_09_t01",
                "categoria": "Inspección y Reparación",
                "tarea": "Supervisar y coordinar las actividades de mantenimiento preventivo"
            },
            {
                "id": "tepoztlan_09_t02",
                "categoria": "Inspección y Reparación",
                "tarea": "Inventario de  activos y equipos"
            },
            {
                "id": "tepoztlan_09_t03",
                "categoria": "Inspección y Reparación",
                "tarea": "Realizar inspecciones y evaluaciones de los activos y equipos para identificar necesidades de mantenimiento"
            },
            {
                "id": "tepoztlan_09_t04",
                "categoria": "Inspección y Reparación",
                "tarea": "Cumplir rigurosamente con las normativas y regulaciones de seguridad."
            },
            {
                "id": "tepoztlan_09_t05",
                "categoria": "General",
                "tarea": "Coordinar con otros departamentos la disponibilidad de equipos y espacios."
            }
        ]
    },
    {
        "id": "tepoztlan_10",
        "nombre": "Jardinero",
        "area": "MANTENIMIENTO",
        "hotelSlug": "tepoztlan",
        "tasks": [
            {
                "id": "tepoztlan_10_t01",
                "categoria": "Cuidado de Áreas Verdes",
                "tarea": "Realizar tareas de jardinería esenciales: podar, regar, fertilizar y controlar plagas en plantas y flores."
            },
            {
                "id": "tepoztlan_10_t02",
                "categoria": "Cuidado de Áreas Verdes",
                "tarea": "Mantener la limpieza, el orden y la seguridad en los caminos y espacios verdes para el libre tránsito de los visitantes."
            }
        ]
    },
    {
        "id": "tepoztlan_11",
        "nombre": "VELADOR A",
        "area": "SEGURIDAD",
        "hotelSlug": "tepoztlan",
        "tasks": [
            {
                "id": "tepoztlan_11_t01",
                "categoria": "Revisión inicial y de equipos",
                "tarea": "Inspeccionar los accesos perimetrales, cerraduras y el estado de los sistemas de seguridad (radios, linternas y cámaras de vigilancia) al iniciar el turno."
            },
            {
                "id": "tepoztlan_11_t02",
                "categoria": "Control de accesos",
                "tarea": "Registrar debidamente la entrada y salida de proveedores, contratistas y visitas externas, solicitando su identificación oficial."
            },
            {
                "id": "tepoztlan_11_t03",
                "categoria": "Rondas de vigilancia periódicas",
                "tarea": "Realizar recorridos constantes por los jardines, pasillos, estacionamientos y áreas comunes para prevenir riesgos y detectar cualquier anomalía."
            },
            {
                "id": "tepoztlan_11_t04",
                "categoria": "Supervisión de salidas y resguardo",
                "tarea": "Verificar que el movimiento o salida de cualquier mobiliario, herramienta o mercancía cuente con la autorización firmada por la administración."
            },
            {
                "id": "tepoztlan_11_t05",
                "categoria": "Cierre y reporte en bitácora",
                "tarea": "Asegurar el cierre correcto de puertas y portones principales al finalizar la jornada, documentando todas las incidencias y novedades en la bitácora."
            }
        ]
    },
    {
        "id": "tepoztlan_12",
        "nombre": "VELADOR B",
        "area": "SEGURIDAD",
        "hotelSlug": "tepoztlan",
        "tasks": [
            {
                "id": "tepoztlan_12_t01",
                "categoria": "Revisión inicial y de equipos",
                "tarea": "Inspeccionar los accesos perimetrales, cerraduras y el estado de los sistemas de seguridad (radios, linternas y cámaras de vigilancia) al iniciar el turno."
            },
            {
                "id": "tepoztlan_12_t02",
                "categoria": "Control de accesos",
                "tarea": "Registrar debidamente la entrada y salida de proveedores, contratistas y visitas externas, solicitando su identificación oficial."
            },
            {
                "id": "tepoztlan_12_t03",
                "categoria": "Rondas de vigilancia periódicas",
                "tarea": "Realizar recorridos constantes por los jardines, pasillos, estacionamientos y áreas comunes para prevenir riesgos y detectar cualquier anomalía."
            },
            {
                "id": "tepoztlan_12_t04",
                "categoria": "Supervisión de salidas y resguardo",
                "tarea": "Verificar que el movimiento o salida de cualquier mobiliario, herramienta o mercancía cuente con la autorización firmada por la administración."
            },
            {
                "id": "tepoztlan_12_t05",
                "categoria": "Cierre y reporte en bitácora",
                "tarea": "Asegurar el cierre correcto de puertas y portones principales al finalizar la jornada, documentando todas las incidencias y novedades en la bitácora."
            }
        ]
    }
],
  "quinta-soledad": [
    {
        "id": "quinta-soledad_01",
        "nombre": "Gerencia General",
        "area": "Gerente",
        "hotelSlug": "quinta-soledad",
        "tasks": [
            {
                "id": "quinta-soledad_01_t01",
                "categoria": "Supervisión Operativa",
                "tarea": "Revisar diariamente las condiciones del inmueble (salones, jardines, baños, exposiciones y áreas históricas)."
            },
            {
                "id": "quinta-soledad_01_t02",
                "categoria": "Supervisión Operativa",
                "tarea": "Supervisar todas las áreas operativas (recepción, A&B, limpieza, áreas comunes, jardines, mantenimiento y administración)."
            },
            {
                "id": "quinta-soledad_01_t03",
                "categoria": "Gestión y Control",
                "tarea": "Monitorear inventarios, insumos, consumos y reporte de gastos."
            },
            {
                "id": "quinta-soledad_01_t04",
                "categoria": "Gestión y Control",
                "tarea": "Aprobar compras menores y validar necesidades del inmueble."
            },
            {
                "id": "quinta-soledad_01_t05",
                "categoria": "Gestión y Control",
                "tarea": "Revisar bitácoras operativas, de mantenimiento y de eventos."
            },
            {
                "id": "quinta-soledad_01_t06",
                "categoria": "Personal y Comunicación",
                "tarea": "Supervisar puntualidad, presentación, actitud y desempeño del personal."
            },
            {
                "id": "quinta-soledad_01_t07",
                "categoria": "Personal y Comunicación",
                "tarea": "Realizar juntas operativas semanales y asegurar el cumplimiento de acuerdos."
            },
            {
                "id": "quinta-soledad_01_t08",
                "categoria": "Personal y Comunicación",
                "tarea": "Validar que los montajes, tiempos y servicios de eventos cumplan con lo cotizado."
            },
            {
                "id": "quinta-soledad_01_t09",
                "categoria": "Experiencia del Visitante",
                "tarea": "Asegurar una experiencia cálida, ordenada y alineada a la esencia cultural."
            },
            {
                "id": "quinta-soledad_01_t10",
                "categoria": "Experiencia del Visitante",
                "tarea": "Supervisar la atención a eventos, recorridos, producciones y visitantes generales."
            },
            {
                "id": "quinta-soledad_01_t11",
                "categoria": "Administración y Control",
                "tarea": "Supervisar bitácoras operativas, de mantenimiento y de eventos"
            }
        ]
    },
    {
        "id": "quinta-soledad_02",
        "nombre": "Subgerencia",
        "area": "Subgerente",
        "hotelSlug": "quinta-soledad",
        "tasks": [
            {
                "id": "quinta-soledad_02_t01",
                "categoria": "Monitoreo de Instalaciones",
                "tarea": "Verificar la limpieza, el orden y la presentación visual de salones, jardines, cafetería, baños y pasillos antes, durante y después de la apertura."
            },
            {
                "id": "quinta-soledad_02_t02",
                "categoria": "Operación y Atención",
                "tarea": "Apoyar a recepción en la atención a grupos, artistas, proveedores y visitantes."
            },
            {
                "id": "quinta-soledad_02_t03",
                "categoria": "Operación y Atención",
                "tarea": "Asegurar que el personal cumpla con los protocolos de apertura, operación y cierre."
            },
            {
                "id": "quinta-soledad_02_t04",
                "categoria": "Operación y Atención",
                "tarea": "Mantener actualizada la bitácora de incidencias y prioridades del día."
            },
            {
                "id": "quinta-soledad_02_t05",
                "categoria": "Operación y Atención",
                "tarea": "Supervisar puntualidad, presentación, actitud y desempeño."
            }
        ]
    },
    {
        "id": "quinta-soledad_03",
        "nombre": "Recepcionista A",
        "area": "Administración",
        "hotelSlug": "quinta-soledad",
        "tasks": [
            {
                "id": "quinta-soledad_03_t01",
                "categoria": "Atención a Huéspedes",
                "tarea": "Dar seguimiento a  reservas que arriban durante el día"
            },
            {
                "id": "quinta-soledad_03_t02",
                "categoria": "Atención a Huéspedes",
                "tarea": "Verificar las reservas recibidas asegurando que la información este correcta y actualisada"
            },
            {
                "id": "quinta-soledad_03_t03",
                "categoria": "Atención a Huéspedes",
                "tarea": "Seguimiento diario de las reservaciones con status de no show"
            },
            {
                "id": "quinta-soledad_03_t04",
                "categoria": "Atención a Huéspedes",
                "tarea": "Recibir, registrar y asignar habitaciones a los huéspedes."
            },
            {
                "id": "quinta-soledad_03_t05",
                "categoria": "Atención a Huéspedes",
                "tarea": "Proporcionar información sobre los servicios, facilidades, precios y disponibilidad del hotel."
            },
            {
                "id": "quinta-soledad_03_t06",
                "categoria": "Atención a Huéspedes",
                "tarea": "Realizar el proceso de check-out y procesar pagos."
            },
            {
                "id": "quinta-soledad_03_t07",
                "categoria": "Atención a Huéspedes",
                "tarea": "Resolver problemas, quejas y ofrecer recomendaciones de actividades en el área."
            },
            {
                "id": "quinta-soledad_03_t08",
                "categoria": "Gestión Administrativa",
                "tarea": "Gestionar, confirmar y actualizar las reservas de habitaciones (cambios y cancelaciones)."
            },
            {
                "id": "quinta-soledad_03_t09",
                "categoria": "Gestión Administrativa",
                "tarea": "Procesar pagos, gestionar facturas y mantener registros organizados."
            },
            {
                "id": "quinta-soledad_03_t10",
                "categoria": "Gestión Administrativa",
                "tarea": "Generar venta de experiencias"
            }
        ]
    },
    {
        "id": "quinta-soledad_04",
        "nombre": "Recepcionista B",
        "area": "Administración",
        "hotelSlug": "quinta-soledad",
        "tasks": [
            {
                "id": "quinta-soledad_04_t01",
                "categoria": "Atención a Huéspedes",
                "tarea": "Dar seguimiento a  reservas que arriban durante el día"
            },
            {
                "id": "quinta-soledad_04_t02",
                "categoria": "Atención a Huéspedes",
                "tarea": "Verificar las reservas recibidas asegurando que la información este correcta y actualisada"
            },
            {
                "id": "quinta-soledad_04_t03",
                "categoria": "Atención a Huéspedes",
                "tarea": "Seguimiento diario de las reservaciones con status de no show"
            },
            {
                "id": "quinta-soledad_04_t04",
                "categoria": "Atención a Huéspedes",
                "tarea": "Recibir, registrar y asignar habitaciones a los huéspedes."
            },
            {
                "id": "quinta-soledad_04_t05",
                "categoria": "Atención a Huéspedes",
                "tarea": "Proporcionar información sobre los servicios, facilidades, precios y disponibilidad del hotel."
            },
            {
                "id": "quinta-soledad_04_t06",
                "categoria": "Atención a Huéspedes",
                "tarea": "Realizar el proceso de check-out y procesar pagos."
            },
            {
                "id": "quinta-soledad_04_t07",
                "categoria": "Atención a Huéspedes",
                "tarea": "Resolver problemas, quejas y ofrecer recomendaciones de actividades en el área."
            },
            {
                "id": "quinta-soledad_04_t08",
                "categoria": "Gestión Administrativa",
                "tarea": "Gestionar, confirmar y actualizar las reservas de habitaciones (cambios y cancelaciones)."
            },
            {
                "id": "quinta-soledad_04_t09",
                "categoria": "Gestión Administrativa",
                "tarea": "Procesar pagos, gestionar facturas y mantener registros organizados."
            },
            {
                "id": "quinta-soledad_04_t10",
                "categoria": "Gestión Administrativa",
                "tarea": "Generar venta de experiencias"
            }
        ]
    },
    {
        "id": "quinta-soledad_05",
        "nombre": "Capitán 1",
        "area": "A&B Capitular",
        "hotelSlug": "quinta-soledad",
        "tasks": [
            {
                "id": "quinta-soledad_05_t01",
                "categoria": "Supervisión del Servicio",
                "tarea": "Dirigir al equipo de meseros y ayudantes durante turnos y eventos."
            },
            {
                "id": "quinta-soledad_05_t02",
                "categoria": "Supervisión del Servicio",
                "tarea": "Validar el montaje previo de mesas, cristalería, loza, cubiertos y estaciones (coffee break, cocteles, etc.)."
            },
            {
                "id": "quinta-soledad_05_t03",
                "categoria": "Supervisión del Servicio",
                "tarea": "Verificar que la presentación de platillos y bebidas cumpla con los estándares antes de salir a servicio."
            },
            {
                "id": "quinta-soledad_05_t04",
                "categoria": "Control y Cierre",
                "tarea": "Revisar existencias de insumos básicos (bebidas, cristalería, consumibles) y reportar faltantes."
            },
            {
                "id": "quinta-soledad_05_t05",
                "categoria": "Control y Cierre",
                "tarea": "Supervisar el desmontaje, la limpieza general y la correcta ubicación del mobiliario al finalizar."
            },
            {
                "id": "quinta-soledad_05_t06",
                "categoria": "Control y Cierre",
                "tarea": "Entregar reportes de consumos, incidencias y observaciones del turno."
            }
        ]
    },
    {
        "id": "quinta-soledad_06",
        "nombre": "Capitán 2",
        "area": "A&B Capitular",
        "hotelSlug": "quinta-soledad",
        "tasks": [
            {
                "id": "quinta-soledad_06_t01",
                "categoria": "Supervisión del Servicio",
                "tarea": "Dirigir al equipo de meseros y ayudantes durante turnos y eventos."
            },
            {
                "id": "quinta-soledad_06_t02",
                "categoria": "Supervisión del Servicio",
                "tarea": "Validar el montaje previo de mesas, cristalería, loza, cubiertos y estaciones (coffee break, cocteles, etc.)."
            },
            {
                "id": "quinta-soledad_06_t03",
                "categoria": "Supervisión del Servicio",
                "tarea": "Verificar que la presentación de platillos y bebidas cumpla con los estándares antes de salir a servicio."
            },
            {
                "id": "quinta-soledad_06_t04",
                "categoria": "Control y Cierre",
                "tarea": "Revisar existencias de insumos básicos (bebidas, cristalería, consumibles) y reportar faltantes."
            },
            {
                "id": "quinta-soledad_06_t05",
                "categoria": "Control y Cierre",
                "tarea": "Supervisar el desmontaje, la limpieza general y la correcta ubicación del mobiliario al finalizar."
            },
            {
                "id": "quinta-soledad_06_t06",
                "categoria": "Control y Cierre",
                "tarea": "Entregar reportes de consumos, incidencias y observaciones del turno."
            }
        ]
    },
    {
        "id": "quinta-soledad_07",
        "nombre": "Capitán 3",
        "area": "A&B Capitular",
        "hotelSlug": "quinta-soledad",
        "tasks": [
            {
                "id": "quinta-soledad_07_t01",
                "categoria": "Supervisión del Servicio",
                "tarea": "Dirigir al equipo de meseros y ayudantes durante turnos y eventos."
            },
            {
                "id": "quinta-soledad_07_t02",
                "categoria": "Supervisión del Servicio",
                "tarea": "Validar el montaje previo de mesas, cristalería, loza, cubiertos y estaciones (coffee break, cocteles, etc.)."
            },
            {
                "id": "quinta-soledad_07_t03",
                "categoria": "Supervisión del Servicio",
                "tarea": "Verificar que la presentación de platillos y bebidas cumpla con los estándares antes de salir a servicio."
            },
            {
                "id": "quinta-soledad_07_t04",
                "categoria": "Control y Cierre",
                "tarea": "Revisar existencias de insumos básicos (bebidas, cristalería, consumibles) y reportar faltantes."
            },
            {
                "id": "quinta-soledad_07_t05",
                "categoria": "Control y Cierre",
                "tarea": "Supervisar el desmontaje, la limpieza general y la correcta ubicación del mobiliario al finalizar."
            },
            {
                "id": "quinta-soledad_07_t06",
                "categoria": "Control y Cierre",
                "tarea": "Entregar reportes de consumos, incidencias y observaciones del turno."
            }
        ]
    },
    {
        "id": "quinta-soledad_08",
        "nombre": "Capitán 4",
        "area": "A&B Capitular",
        "hotelSlug": "quinta-soledad",
        "tasks": [
            {
                "id": "quinta-soledad_08_t01",
                "categoria": "Supervisión del Servicio",
                "tarea": "Dirigir al equipo de meseros y ayudantes durante turnos y eventos."
            },
            {
                "id": "quinta-soledad_08_t02",
                "categoria": "Supervisión del Servicio",
                "tarea": "Validar el montaje previo de mesas, cristalería, loza, cubiertos y estaciones (coffee break, cocteles, etc.)."
            },
            {
                "id": "quinta-soledad_08_t03",
                "categoria": "Supervisión del Servicio",
                "tarea": "Verificar que la presentación de platillos y bebidas cumpla con los estándares antes de salir a servicio."
            },
            {
                "id": "quinta-soledad_08_t04",
                "categoria": "Control y Cierre",
                "tarea": "Revisar existencias de insumos básicos (bebidas, cristalería, consumibles) y reportar faltantes."
            },
            {
                "id": "quinta-soledad_08_t05",
                "categoria": "Control y Cierre",
                "tarea": "Supervisar el desmontaje, la limpieza general y la correcta ubicación del mobiliario al finalizar."
            },
            {
                "id": "quinta-soledad_08_t06",
                "categoria": "Control y Cierre",
                "tarea": "Entregar reportes de consumos, incidencias y observaciones del turno."
            }
        ]
    },
    {
        "id": "quinta-soledad_09",
        "nombre": "Meseros",
        "area": "A&B Capitular",
        "hotelSlug": "quinta-soledad",
        "tasks": [
            {
                "id": "quinta-soledad_09_t01",
                "categoria": "Atención y Servicio",
                "tarea": "Atender a los clientes con amabilidad, tomar pedidos y ofrecer información sobre menús y especialidades."
            },
            {
                "id": "quinta-soledad_09_t02",
                "categoria": "Atención y Servicio",
                "tarea": "Servir alimentos y bebidas de manera eficiente y segura."
            },
            {
                "id": "quinta-soledad_09_t03",
                "categoria": "Atención y Servicio",
                "tarea": "Retirar platos, limpiar mesas de forma constante y mantener limpias las áreas de trabajo."
            },
            {
                "id": "quinta-soledad_09_t04",
                "categoria": "Atención y Servicio",
                "tarea": "Apoyar en el montaje y desmontaje según las indicaciones del Capitán."
            },
            {
                "id": "quinta-soledad_09_t05",
                "categoria": "Atención y Servicio",
                "tarea": "Generar venta a traves de recomendaciones de alimentos y bebidas."
            }
        ]
    },
    {
        "id": "quinta-soledad_10",
        "nombre": "Ayudantes (A&B) de fin de semana",
        "area": "A&B Capitular",
        "hotelSlug": "quinta-soledad",
        "tasks": [
            {
                "id": "quinta-soledad_10_t01",
                "categoria": "Atención y Servicio",
                "tarea": "Atender a los clientes con amabilidad, tomar pedidos y ofrecer información sobre menús y especialidades."
            },
            {
                "id": "quinta-soledad_10_t02",
                "categoria": "Atención y Servicio",
                "tarea": "Servir alimentos y bebidas de manera eficiente y segura."
            },
            {
                "id": "quinta-soledad_10_t03",
                "categoria": "Atención y Servicio",
                "tarea": "Retirar platos, limpiar mesas de forma constante y mantener limpias las áreas de trabajo."
            },
            {
                "id": "quinta-soledad_10_t04",
                "categoria": "Atención y Servicio",
                "tarea": "Apoyar en el montaje y desmontaje según las indicaciones del Capitán."
            }
        ]
    },
    {
        "id": "quinta-soledad_11",
        "nombre": "Chef",
        "area": "Cocina",
        "hotelSlug": "quinta-soledad",
        "tasks": [
            {
                "id": "quinta-soledad_11_t01",
                "categoria": "Producción y Calidad",
                "tarea": "Preparar y cocinar los alimentos siguiendo estrictamente las recetas y estándares de calidad e higiene."
            },
            {
                "id": "quinta-soledad_11_t02",
                "categoria": "Producción y Calidad",
                "tarea": "Mantener al día el control administrativo de pedidos, inventarios y planificación de menús."
            },
            {
                "id": "quinta-soledad_11_t03",
                "categoria": "Producción y Calidad",
                "tarea": "Asegurar la organización, limpieza y desinfección constante de la cocina."
            },
            {
                "id": "quinta-soledad_11_t04",
                "categoria": "Producción y Calidad",
                "tarea": "Supervisar y dirigir al personal de cocina"
            }
        ]
    },
    {
        "id": "quinta-soledad_12",
        "nombre": "Cocinero 1",
        "area": "Cocina",
        "hotelSlug": "quinta-soledad",
        "tasks": [
            {
                "id": "quinta-soledad_12_t01",
                "categoria": "Producción y Calidad",
                "tarea": "Respaldar actividades indicadas por el chef en tiempo y forma"
            },
            {
                "id": "quinta-soledad_12_t02",
                "categoria": "Producción y Calidad",
                "tarea": "Ayudar en la preparación y cocción de alimentos."
            },
            {
                "id": "quinta-soledad_12_t03",
                "categoria": "Producción y Calidad",
                "tarea": "Asegurar la preparación y el servicio seguro e higiénico de los alimentos."
            },
            {
                "id": "quinta-soledad_12_t04",
                "categoria": "Producción y Calidad",
                "tarea": "Limpieza y organización de estaciones"
            },
            {
                "id": "quinta-soledad_12_t05",
                "categoria": "Producción y Calidad",
                "tarea": "Respaldar actividades indicadas por el encargado de cafeteria en tiempo y forma"
            }
        ]
    },
    {
        "id": "quinta-soledad_13",
        "nombre": "Ayudantes de cocina",
        "area": "Cocina",
        "hotelSlug": "quinta-soledad",
        "tasks": [
            {
                "id": "quinta-soledad_13_t01",
                "categoria": "Producción y Calidad",
                "tarea": "Respaldar actividades indicadas por el chef en tiempo y forma"
            },
            {
                "id": "quinta-soledad_13_t02",
                "categoria": "Producción y Calidad",
                "tarea": "Ayudar en la preparación y cocción de alimentos."
            },
            {
                "id": "quinta-soledad_13_t03",
                "categoria": "Producción y Calidad",
                "tarea": "Asegurar la preparación y el servicio seguro e higiénico de los alimentos."
            },
            {
                "id": "quinta-soledad_13_t04",
                "categoria": "Producción y Calidad",
                "tarea": "Limpieza y organización de estaciones"
            }
        ]
    },
    {
        "id": "quinta-soledad_14",
        "nombre": "Ayudantes de fin de semana",
        "area": "Cocina",
        "hotelSlug": "quinta-soledad",
        "tasks": [
            {
                "id": "quinta-soledad_14_t01",
                "categoria": "Producción y Calidad",
                "tarea": "Respaldar actividades indicadas por el chef en tiempo y forma"
            },
            {
                "id": "quinta-soledad_14_t02",
                "categoria": "Producción y Calidad",
                "tarea": "Ayudar en la preparación y cocción de alimentos."
            },
            {
                "id": "quinta-soledad_14_t03",
                "categoria": "Producción y Calidad",
                "tarea": "Asegurar la preparación y el servicio seguro e higiénico de los alimentos."
            },
            {
                "id": "quinta-soledad_14_t04",
                "categoria": "Producción y Calidad",
                "tarea": "Limpieza y organización de estaciones"
            }
        ]
    },
    {
        "id": "quinta-soledad_15",
        "nombre": "Encargado de cafetería",
        "area": "A&B Cafeteria",
        "hotelSlug": "quinta-soledad",
        "tasks": [
            {
                "id": "quinta-soledad_15_t01",
                "categoria": "Supervisión del Servicio",
                "tarea": "Dirigir al equipo de meseros y ayudantes durante turnos y eventos."
            },
            {
                "id": "quinta-soledad_15_t02",
                "categoria": "Supervisión del Servicio",
                "tarea": "Validar el montaje previo de mesas, cristalería, loza, cubiertos y estaciones (coffee break, cocteles, etc.)."
            },
            {
                "id": "quinta-soledad_15_t03",
                "categoria": "Supervisión del Servicio",
                "tarea": "Verificar que la presentación de platillos y bebidas cumpla con los estándares antes de salir a servicio."
            },
            {
                "id": "quinta-soledad_15_t04",
                "categoria": "Control y Cierre",
                "tarea": "Revisar existencias de insumos básicos (bebidas, cristalería, consumibles) y reportar faltantes."
            },
            {
                "id": "quinta-soledad_15_t05",
                "categoria": "Control y Cierre",
                "tarea": "Supervisar el desmontaje, la limpieza general y la correcta ubicación del mobiliario al finalizar."
            },
            {
                "id": "quinta-soledad_15_t06",
                "categoria": "Control y Cierre",
                "tarea": "Entregar reportes de consumos, incidencias y observaciones del turno."
            },
            {
                "id": "quinta-soledad_15_t07",
                "categoria": "Control y Cierre",
                "tarea": "Supervisar la correcta operación de cafetería y La Mal Querida"
            }
        ]
    },
    {
        "id": "quinta-soledad_16",
        "nombre": "Meserio 1",
        "area": "A&B Cafeteria",
        "hotelSlug": "quinta-soledad",
        "tasks": [
            {
                "id": "quinta-soledad_16_t01",
                "categoria": "Atención y Servicio",
                "tarea": "Atender a los clientes con amabilidad, tomar pedidos y ofrecer información sobre menús y especialidades."
            },
            {
                "id": "quinta-soledad_16_t02",
                "categoria": "Atención y Servicio",
                "tarea": "Servir alimentos y bebidas de manera eficiente y segura."
            },
            {
                "id": "quinta-soledad_16_t03",
                "categoria": "Atención y Servicio",
                "tarea": "Retirar platos, limpiar mesas de forma constante y mantener limpias las áreas de trabajo."
            },
            {
                "id": "quinta-soledad_16_t04",
                "categoria": "Atención y Servicio",
                "tarea": "Apoyar en el montaje y desmontaje según las indicaciones del Capitán."
            },
            {
                "id": "quinta-soledad_16_t05",
                "categoria": "Atención y Servicio",
                "tarea": "Generar venta a traves de recomendaciones de alimentos y bebidas."
            }
        ]
    },
    {
        "id": "quinta-soledad_17",
        "nombre": "Tortillero",
        "area": "A&B Cafeteria",
        "hotelSlug": "quinta-soledad",
        "tasks": [
            {
                "id": "quinta-soledad_17_t01",
                "categoria": "Producción y Calidad",
                "tarea": "Respaldar actividades indicadas por el encargado de cafeteria en tiempo y forma"
            },
            {
                "id": "quinta-soledad_17_t02",
                "categoria": "Producción y Calidad",
                "tarea": "Ayudar en la preparación y cocción de alimentos."
            },
            {
                "id": "quinta-soledad_17_t03",
                "categoria": "Producción y Calidad",
                "tarea": "Asegurar la preparación y el servicio seguro e higiénico de los alimentos."
            },
            {
                "id": "quinta-soledad_17_t04",
                "categoria": "Producción y Calidad",
                "tarea": "Limpieza y organización de estaciones"
            }
        ]
    },
    {
        "id": "quinta-soledad_18",
        "nombre": "Panadero",
        "area": "Panadero",
        "hotelSlug": "quinta-soledad",
        "tasks": [
            {
                "id": "quinta-soledad_18_t01",
                "categoria": "Preparación de insumos",
                "tarea": "Revisar las recetas y la producción del día para medir, pesar y alistar todos los ingredientes necesarios (harinas, levaduras, azúcares, etc.) manteniendo el control de mermas e inventarios."
            },
            {
                "id": "quinta-soledad_18_t02",
                "categoria": "Preparación de insumos",
                "tarea": "Ejecutar los procesos de mezclado, amasado, fermentación y moldeado de los diferentes tipos de panes, bollería o productos de repostería según los estándares de calidad del establecimiento."
            },
            {
                "id": "quinta-soledad_18_t03",
                "categoria": "Horneado y calidad",
                "tarea": "Mantener las mesas de trabajo, charolas, maquinaria y utensilios limpios, ordenados y listos durante toda la producción."
            },
            {
                "id": "quinta-soledad_18_t04",
                "categoria": "Control y Cierre",
                "tarea": "Revisar existencias de insumos básicos (bebidas, cristalería, consumibles) y reportar faltantes."
            },
            {
                "id": "quinta-soledad_18_t05",
                "categoria": "Higiene y seguridad alimentaria",
                "tarea": "Asegurar que los alimentos, materias primas y equipos se manipulen y almacenen bajo estrictas normas de limpieza, higiene y seguridad en la cocina."
            },
            {
                "id": "quinta-soledad_18_t06",
                "categoria": "Control y Cierre",
                "tarea": "Informar al chef o al área de administración sobre las existencias de materia prima, necesidades de abastecimiento y registrar la producción final del turno."
            }
        ]
    },
    {
        "id": "quinta-soledad_19",
        "nombre": "Auxiliar de panadería",
        "area": "Panadero",
        "hotelSlug": "quinta-soledad",
        "tasks": [
            {
                "id": "quinta-soledad_19_t01",
                "categoria": "Preparación de insumos",
                "tarea": "Respaldar al panadero midiendo, pesando y alistando los ingredientes necesarios (harinas, líquidos, complementos) según las indicaciones y recetas del día."
            },
            {
                "id": "quinta-soledad_19_t02",
                "categoria": "Preparación de insumos",
                "tarea": "Ayudar en las labores de boleado, corte, pesado de porciones, moldeado y colocación de masas en charolas conforme a las instrucciones del panadero."
            },
            {
                "id": "quinta-soledad_19_t03",
                "categoria": "Higiene y seguridad",
                "tarea": "Asegurar que los alimentos y la materia prima se manipulen y almacenen bajo estrictas normas de higiene, limpieza y seguridad en la cocina."
            },
            {
                "id": "quinta-soledad_19_t04",
                "categoria": "Horneado y calidad",
                "tarea": "Ayudar a introducir y retirar charolas de los hornos bajo supervisión, así como trasladar productos hacia las áreas de leudado o exhibición."
            },
            {
                "id": "quinta-soledad_19_t05",
                "categoria": "Cierre de turno y reporte de incidencias",
                "tarea": "Realizar la limpieza profunda de pisos, mesas y equipos al finalizar, guardando sobrantes correctamente y reportando cualquier faltante o falla al panadero."
            }
        ]
    },
    {
        "id": "quinta-soledad_20",
        "nombre": "Encargado de Loza",
        "area": "Loza",
        "hotelSlug": "quinta-soledad",
        "tasks": [
            {
                "id": "quinta-soledad_20_t01",
                "categoria": "Atención y Servicio",
                "tarea": "Atender a los clientes con amabilidad, tomar pedidos y ofrecer información sobre menús y especialidades."
            },
            {
                "id": "quinta-soledad_20_t02",
                "categoria": "Atención y Servicio",
                "tarea": "Servir alimentos y bebidas de manera eficiente y segura."
            },
            {
                "id": "quinta-soledad_20_t03",
                "categoria": "Atención y Servicio",
                "tarea": "Retirar platos, limpiar mesas de forma constante y mantener limpias las áreas de trabajo."
            },
            {
                "id": "quinta-soledad_20_t04",
                "categoria": "Atención y Servicio",
                "tarea": "Apoyar en el montaje y desmontaje según las indicaciones del Capitán."
            }
        ]
    },
    {
        "id": "quinta-soledad_21",
        "nombre": "Mucama",
        "area": "AMA DE LLAVESLIMPIEZA",
        "hotelSlug": "quinta-soledad",
        "tasks": [
            {
                "id": "quinta-soledad_21_t01",
                "categoria": "Limpieza de Habitaciones",
                "tarea": "Limpiar y organizar las habitaciones de acuerdo con los estándares de calidad del establecimiento."
            },
            {
                "id": "quinta-soledad_21_t02",
                "categoria": "Limpieza de Habitaciones",
                "tarea": "Cambiar la ropa de cama y las toallas"
            },
            {
                "id": "quinta-soledad_21_t03",
                "categoria": "Limpieza de Habitaciones",
                "tarea": "Aseo profundo de baños y abastecimiento de productos de higiene."
            },
            {
                "id": "quinta-soledad_21_t04",
                "categoria": "Limpieza de Habitaciones",
                "tarea": "Retirar residuos, vaciar papeleras y dejar las habitaciones listas para la llegada de nuevos huéspedes."
            },
            {
                "id": "quinta-soledad_21_t05",
                "categoria": "Limpieza de Habitaciones",
                "tarea": "Limpieza de áreas comunes como recepción, pasillos, casa club, área de spa y área de alberca"
            }
        ]
    },
    {
        "id": "quinta-soledad_22",
        "nombre": "Encargado A",
        "area": "MANTENIMIENTO",
        "hotelSlug": "quinta-soledad",
        "tasks": [
            {
                "id": "quinta-soledad_22_t01",
                "categoria": "Inspección y Reparación",
                "tarea": "Supervisar y coordinar las actividades de mantenimiento preventivo"
            },
            {
                "id": "quinta-soledad_22_t02",
                "categoria": "Inspección y Reparación",
                "tarea": "Inventario de  activos y equipos"
            },
            {
                "id": "quinta-soledad_22_t03",
                "categoria": "Inspección y Reparación",
                "tarea": "Realizar inspecciones y evaluaciones de los activos y equipos para identificar necesidades de mantenimiento"
            },
            {
                "id": "quinta-soledad_22_t04",
                "categoria": "Inspección y Reparación",
                "tarea": "Cumplir rigurosamente con las normativas y regulaciones de seguridad."
            },
            {
                "id": "quinta-soledad_22_t05",
                "categoria": "Inspección y Reparación",
                "tarea": "Coordinar con otros departamentos la disponibilidad de equipos y espacios."
            }
        ]
    },
    {
        "id": "quinta-soledad_23",
        "nombre": "Encargado B",
        "area": "MANTENIMIENTO",
        "hotelSlug": "quinta-soledad",
        "tasks": [
            {
                "id": "quinta-soledad_23_t01",
                "categoria": "Inspección y Reparación",
                "tarea": "Supervisar y coordinar las actividades de mantenimiento preventivo"
            },
            {
                "id": "quinta-soledad_23_t02",
                "categoria": "Inspección y Reparación",
                "tarea": "Inventario de  activos y equipos"
            },
            {
                "id": "quinta-soledad_23_t03",
                "categoria": "Inspección y Reparación",
                "tarea": "Realizar inspecciones y evaluaciones de los activos y equipos para identificar necesidades de mantenimiento"
            },
            {
                "id": "quinta-soledad_23_t04",
                "categoria": "Inspección y Reparación",
                "tarea": "Cumplir rigurosamente con las normativas y regulaciones de seguridad."
            },
            {
                "id": "quinta-soledad_23_t05",
                "categoria": "General",
                "tarea": "Coordinar con otros departamentos la disponibilidad de equipos y espacios."
            }
        ]
    },
    {
        "id": "quinta-soledad_24",
        "nombre": "Auxiliares Mantenimiento",
        "area": "MANTENIMIENTO",
        "hotelSlug": "quinta-soledad",
        "tasks": [
            {
                "id": "quinta-soledad_24_t01",
                "categoria": "Inspección y Reparación",
                "tarea": "Realizar inspecciones periódicas a los equipos e instalaciones para identificar necesidades de mantenimiento preventivo y correctivo."
            },
            {
                "id": "quinta-soledad_24_t02",
                "categoria": "Inspección y Reparación",
                "tarea": "Asegurar el buen funcionamiento, seguridad y eficiencia de los activos del hotel."
            },
            {
                "id": "quinta-soledad_24_t03",
                "categoria": "Inspección y Reparación",
                "tarea": "Coordinar con otros departamentos la disponibilidad de equipos y espacios."
            },
            {
                "id": "quinta-soledad_24_t04",
                "categoria": "Inspección y Reparación",
                "tarea": "Cumplir rigurosamente con las normativas y regulaciones de seguridad."
            }
        ]
    },
    {
        "id": "quinta-soledad_25",
        "nombre": "Jefe de Jardineria",
        "area": "MANTENIMIENTO",
        "hotelSlug": "quinta-soledad",
        "tasks": [
            {
                "id": "quinta-soledad_25_t01",
                "categoria": "Cuidado de Áreas Verdes",
                "tarea": "Realizar tareas de jardinería esenciales: podar, regar, fertilizar y controlar plagas en plantas y flores."
            },
            {
                "id": "quinta-soledad_25_t02",
                "categoria": "Cuidado de Áreas Verdes",
                "tarea": "Mantener la limpieza, el orden y la seguridad en los caminos y espacios verdes para el libre tránsito de los visitantes."
            }
        ]
    },
    {
        "id": "quinta-soledad_26",
        "nombre": "Jardinero",
        "area": "MANTENIMIENTO",
        "hotelSlug": "quinta-soledad",
        "tasks": [
            {
                "id": "quinta-soledad_26_t01",
                "categoria": "Cuidado de Áreas Verdes",
                "tarea": "Realizar tareas de jardinería esenciales: podar, regar, fertilizar y controlar plagas en plantas y flores."
            },
            {
                "id": "quinta-soledad_26_t02",
                "categoria": "Cuidado de Áreas Verdes",
                "tarea": "Mantener la limpieza, el orden y la seguridad en los caminos y espacios verdes para el libre tránsito de los visitantes."
            }
        ]
    },
    {
        "id": "quinta-soledad_27",
        "nombre": "Encargado de spa",
        "area": "Origen Centro Holistico",
        "hotelSlug": "quinta-soledad",
        "tasks": [
            {
                "id": "quinta-soledad_27_t01",
                "categoria": "Seguridad e higiene",
                "tarea": "Supervisar el cumplimiento estricto de los protocolos de higiene, normativas de salud, seguridad y protección civil."
            },
            {
                "id": "quinta-soledad_27_t02",
                "categoria": "Administración y control",
                "tarea": "Revisar los reportes de ingresos diarios generados por hospedaje, tratamientos y experiencias holísticas."
            },
            {
                "id": "quinta-soledad_27_t03",
                "categoria": "Administración y control",
                "tarea": "Dirigir y coordinar al equipo de terapeutas, facilitadores y guías de ceremonias asignados al turno."
            },
            {
                "id": "quinta-soledad_27_t04",
                "categoria": "Control de agenda",
                "tarea": ": Revisar la agenda diaria de recepción, check-ins, check-outs y reservas de terapia"
            },
            {
                "id": "quinta-soledad_27_t05",
                "categoria": "Supervisión de instalaciones",
                "tarea": "Verificar que las cabinas, áreas de spa y zonas comunes se encuentren en condiciones óptimas, limpias y armonizadas."
            },
            {
                "id": "quinta-soledad_27_t06",
                "categoria": "Venta",
                "tarea": "Coordinar promociones, paquetes especiales (retiros, días de spa) y apoyar al área comercial en la detección, prospección y  atención de nuevos clientes."
            }
        ]
    }
],
  "frontera-49": [
    {
        "id": "frontera-49_01",
        "nombre": "Gerencia General",
        "area": "Gerente",
        "hotelSlug": "frontera-49",
        "tasks": [
            {
                "id": "frontera-49_01_t01",
                "categoria": "Supervisión Operativa",
                "tarea": "Revisar diariamente las condiciones del inmueble (salones, jardines, baños, exposiciones y áreas históricas)."
            },
            {
                "id": "frontera-49_01_t02",
                "categoria": "Supervisión Operativa",
                "tarea": "Supervisar todas las áreas operativas (recepción, A&B, limpieza, áreas comunes, jardines, mantenimiento y administración)."
            },
            {
                "id": "frontera-49_01_t03",
                "categoria": "Gestión y Control",
                "tarea": "Monitorear inventarios, insumos, consumos y reporte de gastos."
            },
            {
                "id": "frontera-49_01_t04",
                "categoria": "Gestión y Control",
                "tarea": "Aprobar compras menores y validar necesidades del inmueble."
            },
            {
                "id": "frontera-49_01_t05",
                "categoria": "Gestión y Control",
                "tarea": "Revisar bitácoras operativas, de mantenimiento y de eventos."
            },
            {
                "id": "frontera-49_01_t06",
                "categoria": "Personal y Comunicación",
                "tarea": "Supervisar puntualidad, presentación, actitud y desempeño del personal."
            },
            {
                "id": "frontera-49_01_t07",
                "categoria": "Personal y Comunicación",
                "tarea": "Realizar juntas operativas semanales y asegurar el cumplimiento de acuerdos."
            },
            {
                "id": "frontera-49_01_t08",
                "categoria": "Personal y Comunicación",
                "tarea": "Validar que los montajes, tiempos y servicios de eventos cumplan con lo cotizado."
            },
            {
                "id": "frontera-49_01_t09",
                "categoria": "Experiencia del Visitante",
                "tarea": "Asegurar una experiencia cálida, ordenada y alineada a la esencia cultural."
            },
            {
                "id": "frontera-49_01_t10",
                "categoria": "Experiencia del Visitante",
                "tarea": "Supervisar la atención a eventos, recorridos, producciones y visitantes generales."
            },
            {
                "id": "frontera-49_01_t11",
                "categoria": "Administración y Control",
                "tarea": "Supervisar bitácoras operativas, de mantenimiento y de eventos"
            }
        ]
    },
    {
        "id": "frontera-49_02",
        "nombre": "Recepcionista A",
        "area": "Administración",
        "hotelSlug": "frontera-49",
        "tasks": [
            {
                "id": "frontera-49_02_t01",
                "categoria": "Atención a Huéspedes",
                "tarea": "Dar seguimiento a  reservas que arriban durante el día"
            },
            {
                "id": "frontera-49_02_t02",
                "categoria": "Atención a Huéspedes",
                "tarea": "Verificar las reservas recibidas asegurando que la información este correcta y actualisada"
            },
            {
                "id": "frontera-49_02_t03",
                "categoria": "Atención a Huéspedes",
                "tarea": "Seguimiento diario de las reservaciones con status de no show"
            },
            {
                "id": "frontera-49_02_t04",
                "categoria": "Atención a Huéspedes",
                "tarea": "Recibir, registrar y asignar habitaciones a los huéspedes."
            },
            {
                "id": "frontera-49_02_t05",
                "categoria": "Atención a Huéspedes",
                "tarea": "Proporcionar información sobre los servicios, facilidades, precios y disponibilidad del hotel."
            },
            {
                "id": "frontera-49_02_t06",
                "categoria": "Atención a Huéspedes",
                "tarea": "Realizar el proceso de check-out y procesar pagos."
            },
            {
                "id": "frontera-49_02_t07",
                "categoria": "Atención a Huéspedes",
                "tarea": "Resolver problemas, quejas y ofrecer recomendaciones de actividades en el área."
            },
            {
                "id": "frontera-49_02_t08",
                "categoria": "Gestión Administrativa",
                "tarea": "Gestionar, confirmar y actualizar las reservas de habitaciones (cambios y cancelaciones)."
            },
            {
                "id": "frontera-49_02_t09",
                "categoria": "Gestión Administrativa",
                "tarea": "Procesar pagos, gestionar facturas y mantener registros organizados."
            },
            {
                "id": "frontera-49_02_t10",
                "categoria": "Gestión Administrativa",
                "tarea": "Generar venta de experiencias"
            }
        ]
    },
    {
        "id": "frontera-49_03",
        "nombre": "Capitán",
        "area": "A&B",
        "hotelSlug": "frontera-49",
        "tasks": [
            {
                "id": "frontera-49_03_t01",
                "categoria": "Supervisión del Servicio",
                "tarea": "Dirigir al equipo de meseros y ayudantes durante turnos y eventos."
            },
            {
                "id": "frontera-49_03_t02",
                "categoria": "Supervisión del Servicio",
                "tarea": "Validar el montaje previo de mesas, cristalería, loza, cubiertos y estaciones (coffee break, cocteles, etc.)."
            },
            {
                "id": "frontera-49_03_t03",
                "categoria": "Supervisión del Servicio",
                "tarea": "Verificar que la presentación de platillos y bebidas cumpla con los estándares antes de salir a servicio."
            },
            {
                "id": "frontera-49_03_t04",
                "categoria": "Control y Cierre",
                "tarea": "Revisar existencias de insumos básicos (bebidas, cristalería, consumibles) y reportar faltantes."
            },
            {
                "id": "frontera-49_03_t05",
                "categoria": "Control y Cierre",
                "tarea": "Supervisar el desmontaje, la limpieza general y la correcta ubicación del mobiliario al finalizar."
            },
            {
                "id": "frontera-49_03_t06",
                "categoria": "Control y Cierre",
                "tarea": "Entregar reportes de consumos, incidencias y observaciones del turno."
            }
        ]
    },
    {
        "id": "frontera-49_04",
        "nombre": "Mesero A",
        "area": "A&B",
        "hotelSlug": "frontera-49",
        "tasks": [
            {
                "id": "frontera-49_04_t01",
                "categoria": "Atención y Servicio",
                "tarea": "Atender a los clientes con amabilidad, tomar pedidos y ofrecer información sobre menús y especialidades."
            },
            {
                "id": "frontera-49_04_t02",
                "categoria": "Atención y Servicio",
                "tarea": "Servir alimentos y bebidas de manera eficiente y segura."
            },
            {
                "id": "frontera-49_04_t03",
                "categoria": "Atención y Servicio",
                "tarea": "Retirar platos, limpiar mesas de forma constante y mantener limpias las áreas de trabajo."
            },
            {
                "id": "frontera-49_04_t04",
                "categoria": "Atención y Servicio",
                "tarea": "Apoyar en el montaje y desmontaje según las indicaciones del gerente."
            },
            {
                "id": "frontera-49_04_t05",
                "categoria": "Atención y Servicio",
                "tarea": "Generar venta a traves de recomendaciones de alimentos y bebidas."
            }
        ]
    },
    {
        "id": "frontera-49_05",
        "nombre": "Mesero B",
        "area": "A&B",
        "hotelSlug": "frontera-49",
        "tasks": [
            {
                "id": "frontera-49_05_t01",
                "categoria": "Atención y Servicio",
                "tarea": "Atender a los clientes con amabilidad, tomar pedidos y ofrecer información sobre menús y especialidades."
            },
            {
                "id": "frontera-49_05_t02",
                "categoria": "Atención y Servicio",
                "tarea": "Servir alimentos y bebidas de manera eficiente y segura."
            },
            {
                "id": "frontera-49_05_t03",
                "categoria": "Atención y Servicio",
                "tarea": "Retirar platos, limpiar mesas de forma constante y mantener limpias las áreas de trabajo."
            },
            {
                "id": "frontera-49_05_t04",
                "categoria": "Atención y Servicio",
                "tarea": "Apoyar en el montaje y desmontaje según las indicaciones del gerente."
            },
            {
                "id": "frontera-49_05_t05",
                "categoria": "Atención y Servicio",
                "tarea": "Generar venta a traves de recomendaciones de alimentos y bebidas."
            }
        ]
    },
    {
        "id": "frontera-49_06",
        "nombre": "Ayudante de cocina",
        "area": "Cocina",
        "hotelSlug": "frontera-49",
        "tasks": [
            {
                "id": "frontera-49_06_t01",
                "categoria": "Producción y Calidad",
                "tarea": "Respaldar actividades indicadas por el chef en tiempo y forma"
            },
            {
                "id": "frontera-49_06_t02",
                "categoria": "Producción y Calidad",
                "tarea": "Ayudar en la preparación y cocción de alimentos."
            },
            {
                "id": "frontera-49_06_t03",
                "categoria": "Producción y Calidad",
                "tarea": "Asegurar la preparación y el servicio seguro e higiénico de los alimentos."
            },
            {
                "id": "frontera-49_06_t04",
                "categoria": "Producción y Calidad",
                "tarea": "Limpieza y organización de estaciones"
            }
        ]
    },
    {
        "id": "frontera-49_07",
        "nombre": "Limpieza",
        "area": "LIMPIEZA",
        "hotelSlug": "frontera-49",
        "tasks": [
            {
                "id": "frontera-49_07_t01",
                "categoria": "Limpieza de Habitaciones",
                "tarea": "Limpiar y organizar las habitaciones de acuerdo con los estándares de calidad del establecimiento."
            },
            {
                "id": "frontera-49_07_t02",
                "categoria": "Limpieza de Habitaciones",
                "tarea": "Cambiar la ropa de cama y las toallas"
            },
            {
                "id": "frontera-49_07_t03",
                "categoria": "Limpieza de Habitaciones",
                "tarea": "Aseo profundo de baños y abastecimiento de productos de higiene."
            },
            {
                "id": "frontera-49_07_t04",
                "categoria": "Limpieza de Habitaciones",
                "tarea": "Retirar residuos, vaciar papeleras y dejar las habitaciones listas para la llegada de nuevos huéspedes."
            },
            {
                "id": "frontera-49_07_t05",
                "categoria": "Limpieza de Habitaciones",
                "tarea": "Limpieza de áreas comunes como recepción, pasillos, casa club, área de spa y área de alberca"
            },
            {
                "id": "frontera-49_07_t06",
                "categoria": "Limpieza del hotel",
                "tarea": "Limpieza profunda y diaria de coworking, vestíbulos, recepción, cafetería, baños entre otros."
            },
            {
                "id": "frontera-49_07_t07",
                "categoria": "Limpieza del hotel",
                "tarea": "Barrer, trapear, desempolvar todas las áreas comunes"
            },
            {
                "id": "frontera-49_07_t08",
                "categoria": "Limpieza del hotel",
                "tarea": "Mantener los sanitarios limpios, desinfectados y reabastecido"
            },
            {
                "id": "frontera-49_07_t09",
                "categoria": "Limpieza Durante Eventos",
                "tarea": "Asegurarse que el espacio este completamente limpio antes del inicio del evento"
            },
            {
                "id": "frontera-49_07_t10",
                "categoria": "Limpieza Durante Eventos",
                "tarea": "Monitorear constante del estado de los espacios durante el evento."
            },
            {
                "id": "frontera-49_07_t11",
                "categoria": "Limpieza Durante Eventos",
                "tarea": "Recoger vasos, servilletas, residuos"
            }
        ]
    },
    {
        "id": "frontera-49_08",
        "nombre": "Chef",
        "area": "Cocina",
        "hotelSlug": "frontera-49",
        "tasks": [
            {
                "id": "frontera-49_08_t01",
                "categoria": "Producción y Calidad",
                "tarea": "Preparar y cocinar los alimentos siguiendo estrictamente las recetas y estándares de calidad e higiene."
            },
            {
                "id": "frontera-49_08_t02",
                "categoria": "Producción y Calidad",
                "tarea": "Mantener al día el control administrativo de pedidos, inventarios y planificación de menús."
            },
            {
                "id": "frontera-49_08_t03",
                "categoria": "Producción y Calidad",
                "tarea": "Asegurar la organización, limpieza y desinfección constante de la cocina."
            },
            {
                "id": "frontera-49_08_t04",
                "categoria": "Producción y Calidad",
                "tarea": "Supervisar y dirigir al personal de cocina"
            }
        ]
    }
],
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

export const INITIAL_EMPLOYEES: Employee[] = [];