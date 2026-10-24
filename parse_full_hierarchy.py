import openpyxl, json, os

files = {
    'Orgánico Hotel Boutique Ajusco': r'c:\Users\maval\OneDrive\Documentos\Check-lsit app\_Checklist_Actividades_Puestos_OHB_Ajusco.xlsx',
    'Orgánico Hotel Boutique Valle de Bravo': r'c:\Users\maval\OneDrive\Documentos\Check-lsit app\Checklist_Actividades_Puestos_OHB_Valle.xlsx',
    'Orgánico Hotel Boutique Tepoztlán': r'c:\Users\maval\OneDrive\Documentos\Check-lsit app\Checklist_Actividades_Puestos_OHB_Tepoztlan.xlsx',
    'Centro Cultural Quinta Soledad': r'c:\Users\maval\OneDrive\Documentos\Check-lsit app\Checklist_Actividades_Puestos_CCQS.xlsx',
    'Frontera 49 Roma Norte': r'c:\Users\maval\OneDrive\Documentos\Check-lsit app\Checklist_Actividades_Puestos_F49RN.xlsx'
}

database = {}

for hotel_name, file_path in files.items():
    wb = openpyxl.load_workbook(file_path, data_only=True)
    database[hotel_name] = {}
    
    for sname in wb.sheetnames:
        sheet = wb[sname]
        database[hotel_name][sname] = []
        
        current_section_title = sname
        in_table = False
        
        for r in range(1, sheet.max_row + 1):
            c1 = sheet.cell(r, 1).value
            c2 = sheet.cell(r, 2).value
            c3 = sheet.cell(r, 3).value
            c4 = sheet.cell(r, 4).value
            
            c1_str = str(c1 or '').strip()
            c2_str = str(c2 or '').strip()
            c3_str = str(c3 or '').strip()
            c4_str = str(c4 or '').strip()
            
            # Row 1 is usually the main sheet title
            if r == 1 and not c2_str and not c3_str and not c4_str:
                continue
                
            # If only c1 is filled and c2, c3, c4 are empty, this is a SECTION TITLE / PUESTO BANNER!
            if c1_str and not c2_str and not c3_str and not c4_str:
                # But make sure it's not a table header
                if 'estatus' not in c1_str.lower() and 'actividad' not in c1_str.lower():
                    current_section_title = c1_str
                    in_table = False
                    continue
                    
            # Check if this row is the table header
            if 'estatus' in c1_str.lower() or 'puesto' in c2_str.lower() or 'actividad' in c4_str.lower():
                in_table = True
                continue
                
            # If in table, and c4 (task) is present:
            if c4_str and c4_str.lower() != 'none' and 'actividad' not in c4_str.lower():
                # We have a valid task!
                # If c2 is empty, fallback to current_section_title or sname
                puesto_name = c2_str if c2_str else current_section_title
                cat_name = c3_str if c3_str else 'General'
                
                database[hotel_name][sname].append({
                    'row': r,
                    'seccion_banner': current_section_title,
                    'puesto': puesto_name,
                    'categoria': cat_name,
                    'tarea': c4_str
                })

with open('full_hierarchy.json', 'w', encoding='utf-8') as f:
    json.dump(database, f, ensure_ascii=False, indent=2)

print("Exported full_hierarchy.json successfully!")
