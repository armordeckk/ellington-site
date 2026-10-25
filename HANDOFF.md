# Passation du site Ellington Properties

Ce document décrit comment reprendre la pleine propriété du site
**www.ellingtoninternational.com** (code, hébergement, base de données, emails).

À la fin, tout tourne sur les comptes du client et l'ancien prestataire
n'a plus aucun accès.

---

## 1. Vue d'ensemble des briques

| Brique | Rôle | Compte à créer par le client |
|---|---|---|
| **GitHub** | Le code source | Oui (gratuit) |
| **Vercel** | L'hébergement (déploie à chaque push) | Oui (gratuit) |
| **Supabase** | Connexion utilisateurs + favoris | Oui (gratuit) |
| **Resend** | Envoi des emails d'inscription | Oui (gratuit) |
| **Google Cloud** | Bouton « Se connecter avec Google » | Oui (gratuit) |
| **Apimo** | Les annonces immobilières | Déjà au client (agence) |
| **Domaine + DNS (Hostinger)** | ellingtoninternational.com | Déjà au client |
| **FormSubmit** | Le formulaire de contact | Aucun — juste l'email de Marc |

> Il n'y a **que 3 secrets** dans le code (voir `.env.example`). Tout le reste
> (Resend, Google, templates d'emails) est configuré **dans les tableaux de
> bord**, pas dans le code.

---

## 2. Ordre à suivre

1. Le client crée ses 5 comptes (GitHub, Vercel, Supabase, Resend, Google Cloud).
2. Transfert du **repo GitHub**.
3. Le client branche son **Vercel** sur le repo.
4. Transfert du projet **Supabase** (garde les utilisateurs et favoris).
5. Bascule du **domaine** vers le nouveau Vercel.
6. Le client reprend **Resend** et **Google** sur ses propres comptes.
7. L'ancien prestataire **révoque** ses accès et ses clés.

---

## 3. GitHub — transfert du repo

Le repo actuel : `armordeckk/ellington-site`.

**Méthode (transfert, garde tout l'historique) :**
1. Le client crée un compte sur https://github.com et donne son identifiant.
2. Prestataire : repo → **Settings → General → Danger Zone → Transfer ownership**.
3. Saisir le nom d'utilisateur GitHub du client → confirmer.
4. Le client accepte le transfert (email reçu). Le repo devient
   `pseudo-client/ellington-site`.

> Vercel se reconnectera au repo **sous son nouveau propriétaire** à l'étape 4.

---

## 4. Vercel — hébergement

Le plus simple est que le client **recrée** le projet (10 min), les valeurs
de configuration ne changent pas.

1. Le client crée un compte sur https://vercel.com en **se connectant avec son
   GitHub** (celui qui possède maintenant le repo).
2. **Add New → Project → Import** le repo `ellington-site`.
3. Framework détecté : **Next.js**. Ne rien changer aux réglages de build.
4. **Environment Variables** — ajouter les 6 variables (voir `.env.example`).
   Les valeurs se copient depuis l'ancien Vercel :
   `Settings → Environment Variables → (afficher/copier chaque valeur)`.
   - `APIMO_PROVIDER`, `APIMO_TOKEN`, `APIMO_AGENCY`
   - `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
   - `NEXT_PUBLIC_SITE_URL` = `https://www.ellingtoninternational.com`
5. **Deploy**. Le site est accessible sur une URL `*.vercel.app` temporaire.
6. Brancher le domaine → voir §5.

---

## 5. Domaine & DNS (Hostinger)

Le domaine est **déjà sur le compte Hostinger du client** — aucun transfert de
domaine n'est nécessaire. Il faut juste réattribuer le domaine au nouveau
projet Vercel.

> ⚠️ Un domaine ne peut être relié qu'à **un seul** projet Vercel à la fois.
> Pour éviter toute coupure, faire dans cet ordre :

1. **Ancien Vercel** : projet → Settings → Domains → **retirer**
   `ellingtoninternational.com` et `www.ellingtoninternational.com`.
2. **Nouveau Vercel** (celui du client) : projet → Settings → Domains →
   **ajouter** `www.ellingtoninternational.com` (et l'apex sans www, qui
   redirigera vers www).
3. Vercel confirme « Valid Configuration » car le DNS pointe déjà vers lui.

**Les enregistrements DNS actuels chez Hostinger (à conserver tels quels) :**

| Type | Nom | Valeur |
|---|---|---|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |
| TXT | `@` | `google-site-verification=…` (Search Console — garder) |
| TXT / CNAME | `resend._domainkey`, SPF, DMARC | enregistrements **Resend** — voir §7 |

> L'email de Marc (`marc@ellington-international.com`, **avec** tiret) est sur
> un **autre domaine** (Google Workspace) et n'est pas concerné par cette
> passation.

---

## 6. Supabase — transfert (garde utilisateurs + favoris)

On **transfère** le projet existant (réf. `qutxjgacxexzxbwhmqkw`) vers
l'organisation du client. Gros avantage : l'URL et les clés **ne changent
pas**, donc rien à retoucher côté Vercel, Google ou Resend après le transfert.

1. Le client crée un compte + une **organisation** sur https://supabase.com.
2. Le client **invite le prestataire** dans son organisation en rôle
   **Owner** : Organization → Team → Invite.
3. Prestataire : projet Ellington → **Project Settings → General →
   Transfer project** → choisir l'organisation du client → confirmer.
4. Une fois transféré, le client **retire le prestataire** de l'organisation.

> Rien d'autre à faire : les comptes inscrits, les favoris, la configuration
> Auth (emails de confirmation, redirections, Google) restent intacts.

---

## 7. Resend — emails d'inscription (reprise sur le compte du client)

Après le transfert Supabase, les emails continuent de partir via **le compte
Resend du prestataire**. Pour une propriété complète, le client bascule sur
son propre Resend :

1. Le client crée un compte sur https://resend.com.
2. **Domains → Add Domain** : `ellingtoninternational.com`.
3. Resend affiche des enregistrements (DKIM, SPF, DMARC) à ajouter chez
   **Hostinger** → les créer, puis cliquer **Verify** (quelques minutes).
4. **API Keys → Create** → copier la nouvelle clé (format `re_…`).
5. Dans **Supabase** : Project Settings → Authentication → **SMTP Settings** :
   - Host : `smtp.resend.com`  ·  Port : `465`  ·  User : `resend`
   - Password : **coller la nouvelle clé API Resend**
   - Sender : `noreply@ellingtoninternational.com`
6. Tester une inscription pour vérifier la réception de l'email.

> Tant que cette étape n'est pas faite, les emails fonctionnent encore via
> l'ancien compte — à faire dans le mois qui suit la passation.

---

## 8. Google Cloud — « Se connecter avec Google » (reprise)

Idem : ça continue de marcher après le transfert, mais pour tout posséder le
client recrée son propre identifiant OAuth.

1. Le client crée un projet sur https://console.cloud.google.com.
2. **APIs & Services → OAuth consent screen** : configurer (nom « Ellington »,
   email de support, domaine `ellingtoninternational.com`), puis **publier**.
3. **Credentials → Create credentials → OAuth client ID → Web application**.
4. **Authorized redirect URI** — la coller depuis Supabase :
   Supabase → Authentication → Providers → Google → « Callback URL ».
   (forme : `https://qutxjgacxexzxbwhmqkw.supabase.co/auth/v1/callback`)
5. Copier le **Client ID** et le **Client Secret**.
6. Dans **Supabase** → Authentication → Providers → **Google** : coller le
   nouveau Client ID + Secret → Save.
7. Tester le bouton « Se connecter avec Google » sur le site.

---

## 9. Formulaire de contact (FormSubmit)

Aucun compte : le formulaire envoie vers `marc@ellington-international.com`
via https://formsubmit.co. Rien à transférer. Si l'adresse de réception
change un jour, modifier l'email dans `src/components/ContactForm.tsx`
(une seule ligne) et réactiver via le lien reçu par email.

---

## 10. Nettoyage final (prestataire)

Une fois que tout tourne chez le client et a été testé :

- [ ] Retiré du projet/organisation **Supabase**.
- [ ] Domaine retiré de l'**ancien Vercel** ; ancien projet Vercel supprimé.
- [ ] Clé **Resend** de l'ancien compte révoquée (une fois le client sur sa
      propre clé).
- [ ] Identifiant **OAuth Google** de l'ancien projet supprimé (une fois le
      client sur le sien).
