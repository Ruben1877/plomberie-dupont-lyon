import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <div>
                  <p>45 rue de la République</p>
                  <p>69002 Lyon</p>
                </div>
              </div>
              <a
                href="tel:0612345678"
                className="flex items-center gap-3 hover:text-secondary transition-colors"
              >
                <Phone size={20} />
                <span>06 12 34 56 78</span>
              </a>
              <a
                href="mailto:contact@plomberie-dupont.fr"
                className="flex items-center gap-3 hover:text-secondary transition-colors"
              >
                <Mail size={20} />
                <span>contact@plomberie-dupont.fr</span>
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4">Horaires</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <Clock size={20} className="flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Lun-Ven: 7h30 - 19h</p>
                  <p className="font-semibold">Sam: 8h - 13h</p>
                  <p className="text-secondary mt-2">Urgences 7j/7 24h/24</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <nav className="space-y-2">
              <Link href="/" className="block hover:text-secondary transition-colors">
                Accueil
              </Link>
              <Link href="/services" className="block hover:text-secondary transition-colors">
                Services
              </Link>
              <Link href="/about" className="block hover:text-secondary transition-colors">
                À propos
              </Link>
              <Link href="/contact" className="block hover:text-secondary transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white border-opacity-20 pt-8">
          <div className="text-center text-sm opacity-90">
            <p>
              © {currentYear} Plomberie Dupont Lyon. Tous droits réservés.
            </p>
            <p className="mt-2">
              <Link href="/mentions-legales" className="hover:text-secondary transition-colors">
                Mentions légales
              </Link>
              {" "}  |{" "}
              <Link href="/confidentialite" className="hover:text-secondary transition-colors">
                Confidentialité
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
