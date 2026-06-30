import type { Metadata } from "next";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact — Acquérir, vendre ou estimer un bien d'exception",
  description:
    "Contactez Ellington Properties pour acquérir, vendre ou estimer un bien d'exception sur le Golfe de Saint-Tropez et la Côte d'Azur. Réponse sous 24 heures.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact", images: ["/og.jpg"] },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <ContactPageContent />
    </>
  );
}
