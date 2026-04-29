"use client";

import { useMemo, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PropertyCard } from "./PropertyCard";
import type { Property } from "@/lib/types";
import { useLanguage } from "./LanguageProvider";

const PRICE_RANGES = [
  { key: "all" as const, min: 0, max: Infinity },
  { key: "under3" as const, min: 0, max: 3_000_000 },
  { key: "r3to6" as const, min: 3_000_000, max: 6_000_000 },
  { key: "r6to10" as const, min: 6_000_000, max: 10_000_000 },
  { key: "r10to15" as const, min: 10_000_000, max: 15_000_000 },
  { key: "over15" as const, min: 15_000_000, max: Infinity },
];

const TYPES = ["villa", "penthouse", "apartment", "estate"] as const;

const SORT_KEYS = ["newest", "priceDesc", "priceAsc", "areaDesc"] as const;
type SortValue = (typeof SORT_KEYS)[number];

export function PropertiesBrowser(props: {
  properties: Property[];
  cities: string[];
}) {
  return (
    <Suspense fallback={null}>
      <PropertiesBrowserInner {...props} />
    </Suspense>
  );
}

function PropertiesBrowserInner({
  properties,
  cities,
}: {
  properties: Property[];
  cities: string[];
}) {
  const { t } = useLanguage();
  const params = useSearchParams();
  const initialPriceIdx = (() => {
    const min = Number(params.get("minPrice") || 0);
    const max = Number(params.get("maxPrice") || Infinity);
    const idx = PRICE_RANGES.findIndex((r) => r.min === min && r.max === max);
    return idx >= 0 ? idx : 0;
  })();

  const [city, setCity] = useState<string>(params.get("city") ?? "");
  const [type, setType] = useState<string>(params.get("type") ?? "");
  const [priceIdx, setPriceIdx] = useState<number>(initialPriceIdx);
  const [sort, setSort] = useState<SortValue>("newest");

  const filtered = useMemo(() => {
    const range = PRICE_RANGES[priceIdx];
    let list = properties.filter((p) => {
      if (city && p.city !== city) return false;
      if (type && p.type !== type) return false;
      if (p.price < range.min || p.price > range.max) return false;
      return true;
    });
    list = [...list];
    if (sort === "priceDesc") list.sort((a, b) => b.price - a.price);
    else if (sort === "priceAsc") list.sort((a, b) => a.price - b.price);
    else if (sort === "areaDesc") list.sort((a, b) => b.area - a.area);
    return list;
  }, [properties, city, type, priceIdx, sort]);

  const reset = () => {
    setCity("");
    setType("");
    setPriceIdx(0);
    setSort("newest");
  };

  return (
    <div>
      {/* FILTERS */}
      <div className="bg-[var(--background-elev)] border-y border-[var(--border)] mb-12">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-6 grid grid-cols-2 md:grid-cols-5 gap-4">
          <FilterSelect
            label={t.search.location}
            value={city}
            onChange={setCity}
            options={[
              { value: "", label: t.search.allLocations },
              ...cities.map((c) => ({ value: c, label: c })),
            ]}
          />
          <FilterSelect
            label={t.search.type}
            value={type}
            onChange={setType}
            options={[
              { value: "", label: t.search.allTypes },
              ...TYPES.map((tp) => ({ value: tp, label: t.types[tp] })),
            ]}
          />
          <FilterSelect
            label={t.search.budget}
            value={String(priceIdx)}
            onChange={(v) => setPriceIdx(Number(v))}
            options={PRICE_RANGES.map((r, i) => ({
              value: String(i),
              label: t.priceRanges[r.key],
            }))}
          />
          <FilterSelect
            label={t.search.sort}
            value={sort}
            onChange={(v) => setSort(v as SortValue)}
            options={SORT_KEYS.map((s) => ({ value: s, label: t.sort[s] }))}
          />
          <button
            onClick={reset}
            className="text-[11px] tracking-[0.22em] uppercase text-muted hover:text-accent transition self-end pb-3.5"
          >
            {t.common.reset}
          </button>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <p className="text-sm text-muted mb-8">
          {t.search.results(filtered.length)}
        </p>

        {filtered.length === 0 ? (
          <div className="py-32 text-center">
            <p className="font-serif text-2xl italic mb-4">
              {t.search.noResults}
            </p>
            <button
              onClick={reset}
              className="text-[11px] tracking-[0.22em] uppercase text-accent border-b border-accent pb-1"
            >
              {t.search.noResultsCta}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((p, i) => (
              <PropertyCard key={p.id} property={p} priority={i < 3} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function FilterSelect({
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
    <label className="block">
      <span className="block text-[10px] tracking-[0.22em] uppercase text-muted mb-2">
        {label}
      </span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="appearance-none w-full bg-[var(--background)] border border-[var(--border)] focus:border-accent transition px-4 py-3 text-sm pr-10 cursor-pointer"
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <svg
          className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </label>
  );
}
