"use client";

import Image from "next/image";
import Link from "next/link";
import { locations } from "@/lib/properties";
import { useLanguage } from "@/components/LanguageProvider";

// Card display order (Figma).
const ORDER = [
  "saint-tropez",
  "ramatuelle",
  "gassin",
  "grimaud",
  "port-grimaud",
  "sainte-maxime",
  "la-croix-valmer",
  "cavalaire-sur-mer",
  "rayol-canadel",
];

export function LocationsIndexContent() {
  const { t, lang } = useLanguage();
  const isEn = lang === "en";
  const ordered = ORDER.map((slug) =>
    locations.find((l) => l.slug === slug),
  ).filter((l): l is (typeof locations)[number] => Boolean(l));

  return (
    <div>
      {/* HERO — full-bleed image */}
      <section className="relative h-[60svh] min-h-[420px] flex items-center justify-center overflow-hidden text-white">
        <Image
          src="/locations/hero.jpg"
          alt="Saint-Tropez"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 text-center max-w-3xl mx-auto px-6">
          <h1 className="type-h1 mb-6">
            {t.locationsPage.titleBefore} {t.locationsPage.titleAccent}
          </h1>
          <p className="font-serif italic text-lg md:text-xl text-white/90 leading-relaxed">
            {t.locationsPage.subtitle}
          </p>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-20 pb-20">
        {/* INTRO */}
        <p className="text-center text-muted leading-[1.9] max-w-4xl mx-auto mb-20">
          {t.locationsPage.intro}
        </p>

        {/* MAP — Gulf of Saint-Tropez */}
        <div className="mb-20">
          <Image
            src="/locations/golfe-map.png"
            alt="Golfe de Saint-Tropez"
            width={1536}
            height={1024}
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>

        {/* CARDS GRID — name centered on image, tagline below */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ordered.map((loc) => {
            const tagline = isEn ? loc.taglineEn ?? loc.tagline : loc.tagline;
            return (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group block border border-[var(--border)] hover:border-[var(--border-strong)] transition"
              >
                <div className="relative aspect-[2/1] overflow-hidden bg-[var(--background-card)]">
                  <Image
                    src={loc.image}
                    alt={loc.name}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition" />
                  <h2 className="absolute inset-0 flex items-center justify-center font-serif text-4xl md:text-5xl lg:text-6xl text-white tracking-[0.18em] uppercase text-center px-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
                    {loc.name}
                  </h2>
                </div>
                {tagline && (
                  <div className="px-6 py-6 text-center">
                    <p className="text-[11px] md:text-xs tracking-[0.32em] uppercase text-muted-strong">
                      {tagline}
                    </p>
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
