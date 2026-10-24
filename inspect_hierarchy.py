import json, sys

sys.stdout.reconfigure(encoding='utf-8')

with open('full_hierarchy.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for hotel, sheets in data.items():
    print(f"\n=======================================================")
    print(f"HOTEL: {hotel.upper()}")
    print(f"=======================================================")
    hotel_tasks = 0
    puestos_all = {}
    
    for sname, tasks in sheets.items():
        print(f"\nAREA / HOJA: {sname} (Total tareas: {len(tasks)})")
        sub_roles = {}
        for t in tasks:
            role_key = f"{t['seccion_banner']} -> {t['puesto']}" if t['seccion_banner'] != t['puesto'] else t['puesto']
            if role_key not in sub_roles:
                sub_roles[role_key] = []
            sub_roles[role_key].append(t)
            
            p = t['puesto']
            puestos_all[p] = puestos_all.get(p, 0) + 1
            hotel_tasks += 1
            
        for rk, t_list in sub_roles.items():
            cats = set([x['categoria'] for x in t_list])
            print(f"   [Puesto/Rol]: [{rk}] ({len(t_list)} tareas)")
            for cat in sorted(list(cats)):
                count_cat = sum(1 for x in t_list if x['categoria'] == cat)
                print(f"      - {cat} ({count_cat} tareas)")
                
    print(f"\n>> RESUMEN {hotel}: {len(puestos_all)} puestos distintos, {hotel_tasks} tareas en total.")
