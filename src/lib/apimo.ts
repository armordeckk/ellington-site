// Apimo REST API adapter — server-only.
//
// Docs: https://apimo.pro/api
// Auth : Basic auth provider:token (base64)
//
// Required env vars (set in .env.local for dev, Vercel dashboard for prod) :
//   APIMO_PROVIDER   — Apimo provider username
//   APIMO_TOKEN      — Apimo API token
//   APIMO_AGENCY     — Numeric agency id from Apimo back-office
//
// Behaviour : if any env var is missing, the helpers below return null and the
// data layer falls back to the mock properties. This lets the app boot in dev
// without credentials and switch to live data the moment env vars are set on
// Vercel.

import type {
  Property,
  PropertyCategory,
  PropertyType,
  PropertyStatus,
} from "./types";

const APIMO_BASE = "https://api.apimo.pro";

interface ApimoConfig {
  provider: string;
  token: string;
  agency: string;
}

function getConfig(): ApimoConfig | null {
  const provider = process.env.APIMO_PROVIDER;
  const token = process.env.APIMO_TOKEN;
  const agency = process.env.APIMO_AGENCY;
  if (!provider || !token || !agency) return null;
  return { provider, token, agency };
}

export function isApimoConfigured(): boolean {
  return getConfig() !== null;
}

async function apimoFetch<T>(path: string): Promise<T | null> {
  const cfg = getConfig();
  if (!cfg) return null;

  const auth = Buffer.from(`${cfg.provider}:${cfg.token}`).toString("base64");
  try {
    const res = await fetch(`${APIMO_BASE}${path}`, {
      headers: {
        Authorization: `Basic ${auth}`,
        Accept: "application/json",
      },
      // ISR — re-fetch from Apimo every 10 min
      next: { revalidate: 600 },
    });
    if (!res.ok) {
      console.error(`[apimo] ${res.status} on ${path}`);
      return null;
    }
    return (await res.json()) as T;
  } catch (e) {
    console.error("[apimo] fetch error", e);
    return null;
  }
}

// --- Apimo response types (only the fields we use; everything else is loose) ---

interface ApimoListResponse {
  total_items?: number;
  processed_items?: number;
  timestamp?: string;
  properties?: ApimoProperty[];
}

interface ApimoMultilingual {
  language?: string;
  title?: string;
  comment?: string;
  comment_full?: string;
}

interface ApimoPicture {
  id?: number;
  rank?: number;
  url?: string;
  width_max?: string;
  comments?: ApimoMultilingual[];
}

interface ApimoCity {
  id?: number;
  name?: string;
  country?: string;
  zipcode?: string;
  latitude?: number;
  longitude?: number;
  district?: { name?: string };
}

interface ApimoArea {
  unit?: number;
  value?: number;
  total?: number;
  weighted?: number;
}

interface ApimoPrice {
  value?: number;
  currency?: string;
  hide?: boolean;
  period?: number;
}

interface ApimoNamed {
  id?: number;
  name?: string;
}

interface ApimoArea2 {
  type?: number;
  number?: number;
}

interface ApimoProperty {
  id?: number;
  reference?: string;
  category?: ApimoNamed;
  type?: ApimoNamed | number;
  subtype?: ApimoNamed | number;
  step?: ApimoNamed | number;
  city?: ApimoCity;
  area?: ApimoArea;
  // Apimo's `areas` array — list of room/zone counts by numeric type code.
  // No top-level bathrooms/shower_rooms field exists for this agency, so we
  // derive bathroom counts from this array.
  areas?: ApimoArea2[];
  surface?: number;
  rooms?: number;
  bedrooms?: number;
  bathrooms?: number;
  shower_rooms?: number;
  water_rooms?: number;
  toilets?: number;
  price?: ApimoPrice;
  comments?: ApimoMultilingual[];
  pictures?: ApimoPicture[];
  services?: ApimoNamed[];
  year_built?: number;
  year?: number;
  latitude?: number;
  longitude?: number;
  status?: ApimoNamed | number;
  // Apimo sometimes nests location info differently
  district?: ApimoNamed;
  region?: ApimoNamed;
}

