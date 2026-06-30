import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { getFeaturedProperties } from "@/lib/properties";
import { HomeContent } from "@/components/HomeContent";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

export default async function HomePage() {
  // Server-side : load posts + properties (Apimo or mock fallback) at build time / ISR
  const [posts, featured] = await Promise.all([
    Promise.resolve(getAllPosts()),
    getFeaturedProperties(),
  ]);
  return <HomeContent posts={posts} featured={featured.slice(0, 6)} />;
}
