// Rich, per-location editorial content for the location detail pages (Figma).
// Keyed by slug. Locations without an entry fall back to the lighter layout
// (hero + intro + favourites + CTA) in LocationDetail.

type L = { fr: string; en: string };

export interface LocationRich {
  heroSubtitle: L;
  intro: L;
  /** Optional override for the main banner image (defaults to loc.image). */
  mainImage?: string;
  overview: { label: L; value: L }[];
  lifestyleImage: string;
  lifestyle: { fr: string[]; en: string[] };
  highlights: { title: L; body: L }[];
  gastronomyImage: string;
  gastronomy: L;
  activities: { image: string; title: L }[];
  realEstate: L[];
}

export const LOCATION_CONTENT: Record<string, LocationRich> = {
  "saint-tropez": {
    heroSubtitle: {
      en: "Iconic Riviera Living, Timeless Elegance",
      fr: "L'art de vivre iconique de la Riviera, une élégance intemporelle",
    },
    intro: {
      en: "A destination renowned worldwide for its unique blend of heritage, glamour, and Mediterranean lifestyle. Saint-Tropez continues to attract an international clientele seeking both vibrancy and authenticity on the Côte d'Azur.",
      fr: "Une destination de renommée mondiale, mêlant patrimoine, glamour et art de vivre méditerranéen. Saint-Tropez continue d'attirer une clientèle internationale en quête à la fois d'effervescence et d'authenticité sur la Côte d'Azur.",
    },
    overview: [
      {
        label: { en: "Distance", fr: "Distance" },
        value: {
          en: "1H30 from Nice Airport",
          fr: "1h30 de l'aéroport de Nice",
        },
      },
      {
        label: { en: "Type", fr: "Type" },
        value: {
          en: "Internationally renowned coastal town",
          fr: "Ville côtière de renommée internationale",
        },
      },
      {
        label: { en: "Character", fr: "Caractère" },
        value: {
          en: "Historic village & world-famous port",
          fr: "Village historique & port mondialement connu",
        },
      },
      {
        label: { en: "Lifestyle", fr: "Art de vivre" },
        value: {
          en: "Mix of traditional charm and luxury lifestyle",
          fr: "Mélange de charme traditionnel et d'art de vivre luxueux",
        },
      },
    ],
    lifestyleImage: "/locations/saint-tropez/lifestyle.png",
    lifestyle: {
      en: [
        "Saint-Tropez offers a rare balance between authenticity and sophistication. By day, the village reveals its Provençal roots — local markets, artisan boutiques, and cafés tucked into narrow streets. The harbour, lined with pastel façades, welcomes some of the most iconic yachts in the world.",
        "By evening, Saint-Tropez transforms into a vibrant social hub. Renowned beach clubs, fine dining restaurants, and elegant venues create a dynamic yet refined atmosphere. Beyond the summer season, the town retains a quieter charm, offering a relaxed pace of life highly valued by residents and second-home owners alike.",
      ],
      fr: [
        "Saint-Tropez offre un équilibre rare entre authenticité et sophistication. Le jour, le village révèle ses racines provençales — marchés locaux, boutiques d'artisans et cafés nichés dans des ruelles étroites. Le port, bordé de façades pastel, accueille certains des yachts les plus iconiques au monde.",
        "Le soir, Saint-Tropez se transforme en un lieu de vie animé. Beach clubs réputés, restaurants gastronomiques et adresses élégantes créent une atmosphère dynamique et raffinée. Au-delà de la saison estivale, la ville conserve un charme plus paisible, offrant un art de vivre apprécié des résidents comme des propriétaires de résidences secondaires.",
      ],
    },
    highlights: [
      {
        title: { en: "The Old Village", fr: "Le Vieux Village" },
        body: {
          en: "A maze of cobbled lanes, pastel houses and hidden squares, where the soul of old Provence still lives on.",
          fr: "Un dédale de ruelles pavées, de maisons pastel et de places cachées, où l'âme de la vieille Provence vit encore.",
        },
      },
      {
        title: { en: "The Port", fr: "Le Port" },
        body: {
          en: "A focal point of Saint-Tropez life, where traditional fishing boats meet world-class yachts in an unmistakable Riviera setting.",
          fr: "Le cœur de la vie tropézienne, où pointus traditionnels et yachts d'exception se côtoient dans un décor de Riviera inimitable.",
        },
      },
      {
        title: { en: "Pampelonne Beaches", fr: "Les plages de Pampelonne" },
        body: {
          en: "Among the most famous beaches in the world, known for their white sand, turquoise waters, and legendary beach clubs.",
          fr: "Parmi les plages les plus célèbres au monde, réputées pour leur sable blanc, leurs eaux turquoise et leurs beach clubs légendaires.",
        },
      },
    ],
    gastronomyImage: "/locations/saint-tropez/gastronomy.png",
    gastronomy: {
      en: "Saint-Tropez is home to a vibrant culinary scene, ranging from authentic Provençal cuisine to internationally renowned dining experiences. The region's vineyards produce some of the finest rosé wines in Provence, complementing the Mediterranean lifestyle. Local markets and artisan shops continue to preserve the town's cultural identity, offering a genuine connection to the region.",
      fr: "Saint-Tropez abrite une scène culinaire vibrante, de la cuisine provençale authentique aux tables de renommée internationale. Les vignobles de la région produisent certains des plus grands rosés de Provence, en parfaite harmonie avec l'art de vivre méditerranéen. Marchés locaux et boutiques d'artisans préservent l'identité culturelle de la ville et offrent un lien authentique avec le territoire.",
    },
    activities: [
      {
        image: "/locations/saint-tropez/act-sailing.png",
        title: {
          en: "Sailing and yachting in the Gulf of Saint-Tropez",
          fr: "Voile et yachting dans le Golfe de Saint-Tropez",
        },
      },
      {
        image: "/locations/saint-tropez/act-walks.png",
        title: {
          en: "Coastal walks and scenic viewpoints",
          fr: "Balades côtières et points de vue panoramiques",
        },
      },
      {
        image: "/locations/saint-tropez/act-culture.png",
        title: {
          en: "Cultural visits (Citadel, museums, galleries)",
          fr: "Visites culturelles (Citadelle, musées, galeries)",
        },
      },
      {
        image: "/locations/saint-tropez/act-beach.png",
        title: {
          en: "Beach clubs and seaside relaxation",
          fr: "Beach clubs et détente en bord de mer",
        },
      },
      {
        image: "/locations/saint-tropez/act-events.png",
        title: {
          en: "Seasonal events and regattas",
          fr: "Événements saisonniers et régates",
        },
      },
    ],
    realEstate: [
      {
        en: "Contemporary villas with sea view",
        fr: "Villas contemporaines avec vue mer",
      },
      {
        en: "Exclusive estates in private domains",
        fr: "Domaines d'exception en propriété privée",
      },
      {
        en: "Provençal mas and country houses",
        fr: "Mas provençaux et maisons de campagne",
      },
      {
        en: "Waterfront apartments and penthouses",
        fr: "Appartements et penthouses en bord de mer",
      },
    ],
  },
};
