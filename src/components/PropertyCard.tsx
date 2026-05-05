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
  const typeKey = property.type as keyof typeof t.types;
  return (
    <Link
      href={`/properties/${property.id}`}
      className="group block bg-[var(--background-card)] border border-[var(--border)] hover:border-[var(--border-strong)] transition-all duration-500 overflow-hidden"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={cover.url}
          alt={cover.alt ?? property.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          priority={priority}
          className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
        {property.isExclusive && (
          <span className="absolute top-4 left-4 text-[10px] tracking-[0.22em] uppercase px-3 py-1.5 bg-accent text-[var(--background)]">
            {t.propertyDetail.exclusive}
          </span>
        )}
        <div className="absolute top-4 right-4">
          <FavoriteButton propertyId={property.id} initialFavored={initialFavored} />
        </div>
        <div className="absolute bottom-4 left-5 right-5 flex justify-between items-end text-white">
          <div>
            <p className="text-[10px] tracking-[0.22em] uppercase opacity-80 mb-1">
              {property.city}
            </p>
            <p className="text-[10px] tracking-[0.22em] uppercase opacity-60">
              {t.types[typeKey] ?? property.type}
            </p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-serif text-2xl text-foreground group-hover:text-accent transition mb-1">
          {property.title}
        </h3>
        {property.subtitle && (
          <p className="text-sm text-muted mb-4 line-clamp-1">{property.subtitle}</p>
        )}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
          <span className="font-serif text-xl text-accent">
            {formatPriceShort(property.price)}
          </span>
          <div className="flex items-center gap-4 text-xs text-muted">
            {property.bedrooms > 0 && (
              <span>{property.bedrooms} {t.propertyDetail.shortBed}</span>
            )}
            {property.bathrooms > 0 && (
              <span>{property.bathrooms} {t.propertyDetail.shortBath}</span>
            )}
            {property.area > 0 && <span>{property.area} m²</span>}
          </div>
        </div>
      </div>
    </Link>
  );
}
