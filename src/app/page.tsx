import { getAllPosts } from "@/lib/blog";
import { HomeContent } from "@/components/HomeContent";

export default function HomePage() {
  // Server-side: filesystem read at build time → posts shipped as static data.
  const posts = getAllPosts();
  return <HomeContent posts={posts} />;
}
