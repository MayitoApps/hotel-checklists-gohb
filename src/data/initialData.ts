// CATALOG DATA CONFIGURATION & EMPTY INITIAL STATE AWAITING NEW CHECKLISTS
export interface HotelConfig {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  logo: string;
  tagline: string;
}

export interface TaskTemplate {
  id: string;
  categoria: string;
  tarea: string;
}

export interface PuestoTemplate {
  id: string;
  nombre: string;
  area: string;
  hotelSlug: string;
  tasks: TaskTemplate[];
}

export const HOTELS: HotelConfig[] = [
  {
    "id": "ajusco",
    "slug": "ajusco",
    "name": "Orgánico Hotel Boutique Ajusco",
    "shortName": "Ajusco",
    "logo": "/logos/organico-ajusco.png",
    "tagline": "Boutique Hotel & Mountain Sanctuary"
  },
  {
    "id": "valle-de-bravo",
    "slug": "valle-de-bravo",
    "name": "Orgánico Hotel Boutique Valle de Bravo",
    "shortName": "Valle de Bravo",
    "logo": "/logos/organico-valle-de-bravo.png",
    "tagline": "Luxury, Nature & Serenity"
  },
  {
    "id": "tepoztlan",
    "slug": "tepoztlan",
    "name": "Orgánico Hotel Boutique Tepoztlán",
    "shortName": "Tepoztlán",
    "logo": "/logos/organico-tepoztlan.png",
    "tagline": "Mystic Retreat & Holistic Experience"
  },
  {
    "id": "quinta-soledad",
    "slug": "quinta-soledad",
    "name": "Centro Cultural Quinta Soledad",
    "shortName": "Quinta Soledad",
    "logo": "/logos/quinta-soledad.png",
    "tagline": "Arte, Cultura & Hospitalidad Histórica"
  },
  {
    "id": "frontera-49",
    "slug": "frontera-49",
    "name": "Frontera 49 Roma Norte",
    "shortName": "Frontera 49",
    "logo": "/logos/frontera-49.png",
    "tagline": "Cultura, Diseño & Estilo Roma Norte"
  }
];

export const PUESTOS_BY_HOTEL: Record<string, PuestoTemplate[]> = {
  "ajusco": [],
  "valle-de-bravo": [],
  "tepoztlan": [],
  "quinta-soledad": [],
  "frontera-49": []
};

export interface Employee {
  id: string;
  numeroEmpleado: string;
  nombre: string;
  hotelSlug: string;
  puestoId: string;
  puestoNombre: string;
  area: string;
}

export const INITIAL_EMPLOYEES: Employee[] = [];