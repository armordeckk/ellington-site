export type PropertyCategory = "sale" | "rent";
export type PropertyType =
  | "villa"
  | "penthouse"
  | "apartment"
  | "estate"
  | "chalet"
  | "townhouse"
  | "land";

export type PropertyStatus = "available" | "under_offer" | "sold";

// Shape modeled to be near-compatible with Apimo's REST schema so the swap
// from mock data to live API requires only a thin adapter.
export interface Property {
  id: string;
  reference: string;
  category: PropertyCategory;
  type: PropertyType;
  status: PropertyStatus;

  title: string;
  subtitle?: string;
  description: string;

  city: string;
  region: string; // e.g. "Côte d'Azur"
  district?: string;
  country: string;
  coordinates?: { lat: number; lng: number };

  price: number;
  currency: "EUR";
  pricePeriod?: "week" | "month";

  area: number; // m²
  landArea?: number; // m²
  rooms: number;
  bedrooms: number;
  bathrooms: number;
  yearBuilt?: number;

  features: string[];
  pictures: { url: string; alt?: string }[];

  isFeatured?: boolean;
  isExclusive?: boolean;
}

export interface Location {
  slug: string;
  name: string;
  nameEn?: string;
  /** Short one-liner shown under the title on the detail page */
  tagline?: string;
  taglineEn?: string;
  /** Lead paragraph (already used on the index list) */
  description: string;
  descriptionEn?: string;
  /** Optional secondary paragraph for the detail page (2nd block of editorial copy) */
  longDescription?: string;
  longDescriptionEn?: string;
  /** Bullet points highlighting the city's selling points */
  highlights?: string[];
  highlightsEn?: string[];
  /** Key facts displayed as a stat grid (label/value pairs) */
  keyFacts?: { label: string; labelEn?: string; value: string }[];
  /** SEO meta description override (defaults to description if not set) */
  metaDescription?: string;
  metaDescriptionEn?: string;
  image: string;
  coordinates?: { lat: number; lng: number };
  propertyCount?: number;
}
