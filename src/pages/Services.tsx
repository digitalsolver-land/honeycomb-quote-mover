import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Home, 
  Building, 
  Package, 
  Warehouse, 
  Check, 
  Plus, 
  Phone, 
  Calculator,
  Clock,
  Shield,
  Truck,
  Users
} from 'lucide-react';

const services = [
  {
    id: 'residential',
    title: 'Déménagement Résidentiel',
    icon: Home,
    shortDescription: 'Solutions complètes pour particuliers, appartements et maisons',
    image: '/lovable-uploads/e06d62b8-37b8-4426-9a67-91758cdb5a79.png',
    fullDescription: 'Notre service de déménagement résidentiel est conçu pour vous offrir une transition en douceur vers votre nouveau foyer. Nous comprenons que déménager peut être stressant, c\'est pourquoi nous nous occupons de tout, du démontage de vos meubles à leur remontage dans votre nouvelle maison.',
    features: [
      'Évaluation gratuite à domicile',
      'Démontage et remontage des meubles',
      'Emballage professionnel inclus',
      'Protection complète des objets fragiles',
      'Transport sécurisé avec camions équipés',
      'Assurance tous risques incluse',
      'Nettoyage de base inclus'
    ],
    options: [
      'Service express (24h)',
      'Stockage temporaire',
      'Nettoyage approfondi',
      'Déménagement en soirée/weekend',
      'Service de conciergerie',
      'Aide au déballage'
    ],
    pricing: 'À partir de 800 MAD',
    duration: '1-2 jours'
  },
  {
    id: 'corporate',
    title: 'Déménagement Entreprise',
    icon: Building,
    shortDescription: 'Solutions professionnelles pour bureaux et entreprises',
    image: '/lovable-uploads/e06d62b8-37b8-4426-9a67-91758cdb5a79.png',
    fullDescription: 'Spécialisés dans le déménagement d\'entreprises, nous minimisons les interruptions d\'activité grâce à une planification méticuleuse et une équipe expérimentée. Nous gérons tous types de déménagements professionnels.',
    features: [
      'Planification détaillée avec timeline',
      'Déménagement en dehors des heures ouvrables',
      'Spécialistes IT et équipements sensibles',
      'Remise en service rapide',
      'Coordination avec vos équipes',
      'Assurance professionnelle étendue',
      'Suivi en temps réel'
    ],
    options: [
      'Déménagement weekend exclusif',
      'Service IT spécialisé',
      'Stockage longue durée',
      'Destruction sécurisée de documents',
      'Installation mobilier neuf',
      'Formation équipes'
    ],
    pricing: 'Devis sur mesure',
    duration: '1-5 jours'
  },
  {
    id: 'packing',
    title: 'Emballage & Protection',
    icon: Package,
    shortDescription: 'Matériel professionnel et techniques spécialisées',
    image: '/lovable-uploads/e06d62b8-37b8-4426-9a67-91758cdb5a79.png',
    fullDescription: 'Notre service d\'emballage professionnel utilise les meilleures techniques et matériaux pour protéger vos biens les plus précieux. Nos équipes sont formées aux techniques d\'emballage les plus avancées.',
    features: [
      'Cartons renforcés de qualité',
      'Film plastique professionnel',
      'Protection spéciale objets d\'art',
      'Emballage électroménager',
      'Housses de protection meubles',
      'Papier de soie pour fragiles',
      'Marquage et inventaire détaillé'
    ],
    options: [
      'Emballage œuvres d\'art',
      'Caisses bois sur mesure',
      'Service d\'inventaire photo',
      'Emballage piano et instruments',
      'Protection climatique',
      'Service de déballage'
    ],
    pricing: 'À partir de 50 MAD/m³',
    duration: '1-3 heures'
  },
  {
    id: 'storage',
    title: 'Stockage Sécurisé',
    icon: Warehouse,
    shortDescription: 'Espaces climatisés et sécurisés disponibles 24h/24',
    image: '/lovable-uploads/e06d62b8-37b8-4426-9a67-91758cdb5a79.png',
    fullDescription: 'Nos entrepôts modernes offrent des conditions optimales de stockage pour vos biens. Climatisés, sécurisés et surveillés 24h/24, ils garantissent la préservation de vos affaires.',
    features: [
      'Surveillance 24h/24 et 7j/7',
      'Contrôle température et humidité',
      'Accès sécurisé par badge',
      'Espaces modulables',
      'Assurance tous risques',
      'Inventaire informatisé',
      'Accès facile avec quais de chargement'
    ],
    options: [
      'Stockage longue durée (> 1 an)',
      'Accès client 24h/24',
      'Service d\'archivage documents',
      'Stockage réfrigéré',
      'Service de manutention',
      'Livraison à la demande'
    ],
    pricing: 'À partir de 100 MAD/mois/m³',
    duration: 'Flexible'
  }
];

