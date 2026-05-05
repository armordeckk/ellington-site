"use client";

import { useTransition } from "react";
import { logout } from "@/app/actions/auth";

export function LogoutButton() {
  const [pending, startTransition] = useTransition();

  return (
    <button
      type="button"
      onClick={() => startTransition(() => logout())}
      disabled={pending}
      className="self-start text-[11px] tracking-[0.22em] uppercase text-muted-strong hover:text-accent transition disabled:opacity-50"
    >
      {pending ? "..." : "Se déconnecter"}
    </button>
  );
}
