export type Lang = "fr" | "en";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
];

// Dictionary structure — keep deeply nested objects, never use stringly-typed
// magic keys at the call site (TS will autocomplete every leaf).
//
// Note: `as const` widens to literal types per language, which makes FR and
// EN incompatible. Cast back to a unified shape via `Dict` so the union
// resolves to a single shape downstream.
const dictRaw = {
  fr: {
    nav: {
      properties: "Propriétés",
      rentals: "Locations",
      about: "À propos",
      contact: "Contact",
    },
    common: {
      backToPortfolio: "Retour au portefeuille",
      contactUs: "Nous contacter",
      callUs: "+33 4 93 12 34 56",
      readMore: "Découvrir →",
      swipeHint: "← Faites glisser →",
      loading: "...",
      send: "Envoyer le message",
      sending: "Envoi…",
      reset: "Réinitialiser",
    },
    home: {
      eyebrow: "Immobilier de prestige · Côte d'Azur",
      titleBefore: "Trouvez votre",
      titleAccent: "demeure",
      titleAfter: "d'exception",
      subtitle:
        "Des villas en bord de mer aux penthouses du Carré d'Or, Ellington sélectionne pour vous les biens les plus rares de la Riviera française.",
      whyEyebrow: "L'excellence Ellington",
      whyTitleBefore: "Pourquoi",
      whyTitleAccent: "nous choisir",
      whySubtitle:
        "Une expertise inégalée dans l'immobilier de luxe sur l'ensemble de la Côte d'Azur, mise au service d'une clientèle exigeante.",
      features: [
        {
          title: "Conseillers de confiance",
          body: "Une approche confidentielle et discrète, dans le respect des plus hauts standards professionnels.",
        },
        {
          title: "Réseau exclusif",
          body: "Accès privilégié à des biens off-market, indisponibles sur les canaux publics.",
        },
        {
          title: "+ de 2,5 Md€ vendus",
          body: "Un volume de transactions qui témoigne de la confiance accordée par nos clients sur la Riviera.",
        },
        {
          title: "Service sur-mesure",
          body: "De la première visite à la signature, un accompagnement personnalisé à chaque étape.",
        },
      ] as { title: string; body: string }[],
      featuredEyebrow: "Sélection",
      featuredTitleBefore: "Propriétés",
      featuredTitleAccent: "en vedette",
      featuredSubtitle:
        "Une sélection des biens les plus rares de notre portefeuille, renouvelée chaque semaine.",
      featuredCta: "Voir tout le portefeuille →",
      regionsEyebrow: "Nos régions",
      regionsTitleBefore: "Adresses",
      regionsTitleAccent: "d'exception",
      regionsSubtitle:
        "De Monaco à Saint-Tropez, nous opérons sur les emplacements les plus prestigieux de la Côte d'Azur.",
      newsletterEyebrow: "Restez informé",
      newsletterTitleBefore: "Accès",
      newsletterTitleAccent: "privilégié",
      newsletterSubtitle:
        "Recevez en avant-première nos nouvelles propriétés exclusives et nos analyses du marché immobilier de la Côte d'Azur.",
      newsletterDisclaimer:
        "Pas de spam — désinscription possible à tout moment.",
      newsletterPlaceholder: "Votre adresse email",
      newsletterSubmit: "S'inscrire",
      newsletterSuccess: "Merci, votre inscription est confirmée.",
    },
    search: {
      buy: "Achat",
      rent: "Location",
      location: "Localisation",
      type: "Type de bien",
      budget: "Budget",
      sort: "Trier par",
      allLocations: "Toutes",
      allTypes: "Tous types",
      allBudgets: "Tous budgets",
      allPrices: "Tous les prix",
      submit: "Rechercher",
      results: (n: number) =>
        `${n} bien${n > 1 ? "s" : ""} disponible${n > 1 ? "s" : ""}`,
      noResults: "Aucun bien ne correspond à votre recherche.",
      noResultsCta: "Réinitialiser les filtres",
    },
    types: {
      villa: "Villa",
      penthouse: "Penthouse",
      apartment: "Appartement",
      estate: "Domaine",
      chalet: "Chalet",
      townhouse: "Maison de ville",
      land: "Terrain",
    },
    sort: {
      newest: "Plus récents",
      priceDesc: "Prix décroissant",
      priceAsc: "Prix croissant",
      areaDesc: "Surface décroissante",
    },
    priceRanges: {
      all: "Tous les prix",
      under3: "Jusqu'à 3 M€",
      r3to6: "3 – 6 M€",
      r6to10: "6 – 10 M€",
      r10to15: "10 – 15 M€",
      over15: "15 M€ et plus",
    },
    propertyDetail: {
      reference: "Réf.",
      exclusive: "Exclusivité",
      price: "Prix",
      bedrooms: "Chambres",
      bathrooms: "Salles de bain",
      area: "Surface",
      year: "Année",
      origin: "Origine",
      description: "Description",
      features: "Prestations",
      location: "Localisation",
      mapUnavailable: "Carte indisponible",
      addressNote:
        "Adresse précise communiquée sur demande, dans le respect de la confidentialité de notre client.",
      interestedTitle: "Intéressé ?",
      interestedBody:
        "Contactez-nous pour plus d'informations ou planifier une visite privée.",
      yourAdvisor: "Votre conseiller",
      advisorRole: "Directeur du portefeuille",
      phone: "Téléphone",
      email: "Email",
      confidentialTitle: "Service confidentiel",
      confidentialBody:
        "Toutes les demandes sont traitées avec la plus stricte discrétion. Notre clientèle internationale apprécie notre exigence de confidentialité.",
      similar: "Biens",
      similarAccent: "similaires",
      shortBed: "ch.",
      shortBath: "sdb.",
    },
    propertiesPage: {
      eyebrow: "Portefeuille",
      titleBefore: "Propriétés",
      titleAccent: "à vendre",
      subtitle:
        "Découvrez les biens d'exception sélectionnés par Ellington sur l'ensemble de la Côte d'Azur.",
    },
    locationsPage: {
      eyebrow: "La Riviera française",
      titleBefore: "Nos",
      titleAccent: "régions",
      subtitle:
        "Explorez les emplacements les plus prestigieux le long de la Côte d'Azur, où le luxe rencontre l'art de vivre méditerranéen.",
      regionLabel: (i: number, total: number) => `Région ${i} / ${total}`,
      currentlyAvailable: (n: number) =>
        `${n} bien${n > 1 ? "s" : ""} actuellement en portefeuille`,
      viewProperties: "Voir les propriétés →",
    },
    aboutPage: {
      eyebrow: "À propos d'Ellington",
      titleBefore: "L'art de vivre",
      titleAccent: "la Riviera",
      lead: "Depuis plus de trois décennies, Ellington accompagne une clientèle internationale exigeante dans l'acquisition de biens d'exception sur la Côte d'Azur.",
      body: "De Monaco à Saint-Tropez, nos conseillers cultivent une connaissance intime du marché et un réseau confidentiel qui nous permet d'accéder aux propriétés les plus rares — souvent avant même qu'elles ne soient officiellement à vendre.",
      stats: [
        { value: "2,5 Md€", label: "Volume de transactions" },
        { value: "+ 30 ans", label: "D'expertise sur la Riviera" },
        { value: "120+", label: "Clients internationaux" },
        { value: "6", label: "Bureaux sur la Côte d'Azur" },
      ],
      valuesEyebrow: "Nos valeurs",
      valuesTitleBefore: "Un engagement",
      valuesTitleAccent: "absolu",
      values: [
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
      ],
      ctaEyebrow: "Une question ?",
      ctaTitleBefore: "Discutons de votre",
      ctaTitleAccent: "projet",
      ctaBody:
        "Que vous souhaitiez acquérir, vendre ou estimer un bien d'exception, nos conseillers sont à votre disposition.",
    },
    contactPage: {
      eyebrow: "Contact",
      titleBefore: "Échangeons en",
      titleAccent: "confidence",
      subtitle:
        "Que ce soit pour acquérir, vendre ou estimer un bien d'exception, notre équipe vous accompagne avec discrétion.",
      detailsTitle: "Nos coordonnées",
      hoursTitle: "Horaires",
      address: "Boulevard de la Croisette\n06400 Cannes — France",
      monFri: "Lundi – Vendredi",
      sat: "Samedi",
      sun: "Dimanche",
      sunHours: "Sur RDV",
      monFriHours: "9h – 18h",
      satHours: "10h – 16h",
      confidentialTitle: "Confidentialité",
      confidentialBody:
        "Toutes vos demandes sont traitées avec la plus stricte discrétion, conformément à notre engagement de confidentialité.",
      thanks: "Merci.",
      successBody:
        "Votre message a bien été reçu. Un conseiller vous recontactera sous 24 heures, en toute confidentialité.",
      firstName: "Prénom *",
      lastName: "Nom *",
      emailField: "Email *",
      phone: "Téléphone",
      subject: "Objet *",
      subjectPlaceholder: "Sélectionnez un objet",
      subjects: [
        "Acquisition d'un bien",
        "Estimation d'un bien",
        "Vente d'un bien",
        "Location saisonnière",
        "Autre demande",
      ],
      messageLabel: "Votre message *",
      messagePlaceholder: "Décrivez votre projet ou votre demande…",
      consent:
        "J'accepte que mes informations soient utilisées pour me recontacter dans le cadre de ma demande.",
    },
    rentalsPage: {
      eyebrow: "Locations saisonnières",
      titleAccent: "Bientôt",
      titleAfter: "disponible",
      body: "Notre département location saisonnière est en cours de constitution. Pour toute demande spécifique de location de villa ou de penthouse sur la Côte d'Azur, contactez directement notre équipe.",
    },
    footer: {
      tagline:
        "Immobilier de prestige sur la Côte d'Azur. Biens d'exception, accompagnement confidentiel.",
      explore: "Explorer",
      contact: "Contact",
      hours: "Horaires",
      regions: "Nos régions",
      monFri: "Lundi – Vendredi · 9h – 18h",
      sat: "Samedi · 10h – 16h",
      sun: "Dimanche · sur rendez-vous",
      cityLabel: "Côte d'Azur, France",
      legal: "Mentions légales",
      privacy: "Confidentialité",
      rights: (year: number) => `© ${year} Ellington. Tous droits réservés.`,
    },
  },
  en: {
    nav: {
      properties: "Properties",
      rentals: "Rentals",
      about: "About",
      contact: "Contact",
    },
    common: {
      backToPortfolio: "Back to portfolio",
      contactUs: "Contact us",
      callUs: "+33 4 93 12 34 56",
      readMore: "Discover →",
      swipeHint: "← Swipe →",
      loading: "...",
      send: "Send message",
      sending: "Sending…",
      reset: "Reset",
    },
    home: {
      eyebrow: "Luxury Real Estate · French Riviera",
      titleBefore: "Find your",
      titleAccent: "exceptional",
      titleAfter: "residence",
      subtitle:
        "From beachfront villas to Carré d'Or penthouses, Ellington curates the rarest properties on the French Riviera for you.",
      whyEyebrow: "The Ellington Standard",
      whyTitleBefore: "Why",
      whyTitleAccent: "choose us",
      whySubtitle:
        "Unrivalled expertise in luxury real estate across the entire French Riviera, at the service of a discerning clientele.",
      features: [
        {
          title: "Trusted advisors",
          body: "A confidential, discreet approach respecting the highest professional standards.",
        },
        {
          title: "Exclusive network",
          body: "Privileged access to off-market properties, unavailable through public channels.",
        },
        {
          title: "€2.5B+ sold",
          body: "A transaction volume reflecting the trust placed in us by our clients across the Riviera.",
        },
        {
          title: "Bespoke service",
          body: "From first viewing to signing, personal guidance at every step.",
        },
      ] as { title: string; body: string }[],
      featuredEyebrow: "Selection",
      featuredTitleBefore: "Featured",
      featuredTitleAccent: "properties",
      featuredSubtitle:
        "A curated selection of the rarest properties in our portfolio, refreshed weekly.",
      featuredCta: "View entire portfolio →",
      regionsEyebrow: "Our regions",
      regionsTitleBefore: "Exceptional",
      regionsTitleAccent: "addresses",
      regionsSubtitle:
        "From Monaco to Saint-Tropez, we operate in the most prestigious locations on the French Riviera.",
      newsletterEyebrow: "Stay informed",
      newsletterTitleBefore: "Privileged",
      newsletterTitleAccent: "access",
      newsletterSubtitle:
        "Be the first to receive our new exclusive properties and our French Riviera real estate market insights.",
      newsletterDisclaimer:
        "No spam — unsubscribe at any time.",
      newsletterPlaceholder: "Your email address",
      newsletterSubmit: "Subscribe",
      newsletterSuccess: "Thank you, your subscription is confirmed.",
    },
    search: {
      buy: "Buy",
      rent: "Rent",
      location: "Location",
      type: "Property type",
      budget: "Budget",
      sort: "Sort by",
      allLocations: "All",
      allTypes: "All types",
      allBudgets: "All budgets",
      allPrices: "All prices",
      submit: "Search",
      results: (n: number) =>
        `${n} propert${n > 1 ? "ies" : "y"} available`,
      noResults: "No property matches your search.",
      noResultsCta: "Reset filters",
    },
    types: {
      villa: "Villa",
      penthouse: "Penthouse",
      apartment: "Apartment",
      estate: "Estate",
      chalet: "Chalet",
      townhouse: "Townhouse",
      land: "Land",
    },
    sort: {
      newest: "Newest",
      priceDesc: "Price: high to low",
      priceAsc: "Price: low to high",
      areaDesc: "Largest area",
    },
    priceRanges: {
      all: "All prices",
      under3: "Up to €3M",
      r3to6: "€3 – €6M",
      r6to10: "€6 – €10M",
      r10to15: "€10 – €15M",
      over15: "€15M and above",
    },
    propertyDetail: {
      reference: "Ref.",
      exclusive: "Exclusive",
      price: "Price",
      bedrooms: "Bedrooms",
      bathrooms: "Bathrooms",
      area: "Living area",
      year: "Year",
      origin: "Origin",
      description: "Description",
      features: "Features",
      location: "Location",
      mapUnavailable: "Map unavailable",
      addressNote:
        "Exact address shared on request, in respect of our client's confidentiality.",
      interestedTitle: "Interested?",
      interestedBody:
        "Contact us for more information or to schedule a private viewing.",
      yourAdvisor: "Your advisor",
      advisorRole: "Portfolio director",
      phone: "Phone",
      email: "Email",
      confidentialTitle: "Confidential service",
      confidentialBody:
        "All enquiries are handled with the strictest discretion. Our international clientele values our commitment to confidentiality.",
      similar: "Similar",
      similarAccent: "properties",
      shortBed: "bd.",
      shortBath: "ba.",
    },
    propertiesPage: {
      eyebrow: "Portfolio",
      titleBefore: "Properties",
      titleAccent: "for sale",
      subtitle:
        "Discover the exceptional properties curated by Ellington across the entire French Riviera.",
    },
    locationsPage: {
      eyebrow: "The French Riviera",
      titleBefore: "Our",
      titleAccent: "regions",
      subtitle:
        "Explore the most prestigious locations along the French Riviera, where luxury meets Mediterranean lifestyle.",
      regionLabel: (i: number, total: number) => `Region ${i} / ${total}`,
      currentlyAvailable: (n: number) =>
        `${n} propert${n > 1 ? "ies" : "y"} currently in portfolio`,
      viewProperties: "View properties →",
    },
    aboutPage: {
      eyebrow: "About Ellington",
      titleBefore: "The art of",
      titleAccent: "Riviera living",
      lead: "For over three decades, Ellington has guided a discerning international clientele in acquiring exceptional properties on the French Riviera.",
      body: "From Monaco to Saint-Tropez, our advisors cultivate intimate market knowledge and a confidential network that grants us access to the rarest properties — often before they are officially put on the market.",
      stats: [
        { value: "€2.5B", label: "Transaction volume" },
        { value: "30+ years", label: "Of Riviera expertise" },
        { value: "120+", label: "International clients" },
        { value: "6", label: "Offices on the French Riviera" },
      ],
      valuesEyebrow: "Our values",
      valuesTitleBefore: "An absolute",
      valuesTitleAccent: "commitment",
      values: [
        {
          title: "Discretion",
          body: "Our clients demand absolute confidentiality. Our off-market approach and professional ethics guarantee anonymity for every transaction.",
        },
        {
          title: "Excellence",
          body: "We only represent properties meeting our strictest criteria — architectural quality, location, amenities, fair pricing.",
        },
        {
          title: "Commitment",
          body: "From first meeting to signing, your dedicated advisor accompanies you personally. No standardised service: only bespoke.",
        },
      ],
      ctaEyebrow: "A question?",
      ctaTitleBefore: "Let's discuss your",
      ctaTitleAccent: "project",
      ctaBody:
        "Whether you wish to acquire, sell or value an exceptional property, our advisors are at your disposal.",
    },
    contactPage: {
      eyebrow: "Contact",
      titleBefore: "Let's speak in",
      titleAccent: "confidence",
      subtitle:
        "Whether to acquire, sell or value an exceptional property, our team accompanies you with discretion.",
      detailsTitle: "Our details",
      hoursTitle: "Hours",
      address: "Boulevard de la Croisette\n06400 Cannes — France",
      monFri: "Monday – Friday",
      sat: "Saturday",
      sun: "Sunday",
      sunHours: "By appointment",
      monFriHours: "9am – 6pm",
      satHours: "10am – 4pm",
      confidentialTitle: "Confidentiality",
      confidentialBody:
        "All your enquiries are handled with the strictest discretion, in line with our commitment to confidentiality.",
      thanks: "Thank you.",
      successBody:
        "Your message has been received. An advisor will contact you within 24 hours, in full confidentiality.",
      firstName: "First name *",
      lastName: "Last name *",
      emailField: "Email *",
      phone: "Phone",
      subject: "Subject *",
      subjectPlaceholder: "Select a subject",
      subjects: [
        "Property acquisition",
        "Property valuation",
        "Property sale",
        "Seasonal rental",
        "Other enquiry",
      ],
      messageLabel: "Your message *",
      messagePlaceholder: "Describe your project or enquiry…",
      consent:
        "I agree that my information may be used to contact me in connection with my enquiry.",
    },
    rentalsPage: {
      eyebrow: "Seasonal rentals",
      titleAccent: "Coming",
      titleAfter: "soon",
      body: "Our seasonal rental department is currently being set up. For any specific villa or penthouse rental request on the French Riviera, please contact our team directly.",
    },
    footer: {
      tagline:
        "Luxury real estate on the French Riviera. Exceptional properties, confidential service.",
      explore: "Explore",
      contact: "Contact",
      hours: "Hours",
      regions: "Our regions",
      monFri: "Monday – Friday · 9am – 6pm",
      sat: "Saturday · 10am – 4pm",
      sun: "Sunday · by appointment",
      cityLabel: "French Riviera, France",
      legal: "Legal",
      privacy: "Privacy",
      rights: (year: number) =>
        `© ${year} Ellington. All rights reserved.`,
    },
  },
} as const;

export type Dict = (typeof dictRaw)["fr"];

export const dict: Record<Lang, Dict> = dictRaw as unknown as Record<Lang, Dict>;

