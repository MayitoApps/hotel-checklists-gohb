import json

with open('full_analysis.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for hotel, sheets in data.items():
    print(f'=== {hotel} ===')
    total_hotel_tasks = 0
    for sname, sinfo in sheets.items():
        print(f'  Sheet: {sname}')
        print(f'    Pre-headers: {sinfo["pre_headers"]}')
        print(f'    Puestos: {sinfo["puestos_found"]}')
        print(f'    Categories: {sinfo["categories_found"]}')
        print(f'    Tasks count: {sinfo["total_tasks"]}')
        total_hotel_tasks += sinfo["total_tasks"]
    print(f'  TOTAL TASKS FOR {hotel}: {total_hotel_tasks}\n')
