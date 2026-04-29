"use client";

import { PropertiesBrowser } from "@/components/PropertiesBrowser";
import { properties, getCities } from "@/lib/properties";
import { useLanguage } from "@/components/LanguageProvider";

export default function PropertiesPage() {
  const { t } = useLanguage();
  const cities = getCities();
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-12 text-center">
        <p className="text-[11px] tracking-[0.32em] uppercase text-accent mb-5">
          {t.propertiesPage.eyebrow}
        </p>
        <h1 className="font-serif text-5xl md:text-7xl mb-5">
          {t.propertiesPage.titleBefore}{" "}
          <em className="italic">{t.propertiesPage.titleAccent}</em>
        </h1>
        <p className="text-muted-strong max-w-2xl mx-auto">
          {t.propertiesPage.subtitle}
        </p>
      </div>

      <PropertiesBrowser
        properties={properties.filter((p) => p.category === "sale")}
        cities={cities}
      />
    </div>
  );
}
