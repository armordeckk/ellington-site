import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Locations saisonnières — Ellington",
  description:
    "Locations saisonnières de prestige sur la Côte d'Azur — villas, penthouses, domaines.",
};

export default function RentalsPage() {
  return (
    <div className="pt-32 pb-20 min-h-[80vh]">
      <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
        <p className="text-[11px] tracking-[0.32em] uppercase text-accent mb-5">
          Locations saisonnières
        </p>
        <h1 className="font-serif text-5xl md:text-7xl mb-8">
          <em className="italic">Bientôt</em> disponible
        </h1>
        <p className="text-muted-strong text-lg mb-10 leading-relaxed">
          Notre département location saisonnière est en cours de constitution.
          Pour toute demande spécifique de location de villa ou de penthouse
          sur la Côte d&apos;Azur, contactez directement notre équipe.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-4 bg-accent hover:bg-accent-hover text-[var(--background)] text-[11px] tracking-[0.22em] uppercase transition"
        >
          Nous contacter
        </Link>
      </div>
    </div>
  );
}
