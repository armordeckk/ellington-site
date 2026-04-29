import type { Property, Location } from "./types";

// High-quality Unsplash images — placeholder until Apimo media is wired in.
const img = (id: string, alt: string) => ({
  url: `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`,
  alt,
});

export const properties: Property[] = [
  {
    id: "ell-001",
    reference: "ELL-MC-001",
    category: "sale",
    type: "penthouse",
    status: "available",
    title: "Penthouse Contemporain",
    subtitle: "Vue mer panoramique sur le port",
    description:
      "Magnifique penthouse contemporain au cœur de Monaco avec baies vitrées du sol au plafond offrant une vue imprenable sur la Méditerranée. Cette résidence d'exception allie luxe moderne et design sophistiqué, dans l'un des emplacements les plus prestigieux du monde. Terrasse de 80m², piscine privative, ascenseur direct.",
    city: "Monaco",
    region: "Monaco",
    country: "MC",
    coordinates: { lat: 43.7384, lng: 7.4246 },
    price: 8500000,
    currency: "EUR",
    area: 280,
    rooms: 6,
    bedrooms: 4,
    bathrooms: 3,
    yearBuilt: 2022,
    features: [
      "Vue mer panoramique",
      "Terrasse 80m²",
      "Piscine privative",
      "Ascenseur direct",
      "Parking 3 voitures",
      "Cave à vin",
      "Domotique",
      "Concierge 24/7",
    ],
    pictures: [
      img("photo-1600596542815-ffad4c1539a9", "Salon principal"),
      img("photo-1613490493576-7fde63acd811", "Vue extérieure"),
      img("photo-1600585154340-be6161a56a0c", "Cuisine ouverte"),
      img("photo-1600210492486-724fe5c67fb0", "Suite parentale"),
      img("photo-1600607687939-ce8a6c25118c", "Salle de bain"),
      img("photo-1600566753190-17f0baa2a6c3", "Terrasse"),
    ],
    isFeatured: true,
    isExclusive: true,
  },
  {
    id: "ell-002",
    reference: "ELL-GR-002",
    category: "sale",
    type: "villa",
    status: "available",
    title: "Villa au Bord de l'Eau",
    subtitle: "Pieds dans l'eau, vue Golfe de Saint-Tropez",
    description:
      "Villa contemporaine pieds dans l'eau à Grimaud, face au Golfe de Saint-Tropez. Architecture épurée, matériaux nobles, vue mer à 180°. Plage privée, ponton, piscine à débordement. Un cadre exceptionnel sur l'une des plus belles baies de la Côte d'Azur.",
    city: "Grimaud",
    region: "Côte d'Azur",
    country: "FR",
    coordinates: { lat: 43.2752, lng: 6.5219 },
    price: 12900000,
    currency: "EUR",
    area: 450,
    landArea: 2200,
    rooms: 9,
    bedrooms: 6,
    bathrooms: 5,
    yearBuilt: 2018,
    features: [
      "Accès direct mer",
      "Plage privée",
      "Piscine à débordement",
      "Pool house",
      "Domotique complète",
      "Cinéma privé",
      "Cave à vin",
      "Ponton",
    ],
    pictures: [
      img("photo-1613553497126-a44624272024", "Façade côté mer"),
      img("photo-1582268611958-ebfd161ef9cf", "Piscine"),
      img("photo-1600585154526-990dced4db0d", "Salon"),
      img("photo-1564013799919-ab600027ffc6", "Vue aérienne"),
      img("photo-1600566753086-00f18fb6b3ea", "Suite"),
    ],
    isFeatured: true,
    isExclusive: true,
  },
  {
    id: "ell-003",
    reference: "ELL-ST-003",
    category: "sale",
    type: "estate",
    status: "available",
    title: "Domaine Historique",
    subtitle: "Bastide provençale rénovée — 8 hectares",
    description:
      "Bastide du XVIIIᵉ siècle entièrement rénovée sur un domaine de 8 hectares à Saint-Tropez. Oliveraies, vignes, oranges, jardins à la française. La rénovation préserve l'authenticité provençale tout en intégrant les standards contemporains les plus exigeants.",
    city: "Saint-Tropez",
    region: "Côte d'Azur",
    country: "FR",
    coordinates: { lat: 43.2727, lng: 6.6407 },
    price: 15200000,
    currency: "EUR",
    area: 680,
    landArea: 80000,
    rooms: 12,
    bedrooms: 8,
    bathrooms: 7,
    yearBuilt: 1780,
    features: [
      "Bastide XVIIIᵉ",
      "Domaine 8 hectares",
      "Oliveraie 200 oliviers",
      "Piscine à débordement",
      "Maison d'amis",
      "Court de tennis",
      "Hélistation",
      "Vignes",
    ],
    pictures: [
      img("photo-1600585154340-be6161a56a0c", "Vue d'ensemble"),
      img("photo-1568605114967-8130f3a36994", "Façade"),
      img("photo-1600596542815-ffad4c1539a9", "Salon"),
      img("photo-1600210491892-03d54c0aaf87", "Jardins"),
    ],
    isFeatured: true,
    isExclusive: true,
  },
  {
    id: "ell-004",
    reference: "ELL-CN-004",
    category: "sale",
    type: "villa",
    status: "available",
    title: "Villa Belle Époque",
    subtitle: "Sur les hauteurs de la Californie",
    description:
      "Villa Belle Époque entièrement restaurée sur les hauteurs de la Californie à Cannes. Vue panoramique sur la baie et les îles de Lérins. Parc arboré de 5000m², piscine, dépendances.",
    city: "Cannes",
    region: "Côte d'Azur",
    country: "FR",
    coordinates: { lat: 43.5528, lng: 7.0174 },
    price: 9800000,
    currency: "EUR",
    area: 520,
    landArea: 5000,
    rooms: 10,
    bedrooms: 7,
    bathrooms: 6,
    yearBuilt: 1905,
    features: [
      "Style Belle Époque",
      "Vue baie de Cannes",
      "Parc arboré",
      "Piscine chauffée",
      "Maison de gardien",
      "Cave",
    ],
    pictures: [
      img("photo-1512917774080-9991f1c4c750", "Façade"),
      img("photo-1600566753104-685f4f24cb4d", "Salon"),
      img("photo-1600607687920-4e2a09cf159d", "Chambre"),
      img("photo-1600566752355-35792bedcfea", "Piscine"),
    ],
    isFeatured: true,
  },
  {
    id: "ell-005",
    reference: "ELL-NI-005",
    category: "sale",
    type: "apartment",
    status: "available",
    title: "Appartement Promenade des Anglais",
    subtitle: "Front de mer, dernier étage",
    description:
      "Appartement traversant au dernier étage d'un immeuble haussmannien sur la Promenade des Anglais. Terrasse vue mer, prestations haut de gamme, place de parking en sous-sol.",
    city: "Nice",
    region: "Côte d'Azur",
    country: "FR",
    coordinates: { lat: 43.6952, lng: 7.2655 },
    price: 3450000,
    currency: "EUR",
    area: 165,
    rooms: 5,
    bedrooms: 3,
    bathrooms: 2,
    yearBuilt: 1895,
    features: [
      "Vue mer frontale",
      "Terrasse 25m²",
      "Dernier étage",
      "Climatisation",
      "Parking",
    ],
    pictures: [
      img("photo-1600566753190-17f0baa2a6c3", "Salon"),
      img("photo-1600585154526-990dced4db0d", "Cuisine"),
      img("photo-1600210492486-724fe5c67fb0", "Chambre"),
    ],
  },
  {
    id: "ell-006",
    reference: "ELL-SM-006",
    category: "sale",
    type: "villa",
    status: "available",
    title: "Villa Contemporaine d'Architecte",
    subtitle: "Sainte-Maxime, vue baie de Saint-Tropez",
    description:
      "Villa d'architecte contemporaine à Sainte-Maxime avec vue panoramique sur la baie de Saint-Tropez. Lignes pures, matériaux nobles, intégration parfaite dans le paysage méditerranéen.",
    city: "Sainte-Maxime",
    region: "Côte d'Azur",
    country: "FR",
    coordinates: { lat: 43.3094, lng: 6.6386 },
    price: 11500000,
    currency: "EUR",
    area: 380,
    landArea: 1800,
    rooms: 8,
    bedrooms: 5,
    bathrooms: 5,
    yearBuilt: 2020,
    features: [
      "Architecture contemporaine",
      "Vue baie de Saint-Tropez",
      "Piscine miroir",
      "Spa",
      "Salle de sport",
      "Garage 4 voitures",
    ],
    pictures: [
      img("photo-1613490493576-7fde63acd811", "Vue extérieure"),
      img("photo-1600596542815-ffad4c1539a9", "Salon"),
      img("photo-1600566753086-00f18fb6b3ea", "Chambre"),
      img("photo-1600607687939-ce8a6c25118c", "Salle de bain"),
    ],
    isFeatured: true,
  },
  {
    id: "ell-007",
    reference: "ELL-MO-007",
    category: "sale",
    type: "apartment",
    status: "available",
    title: "Appartement Carré d'Or",
    subtitle: "Cœur de Monaco, vue mer",
    description:
      "Appartement de standing dans le Carré d'Or, à deux pas du Casino. Rénovation haut de gamme, vue mer dégagée, services de l'immeuble (concierge, piscine, salle de sport).",
    city: "Monaco",
    region: "Monaco",
    country: "MC",
    coordinates: { lat: 43.7384, lng: 7.4246 },
    price: 6750000,
    currency: "EUR",
    area: 145,
    rooms: 4,
    bedrooms: 3,
    bathrooms: 2,
    yearBuilt: 2015,
    features: [
      "Carré d'Or",
      "Vue mer",
      "Concierge",
      "Piscine commune",
      "Salle de sport",
      "Cave",
    ],
    pictures: [
      img("photo-1600585154340-be6161a56a0c", "Salon"),
      img("photo-1600210492486-724fe5c67fb0", "Suite"),
      img("photo-1600566753190-17f0baa2a6c3", "Cuisine"),
    ],
  },
  {
    id: "ell-008",
    reference: "ELL-CF-008",
    category: "sale",
    type: "villa",
    status: "available",
    title: "Villa du Cap-Ferrat",
    subtitle: "Pointe Saint-Hospice",
    description:
      "Villa d'exception sur la pointe Saint-Hospice, l'une des adresses les plus confidentielles de la Côte d'Azur. Accès mer privé, parc paysager, prestations sur-mesure.",
    city: "Saint-Jean-Cap-Ferrat",
    region: "Côte d'Azur",
    country: "FR",
    coordinates: { lat: 43.6878, lng: 7.336 },
    price: 24500000,
    currency: "EUR",
    area: 720,
    landArea: 4800,
    rooms: 14,
    bedrooms: 9,
    bathrooms: 8,
    yearBuilt: 1930,
    features: [
      "Pointe Saint-Hospice",
      "Accès mer privé",
      "Parc 4800m²",
      "Piscine eau de mer",
      "Maison d'amis",
      "Hélistation",
    ],
    pictures: [
      img("photo-1564013799919-ab600027ffc6", "Vue aérienne"),
      img("photo-1600585154340-be6161a56a0c", "Façade"),
      img("photo-1582268611958-ebfd161ef9cf", "Piscine"),
      img("photo-1600596542815-ffad4c1539a9", "Salon"),
    ],
    isFeatured: true,
    isExclusive: true,
  },
];