- [ ] Repo **GitHub** bien transféré (plus listé chez le prestataire).

---

## 11. Développement local (pour un futur dev)

```bash
npm install
cp .env.example .env.local   # puis remplir les valeurs
npm run dev                  # http://localhost:3000
```

- **Stack** : Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4.
- ⚠️ Cette version de Next.js a des spécificités : voir `AGENTS.md` et la doc
  dans `node_modules/next/dist/docs/` avant de coder.
- Chaque `git push` sur la branche `main` **déploie automatiquement** en prod
  via Vercel.

---

## 12. Code map — developer notes

Quick reference for where the main things live in the code.

### Styles & design
- `src/app/globals.css` — all design tokens (colours, type scale). Brand palette:
  navy `#1a2744`, gold `#c9a96e`. Typographic scale defined as `.type-h1`,
  `.type-h2`, `.type-card-title`, etc.
- **Tailwind CSS 4** — configured directly in `globals.css` (`@theme inline`,
  `@layer`), there is no `tailwind.config.js`.
- **Fonts** — loaded in `src/app/layout.tsx` via `next/font/google`:
  **Cormorant Garamond** (serif, headings) and **Inter** (sans, body).
- Scroll-reveal animations: `src/components/ScrollReveal.tsx` + the
  `[data-reveal]` / `.is-visible` rules in `globals.css`.

