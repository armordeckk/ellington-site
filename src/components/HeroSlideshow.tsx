"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1613553497126-a44624272024?auto=format&fit=crop&w=2400&q=85",
    alt: "Villa contemporaine pieds dans l'eau",
  },
  {
    src: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=2400&q=85",
    alt: "Piscine à débordement vue mer",
  },
  {
    src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=2400&q=85",
    alt: "Domaine de prestige Côte d'Azur",
  },
  {
    src: "/locations/riviera.jpg",
    alt: "Côte d'Azur — Riviera française",
  },
  {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2400&q=85",
    alt: "Villa Belle Époque à Cannes",
  },
];

const INTERVAL_MS = 6000;

export function HeroSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {slides.map((s, i) => (
        <div
          key={s.src}
          className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== active}
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}

      {/* progress indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Slide ${i + 1}`}
            onClick={() => setActive(i)}
            className="group relative h-px w-10 bg-white/20 overflow-hidden"
          >
            <span
              className={`absolute inset-0 bg-accent origin-left transition-transform ${
                i === active
                  ? "scale-x-100 duration-[6000ms] ease-linear"
                  : i < active
                    ? "scale-x-100 duration-300"
                    : "scale-x-0 duration-300"
              }`}
              style={{ transformOrigin: "left" }}
            />
          </button>
        ))}
      </div>
    </>
  );
}
