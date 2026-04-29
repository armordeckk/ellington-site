"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { dict, type Dict, type Lang } from "@/lib/i18n";

interface Ctx {
  lang: Lang;
  t: Dict;
  setLang: (l: Lang) => void;
}

const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "ellington:lang";

function detectInitialLang(): Lang {
  if (typeof window === "undefined") return "fr";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "fr" || stored === "en") return stored;
  // Auto-detect from browser
  const nav = window.navigator.language.toLowerCase();
  if (nav.startsWith("fr")) return "fr";
  return "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const initial = detectInitialLang();
    setLangState(initial);
    setHydrated(true);
  }, []);

  // Sync <html lang> for accessibility / SEO
  useEffect(() => {
    if (hydrated) {
      document.documentElement.lang = lang;
    }
  }, [lang, hydrated]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // ignore quota / private mode
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, t: dict[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    // Safe fallback so components used at SSR / outside the provider still work.
    return { lang: "fr", t: dict.fr, setLang: () => {} };
  }
  return ctx;
}
