"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="text-2xl font-bold text-primary">
              Plomberie Dupont
            </div>
            <div className="text-xs text-secondary">Lyon</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-text hover:text-primary transition-colors font-medium"
            >
              Accueil
            </Link>
            <Link
              href="/services"
              className="text-text hover:text-primary transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-text hover:text-primary transition-colors font-medium"
            >
              À propos
            </Link>
            <Link
              href="/contact"
              className="text-text hover:text-primary transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="tel:0612345678"
              className="inline-flex items-center gap-2 bg-cta hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              <Phone size={20} />
              <span>Appeler</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-3">
            <Link
              href="/"
              className="block text-text hover:text-primary font-medium"
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
            <Link
              href="/services"
              className="block text-text hover:text-primary font-medium"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block text-text hover:text-primary font-medium"
              onClick={() => setIsOpen(false)}
            >
              À propos
            </Link>
            <Link
              href="/contact"
              className="block text-text hover:text-primary font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <a
              href="tel:0612345678"
              className="block w-full bg-cta hover:bg-orange-600 text-white px-4 py-3 rounded-lg font-semibold text-center transition-all"
            >
              Appeler
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
