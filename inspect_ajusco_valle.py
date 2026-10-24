import json, sys

sys.stdout.reconfigure(encoding='utf-8')
with open('full_hierarchy.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for hotel in ['Orgánico Hotel Boutique Ajusco', 'Orgánico Hotel Boutique Valle de Bravo']:
    sheets = data[hotel]
    print(f'=== {hotel} ===')
    for sname, tasks in sheets.items():
        print(f'  Sheet: {sname} ({len(tasks)} tasks)')
        sub_roles = {}
        for t in tasks:
            rk = f"{t['seccion_banner']} -> {t['puesto']}" if t['seccion_banner'] != t['puesto'] else t['puesto']
            sub_roles[rk] = sub_roles.get(rk, 0) + 1
        for rk, cnt in sub_roles.items():
            print(f'    * {rk}: {cnt} tasks')
    print()
