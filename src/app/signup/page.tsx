import type { Metadata } from "next";
import { AuthForm } from "@/components/AuthForm";

export const metadata: Metadata = {
  title: "Créer un compte",
  description: "Créez votre compte pour sauvegarder vos biens favoris.",
};

export default function SignupPage() {
  return <AuthForm mode="signup" />;
}
