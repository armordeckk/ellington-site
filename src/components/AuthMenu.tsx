"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

interface Props {
  overImage?: boolean;
  variant?: "desktop" | "mobile";
  onNavigate?: () => void;
}

export function AuthMenu({ overImage = false, variant = "desktop", onNavigate }: Props) {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => setAuthed(Boolean(data.user)));
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setAuthed(Boolean(session?.user));
    });
    return () => sub.subscription.unsubscribe();
  }, [pathname]);

  // Desktop : avoid layout shift on first paint
  if (authed === null) {
    return variant === "desktop" ? <span className="w-[80px]" aria-hidden /> : null;
  }

  const desktopCls = `text-[13px] tracking-[0.18em] uppercase transition ${
    overImage ? "text-white/80 hover:text-white" : "text-muted-strong hover:text-foreground"
  }`;

  const mobileCls = "text-sm tracking-[0.18em] uppercase text-muted-strong";

  const cls = variant === "desktop" ? desktopCls : mobileCls;

  return authed ? (
    <Link
      href="/mes-favoris"
      className={cls}
      aria-label="Mes favoris"
      onClick={onNavigate}
    >
      <span className="inline-flex items-center gap-2">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
          <path d="M12 21s-7-4.35-9.5-8.5C.5 8.5 3 4.5 7 4.5c2 0 3.5 1 5 3 1.5-2 3-3 5-3 4 0 6.5 4 4.5 8C19 16.65 12 21 12 21z" />
        </svg>
        Favoris
      </span>
    </Link>
  ) : (
    <Link href="/login" className={cls} onClick={onNavigate}>
      Connexion
    </Link>
  );
}
