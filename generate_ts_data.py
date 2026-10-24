import json, os

with open('catalog_positions_refined.json', 'r', encoding='utf-8') as f:
    catalog = json.load(f)

# Define the 5 hotels
hotels_meta = [
    {
        'id': 'ajusco',
        'slug': 'ajusco',
        'name': 'Orgánico Hotel Boutique Ajusco',
        'shortName': 'Ajusco',
        'logo': '/logos/organico-ajusco.png',
        'tagline': 'Boutique Hotel & Mountain Sanctuary'
    },
    {
        'id': 'valle-de-bravo',
        'slug': 'valle-de-bravo',
        'name': 'Orgánico Hotel Boutique Valle de Bravo',
        'shortName': 'Valle de Bravo',
        'logo': '/logos/organico-valle-de-bravo.png',
        'tagline': 'Luxury, Nature & Serenity'
    },
    {
        'id': 'tepoztlan',
        'slug': 'tepoztlan',
        'name': 'Orgánico Hotel Boutique Tepoztlán',
        'shortName': 'Tepoztlán',
        'logo': '/logos/organico-tepoztlan.png',
        'tagline': 'Mystic Retreat & Holistic Experience'
    },
    {
        'id': 'quinta-soledad',
        'slug': 'quinta-soledad',
        'name': 'Centro Cultural Quinta Soledad',
        'shortName': 'Quinta Soledad',
        'logo': '/logos/quinta-soledad.png',
        'tagline': 'Arte, Cultura & Hospitalidad Histórica'
    },
    {
        'id': 'frontera-49',
        'slug': 'frontera-49',
        'name': 'Frontera 49 Roma Norte',
        'shortName': 'Frontera 49',
        'logo': '/logos/frontera-49.png',
        'tagline': 'Cultura, Diseño & Estilo Roma Norte'
    }
]

# Map hotel name in catalog to slug
name_to_slug = {
    'Orgánico Hotel Boutique Ajusco': 'ajusco',
    'Orgánico Hotel Boutique Valle de Bravo': 'valle-de-bravo',
    'Orgánico Hotel Boutique Tepoztlán': 'tepoztlan',
    'Centro Cultural Quinta Soledad': 'quinta-soledad',
    'Frontera 49 Roma Norte': 'frontera-49'
}

# Generate TypeScript code
ts_lines = [
    "// AUTO-GENERATED INITIAL CATALOG DATA FROM AUDITED EXCEL FILES",
    "export interface HotelConfig {",
    "  id: string;",
    "  slug: string;",
    "  name: string;",
    "  shortName: string;",
    "  logo: string;",
    "  tagline: string;",
    "}",
    "",
    "export interface TaskTemplate {",
    "  id: string;",
    "  categoria: string;",
    "  tarea: string;",
    "}",
    "",
    "export interface PuestoTemplate {",
    "  id: string;",
    "  nombre: string;",
    "  area: string;",
    "  hotelSlug: string;",
    "  tasks: TaskTemplate[];",
    "}",
    "",
    f"export const HOTELS: HotelConfig[] = {json.dumps(hotels_meta, indent=2, ensure_ascii=False)};",
    "",
    "export const PUESTOS_BY_HOTEL: Record<string, PuestoTemplate[]> = {"
]

for hotel_name, slug in name_to_slug.items():
    puestos_dict = catalog.get(hotel_name, {})
    puestos_list = []
    
    p_counter = 1
    for p_name, p_info in puestos_dict.items():
        p_id = f"{slug}_{p_counter:02d}"
        tasks_list = []
        t_counter = 1
        for t in p_info['tasks']:
            tasks_list.append({
                'id': f"{p_id}_t{t_counter:02d}",
                'categoria': t['categoria'],
                'tarea': t['tarea']
            })
            t_counter += 1
            
        puestos_list.append({
            'id': p_id,
            'nombre': p_name,
            'area': p_info['area'],
            'hotelSlug': slug,
            'tasks': tasks_list
        })
        p_counter += 1
        
    ts_lines.append(f'  "{slug}": {json.dumps(puestos_list, indent=4, ensure_ascii=False)},')

ts_lines.append("};")

