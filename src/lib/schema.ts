import { SITE_URL } from "./site";

const ORG_ID = `${SITE_URL}/#organization`;

// Real-estate agency (RealEstateAgent ⊂ LocalBusiness) — sitewide entity.
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": ORG_ID,
    name: "Ellington Properties",
    url: SITE_URL,
    logo: `${SITE_URL}/icon.png`,
    image: `${SITE_URL}/og.jpg`,
    description:
      "Agence immobilière de prestige spécialisée dans les biens d'exception sur le Golfe de Saint-Tropez et la Côte d'Azur.",
    email: "marc@ellington-international.com",
    telephone: "+33674750703",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Espace Lemarquis, Quartier Bertaud",
      postalCode: "83580",
      addressLocality: "Gassin",
      addressRegion: "Var",
      addressCountry: "FR",
    },
    areaServed: [
      "Saint-Tropez",
      "Ramatuelle",
      "Gassin",
      "Grimaud",
      "Port-Grimaud",
      "Sainte-Maxime",
      "Côte d'Azur",
    ],
    knowsLanguage: ["fr", "en", "nl"],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Ellington Properties",
    inLanguage: "fr-FR",
    publisher: { "@id": ORG_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/properties?city={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
