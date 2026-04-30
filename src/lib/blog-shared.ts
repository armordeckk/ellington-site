// Shared blog primitives — types, labels, pure formatters.
// MUST stay free of any Node-only imports (no fs, no path) so client
// components can use it.

export type BlogCategory =
  | "guides-achat"
  | "marche"
  | "architecture"
  | "art-de-vivre"
  | "fiscalite";

export const CATEGORY_LABELS: Record<BlogCategory, { fr: string; en: string }> = {
  "guides-achat": { fr: "Guides d'achat", en: "Buyer's Guides" },
  marche: { fr: "Marché immobilier", en: "Market Analysis" },
  architecture: { fr: "Architecture & patrimoine", en: "Architecture & Heritage" },
  "art-de-vivre": { fr: "Art de vivre", en: "Lifestyle" },
  fiscalite: { fr: "Fiscalité & juridique", en: "Tax & Legal" },
};

export interface PostFrontmatter {
  title: string;
  excerpt: string;
  category: BlogCategory;
  publishedAt: string;
  updatedAt?: string;
  cover: string;
  coverAlt?: string;
  author?: string;
  readingTime?: number;
  tags?: string[];
  metaDescription?: string;
}

export interface Post extends PostFrontmatter {
  slug: string;
  content: string;
}

export function formatDate(iso: string, lang: "fr" | "en" = "fr"): string {
  const d = new Date(iso);
  return d.toLocaleDateString(lang === "en" ? "en-GB" : "fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
