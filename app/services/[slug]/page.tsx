import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import Link from "next/link";
import { ChevronRight, Check } from "lucide-react";

type ServiceDetails = {
  [key: string]: {
    title: string;
    shortTitle: string;
    description: string;
    longDescription: string;
    benefits: string[];
    price: string;
    ctaText: string;
  };
};

const serviceDetails: ServiceDetails = {
  "depannage-urgent": {
    title: "Dépannage urgent plomberie",
    shortTitle: "Dépannage urgent",
    description: "Intervention rapide sous 30 minutes pour fuites, canalisations bouchées, WC, robinetterie",
    longDescription: "Vous avez une fuite, une canalisation bouchée ou un problème de plomberie urgent? Notre équipe intervient rapidement pour diagnostiquer et résoudre votre problème. Nous proposons des interventions 24h/24, 7j/7 pour les urgences.",
    benefits: [
      "Intervention sous 30 minutes",
      "Diagnostic gratuit du problème",
      "Reparation immédiate quand possible",
      "Devis transparent avant travaux",
      "Garantie sur les réparations",
      "Service d'urgence disponible jour et nuit"
    ],
    price: "À partir de 89€",
    ctaText: "Appeler pour une intervention d'urgence"
  },
  "renovation-salle-bain": {
    title: "Rénovation salle de bain",
    shortTitle: "Rénovation salle de bain",
    description: "Création et rénovation complète de salle de bain, douche à l'italienne, baignoire",
    longDescription: "Nous rénovons entièrement votre salle de bain selon vos envies et votre budget. Que vous cherchiez une douche moderne, une baignoire d'exception ou une refonte complète, notre équipe s'occupe de tout.",
    benefits: [
      "Conception et design personnalisés",
      "Matériaux de qualité premium",
      "Installation d'équipements modernes",
      "Respect des délais et du budget",
      "Conseil en agencement et décoration",
      "Garantie sur la qualité du travail"
    ],
    price: "Devis gratuit",
    ctaText: "Demander un devis gratuit"
  },
  "installation-chauffage": {
    title: "Installation chauffage",
    shortTitle: "Installation chauffage",
    description: "Installation et entretien de chaudières, radiateurs, plancher chauffant",
    longDescription: "Nous installons et entretenons tous les types de systèmes de chauffage. De la chaudière classique au chauffage par plancher, nous vous proposons les meilleures solutions pour votre confort.",
    benefits: [
      "Chaudières gaz et condensation",
      "Radiateurs et tuyauterie",
      "Chauffage par plancher chauffant",
      "Entretien annuel et révision",
      "Changement de radiateurs",
      "Économies d'énergie garanties"
    ],
    price: "Sur devis",
    ctaText: "Consulter un expert en chauffage"
  }
};

export async function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = serviceDetails[params.slug];
  if (!service) {
    return { title: "Service non trouvé" };
  }
  return {
    title: `${service.title} | Plomberie Dupont Lyon`,
    description: service.description,
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = serviceDetails[params.slug];

  if (!service) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-text mb-4">
              Service non trouvé
            </h1>
            <Link
              href="/services"
              className="text-cta hover:text-orange-600 font-semibold"
            >
              Retour aux services
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-4">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-primary">
              Accueil
            </Link>
            <ChevronRight size={16} className="text-gray-400" />
            <Link href="/services" className="text-gray-600 hover:text-primary">
              Services
            </Link>
            <ChevronRight size={16} className="text-gray-400" />
            <span className="text-primary font-semibold">{service.shortTitle}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-blue-900 text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl">
              {service.longDescription}
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-text mb-6">
                  Ce service comprend
                </h2>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <Check size={24} className="text-secondary" />
                      </div>
                      <span className="text-lg text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Additional Info */}
              <div className="bg-blue-50 border-l-4 border-primary p-6 rounded">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Pourquoi faire appel à nos services?
                </h3>
                <p className="text-gray-700 mb-3">
                  Notre équipe de plombiers qualifiés possède une expérience de 18 ans dans le domaine. Nous utilisons des matériaux de qualité et nous garantissons un travail soigné.
                </p>
                <p className="text-gray-700">
                  Nous proposons également un service client exceptionnel, des devis gratuits et transparents, et une disponibilité 24h/24 pour les urgences.
                </p>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-primary to-blue-900 text-white rounded-lg shadow-lg p-8 sticky top-20">
                <h3 className="text-2xl font-bold mb-4">
                  Tarif
                </h3>
                <p className="text-lg mb-6 text-gray-100">
                  {service.price}
                </p>

                <div className="bg-white bg-opacity-10 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-100 mb-2">
                    Devis gratuit et sans engagement
                  </p>
                </div>

                <a
                  href="tel:0612345678"
                  className="w-full block bg-cta hover:bg-orange-600 text-white px-6 py-4 rounded-lg font-bold text-lg text-center transition-all transform hover:scale-105 mb-3"
                >
                  {service.ctaText}
                </a>

                <a
                  href="mailto:contact@plomberie-dupont.fr"
                  className="w-full block bg-white hover:bg-gray-100 text-primary px-6 py-3 rounded-lg font-semibold text-center transition-all"
                >
                  Email
                </a>

                <div className="mt-8 pt-8 border-t border-white border-opacity-20 space-y-3 text-sm">
                  <div>
                    <p className="font-semibold mb-1">Horaires</p>
                    <p className="text-gray-100">Lun-Ven: 7h30-19h</p>
                    <p className="text-gray-100">Sam: 8h-13h</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Urgences</p>
                    <p className="text-secondary font-bold">7j/7 24h/24</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-secondary text-primary py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Prêt à débuter?
            </h2>
            <p className="text-lg mb-6">
              Contactez-nous pour une première consultation gratuite.
            </p>
            <a
              href="tel:0612345678"
              className="inline-block bg-primary hover:bg-blue-900 text-white px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105"
            >
              06 12 34 56 78
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
