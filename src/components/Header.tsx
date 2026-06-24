"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "./LanguageProvider";
import { AuthMenu } from "./AuthMenu";

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

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while the fullscreen mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Pages whose top section is a full-bleed image hero — the header should
  // start transparent so the image flows behind it, then darken on scroll.
  const hasImageHero =
    pathname === "/" ||
    pathname === "/about" ||
    pathname === "/sell" ||
    pathname === "/locations";
  const overImage = hasImageHero && !scrolled;

  const navLinks = [
    { href: "/properties", label: t.nav.buy },
    { href: "/sell", label: t.nav.sell },
    { href: "/locations", label: t.nav.regionsNav },
    { href: "/about", label: t.nav.about },
  ];

  return (
    <>
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || !hasImageHero
          ? "bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div
        className={`w-full px-6 md:px-12 h-[72px] flex items-center justify-between transition-colors ${
          overImage ? "text-white" : "text-black"
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
          className="flex items-center gap-2.5 hover:opacity-80 transition"
        >
          <Logo className="h-6 w-[18px]" invert={overImage} black={!overImage} />
          <span className="font-serif text-lg md:text-xl tracking-[0.2em] uppercase leading-none">
            Ellington
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`type-nav uppercase transition ${
                overImage
                  ? "text-white/80 hover:text-white"
                  : "text-neutral-700 hover:text-black"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <LanguageToggle overImage={overImage} />
          <Link
            href="/contact"
            className={`type-button px-6 py-2.5 border transition ${
              overImage
                ? "border-white/60 text-white hover:bg-white hover:text-accent"
                : "border-neutral-300 text-neutral-500 hover:border-black hover:text-black"
            }`}
          >
            {t.nav.contact}
          </Link>
          <AuthMenu overImage={overImage} />
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
    </header>

      {/* Fullscreen mobile overlay menu — rendered OUTSIDE <header> so the
          header's backdrop-blur (which creates a containing block for fixed
          children) can't collapse this overlay to height 0 when scrolled. */}
      {open && (
        <div className="md:hidden fixed inset-x-0 top-[72px] bottom-0 z-40 bg-[var(--background)] text-foreground animate-[fadeIn_0.25s_ease-out] flex flex-col overflow-y-auto">
          <nav className="flex-1 px-8 py-12 flex flex-col gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-serif text-3xl tracking-[0.04em] uppercase text-foreground hover:text-link transition"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2 text-base tracking-[0.18em] uppercase text-muted-strong">
              <AuthMenu variant="mobile" onNavigate={() => setOpen(false)} />
            </div>
          </nav>
          <div className="px-8 pb-12">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block text-sm tracking-[0.22em] uppercase px-[60px] py-4 bg-accent text-white text-center"
            >
              {t.nav.contact}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
