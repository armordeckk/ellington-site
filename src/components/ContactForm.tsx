"use client";

import { useState } from "react";

const SUBJECTS = [
  "Acquisition d'un bien",
  "Estimation d'un bien",
  "Vente d'un bien",
  "Location saisonnière",
  "Autre demande",
];

export function ContactForm() {
  const [state, setState] = useState<"idle" | "loading" | "ok" | "err">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    // TODO: wire to /api/contact (email or CRM webhook).
    await new Promise((r) => setTimeout(r, 700));
    setState("ok");
    (e.target as HTMLFormElement).reset();
  }

  if (state === "ok") {
    return (
      <div className="bg-[var(--background-card)] border border-accent/40 p-12 text-center">
        <p className="font-serif text-3xl italic text-accent mb-4">Merci.</p>
        <p className="text-muted-strong">
          Votre message a bien été reçu. Un conseiller vous recontactera sous
          24 heures, en toute confidentialité.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-[var(--background-card)] border border-[var(--border)] p-8 md:p-12 space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Prénom *" name="firstName" required />
        <Field label="Nom *" name="lastName" required />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Email *" name="email" type="email" required />
        <Field label="Téléphone" name="phone" type="tel" />
      </div>

      <label className="block">
        <span className="block text-[10px] tracking-[0.22em] uppercase text-muted mb-2">
          Objet *
        </span>
        <select
          name="subject"
          required
          className="appearance-none w-full bg-[var(--background)] border border-[var(--border)] focus:border-accent transition px-4 py-3.5 text-sm cursor-pointer"
          defaultValue=""
        >
          <option value="" disabled>
            Sélectionnez un objet
          </option>
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="block text-[10px] tracking-[0.22em] uppercase text-muted mb-2">
          Votre message *
        </span>
        <textarea
          name="message"
          required
          rows={6}
          className="w-full bg-[var(--background)] border border-[var(--border)] focus:border-accent transition px-4 py-3.5 text-sm resize-none"
          placeholder="Décrivez votre projet ou votre demande…"
        />
      </label>

      <label className="flex items-start gap-3 text-xs text-muted">
        <input type="checkbox" required className="mt-1 accent-[var(--accent)]" />
        <span>
          J&apos;accepte que mes informations soient utilisées pour me
          recontacter dans le cadre de ma demande.
        </span>
      </label>

      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full md:w-auto px-10 py-4 bg-accent hover:bg-accent-hover text-[var(--background)] text-[11px] tracking-[0.22em] uppercase transition disabled:opacity-60"
      >
        {state === "loading" ? "Envoi…" : "Envoyer le message"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-[10px] tracking-[0.22em] uppercase text-muted mb-2">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-[var(--background)] border border-[var(--border)] focus:border-accent transition px-4 py-3.5 text-sm"
      />
    </label>
  );
}
