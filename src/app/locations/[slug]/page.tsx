import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProperties, locations } from "@/lib/properties";
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

  const allProps = await getProperties();
  const cityProperties = allProps.filter(
    (p) => p.city.toLowerCase() === loc.name.toLowerCase(),
  );
  const otherLocations = locations.filter((l) => l.slug !== loc.slug);

  return (
    <LocationDetail
      location={loc}
      cityProperties={cityProperties}
      otherLocations={otherLocations}
    />
  );
}
