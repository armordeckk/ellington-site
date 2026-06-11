"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { LOCATION_CONTENT } from "@/lib/location-content";
import type { Location } from "@/lib/types";

export function LocationDetail({ location: loc }: { location: Location }) {
  const { lang } = useLanguage();
  const isEn = lang === "en";
  const pick = (l: { fr: string; en: string }) => (isEn ? l.en : l.fr);
  const rich = LOCATION_CONTENT[loc.slug];

  const subtitle = rich
    ? pick(rich.heroSubtitle)
    : isEn
      ? loc.taglineEn ?? loc.tagline
      : loc.tagline;
  const intro = rich
    ? pick(rich.intro)
    : isEn
      ? loc.descriptionEn ?? loc.description
      : loc.description;
  const mainImage = rich?.mainImage ?? loc.image;
  const propsHref = `/properties?city=${encodeURIComponent(loc.name)}`;

  return (
    <div className="pt-28 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* HERO HEADER — bordered card */}
        <section className="border border-[var(--border)] px-6 py-20 md:py-28 text-center">
          <h1 className="type-h1 mb-6">
            {loc.name}
          </h1>
          {subtitle && (
            <p className="font-serif italic text-xl md:text-2xl text-muted-strong mb-10">
              {subtitle}
            </p>
          )}
          <Link
            href="/locations"
            className="inline-block px-7 py-3 border border-[var(--border-strong)] hover:border-accent hover:bg-accent hover:text-white text-[11px] tracking-[0.22em] uppercase transition"
          >
            {isEn ? "Back to locations" : "Retour aux régions"}
          </Link>
        </section>

        {/* MAIN IMAGE */}
        <div className="relative aspect-[2.5/1] w-full mt-12 overflow-hidden bg-[var(--background-card)]">
          <Image
            src={mainImage}
            alt={loc.name}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* INTRO */}
        <div className="text-center max-w-4xl mx-auto mt-16">
          <p className="text-muted leading-[1.9]">{intro}</p>
          <Link
            href={propsHref}
            className="inline-block mt-10 px-8 py-4 border border-[var(--border-strong)] hover:border-accent hover:bg-accent hover:text-white text-[11px] tracking-[0.22em] uppercase transition"
          >
            {isEn ? "Discover properties in " : "Découvrir les biens à "}
            {loc.name}
          </Link>
        </div>
      </div>

      {rich && (
        <>
          {/* OVERVIEW */}
          <section className="bg-[var(--panel)] py-20 md:py-28 mt-20">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
              <h2 className="type-h2 mb-16">
                {isEn ? "Overview" : "Aperçu"}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {rich.overview.map((o) => (
                  <div
                    key={pick(o.label)}
                    className="bg-[var(--background-card)] p-8 min-h-[14rem] flex flex-col"
                  >
                    <h3 className="font-serif italic text-xl mb-5">
                      {pick(o.label)}
                    </h3>
                    <p className="text-[11px] tracking-[0.18em] uppercase text-muted leading-relaxed">
                      {pick(o.value)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* LIFESTYLE */}
          <section className="py-20 md:py-28">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
              <h2 className="type-h2 mb-14">
                {isEn ? "Lifestyle" : "Art de vivre"}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
                <div className="relative aspect-[4/5] lg:aspect-auto overflow-hidden bg-[var(--background-card)]">
                  <Image
                    src={rich.lifestyleImage}
                    alt={`${loc.name} lifestyle`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="border border-[var(--border)] p-8 md:p-12 flex flex-col justify-center space-y-6">
                  {(isEn ? rich.lifestyle.en : rich.lifestyle.fr).map((p, i) => (
                    <p key={i} className="text-muted-strong leading-[1.85]">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* HIGHLIGHTS */}
          <section className="py-20 md:py-28">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
              <h2 className="type-h2 mb-14">
                {isEn ? "Highlights" : "Points forts"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {rich.highlights.map((h) => (
                  <div key={pick(h.title)} className="border border-[var(--border)]">
                    <div className="bg-accent text-white text-center py-6 px-4">
                      <h3 className="font-serif italic text-xl md:text-2xl">
                        {pick(h.title)}
                      </h3>
                    </div>
                    <div className="p-8">
                      <p className="text-[11px] tracking-[0.18em] uppercase text-muted leading-[1.9]">
                        {pick(h.body)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* GASTRONOMY & LIFESTYLE */}
          <section className="py-20 md:py-28">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
              <div className="relative aspect-[2.5/1] w-full overflow-hidden bg-[var(--background-card)]">
                <Image
                  src={rich.gastronomyImage}
                  alt={`${loc.name} gastronomy`}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h2 className="absolute bottom-8 left-8 type-h2 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                  {isEn ? "Gastronomy & Lifestyle" : "Gastronomie & Art de vivre"}
                </h2>
              </div>
              <div className="border border-[var(--border)] p-8 md:p-12 mt-8">
                <p className="text-muted-strong leading-[1.85]">
                  {pick(rich.gastronomy)}
                </p>
              </div>
            </div>
          </section>

          {/* ACTIVITIES & EXPERIENCES */}
          <section className="py-20 md:py-28">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
              <h2 className="type-h2 mb-14">
                {isEn ? "Activities & Experiences" : "Activités & Expériences"}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {rich.activities.map((a) => (
                  <div
                    key={pick(a.title)}
                    className="group relative aspect-[3/5] overflow-hidden"
                  >
                    <Image
                      src={a.image}
                      alt={pick(a.title)}
                      fill
                      sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, 50vw"
                      className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                    <p className="absolute bottom-0 left-0 right-0 p-4 text-white text-sm leading-snug">
                      {pick(a.title)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* REAL ESTATE */}
          <section className="py-20 md:py-28">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
              <h2 className="type-h2 mb-5">
                {isEn ? "Real Estate" : "Immobilier"}
              </h2>
              <p className="text-muted-strong mb-12">
                {isEn
                  ? `Each offering a unique experience reflecting the spirit of ${loc.name}.`
                  : `Chacun offrant une expérience unique, reflet de l'esprit de ${loc.name}.`}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
                {rich.realEstate.map((r) => (
                  <Link
                    key={pick(r)}
                    href={propsHref}
                    className="bg-accent hover:bg-accent-hover text-white text-center text-[11px] tracking-[0.18em] uppercase px-6 py-4 transition"
                  >
                    {pick(r)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* OUR FAVOURITE PLACES */}
      {loc.favouritePlaces && loc.favouritePlaces.length > 0 && (
        <section className="py-20 md:py-28">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <h2 className="type-h2 mb-5">
              {isEn ? "Our Favourite Places" : "Nos adresses préférées"}
            </h2>
            <p className="text-muted-strong mb-12">
              {isEn
                ? `A selection of addresses our team loves in ${loc.name}.`
                : `Une sélection des adresses que notre équipe affectionne à ${loc.name}.`}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
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
                    <p className="font-serif text-base leading-tight mb-1">{p.name}</p>
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

      {/* CTA */}
      <section className="py-12 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto border border-[var(--border)] p-12 md:p-20 text-center">
          <h2 className="type-h3 mb-5">
            {isEn
              ? `Looking to acquire a property in ${loc.name}?`
              : `Vous souhaitez acquérir un bien à ${loc.name} ?`}
          </h2>
          <p className="text-muted-strong max-w-2xl mx-auto mb-10">
            {isEn
              ? "Our team offers a discreet and tailored approach to help you find the right opportunity."
              : "Notre équipe vous offre une approche discrète et sur-mesure pour trouver la bonne opportunité."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/contact?city=${encodeURIComponent(loc.name)}`}
              className="inline-block px-8 py-4 bg-accent hover:bg-accent-hover text-white text-[11px] tracking-[0.22em] uppercase transition"
            >
              {isEn ? "Request a private consultation" : "Demander une consultation privée"}
            </Link>
            <Link
              href={propsHref}
              className="inline-block px-8 py-4 border border-[var(--border-strong)] hover:border-accent hover:bg-accent hover:text-white text-[11px] tracking-[0.22em] uppercase transition"
            >
              {isEn ? "View available properties" : "Voir les biens disponibles"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
