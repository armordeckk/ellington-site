import type { Metadata } from "next";
import { getCities, getProperties } from "@/lib/properties";
import { PropertiesPageContent } from "@/components/PropertiesPageContent";

export const metadata: Metadata = {
  title: "Propriétés à vendre — Ellington",
  description:
    "Découvrez notre sélection de biens d'exception à vendre dans le Golfe de Saint-Tropez : villas, penthouses, domaines, appartements de prestige.",
  alternates: { canonical: "/properties" },
};

export default async function PropertiesPage() {
  const [properties, cities] = await Promise.all([
    getProperties({ category: "sale" }),
    getCities(),
  ]);
  return <PropertiesPageContent properties={properties} cities={cities} />;
}