const ServiceModal = ({ service }: { service: typeof services[0] }) => {
  const Icon = service.icon;
  
  return (
    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 rounded-lg bg-brand-orange flex items-center justify-center">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div>
            <DialogTitle className="text-2xl text-brand-blue">{service.title}</DialogTitle>
            <p className="text-muted-foreground">{service.shortDescription}</p>
          </div>
        </div>
      </DialogHeader>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-brand-blue mb-3">Description</h3>
            <p className="text-muted-foreground leading-relaxed">{service.fullDescription}</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-brand-blue mb-3">Prestations incluses</h3>
            <ul className="space-y-2">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Check className="h-4 w-4 text-brand-green mt-1 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-brand-blue mb-3">Options disponibles</h3>
            <ul className="space-y-2">
              {service.options.map((option, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Plus className="h-4 w-4 text-brand-orange mt-1 flex-shrink-0" />
                  <span className="text-sm">{option}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-muted rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="h-4 w-4 text-brand-blue" />
                <span className="font-medium text-sm">Durée</span>
              </div>
              <p className="text-sm text-muted-foreground">{service.duration}</p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Calculator className="h-4 w-4 text-brand-blue" />
                <span className="font-medium text-sm">Tarif</span>
              </div>
              <p className="text-sm text-muted-foreground">{service.pricing}</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <Button className="w-full" size="lg">
              <Calculator className="h-4 w-4 mr-2" />
              Demander un devis gratuit
            </Button>
            <Button variant="outline" className="w-full" size="lg">
              <Phone className="h-4 w-4 mr-2" />
              Appelez-nous : 06 61 20 69 29
            </Button>
          </div>
        </div>
      </div>
    </DialogContent>
  );
};

export default function Services() {
  return (
    <div className="pt-20 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nos Services sur Mesure
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Une gamme complète de prestations pour répondre à tous vos besoins de déménagement au Maroc
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Shield className="h-4 w-4 mr-2" />
              Assurance tous risques
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Truck className="h-4 w-4 mr-2" />
              Flotte moderne
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Users className="h-4 w-4 mr-2" />
              Équipe certifiée
            </Badge>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={service.id} 
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:grid-flow-col-dense'
                  }`}
                >
                  {/* Image */}
                  <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-64 md:h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute bottom-6 left-6">
                        <div className="w-12 h-12 rounded-lg bg-brand-orange flex items-center justify-center">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
                        {service.title}
                      </h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {service.fullDescription}
                      </p>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-brand-blue">Inclus :</h4>
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-sm">
                              <Check className="h-3 w-3 text-brand-green flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-brand-blue">Options :</h4>
                        <ul className="space-y-1">
                          {service.options.slice(0, 3).map((option, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-sm">
                              <Plus className="h-3 w-3 text-brand-orange flex-shrink-0" />
                              <span>{option}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="lg" className="button-float">
                            En savoir plus
                          </Button>
                        </DialogTrigger>
                        <ServiceModal service={service} />
                      </Dialog>
                      
                      <Button variant="outline" size="lg" className="button-float">
                        <Calculator className="h-4 w-4 mr-2" />
                        Devis gratuit
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
            Prêt à déménager avec Mon Auxiliaire ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour un devis gratuit et personnalisé. 
            Notre équipe vous accompagne à chaque étape de votre déménagement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="button-float">
              <Calculator className="h-5 w-5 mr-2" />
              Devis Gratuit
            </Button>
            <Button variant="outline" size="lg" className="button-float">
              <Phone className="h-5 w-5 mr-2" />
              06 61 20 69 29
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}