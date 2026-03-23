import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plomberie Dupont Lyon - Plombier à Lyon | Dépannage Urgent",
  description: "Plombier professionnel à Lyon depuis 18 ans. Dépannage urgent, rénovation salle de bain, installation chauffage. Intervention rapide 7j/7.",
  openGraph: {
    title: "Plomberie Dupont Lyon",
    description: "Votre plombier de confiance à Lyon depuis 18 ans",
    url: "https://plomberie-dupont-lyon.fr",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Plomberie Dupont Lyon",
              description: "Plombier professionnel à Lyon",
              address: {
                "@type": "PostalAddress",
                streetAddress: "45 rue de la République",
                addressLocality: "Lyon",
                postalCode: "69002",
                addressCountry: "FR",
              },
              telephone: "06 12 34 56 78",
              email: "contact@plomberie-dupont.fr",
              url: "https://plomberie-dupont-lyon.fr",
              priceRange: "À partir de 89€",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
