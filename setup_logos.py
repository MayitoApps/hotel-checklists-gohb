import os, shutil

public_dir = r'c:\Users\maval\OneDrive\Documentos\Check-lsit app\public'
logos_dir = os.path.join(public_dir, 'logos')
os.makedirs(logos_dir, exist_ok=True)

logos = [
    'organico-ajusco.png',
    'organico-valle-de-bravo.png',
    'organico-tepoztlan.png',
    'organico-veracruz.png',
    'quinta-soledad.png',
    'frontera-49.png',
    'otam-negro.png'
]

base_path = r'c:\Users\maval\OneDrive\Documentos\Check-lsit app'

for logo in logos:
    src = os.path.join(base_path, logo)
    dst = os.path.join(logos_dir, logo)
    if os.path.exists(src):
        shutil.copy2(src, dst)
        print(f"Copied {logo} to public/logos/")
