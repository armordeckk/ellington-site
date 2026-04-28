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
  description: string;
  image: string;
  propertyCount?: number;
}
