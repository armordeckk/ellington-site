"use client";

import Image from "next/image";
import Link from "next/link";
import { locations, properties } from "@/lib/properties";
import { useLanguage } from "@/components/LanguageProvider";

export default function LocationsPage() {
  const { t, lang } = useLanguage();

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <header className="text-center mb-20 max-w-3xl mx-auto">
          <p className="text-[11px] tracking-[0.32em] uppercase text-accent mb-5">
            {t.locationsPage.eyebrow}
          </p>
          <h1 className="font-serif text-5xl md:text-7xl mb-6">
            {t.locationsPage.titleBefore}{" "}
            <em className="italic">{t.locationsPage.titleAccent}</em>
          </h1>
          <p className="text-muted-strong text-lg leading-relaxed">
            {t.locationsPage.subtitle}
          </p>
        </header>

        {/* Map illustration */}
        <div className="relative max-w-3xl mx-auto mb-24 aspect-[16/7] flex items-center justify-center">
          <svg
            viewBox="0 0 800 360"
            className="w-full h-full text-foreground/90"
            fill="currentColor"
            aria-hidden
          >
            <defs>
              <linearGradient id="coast" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#d9d0c0" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#d9d0c0" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <path
              d="M50 220 Q120 180 180 200 Q220 215 260 195 Q310 170 360 185 Q400 200 450 175 Q510 155 560 165 Q620 180 670 150 Q720 130 760 145 L760 280 L50 280 Z"
              fill="url(#coast)"
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.8"
            />
            {[
              { x: 720, y: 145, label: "Monaco", labelDy: -14 },
              { x: 660, y: 152, label: "Cap-Ferrat", labelDy: -14 },
              { x: 620, y: 180, label: "Nice", labelDy: 22 },
              { x: 470, y: 175, label: "Cannes", labelDy: -14 },
              { x: 250, y: 196, label: "Sainte-Maxime", labelDy: -14 },
              { x: 210, y: 202, label: "Saint-Tropez", labelDy: 22 },
              { x: 175, y: 213, label: "Grimaud", labelDy: -14 },
            ].map((m) => (
              <g key={m.label}>
                <circle cx={m.x} cy={m.y} r="3.5" fill="#d9d0c0" />
                <circle cx={m.x} cy={m.y} r="8" fill="#d9d0c0" opacity="0.2" />
                <text
                  x={m.x}
                  y={m.y + m.labelDy}
                  textAnchor="middle"
                  fontSize="10"
                  fill="currentColor"
                  fontFamily="serif"
                  fontStyle="italic"
                >
                  {m.label}
                </text>
              </g>
            ))}
          </svg>
        </div>

        {/* Locations */}
        <div className="space-y-24">
          {locations.map((loc, i) => {
            const cityProperties = properties.filter((p) =>
              p.city.toLowerCase().includes(loc.name.split(" ")[0].toLowerCase()) ||
              loc.slug.includes(p.city.toLowerCase().replace(/\s+/g, "-")),
            );
            const desc =
              lang === "en" && loc.descriptionEn
                ? loc.descriptionEn
                : loc.description;
            return (
              <section
                key={loc.slug}
                id={loc.slug}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center scroll-mt-32 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={loc.image}
                    alt={loc.name}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-[11px] tracking-[0.32em] uppercase text-accent mb-4">
                    {t.locationsPage.regionLabel(i + 1, locations.length)}
                  </p>
                  <h2 className="font-serif text-4xl md:text-5xl mb-6">{loc.name}</h2>
                  <p className="text-muted-strong text-lg leading-[1.85] mb-8">
                    {desc}
                  </p>
                  {cityProperties.length > 0 && (
                    <p className="text-sm text-muted mb-6">
                      {t.locationsPage.currentlyAvailable(cityProperties.length)}
                    </p>
                  )}
                  <Link
                    href={`/properties?city=${encodeURIComponent(loc.name)}`}
                    className="inline-block text-[11px] tracking-[0.22em] uppercase text-accent border-b border-accent pb-1 hover:text-accent-hover"
                  >
                    {t.locationsPage.viewProperties}
                  </Link>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
