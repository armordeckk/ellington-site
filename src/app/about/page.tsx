"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export default function AboutPage() {
  const { t } = useLanguage();
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <header className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <p className="text-[11px] tracking-[0.32em] uppercase text-accent mb-5">
              {t.aboutPage.eyebrow}
            </p>
            <h1 className="font-serif text-5xl md:text-7xl mb-8">
              {t.aboutPage.titleBefore}{" "}
              <em className="italic">{t.aboutPage.titleAccent}</em>
            </h1>
            <p className="text-lg text-muted-strong leading-relaxed mb-6">
              {t.aboutPage.lead}
            </p>
            <p className="text-muted leading-relaxed">{t.aboutPage.body}</p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/locations/riviera.jpg"
              alt="Côte d'Azur"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </header>

        <section className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)] border border-[var(--border)] mb-32">
          {t.aboutPage.stats.map((s) => (
            <div key={s.label} className="bg-[var(--background)] p-10 text-center">
              <p className="font-serif text-4xl md:text-5xl text-accent mb-3">
                {s.value}
              </p>
              <p className="text-[11px] tracking-[0.22em] uppercase text-muted">
                {s.label}
              </p>
            </div>
          ))}
        </section>

        <section className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] tracking-[0.32em] uppercase text-accent mb-5">
              {t.aboutPage.valuesEyebrow}
            </p>
            <h2 className="font-serif text-4xl md:text-6xl">
              {t.aboutPage.valuesTitleBefore}{" "}
              <em className="italic">{t.aboutPage.valuesTitleAccent}</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {t.aboutPage.values.map((v, i) => (
              <div key={v.title}>
                <p className="font-serif text-5xl text-accent/40 mb-4">
                  0{i + 1}
                </p>
                <h3 className="font-serif text-2xl mb-4">{v.title}</h3>
                <p className="text-muted-strong leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[var(--background-elev)] border border-[var(--border)] p-12 md:p-20 text-center">
          <p className="text-[11px] tracking-[0.32em] uppercase text-accent mb-5">
            {t.aboutPage.ctaEyebrow}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            {t.aboutPage.ctaTitleBefore}{" "}
            <em className="italic">{t.aboutPage.ctaTitleAccent}</em>
          </h2>
          <p className="text-muted-strong max-w-xl mx-auto mb-10">
            {t.aboutPage.ctaBody}
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-accent hover:bg-accent-hover text-[var(--background)] text-[11px] tracking-[0.22em] uppercase transition"
          >
            {t.common.contactUs}
          </Link>
        </section>
      </div>
    </div>
  );
}
