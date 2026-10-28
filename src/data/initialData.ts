// AUTO-GENERATED INITIAL CATALOG DATA FROM AUDITED EXCEL FILES & OFFICIAL ROSTER
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
                "tarea": "Revisar diariamente las condiciones del inmueble (cabañas, jardines, baños, áreas comunes y restaurante)."
            },
            {
                "id": "ajusco_01_t02",
                "categoria": "Supervisión Operativa",
                "tarea": "Supervisar todas las áreas operativas (recepción, A&B, limpieza, jardines, mantenimiento y spa)."
            },
            {
                "id": "ajusco_01_t03",
                "categoria": "Gestión y Control",
                "tarea": "Monitorear inventarios, insumos, consumos y reporte de gastos diarios."
            },
            {
                "id": "ajusco_01_t04",
                "categoria": "Gestión y Control",
                "tarea": "Aprobar compras menores y validar necesidades operativas del hotel."
            },
            {
                "id": "ajusco_01_t05",
                "categoria": "Gestión y Control",
                "tarea": "Revisar bitácoras operativas, de mantenimiento y de eventos en montaña."
            },
            {
                "id": "ajusco_01_t06",
                "categoria": "Personal y Comunicación",
                "tarea": "Supervisar puntualidad, presentación, actitud y desempeño del personal en turno."
            },
            {
                "id": "ajusco_01_t07",
                "categoria": "Personal y Comunicación",
                "tarea": "Realizar juntas operativas con jefaturas y asegurar cumplimiento de acuerdos."
            },
            {
                "id": "ajusco_01_t08",
                "categoria": "Personal y Comunicación",
                "tarea": "Validar que los montajes, fogatas y servicios de cabañas cumplan con lo reservado."
            },
            {
                "id": "ajusco_01_t09",
                "categoria": "Experiencia del Huésped",
                "tarea": "Asegurar una experiencia cálida, exclusiva y de total desconexión para los huéspedes."
            },
            {
                "id": "ajusco_01_t10",
                "categoria": "Experiencia del Huésped",
                "tarea": "Supervisar la atención a cenas románticas, experiencias en bosque y visitantes."
            },
            {
                "id": "ajusco_01_t11",
                "categoria": "Administración y Control",
                "tarea": "Supervisar bitácoras operativas, de seguridad y cortes de caja."
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
                "tarea": "Dar seguimiento a reservas de cabañas y experiencias que arriban durante el día."
            },
            {
                "id": "ajusco_02_t02",
                "categoria": "Atención a Huéspedes",
                "tarea": "Verificar las reservas recibidas asegurando que la información de los huéspedes esté correcta."
            },
            {
                "id": "ajusco_02_t03",
                "categoria": "Atención a Huéspedes",
                "tarea": "Seguimiento diario de las reservaciones con status de no show."
            },
            {
                "id": "ajusco_02_t04",
                "categoria": "Atención a Huéspedes",
                "tarea": "Recibir, registrar y asignar cabañas a los huéspedes con bienvenida personalizada."
            },
            {
                "id": "ajusco_02_t05",
                "categoria": "Atención a Huéspedes",
                "tarea": "Proporcionar información sobre servicios, spa Origen, restaurante Don Petro y actividades de montaña."
            },
            {
                "id": "ajusco_02_t06",
                "categoria": "Atención a Huéspedes",
                "tarea": "Realizar el proceso de check-out y procesar cobros y pagos."
            },
            {
                "id": "ajusco_02_t07",
                "categoria": "Atención a Huéspedes",
                "tarea": "Resolver incidencias, atender solicitudes especiales y canalizar requerimientos a áreas correspondientes."
            },
            {
                "id": "ajusco_02_t08",
                "categoria": "Gestión Administrativa",
                "tarea": "Gestionar, confirmar y actualizar reservas en el sistema hotelero."
            },
            {
                "id": "ajusco_02_t09",
                "categoria": "Gestión Administrativa",
                "tarea": "Procesar pagos, gestionar facturas y mantener registros organizados en caja."
            },
            {
                "id": "ajusco_02_t10",
                "categoria": "Gestión Administrativa",
                "tarea": "Generar venta de experiencias holísticas, cenas y actividades ecoturísticas."
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
                "tarea": "Atender a los comensales con amabilidad, tomar comandas y explicar especialidades de montaña y cortes."
            },
            {
                "id": "ajusco_03_t02",
                "categoria": "Atención y Servicio",
                "tarea": "Servir alimentos y bebidas de manera eficiente, oportuna y segura."
            },
            {
                "id": "ajusco_03_t03",
                "categoria": "Atención y Servicio",
                "tarea": "Retirar platos, limpiar mesas de forma constante y mantener pulcras las estaciones de servicio."
            },
            {
                "id": "ajusco_03_t04",
                "categoria": "Atención y Servicio",
                "tarea": "Apoyar en el montaje de mesas, chimeneas y desmontaje según indicaciones de Gerencia."
            },
            {
                "id": "ajusco_03_t05",
                "categoria": "Atención y Servicio",
                "tarea": "Generar venta sugerida a través de recomendaciones de platillos, vinos y coctelería de autor."
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
                "tarea": "Atender a los comensales con amabilidad, tomar comandas y explicar especialidades del menú."
            },
            {
                "id": "ajusco_04_t02",
                "categoria": "Atención y Servicio",
                "tarea": "Servir alimentos y bebidas de manera eficiente y segura respetando tiempos de cocina."
            },
            {
                "id": "ajusco_04_t03",
                "categoria": "Atención y Servicio",
                "tarea": "Retirar loza y cristalería sucia, mantener limpias las áreas de trabajo y desinfectar mesas."
            },
            {
                "id": "ajusco_04_t04",
                "categoria": "Atención y Servicio",
                "tarea": "Apoyar en el montaje previo y resguardo de mantelería al término del servicio."
            },
            {
                "id": "ajusco_04_t05",
                "categoria": "Atención y Servicio",
                "tarea": "Generar venta sugerida de postres, café de especialidad y digestivos."
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
                "tarea": "Asegurar la organización, limpieza profunda y desinfección constante de toda la cocina."
            },
            {
                "id": "ajusco_05_t04",
                "categoria": "Producción y Calidad",
                "tarea": "Supervisar y dirigir al personal de cocina en todos los turnos."
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
                "tarea": "Respaldar actividades indicadas por el chef en tiempo y forma."
            },
            {
                "id": "ajusco_06_t02",
                "categoria": "Producción y Calidad",
                "tarea": "Ayudar en la preparación previa (mise en place), lavado, pelado y corte de ingredientes."
            },
            {
                "id": "ajusco_06_t03",
                "categoria": "Producción y Calidad",
                "tarea": "Asegurar la manipulación e higiene de los alimentos bajo normativas de salubridad."
            },
            {
                "id": "ajusco_06_t04",
                "categoria": "Producción y Calidad",
                "tarea": "Limpieza y organización constante de estaciones de trabajo y utensilios."
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
                "categoria": "Montaje y Preparación",
                "tarea": "Montar y abastecer la barra: cristalería, hielo, insumos frescos, hierbas y garnituras."
            },
            {
                "id": "ajusco_07_t02",
                "categoria": "Control de Inventarios",
                "tarea": "Llevar el control administrativo de botellas abiertas, destilados, vinos y mezcladores."
            },
            {
                "id": "ajusco_07_t03",
                "categoria": "Higiene y Desinfección",
                "tarea": "Asegurar la organización, limpieza y desinfección constante de la barra y contrabarra."
            },
            {
                "id": "ajusco_07_t04",
                "categoria": "Atención y Servicio",
                "tarea": "Atender a los comensales con calidez, tomar pedidos y preparar coctelería con receta estándar."
            },
            {
                "id": "ajusco_07_t05",
                "categoria": "Atención y Servicio",
                "tarea": "Servir bebidas de manera eficiente, oportuna y segura."
            },
            {
                "id": "ajusco_07_t06",
                "categoria": "Atención y Servicio",
                "tarea": "Retirar cristalería usada, lavar y pulir copas constantemente."
            },
            {
                "id": "ajusco_07_t07",
                "categoria": "Atención y Servicio",
                "tarea": "Apoyar en el montaje y desmontaje de eventos especiales en terraza o salón."
            },
            {
                "id": "ajusco_07_t08",
                "categoria": "Atención y Servicio",
                "tarea": "Generar venta a través de recomendaciones de vinos, coctelería y licores artesanales."
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
                "tarea": "Limpiar y organizar las cabañas de acuerdo con los estándares de calidad del hotel boutique."
            },
            {
                "id": "ajusco_08_t02",
                "categoria": "Limpieza de Habitaciones",
                "tarea": "Cambiar la ropa de cama y las toallas colocando el set de amenidades correspondiente."
            },
            {
                "id": "ajusco_08_t03",
                "categoria": "Limpieza de Habitaciones",
                "tarea": "Aseo profundo de baños, regaderas y reposición de insumos de higiene personal."
            },
            {
                "id": "ajusco_08_t04",
                "categoria": "Limpieza de Habitaciones",
                "tarea": "Retirar residuos, vaciar papeleras y dejar las cabañas listas para nuevos huéspedes."
            },
            {
                "id": "ajusco_08_t05",
                "categoria": "Limpieza de Habitaciones",
                "tarea": "Limpieza y acondicionamiento de chimeneas, terrazas privadas y áreas comunes."
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
                "tarea": "Supervisar y coordinar las actividades de mantenimiento preventivo y correctivo en todo el hotel."
            },
            {
                "id": "ajusco_09_t02",
                "categoria": "Inspección y Reparación",
                "tarea": "Inventario de activos, herramientas, calentadores, chimeneas y equipos técnicos."
            },
            {
                "id": "ajusco_09_t03",
                "categoria": "Inspección y Reparación",
                "tarea": "Realizar inspecciones técnicas periódicas para anticipar fallas eléctricas, de gas o hidráulicas."
            },
            {
                "id": "ajusco_09_t04",
                "categoria": "Inspección y Reparación",
                "tarea": "Cumplir rigurosamente con normativas de seguridad, protección civil y prevención de riesgos."
            },
            {
                "id": "ajusco_09_t05",
                "categoria": "Inspección y Reparación",
                "tarea": "Coordinar con Gerencia la disponibilidad de cabañas y áreas para mantenimientos mayores."
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
                "tarea": "Realizar inspecciones periódicas a cabañas e instalaciones identificando requerimientos de reparación."
            },
            {
                "id": "ajusco_10_t02",
                "categoria": "Inspección y Reparación",
                "tarea": "Asegurar el buen funcionamiento de calentadores, plomería, iluminación y chimeneas."
            },
            {
                "id": "ajusco_10_t03",
                "categoria": "Inspección y Reparación",
                "tarea": "Coordinar con otros departamentos la disponibilidad de equipos y apoyo en traslados."
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
                "tarea": "Planificar y supervisar tareas de jardinería esenciales: podar, regar, fertilizar y controlar plagas en el bosque y jardines."
            },
            {
                "id": "ajusco_11_t02",
                "categoria": "Cuidado de Áreas Verdes",
                "tarea": "Mantener la limpieza, el orden y la seguridad en los senderos y espacios verdes para el libre tránsito."
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
                "tarea": "Realizar tareas de jardinería esenciales: podar, regar, fertilizar y deshierbar jardines y áreas verdes."
            },
            {
                "id": "ajusco_12_t02",
                "categoria": "Cuidado de Áreas Verdes",
                "tarea": "Mantener la limpieza, recolección de ramas y seguridad en los senderos exteriores."
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
                "tarea": "Supervisar el cumplimiento estricto de los protocolos de higiene, salud y protección civil en el spa Origen."
            },
            {
                "id": "ajusco_13_t02",
                "categoria": "Administración y control",
                "tarea": "Revisar los reportes de ingresos diarios generados por terapias, masajes y experiencias holísticas."
            },
            {
                "id": "ajusco_13_t03",
                "categoria": "Administración y control",
                "tarea": "Dirigir y coordinar al equipo de terapeutas asignadas al turno."
            },
            {
                "id": "ajusco_13_t04",
                "categoria": "Control de agenda",
                "tarea": "Revisar la agenda diaria de reservas de masajes, temazcales y rituales holísticos."
            },
            {
                "id": "ajusco_13_t05",
                "categoria": "Supervisión de instalaciones",
                "tarea": "Verificar que las cabinas de spa y zonas comunes se encuentren en condiciones óptimas y armonizadas."
            },
            {
                "id": "ajusco_13_t06",
                "categoria": "Venta",
                "tarea": "Coordinar paquetes especiales, venta cruzada y apoyo comercial para captación de clientes."
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
                "tarea": "Mantener una higiene personal impecable y desinfectar camillas, piedras y utensilios tras cada servicio."
            },
            {
                "id": "ajusco_14_t02",
                "categoria": "Administración y control",
                "tarea": "Revisar los reportes de ingresos diarios generados por terapias y experiencias holísticas."
            },
            {
                "id": "ajusco_14_t03",
                "categoria": "Atención al cliente y operación",
                "tarea": "Realizar los tratamientos y masajes conforme a los protocolos establecidos del centro Origen."
            },
            {
                "id": "ajusco_14_t04",
                "categoria": "Control de insumos",
                "tarea": "Verificar la disponibilidad constante de suministros esenciales en cabina (aceites, esencias, toallas)."
            },
            {
                "id": "ajusco_14_t05",
                "categoria": "Registro de bitácora",
                "tarea": "Registrar puntualmente cada servicio en la bitácora oficial y reportar incidencias a la encargada."
            },
            {
                "id": "ajusco_14_t06",
                "categoria": "Venta",
                "tarea": "Apoyar al área comercial en la atención cálida y satisfacción de los clientes."
            },
            {
                "id": "ajusco_14_t07",
                "categoria": "Venta",
                "tarea": "Ofrecer recomendaciones personalizadas posteriores al tratamiento (respiración, infusiones relajantes)."
            }
        ]
    },
    {
        "id": "ajusco_15",
        "nombre": "Lava Loza",
        "area": "Cocina",
        "hotelSlug": "ajusco",
        "tasks": [
            {
                "id": "ajusco_15_t01",
                "categoria": "Lavado y Desinfección",
                "tarea": "Lavar, desinfectar y secar loza, cristalería, plaqué y cacerolas de cocina con químicos y agua caliente."
            },
            {
                "id": "ajusco_15_t02",
                "categoria": "Acomodo y Clasificación",
                "tarea": "Clasificar y acomodar la vajilla limpia en repisas y racks asignados para el servicio."
            },
            {
                "id": "ajusco_15_t03",
                "categoria": "Higiene de Estación",
                "tarea": "Limpieza y desinfección continua de tarjas, escurridores y trampa de grasa del área de lavado."
            },
            {
                "id": "ajusco_15_t04",
                "categoria": "Manejo de Residuos",
                "tarea": "Vaciar, desinfectar y colocar bolsas nuevas en los botes de basura orgánica e inorgánica."
            },
            {
                "id": "ajusco_15_t05",
                "categoria": "Control e Insumos",
                "tarea": "Reportar loza o cristalería rota y solicitar a tiempo reposición de detergentes y desinfectantes."
            }
        ]
    },
    {
        "id": "ajusco_16",
        "nombre": "Limpieza de Áreas Comunes",
        "area": "AMA DE LLAVESLIMPIEZA",
        "hotelSlug": "ajusco",
        "tasks": [
            {
                "id": "ajusco_16_t01",
                "categoria": "Aseo y Desinfección",
                "tarea": "Barrer, trapear y desinfectar recepción, pasillos, casa club y salones comunes del hotel."
            },
            {
                "id": "ajusco_16_t02",
                "categoria": "Sanitarios Públicos",
                "tarea": "Realizar aseo profundo y abastecer jabón, papel higiénico y toallas en sanitarios públicos."
            },
            {
                "id": "ajusco_16_t03",
                "categoria": "Mobiliario y Cristales",
                "tarea": "Limpiar ventanales, espejos, mobiliario de salas y repisas libres de polvo y ceniza."
            },
            {
                "id": "ajusco_16_t04",
                "categoria": "Áreas Exteriores",
                "tarea": "Vaciar y desinfectar ceniceros, papeleras exteriores y mantener limpias las terrazas comunes."
            },
            {
                "id": "ajusco_16_t05",
                "categoria": "Reporte de Daños",
                "tarea": "Reportar de inmediato a Mantenimiento cualquier desperfecto en luminarias, chapas o sanitarios."
            }
        ]
    },
    {
        "id": "ajusco_17",
        "nombre": "Parrillero Cocina",
        "area": "Cocina",
        "hotelSlug": "ajusco",
        "tasks": [
            {
                "id": "ajusco_17_t01",
                "categoria": "Encendido y Puesta a Punto",
                "tarea": "Encender, calentar y regular las brasas y parrillas antes del inicio del servicio."
            },
            {
                "id": "ajusco_17_t02",
                "categoria": "Mise en Place de Proteínas",
                "tarea": "Verificar pesaje, corte, marinado y correcta rotación PEPS de carnes y proteínas en refrigeración."
            },
            {
                "id": "ajusco_17_t03",
                "categoria": "Cocción y Estándares",
                "tarea": "Cocinar cortes de carne respetando términos solicitados por comensales y tiempos de comanda."
            },
            {
                "id": "ajusco_17_t04",
                "categoria": "Higiene y Temperaturas",
                "tarea": "Asegurar que las carnes se mantengan en rangos seguros de temperatura y evitar contaminación cruzada."
            },
            {
                "id": "ajusco_17_t05",
                "categoria": "Limpieza de Parrilla",
                "tarea": "Desengrasar parrillas, limpiar campana de extracción y sanitizar la estación de trabajo al cierre."
            }
        ]
    },
    {
        "id": "ajusco_18",
        "nombre": "Barra Don Petro",
        "area": "Bar Don Petro",
        "hotelSlug": "ajusco",
        "tasks": [
            {
                "id": "ajusco_18_t01",
                "categoria": "Montaje y Preparación",
                "tarea": "Montar y abastecer la barra Don Petro: hielo, cristalería pulida, fruta fresca y botellas."
            },
            {
                "id": "ajusco_18_t02",
                "categoria": "Control de Inventarios",
                "tarea": "Controlar el inventario de botellas abiertas, vinos, licores y mezcladores del turno."
            },
            {
                "id": "ajusco_18_t03",
                "categoria": "Elaboración de Bebidas",
                "tarea": "Preparar coctelería y bebidas respetando recetas estándar y tiempos de servicio."
            },
            {
                "id": "ajusco_18_t04",
                "categoria": "Higiene y Desinfección",
                "tarea": "Mantener limpia y desinfectada la barra, contrabarra, tarjas y refrigeradores durante el servicio."
            },
            {
                "id": "ajusco_18_t05",
                "categoria": "Cierre y Arqueo",
                "tarea": "Realizar el inventario de botellas al cierre, registrar mermas y entregar la estación impecable."
            }
        ]
    },
    {
        "id": "ajusco_19",
        "nombre": "Responsable Bar Miel",
        "area": "Bar Miel",
        "hotelSlug": "ajusco",
        "tasks": [
            {
                "id": "ajusco_19_t01",
                "categoria": "Apertura e Inspección",
                "tarea": "Inspeccionar el salón y terraza de Bar Miel: chimeneas, mobiliario, calefactores y ambientación."
            },
            {
                "id": "ajusco_19_t02",
                "categoria": "Montaje y Abastecimiento",
                "tarea": "Montar la barra con licores de especialidad, cristalería fina e infusiones artesanales con miel."
            },
            {
                "id": "ajusco_19_t03",
                "categoria": "Servicio al Huésped",
                "tarea": "Atender a huéspedes con amabilidad y calidez, preparando coctelería de autor y bebidas calientes."
            },
            {
                "id": "ajusco_19_t04",
                "categoria": "Caja e Inventario",
                "tarea": "Llevar el control de inventario de botellas, consumos de terraza y corte de caja del bar."
            },
            {
                "id": "ajusco_19_t05",
                "categoria": "Cierre y Seguridad",
                "tarea": "Resguardar botellas de alto valor, verificar apagado seguro de chimeneas y cerrar el recinto."
            }
        ]
    },
    {
        "id": "ajusco_24",
        "nombre": "Mantenimiento Origen Centro Holístico",
        "area": "Origen Centro Holistico",
        "hotelSlug": "ajusco",
        "tasks": [
            {
                "id": "ajusco_24_t01",
                "categoria": "Hidráulica y Termas",
                "tarea": "Inspeccionar y asegurar el funcionamiento óptimo de tinas de hidromasaje, vapor y temazcales."
            },
            {
                "id": "ajusco_24_t02",
                "categoria": "Calderas y Temperatura",
                "tarea": "Controlar la temperatura de agua en calderas, presión de bombas y suministro de leña en el spa."
            },
            {
                "id": "ajusco_24_t03",
                "categoria": "Iluminación y Ambiente",
                "tarea": "Verificar luminarias tenues, ambientación musical, difusores aromáticos y calefacción en cabinas."
            },
            {
                "id": "ajusco_24_t04",
                "categoria": "Calidad de Agua",
                "tarea": "Revisar filtros, niveles de cloro/pH y desinfección en áreas húmedas del centro holístico."
            },
            {
                "id": "ajusco_24_t05",
                "categoria": "Bitácora y Refacciones",
                "tarea": "Documentar tareas de mantenimiento preventivo y solicitar refacciones con anticipación."
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
                "tarea": "Asegurar una experiencia cálida, ordenada y alineada a la esencia cultural del recinto."
            },
            {
                "id": "quinta-soledad_01_t10",
                "categoria": "Experiencia del Visitante",
                "tarea": "Supervisar la atención a eventos, recorridos, producciones y visitantes generales."
            },
            {
                "id": "quinta-soledad_01_t11",
                "categoria": "Administración y Control",
                "tarea": "Supervisar bitácoras operativas, de mantenimiento y de eventos."
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
                "tarea": "Supervisar puntualidad, presentación, actitud y desempeño del personal en turno."
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
                "categoria": "Atención a Huéspedes y Visitantes",
                "tarea": "Dar seguimiento a reservas y visitas que arriban durante el día."
            },
            {
                "id": "quinta-soledad_03_t02",
                "categoria": "Atención a Huéspedes y Visitantes",
                "tarea": "Verificar las reservas recibidas asegurando que la información esté correcta y actualizada."
            },
            {
                "id": "quinta-soledad_03_t03",
                "categoria": "Atención a Huéspedes y Visitantes",
                "tarea": "Seguimiento diario de las reservaciones con status de no show."
            },
            {
                "id": "quinta-soledad_03_t04",
                "categoria": "Atención a Huéspedes y Visitantes",
                "tarea": "Recibir, registrar y asignar habitaciones o accesos a los visitantes."
            },
            {
                "id": "quinta-soledad_03_t05",
                "categoria": "Atención a Huéspedes y Visitantes",
                "tarea": "Proporcionar información sobre los servicios, facilidades, precios y eventos del centro cultural."
            },
            {
                "id": "quinta-soledad_03_t06",
                "categoria": "Atención a Huéspedes y Visitantes",
                "tarea": "Realizar el proceso de check-out y procesar cobros y pagos."
            },
            {
                "id": "quinta-soledad_03_t07",
                "categoria": "Atención a Huéspedes y Visitantes",
                "tarea": "Resolver problemas, atender dudas y ofrecer recomendaciones de actividades en el área."
            },
            {
                "id": "quinta-soledad_03_t08",
                "categoria": "Gestión Administrativa",
                "tarea": "Gestionar, confirmar y actualizar reservas de salones o habitaciones."
            },
            {
                "id": "quinta-soledad_03_t09",
                "categoria": "Gestión Administrativa",
                "tarea": "Procesar pagos, gestionar facturas y mantener registros organizados en caja."
            },
            {
                "id": "quinta-soledad_03_t10",
                "categoria": "Gestión Administrativa",
                "tarea": "Generar venta de experiencias culturales y paquetes especiales."
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
                "categoria": "Atención a Huéspedes y Visitantes",
                "tarea": "Dar seguimiento a reservas y visitas que arriban durante el turno."
            },
            {
                "id": "quinta-soledad_04_t02",
                "categoria": "Atención a Huéspedes y Visitantes",
                "tarea": "Verificar las reservas recibidas asegurando que la información esté correcta y actualizada."
            },
            {
                "id": "quinta-soledad_04_t03",
                "categoria": "Atención a Huéspedes y Visitantes",
                "tarea": "Seguimiento diario de las reservaciones con status de no show."
            },
            {
                "id": "quinta-soledad_04_t04",
                "categoria": "Atención a Huéspedes y Visitantes",
                "tarea": "Recibir, registrar y asignar habitaciones o accesos a los visitantes."
            },
            {
                "id": "quinta-soledad_04_t05",
                "categoria": "Atención a Huéspedes y Visitantes",
                "tarea": "Proporcionar información sobre los servicios, exposiciones y disponibilidad del recinto."
            },
            {
                "id": "quinta-soledad_04_t06",
                "categoria": "Atención a Huéspedes y Visitantes",
                "tarea": "Realizar el proceso de check-out y procesar pagos en terminal."
            },
            {
                "id": "quinta-soledad_04_t07",
                "categoria": "Atención a Huéspedes y Visitantes",
                "tarea": "Resolver problemas, solicitudes especiales y canalizar incidencias operativas."
            },
            {
                "id": "quinta-soledad_04_t08",
                "categoria": "Gestión Administrativa",
                "tarea": "Gestionar, confirmar y actualizar reservas en sistema."
            },
            {
                "id": "quinta-soledad_04_t09",
                "categoria": "Gestión Administrativa",
                "tarea": "Procesar pagos, arqueo de caja chica y archivo de comprobantes fiscales."
            },
            {
                "id": "quinta-soledad_04_t10",
                "categoria": "Gestión Administrativa",
                "tarea": "Generar venta de experiencias y recorridos guiados."
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
                "tarea": "Dirigir y coordinar al equipo de meseros y ayudantes durante el turno y eventos."
            },
            {
                "id": "quinta-soledad_05_t02",
                "categoria": "Supervisión del Servicio",
                "tarea": "Validar el montaje previo de mesas, cristalería, loza, cubiertos y estaciones (coffee break, banquetes)."
            },
            {
                "id": "quinta-soledad_05_t03",
                "categoria": "Supervisión del Servicio",
                "tarea": "Verificar que la presentación de platillos y bebidas cumpla con los estándares antes de salir al comensal."
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
                "tarea": "Entregar reportes de consumos, incidencias y observaciones del turno a Gerencia."
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
                "tarea": "Dirigir y coordinar al equipo de meseros y ayudantes durante el turno y eventos."
            },
            {
                "id": "quinta-soledad_06_t02",
                "categoria": "Supervisión del Servicio",
                "tarea": "Validar el montaje previo de mesas, cristalería, loza, cubiertos y estaciones."
            },
            {
                "id": "quinta-soledad_06_t03",
                "categoria": "Supervisión del Servicio",
                "tarea": "Verificar que la presentación de platillos y bebidas cumpla con los estándares antes de salir al comensal."
            },
            {
                "id": "quinta-soledad_06_t04",
                "categoria": "Control y Cierre",
                "tarea": "Revisar existencias de insumos básicos y reportar faltantes a almacén."
            },
            {
                "id": "quinta-soledad_06_t05",
                "categoria": "Control y Cierre",
                "tarea": "Supervisar el desmontaje, limpieza general y resguardo de mantelería al finalizar."
            },
            {
                "id": "quinta-soledad_06_t06",
                "categoria": "Control y Cierre",
                "tarea": "Entregar reportes de consumos, comandas e incidencias del turno."
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
                "tarea": "Dirigir y coordinar al equipo de meseros y ayudantes durante el turno y eventos."
            },
            {
                "id": "quinta-soledad_07_t02",
                "categoria": "Supervisión del Servicio",
                "tarea": "Validar el montaje previo de mesas, cristalería, loza, cubiertos y estaciones."
            },
            {
                "id": "quinta-soledad_07_t03",
                "categoria": "Supervisión del Servicio",
                "tarea": "Verificar que la presentación de platillos y bebidas cumpla con los estándares de calidad."
            },
            {
                "id": "quinta-soledad_07_t04",
                "categoria": "Control y Cierre",
                "tarea": "Revisar existencias de insumos básicos y reportar necesidades de abasto."
            },
            {
                "id": "quinta-soledad_07_t05",
                "categoria": "Control y Cierre",
                "tarea": "Supervisar el desmontaje, la limpieza y orden del salón asignado."
            },
            {
                "id": "quinta-soledad_07_t06",
                "categoria": "Control y Cierre",
                "tarea": "Entregar bitácora de servicio y reporte de comandas cerradas."
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
                "tarea": "Dirigir y coordinar al equipo de meseros y ayudantes durante el turno y eventos."
            },
            {
                "id": "quinta-soledad_08_t02",
                "categoria": "Supervisión del Servicio",
                "tarea": "Validar el montaje previo de mesas, cristalería, loza, cubiertos y estaciones."
            },
            {
                "id": "quinta-soledad_08_t03",
                "categoria": "Supervisión del Servicio",
                "tarea": "Verificar que la presentación de platillos y bebidas cumpla con los estándares de calidad."
            },
            {
                "id": "quinta-soledad_08_t04",
                "categoria": "Control y Cierre",
                "tarea": "Revisar existencias de insumos básicos y reportar faltantes."
            },
            {
                "id": "quinta-soledad_08_t05",
                "categoria": "Control y Cierre",
                "tarea": "Supervisar el desmontaje, limpieza y acomodo de mobiliario al cierre."
            },
            {
                "id": "quinta-soledad_08_t06",
                "categoria": "Control y Cierre",
                "tarea": "Entregar reportes de consumos e incidencias del turno."
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
                "tarea": "Servir alimentos y bebidas de manera eficiente, oportuna y segura."
            },
            {
                "id": "quinta-soledad_09_t03",
                "categoria": "Atención y Servicio",
                "tarea": "Retirar platos, limpiar mesas de forma constante y mantener pulcras las estaciones de servicio."
            },
            {
                "id": "quinta-soledad_09_t04",
                "categoria": "Atención y Servicio",
                "tarea": "Apoyar en el montaje y desmontaje según las indicaciones del Capitán."
            },
            {
                "id": "quinta-soledad_09_t05",
                "categoria": "Atención y Servicio",
                "tarea": "Generar venta sugerida a través de recomendaciones de platillos, postres y bebidas."
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
                "tarea": "Apoyar en la atención a clientes con amabilidad y disposición continua."
            },
            {
                "id": "quinta-soledad_10_t02",
                "categoria": "Atención y Servicio",
                "tarea": "Trasladar charolas con alimentos y bebidas de manera eficiente y segura."
            },
            {
                "id": "quinta-soledad_10_t03",
                "categoria": "Atención y Servicio",
                "tarea": "Retirar platos, limpiar y desinfectar mesas constantemente manteniendo orden en el salón."
            },
            {
                "id": "quinta-soledad_10_t04",
                "categoria": "Atención y Servicio",
                "tarea": "Apoyar activamente en el montaje y desmontaje según indicaciones del Capitán."
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
                "tarea": "Asegurar la organización, limpieza y desinfección constante de toda la cocina."
            },
            {
                "id": "quinta-soledad_11_t04",
                "categoria": "Producción y Calidad",
                "tarea": "Supervisar, coordinar y dirigir al personal de cocina en todos los turnos."
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
                "tarea": "Respaldar actividades indicadas por el chef en tiempo y forma."
            },
            {
                "id": "quinta-soledad_12_t02",
                "categoria": "Producción y Calidad",
                "tarea": "Ayudar en la preparación previa (mise en place) y cocción de alimentos."
            },
            {
                "id": "quinta-soledad_12_t03",
                "categoria": "Producción y Calidad",
                "tarea": "Asegurar la preparación y el servicio seguro, higiénico y estandarizado de los platillos."
            },
            {
                "id": "quinta-soledad_12_t04",
                "categoria": "Producción y Calidad",
                "tarea": "Limpieza y desinfección continua de estaciones y utensilios de trabajo."
            },
            {
                "id": "quinta-soledad_12_t05",
                "categoria": "Producción y Calidad",
                "tarea": "Respaldar actividades de cafetería y eventos en tiempo y forma."
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
                "tarea": "Respaldar actividades indicadas por el chef y cocineros en tiempo y forma."
            },
            {
                "id": "quinta-soledad_13_t02",
                "categoria": "Producción y Calidad",
                "tarea": "Ayudar en el lavado, pelado, corte y preparación de ingredientes básicos."
            },
            {
                "id": "quinta-soledad_13_t03",
                "categoria": "Producción y Calidad",
                "tarea": "Asegurar la manipulación segura e higiénica de los alimentos bajo normas de salubridad."
            },
            {
                "id": "quinta-soledad_13_t04",
                "categoria": "Producción y Calidad",
                "tarea": "Limpieza profunda, lavado de marmitas y organización constante de estaciones de cocina."
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
                "tarea": "Respaldar actividades indicadas por el chef en tiempo y forma durante picos de operación."
            },
            {
                "id": "quinta-soledad_14_t02",
                "categoria": "Producción y Calidad",
                "tarea": "Ayudar en la preparación, empaquetado y porcionado de alimentos."
            },
            {
                "id": "quinta-soledad_14_t03",
                "categoria": "Producción y Calidad",
                "tarea": "Asegurar la manipulación e higiene estricta de todos los alimentos."
            },
            {
                "id": "quinta-soledad_14_t04",
                "categoria": "Producción y Calidad",
                "tarea": "Limpieza y organización de estaciones y retiro oportuno de residuos."
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
                "tarea": "Dirigir al equipo de cafetería y supervisar la atención rápida y cordial a comensales."
            },
            {
                "id": "quinta-soledad_15_t02",
                "categoria": "Supervisión del Servicio",
                "tarea": "Validar el montaje previo de vitrinas, cafeteras, insumos y loza limpia."
            },
            {
                "id": "quinta-soledad_15_t03",
                "categoria": "Supervisión del Servicio",
                "tarea": "Verificar que la presentación de cafés, repostería y bebidas cumpla con los estándares."
            },
            {
                "id": "quinta-soledad_15_t04",
                "categoria": "Control y Cierre",
                "tarea": "Revisar existencias de insumos básicos (granos de café, leche, jarabes, desechables) y reportar faltantes."
            },
            {
                "id": "quinta-soledad_15_t05",
                "categoria": "Control y Cierre",
                "tarea": "Supervisar el desmontaje, la limpieza general y la correcta ubicación del mobiliario al finalizar."
            },
            {
                "id": "quinta-soledad_15_t06",
                "categoria": "Control y Cierre",
                "tarea": "Entregar reportes de consumos, corte de caja e incidencias del turno."
            },
            {
                "id": "quinta-soledad_15_t07",
                "categoria": "Control y Cierre",
                "tarea": "Supervisar la correcta operación de cafetería y La Mal Querida."
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
                "tarea": "Atender a los clientes con amabilidad, tomar pedidos y ofrecer información sobre cafés y especialidades."
            },
            {
                "id": "quinta-soledad_16_t02",
                "categoria": "Atención y Servicio",
                "tarea": "Servir alimentos y bebidas de cafetería de manera eficiente y segura."
            },
            {
                "id": "quinta-soledad_16_t03",
                "categoria": "Atención y Servicio",
                "tarea": "Retirar tazas y platos, limpiar mesas de forma constante y mantener pulcra el área de mesas."
            },
            {
                "id": "quinta-soledad_16_t04",
                "categoria": "Atención y Servicio",
                "tarea": "Apoyar en el montaje de vitrinas y limpieza de estaciones de café."
            },
            {
                "id": "quinta-soledad_16_t05",
                "categoria": "Atención y Servicio",
                "tarea": "Generar venta a través de sugerencias de café de especialidad y postres."
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
                "tarea": "Respaldar actividades indicadas por el encargado de cafetería y cocina en tiempo y forma."
            },
            {
                "id": "quinta-soledad_17_t02",
                "categoria": "Producción y Calidad",
                "tarea": "Preparación de masa, prensado y cocción tradicional de tortillas a mano."
            },
            {
                "id": "quinta-soledad_17_t03",
                "categoria": "Producción y Calidad",
                "tarea": "Asegurar la preparación higiénica y temperatura adecuada para el servicio de tortillas frescas."
            },
            {
                "id": "quinta-soledad_17_t04",
                "categoria": "Producción y Calidad",
                "tarea": "Limpieza, desinfección y mantenimiento del comal y estación de trabajo."
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
                "tarea": "Revisar las recetas y la producción del día para medir, pesar y alistar ingredientes manteniendo control de mermas."
            },
            {
                "id": "quinta-soledad_18_t02",
                "categoria": "Preparación de insumos",
                "tarea": "Ejecutar los procesos de mezclado, amasado, fermentación y moldeado según los estándares de calidad del centro cultural."
            },
            {
                "id": "quinta-soledad_18_t03",
                "categoria": "Horneado y calidad",
                "tarea": "Mantener las mesas de trabajo, charolas, maquinaria y utensilios limpios, ordenados y listos durante toda la producción."
            },
            {
                "id": "quinta-soledad_18_t04",
                "categoria": "Control y Cierre",
                "tarea": "Revisar existencias de insumos básicos (harinas, mantequillas, azúcares) y reportar faltantes."
            },
            {
                "id": "quinta-soledad_18_t05",
                "categoria": "Higiene y seguridad alimentaria",
                "tarea": "Asegurar que los alimentos, materias primas y hornos se manipulen bajo estrictas normas de higiene y seguridad."
            },
            {
                "id": "quinta-soledad_18_t06",
                "categoria": "Control y Cierre",
                "tarea": "Informar al chef o al área de administración sobre existencias y registrar la producción final del turno."
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
                "tarea": "Respaldar al panadero midiendo, pesando y alistando ingredientes según indicaciones del día."
            },
            {
                "id": "quinta-soledad_19_t02",
                "categoria": "Preparación de insumos",
                "tarea": "Ayudar en las labores de boleado, corte, pesado de porciones, moldeado y colocación de masas en charolas."
            },
            {
                "id": "quinta-soledad_19_t03",
                "categoria": "Higiene y seguridad",
                "tarea": "Asegurar que las materias primas se almacenen bajo estrictas normas de higiene y limpieza en la panadería."
            },
            {
                "id": "quinta-soledad_19_t04",
                "categoria": "Horneado y calidad",
                "tarea": "Ayudar a introducir y retirar charolas de los hornos bajo supervisión y trasladar piezas a vitrinas."
            },
            {
                "id": "quinta-soledad_19_t05",
                "categoria": "Cierre de turno y reporte de incidencias",
                "tarea": "Realizar la limpieza profunda de pisos, mesas y equipos al finalizar, reportando fallas al panadero."
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
                "categoria": "Limpieza y Desinfección",
                "tarea": "Lavar, desinfectar y secar vajilla, cristalería, cubertería y utensilios de cocina con agua caliente y químicos adecuados."
            },
            {
                "id": "quinta-soledad_20_t02",
                "categoria": "Limpieza y Desinfección",
                "tarea": "Clasificar y acomodar la loza limpia en sus racks y repisas correspondientes."
            },
            {
                "id": "quinta-soledad_20_t03",
                "categoria": "Limpieza y Desinfección",
                "tarea": "Retirar cochambre, limpiar trampas de grasa y desinfectar el área de lavado de loza."
            },
            {
                "id": "quinta-soledad_20_t04",
                "categoria": "Apoyo Operativo",
                "tarea": "Apoyar en el montaje, desmontaje y traslado de loza según las indicaciones del Capitán."
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
                "tarea": "Cambiar la ropa de cama y las toallas siguiendo las normas de presentación boutique."
            },
            {
                "id": "quinta-soledad_21_t03",
                "categoria": "Limpieza de Habitaciones",
                "tarea": "Aseo profundo de baños y abastecimiento de productos de higiene y amenidades."
            },
            {
                "id": "quinta-soledad_21_t04",
                "categoria": "Limpieza de Habitaciones",
                "tarea": "Retirar residuos, vaciar papeleras y dejar las habitaciones listas para la llegada de nuevos huéspedes."
            },
            {
                "id": "quinta-soledad_21_t05",
                "categoria": "Limpieza de Habitaciones",
                "tarea": "Limpieza de áreas comunes como recepción, pasillos, salones, casa club y área de spa."
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
                "tarea": "Supervisar y coordinar las actividades de mantenimiento preventivo y correctivo en salones y áreas históricas."
            },
            {
                "id": "quinta-soledad_22_t02",
                "categoria": "Inspección y Reparación",
                "tarea": "Inventario de activos, herramientas y equipos de mantenimiento."
            },
            {
                "id": "quinta-soledad_22_t03",
                "categoria": "Inspección y Reparación",
                "tarea": "Realizar inspecciones y evaluaciones de activos e instalaciones para identificar necesidades de reparación."
            },
            {
                "id": "quinta-soledad_22_t04",
                "categoria": "Inspección y Reparación",
                "tarea": "Cumplir rigurosamente con las normativas y regulaciones de seguridad laboral y protección civil."
            },
            {
                "id": "quinta-soledad_22_t05",
                "categoria": "Inspección y Reparación",
                "tarea": "Coordinar con otros departamentos la disponibilidad de equipos y espacios para eventos."
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
                "tarea": "Supervisar y coordinar las actividades de mantenimiento preventivo en jardines, luminarias y bombas de agua."
            },
            {
                "id": "quinta-soledad_23_t02",
                "categoria": "Inspección y Reparación",
                "tarea": "Inventario de activos, refacciones y equipos de bombeo y plomería."
            },
            {
                "id": "quinta-soledad_23_t03",
                "categoria": "Inspección y Reparación",
                "tarea": "Realizar inspecciones y evaluaciones técnicas para prevenir fallas eléctricas o hidráulicas."
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
                "tarea": "Asegurar el buen funcionamiento, seguridad y eficiencia de los activos del hotel y centro cultural."
            },
            {
                "id": "quinta-soledad_24_t03",
                "categoria": "Inspección y Reparación",
                "tarea": "Coordinar con otros departamentos la disponibilidad de equipos y apoyo en traslados."
            },
            {
                "id": "quinta-soledad_24_t04",
                "categoria": "Inspección y Reparación",
                "tarea": "Cumplir rigurosamente con las normativas y regulaciones de seguridad e higiene."
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
                "tarea": "Planificar y supervisar tareas de jardinería esenciales: podar, regar, fertilizar y controlar plagas en jardines patrimoniales."
            },
            {
                "id": "quinta-soledad_25_t02",
                "categoria": "Cuidado de Áreas Verdes",
                "tarea": "Mantener la limpieza, el orden y la seguridad en los caminos y espacios verdes para el libre tránsito de visitantes."
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
                "tarea": "Realizar tareas de jardinería esenciales: podar, regar, fertilizar y deshierbar plantas, césped y flores."
            },
            {
                "id": "quinta-soledad_26_t02",
                "categoria": "Cuidado de Áreas Verdes",
                "tarea": "Mantener la limpieza, el barrido de hojas y la seguridad en los caminos y espacios verdes para los visitantes."
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
                "tarea": "Supervisar el cumplimiento estricto de los protocolos de higiene, normativas de salud, seguridad y protección civil en el spa."
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
                "tarea": "Revisar la agenda diaria de recepción, check-ins, check-outs y reservas de terapia."
            },
            {
                "id": "quinta-soledad_27_t05",
                "categoria": "Supervisión de instalaciones",
                "tarea": "Verificar que las cabinas, áreas de spa y zonas comunes se encuentren en condiciones óptimas, limpias y armonizadas."
            },
            {
                "id": "quinta-soledad_27_t06",
                "categoria": "Venta",
                "tarea": "Coordinar promociones, paquetes especiales (retiros, días de spa) y apoyar al área comercial en la atención de nuevos clientes."
            }
        ]
    },
    {
        "id": "quinta-soledad_28",
        "nombre": "Seguridad",
        "area": "Seguridad y Vigilancia",
        "hotelSlug": "quinta-soledad",
        "tasks": [
            {
                "id": "quinta-soledad_28_t01",
                "categoria": "Revisión inicial y de equipos",
                "tarea": "Inspeccionar los accesos perimetrales, cerraduras, portones y estado de linternas, radios y cámaras de vigilancia al iniciar el turno."
            },
            {
                "id": "quinta-soledad_28_t02",
                "categoria": "Control de accesos",
                "tarea": "Registrar debidamente la entrada y salida de proveedores, contratistas, comitivas y visitas externas, solicitando identificación oficial."
            },
            {
                "id": "quinta-soledad_28_t03",
                "categoria": "Rondas de vigilancia periódicas",
                "tarea": "Realizar recorridos constantes por jardines, pasillos, estacionamientos y salones para prevenir riesgos y detectar anomalías."
            },
            {
                "id": "quinta-soledad_28_t04",
                "categoria": "Supervisión de salidas y resguardo",
                "tarea": "Verificar que cualquier movimiento o salida de mobiliario, herramientas, arte o mercancía cuente con autorización firmada por Administración."
            },
            {
                "id": "quinta-soledad_28_t05",
                "categoria": "Cierre y reporte en bitácora",
                "tarea": "Asegurar el cierre correcto de puertas y portones principales al finalizar la jornada, documentando novedades e incidencias en la bitácora."
            }
        ]
    },
    {
        "id": "quinta-soledad_29",
        "nombre": "Estacionamiento",
        "area": "Seguridad y Accesos",
        "hotelSlug": "quinta-soledad",
        "tasks": [
            {
                "id": "quinta-soledad_29_t01",
                "categoria": "Apertura e Inspección",
                "tarea": "Verificar la operatividad del portón de acceso, caseta, luminarias, extintores y señalamientos del estacionamiento."
            },
            {
                "id": "quinta-soledad_29_t02",
                "categoria": "Control y Registro Vehicular",
                "tarea": "Controlar el ingreso y egreso de vehículos, registrando placas, hora de entrada y emitiendo el comprobante correspondiente."
            },
            {
                "id": "quinta-soledad_29_t03",
                "categoria": "Acomodo y Flujo Vial",
                "tarea": "Coordinar la asignación ordenada de cajones de estacionamiento, asegurando el libre tránsito y áreas de evacuación."
            },
            {
                "id": "quinta-soledad_29_t04",
                "categoria": "Rondas de Inspección",
                "tarea": "Realizar rondas periódicas de vigilancia en el área de vehículos para salvaguardar las unidades de visitantes y clientes."
            },
            {
                "id": "quinta-soledad_29_t05",
                "categoria": "Cierre y Bitácora",
                "tarea": "Elaborar el conteo final de vehículos, registrar unidades que pernoctan y entregar la bitácora de novedades al relevo o administración."
            }
        ]
    },
    {
        "id": "quinta-soledad_30",
        "nombre": "Barman",
        "area": "A&B Bar",
        "hotelSlug": "quinta-soledad",
        "tasks": [
            {
                "id": "quinta-soledad_30_t01",
                "categoria": "Montaje y Preparación",
                "tarea": "Montar y abastecer la barra: verificar hieleras, cristalería pulida, insumos frescos, frutas y jarabes antes de abrir."
            },
            {
                "id": "quinta-soledad_30_t02",
                "categoria": "Inventario y Control",
                "tarea": "Registrar y controlar el inventario de botellas abiertas, destilados, vinos, cervezas y mezcladores del turno."
            },
            {
                "id": "quinta-soledad_30_t03",
                "categoria": "Elaboración y Calidad",
                "tarea": "Preparar coctelería y bebidas respetando recetas estándar, tiempos de comanda y normativas de higiene alimentaria."
            },
            {
                "id": "quinta-soledad_30_t04",
                "categoria": "Higiene y Desinfección",
                "tarea": "Mantener pulcra la contrabarra, tarjas de lavado, mesas de apoyo y refrigeradores durante todo el servicio."
            },
            {
                "id": "quinta-soledad_30_t05",
                "categoria": "Cierre y Arqueo",
                "tarea": "Realizar el inventario de cierre, registrar mermas de botellas, resguardar botellas de alto valor y entregar reporte de turno."
            }
        ]
    },
    {
        "id": "quinta-soledad_30_b",
        "nombre": "Barra",
        "area": "A&B Bar",
        "hotelSlug": "quinta-soledad",
        "tasks": [
            {
                "id": "quinta-soledad_30_b_t01",
                "categoria": "Montaje y Preparación",
                "tarea": "Alistar estaciones de servicio de barra: licuadoras, dispensadores de bebidas, hieleras y suministros ecológicos."
            },
            {
                "id": "quinta-soledad_30_b_t02",
                "categoria": "Servicio Ágil",
                "tarea": "Preparar y servir con agilidad cafés, aguas frescas, refrescos y apoyo en coctelería según comandas."
            },
            {
                "id": "quinta-soledad_30_b_t03",
                "categoria": "Cristalería e Higiene",
                "tarea": "Lavar, desinfectar y pulir constantemente vasos, copas y tazas manteniendo brillo y pulcritud."
            },
            {
                "id": "quinta-soledad_30_b_t04",
                "categoria": "Abastecimiento",
                "tarea": "Resurtir hielo, cristalería limpia, frutas picadas y servilletas manteniendo la barra lista para picos de venta."
            },
            {
                "id": "quinta-soledad_30_b_t05",
                "categoria": "Cierre de Estación",
                "tarea": "Limpiar a fondo superficies, desconectar equipos de apoyo, retirar residuos y dejar la barra impecable."
            }
        ]
    },
    {
        "id": "quinta-soledad_31",
        "nombre": "Hostes",
        "area": "A&B Atención y Servicio",
        "hotelSlug": "quinta-soledad",
        "tasks": [
            {
                "id": "quinta-soledad_31_t01",
                "categoria": "Bienvenida y Recepción",
                "tarea": "Recibir a visitantes y comensales en la entrada principal con saludo cordial, sonrisa y presentación impecable."
            },
            {
                "id": "quinta-soledad_31_t02",
                "categoria": "Asignación y Flujo",
                "tarea": "Gestionar el libro de reservas, asignación equitativa de mesas por mesero y control de lista de espera en horas pico."
            },
            {
                "id": "quinta-soledad_31_t03",
                "categoria": "Presentación de Salón",
                "tarea": "Verificar que las cartas físicas, códigos QR y mesas de exhibición estén perfectamente limpias y alineadas."
            },
            {
                "id": "quinta-soledad_31_t04",
                "categoria": "Coordinación con Capitanes",
                "tarea": "Comunicar oportunamente a capitanes y meseros la llegada de mesas grandes, eventos o requerimientos especiales."
            },
            {
                "id": "quinta-soledad_31_t05",
                "categoria": "Despedida y Satisfacción",
                "tarea": "Agradecer la visita a los comensales al retirarse, recabar comentarios de experiencia y reportar la afluencia total del turno."
            }
        ]
    },
    {
        "id": "quinta-soledad_32",
        "nombre": "Lavandería Hotel",
        "area": "Ama de Llaves",
        "hotelSlug": "quinta-soledad",
        "tasks": [
            {
                "id": "quinta-soledad_32_t01",
                "categoria": "Recolección y Clasificación",
                "tarea": "Recibir y clasificar ropa de cama, protectores y toallas por tipo de tejido y nivel de suciedad."
            },
            {
                "id": "quinta-soledad_32_t02",
                "categoria": "Lavado y Desinfección",
                "tarea": "Operar lavadoras con las temperaturas y dosificación exacta de detergentes y desinfectantes biodegradables."
            },
            {
                "id": "quinta-soledad_32_t03",
                "categoria": "Secado y Planchado",
                "tarea": "Secar, planchar y doblar sábanas, fundas y toallas cumpliendo los estándares de presentación de hotel boutique."
            },
            {
                "id": "quinta-soledad_32_t04",
                "categoria": "Ropería y Dotaciones",
                "tarea": "Armar paquetes de blancos limpios y abastecer oportunamente los carritos y ropería para las mucamas."
            },
            {
                "id": "quinta-soledad_32_t05",
                "categoria": "Control de Inventario",
                "tarea": "Llevar el conteo diario de blancos lavados, reportar prendas manchadas o deterioradas y solicitar reposición de químicos."
            }
        ]
    },
    {
        "id": "quinta-soledad_33",
        "nombre": "Lavandería y Loza Restaurante",
        "area": "Loza y Mantelería",
        "hotelSlug": "quinta-soledad",
        "tasks": [
            {
                "id": "quinta-soledad_33_t01",
                "categoria": "Lavado de Loza y Cristalería",
                "tarea": "Lavar, desinfectar y escurrir loza, cristalería, plaqué y utensilios de cocina con agua caliente y químicos aprobados."
            },
            {
                "id": "quinta-soledad_33_t02",
                "categoria": "Lavado de Mantelería",
                "tarea": "Clasificar, desmanchar y lavar manteles, servilletas de tela y limpiones del restaurante y eventos."
            },
            {
                "id": "quinta-soledad_33_t03",
                "categoria": "Planchado y Doblado",
                "tarea": "Planchar y doblar mantelería de manera uniforme, almacenándola en áreas libres de polvo y humedad."
            },
            {
                "id": "quinta-soledad_33_t04",
                "categoria": "Suministro en Salón",
                "tarea": "Entregar a capitanes y meseros loza limpia y mantelería requerida para el montaje previo al servicio."
            },
            {
                "id": "quinta-soledad_33_t05",
                "categoria": "Higiene y Reporte",
                "tarea": "Desinfectar la máquina lavalozas y tarjas, retirar residuos y registrar reporte de vajilla rota o mermas."
            }
        ]
    },
    {
        "id": "quinta-soledad_34",
        "nombre": "Parrilla",
        "area": "Cocina",
        "hotelSlug": "quinta-soledad",
        "tasks": [
            {
                "id": "quinta-soledad_34_t01",
                "categoria": "Encendido y Puesta a Punto",
                "tarea": "Encender, calentar y regular la temperatura de la parrilla y planchas previo a la apertura del servicio."
            },
            {
                "id": "quinta-soledad_34_t02",
                "categoria": "Mise en Place de Proteínas",
                "tarea": "Revisar pesaje, corte, marinado y rotación PEPS de carnes, aves y guarniciones en refrigeración."
            },
            {
                "id": "quinta-soledad_34_t03",
                "categoria": "Cocción y Estándares",
                "tarea": "Cocinar cortes respetando estrictamente los términos solicitados, tiempos de comanda y presentación culinaria."
            },
            {
                "id": "quinta-soledad_34_t04",
                "categoria": "Higiene y Control de Temperatura",
                "tarea": "Asegurar que las proteínas se mantengan en rangos seguros de temperatura y evitar contaminación cruzada."
            },
            {
                "id": "quinta-soledad_34_t05",
                "categoria": "Limpieza Profunda de Parrilla",
                "tarea": "Desengrasar parrillas, raspar carbón/planchas, limpiar filtros de campana y dejar la estación sanitizada."
            }
        ]
    },
    {
        "id": "quinta-soledad_35",
        "nombre": "Cocinera Malquerida",
        "area": "Cafetería / La Malquerida",
        "hotelSlug": "quinta-soledad",
        "tasks": [
            {
                "id": "quinta-soledad_35_t01",
                "categoria": "Preparación de Insumos",
                "tarea": "Alistar ingredientes, salsas frescas, guisados y masas para los antojitos tradicionales de La Malquerida."
            },
            {
                "id": "quinta-soledad_35_t02",
                "categoria": "Producción y Sazón",
                "tarea": "Elaborar los platillos con sazón tradicional, cuidando la temperatura y presentación típica del recinto."
            },
            {
                "id": "quinta-soledad_35_t03",
                "categoria": "Servicio Oportuno",
                "tarea": "Despachar comandas con rapidez manteniendo coordinación continua con meseros de cafetería."
            },
            {
                "id": "quinta-soledad_35_t04",
                "categoria": "Higiene y Salubridad",
                "tarea": "Limpiar constantemente comales, tablas y utensilios manteniendo la estación pulcra ante la vista del cliente."
            },
            {
                "id": "quinta-soledad_35_t05",
                "categoria": "Cierre e Inventario",
                "tarea": "Guardar sobrantes bajo refrigeración debidamente etiquetados y reportar insumos faltantes para el día siguiente."
            }
        ]
    },
    {
        "id": "quinta-soledad_01_dir",
        "nombre": "Dirección General",
        "area": "Dirección General",
        "hotelSlug": "quinta-soledad",
        "tasks": [
            {
                "id": "quinta-soledad_01_dir_t01",
                "categoria": "Supervisión Estratégica",
                "tarea": "Supervisar el estado integral del inmueble histórico, salones de exhibición, jardines y patrimonio cultural."
            },
            {
                "id": "quinta-soledad_01_dir_t02",
                "categoria": "Evaluación Operativa",
                "tarea": "Evaluar la calidad de servicio y operación en todos los centros de consumo (restaurante, cafetería, spa, eventos)."
            },
            {
                "id": "quinta-soledad_01_dir_t03",
                "categoria": "Control Financiero y Compras",
                "tarea": "Revisar los cortes de caja consolidados, compras de inversión y cumplimiento presupuestal."
            },
            {
                "id": "quinta-soledad_01_dir_t04",
                "categoria": "Liderazgo y Gestión Humana",
                "tarea": "Alinear al equipo directivo y jefaturas en metas de hospitalidad, clima laboral y productividad."
            },
            {
                "id": "quinta-soledad_01_dir_t05",
                "categoria": "Relaciones Institucionales",
                "tarea": "Supervisar convenios culturales, visitas de personalidades y relaciones con autoridades y comunidad."
            }
        ]
    },
    {
        "id": "quinta-soledad_39",
        "nombre": "Administración General",
        "area": "Administración",
        "hotelSlug": "quinta-soledad",
        "tasks": [
            {
                "id": "quinta-soledad_39_t01",
                "categoria": "Caja y Finanzas",
                "tarea": "Conciliar y revisar los cortes diarios de caja de recepción, cafetería, restaurante y spa con sus tickets y vouchers."
            },
            {
                "id": "quinta-soledad_39_t02",
                "categoria": "Proveedores y Compras",
                "tarea": "Revisar, cotejar contra pedidos y tramitar facturas de proveedores de alimentos, bebidas y mantenimiento."
            },
            {
                "id": "quinta-soledad_39_t03",
                "categoria": "Control de Personal",
                "tarea": "Verificar listas de asistencia, bitácoras de incidencias, retardos y permisos del personal del centro cultural."
            },
            {
                "id": "quinta-soledad_39_t04",
                "categoria": "Caja Chica y Pagos Menores",
                "tarea": "Supervisar los fondos de caja chica, reposiciones y pagos operativos urgentes debidamente autorizados."
            },
            {
                "id": "quinta-soledad_39_t05",
                "categoria": "Reporte Administrativo",
                "tarea": "Elaborar y enviar el reporte administrativo y de dispersión del día a la Dirección General."
            }
        ]
    },
    {
        "id": "quinta-soledad_40",
        "nombre": "Encargado Operativo",
        "area": "Supervisión Operativa",
        "hotelSlug": "quinta-soledad",
        "tasks": [
            {
                "id": "quinta-soledad_40_t01",
                "categoria": "Apertura y Cobertura",
                "tarea": "Verificar la apertura puntual de todas las áreas de servicio y la cobertura completa de turnos del personal."
            },
            {
                "id": "quinta-soledad_40_t02",
                "categoria": "Supervisión en Piso",
                "tarea": "Supervisar de manera continua el flujo de trabajo en cocina, restaurante, cafetería y limpieza."
            },
            {
                "id": "quinta-soledad_40_t03",
                "categoria": "Control de Calidad",
                "tarea": "Verificar la correcta presentación de los colaboradores, el uso de uniforme y la higiene en estaciones."
            },
            {
                "id": "quinta-soledad_40_t04",
                "categoria": "Insumos y Resurtido",
                "tarea": "Detectar a tiempo necesidades de insumos prioritarios y coordinar el abasto con almacén y compras."
            },
            {
                "id": "quinta-soledad_40_t05",
                "categoria": "Cierre y Resguardo",
                "tarea": "Inspeccionar el cierre de estaciones, apagado de luces/gas, resguardo de llaves y entrega de novedades a Gerencia."
            }
        ]
    }
],
  "frontera-49": [
    {
        "id": "frontera-49_01",
        "nombre": "Gerente general",
        "area": "Gerente",
        "hotelSlug": "frontera-49",
        "tasks": [
            {
                "id": "frontera-49_01_t01",
                "categoria": "Supervisión Operativa",
                "tarea": "Revisar diariamente las condiciones del inmueble (habitaciones, coworking, cafetería, baños y áreas comunes)."
            },
            {
                "id": "frontera-49_01_t02",
                "categoria": "Supervisión Operativa",
                "tarea": "Supervisar todas las áreas operativas (recepción, A&B, cocina y limpieza)."
            },
            {
                "id": "frontera-49_01_t03",
                "categoria": "Gestión y Control",
                "tarea": "Monitorear inventarios, insumos, consumos y reporte de gastos diarios."
            },
            {
                "id": "frontera-49_01_t04",
                "categoria": "Gestión y Control",
                "tarea": "Aprobar compras menores y validar necesidades del inmueble."
            },
            {
                "id": "frontera-49_01_t05",
                "categoria": "Gestión y Control",
                "tarea": "Revisar bitácoras operativas, de mantenimiento y de eventos en Roma Norte."
            },
            {
                "id": "frontera-49_01_t06",
                "categoria": "Personal y Comunicación",
                "tarea": "Supervisar puntualidad, presentación, actitud y desempeño del personal en turno."
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
                "categoria": "Experiencia del Huésped",
                "tarea": "Asegurar una experiencia cálida, ordenada y alineada a la esencia de hospitalidad boutique."
            },
            {
                "id": "frontera-49_01_t10",
                "categoria": "Experiencia del Huésped",
                "tarea": "Supervisar la atención a huéspedes, producciones y visitantes generales."
            },
            {
                "id": "frontera-49_01_t11",
                "categoria": "Administración y Control",
                "tarea": "Supervisar bitácoras operativas, de mantenimiento y de eventos."
            }
        ]
    },
    {
        "id": "frontera-49_02",
        "nombre": "Auxiliar de recepción",
        "area": "Administración",
        "hotelSlug": "frontera-49",
        "tasks": [
            {
                "id": "frontera-49_02_t01",
                "categoria": "Atención a Huéspedes",
                "tarea": "Dar seguimiento a reservas que arriban durante el día y verificar estatus en sistema."
            },
            {
                "id": "frontera-49_02_t02",
                "categoria": "Atención a Huéspedes",
                "tarea": "Verificar las reservas recibidas asegurando que la información esté correcta y actualizada."
            },
            {
                "id": "frontera-49_02_t03",
                "categoria": "Atención a Huéspedes",
                "tarea": "Seguimiento diario de las reservaciones con estatus de no show."
            },
            {
                "id": "frontera-49_02_t04",
                "categoria": "Atención a Huéspedes",
                "tarea": "Recibir, registrar y asignar habitaciones a los huéspedes con bienvenida personalizada."
            },
            {
                "id": "frontera-49_02_t05",
                "categoria": "Atención a Huéspedes",
                "tarea": "Proporcionar información sobre los servicios, facilidades, precios y recomendaciones en Roma Norte."
            },
            {
                "id": "frontera-49_02_t06",
                "categoria": "Atención a Huéspedes",
                "tarea": "Realizar el proceso de check-out, revisión de consumos y cobros."
            },
            {
                "id": "frontera-49_02_t07",
                "categoria": "Atención a Huéspedes",
                "tarea": "Resolver dudas, incidencias y ofrecer recomendaciones gastronómicas y culturales de la zona."
            },
            {
                "id": "frontera-49_02_t08",
                "categoria": "Gestión Administrativa",
                "tarea": "Gestionar, confirmar y actualizar las reservas de habitaciones (cambios y cancelaciones)."
            },
            {
                "id": "frontera-49_02_t09",
                "categoria": "Gestión Administrativa",
                "tarea": "Procesar pagos con tarjeta/efectivo, gestionar facturas y mantener registros organizados en caja."
            },
            {
                "id": "frontera-49_02_t10",
                "categoria": "Gestión Administrativa",
                "tarea": "Generar venta de experiencias y paquetes especiales del hotel."
            }
        ]
    },
    {
        "id": "frontera-49_03",
        "nombre": "Capitán Alimentos y Bebidas",
        "area": "A&B",
        "hotelSlug": "frontera-49",
        "tasks": [
            {
                "id": "frontera-49_03_t01",
                "categoria": "Supervisión del Servicio",
                "tarea": "Dirigir y coordinar al equipo de servicio de alimentos y bebidas durante turnos y eventos."
            },
            {
                "id": "frontera-49_03_t02",
                "categoria": "Supervisión del Servicio",
                "tarea": "Validar el montaje previo de mesas, cristalería, loza, cubiertos y estaciones de café."
            },
            {
                "id": "frontera-49_03_t03",
                "categoria": "Supervisión del Servicio",
                "tarea": "Verificar que la presentación de platillos y bebidas cumpla con los estándares antes de salir a comensales."
            },
            {
                "id": "frontera-49_03_t04",
                "categoria": "Control y Cierre",
                "tarea": "Revisar existencias de insumos básicos (bebidas, café, cristalería, consumibles) y reportar faltantes."
            },
            {
                "id": "frontera-49_03_t05",
                "categoria": "Control y Cierre",
                "tarea": "Supervisar el desmontaje, la limpieza general y la correcta ubicación del mobiliario al finalizar."
            },
            {
                "id": "frontera-49_03_t06",
                "categoria": "Control y Cierre",
                "tarea": "Entregar reportes de consumos, incidencias y observaciones del turno a Gerencia."
            }
        ]
    },
    {
        "id": "frontera-49_04",
        "nombre": "Encargada de cocina",
        "area": "Cocina",
        "hotelSlug": "frontera-49",
        "tasks": [
            {
                "id": "frontera-49_04_t01",
                "categoria": "Producción y Calidad",
                "tarea": "Preparar y cocinar los alimentos siguiendo estrictamente las recetas estándar y normas de higiene."
            },
            {
                "id": "frontera-49_04_t02",
                "categoria": "Producción y Calidad",
                "tarea": "Mantener al día el control administrativo de pedidos, inventarios y planificación de menús."
            },
            {
                "id": "frontera-49_04_t03",
                "categoria": "Producción y Calidad",
                "tarea": "Asegurar la organización, limpieza profunda y desinfección constante de toda la cocina."
            },
            {
                "id": "frontera-49_04_t04",
                "categoria": "Producción y Calidad",
                "tarea": "Supervisar y dirigir las labores del ayudante de cocina en todos los turnos."
            }
        ]
    },
    {
        "id": "frontera-49_05",
        "nombre": "Ayudante de cocina",
        "area": "Cocina",
        "hotelSlug": "frontera-49",
        "tasks": [
            {
                "id": "frontera-49_05_t01",
                "categoria": "Producción y Calidad",
                "tarea": "Respaldar actividades indicadas por la encargada de cocina en tiempo y forma."
            },
            {
                "id": "frontera-49_05_t02",
                "categoria": "Producción y Calidad",
                "tarea": "Ayudar en la preparación previa (mise en place), lavado, picado y cocción de alimentos."
            },
            {
                "id": "frontera-49_05_t03",
                "categoria": "Producción y Calidad",
                "tarea": "Asegurar la preparación y el servicio seguro e higiénico bajo estándares de salubridad."
            },
            {
                "id": "frontera-49_05_t04",
                "categoria": "Producción y Calidad",
                "tarea": "Limpieza y desinfección continua de estaciones de trabajo, utensilios y tarjas."
            }
        ]
    },
    {
        "id": "frontera-49_06",
        "nombre": "Mucama y limpieza",
        "area": "LIMPIEZA",
        "hotelSlug": "frontera-49",
        "tasks": [
            {
                "id": "frontera-49_06_t01",
                "categoria": "Limpieza de Habitaciones",
                "tarea": "Limpiar y organizar las habitaciones de acuerdo con los estándares de calidad del hotel."
            },
            {
                "id": "frontera-49_06_t02",
                "categoria": "Limpieza de Habitaciones",
                "tarea": "Cambiar la ropa de cama y las toallas colocando el set de amenidades correspondiente."
            },
            {
                "id": "frontera-49_06_t03",
                "categoria": "Limpieza de Habitaciones",
                "tarea": "Aseo profundo de baños y abastecimiento oportuno de productos de higiene."
            },
            {
                "id": "frontera-49_06_t04",
                "categoria": "Limpieza de Habitaciones",
                "tarea": "Retirar residuos, vaciar papeleras y dejar las habitaciones listas para nuevas llegadas."
            },
            {
                "id": "frontera-49_06_t05",
                "categoria": "Limpieza de Habitaciones",
                "tarea": "Limpieza y sanitización de áreas comunes, pasillos, vestíbulos y escaleras."
            },
            {
                "id": "frontera-49_06_t06",
                "categoria": "Limpieza del Hotel",
                "tarea": "Limpieza profunda diaria de coworking, vestíbulos, recepción, cafetería y sanitarios."
            },
            {
                "id": "frontera-49_06_t07",
                "categoria": "Limpieza del Hotel",
                "tarea": "Barrer, trapear y desempolvar todas las áreas comunes del recinto."
            },
            {
                "id": "frontera-49_06_t08",
                "categoria": "Limpieza del Hotel",
                "tarea": "Mantener los sanitarios impecables, desinfectados y con insumos completos durante el día."
            },
            {
                "id": "frontera-49_06_t09",
                "categoria": "Limpieza Durante Eventos",
                "tarea": "Asegurarse que el espacio esté completamente limpio antes del inicio de eventos."
            },
            {
                "id": "frontera-49_06_t10",
                "categoria": "Limpieza Durante Eventos",
                "tarea": "Monitoreo constante del estado de las áreas durante el transcurso de eventos."
            },
            {
                "id": "frontera-49_06_t11",
                "categoria": "Limpieza Durante Eventos",
                "tarea": "Recoger vasos, servilletas y residuos de forma continua y discreta."
            }
        ]
    },
    {
        "id": "frontera-49_07",
        "nombre": "Recepción nocturna",
        "area": "Administración",
        "hotelSlug": "frontera-49",
        "tasks": [
            {
                "id": "frontera-49_07_t01",
                "categoria": "Auditoría y Cierre",
                "tarea": "Realizar el corte diario de caja, cuadre de cobros, vouchers con tarjeta y cierre del sistema hotelero (night audit)."
            },
            {
                "id": "frontera-49_07_t02",
                "categoria": "Atención Nocturna",
                "tarea": "Atender llegadas tardías (late check-in), entrega de llaves e inducción nocturna a las instalaciones."
            },
            {
                "id": "frontera-49_07_t03",
                "categoria": "Seguridad y Accesos",
                "tarea": "Verificar el cierre seguro de accesos perimetrales, canceles y apagado de luminarias no esenciales en áreas comunes."
            },
            {
                "id": "frontera-49_07_t04",
                "categoria": "Rondines y Confort",
                "tarea": "Realizar rondines nocturnos garantizando tranquilidad, silencio y supervisión de instalaciones para los huéspedes."
            },
            {
                "id": "frontera-49_07_t05",
                "categoria": "Entrega de Turno",
                "tarea": "Elaborar la bitácora nocturna detallando novedades, incidencias y pendientes para la recepción matutina."
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

export const INITIAL_EMPLOYEES: Employee[] = [
  {
    "id": "emp_qs_100",
    "numeroEmpleado": "100",
    "nombre": "Hilario Raúl Reyes Iglesias",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_39",
    "puestoNombre": "Administración General",
    "area": "Administración"
  },
  {
    "id": "emp_qs_101",
    "numeroEmpleado": "101",
    "nombre": "Yazmin Ciriaco Federico",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_01",
    "puestoNombre": "Gerencia General",
    "area": "Gerente"
  },
  {
    "id": "emp_qs_102",
    "numeroEmpleado": "102",
    "nombre": "Mateo Santes Méndez",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_02",
    "puestoNombre": "Subgerencia",
    "area": "Subgerente"
  },
  {
    "id": "emp_qs_103",
    "numeroEmpleado": "103",
    "nombre": "Andrea Juárez Bucio",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_03",
    "puestoNombre": "Recepcionista A",
    "area": "Administración"
  },
  {
    "id": "emp_qs_104",
    "numeroEmpleado": "104",
    "nombre": "Daisy Airnee Fernández Avendaño",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_03",
    "puestoNombre": "Recepcionista A",
    "area": "Administración"
  },
  {
    "id": "emp_qs_105",
    "numeroEmpleado": "105",
    "nombre": "Pedro García Mendoza",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_04",
    "puestoNombre": "Recepcionista B",
    "area": "Administración"
  },
  {
    "id": "emp_qs_106",
    "numeroEmpleado": "106",
    "nombre": "Julia Joahana Martínez Ávila",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_31",
    "puestoNombre": "Hostes",
    "area": "A&B Atención y Servicio"
  },
  {
    "id": "emp_qs_107",
    "numeroEmpleado": "107",
    "nombre": "Aline Johana Zuñiga Méndez",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_27",
    "puestoNombre": "Encargado de spa",
    "area": "Origen Centro Holistico"
  },
  {
    "id": "emp_qs_108",
    "numeroEmpleado": "108",
    "nombre": "Diana Marín Tafoya",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_01_dir",
    "puestoNombre": "Dirección General",
    "area": "Dirección General"
  },
  {
    "id": "emp_qs_109",
    "numeroEmpleado": "109",
    "nombre": "Clemente Cruz Diaz",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_18",
    "puestoNombre": "Panadero",
    "area": "Panadero"
  },
  {
    "id": "emp_qs_110",
    "numeroEmpleado": "110",
    "nombre": "Andrea Montoya Santiago",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_18",
    "puestoNombre": "Panadero",
    "area": "Panadero"
  },
  {
    "id": "emp_qs_111",
    "numeroEmpleado": "111",
    "nombre": "Ricardo Casco Nieves",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_12",
    "puestoNombre": "Cocinero 1",
    "area": "Cocina"
  },
  {
    "id": "emp_qs_112",
    "numeroEmpleado": "112",
    "nombre": "Evelia Chávez Fajardo",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_12",
    "puestoNombre": "Cocinero 1",
    "area": "Cocina"
  },
  {
    "id": "emp_qs_113",
    "numeroEmpleado": "113",
    "nombre": "Miguel Ángel Méndez Ambriz",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_40",
    "puestoNombre": "Encargado Operativo",
    "area": "Supervisión Operativa"
  },
  {
    "id": "emp_qs_114",
    "numeroEmpleado": "114",
    "nombre": "Maria Isabel Flores Hernández",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_13",
    "puestoNombre": "Ayudantes de cocina",
    "area": "Cocina"
  },
  {
    "id": "emp_qs_115",
    "numeroEmpleado": "115",
    "nombre": "Olivia Corral Maldonado",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_13",
    "puestoNombre": "Ayudantes de cocina",
    "area": "Cocina"
  },
  {
    "id": "emp_qs_116",
    "numeroEmpleado": "116",
    "nombre": "Irene Candida Montalvo Neron",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_13",
    "puestoNombre": "Ayudantes de cocina",
    "area": "Cocina"
  },
  {
    "id": "emp_qs_117",
    "numeroEmpleado": "117",
    "nombre": "Ma. Rufina Martínez Josefa",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_13",
    "puestoNombre": "Ayudantes de cocina",
    "area": "Cocina"
  },
  {
    "id": "emp_qs_118",
    "numeroEmpleado": "118",
    "nombre": "Luis Antonio Ubribe Galicia",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_34",
    "puestoNombre": "Parrilla",
    "area": "Cocina"
  },
  {
    "id": "emp_qs_119",
    "numeroEmpleado": "119",
    "nombre": "Mario Cardosa Sostenes",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_05",
    "puestoNombre": "Capitán 1",
    "area": "A&B Capitular"
  },
  {
    "id": "emp_qs_120",
    "numeroEmpleado": "120",
    "nombre": "Roberto Gallardo González",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_06",
    "puestoNombre": "Capitán 2",
    "area": "A&B Capitular"
  },
  {
    "id": "emp_qs_121",
    "numeroEmpleado": "121",
    "nombre": "Luis Donaldo Vélez Rodríguez",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_07",
    "puestoNombre": "Capitán 3",
    "area": "A&B Capitular"
  },
  {
    "id": "emp_qs_122",
    "numeroEmpleado": "122",
    "nombre": "Mauricio Santiago",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_08",
    "puestoNombre": "Capitán 4",
    "area": "A&B Capitular"
  },
  {
    "id": "emp_qs_123",
    "numeroEmpleado": "123",
    "nombre": "Eduardo Vázquez Cevilla",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_09",
    "puestoNombre": "Meseros",
    "area": "A&B Capitular"
  },
  {
    "id": "emp_qs_124",
    "numeroEmpleado": "124",
    "nombre": "Juan Gabriel Flores Báez",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_09",
    "puestoNombre": "Meseros",
    "area": "A&B Capitular"
  },
  {
    "id": "emp_qs_125",
    "numeroEmpleado": "125",
    "nombre": "Rosario Velázquez Diaz",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_09",
    "puestoNombre": "Meseros",
    "area": "A&B Capitular"
  },
  {
    "id": "emp_qs_126",
    "numeroEmpleado": "126",
    "nombre": "Uriel Almanza Velázquez",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_09",
    "puestoNombre": "Meseros",
    "area": "A&B Capitular"
  },
  {
    "id": "emp_qs_127",
    "numeroEmpleado": "127",
    "nombre": "Evelyn Escamilla Pérez",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_10",
    "puestoNombre": "Ayudantes (A&B) de fin de semana",
    "area": "A&B Capitular"
  },
  {
    "id": "emp_qs_128",
    "numeroEmpleado": "128",
    "nombre": "Enrique Victoriano López",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_30",
    "puestoNombre": "Barman",
    "area": "A&B Bar"
  },
  {
    "id": "emp_qs_129",
    "numeroEmpleado": "129",
    "nombre": "Felipe Daniel Bello González",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_10",
    "puestoNombre": "Ayudantes (A&B) de fin de semana",
    "area": "A&B Capitular"
  },
  {
    "id": "emp_qs_130",
    "numeroEmpleado": "130",
    "nombre": "Miriam Vázquez",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_33",
    "puestoNombre": "Lavandería y Loza Restaurante",
    "area": "Loza y Mantelería"
  },
  {
    "id": "emp_qs_131",
    "numeroEmpleado": "131",
    "nombre": "Edgar Gabriel Avilés Sánchez",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_10",
    "puestoNombre": "Ayudantes (A&B) de fin de semana",
    "area": "A&B Capitular"
  },
  {
    "id": "emp_qs_132",
    "numeroEmpleado": "132",
    "nombre": "Ángel Gael Sánchez Ramírez",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_10",
    "puestoNombre": "Ayudantes (A&B) de fin de semana",
    "area": "A&B Capitular"
  },
  {
    "id": "emp_qs_133",
    "numeroEmpleado": "133",
    "nombre": "Cesar Josafat Cruz Bonilla",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_10",
    "puestoNombre": "Ayudantes (A&B) de fin de semana",
    "area": "A&B Capitular"
  },
  {
    "id": "emp_qs_134",
    "numeroEmpleado": "134",
    "nombre": "Mauricia Martínez Miguel",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_10",
    "puestoNombre": "Ayudantes (A&B) de fin de semana",
    "area": "A&B Capitular"
  },
  {
    "id": "emp_qs_135",
    "numeroEmpleado": "135",
    "nombre": "Aylin Ávila Witzil",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_10",
    "puestoNombre": "Ayudantes (A&B) de fin de semana",
    "area": "A&B Capitular"
  },
  {
    "id": "emp_qs_136",
    "numeroEmpleado": "136",
    "nombre": "Fernanda García Sánchez",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_31",
    "puestoNombre": "Hostes",
    "area": "A&B Atención y Servicio"
  },
  {
    "id": "emp_qs_137",
    "numeroEmpleado": "137",
    "nombre": "Everardo Domínguez Yáñez",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_16",
    "puestoNombre": "Meserio 1",
    "area": "A&B Cafeteria"
  },
  {
    "id": "emp_qs_138",
    "numeroEmpleado": "138",
    "nombre": "Alan Sebastián Fragoso Torres",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_16",
    "puestoNombre": "Meserio 1",
    "area": "A&B Cafeteria"
  },
  {
    "id": "emp_qs_139",
    "numeroEmpleado": "139",
    "nombre": "Eric Díaz",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_10",
    "puestoNombre": "Ayudantes (A&B) de fin de semana",
    "area": "A&B Capitular"
  },
  {
    "id": "emp_qs_140",
    "numeroEmpleado": "140",
    "nombre": "Daniel Elian Cosio",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_10",
    "puestoNombre": "Ayudantes (A&B) de fin de semana",
    "area": "A&B Capitular"
  },
  {
    "id": "emp_qs_141",
    "numeroEmpleado": "141",
    "nombre": "Rosario",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_35",
    "puestoNombre": "Cocinera Malquerida",
    "area": "Cafetería / La Malquerida"
  },
  {
    "id": "emp_qs_142",
    "numeroEmpleado": "142",
    "nombre": "Romeo Garcia Martinez",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_30_b",
    "puestoNombre": "Barra",
    "area": "A&B Bar"
  },
  {
    "id": "emp_qs_143",
    "numeroEmpleado": "143",
    "nombre": "Itzel Mondragón Campos",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_30_b",
    "puestoNombre": "Barra",
    "area": "A&B Bar"
  },
  {
    "id": "emp_qs_144",
    "numeroEmpleado": "144",
    "nombre": "Reyna Avendaño Altamirano",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_30_b",
    "puestoNombre": "Barra",
    "area": "A&B Bar"
  },
  {
    "id": "emp_qs_145",
    "numeroEmpleado": "145",
    "nombre": "Lucero Estrada Solorzano",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_21",
    "puestoNombre": "Mucama",
    "area": "AMA DE LLAVESLIMPIEZA"
  },
  {
    "id": "emp_qs_146",
    "numeroEmpleado": "146",
    "nombre": "María De Los Ángeles Chavarría Fuentes",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_21",
    "puestoNombre": "Mucama",
    "area": "AMA DE LLAVESLIMPIEZA"
  },
  {
    "id": "emp_qs_147",
    "numeroEmpleado": "147",
    "nombre": "Concepción Ramírez Alvirdes",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_21",
    "puestoNombre": "Mucama",
    "area": "AMA DE LLAVESLIMPIEZA"
  },
  {
    "id": "emp_qs_148",
    "numeroEmpleado": "148",
    "nombre": "Luz María Merlos García",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_32",
    "puestoNombre": "Lavandería Hotel",
    "area": "Ama de Llaves"
  },
  {
    "id": "emp_qs_149",
    "numeroEmpleado": "149",
    "nombre": "Ricardo González Miguel",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_22",
    "puestoNombre": "Encargado A",
    "area": "MANTENIMIENTO"
  },
  {
    "id": "emp_qs_150",
    "numeroEmpleado": "150",
    "nombre": "Miguel Padilla Cruz",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_23",
    "puestoNombre": "Encargado B",
    "area": "MANTENIMIENTO"
  },
  {
    "id": "emp_qs_151",
    "numeroEmpleado": "151",
    "nombre": "Benito Israel Ruiz Reyes",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_24",
    "puestoNombre": "Auxiliares Mantenimiento",
    "area": "MANTENIMIENTO"
  },
  {
    "id": "emp_qs_152",
    "numeroEmpleado": "152",
    "nombre": "Salvador Armando Vargas Flores",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_24",
    "puestoNombre": "Auxiliares Mantenimiento",
    "area": "MANTENIMIENTO"
  },
  {
    "id": "emp_qs_153",
    "numeroEmpleado": "153",
    "nombre": "José Emilio Rojas Osornio",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_24",
    "puestoNombre": "Auxiliares Mantenimiento",
    "area": "MANTENIMIENTO"
  },
  {
    "id": "emp_qs_154",
    "numeroEmpleado": "154",
    "nombre": "Juventino Cruz González",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_26",
    "puestoNombre": "Jardinero",
    "area": "MANTENIMIENTO"
  },
  {
    "id": "emp_qs_155",
    "numeroEmpleado": "155",
    "nombre": "Rosa Otilica Silba",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_24",
    "puestoNombre": "Auxiliares Mantenimiento",
    "area": "MANTENIMIENTO"
  },
  {
    "id": "emp_qs_156",
    "numeroEmpleado": "156",
    "nombre": "Oscar Monroy García",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_28",
    "puestoNombre": "Seguridad",
    "area": "Seguridad y Vigilancia"
  },
  {
    "id": "emp_qs_157",
    "numeroEmpleado": "157",
    "nombre": "Raúl Guerrero Torres",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_28",
    "puestoNombre": "Seguridad",
    "area": "Seguridad y Vigilancia"
  },
  {
    "id": "emp_qs_158",
    "numeroEmpleado": "158",
    "nombre": "Mario Delgado Guerrero",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_28",
    "puestoNombre": "Seguridad",
    "area": "Seguridad y Vigilancia"
  },
  {
    "id": "emp_qs_159",
    "numeroEmpleado": "159",
    "nombre": "Marcos Manuel Cruz Martínez",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_29",
    "puestoNombre": "Estacionamiento",
    "area": "Seguridad y Accesos"
  },
  {
    "id": "emp_qs_160",
    "numeroEmpleado": "160",
    "nombre": "José Manuel Cruz F",
    "hotelSlug": "quinta-soledad",
    "puestoId": "quinta-soledad_29",
    "puestoNombre": "Estacionamiento",
    "area": "Seguridad y Accesos"
  },
  {
    "id": "emp_ajusco_200",
    "numeroEmpleado": "200",
    "nombre": "CRISTINA MARTINEZ GARCÍA",
    "hotelSlug": "ajusco",
    "puestoId": "ajusco_15",
    "puestoNombre": "Lava Loza",
    "area": "Cocina"
  },
  {
    "id": "emp_ajusco_201",
    "numeroEmpleado": "201",
    "nombre": "ABIGAIL MARQUEZ DIAZ",
    "hotelSlug": "ajusco",
    "puestoId": "ajusco_05",
    "puestoNombre": "Chef",
    "area": "Cocina"
  },
  {
    "id": "emp_ajusco_202",
    "numeroEmpleado": "202",
    "nombre": "ROSA M. CHAVARRIA FUENTES",
    "hotelSlug": "ajusco",
    "puestoId": "ajusco_16",
    "puestoNombre": "Limpieza de Áreas Comunes",
    "area": "AMA DE LLAVESLIMPIEZA"
  },
  {
    "id": "emp_ajusco_203",
    "numeroEmpleado": "203",
    "nombre": "MELISSA PAOLA ZUNIGA MENDEZ",
    "hotelSlug": "ajusco",
    "puestoId": "ajusco_02",
    "puestoNombre": "Recepcionista A",
    "area": "Administración"
  },
  {
    "id": "emp_ajusco_204",
    "numeroEmpleado": "204",
    "nombre": "DIANA GABRIELA ALEJO CONTRERAS",
    "hotelSlug": "ajusco",
    "puestoId": "ajusco_08",
    "puestoNombre": "Mucama",
    "area": "AMA DE LLAVESLIMPIEZA"
  },
  {
    "id": "emp_ajusco_205",
    "numeroEmpleado": "205",
    "nombre": "IVAN SUAREZ ORTEGA",
    "hotelSlug": "ajusco",
    "puestoId": "ajusco_01",
    "puestoNombre": "Gerencia General",
    "area": "Gerente"
  },
  {
    "id": "emp_ajusco_206",
    "numeroEmpleado": "206",
    "nombre": "ALAN DAVID SUAREZ ORTEGA",
    "hotelSlug": "ajusco",
    "puestoId": "ajusco_17",
    "puestoNombre": "Parrillero Cocina",
    "area": "Cocina"
  },
  {
    "id": "emp_ajusco_207",
    "numeroEmpleado": "207",
    "nombre": "ALBERTO RAMOS SÁNCHEZ",
    "hotelSlug": "ajusco",
    "puestoId": "ajusco_18",
    "puestoNombre": "Barra Don Petro",
    "area": "Bar Don Petro"
  },
  {
    "id": "emp_ajusco_208",
    "numeroEmpleado": "208",
    "nombre": "LEODEGARIO AYALA HERNANDEZ",
    "hotelSlug": "ajusco",
    "puestoId": "ajusco_12",
    "puestoNombre": "Jardinero",
    "area": "MANTENIMIENTO"
  },
  {
    "id": "emp_ajusco_209",
    "numeroEmpleado": "209",
    "nombre": "MARIA DE LOS ANGELES AVILES MONTEBELLO",
    "hotelSlug": "ajusco",
    "puestoId": "ajusco_06",
    "puestoNombre": "Ayudantes de cocina",
    "area": "Cocina"
  },
  {
    "id": "emp_ajusco_210",
    "numeroEmpleado": "210",
    "nombre": "GERMAN GONZALEZ ESPINOSA",
    "hotelSlug": "ajusco",
    "puestoId": "ajusco_12",
    "puestoNombre": "Jardinero",
    "area": "MANTENIMIENTO"
  },
  {
    "id": "emp_ajusco_211",
    "numeroEmpleado": "211",
    "nombre": "ALBERTO TREJO FLORES",
    "hotelSlug": "ajusco",
    "puestoId": "ajusco_19",
    "puestoNombre": "Responsable Bar Miel",
    "area": "Bar Miel"
  },
  {
    "id": "emp_ajusco_212",
    "numeroEmpleado": "212",
    "nombre": "JOSE MIGUEL FLORES ROSALES",
    "hotelSlug": "ajusco",
    "puestoId": "ajusco_24",
    "puestoNombre": "Mantenimiento Origen Centro Holístico",
    "area": "Origen Centro Holistico"
  },
  {
    "id": "emp_ajusco_213",
    "numeroEmpleado": "213",
    "nombre": "JOSE CRUZ FLORES CHAVEZ",
    "hotelSlug": "ajusco",
    "puestoId": "ajusco_09",
    "puestoNombre": "Jefe de mantenimiento",
    "area": "MANTENIMIENTO"
  },
  {
    "id": "emp_ajusco_214",
    "numeroEmpleado": "214",
    "nombre": "VICTOR MANUEL BRAVO OROZCO",
    "hotelSlug": "ajusco",
    "puestoId": "ajusco_03",
    "puestoNombre": "Mesero A",
    "area": "A&B"
  },
  {
    "id": "emp_ajusco_215",
    "numeroEmpleado": "215",
    "nombre": "JESSICQ YARELY CASTILLO LEON",
    "hotelSlug": "ajusco",
    "puestoId": "ajusco_08",
    "puestoNombre": "Mucama",
    "area": "AMA DE LLAVESLIMPIEZA"
  },
  {
    "id": "emp_ajusco_216",
    "numeroEmpleado": "216",
    "nombre": "ANAHI MORALES",
    "hotelSlug": "ajusco",
    "puestoId": "ajusco_02",
    "puestoNombre": "Recepcionista A",
    "area": "Administración"
  },
  {
    "id": "emp_ajusco_217",
    "numeroEmpleado": "217",
    "nombre": "DILAN SOLOSANO BELTRAN",
    "hotelSlug": "ajusco",
    "puestoId": "ajusco_10",
    "puestoNombre": "Mantenimiento",
    "area": "MANTENIMIENTO"
  },
  {
    "id": "emp_ajusco_218",
    "numeroEmpleado": "218",
    "nombre": "JESSICA HERNANDEZ",
    "hotelSlug": "ajusco",
    "puestoId": "ajusco_04",
    "puestoNombre": "Mesero B",
    "area": "A&B"
  },
  {
    "id": "emp_ajusco_219",
    "numeroEmpleado": "219",
    "nombre": "JUAN MANUEL GARCIA FLORES",
    "hotelSlug": "ajusco",
    "puestoId": "ajusco_10",
    "puestoNombre": "Mantenimiento",
    "area": "MANTENIMIENTO"
  },
  {
    "id": "emp_ajusco_220",
    "numeroEmpleado": "220",
    "nombre": "MAURICIO FLORES ESLAVA",
    "hotelSlug": "ajusco",
    "puestoId": "ajusco_10",
    "puestoNombre": "Mantenimiento",
    "area": "MANTENIMIENTO"
  },
  {
    "id": "emp_ajusco_221",
    "numeroEmpleado": "221",
    "nombre": "LUIS CISNEROS",
    "hotelSlug": "ajusco",
    "puestoId": "ajusco_06",
    "puestoNombre": "Ayudantes de cocina",
    "area": "Cocina"
  },
  {
    "id": "emp_ajusco_222",
    "numeroEmpleado": "222",
    "nombre": "DANIELA TRINIDAD QUINTERO PAREDES",
    "hotelSlug": "ajusco",
    "puestoId": "ajusco_14",
    "puestoNombre": "TERAPEUTAS INTERNAS",
    "area": "Origen Centro Holistico"
  },
  {
    "id": "emp_ajusco_223",
    "numeroEmpleado": "223",
    "nombre": "MARIA ISABEL FLORES TREJO",
    "hotelSlug": "ajusco",
    "puestoId": "ajusco_14",
    "puestoNombre": "TERAPEUTAS INTERNAS",
    "area": "Origen Centro Holistico"
  },
  {
    "id": "emp_f49_500",
    "numeroEmpleado": "500",
    "nombre": "Ricardo Rodriguez Baez",
    "hotelSlug": "frontera-49",
    "puestoId": "frontera-49_03",
    "puestoNombre": "Capitán Alimentos y Bebidas",
    "area": "A&B"
  },
  {
    "id": "emp_f49_501",
    "numeroEmpleado": "501",
    "nombre": "Javier Alberto Martinez Peres",
    "hotelSlug": "frontera-49",
    "puestoId": "frontera-49_05",
    "puestoNombre": "Ayudante de cocina",
    "area": "Cocina"
  },
  {
    "id": "emp_f49_502",
    "numeroEmpleado": "502",
    "nombre": "Laura Elena Torres Baez",
    "hotelSlug": "frontera-49",
    "puestoId": "frontera-49_04",
    "puestoNombre": "Encargada de cocina",
    "area": "Cocina"
  },
  {
    "id": "emp_f49_503",
    "numeroEmpleado": "503",
    "nombre": "Dulce Janet Garcia Gutierra",
    "hotelSlug": "frontera-49",
    "puestoId": "frontera-49_02",
    "puestoNombre": "Auxiliar de recepción",
    "area": "Administración"
  },
  {
    "id": "emp_f49_504",
    "numeroEmpleado": "504",
    "nombre": "Siubel Estrella Valdes",
    "hotelSlug": "frontera-49",
    "puestoId": "frontera-49_06",
    "puestoNombre": "Mucama y limpieza",
    "area": "LIMPIEZA"
  },
  {
    "id": "emp_f49_505",
    "numeroEmpleado": "505",
    "nombre": "Edgar Kevin Garcia Rivera",
    "hotelSlug": "frontera-49",
    "puestoId": "frontera-49_07",
    "puestoNombre": "Recepción nocturna",
    "area": "Administración"
  },
  {
    "id": "emp_f49_506",
    "numeroEmpleado": "506",
    "nombre": "Alberto Cortés de Paz",
    "hotelSlug": "frontera-49",
    "puestoId": "frontera-49_01",
    "puestoNombre": "Gerente general",
    "area": "Gerente"
  },
  {
    "id": "emp_05",
    "numeroEmpleado": "301",
    "nombre": "Laura Patricia Ríos",
    "hotelSlug": "valle-de-bravo",
    "puestoId": "valle-de-bravo_02",
    "puestoNombre": "Recepcionista A",
    "area": "Administración"
  },
  {
    "id": "emp_08",
    "numeroEmpleado": "401",
    "nombre": "Emiliano Zapata V.",
    "hotelSlug": "tepoztlan",
    "puestoId": "tepoztlan_03",
    "puestoNombre": "Capitán 1",
    "area": "A&B"
  }
];