"use client";

import Image from "next/image";
import { useState } from "react";

interface Picture {
  url: string;
  alt?: string;
}

export function PropertyGallery({ pictures, title }: { pictures: Picture[]; title: string }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  if (pictures.length === 0) return null;
  const main = pictures[active];

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        <button
          type="button"
          onClick={() => setLightbox(true)}
          className="relative lg:col-span-2 aspect-[4/3] overflow-hidden group cursor-zoom-in"
        >
          <Image
            src={main.url}
            alt={main.alt ?? title}
            fill
            priority
            sizes="(min-width: 1024px) 66vw, 100vw"
            className="object-cover transition-transform duration-[1500ms] group-hover:scale-[1.02]"
          />
          <div className="absolute bottom-4 right-4 bg-[var(--background)]/80 backdrop-blur-sm px-4 py-2 text-[10px] tracking-[0.22em] uppercase">
            {active + 1} / {pictures.length}
          </div>
        </button>

        <div className="grid grid-cols-2 gap-2">
          {pictures.slice(1, 5).map((p, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setActive(i + 1);
                setLightbox(true);
              }}
              className="relative aspect-square overflow-hidden group"
            >
              <Image
                src={p.url}
                alt={p.alt ?? `${title} — photo ${i + 2}`}
                fill
                sizes="(min-width: 1024px) 16vw, 50vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {i === 3 && pictures.length > 5 && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white">
                  <span className="font-serif text-2xl">+{pictures.length - 5}</span>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6"
          onClick={() => setLightbox(false)}
        >
          <button
            type="button"
            onClick={() => setLightbox(false)}
            className="absolute top-6 right-6 text-white p-3"
            aria-label="Fermer"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActive((a) => (a - 1 + pictures.length) % pictures.length);
            }}
            className="absolute left-6 text-white p-3"
            aria-label="Précédent"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
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
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActive((a) => (a + 1) % pictures.length);
            }}
            className="absolute right-6 text-white p-3"
            aria-label="Suivant"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm">
            {active + 1} / {pictures.length}
          </p>
        </div>
      )}
    </>
  );
}
