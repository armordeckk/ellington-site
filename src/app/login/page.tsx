import type { Metadata } from "next";
import { AuthForm } from "@/components/AuthForm";

export const metadata: Metadata = {
  title: "Connexion",
  description: "Connectez-vous à votre espace Ellington Properties.",
};

type SearchParams = Promise<{ signup?: string }>;

export default async function LoginPage({ searchParams }: { searchParams: SearchParams }) {
  const sp = await searchParams;
  return <AuthForm mode="login" signupSuccess={sp.signup === "success"} />;
}
