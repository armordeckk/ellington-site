import type { Metadata } from "next";
import { ManageCookiesButton } from "@/components/ManageCookiesButton";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et de protection des données personnelles d'Ellington Properties.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <header className="mb-14">
          <p className="text-[11px] tracking-[0.32em] uppercase text-accent mb-5">
            Protection de vos données
          </p>
          <h1 className="font-serif text-5xl md:text-6xl">
            Politique de <em className="italic">confidentialité</em>
          </h1>
          <p className="text-sm text-muted mt-4">
            Dernière mise à jour : 5 mai 2026
          </p>
        </header>

        <div className="space-y-12 text-foreground/90 leading-[1.85]">
          <section>
            <p className="text-sm">
              Ellington Properties accorde une importance particulière à la
              protection de votre vie privée et de vos données personnelles. La
              présente politique vous informe de la manière dont nous
              recueillons, utilisons et protégeons les données collectées sur
              ce site, conformément au Règlement Général sur la Protection des
              Données (RGPD) et à la loi Informatique et Libertés modifiée.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">Responsable du traitement</h2>
            <p className="text-sm">
              Ellington Properties — Espace Lemarquis, Quartier Bertaud, 83580
              Gassin, France. SIRET 983 021 650.
              <br />
              Contact :{" "}
              <a
                href="mailto:hello@ellington-international.fr"
                className="text-accent underline-offset-4 hover:underline"
              >
                hello@ellington-international.fr
              </a>{" "}
              · +33 6 74 75 07 03
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">Données collectées</h2>
            <p className="text-sm mb-4">
              Nous ne collectons que les données strictement nécessaires aux
              services demandés :
            </p>
            <ul className="text-sm space-y-3 list-none">
              <li className="pl-5 border-l border-accent/40">
                <strong className="text-foreground">Formulaire de contact</strong> — nom, email, téléphone, message. Finalité : répondre à votre demande de renseignement ou de visite.
              </li>
              <li className="pl-5 border-l border-accent/40">
                <strong className="text-foreground">Création de compte</strong> — adresse email, mot de passe (chiffré), identifiants de session. Finalité : permettre la sauvegarde de vos biens favoris.
              </li>
              <li className="pl-5 border-l border-accent/40">
                <strong className="text-foreground">Favoris</strong> — référence des biens ajoutés à vos favoris et date d'ajout. Finalité : afficher votre sélection personnelle.
              </li>
              <li className="pl-5 border-l border-accent/40">
                <strong className="text-foreground">Préférences techniques</strong> — langue choisie, choix de cookies. Stockés localement dans votre navigateur.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">Bases légales</h2>
            <p className="text-sm mb-3">Les traitements reposent sur :</p>
            <ul className="text-sm space-y-2 list-disc pl-5">
              <li>
                <strong>Votre consentement</strong> — pour les cookies non essentiels et l'envoi de communications marketing.
              </li>
              <li>
                <strong>L'exécution d'un contrat ou de mesures précontractuelles</strong> — pour le traitement de vos demandes (contact, visite) et la gestion de votre compte.
              </li>
              <li>
                <strong>L'intérêt légitime</strong> — pour la sécurité technique du site et la prévention de la fraude.
              </li>
              <li>
                <strong>Les obligations légales</strong> — pour la conservation de certaines données liées à l'activité réglementée d'agent immobilier.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">Destinataires</h2>
            <p className="text-sm mb-3">
              Vos données ne sont jamais vendues. Elles peuvent être partagées avec nos sous-traitants, dans la stricte mesure nécessaire à la fourniture du service :
            </p>
            <ul className="text-sm space-y-2 list-disc pl-5">
              <li>
                <strong>Vercel Inc.</strong> (États-Unis) — hébergement du site. Transfert encadré par les Clauses Contractuelles Types de la Commission européenne.
              </li>
              <li>
                <strong>Supabase Inc.</strong> (Irlande, UE) — base de données et authentification. Données stockées en Union européenne.
              </li>
              <li>
                <strong>Apimo</strong> — logiciel de gestion immobilière, pour la synchronisation des biens présentés.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">Durée de conservation</h2>
            <ul className="text-sm space-y-2 list-disc pl-5">
              <li>
                <strong>Demandes de contact</strong> — 3 ans à compter du dernier échange.
              </li>
              <li>
                <strong>Compte utilisateur et favoris</strong> — jusqu'à la suppression du compte par vos soins ou après 3 ans d'inactivité.
              </li>
              <li>
                <strong>Cookies de mesure d'audience</strong> — 13 mois maximum.
              </li>
              <li>
                <strong>Données comptables et liées à l'activité d'agent immobilier</strong> — durées légales de conservation.
              </li>
            </ul>
          </section>

          <section id="cookies" className="scroll-mt-32">
            <h2 className="font-serif text-2xl mb-4">Cookies</h2>
            <p className="text-sm mb-4">
              Le site utilise différentes catégories de cookies :
            </p>
            <ul className="text-sm space-y-3 list-none">
              <li className="pl-5 border-l border-accent/40">
                <strong className="text-foreground">Essentiels</strong> — nécessaires au fonctionnement (authentification, panier, choix de langue, mémorisation de votre choix de cookies). Toujours actifs, ne nécessitent pas de consentement.
              </li>
              <li className="pl-5 border-l border-accent/40">
                <strong className="text-foreground">Mesure d'audience</strong> — soumis à votre consentement, ils permettent de comprendre l'usage du site pour l'améliorer. Désactivés tant que vous ne les acceptez pas.
              </li>
              <li className="pl-5 border-l border-accent/40">
                <strong className="text-foreground">Marketing</strong> — soumis à votre consentement, ils permettent de mesurer l'efficacité de nos communications. Désactivés tant que vous ne les acceptez pas.
              </li>
            </ul>
            <div className="mt-6">
              <ManageCookiesButton className="text-[12px] tracking-[0.18em] uppercase px-5 py-3 border border-[var(--border-strong)] text-foreground hover:bg-[var(--background-elev)] transition">
                Gérer mes préférences cookies
              </ManageCookiesButton>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">Vos droits</h2>
            <p className="text-sm mb-3">
              Conformément au RGPD, vous disposez à tout moment des droits suivants sur vos données :
            </p>
            <ul className="text-sm space-y-2 list-disc pl-5">
              <li><strong>Accès</strong> — obtenir une copie des données vous concernant.</li>
              <li><strong>Rectification</strong> — corriger des données inexactes.</li>
              <li><strong>Effacement</strong> — demander la suppression de vos données.</li>
              <li><strong>Limitation</strong> — limiter le traitement dans certains cas.</li>
              <li><strong>Opposition</strong> — vous opposer à un traitement, notamment marketing.</li>
              <li><strong>Portabilité</strong> — récupérer vos données dans un format structuré.</li>
              <li><strong>Retrait du consentement</strong> — à tout moment, sans effet rétroactif.</li>
            </ul>
            <p className="text-sm mt-4">
              Pour exercer ces droits, contactez-nous à{" "}
              <a
                href="mailto:hello@ellington-international.fr"
                className="text-accent underline-offset-4 hover:underline"
              >
                hello@ellington-international.fr
              </a>
              . Nous répondons dans un délai d'un mois maximum.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">Réclamation</h2>
            <p className="text-sm">
              Si vous estimez que le traitement de vos données ne respecte pas la réglementation, vous pouvez introduire une réclamation auprès de la{" "}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline-offset-4 hover:underline"
              >
                CNIL
              </a>
              {" "}— l'autorité française de protection des données.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">Sécurité</h2>
            <p className="text-sm">
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre toute perte, altération, divulgation ou accès non autorisé : chiffrement des mots de passe, connexions HTTPS, contrôle d'accès aux outils internes, sous-traitants conformes au RGPD.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">Évolution de cette politique</h2>
            <p className="text-sm">
              Cette politique peut être mise à jour pour refléter les évolutions du site ou de la réglementation. La date de dernière mise à jour figure en haut de la page. Pour toute modification substantielle, vous serez informé via le site ou par email si vous disposez d'un compte.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
