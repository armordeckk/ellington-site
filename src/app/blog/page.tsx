import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { BlogIndexContent } from "@/components/BlogIndexContent";

export const metadata: Metadata = {
  title: "Le journal Ellington — Guides, marché et art de vivre du Golfe de Saint-Tropez",
  description:
    "Guides d'achat, analyses de marché, lifestyle : retrouvez nos articles sur l'immobilier de prestige dans le Golfe de Saint-Tropez.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Le journal Ellington",
    description:
      "Guides d'achat, analyses de marché, lifestyle : nos articles sur l'immobilier de prestige du Golfe de Saint-Tropez.",
    url: "/blog",
    type: "website",
    locale: "fr_FR",
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();
  return <BlogIndexContent posts={posts} />;
}
