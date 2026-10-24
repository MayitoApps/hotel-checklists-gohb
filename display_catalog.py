import json, sys

sys.stdout.reconfigure(encoding='utf-8')

with open('catalog_positions.json', 'r', encoding='utf-8') as f:
    catalog = json.load(f)

for hotel, puestos in catalog.items():
    print(f"\n=======================================================")
    print(f"HOTEL: {hotel}")
    print(f"=======================================================")
    total_tasks = 0
    for pname, pdata in puestos.items():
        cnt = len(pdata['tasks'])
        total_tasks += cnt
        cats = sorted(list(set([t['categoria'] for t in pdata['tasks']])))
        print(f"  • [{pdata['area']}] {pname} ({cnt} tareas)")
        for c in cats:
            t_in_c = [t['tarea'] for t in pdata['tasks'] if t['categoria'] == c]
            print(f"      - {c}: {len(t_in_c)} tareas")
    print(f"\n  >> Total Puestos Únicos: {len(puestos)} | Total Tareas: {total_tasks}")
