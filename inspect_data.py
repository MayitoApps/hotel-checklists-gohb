import json

with open('parsed_sheets.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for fname, sheets in data.items():
    print(f'=== FILE: {fname} ===')
    for sname, rows in sheets.items():
        print(f'  Sheet: {sname} (Total rows: {len(rows)})')
        for r in rows[:5]:
            print(f'    Row {r["row_idx"]}: {r["data"][:5]}')
    print()
