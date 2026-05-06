import type { Metadata } from "next";
import { getProperties } from "@/lib/properties";
import { RentalsPageContent } from "@/components/RentalsPageContent";

export const metadata: Metadata = {
  title: "Locations saisonnières — Ellington",
  description:
    "Sélection de villas, mas et appartements à louer sur le Golfe de Saint-Tropez et la Côte d'Azur.",
  alternates: { canonical: "/rentals" },
};

export default async function RentalsPage() {
  const properties = await getProperties({ category: "rent" });
  const cities = [...new Set(properties.map((p) => p.city))]
    .filter(Boolean)
    .sort();
  return <RentalsPageContent properties={properties} cities={cities} />;
}
