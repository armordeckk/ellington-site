"use client";

import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { useLanguage } from "@/components/LanguageProvider";

export default function ContactPage() {
  const { t } = useLanguage();
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <header className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-[11px] tracking-[0.32em] uppercase text-accent mb-5">
            {t.contactPage.eyebrow}
          </p>
          <h1 className="font-serif text-5xl md:text-7xl mb-6">
            {t.contactPage.titleBefore}{" "}
            <em className="italic">{t.contactPage.titleAccent}</em>
          </h1>
          <p className="text-muted-strong text-lg">{t.contactPage.subtitle}</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <aside className="space-y-6">
            {/* Personal advisor block — humanises the form */}
            <div className="bg-[var(--background-card)] border border-[var(--border)] overflow-hidden">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/team/marc-mehagnoul.jpg"
                  alt="Marc Mehagnoul"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-7">
                <p className="text-[10px] tracking-[0.32em] uppercase text-accent mb-3">
                  {t.contactPage.advisorBlock.eyebrow}
                </p>
                <h3 className="font-serif text-2xl mb-1">Marc Mehagnoul</h3>
                <p className="text-xs text-muted mb-5">
                  {t.contactPage.advisorBlock.role}
                </p>
                <p className="text-sm text-muted-strong italic font-serif leading-[1.7] mb-5">
                  « {t.contactPage.advisorBlock.intro} »
                </p>
                <p className="font-serif text-accent">
                  {t.contactPage.advisorBlock.signature}
                </p>
              </div>
            </div>

            <div className="bg-[var(--background-card)] border border-[var(--border)] p-8">
              <h3 className="font-serif text-2xl mb-6">
                {t.contactPage.detailsTitle}
              </h3>
              <dl className="space-y-5 text-sm">
                <div>
                  <dt className="text-[10px] tracking-[0.22em] uppercase text-muted mb-2">
                    {t.contactPage.phone}
                  </dt>
                  <dd>
                    <a href="tel:+33674750703" className="hover:text-accent transition">
                      +33 6 74 75 07 03
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] tracking-[0.22em] uppercase text-muted mb-2">
                    {t.propertyDetail.email}
                  </dt>
                  <dd>
                    <a href="mailto:hello@ellington-international.fr" className="hover:text-accent transition">
                      hello@ellington-international.fr
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] tracking-[0.22em] uppercase text-muted mb-2">
                    {t.propertyDetail.location}
                  </dt>
                  <dd className="leading-relaxed whitespace-pre-line">
                    {t.contactPage.address}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="bg-[var(--background-card)] border border-[var(--border)] p-8">
              <h3 className="font-serif text-2xl mb-6">
                {t.contactPage.hoursTitle}
              </h3>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt>{t.contactPage.monFri}</dt>
                  <dd>{t.contactPage.monFriHours}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>{t.contactPage.sat}</dt>
                  <dd>{t.contactPage.satHours}</dd>
                </div>
                <div className="flex justify-between text-muted">
                  <dt>{t.contactPage.sun}</dt>
                  <dd>{t.contactPage.sunHours}</dd>
                </div>
              </dl>
            </div>

            <div className="border border-accent/40 p-6">
              <h4 className="font-serif text-lg mb-2">
                {t.contactPage.confidentialTitle}
              </h4>
              <p className="text-xs text-muted leading-relaxed">
                {t.contactPage.confidentialBody}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
