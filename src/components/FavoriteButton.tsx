"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toggleFavorite } from "@/app/actions/favorites";

export function FavoriteButton({
  propertyId,
  initialFavored = false,
  variant = "card",
}: {
  propertyId: string;
  initialFavored?: boolean;
  variant?: "card" | "detail";
}) {
  const router = useRouter();
  const [favored, setFavored] = useState(initialFavored);
  const [pending, startTransition] = useTransition();

  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    startTransition(async () => {
      const res = await toggleFavorite(propertyId);
      if (res.needsAuth) {
        router.push(`/login?next=/properties/${propertyId}`);
        return;
      }
      if (res.ok) setFavored(res.favored ?? false);
    });
  };

  const sizes =
    variant === "detail"
      ? "w-11 h-11"
      : "w-9 h-9";

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={pending}
      aria-label={favored ? "Retirer des favoris" : "Ajouter aux favoris"}
      aria-pressed={favored}
      className={`${sizes} flex items-center justify-center bg-white/90 backdrop-blur hover:bg-white transition shadow-sm disabled:opacity-60`}
    >
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill={favored ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.6"
        className={favored ? "text-accent" : "text-foreground"}
      >
        <path d="M12 21s-7-4.35-9.5-8.5C.5 8.5 3 4.5 7 4.5c2 0 3.5 1 5 3 1.5-2 3-3 5-3 4 0 6.5 4 4.5 8C19 16.65 12 21 12 21z" />
      </svg>
    </button>
  );
}
