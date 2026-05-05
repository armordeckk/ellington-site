import { notFound } from "next/navigation";
import { getProperty, getProperties } from "@/lib/properties";
import { getUserFavoriteIds } from "@/app/actions/favorites";
import type { Metadata } from "next";
import { PropertyDetailContent } from "@/components/PropertyDetailContent";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const p = await getProperty(id);
  if (!p) return { title: "Propriété introuvable" };
  return {
    title: `${p.title} — ${p.city} | Ellington`,
    description: p.description.slice(0, 155),
  };
}

export default async function PropertyDetail({ params }: Props) {
  const { id } = await params;
  const property = await getProperty(id);
  if (!property) notFound();

  const all = await getProperties();
  const similar = all
    .filter((p) => p.id !== property.id && p.region === property.region)
    .slice(0, 3);

  const favoredIds = await getUserFavoriteIds();
  const initialFavored = favoredIds.includes(property.id);
  const similarFavoredIds = favoredIds.filter((id) => similar.some((s) => s.id === id));

  return (
    <PropertyDetailContent
      property={property}
      similar={similar}
      initialFavored={initialFavored}
      similarFavoredIds={similarFavoredIds}
    />
  );
}
