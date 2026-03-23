import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <header className="bg-gradient-to-b from-primary to-blue-800 text-white py-20 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Plomberie Dupont Lyon</h1>
        <p className="text-xl mb-8">Votre plombier de confiance à Lyon depuis 18 ans</p>
        <a href="tel:0612345678" className="bg-cta text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600">
          06 12 34 56 78
        </a>
      </header>

      {/* Services Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Nos services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
              <h3 className="text-xl font-bold mb-3 text-primary">Dépannage urgent plomberie</h3>
              <p className="text-gray-700 mb-4">Intervention rapide sous 30 minutes pour fuites, canalisations bouchées, WC, robinetterie</p>
              <p className="font-semibold text-secondary">À partir de 89€</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
              <h3 className="text-xl font-bold mb-3 text-primary">Rénovation salle de bain</h3>
              <p className="text-gray-700 mb-4">Création et rénovation complète de salle de bain, douche à l'italienne, baignoire</p>
              <p className="font-semibold text-secondary">Devis gratuit</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
              <h3 className="text-xl font-bold mb-3 text-primary">Installation chauffage</h3>
              <p className="text-gray-700 mb-4">Installation et entretien de chaudières, radiateurs, plancher chauffant</p>
              <p className="font-semibold text-secondary">Sur devis</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-primary">Qui sommes-nous ?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Plombier qualifié depuis 18 ans à Lyon et sa métropole. Spécialisé en dépannage urgent 7j/7, installation et rénovation de salles de bain, débouchage et entretien de canalisations. Interventions rapides, devis gratuit, travail soigné et garanti.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">Horaires</h3>
              <p className="text-gray-700">Lun-Ven 7h30-19h</p>
              <p className="text-gray-700">Sam 8h-13h</p>
              <p className="font-semibold text-secondary mt-4">7j/7 24h/24 pour urgences</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">Zone d'intervention</h3>
              <p className="text-gray-700">Lyon et métropole (30km)</p>
              <h3 className="text-xl font-bold mt-6 mb-4 text-primary">Certifications</h3>
              <p className="text-gray-700">RGE QualiPAC</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-primary">Contactez-nous</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-gray-700 mb-2">Téléphone</p>
              <a href="tel:0612345678" className="text-xl font-bold text-cta">06 12 34 56 78</a>
            </div>
            <div>
              <p className="text-gray-700 mb-2">Email</p>
              <a href="mailto:contact@plomberie-dupont.fr" className="text-xl font-bold text-cta">contact@plomberie-dupont.fr</a>
            </div>
            <div>
              <p className="text-gray-700 mb-2">Adresse</p>
              <p className="text-xl font-bold text-primary">45 rue de la République<br />69002 Lyon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8 px-4 text-center">
        <p>&copy; 2026 Plomberie Dupont Lyon. Tous droits réservés.</p>
      </footer>
    </main>
  );
}
