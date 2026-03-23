import { Header } from "../components/header";
import { Footer } from "../components/footer";

export const metadata = {
  title: "Mentions légales | Plomberie Dupont Lyon",
  description: "Mentions légales de Plomberie Dupont Lyon",
};

export default function MentionsLegalesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-text mb-8">
              Mentions légales
            </h1>

            <h2 className="text-2xl font-bold text-text mt-8 mb-4">
              1. Éditeur du site
            </h2>
            <p>
              Plomberie Dupont Lyon<br />
              Adresse: 45 rue de la République, 69002 Lyon<br />
              Téléphone: 06 12 34 56 78<br />
              Email: contact@plomberie-dupont.fr
            </p>

            <h2 className="text-2xl font-bold text-text mt-8 mb-4">
              2. Hébergeur du site
            </h2>
            <p>
              Vercel Inc.<br />
              440 N Barranca Ave<br />
              Palo Alto, CA 94301<br />
              États-Unis
            </p>

            <h2 className="text-2xl font-bold text-text mt-8 mb-4">
              3. Propriété intellectuelle
            </h2>
            <p>
              Tous les contenus présents sur ce site (textes, images, graphismes) sont la propriété intellectuelle de Plomberie Dupont Lyon. Toute reproduction sans autorisation est interdite.
            </p>

            <h2 className="text-2xl font-bold text-text mt-8 mb-4">
              4. Limitation de responsabilité
            </h2>
            <p>
              Les informations présentes sur ce site sont fournies à titre informatif. Plomberie Dupont Lyon décline toute responsabilité en cas d'erreurs, d'omissions ou d'utilisation des informations contenues sur le site.
            </p>

            <h2 className="text-2xl font-bold text-text mt-8 mb-4">
              5. Cookies
            </h2>
            <p>
              Ce site utilise des cookies pour améliorer votre expérience utilisateur. En continuant votre navigation, vous acceptez l'utilisation des cookies.
            </p>

            <h2 className="text-2xl font-bold text-text mt-8 mb-4">
              6. RGPD
            </h2>
            <p>
              Conformément à la loi RGPD, vous disposez d'un droit d'accès, de modification, de suppression et de portabilité de vos données personnelles. Pour exercer ces droits, veuillez nous contacter à l'adresse: contact@plomberie-dupont.fr
            </p>

            <h2 className="text-2xl font-bold text-text mt-8 mb-4">
              7. Loi applicable
            </h2>
            <p>
              Ce site est soumis à la loi française. Les tribunal de Lyon sont seuls compétents pour résoudre les litiges.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
