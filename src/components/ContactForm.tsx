"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

export function ContactForm() {
  const { t } = useLanguage();
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
      <div className="bg-[var(--panel)] p-12 text-center">
        <p className="font-serif text-3xl italic text-accent mb-4">
          {t.contactPage.thanks}
        </p>
        <p className="text-muted-strong">{t.contactPage.successBody}</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="type-h3 mb-3">
        {t.contactPage.formTitle}
      </h2>
      <p className="text-muted mb-8">{t.contactPage.formSubtitle}</p>

      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field
            label={t.contactPage.firstName}
            name="firstName"
            required
            placeholder={t.contactPage.firstNamePh}
          />
          <Field
            label={t.contactPage.lastName}
            name="lastName"
            required
            placeholder={t.contactPage.lastNamePh}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field
            label={t.contactPage.emailField}
            name="email"
            type="email"
            required
            placeholder={t.contactPage.emailPh}
          />
          <Field
            label={t.contactPage.phone}
            name="phone"
            type="tel"
            placeholder={t.contactPage.phonePh}
          />
        </div>

        <label className="block">
          <span className="block text-[10px] tracking-[0.22em] uppercase text-muted mb-2">
            {t.contactPage.messageLabel} <span className="text-red-500">*</span>
          </span>
          <textarea
            name="message"
            required
            rows={5}
            className="w-full bg-[var(--panel)] border border-transparent focus:border-accent transition px-4 py-3.5 text-sm resize-none placeholder:text-muted/70"
            placeholder={t.contactPage.messagePlaceholder}
          />
        </label>

        <p className="text-xs text-muted leading-relaxed">
          {t.contactPage.disclaimer}
        </p>

        <button
          type="submit"
          disabled={state === "loading"}
          className="w-full flex items-center justify-center gap-2 px-10 py-4 bg-accent hover:bg-accent-hover text-white text-[11px] tracking-[0.22em] uppercase transition disabled:opacity-60"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
          </svg>
          {state === "loading" ? t.common.sending : t.contactPage.sendMessage}
        </button>
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="block text-[10px] tracking-[0.22em] uppercase text-muted mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-[var(--panel)] border border-transparent focus:border-accent transition px-4 py-3.5 text-sm placeholder:text-muted/70"
      />
    </label>
  );
}
