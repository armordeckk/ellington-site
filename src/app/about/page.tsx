import type { Metadata } from "next";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "À propos — Notre agence de prestige du Golfe de Saint-Tropez",
  description:
    "Découvrez Ellington Properties : agence immobilière de prestige du Golfe de Saint-Tropez, son équipe trilingue (FR/EN/NL) et ses valeurs d'excellence et de discrétion.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about", images: ["/og.jpg"] },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "À propos", path: "/about" },
        ])}
      />
      <AboutContent />
    </>
  );
}
