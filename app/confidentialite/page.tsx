import { Header } from "../components/header";
import { Footer } from "../components/footer";

export const metadata = {
  title: "Politique de confidentialité | Plomberie Dupont Lyon",
  description: "Politique de confidentialité et traitement des données de Plomberie Dupont Lyon",
};

export default function ConfidentialitePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-text mb-8">
              Politique de confidentialité
            </h1>

            <h2 className="text-2xl font-bold text-text mt-8 mb-4">
              1. Collecte de données
            </h2>
            <p>
              Nous collectons vos données personnelles (nom, email, téléphone) lorsque vous remplissez notre formulaire de contact. Ces données sont collectées uniquement avec votre consentement.
            </p>

            <h2 className="text-2xl font-bold text-text mt-8 mb-4">
              2. Utilisation des données
            </h2>
            <p>
              Vos données personnelles sont utilisées uniquement pour:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Vous contacter en réponse à votre demande</li>
              <li>Vous envoyer nos actualités (avec votre consentement)</li>
              <li>Améliorer notre service</li>
            </ul>

            <h2 className="text-2xl font-bold text-text mt-8 mb-4">
              3. Protection des données
            </h2>
            <p>
              Nous mettons en place des mesures techniques et organisationnelles pour protéger vos données personnelles contre l'accès non autorisé, la modification ou la suppression.
            </p>

            <h2 className="text-2xl font-bold text-text mt-8 mb-4">
              4. Partage des données
            </h2>
            <p>
              Vos données ne sont jamais partagées avec des tiers sans votre consentement, sauf si la loi l'exige.
            </p>

            <h2 className="text-2xl font-bold text-text mt-8 mb-4">
              5. Durée de conservation
            </h2>
            <p>
              Nous conservons vos données personnelles pendant la durée nécessaire pour répondre à votre demande, et au maximum 3 ans après votre dernière interaction avec nous.
            </p>

            <h2 className="text-2xl font-bold text-text mt-8 mb-4">
              6. Vos droits
            </h2>
            <p>
              Conformément au RGPD, vous disposez des droits suivants:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'oubli (suppression)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité des données</li>
              <li>Droit d'opposition</li>
            </ul>

            <h2 className="text-2xl font-bold text-text mt-8 mb-4">
              7. Comment exercer vos droits
            </h2>
            <p>
              Pour exercer vos droits, veuillez nous contacter par email à contact@plomberie-dupont.fr ou par téléphone au 06 12 34 56 78.
            </p>

            <h2 className="text-2xl font-bold text-text mt-8 mb-4">
              8. Cookies
            </h2>
            <p>
              Notre site utilise des cookies pour améliorer votre expérience. Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela peut affecter votre expérience sur le site.
            </p>

            <h2 className="text-2xl font-bold text-text mt-8 mb-4">
              9. Modifications de la politique
            </h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Nous vous informerons des modifications via ce site.
            </p>

            <h2 className="text-2xl font-bold text-text mt-8 mb-4">
              10. Contact
            </h2>
            <p>
              Pour toute question concernant cette politique de confidentialité, veuillez nous contacter:<br /><br />
              Plomberie Dupont Lyon<br />
              45 rue de la République, 69002 Lyon<br />
              06 12 34 56 78<br />
              contact@plomberie-dupont.fr
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
