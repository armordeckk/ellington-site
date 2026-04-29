import { notFound } from "next/navigation";
import { getProperty, getProperties } from "@/lib/properties";
import type { Metadata } from "next";
import { PropertyDetailContent } from "@/components/PropertyDetailContent";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const p = getProperty(id);
  if (!p) return { title: "Propriété introuvable" };
  return {
    title: `${p.title} — ${p.city} | Ellington`,
    description: p.description.slice(0, 155),
  };
}

export default async function PropertyDetail({ params }: Props) {
  const { id } = await params;
  const property = getProperty(id);
  if (!property) notFound();

  const similar = getProperties()
    .filter((p) => p.id !== property.id && p.region === property.region)
    .slice(0, 3);

  return <PropertyDetailContent property={property} similar={similar} />;
}
