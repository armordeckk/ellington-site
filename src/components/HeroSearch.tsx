"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

// Minimal hero search bar (Figma) — a single slim field, no filters.
// Submitting routes to the properties listing, passing the typed term as a
// city filter when present.
export function HeroSearch() {
  const { t } = useLanguage();
  const router = useRouter();
  const [q, setQ] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const term = q.trim();
    router.push(
      term ? `/properties?city=${encodeURIComponent(term)}` : "/properties",
    );
  }

  return (
    <form onSubmit={onSubmit} className="max-w-xl mx-auto">
      <div className="flex items-center gap-4 bg-black/70 backdrop-blur-[6px] border border-white/20 px-6 py-4 transition hover:border-white/40">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={t.search.submit}
          aria-label={t.search.submit}
          className="flex-1 bg-transparent text-white placeholder-white/65 text-[11px] tracking-[0.22em] uppercase outline-none"
        />
        {/* hidden submit so Enter works without a visible button (Figma) */}
        <button type="submit" className="sr-only" aria-label={t.search.submit}>
          {t.search.submit}
        </button>
      </div>
    </form>
  );
}
