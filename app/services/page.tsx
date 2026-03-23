import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ServiceCard } from "../components/service-card";
import { Wrench, Droplet, Flame } from "lucide-react";

export const metadata = {
  title: "Nos services | Plomberie Dupont Lyon",
  description: "Découvrez tous nos services de plomberie, rénovation et chauffage à Lyon",
};

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

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-primary text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Nos services</h1>
            <p className="text-lg text-gray-100">
              Une gamme complète de solutions en plomberie et chauffage pour tous vos besoins
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
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

        {/* Why Choose Us */}
        <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-text mb-8 text-center">
              Pourquoi nous choisir?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Intervention rapide
                </h3>
                <p className="text-gray-600">
                  Nous intervenons en urgence pour les fuites et autres problèmes critiques.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Devis gratuit
                </h3>
                <p className="text-gray-600">
                  Nous établissons un devis détaillé sans frais avant chaque intervention.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Travail garanti
                </h3>
                <p className="text-gray-600">
                  Tous nos travaux sont couverts par une garantie de satisfaction.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-primary mb-3">
                  18 ans d'expérience
                </h3>
                <p className="text-gray-600">
                  Notre équipe qualifiée maîtrise tous les types d'interventions en plomberie.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-cta text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Prêt à débuter votre projet?
            </h2>
            <a
              href="tel:0612345678"
              className="inline-block bg-white text-cta px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all"
            >
              Contactez-nous dès maintenant
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
