import type { Metadata } from "next";
import { PropertiesBrowser } from "@/components/PropertiesBrowser";
import { properties, getCities } from "@/lib/properties";

export const metadata: Metadata = {
  title: "Propriétés à vendre — Ellington",
  description:
    "Découvrez notre sélection de biens d'exception à vendre sur la Côte d'Azur : villas, penthouses, domaines, appartements de prestige.",
};

export default function PropertiesPage() {
  const cities = getCities();
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-12 text-center">
        <p className="text-[11px] tracking-[0.32em] uppercase text-accent mb-5">
          Portefeuille
        </p>
        <h1 className="font-serif text-5xl md:text-7xl mb-5">
          Propriétés <em className="italic">à vendre</em>
        </h1>
        <p className="text-muted-strong max-w-2xl mx-auto">
          Découvrez les biens d&apos;exception sélectionnés par Ellington sur
          l&apos;ensemble de la Côte d&apos;Azur.
        </p>
      </div>

      <PropertiesBrowser
        properties={properties.filter((p) => p.category === "sale")}
        cities={cities}
      />
    </div>
  );
}