// --- Mapping helpers ---

// Apimo type ids → our PropertyType
const APIMO_TYPE_MAP: Record<number, PropertyType> = {
  1: "apartment",
  2: "villa", // "house" in Apimo, mapped to villa for the luxury vocabulary
  3: "townhouse",
  4: "land",
  5: "estate",
  6: "chalet",
  7: "penthouse",
};

function mapType(t: ApimoNamed | number | undefined): PropertyType {
  if (t == null) return "villa";
  if (typeof t === "number") return APIMO_TYPE_MAP[t] ?? "villa";
  if (typeof t === "object") {
    if (typeof t.id === "number") return APIMO_TYPE_MAP[t.id] ?? "villa";
    const name = (t.name ?? "").toLowerCase();
    if (name.includes("penthouse")) return "penthouse";
    if (name.includes("chalet")) return "chalet";
    if (name.includes("land") || name.includes("terrain")) return "land";
    if (name.includes("apart")) return "apartment";
    if (name.includes("estate") || name.includes("domaine")) return "estate";
    if (name.includes("townhouse") || name.includes("maison de ville"))
      return "townhouse";
  }
  return "villa";
}

function mapCategory(
  c: ApimoNamed | undefined,
  price?: ApimoPrice,
): PropertyCategory {
  // Strongest signal first: a positive `price.period` means a recurring price,
  // which is exclusive to rentals (Apimo never sets it on sale listings).
  // Some agencies — including this one — let rentals leak into the
  // ?category=1 (sale) feed, so we cannot trust the `category` field alone.
  if (price?.period && price.period > 0) return "rent";
  if (!c) return "sale";
  if (typeof c.id === "number") return c.id === 2 ? "rent" : "sale";
  const name = (c.name ?? "").toLowerCase();
  return name.includes("rent") || name.includes("location") ? "rent" : "sale";
}

// Apimo `price.period` codes — number of days the price covers.
// 7 = week, 30 = month. Anything else → undefined (we omit the suffix).
function mapPricePeriod(period?: number): "week" | "month" | undefined {
  if (!period) return undefined;
  if (period <= 7) return "week";
  return "month";
}

function mapStatus(s: ApimoNamed | number | undefined): PropertyStatus {
  if (s == null) return "available";
  if (typeof s === "number") {
    return s === 3 ? "sold" : s === 2 ? "under_offer" : "available";
  }
  const name = (s.name ?? "").toLowerCase();
  if (name.includes("sold") || name.includes("vendu")) return "sold";
  if (name.includes("offer") || name.includes("offre") || name.includes("compromis"))
    return "under_offer";
  return "available";
}

function pickComment(
  comments: ApimoMultilingual[] | undefined,
  lang: "fr" | "en",
): { title?: string; description: string } {
  if (!comments || comments.length === 0) return { description: "" };
  // 1. exact language match, 2. french fallback, 3. first available
  const exact = comments.find((c) => c.language?.toLowerCase() === lang);
  const fr = comments.find((c) => c.language?.toLowerCase() === "fr");
  const chosen = exact ?? fr ?? comments[0];
  return {
    title: chosen.title?.trim(),
    description:
      chosen.comment_full?.trim() ||
      chosen.comment?.trim() ||
      "",
  };
}

// Apimo area type codes that correspond to bath / shower / water rooms.
// Codes 5/6/7/8 are the classic mapping (salle de bain / salle d'eau / WC /
// salle d'eau ensuite). Code 42 also recurs for shower rooms in some agencies.
// We sum them; if a property uses a different agency-specific code we'll
// observe a 0 and the UI will hide the bathroom row.
const BATHROOM_AREA_TYPES = new Set([5, 6, 7, 8, 42]);

function countBathrooms(p: ApimoProperty): number {
  // 1. Top-level fields (some Apimo agencies expose them)
  const direct = (p.bathrooms ?? 0) + (p.shower_rooms ?? 0) + (p.water_rooms ?? 0);
  if (direct > 0) return direct;
  // 2. Aggregate counts from the areas[] table
  let viaAreas = 0;
  for (const a of p.areas ?? []) {
    if (a.type != null && BATHROOM_AREA_TYPES.has(a.type)) {
      viaAreas += a.number ?? 0;
    }
  }
  return viaAreas;
}

