import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-brand-blue text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-hero p-2 rounded-lg">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Mon Auxiliaire</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Votre partenaire de confiance pour tous vos déménagements au Maroc. 
              Plus de 1000 déménagements réussis avec une équipe professionnelle certifiée.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/+212661206929"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-green hover:bg-brand-green-light p-2 rounded-full transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/services" className="hover:text-brand-orange transition-colors">
                  Déménagement Résidentiel
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-brand-orange transition-colors">
                  Déménagement Entreprise
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-brand-orange transition-colors">
                  Emballage & Protection
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-brand-orange transition-colors">
                  Stockage Sécurisé
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-brand-orange" />
                <span className="text-sm">Casablanca, Maroc</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-brand-orange" />
                <a 
                  href="tel:+212661206929" 
                  className="text-sm hover:text-brand-orange transition-colors"
                >
                  06 61 20 69 29
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-brand-orange" />
                <a 
                  href="mailto:contact@monauxiliaire.ma" 
                  className="text-sm hover:text-brand-orange transition-colors"
                >
                  contact@monauxiliaire.ma
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-brand-orange" />
                <span className="text-sm">Lun-Sam 8h-19h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 Mon Auxiliaire. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/about" className="text-sm text-gray-400 hover:text-brand-orange transition-colors">
                À Propos
              </a>
              <a href="/contact" className="text-sm text-gray-400 hover:text-brand-orange transition-colors">
                Contact
              </a>
              <a href="/hub" className="text-sm text-gray-400 hover:text-brand-orange transition-colors">
                Hub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};