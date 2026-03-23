"use client";

import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Contact</h1>
            <p className="text-lg text-gray-100">
              Nous sommes là pour répondre à vos questions
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-text mb-8">
                Informations de contact
              </h2>

              <div className="space-y-8">
                {/* Phone */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Phone size={24} className="text-secondary" />
                    <h3 className="text-lg font-bold text-text">Téléphone</h3>
                  </div>
                  <p className="text-gray-700 ml-9">06 12 34 56 78</p>
                </div>

                {/* Email */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Mail size={24} className="text-secondary" />
                    <h3 className="text-lg font-bold text-text">Email</h3>
                  </div>
                  <p className="text-gray-700 ml-9">contact@plomberie-dupont.fr</p>
                </div>

                {/* Address */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin size={24} className="text-secondary" />
                    <h3 className="text-lg font-bold text-text">Adresse</h3>
                  </div>
                  <p className="text-gray-700 ml-9">
                    45 rue de la République<br />
                    69002 Lyon
                  </p>
                </div>

                {/* Hours */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Clock size={24} className="text-secondary" />
                    <h3 className="text-lg font-bold text-text">Horaires</h3>
                  </div>
                  <div className="text-gray-700 ml-9">
                    <p><strong>Lun-Ven:</strong> 7h30 - 19h</p>
                    <p><strong>Samedi:</strong> 8h - 13h</p>
                    <p className="text-secondary font-semibold mt-2">
                      Urgences: 7j/7 24h/24
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-text mb-8">
                Envoyez-nous un message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                      Votre nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                      Votre email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20"
                      placeholder="jean@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">
                    Votre téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20"
                    placeholder="06 12 34 56 78"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                    Votre message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20"
                    placeholder="Décrivez votre problème ou votre demande..."
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-700 font-semibold">
                      Message envoyé avec succès. Nous vous recontacterons dès que possible!
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-700 font-semibold">
                      Une erreur est survenue. Veuillez réessayer ou nous appeler directement.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cta hover:bg-orange-600 text-white px-6 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-text mb-8 text-center">
              Retrouvez-nous
            </h2>
            <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-600">
                Carte Google Maps intégrée ici
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
