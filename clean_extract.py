import openpyxl, json, os

files = {
    'Orgánico Hotel Boutique Ajusco': r'c:\Users\maval\OneDrive\Documentos\Check-lsit app\_Checklist_Actividades_Puestos_OHB_Ajusco.xlsx',
    'Orgánico Hotel Boutique Valle de Bravo': r'c:\Users\maval\OneDrive\Documentos\Check-lsit app\Checklist_Actividades_Puestos_OHB_Valle.xlsx',
    'Orgánico Hotel Boutique Tepoztlán': r'c:\Users\maval\OneDrive\Documentos\Check-lsit app\Checklist_Actividades_Puestos_OHB_Tepoztlan.xlsx',
    'Centro Cultural Quinta Soledad': r'c:\Users\maval\OneDrive\Documentos\Check-lsit app\Checklist_Actividades_Puestos_CCQS.xlsx',
    'Frontera 49 Roma Norte': r'c:\Users\maval\OneDrive\Documentos\Check-lsit app\Checklist_Actividades_Puestos_F49RN.xlsx'
}

clean_extracted = {}

for hotel_name, path in files.items():
    wb = openpyxl.load_workbook(path, data_only=True)
    clean_extracted[hotel_name] = {}
    
    for sname in wb.sheetnames:
        sheet = wb[sname]
        
        # 1. Detect header row: look for exact cell containing 'Estatus' or 'Actividad / Tarea'
        header_row = None
        for r_idx in range(1, 10):
            c1 = str(sheet.cell(r_idx, 1).value or '').strip().lower()
            c2 = str(sheet.cell(r_idx, 2).value or '').strip().lower()
            c3 = str(sheet.cell(r_idx, 3).value or '').strip().lower()
            c4 = str(sheet.cell(r_idx, 4).value or '').strip().lower()
            if 'estatus' in c1 or 'puesto' in c2 or 'actividad' in c4:
                header_row = r_idx
                break
                
        if not header_row:
            header_row = 3 # fallback standard
            
        status_col = 1
        puesto_col = 2
        cat_col = 3
        task_col = 4
        
        # In case columns vary
        for c in range(1, 8):
            val = str(sheet.cell(header_row, c).value or '').strip().lower()
            if 'estatus' in val:
                status_col = c
            elif 'puesto' in val:
                puesto_col = c
            elif 'categor' in val or 'área' in val or 'area' in val:
                cat_col = c
            elif 'actividad' in val or 'tarea' in val:
                task_col = c
                
        sub_title = str(sheet.cell(2, 1).value or '').strip()
        
        tasks_list = []
        for r_idx in range(header_row + 1, sheet.max_row + 1):
            task_val = str(sheet.cell(r_idx, task_col).value or '').strip()
            if not task_val or task_val.lower() in ['actividad / tarea', 'none', '']:
                continue
                
            puesto_val = str(sheet.cell(r_idx, puesto_col).value or '').strip()
            cat_val = str(sheet.cell(r_idx, cat_col).value or '').strip()
            
            # If puesto_val is empty, inherit from previous row or sheet default
            if not puesto_val:
                if tasks_list and tasks_list[-1]['puesto']:
                    puesto_val = tasks_list[-1]['puesto']
                elif sub_title:
                    puesto_val = sub_title
                else:
                    puesto_val = sname
                    
            tasks_list.append({
                'row': r_idx,
                'puesto': puesto_val,
                'categoria': cat_val,
                'tarea': task_val
            })
            
        clean_extracted[hotel_name][sname] = {
            'header_row': header_row,
            'sheet_subtitle': sub_title,
            'total_tasks': len(tasks_list),
            'tasks': tasks_list
        }

with open('clean_extracted.json', 'w', encoding='utf-8') as f:
    json.dump(clean_extracted, f, ensure_ascii=False, indent=2)

print("Exported clean_extracted.json with correct column mapping!")
