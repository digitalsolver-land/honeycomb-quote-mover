import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { HeroSlider } from '@/components/HeroSlider';
import { 
  Home as HomeIcon, 
  Building2, 
  Package, 
  Warehouse, 
  Star, 
  Shield, 
  Users, 
  Clock,
  CheckCircle,
  Phone,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: HomeIcon,
    title: "Déménagement Résidentiel",
    description: "Solutions complètes pour particuliers, de l'appartement à la villa",
    features: ["Devis gratuit", "Équipe certifiée", "Assurance incluse"],
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Building2,
    title: "Déménagement Entreprise", 
    description: "Services professionnels pour bureaux et locaux commerciaux",
    features: ["Weekend disponible", "Planification IT", "Remise en service"],
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Package,
    title: "Emballage & Protection",
    description: "Matériel professionnel et techniques d'emballage expertes",
    features: ["Cartons renforcés", "Protection objets fragiles", "Film plastique"],
    color: "text-orange-600", 
    bgColor: "bg-orange-50",
  },
  {
    icon: Warehouse,
    title: "Stockage Sécurisé",
    description: "Espaces climatisés et surveillance 24h/24 pour vos biens",
    features: ["Surveillance 24h/24", "Contrôle température", "Accès sécurisé"],
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
];

const testimonials = [
  {
    name: "Sarah El Mansouri",
    role: "Cliente résidentielle",
    content: "Service exceptionnel ! L'équipe a été très professionnelle et a pris soin de tous nos meubles. Je recommande vivement Mon Auxiliaire.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b194?w=80&h=80&fit=crop&crop=face",
  },
  {
    name: "Ahmed Benali",
    role: "Directeur d'entreprise",
    content: "Déménagement d'entreprise impeccable. Aucune interruption d'activité grâce à leur planification minutieuse.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
  },
  {
    name: "Fatima Azzouzi",
    role: "Propriétaire villa",
    content: "Déménagement de notre villa effectué en une journée. Équipe rapide, efficace et très respectueuse.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
  },
];

const whyChooseUs = [
  {
    icon: Users,
    title: "Plus de 1000 déménagements réussis",
    description: "Une expérience éprouvée au service de votre satisfaction",
  },
  {
    icon: Shield,
    title: "Équipe professionnelle certifiée",
    description: "Formations continues et techniques d'emballage expertes",
  },
  {
    icon: CheckCircle,
    title: "Assurance tous risques incluse",
    description: "Vos biens sont protégés pendant tout le transport",
  },
  {
    icon: Clock,
    title: "Devis gratuit sous 24h",
    description: "Réponse rapide et estimation précise de vos besoins",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-6 lg:px-8">
          <HeroSlider />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-brand-orange border-brand-orange">
              Nos Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
              Solutions Sur Mesure
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une gamme complète de services pour répondre à tous vos besoins de déménagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-full ${service.bgColor}`}>
                        <Icon className={`h-6 w-6 ${service.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-brand-blue group-hover:text-brand-orange transition-colors">
                          {service.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {service.description}
                    </CardDescription>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-brand-green" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline-orange" size="sm" className="group-hover:bg-brand-orange group-hover:text-white">
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button variant="cta" size="xl" asChild>
              <a href="/services">
                Découvrir Tous Nos Services
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-brand-green border-brand-green">
              Témoignages
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
              Nos Clients Parlent de Nous
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Plus de 1000 familles et entreprises nous font confiance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center justify-center space-x-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <p className="font-semibold text-brand-blue">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-brand-blue text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-brand-orange border-brand-orange bg-transparent">
              Pourquoi Nous Choisir
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Votre Satisfaction, Notre Priorité
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Des valeurs fortes et un engagement qualité qui font la différence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-brand-orange/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-brand-orange/30 transition-colors">
                    <Icon className="h-8 w-8 text-brand-orange mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Prêt pour votre déménagement ?</h3>
              <p className="text-gray-300 mb-6">
                Contactez-nous dès maintenant pour un devis gratuit et personnalisé
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cta" size="xl" asChild>
                  <a href="/quote">
                    Demander un Devis Gratuit
                  </a>
                </Button>
                <Button variant="phone" size="xl" asChild>
                  <a href="tel:+212661206929" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    06 61 20 69 29
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}