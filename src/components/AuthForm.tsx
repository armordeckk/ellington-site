"use client";

import Link from "next/link";
import { useActionState } from "react";
import { login, signup, type AuthState } from "@/app/actions/auth";

type Mode = "login" | "signup";

export function AuthForm({ mode, signupSuccess }: { mode: Mode; signupSuccess?: boolean }) {
  const action = mode === "login" ? login : signup;
  const [state, formAction, pending] = useActionState<AuthState, FormData>(action, null);

  const isLogin = mode === "login";

  return (
    <div className="max-w-md mx-auto px-6 py-24 md:py-32">
      <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-3 text-center">
        {isLogin ? "Connexion" : "Créer un compte"}
      </h1>
      <p className="text-sm text-muted text-center mb-10 tracking-[0.05em]">
        {isLogin
          ? "Accédez à votre sélection de biens favoris."
          : "Sauvegardez les biens qui vous inspirent."}
      </p>

      {signupSuccess && (
        <div className="mb-6 p-4 border border-accent/30 bg-accent/5 text-sm text-foreground">
          Compte créé. Vérifiez votre boîte mail pour confirmer votre adresse, puis connectez-vous.
        </div>
      )}

      <form action={formAction} className="space-y-5">
        <div>
          <label htmlFor="email" className="block text-[11px] tracking-[0.22em] uppercase text-muted-strong mb-2">
            Adresse email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] focus:border-accent focus:outline-none text-foreground"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-[11px] tracking-[0.22em] uppercase text-muted-strong mb-2">
            Mot de passe
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            minLength={isLogin ? undefined : 8}
            autoComplete={isLogin ? "current-password" : "new-password"}
            className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] focus:border-accent focus:outline-none text-foreground"
          />
          {!isLogin && (
            <p className="text-xs text-muted mt-2">8 caractères minimum.</p>
          )}
        </div>

        {state?.error && (
          <p className="text-sm text-red-600 border border-red-200 bg-red-50 px-4 py-3">
            {state.error}
          </p>
        )}

        <button
          type="submit"
          disabled={pending}
          className="w-full text-[13px] tracking-[0.18em] uppercase px-5 py-3.5 bg-accent text-white hover:bg-accent-hover transition disabled:opacity-50"
        >
          {pending
            ? "..."
            : isLogin
            ? "Se connecter"
            : "Créer mon compte"}
        </button>
      </form>

      <p className="text-sm text-muted text-center mt-8">
        {isLogin ? (
          <>
            Pas encore de compte ?{" "}
            <Link href="/signup" className="text-accent hover:underline">
              Créer un compte
            </Link>
          </>
        ) : (
          <>
            Déjà inscrit ?{" "}
            <Link href="/login" className="text-accent hover:underline">
              Se connecter
            </Link>
          </>
        )}
      </p>
    </div>
  );
}
