"use client";

import Image from "next/image";
import Link from "next/link";
import { PropertyCard } from "@/components/PropertyCard";
import { NewsletterForm } from "@/components/NewsletterForm";
import { HeroSearch } from "@/components/HeroSearch";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { getFeaturedProperties, getCities, locations } from "@/lib/properties";
import { useLanguage } from "@/components/LanguageProvider";

export default function HomePage() {
  const { t } = useLanguage();
  const featured = getFeaturedProperties().slice(0, 6);
  const cities = getCities();

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <HeroSlideshow />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/70 via-[var(--background)]/40 to-[var(--background)] z-10" />

        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto fade-in pt-20 sm:pt-0">
          <p className="text-[9px] sm:text-[11px] tracking-[0.22em] sm:tracking-[0.32em] uppercase text-accent mb-6 sm:mb-8 whitespace-nowrap">
            {t.home.eyebrow}
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] mb-6">
            {t.home.titleBefore}{" "}
            <em className="italic text-accent">{t.home.titleAccent}</em>
            <br />
            {t.home.titleAfter}
          </h1>
          <p className="text-base md:text-lg text-muted-strong max-w-2xl mx-auto mb-12">
            {t.home.subtitle}
          </p>

          <HeroSearch cities={cities} />

          <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-x-12 sm:gap-y-4 text-[9.5px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.22em] uppercase text-muted whitespace-nowrap">
            <span>Monaco</span>
            <span className="opacity-40 hidden sm:inline">·</span>
            <span>Saint-Tropez</span>
            <span className="opacity-40 hidden sm:inline">·</span>
            <span>Grimaud</span>
            <span className="opacity-40 hidden sm:inline">·</span>
            <span>Cannes</span>
            <span className="opacity-40 hidden sm:inline">·</span>
            <span>Sainte-Maxime</span>
          </div>
        </div>
      </section>

      {/* WHY ELLINGTON */}
      <section className="py-28 md:py-36 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <p className="text-[11px] tracking-[0.32em] uppercase text-accent mb-5">
              {t.home.whyEyebrow}
            </p>
            <h2 className="font-serif text-4xl md:text-6xl mb-6">
              {t.home.whyTitleBefore}{" "}
              <em className="italic">{t.home.whyTitleAccent}</em>
            </h2>
            <p className="text-muted-strong text-lg leading-relaxed">
              {t.home.whySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)] border border-[var(--border)]">
            {t.home.features.map((f, i) => (
              <div
                key={i}
                className="bg-[var(--background)] p-10 hover:bg-[var(--background-card)] transition duration-500"
              >
                <div className="w-11 h-11 mb-8 flex items-center justify-center border border-[var(--border-strong)] text-accent">
                  <FeatureIcon idx={i} />
                </div>
                <h3 className="font-serif text-2xl mb-4">{f.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="py-28 md:py-36 px-6 md:px-10 bg-[var(--background-elev)]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <p className="text-[11px] tracking-[0.32em] uppercase text-accent mb-5">
                {t.home.featuredEyebrow}
              </p>
              <h2 className="font-serif text-4xl md:text-6xl mb-4">
                {t.home.featuredTitleBefore}{" "}
                <em className="italic">{t.home.featuredTitleAccent}</em>
              </h2>
              <p className="text-muted-strong">{t.home.featuredSubtitle}</p>
            </div>
            <Link
              href="/properties"
              className="self-start md:self-end text-[11px] tracking-[0.22em] uppercase text-accent hover:text-accent-hover border-b border-accent pb-1"
            >
              {t.home.featuredCta}
            </Link>
          </div>

          {/* mobile: scroll-snap horizontal — desktop: grid */}
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth -mx-6 md:mx-0 px-6 md:px-0 pb-3 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {featured.map((p, i) => (
              <div
                key={p.id}
                className="flex-none w-[82%] sm:w-[55%] md:w-auto snap-center md:snap-align-none"
              >
                <PropertyCard property={p} priority={i < 3} />
              </div>
            ))}
          </div>
          <p className="md:hidden mt-4 text-center text-[10px] tracking-[0.22em] uppercase text-muted">
            {t.common.swipeHint}
          </p>
        </div>
      </section>

      {/* LOCATIONS PREVIEW */}
      <section className="py-28 md:py-36 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-[11px] tracking-[0.32em] uppercase text-accent mb-5">
              {t.home.regionsEyebrow}
            </p>
            <h2 className="font-serif text-4xl md:text-6xl mb-6">
              {t.home.regionsTitleBefore}{" "}
              <em className="italic">{t.home.regionsTitleAccent}</em>
            </h2>
            <p className="text-muted-strong text-lg">{t.home.regionsSubtitle}</p>
          </div>

          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth -mx-6 md:mx-0 px-6 md:px-0 pb-3 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {locations.slice(0, 6).map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations#${loc.slug}`}
                className="group relative aspect-[4/5] overflow-hidden block flex-none w-[82%] sm:w-[55%] md:w-auto snap-center md:snap-align-none"
              >
                <Image
                  src={loc.image}
                  alt={loc.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 82vw"
                  className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-serif text-3xl text-white mb-2">
                    {loc.name}
                  </h3>
                  <span className="text-[11px] tracking-[0.22em] uppercase text-accent opacity-0 group-hover:opacity-100 transition">
                    {t.common.readMore}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-28 md:py-36 px-6 md:px-10 bg-[var(--background-elev)] border-t border-[var(--border)]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[11px] tracking-[0.32em] uppercase text-accent mb-5">
            {t.home.newsletterEyebrow}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl mb-5">
            {t.home.newsletterTitleBefore}{" "}
            <em className="italic">{t.home.newsletterTitleAccent}</em>
          </h2>
          <p className="text-muted-strong mb-10">{t.home.newsletterSubtitle}</p>
          <NewsletterForm />
          <p className="text-xs text-muted mt-6">
            {t.home.newsletterDisclaimer}
          </p>
        </div>
      </section>
    </>
  );
}

function FeatureIcon({ idx }: { idx: number }) {
  const icons = ["shield", "network", "trend", "key"];
  const name = icons[idx] ?? "shield";
  switch (name) {
    case "shield":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
          <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" />
        </svg>
      );
    case "network":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
          <circle cx="12" cy="6" r="2.5" />
          <circle cx="5" cy="18" r="2.5" />
          <circle cx="19" cy="18" r="2.5" />
          <path d="M12 8.5v3M10 17l2-5M14 17l-2-5" />
        </svg>
      );
    case "trend":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
          <path d="M3 17l6-6 4 4 8-8M15 7h6v6" />
        </svg>
      );
    case "key":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
          <circle cx="8" cy="14" r="4" />
          <path d="M11 11l9-9M16 6l3 3" />
        </svg>
      );
    default:
      return null;
  }
}
