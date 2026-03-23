import { Header } from "../components/header";
import { Footer } from "../components/footer";

export const metadata = {
  title: "À propos | Plomberie Dupont Lyon",
  description: "Découvrez l'histoire et les valeurs de Plomberie Dupont Lyon",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">À propos de nous</h1>
            <p className="text-lg text-gray-100">
              18 ans de confiance et de qualité au service des Lyonnais
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-text mb-6">
              Notre histoire
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Depuis 18 ans, Plomberie Dupont Lyon intervient sur les chantiers les plus variés de la région lyonnaise. Nous avons débuté avec une simple passion pour le métier et une volonté de fournir un service de qualité à nos clients.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Au fil des années, nous avons construit une réputation solide basée sur notre professionnalisme, notre réactivité et notre engagement envers l'excellence.
            </p>
            <p className="text-lg text-gray-700">
              Aujourd'hui, notre équipe qualifiée intervient sur tous types de travaux en plomberie et chauffage, du dépannage d'urgence à la rénovation complète.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-text mb-12 text-center">
              Nos valeurs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-secondary mb-4">
                  Qualité
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Qualité du travail
                </h3>
                <p className="text-gray-700">
                  Nous utilisons des matériaux de qualité et effectuons un travail soigné sur chaque intervention.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-secondary mb-4">
                  Réactivité
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Réactivité et rapidité
                </h3>
                <p className="text-gray-700">
                  En cas d'urgence, nous intervenons dans les 30 minutes. Service 24h/24, 7j/7.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-secondary mb-4">
                  Honnêteté
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Transparence et honnêteté
                </h3>
                <p className="text-gray-700">
                  Devis gratuit et transparent avant toute intervention. Pas de surprise sur la facture.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">18</div>
                <p className="text-gray-700">Ans d'expérience</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">30km</div>
                <p className="text-gray-700">Zone d'intervention</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">1000+</div>
                <p className="text-gray-700">Clients satisfaits</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
                <p className="text-gray-700">Service d'urgence</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-text mb-8 text-center">
              Notre équipe
            </h2>
            <p className="text-lg text-gray-700 text-center mb-8">
              Nous sommes une équipe de plombiers qualifiés et expérimentés, passionnés par notre métier et dédiés à la satisfaction de nos clients.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-cta text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Faites confiance à des experts
            </h2>
            <a
              href="tel:0612345678"
              className="inline-block bg-white text-cta px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all"
            >
              Nous contacter
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
