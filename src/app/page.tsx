import Image from "next/image";
import Link from "next/link";
import { PropertyCard } from "@/components/PropertyCard";
import { NewsletterForm } from "@/components/NewsletterForm";
import { HeroSearch } from "@/components/HeroSearch";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { getFeaturedProperties, getCities, locations } from "@/lib/properties";

export default function HomePage() {
  const featured = getFeaturedProperties().slice(0, 6);
  const cities = getCities();

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <HeroSlideshow />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/70 via-[var(--background)]/40 to-[var(--background)] z-10" />

        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto fade-in">
          <p className="text-[11px] tracking-[0.32em] uppercase text-accent mb-8">
            Immobilier de prestige · Côte d&apos;Azur
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] mb-6">
            Trouvez votre <em className="italic text-accent">demeure</em>
            <br />
            d&apos;exception
          </h1>
          <p className="text-base md:text-lg text-muted-strong max-w-2xl mx-auto mb-12">
            Des villas en bord de mer aux penthouses du Carré d&apos;Or,
            Ellington sélectionne pour vous les biens les plus rares de la
            Riviera française.
          </p>

          <HeroSearch cities={cities} />

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-[11px] tracking-[0.22em] uppercase text-muted">
            <span>Monaco</span>
            <span className="opacity-40">·</span>
            <span>Saint-Tropez</span>
            <span className="opacity-40">·</span>
            <span>Grimaud</span>
            <span className="opacity-40">·</span>
            <span>Cannes</span>
            <span className="opacity-40">·</span>
            <span>Sainte-Maxime</span>
          </div>
        </div>
      </section>

      {/* WHY ELLINGTON */}
      <section className="py-28 md:py-36 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <p className="text-[11px] tracking-[0.32em] uppercase text-accent mb-5">
              L&apos;excellence Ellington
            </p>
            <h2 className="font-serif text-4xl md:text-6xl mb-6">
              Pourquoi <em className="italic">nous choisir</em>
            </h2>
            <p className="text-muted-strong text-lg leading-relaxed">
              Une expertise inégalée dans l&apos;immobilier de luxe sur
              l&apos;ensemble de la Côte d&apos;Azur, mise au service
              d&apos;une clientèle exigeante.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)] border border-[var(--border)]">
            {[
              {
                icon: "shield",
                title: "Conseillers de confiance",
                body: "Une approche confidentielle et discrète, dans le respect des plus hauts standards professionnels.",
              },
              {
                icon: "network",
                title: "Réseau exclusif",
                body: "Accès privilégié à des biens off-market, indisponibles sur les canaux publics.",
              },
              {
                icon: "trend",
                title: "+ de 2,5 Md€ vendus",
                body: "Un volume de transactions qui témoigne de la confiance accordée par nos clients sur la Riviera.",
              },
              {
                icon: "key",
                title: "Service sur-mesure",
                body: "De la première visite à la signature, un accompagnement personnalisé à chaque étape.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="bg-[var(--background)] p-10 hover:bg-[var(--background-card)] transition duration-500"
              >
                <div className="w-11 h-11 mb-8 flex items-center justify-center border border-[var(--border-strong)] text-accent">
                  <FeatureIcon name={f.icon} />
                </div>
                <h3 className="font-serif text-2xl mb-4">{f.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="py-28 md:py-36 px-6 md:px-10 bg-[var(--background-elev)]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <p className="text-[11px] tracking-[0.32em] uppercase text-accent mb-5">
                Sélection
              </p>
              <h2 className="font-serif text-4xl md:text-6xl mb-4">
                Propriétés <em className="italic">en vedette</em>
              </h2>
              <p className="text-muted-strong">
                Une sélection des biens les plus rares de notre portefeuille,
                renouvelée chaque semaine.
              </p>
            </div>
            <Link
              href="/properties"
              className="self-start md:self-end text-[11px] tracking-[0.22em] uppercase text-accent hover:text-accent-hover border-b border-accent pb-1"
            >
              Voir tout le portefeuille →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((p, i) => (
              <PropertyCard key={p.id} property={p} priority={i < 3} />
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS PREVIEW */}
      <section className="py-28 md:py-36 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-[11px] tracking-[0.32em] uppercase text-accent mb-5">
              Nos régions
            </p>
            <h2 className="font-serif text-4xl md:text-6xl mb-6">
              Adresses <em className="italic">d&apos;exception</em>
            </h2>
            <p className="text-muted-strong text-lg">
              De Monaco à Saint-Tropez, nous opérons sur les emplacements les
              plus prestigieux de la Côte d&apos;Azur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.slice(0, 6).map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations#${loc.slug}`}
                className="group relative aspect-[4/5] overflow-hidden block"
              >
                <Image
                  src={loc.image}
                  alt={loc.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-serif text-3xl text-white mb-2">
                    {loc.name}
                  </h3>
                  <span className="text-[11px] tracking-[0.22em] uppercase text-accent opacity-0 group-hover:opacity-100 transition">
                    Découvrir →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-28 md:py-36 px-6 md:px-10 bg-[var(--background-elev)] border-t border-[var(--border)]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[11px] tracking-[0.32em] uppercase text-accent mb-5">
            Restez informé
          </p>
          <h2 className="font-serif text-4xl md:text-5xl mb-5">
            Accès <em className="italic">privilégié</em>
          </h2>
          <p className="text-muted-strong mb-10">
            Recevez en avant-première nos nouvelles propriétés exclusives et
            nos analyses du marché immobilier de la Côte d&apos;Azur.
          </p>
          <NewsletterForm />
          <p className="text-xs text-muted mt-6">
            Pas de spam — désinscription possible à tout moment.
          </p>
        </div>
      </section>
    </>
  );
}

function FeatureIcon({ name }: { name: string }) {
  switch (name) {
    case "shield":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
          <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" />
        </svg>
      );
    case "network":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
          <circle cx="12" cy="6" r="2.5" />
          <circle cx="5" cy="18" r="2.5" />
          <circle cx="19" cy="18" r="2.5" />
          <path d="M12 8.5v3M10 17l2-5M14 17l-2-5" />
        </svg>
      );
    case "trend":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
          <path d="M3 17l6-6 4 4 8-8M15 7h6v6" />
        </svg>
      );
    case "key":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
          <circle cx="8" cy="14" r="4" />
          <path d="M11 11l9-9M16 6l3 3" />
        </svg>
      );
    default:
      return null;
  }
}
