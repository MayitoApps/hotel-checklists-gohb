import json

with open('clean_extracted.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for hotel, sheets in data.items():
    print(f"==================================================")
    print(f"HOTEL: {hotel}")
    print(f"==================================================")
    hotel_tasks_count = 0
    hotel_puestos = {}
    
    for sname, sinfo in sheets.items():
        print(f"\n  --- Hoja/Área: {sname} (Subtítulo: '{sinfo['sheet_subtitle']}', Total tareas: {sinfo['total_tasks']}) ---")
        puesto_tasks = {}
        for t in sinfo['tasks']:
            p = t['puesto']
            if p not in puesto_tasks:
                puesto_tasks[p] = []
            puesto_tasks[p].append(t)
            
            if p not in hotel_puestos:
                hotel_puestos[p] = 0
            hotel_puestos[p] += 1
            hotel_tasks_count += 1
            
        for p, t_list in puesto_tasks.items():
            cats = set([x['categoria'] for x in t_list])
            print(f"    * Puesto: '{p}' -> {len(t_list)} tareas (Categorías: {list(cats)})")
            
    print(f"\n>> TOTAL PUESTOS EN {hotel}: {len(hotel_puestos)}")
    print(f">> TOTAL TAREAS EN {hotel}: {hotel_tasks_count}")
    print("--------------------------------------------------\n")
