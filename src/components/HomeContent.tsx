"use client";

import Link from "next/link";
import Image from "next/image";
import { PropertyCard } from "@/components/PropertyCard";
import { NewsletterForm } from "@/components/NewsletterForm";
import { HeroSearch } from "@/components/HeroSearch";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { BlogCard } from "@/components/BlogCard";
import type { Property } from "@/lib/types";
import { useLanguage } from "@/components/LanguageProvider";
import { CATEGORY_LABELS, type BlogCategory, type Post } from "@/lib/blog-shared";

const CATEGORIES_ORDER: BlogCategory[] = [
  "guides-achat",
  "marche",
  "architecture",
  "art-de-vivre",
  "fiscalite",
];

export function HomeContent({
  posts,
  featured,
}: {
  posts: Post[];
  featured: Property[];
}) {
  const { t, lang } = useLanguage();
  const recentPosts = posts.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden text-white">
        <HeroSlideshow />
        {/* Dark overlay on photos so hero text stays legible (white text on photos) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/30 to-black/55 z-10" />

        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto fade-in pt-20 sm:pt-0">
          <h1 className="type-h1 mb-6">
            {t.home.titleBefore}
          </h1>
          <p className="font-serif italic text-xl md:text-3xl text-white/90 mb-12">
            {t.home.subtitle}
          </p>

          <HeroSearch />
        </div>
      </section>

      {/* WHY ELLINGTON */}
      <section className="py-28 md:py-36 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20 max-w-3xl mx-auto" data-reveal>
            <h2 className="type-h2 mb-6">
              {t.home.whyTitleBefore} {t.home.whyTitleAccent}
            </h2>
            <p className="font-serif italic text-lg md:text-xl text-muted-strong leading-relaxed">
              {t.home.whySubtitle}
            </p>
          </div>

          {/* Light-blue filled boxes on white, with gaps (client prototype) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {t.home.features.map((f, i) => (
              <div
                key={i}
                data-reveal
                style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
                className="bg-[var(--panel)] p-8 md:p-10"
              >
                <h3 className="type-h4 mb-3">{f.title}</h3>
                <p className="text-sm text-muted-strong leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>

          {/* CTA — link to the dedicated /sell page */}
          <div className="text-center mt-14" data-reveal>
            <Link
              href="/sell"
              className="inline-block px-[60px] py-4 bg-accent hover:bg-accent-hover text-white text-[11px] tracking-[0.22em] uppercase transition"
            >
              {t.home.whyCta}
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="py-28 md:py-36 px-6 md:px-10 bg-[var(--background-elev)]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6" data-reveal>
            <div className="max-w-2xl">
              <p className="text-[11px] tracking-[0.32em] uppercase text-[var(--gold)] mb-5">
                {t.home.featuredEyebrow}
              </p>
              <h2 className="type-h2 mb-4">
                {t.home.featuredTitleBefore}{" "}
                <em className="not-italic">{t.home.featuredTitleAccent}</em>
              </h2>
              <p className="text-muted-strong">{t.home.featuredSubtitle}</p>
            </div>
            <Link
              href="/properties"
              className="self-start md:self-end text-[11px] tracking-[0.22em] uppercase text-accent hover:text-link border-b border-accent pb-1"
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

      {/* NOT YOUR ORDINARY LOCAL EXPERT — two-column editorial box (prototype) */}
      <section className="py-20 md:py-28 px-6 md:px-10">
        <div
          className="max-w-[1400px] mx-auto grid md:grid-cols-2 border border-[var(--border)]"
          data-reveal
        >
          {/* LEFT — text panel */}
          <div className="bg-[var(--panel)] px-8 md:px-14 py-14 md:py-20 flex flex-col justify-center">
            <p className="text-[11px] tracking-[0.32em] uppercase text-[var(--gold)] mb-6">
              {lang === "en"
                ? "Our signature"
                : lang === "nl"
                  ? "Onze signatuur"
                  : "Notre signature"}
            </p>
            <h2 className="font-serif italic text-3xl md:text-4xl leading-[1.15] mb-8">
              {t.home.expertTitle}
            </h2>
            <div className="space-y-4 text-muted-strong leading-[1.8] text-[15px] mb-10">
              <p>{t.home.expertP1}</p>
              <p>{t.home.expertP3}</p>
            </div>
            <Link
              href="/about"
              className="inline-block self-start px-[60px] py-4 bg-accent hover:bg-accent-hover text-white text-[11px] tracking-[0.22em] uppercase transition"
            >
              {t.cookies.learnMore}
            </Link>
          </div>
          {/* RIGHT — image */}
          <div className="relative min-h-[320px] md:min-h-[480px]">
            <Image
              src="/locations/riviera.jpg"
              alt="Golfe de Saint-Tropez"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* QUOTE BAND — navy editorial pull-quote (prototype) */}
      <section className="bg-[var(--accent)] text-white py-12 md:py-16 px-6" data-reveal>
        <div className="max-w-3xl mx-auto text-center">
          <span className="block w-10 h-px bg-[var(--gold)] mx-auto mb-7" />
          <p className="font-serif italic text-xl md:text-3xl leading-[1.4]">
            {lang === "en"
              ? "“Every property is a story. We are its authors.”"
              : lang === "nl"
                ? "“Elk pand is een verhaal. Wij zijn de auteurs ervan.”"
                : "« Chaque propriété est une histoire. Nous en sommes les auteurs. »"}
          </p>
          <span className="block w-10 h-px bg-[var(--gold)] mx-auto mt-7" />
        </div>
      </section>

      {/* JOURNAL PREVIEW — conservé pour le SEO (prototype : avant la newsletter) */}
      {recentPosts.length > 0 && (
        <section className="py-28 md:py-36 px-6 md:px-10 bg-[var(--panel)]">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6" data-reveal>
              <div className="max-w-2xl">
                <p className="text-[11px] tracking-[0.32em] uppercase text-[var(--gold)] mb-5">
                  {lang === "en" ? "The Journal" : lang === "nl" ? "Het Journaal" : "Le journal"}
                </p>
                <h2 className="type-h2 mb-4">
                  {lang === "en" ? (
                    <>
                      Stories from the <em className="not-italic">Gulf</em>
                    </>
                  ) : lang === "nl" ? (
                    <>
                      Verhalen uit de <em className="not-italic">Golf</em>
                    </>
                  ) : (
                    <>
                      Chroniques du <em className="not-italic">Golfe</em>
                    </>
                  )}
                </h2>
                <p className="text-muted-strong">
                  {lang === "en"
                    ? "Buyer's guides, market analyses and Riviera lifestyle — our editorial selection."
                    : lang === "nl"
                      ? "Koopgidsen, marktanalyses en Riviera-lifestyle — onze redactionele selectie."
                      : "Guides d'achat, analyses de marché et art de vivre — notre sélection éditoriale."}
                </p>
              </div>
              <Link
                href="/blog"
                className="self-start md:self-end text-[11px] tracking-[0.22em] uppercase text-accent hover:text-link border-b border-accent pb-1"
              >
                {lang === "en"
                  ? "View all articles →"
                  : lang === "nl"
                    ? "Alle artikelen bekijken →"
                    : "Voir tous les articles →"}
              </Link>
            </div>

            {/* Recent posts — same scroll-snap pattern as Featured properties on mobile */}
            <div className="flex md:grid md:grid-cols-3 gap-5 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth -mx-6 md:mx-0 px-6 md:px-0 pb-3 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {recentPosts.map((p, i) => (
                <div
                  key={p.slug}
                  className="flex-none w-[82%] sm:w-[55%] md:w-auto snap-center md:snap-align-none"
                >
                  <BlogCard post={p} priority={i === 0} />
                </div>
              ))}
            </div>

            {/* Category chips — quick access to filtered views */}
            <div className="mt-12 pt-10 border-t border-[var(--border)]">
              <p className="text-[10px] tracking-[0.22em] uppercase text-muted text-center mb-6">
                {lang === "en"
                  ? "Browse by category"
                  : lang === "nl"
                    ? "Bladeren per categorie"
                    : "Parcourir par catégorie"}
              </p>
              <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                {CATEGORIES_ORDER.map((cat) => (
                  <Link
                    key={cat}
                    href={`/blog?category=${cat}`}
                    className="text-[11px] tracking-[0.18em] uppercase px-5 py-2.5 border border-[var(--border)] hover:border-accent hover:text-link transition"
                  >
                    {CATEGORY_LABELS[cat][lang]}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* STAY INFORMED — dark navy box (prototype: last section before footer) */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-[var(--accent)] text-white">
        <div className="max-w-2xl mx-auto text-center" data-reveal>
          <p className="text-[11px] tracking-[0.32em] uppercase text-[var(--gold)] mb-5">
            {t.home.newsletterEyebrow}
          </p>
          <h2 className="type-h2 mb-5 text-white">
            {t.home.newsletterTitleBefore} {t.home.newsletterTitleAccent}
          </h2>
          <p className="font-serif italic text-lg md:text-xl text-white/80 mb-10">
            {t.home.newsletterSubtitle}
          </p>
          <NewsletterForm onDark />
        </div>
      </section>
    </>
  );
}

