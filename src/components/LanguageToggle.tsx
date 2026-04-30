"use client";

import { LANGS } from "@/lib/i18n";
import { useLanguage } from "./LanguageProvider";

export function LanguageToggle({
  className = "",
  overImage = false,
}: {
  className?: string;
  overImage?: boolean;
}) {
  const { lang, setLang } = useLanguage();
  return (
    <div
      className={`inline-flex items-center text-[11px] tracking-[0.18em] uppercase ${className}`}
      role="group"
      aria-label="Language"
    >
      {LANGS.map((l, i) => (
        <span key={l.code} className="flex items-center">
          <button
            type="button"
            onClick={() => setLang(l.code)}
            className={`transition px-1 py-1 ${
              lang === l.code
                ? overImage
                  ? "text-white"
                  : "text-accent"
                : overImage
                  ? "text-white/50 hover:text-white"
                  : "text-muted hover:text-foreground"
            }`}
            aria-pressed={lang === l.code}
          >
            {l.label}
          </button>
          {i < LANGS.length - 1 && (
            <span className={`mx-0.5 ${overImage ? "text-white/30" : "text-muted/40"}`}>
              |
            </span>
          )}
        </span>
      ))}
    </div>
  );
}
