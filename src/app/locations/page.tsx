import type { Metadata } from "next";
import { LocationsIndexContent } from "@/components/LocationsIndexContent";

export const metadata: Metadata = {
  title: "Nos régions — Ellington",
  description:
    "Explorez les villages les plus prestigieux du Golfe de Saint-Tropez où Ellington opère : Saint-Tropez, Grimaud, Port Grimaud, Ramatuelle, Gassin, Sainte-Maxime.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return <LocationsIndexContent />;
}
