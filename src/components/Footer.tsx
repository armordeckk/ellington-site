"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { useLanguage } from "./LanguageProvider";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Logo className="w-6 h-8" />
              <span className="font-serif text-xl tracking-[0.25em] uppercase">
                Ellington
              </span>
            </Link>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.22em] uppercase text-muted-strong mb-5">
              {t.footer.explore}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/properties" className="text-foreground/90 hover:text-accent transition">
                  {t.nav.properties}
                </Link>
              </li>
              <li>
                <Link href="/rentals" className="text-foreground/90 hover:text-accent transition">
                  {t.nav.rentals}
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-foreground/90 hover:text-accent transition">
                  {t.footer.regions}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-foreground/90 hover:text-accent transition">
                  {t.nav.about}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.22em] uppercase text-muted-strong mb-5">
              {t.footer.contact}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+33493123456" className="text-foreground/90 hover:text-accent transition">
                  +33 4 93 12 34 56
                </a>
              </li>
              <li>
                <a href="mailto:contact@ellington.fr" className="text-foreground/90 hover:text-accent transition">
                  contact@ellington.fr
                </a>
              </li>
              <li className="text-muted">{t.footer.cityLabel}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.22em] uppercase text-muted-strong mb-5">
              {t.footer.hours}
            </h4>
            <ul className="space-y-3 text-sm text-foreground/90">
              <li>{t.footer.monFri}</li>
              <li>{t.footer.sat}</li>
              <li className="text-muted">{t.footer.sun}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted">
          <p>{t.footer.rights(year)}</p>
          <div className="flex gap-6">
            <Link href="/legal" className="hover:text-foreground transition">
              {t.footer.legal}
            </Link>
            <Link href="/privacy" className="hover:text-foreground transition">
              {t.footer.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
