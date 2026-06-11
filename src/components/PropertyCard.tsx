"use client";

import Link from "next/link";
import Image from "next/image";
import type { Property } from "@/lib/types";
import { formatPriceShort } from "@/lib/properties";
import { useLanguage } from "./LanguageProvider";
import { FavoriteButton } from "./FavoriteButton";

export function PropertyCard({
  property,
  priority = false,
  initialFavored = false,
}: {
  property: Property;
  priority?: boolean;
  initialFavored?: boolean;
}) {
  const { t } = useLanguage();
  const cover = property.pictures[0];
  return (
    <Link
      href={`/properties/${property.id}`}
      className="group flex flex-col h-full"
    >
      {/* IMAGE */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--background-card)]">
        {cover && (
          <Image
            src={cover.url}
            alt={cover.alt ?? property.title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            priority={priority}
            className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
          />
        )}
        {property.isExclusive && (
          <span className="absolute top-4 left-4 text-[10px] tracking-[0.22em] uppercase px-3 py-1.5 bg-accent text-white">
            {t.propertyDetail.exclusive}
          </span>
        )}
        <div className="absolute top-4 right-4">
          <FavoriteButton propertyId={property.id} initialFavored={initialFavored} />
        </div>
      </div>

      {/* INFO — bordered box (Figma) */}
      <div className="border border-[var(--border)] group-hover:border-[var(--border-strong)] transition p-6 flex flex-col flex-1">
        <div className="flex items-center gap-1.5 text-accent text-[10px] tracking-[0.22em] uppercase mb-3">
          <PinIcon />
          {property.city}
        </div>
        <h3 className="type-h3 group-hover:text-link transition mb-2 line-clamp-1">
          {property.title}
        </h3>
        <p className="text-sm text-muted mb-5">
          {formatPriceShort(property.price)}
          {property.pricePeriod && (
            <span className="ml-1">
              /{property.pricePeriod === "week" ? t.priceUnit.week : t.priceUnit.month}
            </span>
          )}
        </p>
        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted">
          {property.bedrooms > 0 && (
            <span className="flex items-center gap-1.5">
              <StatIcon name="bed" />
              {property.bedrooms}
            </span>
          )}
          {property.bathrooms > 0 && (
            <span className="flex items-center gap-1.5">
              <StatIcon name="bath" />
              {property.bathrooms}
            </span>
          )}
          {property.area > 0 && (
            <span className="flex items-center gap-1.5">
              <StatIcon name="area" />
              {property.area}m²
            </span>
          )}
          {property.landArea && (
            <span className="flex items-center gap-1.5">
              <StatIcon name="land" />
              {property.landArea}m²
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

function PinIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2c-3.5 0-6 2.5-6 6 0 4 6 12 6 12s6-8 6-12c0-3.5-2.5-6-6-6z" />
      <circle cx="12" cy="8" r="2" />
    </svg>
  );
}

function StatIcon({ name }: { name: "bed" | "bath" | "area" | "land" }) {
  const p = {
    width: 15,
    height: 15,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.3,
  };
  if (name === "bed")
    return (
      <svg {...p}>
        <path d="M3 18v-6a3 3 0 013-3h12a3 3 0 013 3v6M3 14h18M7 11V8a1 1 0 011-1h3a1 1 0 011 1v3" />
      </svg>
    );
  if (name === "bath")
    return (
      <svg {...p}>
        <path d="M4 12h16v5a3 3 0 01-3 3H7a3 3 0 01-3-3v-5zM6 12V7a2 2 0 012-2h2v3" />
      </svg>
    );
  if (name === "land")
    return (
      <svg {...p}>
        <rect x="4" y="4" width="16" height="16" />
        <path d="M7 16l3-3.5 2.5 3L16 11l3 5" />
      </svg>
    );
  return (
    <svg {...p}>
      <rect x="4" y="4" width="16" height="16" />
      <path d="M4 9h3M4 15h3M9 4v3M15 4v3M9 20v-3M15 20v-3M17 9h3M17 15h3" />
    </svg>
  );
}
