import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Ellington Properties.",
  robots: { index: false, follow: true },
};

export default function LegalPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <header className="mb-14">
          <p className="text-[11px] tracking-[0.32em] uppercase text-accent mb-5">
            Informations légales
          </p>
          <h1 className="font-serif text-5xl md:text-6xl">
            Mentions <em className="italic">légales</em>
          </h1>
        </header>

        <div className="space-y-12 text-foreground/90 leading-[1.85]">
          <section>
            <h2 className="font-serif text-2xl mb-4">Éditeur du site</h2>
            <dl className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-y-3 gap-x-6 text-sm">
              <dt className="text-muted text-[11px] tracking-[0.18em] uppercase">
                Raison sociale
              </dt>
              <dd>Ellington Properties</dd>

              <dt className="text-muted text-[11px] tracking-[0.18em] uppercase">
                Forme juridique
              </dt>
              <dd>Société</dd>

              <dt className="text-muted text-[11px] tracking-[0.18em] uppercase">
                Siège social
              </dt>
              <dd>
                Espace Lemarquis
                <br />
                Quartier Bertaud
                <br />
                83580 Gassin — France
              </dd>

              <dt className="text-muted text-[11px] tracking-[0.18em] uppercase">
                Numéro SIRET
              </dt>
              <dd>983 021 650</dd>

              <dt className="text-muted text-[11px] tracking-[0.18em] uppercase">
                TVA intracommunautaire
              </dt>
              <dd>FR55 983021650</dd>

              <dt className="text-muted text-[11px] tracking-[0.18em] uppercase">
                Téléphone
              </dt>
              <dd>
                <a href="tel:+33674750703" className="hover:text-accent transition">
                  +33 6 74 75 07 03
                </a>
              </dd>

              <dt className="text-muted text-[11px] tracking-[0.18em] uppercase">
                Email
              </dt>
              <dd>
                <a
                  href="mailto:hello@ellington-international.fr"
                  className="hover:text-accent transition"
                >
                  hello@ellington-international.fr
                </a>
              </dd>

              <dt className="text-muted text-[11px] tracking-[0.18em] uppercase">
                Directeur de la publication
              </dt>
              <dd>Marc Mehagnoul</dd>
            </dl>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">Hébergement</h2>
            <p className="text-sm">
              Le site est hébergé par <strong>Vercel Inc.</strong>, 340 S Lemon
              Ave #4133, Walnut, CA 91789, États-Unis —{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline-offset-4 hover:underline"
              >
                vercel.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">Propriété intellectuelle</h2>
            <p className="text-sm">
              L'ensemble du contenu présent sur ce site (textes, images,
              graphismes, logos, vidéos, photographies, données techniques,
              etc.) est la propriété exclusive de Ellington Properties ou de
              ses partenaires, et est protégé par les lois en vigueur sur la
              propriété intellectuelle. Toute reproduction, représentation,
              modification ou exploitation, totale ou partielle, sans
              autorisation écrite préalable est strictement interdite et
              constituerait une contrefaçon sanctionnée par les articles
              L.335-2 et suivants du Code de la propriété intellectuelle.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">Activité réglementée</h2>
            <p className="text-sm">
              Ellington Properties exerce une activité d'intermédiation
              immobilière soumise à la loi n° 70-9 du 2 janvier 1970, dite loi
              Hoguet. La carte professionnelle, les garanties financières et
              les coordonnées de la chambre de commerce et d'industrie de
              rattachement sont disponibles sur simple demande à{" "}
              <a
                href="mailto:hello@ellington-international.fr"
                className="text-accent underline-offset-4 hover:underline"
              >
                hello@ellington-international.fr
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">Données personnelles</h2>
            <p className="text-sm">
              Conformément au Règlement Général sur la Protection des Données
              (RGPD) et à la loi Informatique et Libertés modifiée, vous
              disposez d'un droit d'accès, de rectification, d'effacement, de
              limitation et d'opposition concernant vos données personnelles.
              Pour exercer ces droits, contactez-nous à{" "}
              <a
                href="mailto:hello@ellington-international.fr"
                className="text-accent underline-offset-4 hover:underline"
              >
                hello@ellington-international.fr
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
