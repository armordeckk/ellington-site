// Apimo REST API adapter — placeholder.
// Apimo docs: https://apimo.pro/api
//
// To activate:
// 1. Add APIMO_PROVIDER, APIMO_TOKEN, APIMO_AGENCY env vars in .env.local.
// 2. Replace the imports in pages from "@/lib/properties" with the adapter
//    functions below (which will fetch from Apimo and map to our Property type).
//
// The Property type in src/lib/types.ts is intentionally close to Apimo's
// schema so the mapping stays simple.

import type { Property } from "./types";

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

async function apimoFetch<T>(path: string): Promise<T | null> {
  const cfg = getConfig();
  if (!cfg) return null;

  const auth = Buffer.from(`${cfg.provider}:${cfg.token}`).toString("base64");
  const res = await fetch(`${APIMO_BASE}${path}`, {
    headers: { Authorization: `Basic ${auth}` },
    next: { revalidate: 600 }, // 10-minute ISR cache
  });

  if (!res.ok) {
    console.error(`Apimo error ${res.status} on ${path}`);
    return null;
  }
  return (await res.json()) as T;
}

// Stub — will return Apimo data once env vars are present, otherwise null
// (callers fall back to mock data).
export async function fetchApimoProperties(): Promise<Property[] | null> {
  const cfg = getConfig();
  if (!cfg) return null;
  const data = await apimoFetch<{ properties: unknown[] }>(
    `/agencies/${cfg.agency}/properties`,
  );
  if (!data) return null;
  // TODO: map data.properties → Property[] once we know exact field names.
  return [];
}

export async function fetchApimoProperty(id: string): Promise<Property | null> {
  const cfg = getConfig();
  if (!cfg) return null;
  const data = await apimoFetch<unknown>(
    `/agencies/${cfg.agency}/properties/${id}`,
  );
  if (!data) return null;
  // TODO: map → Property
  return null;
}
