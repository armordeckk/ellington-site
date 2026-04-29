import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos — Ellington",
  description:
    "Ellington, agence immobilière de prestige sur la Côte d'Azur. Notre histoire, notre équipe, nos valeurs.",
};

const stats = [
  { value: "2,5 Md€", label: "Volume de transactions" },
  { value: "+ 30 ans", label: "D'expertise sur la Riviera" },
  { value: "120+", label: "Clients internationaux" },
  { value: "6", label: "Bureaux sur la Côte d'Azur" },
];

const values = [
  {
    title: "Discrétion",
    body: "Nos clients exigent la confidentialité la plus absolue. Notre approche off-market et notre éthique professionnelle garantissent l'anonymat de chaque transaction.",
  },
  {
    title: "Excellence",
    body: "Nous ne représentons que les biens qui répondent à nos exigences les plus strictes — qualité architecturale, emplacement, prestations, juste prix.",
  },
  {
    title: "Engagement",
    body: "De la première rencontre à la signature, votre conseiller dédié vous accompagne personnellement. Pas de service standardisé : du sur-mesure.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <header className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <p className="text-[11px] tracking-[0.32em] uppercase text-accent mb-5">
              À propos d&apos;Ellington
            </p>
            <h1 className="font-serif text-5xl md:text-7xl mb-8">
              L&apos;art de vivre <em className="italic">la Riviera</em>
            </h1>
            <p className="text-lg text-muted-strong leading-relaxed mb-6">
              Depuis plus de trois décennies, Ellington accompagne une clientèle
              internationale exigeante dans l&apos;acquisition de biens
              d&apos;exception sur la Côte d&apos;Azur.
            </p>
            <p className="text-muted leading-relaxed">
              De Monaco à Saint-Tropez, nos conseillers cultivent une connaissance
              intime du marché et un réseau confidentiel qui nous permet
              d&apos;accéder aux propriétés les plus rares — souvent avant
              même qu&apos;elles ne soient officiellement à vendre.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/locations/riviera.jpg"
              alt="Côte d'Azur"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </header>

        <section className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)] border border-[var(--border)] mb-32">
          {stats.map((s) => (
            <div key={s.label} className="bg-[var(--background)] p-10 text-center">
              <p className="font-serif text-4xl md:text-5xl text-accent mb-3">
                {s.value}
              </p>
              <p className="text-[11px] tracking-[0.22em] uppercase text-muted">
                {s.label}
              </p>
            </div>
          ))}
        </section>

        <section className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] tracking-[0.32em] uppercase text-accent mb-5">
              Nos valeurs
            </p>
            <h2 className="font-serif text-4xl md:text-6xl">
              Un engagement <em className="italic">absolu</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <div key={v.title}>
                <p className="font-serif text-5xl text-accent/40 mb-4">
                  0{i + 1}
                </p>
                <h3 className="font-serif text-2xl mb-4">{v.title}</h3>
                <p className="text-muted-strong leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[var(--background-elev)] border border-[var(--border)] p-12 md:p-20 text-center">
          <p className="text-[11px] tracking-[0.32em] uppercase text-accent mb-5">
            Une question ?
          </p>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Discutons de votre <em className="italic">projet</em>
          </h2>
          <p className="text-muted-strong max-w-xl mx-auto mb-10">
            Que vous souhaitiez acquérir, vendre ou estimer un bien
            d&apos;exception, nos conseillers sont à votre disposition.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-accent hover:bg-accent-hover text-[var(--background)] text-[11px] tracking-[0.22em] uppercase transition"
          >
            Nous contacter
          </Link>
        </section>
      </div>
    </div>
  );
}
