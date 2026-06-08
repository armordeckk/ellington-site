"use client";

import { useLanguage } from "./LanguageProvider";
import type { Property } from "@/lib/types";

const CLASSES = ["A", "B", "C", "D", "E", "F", "G"] as const;
type EnergyClass = (typeof CLASSES)[number];

// French DPE colour scale: green → red.
const CLASS_COLOR: Record<EnergyClass, string> = {
  A: "#319834",
  B: "#5fad33",
  C: "#c6cc28",
  D: "#f4d000",
  E: "#f3a13e",
  F: "#e8741e",
  G: "#d62517",
};

function ClassScale({
  label,
  active,
}: {
  label: string;
  active?: EnergyClass;
}) {
  return (
    <div>
      <p className="text-[10px] tracking-[0.22em] uppercase text-muted mb-3 text-center">
        {label}
      </p>
      <div className="flex flex-col gap-1">
        {CLASSES.map((c) => {
          const isActive = c === active;
          // Width grows as we go down the scale, like the official French DPE label.
          const w = 45 + CLASSES.indexOf(c) * 7;
          return (
            <div
              key={c}
              className={`flex items-center transition-opacity ${
                active && !isActive ? "opacity-30" : "opacity-100"
              }`}
            >
              <div
                className="relative flex items-center justify-between px-3 py-1.5 text-xs font-semibold text-white"
                style={{
                  width: `${w}%`,
                  backgroundColor: CLASS_COLOR[c],
                  clipPath:
                    "polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%)",
                }}
              >
                <span>{c}</span>
                {isActive && (
                  <span className="ml-2 inline-flex items-center justify-center w-6 h-6 bg-[var(--background)] text-foreground text-xs font-bold border border-[var(--border-strong)]">
                    {c}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function EnergyDiagnostics({ property }: { property: Property }) {
  const { t } = useLanguage();
  const hasDiag = property.energyClass || property.ghgClass;

  return (
    <div>
      <h2 className="font-serif text-3xl mb-6">
        <em className="italic">{t.propertyDetail.energyTitle}</em>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 bg-[var(--background-card)] border border-[var(--border)] p-8">
        <ClassScale
          label={t.propertyDetail.energyClass}
          active={property.energyClass}
        />
        <ClassScale
          label={t.propertyDetail.ghgClass}
          active={property.ghgClass}
        />
      </div>
      {hasDiag ? (
        <>
          <p className="text-xs text-muted mt-4">
            {t.propertyDetail.energyDate(property.energyDiagnosticDate ?? "")}
          </p>
          {property.energyCostMin && property.energyCostMax && (
            <p className="text-xs text-muted mt-1">
              {t.propertyDetail.energyCost(
                property.energyCostMin,
                property.energyCostMax,
              )}
            </p>
          )}
        </>
      ) : (
        <p className="text-xs text-muted mt-4 italic">
          {t.propertyDetail.energyUnavailable}
        </p>
      )}
    </div>
  );
}
