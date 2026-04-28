import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Ellington",
  description:
    "Contactez Ellington, agence immobilière de prestige sur la Côte d'Azur. Discrétion, expertise, excellence.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <header className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-[11px] tracking-[0.32em] uppercase text-accent mb-5">
            Contact
          </p>
          <h1 className="font-serif text-5xl md:text-7xl mb-6">
            Échangeons en <em className="italic">confidence</em>
          </h1>
          <p className="text-muted-strong text-lg">
            Que ce soit pour acquérir, vendre ou estimer un bien
            d&apos;exception, notre équipe vous accompagne avec discrétion.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <aside className="space-y-6">
            <div className="bg-[var(--background-card)] border border-[var(--border)] p-8">
              <h3 className="font-serif text-2xl mb-6">Nos coordonnées</h3>
              <dl className="space-y-5 text-sm">
                <div>
                  <dt className="text-[10px] tracking-[0.22em] uppercase text-muted mb-2">
                    Téléphone
                  </dt>
                  <dd>
                    <a href="tel:+33493123456" className="hover:text-accent transition">
                      +33 4 93 12 34 56
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] tracking-[0.22em] uppercase text-muted mb-2">
                    Email
                  </dt>
                  <dd>
                    <a href="mailto:contact@ellington.fr" className="hover:text-accent transition">
                      contact@ellington.fr
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] tracking-[0.22em] uppercase text-muted mb-2">
                    Adresse
                  </dt>
                  <dd className="leading-relaxed">
                    Boulevard de la Croisette
                    <br />
                    06400 Cannes — France
                  </dd>
                </div>
              </dl>
            </div>

            <div className="bg-[var(--background-card)] border border-[var(--border)] p-8">
              <h3 className="font-serif text-2xl mb-6">Horaires</h3>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt>Lundi – Vendredi</dt>
                  <dd>9h – 18h</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Samedi</dt>
                  <dd>10h – 16h</dd>
                </div>
                <div className="flex justify-between text-muted">
                  <dt>Dimanche</dt>
                  <dd>Sur RDV</dd>
                </div>
              </dl>
            </div>

            <div className="border border-accent/40 p-6">
              <h4 className="font-serif text-lg mb-2">Confidentialité</h4>
              <p className="text-xs text-muted leading-relaxed">
                Toutes vos demandes sont traitées avec la plus stricte
                discrétion, conformément à notre engagement de confidentialité.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
