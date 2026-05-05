import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ellington Properties — Immobilier de prestige · Golfe de Saint-Tropez",
    template: "%s | Ellington Properties",
  },
  description:
    "Ellington Properties, agence immobilière de prestige spécialisée dans les biens d'exception sur le Golfe de Saint-Tropez. Saint-Tropez, Grimaud, Port Grimaud, Ramatuelle, Gassin, Sainte-Maxime.",
  applicationName: "Ellington Properties",
  authors: [{ name: "Ellington Properties" }],
  openGraph: {
    title: "Ellington Properties — Immobilier de prestige · Golfe de Saint-Tropez",
    description: "Biens d'exception dans le Golfe de Saint-Tropez.",
    type: "website",
    locale: "fr_FR",
    siteName: "Ellington Properties",
  },
  icons: {
    icon: "/brand/logo.png",
    apple: "/brand/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
