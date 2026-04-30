"use client";

import Image from "next/image";
import Link from "next/link";
import { locations, properties } from "@/lib/properties";
import { useLanguage } from "@/components/LanguageProvider";

export default function LocationsPage() {
  const { t, lang } = useLanguage();
  const isEn = lang === "en";

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <header className="text-center mb-16 max-w-3xl mx-auto">
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
        <div className="relative max-w-3xl mx-auto mb-20 aspect-[16/7] flex items-center justify-center">
          <svg
            viewBox="0 0 800 360"
            className="w-full h-full text-foreground/80"
            fill="currentColor"
            aria-hidden
          >
            <defs>
              <linearGradient id="coast" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#a17d4f" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#a17d4f" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <path
              d="M50 220 Q120 180 180 200 Q220 215 260 195 Q310 170 360 185 Q400 200 450 175 Q510 155 560 165 Q620 180 670 150 Q720 130 760 145 L760 280 L50 280 Z"
              fill="url(#coast)"
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.7"
            />
            {[
              { x: 720, y: 130, label: "Monaco", labelDy: 0, ghost: true },
              { x: 470, y: 165, label: "Cannes", labelDy: 0, ghost: true },
              { x: 620, y: 165, label: "Nice", labelDy: 0, ghost: true },
              { x: 270, y: 188, label: "Sainte-Maxime", labelDy: -14 },
              { x: 250, y: 205, label: "Saint-Tropez", labelDy: -14 },
              { x: 235, y: 222, label: "Ramatuelle", labelDy: 22 },
              { x: 210, y: 218, label: "Gassin", labelDy: 22 },
              { x: 195, y: 210, label: "Port Grimaud", labelDy: 22 },
              { x: 175, y: 198, label: "Grimaud", labelDy: -14 },
            ].map((m) => (
              <g key={m.label}>
                {m.ghost ? (
                  <text
                    x={m.x}
                    y={m.y}
                    textAnchor="middle"
                    fontSize="9"
                    fill="currentColor"
                    fontFamily="serif"
                    fontStyle="italic"
                    opacity="0.3"
                  >
                    {m.label}
                  </text>
                ) : (
                  <>
                    <circle cx={m.x} cy={m.y} r="3.5" fill="#a17d4f" />
                    <circle cx={m.x} cy={m.y} r="8" fill="#a17d4f" opacity="0.2" />
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
                  </>
                )}
              </g>
            ))}
          </svg>
        </div>

        {/* Grid of locations — each linking to its own SEO page */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc) => {
            const cityCount = properties.filter(
              (p) => p.city.toLowerCase() === loc.name.toLowerCase(),
            ).length;
            const tagline = isEn ? loc.taglineEn ?? loc.tagline : loc.tagline;
            return (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group relative aspect-[4/5] overflow-hidden block bg-[var(--background-card)]"
              >
                <Image
                  src={loc.image}
                  alt={loc.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />
                <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                  <h2 className="font-serif text-3xl mb-1">{loc.name}</h2>
                  {tagline && (
                    <p className="font-serif italic text-base text-white/85 mb-4">
                      {tagline}
                    </p>
                  )}
                  <div className="flex items-end justify-between">
                    <span className="text-[11px] tracking-[0.22em] uppercase text-[var(--gold)] opacity-90 group-hover:opacity-100">
                      {t.locationsPage.viewProperties.replace(/→/, "").trim()} →
                    </span>
                    {cityCount > 0 && (
                      <span className="text-[10px] tracking-[0.22em] uppercase text-white/60">
                        {cityCount} {isEn ? (cityCount > 1 ? "properties" : "property") : `bien${cityCount > 1 ? "s" : ""}`}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
