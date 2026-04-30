"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "./LanguageProvider";

export function Header() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On home, the hero is a full-screen image — keep header text white over it
  // until the user scrolls past. On every other page, white background starts
  // immediately so we use the dark text from the start.
  const isHome = pathname === "/";
  const overImage = isHome && !scrolled;

  const navLinks = [
    { href: "/properties", label: t.nav.properties },
    { href: "/rentals", label: t.nav.rentals },
    { href: "/blog", label: t.nav.journal },
    { href: "/about", label: t.nav.about },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? "bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div
        className={`max-w-[1400px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between transition-colors ${
          overImage ? "text-white" : "text-foreground"
        }`}
      >
        <Link
          href="/"
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center gap-3 hover:opacity-80 transition"
        >
          <Logo className="w-7 h-9" />
          <span className="font-serif text-2xl tracking-[0.25em] uppercase">
            Ellington
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[13px] tracking-[0.18em] uppercase transition ${
                overImage
                  ? "text-white/80 hover:text-white"
                  : "text-muted-strong hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <LanguageToggle overImage={overImage} />
          <Link
            href="/contact"
            className="text-[13px] tracking-[0.18em] uppercase px-5 py-2.5 bg-accent text-white hover:bg-accent-hover transition"
          >
            {t.nav.contact}
          </Link>
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <LanguageToggle overImage={overImage} />
          <button
            aria-label="Menu"
            className="p-2"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              {open ? (
                <path
                  d="M6 6 L18 18 M18 6 L6 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              ) : (
                <path
                  d="M4 7 H20 M4 12 H20 M4 17 H20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[var(--background-elev)] border-t border-[var(--border)] text-foreground">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-[0.18em] uppercase text-muted-strong"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="text-sm tracking-[0.18em] uppercase px-5 py-3 bg-accent text-white text-center mt-2"
            >
              {t.nav.contact}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
