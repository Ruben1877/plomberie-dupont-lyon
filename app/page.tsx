import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { ServiceCard } from "./components/service-card";
import { Wrench, Droplet, Flame } from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: Wrench,
      title: "Dépannage urgent plomberie",
      description: "Intervention rapide sous 30 minutes pour fuites, canalisations bouchées, WC, robinetterie",
      price: "À partir de 89€",
      slug: "depannage-urgent"
    },
    {
      icon: Droplet,
      title: "Rénovation salle de bain",
      description: "Création et rénovation complète de salle de bain, douche à l'italienne, baignoire",
      price: "Devis gratuit",
      slug: "renovation-salle-bain"
    },
    {
      icon: Flame,
      title: "Installation chauffage",
      description: "Installation et entretien de chaudières, radiateurs, plancher chauffant",
      price: "Sur devis",
      slug: "installation-chauffage"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-blue-900 text-white pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Votre plombier de confiance à Lyon
              </h1>
              <p className="text-xl sm:text-2xl mb-4 text-gray-100">
                Depuis 18 ans, nous assurons vos interventions de plomberie et chauffage
              </p>
              <p className="text-lg mb-8 text-secondary font-semibold">
                Dépannage urgent - Devis gratuit - Travail garanti
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a
                  href="tel:0612345678"
                  className="bg-cta hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 inline-block"
                >
                  Appeler maintenant
                </a>
                <a
                  href="#services"
                  className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 inline-block"
                >
                  Voir nos services
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
                Nos services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Solutions complètes en plomberie et chauffage pour particuliers et professionnels
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard
                  key={service.slug}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  price={service.price}
                  slug={service.slug}
                />
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-text mb-6">
                  À propos de nous
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Plombier qualifié depuis 18 ans à Lyon et sa métropole. Spécialisé en dépannage urgent 7j/7, installation et rénovation de salles de bain, débouchage et entretien de canalisations.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Interventions rapides, devis gratuit, travail soigné et garanti. Nous mettons nos clients particuliers et professionnels au cœur de nos préoccupations.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary">18</div>
                    <p className="text-gray-600">ans d'expérience</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary">30km</div>
                    <p className="text-gray-600">zone d'intervention</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary bg-opacity-5 rounded-lg p-8 border border-secondary border-opacity-20">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Zone d'intervention
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  <strong>Lyon et métropole</strong>
                </p>
                <p className="text-gray-600 mb-6">
                  Nous intervenons sur toute l'agglomération lyonnaise et ses alentours dans un rayon de 30 km.
                </p>

                <h3 className="text-2xl font-bold text-primary mb-4 mt-8">
                  Nos horaires
                </h3>
                <div className="space-y-2 text-gray-600 mb-6">
                  <p><strong>Lun-Ven:</strong> 7h30 - 19h</p>
                  <p><strong>Samedi:</strong> 8h - 13h</p>
                  <p className="text-secondary font-semibold">
                    Urgences 7j/7 24h/24
                  </p>
                </div>

                <a
                  href="tel:0612345678"
                  className="w-full block bg-cta hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all transform hover:scale-105"
                >
                  Dépannage urgent: 06 12 34 56 78
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-secondary text-primary py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Besoin d'une intervention rapidement?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Contactez-nous dès maintenant pour un devis gratuit ou une intervention d'urgence.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="tel:0612345678"
                className="bg-primary hover:bg-blue-900 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 inline-block"
              >
                Appeler: 06 12 34 56 78
              </a>
              <a
                href="mailto:contact@plomberie-dupont.fr"
                className="bg-white hover:bg-gray-100 text-secondary px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 inline-block"
              >
                Email
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
