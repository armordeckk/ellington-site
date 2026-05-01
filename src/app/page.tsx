import { getAllPosts } from "@/lib/blog";
import { getCities, getFeaturedProperties } from "@/lib/properties";
import { HomeContent } from "@/components/HomeContent";

export default async function HomePage() {
  // Server-side : load posts + properties (Apimo or mock fallback) at build time / ISR
  const [posts, featured, cities] = await Promise.all([
    Promise.resolve(getAllPosts()),
    getFeaturedProperties(),
    getCities(),
  ]);
  return <HomeContent posts={posts} featured={featured.slice(0, 6)} cities={cities} />;
}