# Also add default sample employees for immediate testing
# 2-3 sample employees per hotel
sample_employees = [
    # Ajusco
    {"id": "emp_01", "numeroEmpleado": "101", "nombre": "Carlos Mendoza", "hotelSlug": "ajusco", "puestoId": "ajusco_02", "puestoNombre": "Recepcionista A", "area": "Administración"},
    {"id": "emp_02", "numeroEmpleado": "102", "nombre": "Rosa Elena Morales", "hotelSlug": "ajusco", "puestoId": "ajusco_08", "puestoNombre": "Mucama", "area": "AMA DE LLAVESLIMPIEZA"},
    {"id": "emp_03", "numeroEmpleado": "103", "nombre": "Fernando Castillo", "hotelSlug": "ajusco", "puestoId": "ajusco_09", "puestoNombre": "Jefe de mantenimiento", "area": "MANTENIMIENTO"},
    {"id": "emp_04", "numeroEmpleado": "104", "nombre": "Javier Solís", "hotelSlug": "ajusco", "puestoId": "ajusco_03", "puestoNombre": "Mesero A", "area": "A&B"},
    # Valle de Bravo
    {"id": "emp_05", "numeroEmpleado": "201", "nombre": "Laura Patricia Ríos", "hotelSlug": "valle-de-bravo", "puestoId": "valle-de-bravo_02", "puestoNombre": "Recepcionista A", "area": "Administración"},
    {"id": "emp_06", "numeroEmpleado": "202", "nombre": "Mario Alberto Luna", "hotelSlug": "valle-de-bravo", "puestoId": "valle-de-bravo_03", "puestoNombre": "Mesero A", "area": "A&B"},
    {"id": "emp_07", "numeroEmpleado": "203", "nombre": "Brenda Soto", "hotelSlug": "valle-de-bravo", "puestoId": "valle-de-bravo_08", "puestoNombre": "Mucama", "area": "AMA DE LLAVESLIMPIEZA"},
    # Tepoztlán
    {"id": "emp_08", "numeroEmpleado": "301", "nombre": "Emiliano Zapata V.", "hotelSlug": "tepoztlan", "puestoId": "tepoztlan_03", "puestoNombre": "Capitán 1", "area": "A&B"},
    {"id": "emp_09", "numeroEmpleado": "302", "nombre": "Sofía Villalobos", "hotelSlug": "tepoztlan", "puestoId": "tepoztlan_08", "puestoNombre": "Mucama", "area": "AMA DE LLAVESLIMPIEZA"},
    {"id": "emp_10", "numeroEmpleado": "303", "nombre": "Héctor Valdés", "hotelSlug": "tepoztlan", "puestoId": "tepoztlan_11", "puestoNombre": "VELADOR A", "area": "SEGURIDAD"},
    # Quinta Soledad
    {"id": "emp_11", "numeroEmpleado": "401", "nombre": "Ana Lucía Domínguez", "hotelSlug": "quinta-soledad", "puestoId": "quinta-soledad_03", "puestoNombre": "Recepcionista A", "area": "Administración"},
    {"id": "emp_12", "numeroEmpleado": "402", "nombre": "Gonzalo Méndez", "hotelSlug": "quinta-soledad", "puestoId": "quinta-soledad_18", "puestoNombre": "Panadero", "area": "Panadero"},
    {"id": "emp_13", "numeroEmpleado": "403", "nombre": "Verónica Cruz", "hotelSlug": "quinta-soledad", "puestoId": "quinta-soledad_15", "puestoNombre": "Encargado de cafetería", "area": "A&B Cafeteria"},
    # Frontera 49
    {"id": "emp_14", "numeroEmpleado": "501", "nombre": "Diego Arismendi", "hotelSlug": "frontera-49", "puestoId": "frontera-49_02", "puestoNombre": "Recepcionista A", "area": "Administración"},
    {"id": "emp_15", "numeroEmpleado": "502", "nombre": "Claudia Rivera", "hotelSlug": "frontera-49", "puestoId": "frontera-49_08", "puestoNombre": "Limpieza", "area": "LIMPIEZA"},
    {"id": "emp_16", "numeroEmpleado": "503", "nombre": "Esteban Morales", "hotelSlug": "frontera-49", "puestoId": "frontera-49_03", "puestoNombre": "Capitán", "area": "A&B"}
]

ts_lines.append("")
ts_lines.append("export interface Employee {")
ts_lines.append("  id: string;")
ts_lines.append("  numeroEmpleado: string;")
ts_lines.append("  nombre: string;")
ts_lines.append("  hotelSlug: string;")
ts_lines.append("  puestoId: string;")
ts_lines.append("  puestoNombre: string;")
ts_lines.append("  area: string;")
ts_lines.append("}")
ts_lines.append("")
ts_lines.append(f"export const INITIAL_EMPLOYEES: Employee[] = {json.dumps(sample_employees, indent=2, ensure_ascii=False)};")

os.makedirs(r'c:\Users\maval\OneDrive\Documentos\Check-lsit app\src\data', exist_ok=True)
with open(r'c:\Users\maval\OneDrive\Documentos\Check-lsit app\src\data\initialData.ts', 'w', encoding='utf-8') as f:
    f.write("\n".join(ts_lines))

print("Created src/data/initialData.ts successfully!")
