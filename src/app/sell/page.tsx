"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export default function SellPage() {
  const { t } = useLanguage();
  return (
    <div className="bg-white">
      {/* HERO — full-bleed image, transparent nav overlays at top */}
      <section className="relative h-[60svh] min-h-[400px] flex items-center justify-center overflow-hidden text-white">
        <Image
          src="https://images.unsplash.com/photo-1763226950354-b04f6101acd1?auto=format&fit=crop&w=2400&q=85"
          alt="Villa de prestige sur la Côte d'Azur"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55 z-10" />
        <div className="relative z-20 text-center max-w-3xl mx-auto px-6">
          <h1 className="font-serif text-5xl md:text-7xl uppercase tracking-[0.18em] mb-6">
            {t.sellPage.titleBefore}{" "}
            <em className="italic normal-case tracking-normal">
              {t.sellPage.titleAccent}
            </em>
          </h1>
          <p className="font-serif italic text-lg md:text-xl text-white/90 leading-relaxed mb-10">
            {t.sellPage.lead}
          </p>
          <Link
            href="/contact?subject=valuation"
            className="inline-block px-8 py-3 border border-white/70 hover:border-white hover:bg-white/10 text-[11px] tracking-[0.22em] uppercase transition text-white"
          >
            {t.sellPage.cta}
          </Link>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-24 pb-20">

        {/* WHY ELLINGTON — bordered card */}
        <section className="mb-32 border border-[var(--border)] bg-[var(--background)] px-8 md:px-14 py-12 md:py-16">
          <h2 className="font-serif text-3xl md:text-4xl uppercase tracking-[0.12em] mb-8">
            {t.sellPage.whyTitle}
          </h2>
          <div className="space-y-5 text-muted leading-[1.85]">
            <p>{t.sellPage.whyBody1}</p>
            <p>{t.sellPage.whyBody2}</p>
            <p>{t.sellPage.whyBody3}</p>
            <p>{t.sellPage.whyBody4}</p>
          </div>
        </section>

        {/* OUR SELLING PROCESS — 4 horizontal cards stacked */}
        <section className="mb-32">
          <h2 className="font-serif text-3xl md:text-4xl uppercase tracking-[0.12em] mb-12">
            {t.sellPage.processTitle}
          </h2>
          <div className="space-y-5">
            {t.sellPage.steps.map((step, i) => (
              <div
                key={step.title}
                className="bg-[var(--background)] px-8 md:px-12 py-8 md:py-10 flex items-start gap-6 md:gap-10"
              >
                <p className="font-serif text-3xl md:text-4xl text-accent flex-none w-8 md:w-10">
                  {i + 1}
                </p>
                <div>
                  <h3 className="font-serif italic text-xl md:text-2xl text-accent mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-strong leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WHY CLIENTS TRUST US — 4 icon cards */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl md:text-4xl uppercase tracking-[0.12em] mb-12 text-center md:text-left">
            {t.sellPage.trustTitle}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {t.sellPage.trustCards.map((card, i) => (
              <div key={card.title} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-accent text-white mb-5">
                  <TrustIcon index={i} />
                </div>
                <h3 className="font-serif italic text-lg md:text-xl text-accent mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-strong leading-relaxed">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

// 4 icons matching the i18n trustCards order:
// 0 Discretion · 1 International network · 2 Dedicated support · 3 Tailored approach
function TrustIcon({ index }: { index: number }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (index) {
    case 0: // Discretion — shield
      return (
        <svg {...common}>
          <path d="M12 3l8 3v5c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z" />
        </svg>
      );
    case 1: // International network — globe
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
        </svg>
      );
    case 2: // Dedicated support — headphones
      return (
        <svg {...common}>
          <path d="M4 14v-2a8 8 0 0116 0v2" />
          <path d="M4 14h3v6H5a1 1 0 01-1-1v-5zM20 14h-3v6h2a1 1 0 001-1v-5z" />
        </svg>
      );
    case 3: // Tailored approach — target
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
}
