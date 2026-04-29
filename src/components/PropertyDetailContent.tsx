"use client";

import Link from "next/link";
import { PropertyGallery } from "./PropertyGallery";
import { PropertyCard } from "./PropertyCard";
import { formatPrice } from "@/lib/properties";
import { useLanguage } from "./LanguageProvider";
import type { Property } from "@/lib/types";

export function PropertyDetailContent({
  property,
  similar,
}: {
  property: Property;
  similar: Property[];
}) {
  const { t } = useLanguage();
  const typeKey = property.type as keyof typeof t.types;

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <Link
          href="/properties"
          className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-muted-strong hover:text-accent mb-10"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M15 6l-6 6 6 6" />
          </svg>
          {t.common.backToPortfolio}
        </Link>

        {/* HEADER */}
        <div className="mb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 text-muted-strong text-sm mb-4">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2c-3.5 0-6 2.5-6 6 0 4 6 12 6 12s6-8 6-12c0-3.5-2.5-6-6-6z" />
                <circle cx="12" cy="8" r="2" />
              </svg>
              <span>{property.city}</span>
              <span className="text-muted">·</span>
              <span>{t.types[typeKey] ?? property.type}</span>
              {property.isExclusive && (
                <>
                  <span className="text-muted">·</span>
                  <span className="text-accent text-[10px] tracking-[0.22em] uppercase">
                    {t.propertyDetail.exclusive}
                  </span>
                </>
              )}
            </div>
            <h1 className="font-serif text-4xl md:text-6xl mb-3">{property.title}</h1>
            {property.subtitle && (
              <p className="text-lg text-muted-strong italic font-serif">
                {property.subtitle}
              </p>
            )}
          </div>
          <div className="text-left lg:text-right">
            <p className="text-[11px] tracking-[0.22em] uppercase text-muted mb-1">
              {t.propertyDetail.price}
            </p>
            <p className="font-serif text-4xl text-accent">
              {formatPrice(property.price)}
            </p>
            <p className="text-xs text-muted mt-1">
              {t.propertyDetail.reference} {property.reference}
            </p>
          </div>
        </div>

        {/* GALLERY */}
        <PropertyGallery pictures={property.pictures} title={property.title} />

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
          <div className="lg:col-span-2 space-y-12">
            {/* KEY FACTS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[var(--border)] border border-[var(--border)]">
              {[
                { icon: "bed", label: t.propertyDetail.bedrooms, value: property.bedrooms },
                { icon: "bath", label: t.propertyDetail.bathrooms, value: property.bathrooms },
                { icon: "area", label: t.propertyDetail.area, value: `${property.area} m²` },
                {
                  icon: "calendar",
                  label:
                    property.yearBuilt && property.yearBuilt < 1900
                      ? t.propertyDetail.origin
                      : t.propertyDetail.year,
                  value: property.yearBuilt ?? "—",
                },
              ].map((s) => (
                <div key={s.label} className="bg-[var(--background-card)] p-6 text-center">
                  <div className="flex justify-center mb-3 text-accent">
                    <KeyIcon name={s.icon} />
                  </div>
                  <p className="font-serif text-2xl mb-1">{s.value}</p>
                  <p className="text-[10px] tracking-[0.22em] uppercase text-muted">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* DESCRIPTION */}
            <div>
              <h2 className="font-serif text-3xl mb-6">
                <em className="italic">{t.propertyDetail.description}</em>
              </h2>
              <p className="text-muted-strong text-lg leading-[1.85] whitespace-pre-line">
                {property.description}
              </p>
            </div>

            {/* FEATURES */}
            {property.features.length > 0 && (
              <div>
                <h2 className="font-serif text-3xl mb-6">
                  <em className="italic">{t.propertyDetail.features}</em>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.features.map((f) => (
                    <div
                      key={f}
                      className="flex items-center gap-3 py-3 border-b border-[var(--border)]"
                    >
                      <span className="text-accent">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                      <span className="text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* LOCATION */}
            <div>
              <h2 className="font-serif text-3xl mb-6">
                <em className="italic">{t.propertyDetail.location}</em>
              </h2>
              <div className="aspect-[16/9] bg-[var(--background-card)] border border-[var(--border)] flex items-center justify-center text-muted relative overflow-hidden">
                {property.coordinates ? (
                  <iframe
                    title="Map"
                    src={`https://www.openstreetmap.org/export/embed.html?bbox=${
                      property.coordinates.lng - 0.05
                    }%2C${property.coordinates.lat - 0.03}%2C${
                      property.coordinates.lng + 0.05
                    }%2C${
                      property.coordinates.lat + 0.03
                    }&layer=mapnik&marker=${property.coordinates.lat}%2C${property.coordinates.lng}`}
                    className="absolute inset-0 w-full h-full grayscale opacity-90"
                    loading="lazy"
                  />
                ) : (
                  <p className="text-sm">{t.propertyDetail.mapUnavailable}</p>
                )}
              </div>
              <p className="text-sm text-muted mt-4">
                {t.propertyDetail.addressNote}
              </p>
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-6 lg:sticky lg:top-28 self-start">
            <div className="bg-[var(--background-card)] border border-[var(--border)] p-8">
              <h3 className="font-serif text-2xl mb-2">
                {t.propertyDetail.interestedTitle}
              </h3>
              <p className="text-sm text-muted mb-6">
                {t.propertyDetail.interestedBody}
              </p>
              <Link
                href={`/contact?property=${property.reference}`}
                className="block text-center px-5 py-3.5 bg-accent hover:bg-accent-hover text-[var(--background)] text-[11px] tracking-[0.22em] uppercase mb-3"
              >
                {t.common.contactUs}
              </Link>
              <a
                href="tel:+33493123456"
                className="block text-center px-5 py-3.5 border border-[var(--border-strong)] hover:border-accent text-[11px] tracking-[0.22em] uppercase transition"
              >
                +33 4 93 12 34 56
              </a>
            </div>

            <div className="bg-[var(--background-card)] border border-[var(--border)] p-8">
              <h3 className="font-serif text-2xl mb-5">
                {t.propertyDetail.yourAdvisor}
              </h3>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full bg-[var(--background-elev)] border border-[var(--border-strong)] flex items-center justify-center font-serif text-xl text-accent">
                  MM
                </div>
                <div>
                  <p className="font-serif text-lg">Marc Mehagnoul</p>
                  <p className="text-xs text-muted">
                    {t.propertyDetail.advisorRole}
                  </p>
                </div>
              </div>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-[10px] tracking-[0.22em] uppercase text-muted mb-1">
                    {t.propertyDetail.phone}
                  </dt>
                  <dd>+33 4 93 12 34 56</dd>
                </div>
                <div>
                  <dt className="text-[10px] tracking-[0.22em] uppercase text-muted mb-1">
                    {t.propertyDetail.email}
                  </dt>
                  <dd>contact@ellington.fr</dd>
                </div>
              </dl>
            </div>

            <div className="border border-accent/40 p-6">
              <h4 className="font-serif text-lg mb-2">
                {t.propertyDetail.confidentialTitle}
              </h4>
              <p className="text-xs text-muted leading-relaxed">
                {t.propertyDetail.confidentialBody}
              </p>
            </div>
          </aside>
        </div>

        {/* SIMILAR */}
        {similar.length > 0 && (
          <div className="mt-28 pt-20 border-t border-[var(--border)]">
            <h2 className="font-serif text-3xl md:text-4xl mb-10">
              {t.propertyDetail.similar}{" "}
              <em className="italic">{t.propertyDetail.similarAccent}</em>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {similar.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function KeyIcon({ name }: { name: string }) {
  const props = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
  };
  switch (name) {
    case "bed":
      return (
        <svg {...props}>
          <path d="M3 18v-6a3 3 0 013-3h12a3 3 0 013 3v6M3 14h18M7 11V8a1 1 0 011-1h3a1 1 0 011 1v3" />
        </svg>
      );
    case "bath":
      return (
        <svg {...props}>
          <path d="M4 12h16v5a3 3 0 01-3 3H7a3 3 0 01-3-3v-5zM6 12V7a2 2 0 012-2h2v3" />
        </svg>
      );
    case "area":
      return (
        <svg {...props}>
          <rect x="4" y="4" width="16" height="16" />
          <path d="M4 9h3M4 15h3M9 4v3M15 4v3M9 20v-3M15 20v-3M17 9h3M17 15h3" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...props}>
          <rect x="4" y="5" width="16" height="16" rx="1" />
          <path d="M4 10h16M9 3v4M15 3v4" />
        </svg>
      );
    default:
      return null;
  }
}
