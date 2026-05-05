"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

interface Picture {
  url: string;
  alt?: string;
}

export function PropertyGallery({ pictures, title }: { pictures: Picture[]; title: string }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const thumbsRef = useRef<HTMLDivElement>(null);

  const total = pictures.length;
  const next = useCallback(() => setActive((a) => (a + 1) % total), [total]);
  const prev = useCallback(() => setActive((a) => (a - 1 + total) % total), [total]);

  // Keyboard navigation in lightbox
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(false);
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, next, prev]);

  // Auto-scroll the thumbnail strip to keep the active one visible
  useEffect(() => {
    const strip = thumbsRef.current;
    if (!strip) return;
    const child = strip.children[active] as HTMLElement | undefined;
    if (!child) return;
    const stripRect = strip.getBoundingClientRect();
    const childRect = child.getBoundingClientRect();
    const offset =
      child.offsetLeft - strip.offsetLeft - (stripRect.width - childRect.width) / 2;
    strip.scrollTo({ left: offset, behavior: "smooth" });
  }, [active]);

  if (total === 0) return null;
  const main = pictures[active];

  return (
    <>
      {/* MAIN IMAGE — full width with arrows + counter */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-[var(--background-card)] group">
        <button
          type="button"
          onClick={() => setLightbox(true)}
          className="absolute inset-0 cursor-zoom-in"
          aria-label="Agrandir la photo"
        >
          <Image
            src={main.url}
            alt={main.alt ?? title}
            fill
            priority
            sizes="(min-width: 1280px) 1400px, 100vw"
            className="object-cover"
          />
        </button>

        {/* Counter */}
        <div className="absolute bottom-5 right-5 bg-black/65 backdrop-blur-sm text-white px-4 py-2 text-[10px] tracking-[0.22em] uppercase pointer-events-none">
          {active + 1} / {total}
        </div>

        {/* Prev arrow */}
        {total > 1 && (
          <button
            type="button"
            onClick={prev}
            aria-label="Photo précédente"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/85 hover:bg-white text-[var(--brand-navy)] flex items-center justify-center transition opacity-0 group-hover:opacity-100 focus:opacity-100 shadow-lg"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
        )}

        {/* Next arrow */}
        {total > 1 && (
          <button
            type="button"
            onClick={next}
            aria-label="Photo suivante"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/85 hover:bg-white text-[var(--brand-navy)] flex items-center justify-center transition opacity-0 group-hover:opacity-100 focus:opacity-100 shadow-lg"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        )}
      </div>

      {/* THUMBNAIL STRIP — horizontal scroll, active highlighted */}
      {total > 1 && (
        <div
          ref={thumbsRef}
          className="mt-3 flex gap-2 overflow-x-auto scroll-smooth pb-2 -mx-6 md:mx-0 px-6 md:px-0 [scrollbar-width:thin]"
          style={{ scrollbarColor: "var(--border-strong) transparent" }}
        >
          {pictures.map((p, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Voir photo ${i + 1}`}
              aria-current={i === active}
              className={`relative flex-none w-[110px] sm:w-[140px] aspect-[4/3] overflow-hidden transition-all duration-300 ${
                i === active
                  ? "ring-2 ring-accent ring-offset-2 ring-offset-[var(--background)] opacity-100"
                  : "opacity-65 hover:opacity-100"
              }`}
            >
              <Image
                src={p.url}
                alt={p.alt ?? `${title} — photo ${i + 1}`}
                fill
                sizes="140px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6"
          onClick={() => setLightbox(false)}
        >
          <button
            type="button"
            onClick={() => setLightbox(false)}
            className="absolute top-6 right-6 text-white p-3 hover:bg-white/10 transition"
            aria-label="Fermer"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          {total > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Précédent"
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white p-3 hover:bg-white/10 transition"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M15 6l-6 6 6 6" />
              </svg>
            </button>
          )}

          <div
            className="relative max-w-6xl w-full aspect-[3/2]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={main.url}
              alt={main.alt ?? title}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          {total > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Suivant"
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white p-3 hover:bg-white/10 transition"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          )}

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm">
            {active + 1} / {total}
          </p>
        </div>
      )}
    </>
  );
}