function pickPictures(pictures: ApimoPicture[] | undefined): Property["pictures"] {
  if (!pictures || pictures.length === 0) return [];
  return pictures
    .slice()
    .sort((a, b) => (a.rank ?? 999) - (b.rank ?? 999))
    .filter((p) => !!p.url)
    .map((p) => ({
      url: p.url as string,
      alt: p.comments?.[0]?.comment ?? undefined,
    }));
}

export function mapApimoToProperty(p: ApimoProperty): Property {
  const id = p.id?.toString() ?? p.reference ?? Math.random().toString(36);
  const reference = p.reference ?? `APIMO-${p.id ?? "?"}`;
  const { description } = pickComment(p.comments, "fr");
  const cityName = p.city?.name ?? "";
  const region = p.region?.name ?? p.city?.district?.name ?? "Côte d'Azur";
  const surface = p.area?.value ?? p.surface ?? 0;
  const land = p.area?.total && p.area.total > surface ? p.area.total : undefined;
  const lat = p.latitude ?? p.city?.latitude;
  const lng = p.longitude ?? p.city?.longitude;

  return {
    id,
    reference,
    category: mapCategory(p.category, p.price),
    type: mapType(p.type),
    status: mapStatus(p.status),
    title: pickComment(p.comments, "fr").title || cityName || reference,
    subtitle: undefined,
    description,
    city: cityName,
    region,
    district: p.city?.district?.name,
    country: p.city?.country ?? "FR",
    coordinates: lat && lng ? { lat, lng } : undefined,
    price: p.price?.value ?? 0,
    currency: "EUR",
    pricePeriod: mapPricePeriod(p.price?.period),
    area: surface,
    landArea: land,
    rooms: p.rooms ?? 0,
    bedrooms: p.bedrooms ?? 0,
    // Apimo doesn't expose a top-level bathrooms count for this agency.
    // We try, in order :
    //   1. Top-level bathrooms + shower_rooms (other Apimo configurations)
    //   2. Sum of `areas` entries with type codes for bath/shower/water rooms
    // If still 0, the UI hides the "sdb." line entirely (cleaner than "0 sdb.").
    bathrooms: countBathrooms(p),
    yearBuilt: p.year_built ?? p.year,
    features: (p.services ?? []).map((s) => s.name ?? "").filter(Boolean),
    pictures: pickPictures(p.pictures),
    isFeatured: false, // Apimo has no "featured" concept — we'll flag client-side or via convention
    isExclusive: false,
  };
}

// --- Public API ---

export async function fetchApimoProperties(
  category: PropertyCategory = "sale",
): Promise<Property[] | null> {
  const cfg = getConfig();
  if (!cfg) return null;
  const data = await apimoFetch<ApimoListResponse>(
    `/agencies/${cfg.agency}/properties?category=${
      category === "rent" ? 2 : 1
    }&limit=100`,
  );
  if (!data?.properties) return null;
  // Apimo's server-side category filter is unreliable for this agency
  // (rentals show up in the sale feed). Re-filter on our mapped category,
  // which uses `price.period` as the source of truth.
  return data.properties
    .map(mapApimoToProperty)
    .filter((p) => p.category === category);
}

export async function fetchApimoProperty(id: string): Promise<Property | null> {
  const cfg = getConfig();
  if (!cfg) return null;
  const data = await apimoFetch<ApimoProperty | { property?: ApimoProperty }>(
    `/agencies/${cfg.agency}/properties/${id}`,
  );
  if (!data) return null;
  // Apimo sometimes wraps the response in { property: ... }, sometimes not
  const p =
    typeof data === "object" && data && "property" in data && data.property
      ? data.property
      : (data as ApimoProperty);
  if (!p?.id && !p?.reference) return null;
  return mapApimoToProperty(p);
}