### Translations (FR / EN / NL)
- `src/lib/i18n.ts` — the single dictionary for the whole UI. Languages are
  `"fr" | "en" | "nl"` (`LANGS`), all UI strings live in the `dict` object,
  one entry per language. **To change UI wording, edit this file.**
- `src/components/LanguageProvider.tsx` — holds the current language, persisted
  in the browser `localStorage`. Components read it with `useLanguage()`.
- `src/components/LanguageToggle.tsx` — the FR | EN | NL switch in the header.
- ⚠️ **Property descriptions are NOT translated in the code.** They come straight
  from Apimo. Multilingual property text is managed on the Apimo side
  (Apimo multilingual fields) — the website just displays what the API returns.

### Property listings (Apimo)
- `src/lib/apimo.ts` — talks to the Apimo API. `fetchApimoProperties()` (the
  list) and `fetchApimoProperty(id)` (one property). Reads the credentials from
  the `APIMO_PROVIDER` / `APIMO_TOKEN` / `APIMO_AGENCY` env vars (see §5).
  Responses are cached for 10 minutes (ISR `revalidate: 600`).
- `src/lib/properties.ts` — the layer the pages call: `getProperties()`,
  `getProperty(id)`, `getFeaturedProperties()`. **Fallback:** if the Apimo env
  vars are missing, the site automatically serves the demo dataset
  (`mockProperties`) so it never breaks.
- Pages: `src/app/properties/page.tsx` (list) and
  `src/app/properties/[id]/page.tsx` (detail). Images are served from Apimo's
  CDN through Vercel's image optimizer.
- Known data quirks (come from Apimo, not bugs in the code): a few listings show
  a `€0` price or an all-caps title — fixed by correcting the data in Apimo.
