import type { Metadata } from "next";
import LegalContent from "./LegalContent";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Ellington Properties.",
  robots: { index: false, follow: true },
};

export default function LegalPage() {
  return <LegalContent />;
}
