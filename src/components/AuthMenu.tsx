"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export function AuthMenu({ overImage }: { overImage: boolean }) {
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

  // Avoid layout shift on first paint
  if (authed === null) return <span className="w-[80px]" aria-hidden />;

  const cls = `text-[13px] tracking-[0.18em] uppercase transition ${
    overImage ? "text-white/80 hover:text-white" : "text-muted-strong hover:text-foreground"
  }`;

  return authed ? (
    <Link href="/mes-favoris" className={cls} aria-label="Mes favoris">
      <span className="inline-flex items-center gap-2">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
          <path d="M12 21s-7-4.35-9.5-8.5C.5 8.5 3 4.5 7 4.5c2 0 3.5 1 5 3 1.5-2 3-3 5-3 4 0 6.5 4 4.5 8C19 16.65 12 21 12 21z" />
        </svg>
        Favoris
      </span>
    </Link>
  ) : (
    <Link href="/login" className={cls}>
      Connexion
    </Link>
  );
}
