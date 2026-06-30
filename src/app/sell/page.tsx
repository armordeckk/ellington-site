import type { Metadata } from "next";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import SellContent from "./SellContent";

export const metadata: Metadata = {
  title: "Vendre votre bien d'exception sur le Golfe de Saint-Tropez",
  description:
    "Vendez votre propriété avec Ellington : estimation sur-mesure, réseau international et accompagnement confidentiel pour les biens d'exception de la Côte d'Azur.",
  alternates: { canonical: "/sell" },
  openGraph: { url: "/sell", images: ["/og.jpg"] },
};

export default function SellPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Vendre", path: "/sell" },
        ])}
      />
      <SellContent />
    </>
  );
}
