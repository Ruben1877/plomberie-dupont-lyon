/**
 * Site data for Plomberie Dupont Lyon
 * Auto-generated from client brief (ETH-33670)
 */

export const siteData = {
  // Business Info
  businessName: "Plomberie Dupont Lyon",
  businessType: "Plombier",
  city: "Lyon",
  yearsOfExperience: 18,

  // Contact
  phone: "06 12 34 56 78",
  email: "contact@plomberie-dupont.fr",
  address: "45 rue de la République, 69002 Lyon",

  // Hours
  hours: "Lun-Ven 7h30-19h, Sam 8h-13h",
  emergency: "7j/7 24h/24 pour urgences",

  // Services
  services: [
    {
      title: "Dépannage urgent plomberie",
      description:
        "Intervention rapide sous 30 minutes pour fuites, canalisations bouchées, WC, robinetterie",
      price: "À partir de 89€",
    },
    {
      title: "Rénovation salle de bain",
      description:
        "Création et rénovation complète de salle de bain, douche à l'italienne, baignoire",
      price: "Devis gratuit",
    },
    {
      title: "Installation chauffage",
      description:
        "Installation et entretien de chaudières, radiateurs, plancher chauffant",
      price: "Sur devis",
    },
  ],

  // Branding
  tagline: "Votre plombier de confiance à Lyon depuis 18 ans",
  description:
    "Plombier qualifié depuis 18 ans à Lyon et sa métropole. Spécialisé en dépannage urgent 7j/7, installation et rénovation de salles de bain, débouchage et entretien de canalisations. Interventions rapides, devis gratuit, travail soigné et garanti.",

  // Service Area
  serviceArea: "Lyon et métropole (30km)",
  clientTypes: "Particuliers, Professionnels",

  // Design System
  colors: {
    primary: "#1E3A5F", // Navy blue
    secondary: "#D4A853", // Gold
    cta: "#F97316", // Orange
    background: "#FFFDF9",
    text: "#1A1A1A",
  },

  typography: {
    primaryFont: "Inter",
    secondaryFont: "Inter",
  },

  // SEO
  seo: {
    title: "Plomberie Dupont Lyon - Dépannage Urgent 24h/24",
    description:
      "Plombier à Lyon - Dépannage urgent sous 30 min, installation chauffage, rénovation salle de bain. 18 ans d'expérience. Devis gratuit.",
    keywords: [
      "plombier Lyon",
      "dépannage plomberie urgence",
      "rénovation salle de bain Lyon",
      "installation chauffage",
      "plombier 24h24",
    ],
  },

  // Legal
  legal: {
    siret: "00477a98c0d84f83", // Placeholder - update from Supabase
    businessName: "Plomberie Dupont Lyon",
    address: "45 rue de la République, 69002 Lyon",
    owner: "Ruben GAREGINYAN",
    email: "contact@plomberie-dupont.fr",
    phone: "06 12 34 56 78",
  },
};

export const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteData.businessName,
  image: "", // Will be set by Gemini
  description: siteData.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteData.address,
    addressLocality: siteData.city,
    postalCode: "69002",
    addressCountry: "FR",
  },
  telephone: siteData.phone,
  email: siteData.email,
  url: "", // Will be set at deploy time
  areaServed: {
    "@type": "City",
    name: siteData.city,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "13:00",
    },
  ],
};
