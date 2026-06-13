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
      buy: "Acheter",
      rentals: "Locations",
      regions: "Nos régions",
      regionsNav: "Régions",
      sell: "Vendre",
      journal: "Journal",
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
        "Une expertise inégalée de l'immobilier de luxe sur l'ensemble de la Côte d'Azur",
      dividerLabel: "Notre signature",
      lead: "Née au cœur du Golfe de Saint-Tropez, Ellington est plus qu'une agence immobilière — c'est une signature. Son fondateur, ayant grandi dans la région, possède une connaissance intime et instinctive de chaque secteur, chaque adresse, chaque détail subtil qui définit la valeur d'un bien sur la Côte d'Azur. Cette expertise locale, bâtie au fil des années, est aujourd'hui mise au service d'une clientèle exigeante en quête d'excellence.",
      body: "Animée par un esprit profondément international, Ellington s'adresse à une clientèle sans frontières. Trilingue en français, anglais et néerlandais, notre équipe dirigeante a tissé de solides relations avec un réseau de partenaires internationaux, attirant des acquéreurs qualifiés et garantissant à chaque bien une exposition ciblée et stratégique. Qu'il s'agisse de villas d'exception, d'appartements de prestige ou de biens uniques, chaque propriété est présentée selon une approche sur-mesure, alliant discrétion, précision et souci du détail.",
      body2: "L'équipe Ellington, engagée et attentive, accompagne chaque projet avec dévouement et raffinement. De l'estimation à la finalisation, chaque étape est traitée avec rigueur, garantissant la valorisation pleine de votre bien et la sécurisation de votre transaction dans les meilleures conditions possibles. Choisir Ellington, c'est s'associer à un conseiller de confiance combinant des racines locales profondes, un rayonnement international et l'excellence du service.",
      stats: [
        { value: "2,5 Md€", label: "Volume de transactions" },
        { value: "+ 30 ans", label: "D'expertise sur la Riviera" },
        { value: "120+", label: "Clients internationaux" },
        { value: "6", label: "Bureaux sur la Côte d'Azur" },
      ],
      valuesEyebrow: "Nos valeurs",
      valuesTitleBefore: "Nos",
      valuesTitleAccent: "valeurs",
      values: [
        {
          title: "Intégrité",
          body: "Nous opérons en toute transparence et honnêteté, garantissant à chaque client un accompagnement de confiance tout au long de son parcours immobilier.",
        },
        {
          title: "Excellence",
          body: "Nous visons la perfection dans chaque détail, de la première consultation à la transaction finale, pour un service qui dépasse les attentes.",
        },
        {
          title: "Discrétion",
          body: "Votre confidentialité est primordiale. Toutes les demandes et transactions sont traitées avec la plus grande discrétion et le plus haut professionnalisme.",
        },
        {
          title: "Rayonnement international",
          body: "Notre vaste réseau international vous connecte à des opportunités et à des clients du monde entier.",
        },
        {
          title: "Expertise du marché",
          body: "Trois décennies d'expérience offrent une connaissance inégalée des tendances du marché, des valeurs immobilières et des opportunités d'investissement.",
        },
        {
          title: "Service personnalisé",
          body: "Chaque client bénéficie d'une attention sur-mesure et de solutions adaptées à ses besoins et aspirations uniques.",
        },
      ],
      teamEyebrow: "L'équipe",
      teamTitleBefore: "Notre",
      teamTitleAccent: "équipe",
      team: [
        {
          name: "Marc Mehagnoul",
          role: "Fondateur & CEO",
          photo: "/team/marc-mehagnoul.jpg",
          bio: "Fort de plus de 30 ans d'expérience dans l'immobilier de luxe, Marc a fondé Ellington avec la vision de redéfinir l'excellence sur le marché de la Côte d'Azur.",
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
      ctaTitleBefore: "Discutons de votre",
      ctaTitleAccent: "projet",
      ctaBody:
        "Que vous souhaitiez acquérir, vendre ou estimer un bien d'exception, nos conseillers sont à votre disposition.",
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
        "Unparalleled expertise in luxury real estate across the French Riviera",
      dividerLabel: "Our signature",
      lead: "Born in the heart of the Gulf of Saint-Tropez, Ellington is more than a real estate agency — it is a signature. Its founder, having grown up in the region, possesses an intimate and instinctive knowledge of every area, every address, and every subtle detail that defines the value of a property on the French Riviera. This local expertise, built over the years, is now dedicated to serving a discerning clientele in search of excellence.",
      body: "Driven by a deeply international mindset, Ellington speaks to a clientele without borders. Fluent in French, English, and Dutch, the leadership has developed strong relationships with a network of international partners, attracting qualified buyers and ensuring each property benefits from targeted and strategic exposure. Whether it is exceptional villas, prestigious apartments, or unique properties, every home is presented through a tailored approach, combining discretion, precision, and attention to detail.",
      body2: "The Ellington team, committed and attentive, supports each project with dedication and refinement. From valuation to completion, every step is handled with rigor, ensuring your property is fully enhanced and your transaction secured under the best possible conditions. Choosing Ellington means partnering with a trusted advisor who combines deep local roots, international reach, and excellence in service.",
      stats: [
        { value: "€2.5B", label: "Transaction volume" },
        { value: "30+ years", label: "Of Riviera expertise" },
        { value: "120+", label: "International clients" },
        { value: "6", label: "Offices on the French Riviera" },
      ],
      valuesEyebrow: "Our values",
      valuesTitleBefore: "Our",
      valuesTitleAccent: "Values",
      values: [
        {
          title: "Integrity",
          body: "We operate with complete transparency and honesty, ensuring every client receives trustworthy guidance throughout their real estate journey.",
        },
        {
          title: "Excellence",
          body: "We strive for perfection in every detail, from initial consultation to final transaction, delivering service that exceeds expectations.",
        },
        {
          title: "Discretion",
          body: "Your privacy is paramount. We handle all inquiries and transactions with the utmost confidentiality and professionalism.",
        },
        {
          title: "Global Reach",
          body: "Our extensive international network connects you with opportunities and clients from around the world.",
        },
        {
          title: "Market Expertise",
          body: "Three decades of experience provide unmatched insight into market trends, property values, and investment opportunities.",
        },
        {
          title: "Personalized Service",
          body: "Every client receives tailored attention and customized solutions designed to meet their unique needs and aspirations.",
        },
      ],
      teamEyebrow: "The team",
      teamTitleBefore: "Agency",
      teamTitleAccent: "Team",
      team: [
        {
          name: "Marc Mehagnoul",
          role: "Founder & CEO",
          photo: "/team/marc-mehagnoul.jpg",
          bio: "With over 30 years of experience in luxury real estate, Marc founded Ellington with a vision to redefine excellence in the French Riviera market.",
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
      ctaTitleBefore: "Let's discuss your",
      ctaTitleAccent: "project",
      ctaBody:
        "Whether you wish to acquire, sell or value an exceptional property, our advisors are at your disposal.",
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
} as const;

export type Dict = (typeof dictRaw)["fr"];

export const dict: Record<Lang, Dict> = dictRaw as unknown as Record<Lang, Dict>;

