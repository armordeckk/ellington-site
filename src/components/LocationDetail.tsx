"use client";

import Image from "next/image";
import Link from "next/link";
import { PropertyCard } from "./PropertyCard";
import { useLanguage } from "./LanguageProvider";
import type { Location, Property } from "@/lib/types";

export function LocationDetail({
  location: loc,
  cityProperties,
  otherLocations,
}: {
  location: Location;
  cityProperties: Property[];
  otherLocations: Location[];
}) {
  const { t, lang } = useLanguage();
  const isEn = lang === "en";

  const tagline = isEn ? loc.taglineEn ?? loc.tagline : loc.tagline;
  const lead = isEn ? loc.descriptionEn ?? loc.description : loc.description;
  const longDesc = isEn
    ? loc.longDescriptionEn ?? loc.longDescription
    : loc.longDescription;
  const highlights = isEn
    ? loc.highlightsEn ?? loc.highlights
    : loc.highlights;
  const activities = isEn
    ? loc.activitiesEn ?? loc.activities
    : loc.activities;

  return (
    <div className="pb-20">
      {/* HERO */}
      <section className="relative h-[70svh] min-h-[480px] flex items-end overflow-hidden text-white">
        <Image
          src={loc.image}
          alt={loc.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70 z-10" />

        <div className="relative z-20 max-w-[1400px] mx-auto px-6 md:px-10 pb-16 md:pb-20 w-full">
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-white/80 hover:text-white mb-8"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 6l-6 6 6 6" />
            </svg>
            {t.locationsPage.titleBefore} {t.locationsPage.titleAccent}
          </Link>
          <p className="text-[11px] tracking-[0.32em] uppercase text-[var(--gold)] mb-4">
            {t.locationsPage.eyebrow}
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-4 leading-[1.05]">
            {loc.name}
          </h1>
          {tagline && (
            <p className="font-serif italic text-2xl md:text-3xl text-white/90 max-w-2xl">
              {tagline}
            </p>
          )}
        </div>
      </section>

      {/* INTRO + KEY FACTS */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-[var(--background-elev)]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-xl md:text-2xl font-serif italic text-foreground leading-[1.6]">
              {lead}
            </p>
            {longDesc && (
              <p className="text-muted-strong leading-[1.85] text-lg">
                {longDesc}
              </p>
            )}
          </div>

          {loc.keyFacts && loc.keyFacts.length > 0 && (
            <aside className="border border-[var(--border)] divide-y divide-[var(--border)]">
              {loc.keyFacts.map((f) => (
                <div
                  key={f.label}
                  className="flex justify-between items-center px-6 py-5"
                >
                  <dt className="text-[10px] tracking-[0.22em] uppercase text-muted">
                    {isEn ? f.labelEn ?? f.label : f.label}
                  </dt>
                  <dd className="font-serif text-lg">{f.value}</dd>
                </div>
              ))}
            </aside>
          )}
        </div>
      </section>

      {/* HIGHLIGHTS */}
      {highlights && highlights.length > 0 && (
        <section className="py-20 md:py-28 px-6 md:px-10">
          <div className="max-w-[1400px] mx-auto">
            <p className="text-[11px] tracking-[0.32em] uppercase text-accent mb-5 text-center">
              {isEn ? "Highlights" : "Points forts"}
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-center mb-14 max-w-2xl mx-auto">
              {isEn ? (
                <>
                  Why <em className="italic">{loc.name}</em>
                </>
              ) : (
                <>
                  Pourquoi <em className="italic">{loc.name}</em>
                </>
              )}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((h, i) => (
                <div
                  key={h}
                  className="border border-[var(--border)] p-8 hover:border-accent transition"
                >
                  <p className="font-serif text-3xl text-accent/40 mb-4">
                    0{i + 1}
                  </p>
                  <p className="font-serif text-lg leading-snug">{h}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ACTIVITIES & EXPERIENCES — refined editorial layout with themed icons */}
      {activities && activities.length > 0 && (
        <section className="py-24 md:py-32 px-6 md:px-10 bg-[var(--background-elev)]">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <p className="text-[11px] tracking-[0.32em] uppercase text-accent mb-5">
                {isEn ? "Activities & Experiences" : "Activités & Expériences"}
              </p>
              <h2 className="font-serif text-3xl md:text-5xl mb-6">
                {isEn ? "The art of living in " : "L'art de vivre à "}
                <em className="italic">{loc.name}</em>
              </h2>
              <span className="block w-16 h-px bg-accent/40 mx-auto" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-4">
              {activities.map((a, i) => (
                <div
                  key={a}
                  className="group relative text-center px-4 transition-transform duration-500 hover:-translate-y-1"
                >
                  {/* Icon medallion */}
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    {/* outer ring */}
                    <div className="absolute inset-0 rounded-full border border-accent/30 group-hover:border-accent/70 transition-colors duration-500" />
                    {/* inner filled circle that shows on hover */}
                    <div className="absolute inset-2 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform duration-500" />
                    {/* icon */}
                    <div className="relative w-full h-full flex items-center justify-center text-accent group-hover:text-white transition-colors duration-500">
                      <ActivityIcon label={a} />
                    </div>
                  </div>

                  {/* Small index */}
                  <p className="font-serif italic text-[10px] tracking-[0.3em] text-accent/60 mb-2">
                    {String(i + 1).padStart(2, "0")}
                  </p>

                  {/* Activity text */}
                  <p className="font-serif text-base md:text-lg leading-snug text-foreground/85 max-w-[16ch] mx-auto">
                    {a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* OUR FAVOURITE PLACES */}
      {loc.favouritePlaces && loc.favouritePlaces.length > 0 && (
        <section className="py-20 md:py-28 px-6 md:px-10">
          <div className="max-w-[1400px] mx-auto">
            <p className="text-[11px] tracking-[0.32em] uppercase text-accent mb-5 text-center">
              {isEn ? "Local favourites" : "Nos adresses préférées"}
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-center mb-14 max-w-2xl mx-auto">
              {isEn ? (
                <>Our favourite <em className="italic">places</em></>
              ) : (
                <>Nos <em className="italic">favoris</em></>
              )}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {loc.favouritePlaces.map((p) => (
                <div
                  key={p.name}
                  className="group border border-[var(--border)] hover:border-accent transition overflow-hidden"
                >
                  {p.image && (
                    <div className="relative aspect-square overflow-hidden bg-[var(--background-card)]">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                        className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-4 text-center">
                    <p className="font-serif text-lg leading-tight mb-1">{p.name}</p>
                    {p.category && (
                      <p className="text-[10px] tracking-[0.18em] uppercase text-muted">
                        {p.category}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PROPERTIES IN THIS CITY */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-[var(--background-elev)]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <p className="text-[11px] tracking-[0.32em] uppercase text-accent mb-5">
                {t.home.featuredEyebrow}
              </p>
              <h2 className="font-serif text-3xl md:text-5xl">
                {isEn ? "Available in" : "Disponibles à"}{" "}
                <em className="italic">{loc.name}</em>
              </h2>
            </div>
            {cityProperties.length > 3 && (
              <Link
                href={`/properties?city=${encodeURIComponent(loc.name)}`}
                className="self-start md:self-end text-[11px] tracking-[0.22em] uppercase text-accent hover:text-accent-hover border-b border-accent pb-1"
              >
                {t.home.featuredCta}
              </Link>
            )}
          </div>

          {cityProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cityProperties.slice(0, 6).map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          ) : (
            <div className="border border-[var(--border)] p-12 text-center">
              <p className="font-serif text-2xl italic text-muted-strong mb-6">
                {isEn
                  ? "No property currently available — confidential mandates only."
                  : "Aucun bien actuellement publié — mandats confidentiels uniquement."}
              </p>
              <Link
                href={`/contact?city=${encodeURIComponent(loc.name)}`}
                className="inline-block text-[11px] tracking-[0.22em] uppercase text-accent border-b border-accent pb-1"
              >
                {t.common.contactUs}
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* MAP */}
      {loc.coordinates && (
        <section className="py-20 md:py-28 px-6 md:px-10">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="font-serif text-3xl md:text-5xl mb-10 text-center">
              <em className="italic">{t.propertyDetail.location}</em>
            </h2>
            <div className="aspect-[16/9] border border-[var(--border)] overflow-hidden relative">
              <iframe
                title={`Map of ${loc.name}`}
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${
                  loc.coordinates.lng - 0.04
                }%2C${loc.coordinates.lat - 0.025}%2C${
                  loc.coordinates.lng + 0.04
                }%2C${
                  loc.coordinates.lat + 0.025
                }&layer=mapnik&marker=${loc.coordinates.lat}%2C${loc.coordinates.lng}`}
                className="absolute inset-0 w-full h-full grayscale-[60%] opacity-95"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-3xl mx-auto bg-[var(--background-card)] border border-[var(--border)] p-12 md:p-20 text-center">
          <p className="text-[11px] tracking-[0.32em] uppercase text-accent mb-5">
            {t.aboutPage.ctaEyebrow}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            {isEn ? "A project in" : "Un projet à"}{" "}
            <em className="italic">{loc.name}</em>{" "}
            {isEn ? "?" : "?"}
          </h2>
          <p className="text-muted-strong max-w-xl mx-auto mb-10">
            {isEn
              ? "Our advisors know the local market in detail. We accompany you with discretion in your acquisition or sale project."
              : "Nos conseillers connaissent ce marché en détail. Nous vous accompagnons avec discrétion dans votre projet d'acquisition ou de vente."}
          </p>
          <Link
            href={`/contact?city=${encodeURIComponent(loc.name)}`}
            className="inline-block px-8 py-4 bg-accent hover:bg-accent-hover text-white text-[11px] tracking-[0.22em] uppercase transition"
          >
            {t.common.contactUs}
          </Link>
        </div>
      </section>

      {/* OTHER REGIONS */}
      <section className="py-20 px-6 md:px-10 border-t border-[var(--border)]">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[11px] tracking-[0.32em] uppercase text-accent mb-5 text-center">
            {t.locationsPage.eyebrow}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">
            {isEn ? "Explore other" : "Explorer d'autres"}{" "}
            <em className="italic">
              {isEn ? "addresses" : "adresses"}
            </em>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {otherLocations.map((other) => (
              <Link
                key={other.slug}
                href={`/locations/${other.slug}`}
                className="group relative aspect-[3/4] overflow-hidden block"
              >
                <Image
                  src={other.image}
                  alt={other.name}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-serif text-xl text-white">{other.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Picks a thematic icon for an activity from its label (FR + EN keywords).
// Keep keywords lowercased; first match wins. Falls back to a star.
function ActivityIcon({ label }: { label: string }) {
  const s = label.toLowerCase();
  const props = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  // Sailing / yachting / boats
  if (/voile|yacht|sail|bateau|boat|nautique|nautical|régate|regatta/.test(s)) {
    return (
      <svg {...props}>
        <path d="M12 3v15M12 3l-7 14h7M12 6l6 11h-6M3 20h18M5 20l1 2h12l1-2" />
      </svg>
    );
  }
  // Walks, viewpoints, hiking, coastal scenery
  if (
    /promen|côtière|côtier|walk|hike|scenic|view|point de vue|coastal|sentier|trail/.test(s)
  ) {
    return (
      <svg {...props}>
        <path d="M3 19l5-8 4 5 3-4 6 7M3 19h18" />
        <circle cx="17" cy="6" r="2" />
      </svg>
    );
  }
  // Cultural visits, museums, galleries, monuments
  if (/culture|visite|musée|museum|galler|galerie|monument|citadel|patrimoine|heritage/.test(s)) {
    return (
      <svg {...props}>
        <path d="M4 21h16M4 21V10M20 21V10M4 10l8-6 8 6M9 21v-7h6v7M11 17h2" />
      </svg>
    );
  }
  // Beach clubs, beach, swimming, seaside, sun
  if (/beach|plage|farniente|swim|sea|mer|baigne|sun|soleil|club/.test(s)) {
    return (
      <svg {...props}>
        <path d="M12 4v2M5 7l1.5 1.5M19 7l-1.5 1.5M3 12h2M19 12h2" />
        <circle cx="12" cy="12" r="3" />
        <path d="M4 18c2-2 5-2 8 0s6 2 8 0M4 21c2-2 5-2 8 0s6 2 8 0" />
      </svg>
    );
  }
  // Seasonal events, regattas, festivals
  if (/événement|event|festival|saison|season|régate|regatta|gala|fête/.test(s)) {
    return (
      <svg {...props}>
        <rect x="4" y="5" width="16" height="16" rx="1" />
        <path d="M4 10h16M9 3v4M15 3v4" />
        <path d="M12 14l1 2 2 .3-1.5 1.4.4 2.2L12 18.7l-1.9 1.2.4-2.2L9 16.3l2-.3z" />
      </svg>
    );
  }
  // Wine / vineyards / gastronomy
  if (/vin|wine|gastr|cuisine|vigne|vineyard|food|dégustation|tasting/.test(s)) {
    return (
      <svg {...props}>
        <path d="M9 4h6v4a3 3 0 11-6 0V4zM12 11v7M9 21h6" />
      </svg>
    );
  }
  // Default — small star
  return (
    <svg {...props}>
      <path d="M12 3l2.5 6 6.5.5-5 4.5L17 21l-5-3.5L7 21l1-7-5-4.5 6.5-.5z" />
    </svg>
  );
}
