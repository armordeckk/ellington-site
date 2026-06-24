import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locations, getProperties } from "@/lib/properties";
import { LocationDetail } from "@/components/LocationDetail";

interface Props {
  params: Promise<{ slug: string }>;
}

// Pre-render all 6 city pages at build time → static, ultra-fast, indexable.
export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const loc = locations.find((l) => l.slug === slug);
  if (!loc) return { title: "Région introuvable | Ellington" };

  const description =
    loc.metaDescription ?? loc.description.slice(0, 160);
  const title = `Immobilier de prestige à ${loc.name} | Ellington`;

  return {
    title,
    description,
    alternates: { canonical: `/locations/${loc.slug}` },
    openGraph: {
      title,
      description,
      url: `/locations/${loc.slug}`,
      type: "website",
      locale: "fr_FR",
      images: [{ url: loc.image, alt: loc.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [loc.image],
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const loc = locations.find((l) => l.slug === slug);
  if (!loc) notFound();

  // Properties shown in the "Properties in this region" section. Prefer exact
  // city matches; fall back to a few sale listings so the section is never empty.
  const all = await getProperties({ category: "sale" });
  const norm = (s: string) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  const inRegion = all.filter((p) => norm(p.city) === norm(loc.name));
  const regionProperties = (inRegion.length ? inRegion : all).slice(0, 3);

  return <LocationDetail location={loc} properties={regionProperties} />;
}
