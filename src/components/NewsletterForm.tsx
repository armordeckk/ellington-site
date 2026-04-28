"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "ok" | "err">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setState("loading");
    // TODO: wire to /api/newsletter when backend is ready.
    await new Promise((r) => setTimeout(r, 600));
    setState("ok");
    setEmail("");
  }

  if (state === "ok") {
    return (
      <p className="text-accent font-serif text-xl italic">
        Merci, votre inscription est confirmée.
      </p>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Votre adresse email"
        className="flex-1 px-5 py-4 bg-[var(--background)] border border-[var(--border)] focus:border-accent transition text-sm"
      />
      <button
        type="submit"
        disabled={state === "loading"}
        className="px-7 py-4 bg-accent hover:bg-accent-hover text-[var(--background)] text-[11px] tracking-[0.22em] uppercase transition disabled:opacity-60"
      >
        {state === "loading" ? "..." : "S'inscrire"}
      </button>
    </form>
  );
}
