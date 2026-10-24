import openpyxl, os, glob

files = {
    'Ajusco': r'c:\Users\maval\OneDrive\Documentos\Check-lsit app\_Checklist_Actividades_Puestos_OHB_Ajusco.xlsx',
    'Valle de Bravo': r'c:\Users\maval\OneDrive\Documentos\Check-lsit app\Checklist_Actividades_Puestos_OHB_Valle.xlsx',
    'Tepoztlan': r'c:\Users\maval\OneDrive\Documentos\Check-lsit app\Checklist_Actividades_Puestos_OHB_Tepoztlan.xlsx',
    'Centro Cultural Quinta Soledad': r'c:\Users\maval\OneDrive\Documentos\Check-lsit app\Checklist_Actividades_Puestos_CCQS.xlsx',
    'Frontera 49 Roma Norte': r'c:\Users\maval\OneDrive\Documentos\Check-lsit app\Checklist_Actividades_Puestos_F49RN.xlsx'
}

for hotel, path in files.items():
    print(f"==================================================")
    print(f"HOTEL: {hotel}")
    print(f"==================================================")
    wb = openpyxl.load_workbook(path, data_only=True)
    for sname in wb.sheetnames:
        sheet = wb[sname]
        # find where table header is
        header_row = -1
        for r_idx in range(1, 10):
            val = sheet.cell(r_idx, 4).value # col D or col C
            val_all = [str(sheet.cell(r_idx, c).value) for c in range(1, 10)]
            if any('actividad' in x.lower() or 'tarea' in x.lower() for x in val_all):
                header_row = r_idx
                break
        
        # Check sub-header in row 2 or row 1
        r2_val = sheet.cell(2, 1).value
        
        # Now let's scan all rows from header_row + 1 to max_row
        puestos = set()
        categories = set()
        tasks = []
        extra_cols = set()
        
        for r in range(header_row + 1, sheet.max_row + 1):
            col_b = sheet.cell(r, 2).value # Puesto
            col_c = sheet.cell(r, 3).value # Categoria
            col_d = sheet.cell(r, 4).value # Tarea
            
            # check extra cols
            for ec in range(5, 12):
                ec_val = sheet.cell(r, ec).value
                if ec_val is not None and str(ec_val).strip() != '':
                    extra_cols.add(f"Col {ec}: {ec_val}")
            
            if col_d is not None and str(col_d).strip():
                p = str(col_b).strip() if col_b is not None else ''
                c = str(col_c).strip() if col_c is not None else ''
                t = str(col_d).strip()
                puestos.add(p)
                categories.add(c)
                tasks.append((p, c, t))
                
        print(f"\nSheet: [{sname}] (Row 2 Label: '{r2_val}') | Header at Row {header_row} | Total Tasks: {len(tasks)}")
        print(f"  Puestos in Column B: {sorted(list(puestos))}")
        print(f"  Categories in Column C: {sorted(list(categories))}")
        if extra_cols:
            print(f"  * EXTRA COLUMNS DETECTED: {list(extra_cols)[:3]}")

