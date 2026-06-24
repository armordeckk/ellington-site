export type Lang = "fr" | "en" | "nl";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  { code: "nl", label: "NL" },
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
      buy: "Acheter",
      rentals: "Locations",
      regions: "Nos régions",
      regionsNav: "Régions",
      sell: "Vendre",
      journal: "Journal",
      about: "À propos",
      contact: "Contact",
      login: "Connexion",
      favorites: "Favoris",
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
      titleBefore: "Découvrez l'élégance",
      titleAccent: "",
      titleAfter: "",
      subtitle: "Propriétés d'exception sur la Côte d'Azur",
      whyEyebrow: "L'excellence Ellington",
      whyTitleBefore: "Pourquoi choisir",
      whyTitleAccent: "Ellington",
      whySubtitle:
        "Une expertise inégalée dans l'immobilier de luxe sur l'ensemble de la Côte d'Azur.",
      whyCta: "Vendre avec nous",
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
      regionsCta: "Voir toutes nos régions",
      newsletterEyebrow: "Restez informé",
      newsletterTitleBefore: "Restez",
      newsletterTitleAccent: "informé",
      newsletterSubtitle:
        "Recevez en exclusivité nos nouveaux biens et nos analyses du marché immobilier.",
      expertTitle: "Un expert local pas comme les autres.",
      expertP1:
        "Né au cœur du Golfe de Saint-Tropez, Ellington est plus qu'une agence immobilière — c'est une signature.",
      expertP2:
        "Son fondateur, ayant grandi dans la région, possède une connaissance intime et instinctive de chaque secteur, chaque adresse et chaque détail subtil qui définit la valeur d'un bien sur la Côte d'Azur. Cette expertise locale, bâtie au fil des années, est aujourd'hui mise au service d'une clientèle exigeante en quête d'excellence.",
      expertP3:
        "Choisir Ellington, c'est s'associer à un conseiller de confiance combinant des racines locales profondes, un rayonnement international et l'excellence du service.",
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
      type: "Type",
      landArea: "Surface terrain",
      propertyDetailsTitle: "Détails du bien",
      officeHours: "Horaires",
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
      energyTitle: "Performance énergétique",
      energyClass: "Diagnostic de performance énergétique",
      ghgClass: "Indice d'émission de gaz à effet de serre",
      energyDate: (date: string) =>
        `Diagnostic réalisé après le 1er juillet 2021${date ? ` — ${date}` : ""}`,
      energyCost: (min: number, max: number) =>
        `Coût annuel d'énergie estimé pour un usage standard : entre ${min.toLocaleString("fr-FR")} € et ${max.toLocaleString("fr-FR")} € par an`,
      energyUnavailable: "Diagnostic en cours de réalisation.",
    },
    priceUnit: {
      week: "sem.",
      month: "mois",
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
      intro:
        "Découvrez l'agence Ellington, votre partenaire immobilier de renom depuis 1987. Nichée au cœur du Golfe de Saint-Tropez, notre expertise et passion pour les biens d'exception nous permettent de dénicher les joyaux cachés de la Côte d'Azur. Avec une présence digitale avant-gardiste et un accompagnement sur-mesure, nous sommes votre allié pour trouver la perle rare qui saura combler vos attentes. Réputés pour notre sérieux, nous sommes fiers de compter une clientèle internationale fidèle à notre agence !",
      regionLabel: (i: number, total: number) => `Région ${i} / ${total}`,
      currentlyAvailable: (n: number) =>
        `${n} bien${n > 1 ? "s" : ""} actuellement en portefeuille`,
      viewProperties: "Voir les propriétés →",
    },
    aboutPage: {
      eyebrow: "À propos d'Ellington",
      titleBefore: "À propos",
      titleAccent: "d'Ellington",
      heroSubtitle:
        "Née au cœur du Golfe de Saint-Tropez, bâtie sur la confiance.",
      dividerLabel: "Notre signature",
      bandSubtitle:
        "Ellington est plus qu'une agence immobilière — c'est une signature.",
      storyTitle: "Notre histoire",
      lead: "Née au cœur du Golfe de Saint-Tropez, Ellington est plus qu'une agence immobilière — c'est une signature. Son fondateur, ayant grandi dans la région, possède une connaissance intime et instinctive de chaque secteur, chaque adresse et chaque détail subtil qui définit la valeur d'un bien sur la Côte d'Azur.",
      body: "Animée par un esprit profondément international, Ellington s'adresse à une clientèle sans frontières — trilingue français, anglais et néerlandais, avec de solides relations au sein d'un réseau de partenaires internationaux.",
      body2: "Choisir Ellington, c'est s'associer à un conseiller de confiance combinant des racines locales profondes, un rayonnement international et l'excellence du service.",
      stats: [
        { value: "30+", label: "Ans sur la Riviera" },
        { value: "€2.5B+", label: "En transactions" },
        { value: "9", label: "Régions exclusives" },
        { value: "3", label: "Langues parlées" },
      ],
      valuesEyebrow: "Nos valeurs",
      valuesTitleBefore: "Nos",
      valuesTitleAccent: "valeurs",
      commitTitle: "Ce pour quoi nous nous engageons",
      values: [
        {
          title: "Intégrité",
          body: "Transparence totale dans chaque transaction, chaque conversation.",
        },
        {
          title: "Excellence",
          body: "La perfection dans chaque détail, de la première consultation à la signature finale.",
        },
        {
          title: "Discrétion",
          body: "Toutes les demandes traitées avec une absolue confidentialité et professionnalisme.",
        },
        {
          title: "Rayonnement mondial",
          body: "Notre réseau vous connecte aux acquéreurs les plus qualifiés du monde entier.",
        },
        {
          title: "Racines locales",
          body: "Trois décennies à vivre et respirer le marché de la Riviera.",
        },
        {
          title: "Service bespoke",
          body: "Chaque client, chaque bien, chaque stratégie — entièrement sur-mesure.",
        },
      ],
      teamEyebrow: "L'équipe",
      teamTitleBefore: "Notre",
      teamTitleAccent: "équipe",
      team: [
        {
          name: "Marc Mehagnoul",
          role: "Fondateur & CEO",
          photo: "/team/marc-mehagnoul-v2.jpg",
          bio: "Fondateur d'Ellington, Marc met sa connaissance intime du Golfe de Saint-Tropez et son exigence d'excellence au service d'une clientèle internationale en quête de biens d'exception.",
          email: "hello@ellington-international.fr",
          phone: "+33 6 74 75 07 03",
        },
        {
          name: "Sasha Bazzaro",
          role: "Co-fondateur & CEO",
          photo: "/team/sasha-bazzaro.jpg",
          bio: "Co-fondateur d'Ellington, Sasha partage la même exigence d'excellence et accompagne une clientèle internationale dans ses projets les plus prestigieux sur la Côte d'Azur.",
          email: "",
          phone: "+33 7 69 95 69 27",
        },
        {
          name: "Sophia Potentier",
          role: "Chargée de gestion commerciale",
          photo: "/team/sophia-potentier.jpg",
          bio: "Au cœur de la relation client, Sophia orchestre la gestion commerciale d'Ellington avec rigueur et sens du détail, garantissant un accompagnement fluide à chaque étape.",
          email: "",
          phone: "+33 6 14 54 71 30",
        },
      ],
      ctaEyebrow: "Une question ?",
      ctaTitleBefore: "Trouvons ensemble votre",
      ctaTitleAccent: "bien",
      ctaBody:
        "Que vous souhaitiez acheter, vendre ou estimer — notre équipe est à votre service.",
      ctaPrimary: "Voir les propriétés",
    },
    contactPage: {
      eyebrow: "Contact",
      titleBefore: "Prenons",
      titleAccent: "contact",
      subtitle:
        "Nous sommes là pour répondre à vos questions et vous guider tout au long de votre parcours immobilier de prestige.",
      formTitle: "Envoyez-nous un message",
      formSubtitle:
        "Remplissez le formulaire ci-dessous et un membre de notre équipe vous répondra sous 24 heures.",
      detailsTitle: "Coordonnées",
      hoursTitle: "Horaires",
      advisorBlock: {
        eyebrow: "Votre interlocuteur",
        role: "Directeur du portefeuille",
        intro:
          "Chaque échange est traité personnellement, dans la plus stricte discrétion. N'hésitez pas à m'écrire, je vous recontacte sous 24 heures.",
        signature: "— Marc",
      },
      address: "Espace Lemarquis\nQuartier Bertaud\n83580 Gassin — France",
      monFri: "Lundi – Vendredi",
      sat: "Samedi",
      sun: "Dimanche",
      sunHours: "Sur RDV",
      monFriHours: "9h – 18h",
      satHours: "10h – 16h",
      confidentialTitle: "Service confidentiel",
      confidentialBody:
        "Toutes vos demandes sont traitées avec la plus stricte discrétion, conformément à notre engagement de confidentialité.",
      thanks: "Merci.",
      successBody:
        "Votre message a bien été reçu. Un conseiller vous recontactera sous 24 heures, en toute confidentialité.",
      firstName: "Prénom",
      lastName: "Nom",
      emailField: "Email",
      phone: "Téléphone",
      firstNamePh: "Jean",
      lastNamePh: "Dupont",
      emailPh: "jean.dupont@exemple.com",
      phonePh: "+33 6 12 34 56 78",
      subject: "Objet *",
      subjectPlaceholder: "Sélectionnez un objet",
      subjects: [
        "Acquisition d'un bien",
        "Estimation d'un bien",
        "Vente d'un bien",
        "Location saisonnière",
        "Autre demande",
      ],
      messageLabel: "Message",
      messagePlaceholder: "Décrivez votre demande en détail…",
      disclaimer:
        "En soumettant ce formulaire, vous acceptez notre politique de confidentialité. Nous ne partagerons jamais vos informations personnelles avec des tiers et ne les utiliserons que pour répondre à votre demande.",
      sendMessage: "Envoyer le message",
      consent:
        "J'accepte que mes informations soient utilisées pour me recontacter dans le cadre de ma demande.",
    },
    rentalsPage: {
      eyebrow: "Locations saisonnières",
      titleBefore: "Locations",
      titleAccent: "saisonnières",
      subtitle:
        "Une sélection de villas, mas et appartements à louer sur le Golfe de Saint-Tropez et la Côte d'Azur.",
    },
    sellPage: {
      eyebrow: "Vendre avec Ellington",
      titleBefore: "Vendre",
      titleAccent: "avec nous",
      lead: "Expertise locale. Rayonnement international. Excellence sur-mesure.",
      cta: "Demander une estimation",
      whyTitle: "Pourquoi Ellington ?",
      whyBody1:
        "Née au cœur du Golfe de Saint-Tropez, Ellington est plus qu'une agence immobilière — c'est une signature.",
      whyBody2:
        "Son fondateur, ayant grandi dans la région, possède une compréhension instinctive de chaque adresse et de chaque nuance qui définit la valeur d'un bien sur la Côte d'Azur. Cette connaissance locale approfondie, combinée à un solide réseau international, nous permet de connecter les biens d'exception aux bons acquéreurs.",
      whyBody3:
        "Trilingues en français, anglais et néerlandais, et soutenus par des partenaires internationaux de confiance, Ellington garantit à chaque bien une exposition ciblée et globale.",
      whyBody4:
        "Chaque vente est abordée avec discrétion, précision et une stratégie sur-mesure — parce qu'aucun bien ne ressemble à un autre.",
      processTitle: "Notre processus de vente",
      steps: [
        {
          title: "Estimation sur-mesure",
          body: "Nous établissons une estimation précise et stratégique, fondée sur notre expertise du marché, pour positionner votre bien et obtenir les meilleurs résultats.",
        },
        {
          title: "Exposition ciblée",
          body: "Nous activons notre réseau international et notre base de clients privés pour atteindre des acquéreurs sérieux et pertinents.",
        },
        {
          title: "Marketing sur-mesure",
          body: "Votre bien est présenté à travers des visuels soigneusement réalisés et promu auprès d'une audience internationale qualifiée.",
        },
        {
          title: "Négociation & finalisation",
          body: "Nous vous accompagnons à chaque étape, de l'offre à la signature, en sécurisant la transaction dans les meilleures conditions possibles.",
        },
      ],
      trustTitle: "Pourquoi nos clients nous font confiance",
      trustCards: [
        {
          title: "Discrétion",
          body: "Nous comprenons l'importance de la confidentialité et traitons chaque transaction avec une discrétion absolue.",
        },
        {
          title: "Réseau international",
          body: "Nos connexions mondiales attirent des acquéreurs qualifiés au-delà des frontières.",
        },
        {
          title: "Accompagnement dédié",
          body: "Une équipe réactive et attentive vous guide à chaque étape du processus.",
        },
        {
          title: "Approche sur-mesure",
          body: "Chaque bien bénéficie d'une stratégie personnalisée conçue pour maximiser sa valeur.",
        },
      ],
      ctaTitle: "Découvrez la vraie valeur de votre bien",
      ctaSubtitle:
        "Que vous envisagiez de vendre ou que vous exploriez simplement vos options, notre équipe est à votre disposition.",
      ctaButton: "Demander votre estimation confidentielle",
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
      cityLabel: "Gassin · Var · France",
      legal: "Mentions légales",
      privacy: "Confidentialité",
      cookies: "Gérer les cookies",
      rights: (year: number) => `© ${year} Ellington. Tous droits réservés.`,
    },
    cookies: {
      title: "Cookies & confidentialité",
      description:
        "Nous utilisons des cookies essentiels au fonctionnement du site (connexion, préférences) et, avec votre accord, des cookies pour mesurer son audience et améliorer votre expérience. Vous pouvez modifier votre choix à tout moment.",
      acceptAll: "Tout accepter",
      refuse: "Tout refuser",
      customize: "Personnaliser",
      save: "Enregistrer mes choix",
      learnMore: "En savoir plus",
      manage: "Gérer mes préférences",
      essentialLabel: "Cookies essentiels",
      essentialDesc:
        "Nécessaires au fonctionnement du site (authentification, préférences de langue). Toujours actifs.",
      analyticsLabel: "Mesure d'audience",
      analyticsDesc:
        "Nous aident à comprendre comment le site est utilisé afin de l'améliorer. Aucune donnée n'est utilisée à des fins publicitaires.",
      marketingLabel: "Marketing",
      marketingDesc:
        "Permettent de mesurer l'efficacité de nos communications et de personnaliser certains contenus.",
    },
  },
  en: {
    nav: {
      properties: "Properties",
      buy: "Buy",
      rentals: "Rentals",
      regions: "Our regions",
      regionsNav: "Locations",
      sell: "Sell",
      journal: "Journal",
      about: "About",
      contact: "Contact",
      login: "Login",
      favorites: "Favorites",
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
      titleBefore: "Discover Elegance",
      titleAccent: "",
      titleAfter: "",
      subtitle: "Exclusive Properties in the French Riviera",
      whyEyebrow: "The Ellington Standard",
      whyTitleBefore: "Why choose",
      whyTitleAccent: "Ellington",
      whySubtitle:
        "Unparalleled expertise in luxury real estate across the French Riviera.",
      whyCta: "Sell with us",
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
      regionsCta: "View all our regions",
      newsletterEyebrow: "Stay informed",
      newsletterTitleBefore: "Stay",
      newsletterTitleAccent: "informed",
      newsletterSubtitle:
        "Receive exclusive updates on new properties and market insights.",
      expertTitle: "Not Your Ordinary Local Expert.",
      expertP1:
        "Born in the heart of the Gulf of Saint-Tropez, Ellington is more than a real estate agency — it is a signature.",
      expertP2:
        "Its founder, having grown up in the region, possesses an intimate and instinctive knowledge of every area, every address, and every subtle detail that defines the value of a property on the French Riviera. This local expertise, built over the years, is now dedicated to serving a discerning clientele in search of excellence.",
      expertP3:
        "Choosing Ellington means partnering with a trusted advisor who combines deep local roots, international reach, and excellence in service.",
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
      type: "Type",
      landArea: "Land area",
      propertyDetailsTitle: "Property Details",
      officeHours: "Office hours",
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
      energyTitle: "Energy performance",
      energyClass: "Energy performance diagnostic",
      ghgClass: "Greenhouse gas emission index",
      energyDate: (date: string) =>
        `Diagnostic completed after July 1, 2021${date ? ` — ${date}` : ""}`,
      energyCost: (min: number, max: number) =>
        `Estimated annual energy expenses for standard use: between €${min.toLocaleString("en-US")} and €${max.toLocaleString("en-US")} per year`,
      energyUnavailable: "Diagnostic in progress.",
    },
    priceUnit: {
      week: "wk",
      month: "mo",
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
      titleAccent: "Locations",
      subtitle:
        "Explore the most prestigious locations along the Côte d'Azur, where luxury meets the Mediterranean lifestyle.",
      intro:
        "Discover Ellington, your renowned real estate partner since 1987. Nestled in the heart of the Gulf of Saint-Tropez, our expertise and passion for exceptional properties allow us to uncover the hidden gems of the Côte d'Azur. With a forward-thinking digital presence and bespoke support, we are your ally in finding the rare gem that will fulfil your every expectation. Renowned for our integrity, we are proud to count a loyal international clientele!",
      regionLabel: (i: number, total: number) => `Region ${i} / ${total}`,
      currentlyAvailable: (n: number) =>
        `${n} propert${n > 1 ? "ies" : "y"} currently in portfolio`,
      viewProperties: "View properties →",
    },
    aboutPage: {
      eyebrow: "About Ellington",
      titleBefore: "About",
      titleAccent: "Ellington",
      heroSubtitle:
        "Born in the heart of the Gulf of Saint-Tropez, built on trust.",
      dividerLabel: "Our signature",
      bandSubtitle:
        "Ellington is more than a real estate agency — it is a signature.",
      storyTitle: "Our story",
      lead: "Born in the heart of the Gulf of Saint-Tropez, Ellington is more than a real estate agency — it is a signature. Its founder, having grown up in the region, possesses an intimate and instinctive knowledge of every area, every address, and every subtle detail that defines the value of a property on the French Riviera.",
      body: "Driven by a deeply international mindset, Ellington speaks to a clientele without borders — fluent in French, English and Dutch, with strong relationships across a network of international partners.",
      body2: "Choosing Ellington means partnering with a trusted advisor who combines deep local roots, international reach, and excellence in service.",
      stats: [
        { value: "30+", label: "Years on the Riviera" },
        { value: "€2.5B+", label: "In transactions" },
        { value: "9", label: "Exclusive regions" },
        { value: "3", label: "Languages spoken" },
      ],
      valuesEyebrow: "Our values",
      valuesTitleBefore: "Our",
      valuesTitleAccent: "Values",
      commitTitle: "What we stand for",
      values: [
        {
          title: "Integrity",
          body: "Complete transparency in every transaction, every conversation.",
        },
        {
          title: "Excellence",
          body: "Perfection in every detail, from the first consultation to the final signature.",
        },
        {
          title: "Discretion",
          body: "Every enquiry handled with absolute confidentiality and professionalism.",
        },
        {
          title: "Global reach",
          body: "Our network connects you with the most qualified buyers worldwide.",
        },
        {
          title: "Local roots",
          body: "Three decades living and breathing the Riviera market.",
        },
        {
          title: "Bespoke service",
          body: "Every client, every property, every strategy — entirely tailored.",
        },
      ],
      teamEyebrow: "The team",
      teamTitleBefore: "Agency",
      teamTitleAccent: "Team",
      team: [
        {
          name: "Marc Mehagnoul",
          role: "Founder & CEO",
          photo: "/team/marc-mehagnoul-v2.jpg",
          bio: "Founder of Ellington, Marc brings his intimate knowledge of the Gulf of Saint-Tropez and his commitment to excellence to an international clientele in search of exceptional properties.",
          email: "hello@ellington-international.fr",
          phone: "+33 6 74 75 07 03",
        },
        {
          name: "Sasha Bazzaro",
          role: "Co-founder & CEO",
          photo: "/team/sasha-bazzaro.jpg",
          bio: "Co-founder of Ellington, Sasha shares the same commitment to excellence, guiding an international clientele through their most prestigious projects on the French Riviera.",
          email: "",
          phone: "+33 7 69 95 69 27",
        },
        {
          name: "Sophia Potentier",
          role: "Commercial Operations Manager",
          photo: "/team/sophia-potentier.jpg",
          bio: "At the heart of the client relationship, Sophia oversees Ellington's commercial operations with rigour and an eye for detail, ensuring a seamless experience at every step.",
          email: "",
          phone: "+33 6 14 54 71 30",
        },
      ],
      ctaEyebrow: "A question?",
      ctaTitleBefore: "Let's find your",
      ctaTitleAccent: "property",
      ctaBody:
        "Whether you wish to buy, sell or value — our team is at your service.",
      ctaPrimary: "View properties",
    },
    contactPage: {
      eyebrow: "Contact",
      titleBefore: "Get in",
      titleAccent: "touch",
      subtitle:
        "We're here to answer your questions and guide you through your luxury real estate journey.",
      formTitle: "Send Us a Message",
      formSubtitle:
        "Fill out the form below and a member of our team will respond within 24 hours.",
      detailsTitle: "Contact Information",
      hoursTitle: "Office Hours",
      advisorBlock: {
        eyebrow: "Your contact",
        role: "Portfolio director",
        intro:
          "Every enquiry is handled personally, in the strictest discretion. Reach out — I will get back to you within 24 hours.",
        signature: "— Marc",
      },
      address: "Espace Lemarquis\nQuartier Bertaud\n83580 Gassin — France",
      monFri: "Monday – Friday",
      sat: "Saturday",
      sun: "Sunday",
      sunHours: "By appointment",
      monFriHours: "9am – 6pm",
      satHours: "10am – 4pm",
      confidentialTitle: "Confidential service",
      confidentialBody:
        "All your enquiries are handled with the strictest discretion, in line with our commitment to confidentiality.",
      thanks: "Thank you.",
      successBody:
        "Your message has been received. An advisor will contact you within 24 hours, in full confidentiality.",
      firstName: "First name",
      lastName: "Last name",
      emailField: "Email address",
      phone: "Phone number",
      firstNamePh: "John",
      lastNamePh: "Smith",
      emailPh: "john.smith@example.com",
      phonePh: "+33 6 12 34 56 78",
      subject: "Subject *",
      subjectPlaceholder: "Select a subject",
      subjects: [
        "Property acquisition",
        "Property valuation",
        "Property sale",
        "Seasonal rental",
        "Other enquiry",
      ],
      messageLabel: "Message",
      messagePlaceholder: "Please provide details about your inquiry...",
      disclaimer:
        "By submitting this form, you agree to our privacy policy. We will never share your personal information with third parties and will only use it to respond to your inquiry.",
      sendMessage: "Send message",
      consent:
        "I agree that my information may be used to contact me in connection with my enquiry.",
    },
    rentalsPage: {
      eyebrow: "Seasonal rentals",
      titleBefore: "Seasonal",
      titleAccent: "rentals",
      subtitle:
        "A curated selection of villas, country houses and apartments for rent on the Gulf of Saint-Tropez and the French Riviera.",
    },
    sellPage: {
      eyebrow: "Sell with Ellington",
      titleBefore: "Sell",
      titleAccent: "with us",
      lead: "Local expertise. International reach. Tailored excellence.",
      cta: "Request a valuation",
      whyTitle: "Why Ellington?",
      whyBody1:
        "Born in the heart of the Gulf of Saint-Tropez, Ellington is more than a real estate agency — it is a signature.",
      whyBody2:
        "Its founder, having grown up in the region, offers an instinctive understanding of every address and nuance that defines the value of a property on the French Riviera. This deep local knowledge, combined with a strong international network, allows us to connect exceptional properties with the right buyers.",
      whyBody3:
        "Fluent in French, English, and Dutch, and supported by trusted international partners, Ellington ensures each property benefits from targeted global exposure.",
      whyBody4:
        "We approach every sale with discretion, precision, and a bespoke strategy — because no property is ever the same.",
      processTitle: "Our selling process",
      steps: [
        {
          title: "Tailored valuation",
          body: "We provide a precise and strategic valuation based on market expertise, positioning your property for optimal results.",
        },
        {
          title: "Targeted exposure",
          body: "We activate our global network and private client base to reach serious and relevant buyers.",
        },
        {
          title: "Bespoke marketing",
          body: "Your property is presented through carefully crafted visuals and promoted to a qualified international audience.",
        },
        {
          title: "Negotiation & completion",
          body: "We guide you at every step from offer to signature, securing the transaction under the best possible conditions.",
        },
      ],
      trustTitle: "Why clients trust us",
      trustCards: [
        {
          title: "Discretion",
          body: "We understand the importance of privacy and handle every transaction with complete confidentiality.",
        },
        {
          title: "International network",
          body: "Our global connections bring qualified buyers beyond borders.",
        },
        {
          title: "Dedicated support",
          body: "A responsive, attentive team guiding you at every step.",
        },
        {
          title: "Tailored approach",
          body: "Every property benefits from a personalized strategy designed to maximize its value.",
        },
      ],
      ctaTitle: "Discover the true value of your property",
      ctaSubtitle:
        "Whether you are considering selling or simply exploring your options, our team is at your disposal.",
      ctaButton: "Request your confidential valuation",
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
      cookies: "Manage cookies",
      rights: (year: number) =>
        `© ${year} Ellington. All rights reserved.`,
    },
    cookies: {
      title: "Cookies & privacy",
      description:
        "We use essential cookies to make the site work (login, preferences) and, with your consent, cookies to measure audience and improve your experience. You can change your choice at any time.",
      acceptAll: "Accept all",
      refuse: "Refuse all",
      customize: "Customize",
      save: "Save my choices",
      learnMore: "Learn more",
      manage: "Manage my preferences",
      essentialLabel: "Essential cookies",
      essentialDesc:
        "Required for the site to work (authentication, language preferences). Always active.",
      analyticsLabel: "Audience measurement",
      analyticsDesc:
        "Help us understand how the site is used so we can improve it. No advertising use.",
      marketingLabel: "Marketing",
      marketingDesc:
        "Allow us to measure the effectiveness of our communications and personalise some content.",
    },
  },
  nl: {
    nav: {
      properties: "Woningen",
      buy: "Kopen",
      rentals: "Verhuur",
      regions: "Onze regio's",
      regionsNav: "Locaties",
      sell: "Verkopen",
      journal: "Journaal",
      about: "Over ons",
      contact: "Contact",
      login: "Inloggen",
      favorites: "Favorieten",
    },
    common: {
      backToPortfolio: "Terug naar portfolio",
      contactUs: "Neem contact op",
      callUs: "+33 4 93 12 34 56",
      readMore: "Ontdekken →",
      swipeHint: "← Veeg →",
      loading: "...",
      send: "Bericht versturen",
      sending: "Versturen…",
      reset: "Opnieuw instellen",
    },
    home: {
      eyebrow: "Luxe vastgoed · Côte d'Azur",
      titleBefore: "Ontdek elegantie",
      titleAccent: "",
      titleAfter: "",
      subtitle: "Exclusieve woningen aan de Franse Rivièra",
      whyEyebrow: "De Ellington-standaard",
      whyTitleBefore: "Waarom kiezen voor",
      whyTitleAccent: "Ellington",
      whySubtitle:
        "Ongeëvenaarde expertise in luxe vastgoed langs de hele Franse Rivièra.",
      whyCta: "Verkoop met ons",
      features: [
        {
          title: "Vertrouwde adviseurs",
          body: "Een vertrouwelijke, discrete aanpak met respect voor de hoogste professionele normen.",
        },
        {
          title: "Exclusief netwerk",
          body: "Bevoorrechte toegang tot off-market woningen, niet beschikbaar via openbare kanalen.",
        },
        {
          title: "€2.5B+ verkocht",
          body: "Een transactievolume dat het vertrouwen weerspiegelt dat onze cliënten aan de Rivièra in ons stellen.",
        },
        {
          title: "Service op maat",
          body: "Van eerste bezichtiging tot ondertekening, persoonlijke begeleiding bij elke stap.",
        },
      ] as { title: string; body: string }[],
      featuredEyebrow: "Selectie",
      featuredTitleBefore: "Uitgelichte",
      featuredTitleAccent: "woningen",
      featuredSubtitle:
        "Een zorgvuldig samengestelde selectie van de zeldzaamste woningen in ons portfolio, wekelijks ververst.",
      featuredCta: "Bekijk het volledige portfolio →",
      regionsEyebrow: "Onze regio's",
      regionsTitleBefore: "Uitzonderlijke",
      regionsTitleAccent: "adressen",
      regionsSubtitle:
        "Van Monaco tot Saint-Tropez zijn wij actief op de meest prestigieuze locaties aan de Franse Rivièra.",
      regionsCta: "Bekijk al onze regio's",
      newsletterEyebrow: "Blijf op de hoogte",
      newsletterTitleBefore: "Blijf",
      newsletterTitleAccent: "op de hoogte",
      newsletterSubtitle:
        "Ontvang exclusieve updates over nieuwe woningen en marktinzichten.",
      expertTitle: "Geen gewone lokale expert.",
      expertP1:
        "Geboren in het hart van de Golf van Saint-Tropez is Ellington meer dan een vastgoedkantoor — het is een handtekening.",
      expertP2:
        "De oprichter, opgegroeid in de regio, beschikt over een intieme en instinctieve kennis van elk gebied, elk adres en elk subtiel detail dat de waarde van een woning aan de Franse Rivièra bepaalt. Deze lokale expertise, door de jaren heen opgebouwd, staat nu ten dienste van een veeleisende clientèle op zoek naar uitmuntendheid.",
      expertP3:
        "Kiezen voor Ellington betekent samenwerken met een vertrouwde adviseur die diepe lokale wortels, internationaal bereik en uitmuntende service combineert.",
      newsletterDisclaimer:
        "Geen spam — u kunt zich op elk moment uitschrijven.",
      newsletterPlaceholder: "Uw e-mailadres",
      newsletterSubmit: "Inschrijven",
      newsletterSuccess: "Dank u, uw inschrijving is bevestigd.",
    },
    search: {
      buy: "Kopen",
      rent: "Huren",
      location: "Locatie",
      type: "Type woning",
      budget: "Budget",
      sort: "Sorteren op",
      allLocations: "Alle",
      allTypes: "Alle types",
      allBudgets: "Alle budgetten",
      allPrices: "Alle prijzen",
      submit: "Zoeken",
      results: (n: number) =>
        `${n} ${n > 1 ? "woningen" : "woning"} beschikbaar`,
      noResults: "Geen woning komt overeen met uw zoekopdracht.",
      noResultsCta: "Filters opnieuw instellen",
    },
    types: {
      villa: "Villa",
      penthouse: "Penthouse",
      apartment: "Appartement",
      estate: "Landgoed",
      chalet: "Chalet",
      townhouse: "Herenhuis",
      land: "Grond",
    },
    sort: {
      newest: "Nieuwste",
      priceDesc: "Prijs: hoog naar laag",
      priceAsc: "Prijs: laag naar hoog",
      areaDesc: "Grootste oppervlakte",
    },
    priceRanges: {
      all: "Alle prijzen",
      under3: "Tot €3M",
      r3to6: "€3 – €6M",
      r6to10: "€6 – €10M",
      r10to15: "€10 – €15M",
      over15: "€15M en meer",
    },
    propertyDetail: {
      reference: "Ref.",
      exclusive: "Exclusief",
      price: "Prijs",
      bedrooms: "Slaapkamers",
      bathrooms: "Badkamers",
      area: "Woonoppervlakte",
      year: "Bouwjaar",
      origin: "Herkomst",
      type: "Type",
      landArea: "Perceeloppervlakte",
      propertyDetailsTitle: "Kenmerken van de woning",
      officeHours: "Openingstijden",
      description: "Omschrijving",
      features: "Voorzieningen",
      location: "Locatie",
      mapUnavailable: "Kaart niet beschikbaar",
      addressNote:
        "Exact adres wordt op verzoek gedeeld, uit respect voor de vertrouwelijkheid van onze cliënt.",
      interestedTitle: "Geïnteresseerd?",
      interestedBody:
        "Neem contact met ons op voor meer informatie of om een privébezichtiging te plannen.",
      yourAdvisor: "Uw adviseur",
      advisorRole: "Portfoliodirecteur",
      phone: "Telefoon",
      email: "E-mail",
      confidentialTitle: "Vertrouwelijke service",
      confidentialBody:
        "Alle aanvragen worden met de grootste discretie behandeld. Onze internationale clientèle waardeert onze toewijding aan vertrouwelijkheid.",
      similar: "Vergelijkbare",
      similarAccent: "woningen",
      shortBed: "slpk.",
      shortBath: "badk.",
      energyTitle: "Energieprestatie",
      energyClass: "Energieprestatiediagnose",
      ghgClass: "Index voor broeikasgasemissies",
      energyDate: (date: string) =>
        `Diagnose uitgevoerd na 1 juli 2021${date ? ` — ${date}` : ""}`,
      energyCost: (min: number, max: number) =>
        `Geschatte jaarlijkse energiekosten bij standaardgebruik: tussen €${min.toLocaleString("nl-NL")} en €${max.toLocaleString("nl-NL")} per jaar`,
      energyUnavailable: "Diagnose in uitvoering.",
    },
    priceUnit: {
      week: "wk",
      month: "mnd",
    },
    propertiesPage: {
      eyebrow: "Portfolio",
      titleBefore: "Woningen",
      titleAccent: "te koop",
      subtitle:
        "Ontdek de uitzonderlijke woningen die Ellington over de hele Franse Rivièra heeft samengesteld.",
    },
    locationsPage: {
      eyebrow: "De Franse Rivièra",
      titleBefore: "Onze",
      titleAccent: "Locaties",
      subtitle:
        "Verken de meest prestigieuze locaties langs de Côte d'Azur, waar luxe en de mediterrane levensstijl samenkomen.",
      intro:
        "Maak kennis met Ellington, uw gerenommeerde vastgoedpartner sinds 1987. Genesteld in het hart van de Golf van Saint-Tropez stellen onze expertise en passie voor uitzonderlijke woningen ons in staat de verborgen parels van de Côte d'Azur te ontdekken. Met een vooruitstrevende digitale aanwezigheid en begeleiding op maat zijn wij uw bondgenoot bij het vinden van die zeldzame parel die aan al uw verwachtingen voldoet. Bekend om onze integriteit, zijn wij er trots op een trouwe internationale clientèle te mogen tellen!",
      regionLabel: (i: number, total: number) => `Regio ${i} / ${total}`,
      currentlyAvailable: (n: number) =>
        `${n} ${n > 1 ? "woningen" : "woning"} momenteel in portfolio`,
      viewProperties: "Bekijk woningen →",
    },
    aboutPage: {
      eyebrow: "Over Ellington",
      titleBefore: "Over",
      titleAccent: "Ellington",
      heroSubtitle:
        "Geboren in het hart van de Golf van Saint-Tropez, gebouwd op vertrouwen.",
      dividerLabel: "Onze signatuur",
      bandSubtitle:
        "Ellington is meer dan een vastgoedkantoor — het is een signatuur.",
      storyTitle: "Ons verhaal",
      lead: "Geboren in het hart van de Golf van Saint-Tropez is Ellington meer dan een vastgoedkantoor — het is een signatuur. De oprichter, opgegroeid in de regio, beschikt over een intieme en instinctieve kennis van elk gebied, elk adres en elk subtiel detail dat de waarde van een woning aan de Franse Rivièra bepaalt.",
      body: "Gedreven door een diep internationale instelling spreekt Ellington een clientèle zonder grenzen aan — vloeiend in het Frans, Engels en Nederlands, met sterke relaties binnen een netwerk van internationale partners.",
      body2: "Kiezen voor Ellington betekent samenwerken met een vertrouwde adviseur die diepe lokale wortels, internationaal bereik en uitmuntende service combineert.",
      stats: [
        { value: "30+", label: "Jaar aan de Rivièra" },
        { value: "€2.5B+", label: "Aan transacties" },
        { value: "9", label: "Exclusieve regio's" },
        { value: "3", label: "Gesproken talen" },
      ],
      valuesEyebrow: "Onze waarden",
      valuesTitleBefore: "Onze",
      valuesTitleAccent: "Waarden",
      commitTitle: "Waar wij voor staan",
      values: [
        {
          title: "Integriteit",
          body: "Volledige transparantie in elke transactie, elk gesprek.",
        },
        {
          title: "Uitmuntendheid",
          body: "Perfectie in elk detail, van het eerste gesprek tot de definitieve handtekening.",
        },
        {
          title: "Discretie",
          body: "Elke aanvraag behandeld met absolute vertrouwelijkheid en professionaliteit.",
        },
        {
          title: "Wereldwijd bereik",
          body: "Ons netwerk verbindt u met de meest gekwalificeerde kopers wereldwijd.",
        },
        {
          title: "Lokale wortels",
          body: "Drie decennia leven en ademen op de Rivièra-markt.",
        },
        {
          title: "Bespoke service",
          body: "Elke klant, elk pand, elke strategie — volledig op maat.",
        },
      ],
      teamEyebrow: "Het team",
      teamTitleBefore: "Het",
      teamTitleAccent: "Team",
      team: [
        {
          name: "Marc Mehagnoul",
          role: "Oprichter & CEO",
          photo: "/team/marc-mehagnoul-v2.jpg",
          bio: "Oprichter van Ellington stelt Marc zijn grondige kennis van de Golf van Saint-Tropez en zijn streven naar uitmuntendheid ten dienste van een internationale clientèle op zoek naar uitzonderlijke panden.",
          email: "hello@ellington-international.fr",
          phone: "+33 6 74 75 07 03",
        },
        {
          name: "Sasha Bazzaro",
          role: "Medeoprichter & CEO",
          photo: "/team/sasha-bazzaro.jpg",
          bio: "Medeoprichter van Ellington, deelt Sasha dezelfde toewijding aan uitmuntendheid en begeleidt een internationale clientèle door hun meest prestigieuze projecten aan de Franse Rivièra.",
          email: "",
          phone: "+33 7 69 95 69 27",
        },
        {
          name: "Sophia Potentier",
          role: "Manager Commerciële Operaties",
          photo: "/team/sophia-potentier.jpg",
          bio: "In het hart van de cliëntrelatie beheert Sophia de commerciële operaties van Ellington met nauwgezetheid en oog voor detail, en zorgt zo voor een naadloze ervaring bij elke stap.",
          email: "",
          phone: "+33 6 14 54 71 30",
        },
      ],
      ctaEyebrow: "Een vraag?",
      ctaTitleBefore: "Laten we samen uw",
      ctaTitleAccent: "pand vinden",
      ctaBody:
        "Of u nu wilt kopen, verkopen of taxeren — ons team staat tot uw dienst.",
      ctaPrimary: "Bekijk de panden",
    },
    contactPage: {
      eyebrow: "Contact",
      titleBefore: "Neem",
      titleAccent: "contact op",
      subtitle:
        "Wij staan klaar om uw vragen te beantwoorden en u te begeleiden in uw luxe vastgoedtraject.",
      formTitle: "Stuur ons een bericht",
      formSubtitle:
        "Vul onderstaand formulier in en een lid van ons team reageert binnen 24 uur.",
      detailsTitle: "Contactgegevens",
      hoursTitle: "Openingstijden",
      advisorBlock: {
        eyebrow: "Uw contactpersoon",
        role: "Portfoliodirecteur",
        intro:
          "Elke aanvraag wordt persoonlijk behandeld, in de grootste discretie. Neem contact op — ik kom binnen 24 uur bij u terug.",
        signature: "— Marc",
      },
      address: "Espace Lemarquis\nQuartier Bertaud\n83580 Gassin — France",
      monFri: "Maandag – Vrijdag",
      sat: "Zaterdag",
      sun: "Zondag",
      sunHours: "Op afspraak",
      monFriHours: "9.00 – 18.00",
      satHours: "10.00 – 16.00",
      confidentialTitle: "Vertrouwelijke service",
      confidentialBody:
        "Al uw aanvragen worden met de grootste discretie behandeld, in lijn met onze toewijding aan vertrouwelijkheid.",
      thanks: "Dank u.",
      successBody:
        "Uw bericht is ontvangen. Een adviseur neemt binnen 24 uur contact met u op, in volledige vertrouwelijkheid.",
      firstName: "Voornaam",
      lastName: "Achternaam",
      emailField: "E-mailadres",
      phone: "Telefoonnummer",
      firstNamePh: "Jan",
      lastNamePh: "Jansen",
      emailPh: "jan.jansen@voorbeeld.nl",
      phonePh: "+33 6 12 34 56 78",
      subject: "Onderwerp *",
      subjectPlaceholder: "Selecteer een onderwerp",
      subjects: [
        "Aankoop van een woning",
        "Taxatie van een woning",
        "Verkoop van een woning",
        "Seizoensverhuur",
        "Andere aanvraag",
      ],
      messageLabel: "Bericht",
      messagePlaceholder: "Geef alstublieft details over uw aanvraag...",
      disclaimer:
        "Door dit formulier te verzenden, gaat u akkoord met ons privacybeleid. Wij delen uw persoonlijke gegevens nooit met derden en gebruiken deze uitsluitend om op uw aanvraag te reageren.",
      sendMessage: "Bericht versturen",
      consent:
        "Ik ga ermee akkoord dat mijn gegevens worden gebruikt om contact met mij op te nemen in verband met mijn aanvraag.",
    },
    rentalsPage: {
      eyebrow: "Seizoensverhuur",
      titleBefore: "Seizoens-",
      titleAccent: "verhuur",
      subtitle:
        "Een zorgvuldig samengestelde selectie van villa's, landhuizen en appartementen te huur aan de Golf van Saint-Tropez en de Franse Rivièra.",
    },
    sellPage: {
      eyebrow: "Verkopen met Ellington",
      titleBefore: "Verkoop",
      titleAccent: "met ons",
      lead: "Lokale expertise. Internationaal bereik. Uitmuntendheid op maat.",
      cta: "Vraag een taxatie aan",
      whyTitle: "Waarom Ellington?",
      whyBody1:
        "Geboren in het hart van de Golf van Saint-Tropez is Ellington meer dan een vastgoedkantoor — het is een handtekening.",
      whyBody2:
        "De oprichter, opgegroeid in de regio, biedt een instinctief begrip van elk adres en elke nuance die de waarde van een woning aan de Franse Rivièra bepaalt. Deze diepgaande lokale kennis, gecombineerd met een sterk internationaal netwerk, stelt ons in staat uitzonderlijke woningen te verbinden met de juiste kopers.",
      whyBody3:
        "Vloeiend in het Frans, Engels en Nederlands, en ondersteund door vertrouwde internationale partners, zorgt Ellington ervoor dat elke woning gerichte wereldwijde zichtbaarheid geniet.",
      whyBody4:
        "Wij benaderen elke verkoop met discretie, precisie en een strategie op maat — omdat geen enkele woning hetzelfde is.",
      processTitle: "Ons verkoopproces",
      steps: [
        {
          title: "Taxatie op maat",
          body: "Wij bieden een nauwkeurige en strategische taxatie op basis van marktexpertise, waarmee uw woning optimaal wordt gepositioneerd voor het beste resultaat.",
        },
        {
          title: "Gerichte zichtbaarheid",
          body: "Wij activeren ons wereldwijde netwerk en privécliëntenbestand om serieuze en relevante kopers te bereiken.",
        },
        {
          title: "Marketing op maat",
          body: "Uw woning wordt gepresenteerd met zorgvuldig vervaardigd beeldmateriaal en gepromoot bij een gekwalificeerd internationaal publiek.",
        },
        {
          title: "Onderhandeling & afronding",
          body: "Wij begeleiden u bij elke stap van bod tot ondertekening en stellen de transactie veilig onder de best mogelijke voorwaarden.",
        },
      ],
      trustTitle: "Waarom cliënten ons vertrouwen",
      trustCards: [
        {
          title: "Discretie",
          body: "Wij begrijpen het belang van privacy en behandelen elke transactie met volledige vertrouwelijkheid.",
        },
        {
          title: "Internationaal netwerk",
          body: "Onze wereldwijde connecties brengen gekwalificeerde kopers van over de grenzen.",
        },
        {
          title: "Toegewijde ondersteuning",
          body: "Een responsief, attent team dat u bij elke stap begeleidt.",
        },
        {
          title: "Aanpak op maat",
          body: "Elke woning profiteert van een persoonlijke strategie die is ontworpen om haar waarde te maximaliseren.",
        },
      ],
      ctaTitle: "Ontdek de werkelijke waarde van uw woning",
      ctaSubtitle:
        "Of u nu overweegt te verkopen of gewoon uw opties verkent, ons team staat tot uw beschikking.",
      ctaButton: "Vraag uw vertrouwelijke taxatie aan",
    },
    footer: {
      tagline:
        "Luxe vastgoed aan de Franse Rivièra. Uitzonderlijke woningen, vertrouwelijke service.",
      explore: "Verkennen",
      contact: "Contact",
      hours: "Openingstijden",
      regions: "Onze regio's",
      monFri: "Maandag – Vrijdag · 9.00 – 18.00",
      sat: "Zaterdag · 10.00 – 16.00",
      sun: "Zondag · op afspraak",
      cityLabel: "Franse Rivièra, Frankrijk",
      legal: "Juridisch",
      privacy: "Privacy",
      cookies: "Cookies beheren",
      rights: (year: number) =>
        `© ${year} Ellington. Alle rechten voorbehouden.`,
    },
    cookies: {
      title: "Cookies & privacy",
      description:
        "Wij gebruiken essentiële cookies om de site te laten werken (inloggen, voorkeuren) en, met uw toestemming, cookies om het publiek te meten en uw ervaring te verbeteren. U kunt uw keuze op elk moment wijzigen.",
      acceptAll: "Alles accepteren",
      refuse: "Alles weigeren",
      customize: "Aanpassen",
      save: "Mijn keuzes opslaan",
      learnMore: "Meer informatie",
      manage: "Mijn voorkeuren beheren",
      essentialLabel: "Essentiële cookies",
      essentialDesc:
        "Vereist om de site te laten werken (authenticatie, taalvoorkeuren). Altijd actief.",
      analyticsLabel: "Publieksmeting",
      analyticsDesc:
        "Helpen ons te begrijpen hoe de site wordt gebruikt zodat wij die kunnen verbeteren. Geen gebruik voor advertentiedoeleinden.",
      marketingLabel: "Marketing",
      marketingDesc:
        "Stellen ons in staat de effectiviteit van onze communicatie te meten en bepaalde inhoud te personaliseren.",
    },
  },
} as const;

export type Dict = (typeof dictRaw)["fr"];

export const dict: Record<Lang, Dict> = dictRaw as unknown as Record<Lang, Dict>;