export const locations: Location[] = [
  {
    slug: "monaco",
    name: "Monaco",
    description:
      "Principauté souveraine, Monaco offre un cadre de vie unique au monde. Stabilité, sécurité, fiscalité avantageuse et art de vivre méditerranéen attirent une clientèle internationale exigeante.",
    descriptionEn:
      "A sovereign principality, Monaco offers a unique way of life. Stability, security, favourable taxation and Mediterranean elegance attract a discerning international clientele.",
    image: "/locations/monaco/monaco.jpg",
  },
  {
    slug: "saint-tropez",
    name: "Saint-Tropez",
    description:
      "De la Place des Lices aux plages de Pampelonne, Saint-Tropez incarne la quintessence de la Riviera française. Domaines viticoles, bastides provençales et villas contemporaines composent un patrimoine d'exception.",
    descriptionEn:
      "From Place des Lices to the beaches of Pampelonne, Saint-Tropez embodies the very essence of the French Riviera. Wine estates, Provençal bastides and contemporary villas form an exceptional heritage.",
    image: "/locations/saint-tropez/sttropez.jpg",
  },
  {
    slug: "grimaud",
    name: "Grimaud",
    description:
      "Au cœur du Golfe de Saint-Tropez, Grimaud séduit par son village médiéval perché, son port de plaisance prisé (Port Grimaud) et ses villas en bord de mer. Une adresse confidentielle et préservée de la Côte d'Azur.",
    descriptionEn:
      "At the heart of the Gulf of Saint-Tropez, Grimaud charms with its perched medieval village, its sought-after marina (Port Grimaud) and its waterfront villas — a confidential, preserved address on the French Riviera.",
    image: "/locations/grimaud/grimaud.jpg",
  },
  {
    slug: "cap-ferrat",
    name: "Saint-Jean-Cap-Ferrat",
    description:
      "Surnommée la presqu'île des milliardaires, Saint-Jean-Cap-Ferrat conjugue rareté foncière et adresses prestigieuses. Un écrin végétal entre Nice et Monaco.",
    descriptionEn:
      "Known as the billionaires' peninsula, Saint-Jean-Cap-Ferrat combines land scarcity and the most prestigious addresses — a verdant haven between Nice and Monaco.",
    image: "/locations/cap-ferrat/capferrat.jpg",
  },
  {
    slug: "cannes",
    name: "Cannes",
    description:
      "Capitale du cinéma et de l'art de vivre, Cannes séduit par sa Croisette mythique, ses palais Belle Époque et ses hauteurs résidentielles offrant vue sur la baie.",
    descriptionEn:
      "Capital of cinema and the art of living, Cannes captivates with its iconic Croisette, its Belle Époque palaces and its residential heights overlooking the bay.",
    image: "/locations/cannes/cannes.jpg",
  },
  {
    slug: "sainte-maxime",
    name: "Sainte-Maxime",
    description:
      "Face à Saint-Tropez sur le Golfe, Sainte-Maxime allie élégance balnéaire et authenticité provençale. Plages de sable fin, villas contemporaines et propriétés historiques en font une destination privilégiée.",
    descriptionEn:
      "Facing Saint-Tropez across the Gulf, Sainte-Maxime combines seaside elegance with Provençal authenticity. Fine sandy beaches, contemporary villas and historic properties make it a privileged destination.",
    image: "/locations/sainte-maxime/stemaxime.jpg",
  },
];

