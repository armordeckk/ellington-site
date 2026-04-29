"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export default function RentalsPage() {
  const { t } = useLanguage();
  return (
    <div className="pt-32 pb-20 min-h-[80vh]">
      <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
        <p className="text-[11px] tracking-[0.32em] uppercase text-accent mb-5">
          {t.rentalsPage.eyebrow}
        </p>
        <h1 className="font-serif text-5xl md:text-7xl mb-8">
          <em className="italic">{t.rentalsPage.titleAccent}</em>{" "}
          {t.rentalsPage.titleAfter}
        </h1>
        <p className="text-muted-strong text-lg mb-10 leading-relaxed">
          {t.rentalsPage.body}
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-4 bg-accent hover:bg-accent-hover text-[var(--background)] text-[11px] tracking-[0.22em] uppercase transition"
        >
          {t.common.contactUs}
        </Link>
      </div>
    </div>
  );
}
