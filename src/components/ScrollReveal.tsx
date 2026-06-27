"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Global scroll-reveal observer. Any element tagged with `data-reveal`
// fades/slides in the first time it enters the viewport. Mounted once in the
// root layout — re-scans on every route change so newly rendered pages animate
// too. Pair with the [data-reveal] rules in globals.css.
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (els.length === 0) return;

    // Reduced-motion users get content immediately (CSS already shows it).
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      // threshold 0 = fire as soon as any part enters; the -12% bottom margin
      // delays the reveal until the element is a little way into view. Works for
      // sections of any height (a percentage threshold can fail very tall ones
      // on large desktop viewports).
      { threshold: 0, rootMargin: "0px 0px -12% 0px" },
    );

    // Always observe — the observer reveals in-view elements on the next frame
    // and below-the-fold elements as they scroll into view. (A manual
    // "above-the-fold" shortcut races with browser scroll-restoration and can
    // mark below-fold elements visible on load, which kills the animation.)
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
