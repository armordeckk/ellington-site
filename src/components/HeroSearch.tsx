"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { propertyTypeLabel } from "@/lib/properties";

const TYPES = ["villa", "penthouse", "apartment", "estate"] as const;

const PRICE_OPTIONS = [
  { value: "", label: "Tous budgets" },
  { value: "0-3000000", label: "Jusqu'à 3 M€" },
  { value: "3000000-6000000", label: "3 – 6 M€" },
  { value: "6000000-10000000", label: "6 – 10 M€" },
  { value: "10000000-15000000", label: "10 – 15 M€" },
  { value: "15000000-", label: "15 M€ et plus" },
];

const CATEGORIES = [
  { value: "sale", label: "Achat" },
  { value: "rent", label: "Location" },
];

export function HeroSearch({ cities }: { cities: string[] }) {
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

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-4xl mx-auto bg-[var(--background)]/75 backdrop-blur-md border border-[var(--border-strong)]"
    >
      {/* Tab toggle */}
      <div className="flex border-b border-[var(--border)]">
        {CATEGORIES.map((c) => (
          <button
            key={c.value}
            type="button"
            onClick={() => setCategory(c.value)}
            className={`flex-1 sm:flex-none px-8 py-3.5 text-[11px] tracking-[0.22em] uppercase transition ${
              category === c.value
                ? "bg-[var(--background-elev)] text-accent"
                : "text-muted hover:text-foreground"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
        <HeroField
          label="Localisation"
          value={city}
          onChange={setCity}
          options={[
            { value: "", label: "Toutes" },
            ...cities.map((c) => ({ value: c, label: c })),
          ]}
        />
        <HeroField
          label="Type de bien"
          value={type}
          onChange={setType}
          options={[
            { value: "", label: "Tous types" },
            ...TYPES.map((t) => ({ value: t, label: propertyTypeLabel(t) })),
          ]}
        />
        <HeroField
          label="Budget"
          value={price}
          onChange={setPrice}
          options={PRICE_OPTIONS}
        />
        <button
          type="submit"
          className="bg-accent hover:bg-accent-hover text-[var(--background)] text-[11px] tracking-[0.22em] uppercase transition py-5 sm:col-span-3 lg:col-span-1 flex items-center justify-center gap-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-4.5-4.5" />
          </svg>
          Rechercher
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
    <label className="block px-5 py-4 border-r border-[var(--border)] last:border-r-0 text-left">
      <span className="block text-[10px] tracking-[0.22em] uppercase text-muted mb-1">
        {label}
      </span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="appearance-none w-full bg-transparent text-sm text-foreground pr-6 cursor-pointer py-1"
        >
          {options.map((o) => (
            <option key={o.value} value={o.value} className="bg-[var(--background)]">
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
