import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Unsplash placeholders (mock data)
      { protocol: "https", hostname: "images.unsplash.com" },
      // Apimo CDN — exact hostnames vary across the platform; we whitelist all
      // common ones so any agency's media works once env vars are set.
      { protocol: "https", hostname: "**.apimo.pro" },
      { protocol: "https", hostname: "d1qfj231ug7wdu.cloudfront.net" },
      { protocol: "https", hostname: "**.cloudfront.net" },
      { protocol: "https", hostname: "**.amazonaws.com" },
    ],
  },
};

export default nextConfig;