// Helpers — these will be replaced by Apimo API calls in src/lib/apimo.ts later.
export function getProperties(filters?: {
  category?: "sale" | "rent";
  city?: string;
  type?: string;
  minPrice?: number;
  maxPrice?: number;
}): Property[] {
  return properties.filter((p) => {
    if (filters?.category && p.category !== filters.category) return false;
    if (filters?.city && p.city !== filters.city) return false;
    if (filters?.type && p.type !== filters.type) return false;
    if (filters?.minPrice && p.price < filters.minPrice) return false;
    if (filters?.maxPrice && p.price > filters.maxPrice) return false;
    return true;
  });
}

export function getProperty(id: string): Property | undefined {
  return properties.find((p) => p.id === id);
}

export function getFeaturedProperties(): Property[] {
  return properties.filter((p) => p.isFeatured);
}

export function getCities(): string[] {
  return [...new Set(properties.map((p) => p.city))].sort();
}

export function formatPrice(price: number, currency = "EUR"): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatPriceShort(price: number): string {
  if (price >= 1_000_000) {
    const m = price / 1_000_000;
    return `€${m % 1 === 0 ? m.toFixed(0) : m.toFixed(1)}M`;
  }
  if (price >= 1_000) return `€${Math.round(price / 1_000)}K`;
  return `€${price}`;
}

export function propertyTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    villa: "Villa",
    penthouse: "Penthouse",
    apartment: "Appartement",
    estate: "Domaine",
    chalet: "Chalet",
    townhouse: "Maison de ville",
    land: "Terrain",
  };
  return labels[type] ?? type;
}
