"use client";

import { PropertiesBrowser } from "./PropertiesBrowser";
import { useLanguage } from "./LanguageProvider";
import type { Property } from "@/lib/types";

export function RentalsPageContent({
  properties,
  cities,
}: {
  properties: Property[];
  cities: string[];
}) {
  const { t } = useLanguage();
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-12 text-center">
        <p className="text-[11px] tracking-[0.32em] uppercase text-accent mb-5">
          {t.rentalsPage.eyebrow}
        </p>
        <h1 className="font-serif text-5xl md:text-7xl mb-5">
          {t.rentalsPage.titleBefore}{" "}
          <em className="italic">{t.rentalsPage.titleAccent}</em>
        </h1>
        <p className="text-muted-strong max-w-2xl mx-auto">
          {t.rentalsPage.subtitle}
        </p>
      </div>

      <PropertiesBrowser properties={properties} cities={cities} />
    </div>
  );
}
