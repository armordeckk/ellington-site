"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

const TYPES = ["villa", "penthouse", "apartment", "estate"] as const;

const PRICE_VALUES: { value: string; key: keyof ReturnType<typeof priceMap> }[] = [
  { value: "", key: "all" },
  { value: "0-3000000", key: "under3" },
  { value: "3000000-6000000", key: "r3to6" },
  { value: "6000000-10000000", key: "r6to10" },
  { value: "10000000-15000000", key: "r10to15" },
  { value: "15000000-", key: "over15" },
];

function priceMap() {
  return {
    all: "",
    under3: "",
    r3to6: "",
    r6to10: "",
    r10to15: "",
    over15: "",
  } as const;
}

export function HeroSearch({ cities }: { cities: string[] }) {
  const { t } = useLanguage();
  const router = useRouter();
  const [category, setCategory] = useState("sale");
  const [city, setCity] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (city) params.set("city", city);
    if (type) params.set("type", type);
    if (price) {
      const [min, max] = price.split("-");
      if (min) params.set("minPrice", min);
      if (max) params.set("maxPrice", max);
    }
    const target = category === "rent" ? "/rentals" : "/properties";
    const qs = params.toString();
    router.push(qs ? `${target}?${qs}` : target);
  }

  // Use default substitution for "Toutes" → city name "All" key
  const allLabel = t.search.allLocations;
  // For "Tous budgets" placeholder when no value
  const allBudgets = t.search.allBudgets;

  const priceOptions = PRICE_VALUES.map((p) => ({
    value: p.value,
    label: p.key === "all" ? allBudgets : t.priceRanges[p.key],
  }));

  const CATEGORIES = [
    { value: "sale", label: t.search.buy },
    { value: "rent", label: t.search.rent },
  ];

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-4xl mx-auto bg-black/20 backdrop-blur-[6px] border border-white/15 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.4)]"
    >
      {/* Tab toggle */}
      <div className="flex border-b border-white/10">
        {CATEGORIES.map((c) => (
          <button
            key={c.value}
            type="button"
            onClick={() => setCategory(c.value)}
            className={`flex-1 sm:flex-none px-8 py-3.5 text-[11px] tracking-[0.22em] uppercase transition ${
              category === c.value
                ? "bg-white/5 text-accent"
                : "text-white/60 hover:text-white"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
        <HeroField
          label={t.search.location}
          value={city}
          onChange={setCity}
          options={[
            { value: "", label: allLabel },
            ...cities.map((c) => ({ value: c, label: c })),
          ]}
        />
        <HeroField
          label={t.search.type}
          value={type}
          onChange={setType}
          options={[
            { value: "", label: t.search.allTypes },
            ...TYPES.map((tp) => ({ value: tp, label: t.types[tp] })),
          ]}
        />
        <HeroField
          label={t.search.budget}
          value={price}
          onChange={setPrice}
          options={priceOptions}
        />
        <button
          type="submit"
          className="bg-accent/95 hover:bg-accent text-[var(--background)] text-[11px] tracking-[0.22em] uppercase transition py-5 sm:col-span-3 lg:col-span-1 flex items-center justify-center gap-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-4.5-4.5" />
          </svg>
          {t.search.submit}
        </button>
      </div>
    </form>
  );
}

function HeroField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <label className="block px-5 py-4 border-r border-white/10 last:border-r-0 text-left">
      <span className="block text-[10px] tracking-[0.22em] uppercase text-white/55 mb-1">
        {label}
      </span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="appearance-none w-full bg-transparent text-sm text-white pr-6 cursor-pointer py-1"
        >
          {options.map((o) => (
            <option key={o.value} value={o.value} className="bg-[var(--background)] text-white">
              {o.label}
            </option>
          ))}
        </select>
        <svg
          className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-accent"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </label>
  );
}
