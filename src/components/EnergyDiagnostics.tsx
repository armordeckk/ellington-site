"use client";

import { useLanguage } from "./LanguageProvider";
import type { Property } from "@/lib/types";

const CLASSES = ["A", "B", "C", "D", "E", "F", "G"] as const;
type EnergyClass = (typeof CLASSES)[number];

// French DPE colour scale: green → red.
const ENERGY_COLOR: Record<EnergyClass, string> = {
  A: "#319834",
  B: "#5fad33",
  C: "#c6cc28",
  D: "#f4d000",
  E: "#f3a13e",
  F: "#e8741e",
  G: "#d62517",
};

// GHG (greenhouse gas) scale: light blue → deep navy, per Figma.
const GHG_COLOR: Record<EnergyClass, string> = {
  A: "#b4cdec",
  B: "#8db0dd",
  C: "#6892cd",
  D: "#4673b4",
  E: "#315689",
  F: "#223e64",
  G: "#172b48",
};

// Horizontal flat scale (Figma) — thin bars with the active class shown as a
// taller labelled block.
function ClassScale({
  label,
  active,
  colors,
}: {
  label: string;
  active?: EnergyClass;
  colors: Record<EnergyClass, string>;
}) {
  return (
    <div>
      <p className="text-[10px] tracking-[0.22em] uppercase text-muted mb-3">
        {label}
      </p>
      <div className="flex items-center gap-1.5">
        {CLASSES.map((c) => {
          const isActive = c === active;
          return isActive ? (
            <div
              key={c}
              className="flex-1 h-9 flex items-center justify-center text-white text-sm font-bold"
              style={{ backgroundColor: colors[c] }}
            >
              {c}
            </div>
          ) : (
            <div
              key={c}
              className="flex-1 h-2.5"
              style={{
                backgroundColor: colors[c],
                opacity: active ? 0.55 : 1,
              }}
            />
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
      <h2 className="font-serif italic text-3xl mb-6">
        {t.propertyDetail.energyTitle}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
        <ClassScale
          label={t.propertyDetail.energyClass}
          active={property.energyClass}
          colors={ENERGY_COLOR}
        />
        <ClassScale
          label={t.propertyDetail.ghgClass}
          active={property.ghgClass}
          colors={GHG_COLOR}
        />
      </div>
      {hasDiag ? (
        <>
          <p className="text-xs text-muted mt-6">
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
        <p className="text-xs text-muted mt-6 italic">
          {t.propertyDetail.energyUnavailable}
        </p>
      )}
    </div>
  );
}
