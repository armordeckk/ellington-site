"use client";

import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { useLanguage } from "@/components/LanguageProvider";

export default function AboutPage() {
  const { t } = useLanguage();
  return (
    <div>
      {/* HERO — client-provided image */}
      <section className="relative h-[60svh] min-h-[400px] flex items-center justify-center overflow-hidden text-white">
        <Image
          src="/about/hero.jpg"
          alt="Ellington · Côte d'Azur"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55 z-10" />
        <div className="relative z-20 text-center max-w-3xl mx-auto px-6">
          <h1 className="type-h1 mb-6">
            {t.aboutPage.titleBefore} {t.aboutPage.titleAccent}
          </h1>
          <p className="font-serif italic text-lg md:text-xl text-white/90 leading-relaxed">
            {t.aboutPage.heroSubtitle}
          </p>
        </div>
      </section>

      {/* WHITE PAGE BODY — overrides the pastel blue page bg, extends to footer */}
      <div className="bg-white pb-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* LOGO DIVIDER */}
        <div className="flex flex-col items-center pt-20 pb-12">
          <Logo className="w-32 h-44 md:w-40 md:h-56" sizes="200px" black />
        </div>

        {/* SECTION DIVIDER — bordered card, right-aligned italic label (Figma) */}
        <section className="mb-32 border border-[var(--border)] px-8 md:px-16 py-14 md:py-20">
          <p className="text-right font-serif italic text-2xl md:text-3xl text-accent mb-10">
            {t.aboutPage.dividerLabel}
          </p>
          <div className="space-y-6 text-muted leading-[1.85] text-justify max-w-5xl">
            <p>{t.aboutPage.lead}</p>
            <p>{t.aboutPage.body}</p>
            <p>{t.aboutPage.body2}</p>
          </div>
        </section>

        {/* OUR VALUES — 6 cards with icon in a light-blue square */}
        <section className="mb-32">
          <div className="mb-16">
            <h2 className="type-h2">
              {t.aboutPage.valuesTitleBefore} {t.aboutPage.valuesTitleAccent}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.aboutPage.values.map((v, i) => (
              <div
                key={v.title}
                className="bg-[var(--background)] border border-[var(--border)] p-8"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 bg-[var(--panel)] text-accent mb-5">
                  <ValueIcon index={i} />
                </div>
                <h3 className="type-h3 text-accent mb-4">{v.title}</h3>
                <p className="text-sm text-muted-strong leading-relaxed">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* AGENCY TEAM */}
        <section className="mb-24">
          <div className="mb-16">
            <h2 className="type-h2">
              {t.aboutPage.teamTitleBefore} {t.aboutPage.teamTitleAccent}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {t.aboutPage.team.map((member) => (
              <figure
                key={member.name}
                className="bg-[var(--background)] border border-[var(--border)] overflow-hidden"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[var(--background)]">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-6">
                  <p className="font-serif text-xl mb-1">{member.name}</p>
                  <p className="text-[10px] tracking-[0.22em] uppercase text-accent mb-4">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <div className="space-y-2">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-2 text-xs text-muted hover:text-link transition"
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <rect x="3" y="5" width="18" height="14" rx="1" />
                          <path d="M3 7l9 6 9-6" />
                        </svg>
                        {member.email}
                      </a>
                    )}
                    {member.phone && (
                      <a
                        href={`tel:${member.phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-2 text-xs text-muted hover:text-link transition"
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M5 4h4l2 5-3 2a12 12 0 006 6l2-3 5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
                        </svg>
                        {member.phone}
                      </a>
                    )}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[var(--background)] border border-[var(--border)] p-12 md:p-20 text-center">
          <p className="text-[11px] tracking-[0.32em] uppercase text-accent mb-5">
            {t.aboutPage.ctaEyebrow}
          </p>
          <h2 className="type-h2 mb-6">
            {t.aboutPage.ctaTitleBefore} {t.aboutPage.ctaTitleAccent}
          </h2>
          <p className="text-muted-strong max-w-xl mx-auto mb-10">
            {t.aboutPage.ctaBody}
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-accent hover:bg-accent-hover text-[var(--background-elev)] text-[11px] tracking-[0.22em] uppercase transition"
          >
            {t.common.contactUs}
          </Link>
        </section>
        </div>
      </div>
    </div>
  );
}

// Inline SVG icons for the 6 values — minimal line style, accent color.
// Order matches the i18n values array:
// 0 Integrity · 1 Excellence · 2 Discretion · 3 Global Reach · 4 Market Expertise · 5 Personalized Service
function ValueIcon({ index }: { index: number }) {
  const common = {
    width: 32,
    height: 32,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (index) {
    case 0: // Integrity — shield with check
      return (
        <svg {...common}>
          <path d="M12 3l8 3v5c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case 1: // Excellence — award/badge
      return (
        <svg {...common}>
          <circle cx="12" cy="9" r="6" />
          <path d="M9 14l-2 7 5-3 5 3-2-7" />
        </svg>
      );
    case 2: // Discretion — lock
      return (
        <svg {...common}>
          <rect x="5" y="11" width="14" height="9" rx="1" />
          <path d="M8 11V8a4 4 0 018 0v3" />
        </svg>
      );
    case 3: // Global Reach — globe
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
        </svg>
      );
    case 4: // Market Expertise — chart
      return (
        <svg {...common}>
          <path d="M4 20V8M10 20v-7M16 20v-4M22 20V4" />
          <path d="M3 20h19" />
        </svg>
      );
    case 5: // Personalized Service — heart
      return (
        <svg {...common}>
          <path d="M12 20s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.5-7 10-7 10z" />
        </svg>
      );
    default:
      return null;
  }
}
