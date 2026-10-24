import json, sys

with open('catalog_positions.json', 'r', encoding='utf-8') as f:
    catalog = json.load(f)

# Let's fix the Frontera 49 'Capitán' in Cocina to be 'Chef'
if 'Frontera 49 Roma Norte' in catalog:
    f49 = catalog['Frontera 49 Roma Norte']
    if 'Capitán' in f49:
        # Separate the 4 Chef tasks from Capitán
        cap_tasks = [t for t in f49['Capitán']['tasks'] if t['categoria'] != 'Producción y Calidad']
        chef_tasks = [t for t in f49['Capitán']['tasks'] if t['categoria'] == 'Producción y Calidad']
        f49['Capitán']['tasks'] = cap_tasks
        if 'Chef' not in f49 and chef_tasks:
            f49['Chef'] = {
                'area': 'Cocina',
                'puesto_col_b': 'Chef',
                'tasks': chef_tasks
            }

with open('catalog_positions_refined.json', 'w', encoding='utf-8') as f:
    json.dump(catalog, f, ensure_ascii=False, indent=2)

print("Exported catalog_positions_refined.json successfully")
