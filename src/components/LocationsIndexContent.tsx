"use client";

import Image from "next/image";
import Link from "next/link";
import { locations } from "@/lib/properties";
import { useLanguage } from "@/components/LanguageProvider";

export function LocationsIndexContent({
  cityCounts,
}: {
  cityCounts: Record<string, number>;
}) {
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

        {/* Grid of locations — landscape cards, city name centered on image,
            tagline strip below (matches the PDF design brief) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((loc) => {
            const cityCount = cityCounts[loc.slug] ?? 0;
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
                  {cityCount > 0 && (
                    <span className="absolute top-5 right-5 text-[10px] tracking-[0.22em] uppercase text-white/90 bg-black/40 backdrop-blur-sm px-3 py-1.5">
                      {cityCount} {isEn ? (cityCount > 1 ? "properties" : "property") : `bien${cityCount > 1 ? "s" : ""}`}
                    </span>
                  )}
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
