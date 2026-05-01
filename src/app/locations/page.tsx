import type { Metadata } from "next";
import { getProperties, locations } from "@/lib/properties";
import { LocationsIndexContent } from "@/components/LocationsIndexContent";

export const metadata: Metadata = {
  title: "Nos régions — Ellington",
  description:
    "Explorez les villages les plus prestigieux du Golfe de Saint-Tropez où Ellington opère : Saint-Tropez, Grimaud, Port Grimaud, Ramatuelle, Gassin, Sainte-Maxime.",
  alternates: { canonical: "/locations" },
};

export default async function LocationsPage() {
  const allProps = await getProperties();
  const cityCounts: Record<string, number> = {};
  for (const loc of locations) {
    cityCounts[loc.slug] = allProps.filter(
      (p) => p.city.toLowerCase() === loc.name.toLowerCase(),
    ).length;
  }
  return <LocationsIndexContent cityCounts={cityCounts} />;
}
