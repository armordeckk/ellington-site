import type { Property, Location } from "./types";

// High-quality Unsplash images — placeholder until Apimo media is wired in.
const img = (id: string, alt: string) => ({
  url: `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`,
  alt,
});

export const properties: Property[] = [
  {
    id: "ell-001",
    reference: "ELL-ST-001",
    category: "sale",
    type: "penthouse",
    status: "available",
    title: "Penthouse Cœur du Village",
    subtitle: "Vue Place des Lices et Golfe",
    description:
      "Penthouse contemporain au cœur de Saint-Tropez, à deux pas de la Place des Lices et du port. Baies vitrées du sol au plafond, terrasse panoramique de 80m² avec vue sur le Golfe et les toits du village. Ascenseur privatif, prestations haut de gamme, parking sécurisé.",
    city: "Saint-Tropez",
    region: "Côte d'Azur",
    country: "FR",
    coordinates: { lat: 43.2727, lng: 6.6407 },
    price: 8500000,
    currency: "EUR",
    area: 280,
    rooms: 6,
    bedrooms: 4,
    bathrooms: 3,
    yearBuilt: 2022,
    features: [
      "Vue Place des Lices",
      "Vue Golfe",
      "Terrasse 80m²",
      "Ascenseur privatif",
      "Parking sécurisé",
      "Cave à vin",
      "Domotique",
      "Concierge",
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
    reference: "ELL-GA-004",
    category: "sale",
    type: "villa",
    status: "available",
    title: "Villa Panoramique",
    subtitle: "Vue 360° sur le Golfe et les Maures",
    description:
      "Villa d'exception sur les hauteurs de Gassin, classé parmi les Plus Beaux Villages de France. Vue à 360° sur le Golfe de Saint-Tropez, le massif des Maures et la Méditerranée. Architecture contemporaine, piscine à débordement, parc paysager arboré, pool house.",
    city: "Gassin",
    region: "Côte d'Azur",
    country: "FR",
    coordinates: { lat: 43.235, lng: 6.586 },
    price: 9800000,
    currency: "EUR",
    area: 520,
    landArea: 5000,
    rooms: 10,
    bedrooms: 7,
    bathrooms: 6,
    yearBuilt: 2016,
    features: [
      "Vue 360°",
      "Vue Golfe de Saint-Tropez",
      "Piscine à débordement",
      "Parc paysager 5000m²",
      "Pool house",
      "Maison de gardien",
      "Cave à vin",
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
    reference: "ELL-PG-005",
    category: "sale",
    type: "townhouse",
    status: "available",
    title: "Maison sur les Canaux",
    subtitle: "Anneau d'amarrage privé à Port Grimaud",
    description:
      "Maison de pêcheur entièrement rénovée à Port Grimaud, la Venise provençale conçue par François Spoerry. Anneau d'amarrage privé devant la maison, terrasse au bord de l'eau, façade aux tons pastel typiques. Prestations haut de gamme, climatisation, place de parking.",
    city: "Port Grimaud",
    region: "Côte d'Azur",
    country: "FR",
    coordinates: { lat: 43.279, lng: 6.579 },
    price: 3450000,
    currency: "EUR",
    area: 165,
    rooms: 5,
    bedrooms: 3,
    bathrooms: 2,
    yearBuilt: 2021,
    features: [
      "Anneau d'amarrage privé",
      "Terrasse au bord de l'eau",
      "Façade pastel typique",
      "Climatisation",
      "Parking",
      "Rénovation complète",
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
    reference: "ELL-RM-007",
    category: "sale",
    type: "estate",
    status: "available",
    title: "Bastide de Pampelonne",
    subtitle: "À deux pas des plages mythiques",
    description:
      "Bastide provençale entièrement rénovée à Ramatuelle, à quelques minutes des plages de Pampelonne. Pinède centenaire, piscine chauffée, dépendances, charme authentique provençal. Une adresse confidentielle au cœur de la presqu'île.",
    city: "Ramatuelle",
    region: "Côte d'Azur",
    country: "FR",
    coordinates: { lat: 43.215, lng: 6.6126 },
    price: 6750000,
    currency: "EUR",
    area: 145,
    landArea: 3500,
    rooms: 4,
    bedrooms: 3,
    bathrooms: 2,
    yearBuilt: 1880,
    features: [
      "Bastide provençale",
      "Proche Pampelonne",
      "Pinède centenaire",
      "Piscine chauffée",
      "Dépendances",
      "Cave voûtée",
    ],
    pictures: [
      img("photo-1600585154340-be6161a56a0c", "Salon"),
      img("photo-1600210492486-724fe5c67fb0", "Suite"),
      img("photo-1600566753190-17f0baa2a6c3", "Cuisine"),
    ],
  },
  {
    id: "ell-008",
    reference: "ELL-RM-008",
    category: "sale",
    type: "estate",
    status: "available",
    title: "Domaine Viticole",
    subtitle: "Vignes en production, oliveraie centenaire",
    description:
      "Domaine viticole d'exception à Ramatuelle, entre Saint-Tropez et Pampelonne. Vignes en AOP Côtes-de-Provence, oliveraie centenaire, mas principal du XIXᵉ rénové, maison d'amis, piscine eau de mer. Cadre préservé sur près de 5 hectares.",
    city: "Ramatuelle",
    region: "Côte d'Azur",
    country: "FR",
    coordinates: { lat: 43.215, lng: 6.6126 },
    price: 24500000,
    currency: "EUR",
    area: 720,
    landArea: 48000,
    rooms: 14,
    bedrooms: 9,
    bathrooms: 8,
    yearBuilt: 1865,
    features: [
      "Vignes en production",
      "Oliveraie centenaire",
      "Mas du XIXᵉ rénové",
      "Maison d'amis",
      "Piscine eau de mer",
      "Cave de vinification",
      "Domaine 4,8 hectares",
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
      "Au cœur du Golfe de Saint-Tropez, Grimaud séduit par son village médiéval perché, ses ruelles pavées et ses villas en bord de mer. Une adresse confidentielle et préservée de la Côte d'Azur.",
    descriptionEn:
      "At the heart of the Gulf of Saint-Tropez, Grimaud charms with its perched medieval village, its cobbled lanes and its waterfront villas — a confidential, preserved address on the French Riviera.",
    image: "/locations/grimaud/grimaud1.jpg",
  },
  {
    slug: "port-grimaud",
    name: "Port Grimaud",
    description:
      "Conçue dans les années 1960 par l'architecte François Spoerry, Port Grimaud est une cité lacustre unique en France. Maisons aux façades pastel, canaux navigables, anneaux d'amarrage privés : la Venise provençale conjugue charme méditerranéen et raffinement contemporain.",
    descriptionEn:
      "Designed in the 1960s by architect François Spoerry, Port Grimaud is a unique lakeside town. Pastel façades, navigable canals and private moorings — Provence's Venice blends Mediterranean charm with contemporary refinement.",
    image: "/locations/portgrimaud.jpg",
  },
  {
    slug: "ramatuelle",
    name: "Ramatuelle",
    description:
      "Village perché entre vignobles et mer, Ramatuelle abrite la mythique plage de Pampelonne. Bastides en pierre, ruelles ombragées et mas d'exception composent un patrimoine d'une rare authenticité, à quelques minutes de Saint-Tropez.",
    descriptionEn:
      "A hilltop village set between vineyards and sea, Ramatuelle is home to the legendary Pampelonne beach. Stone bastides, shaded lanes and exceptional country estates form a rare authentic heritage, just minutes from Saint-Tropez.",
    image: "/locations/ramatuelle.jpg",
  },
  {
    slug: "gassin",
    name: "Gassin",
    description:
      "Classé parmi les Plus Beaux Villages de France, Gassin couronne une colline avec vue à 360° sur le Golfe de Saint-Tropez, les Maures et la Méditerranée. Villas de prestige et propriétés viticoles s'épanouissent dans un cadre préservé.",
    descriptionEn:
      "Listed among the Most Beautiful Villages of France, Gassin crowns a hilltop with 360° views over the Gulf of Saint-Tropez, the Maures range and the Mediterranean. Prestigious villas and vineyard estates thrive in a preserved setting.",
    image: "/locations/gassin.jpg",
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
