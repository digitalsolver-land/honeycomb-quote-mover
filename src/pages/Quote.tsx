import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { HoneycombQuote } from '@/components/HoneycombQuote';
import { 
  Calculator, 
  Clock, 
  Shield, 
  Phone, 
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Truck,
  Users,
  Zap
} from 'lucide-react';

const advantages = [
  {
    icon: Clock,
    title: "Réponse Immédiate",
    description: "Devis personnalisé en moins de 5 minutes",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Calculator,
    title: "Prix Transparent",
    description: "Aucun frais caché, tarification claire",
    color: "text-green-600", 
    bgColor: "bg-green-50",
  },
  {
    icon: Shield,
    title: "Sans Engagement",
    description: "Devis gratuit et sans obligation",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
];

const process = [
  {
    step: 1,
    title: "Remplissez le formulaire",
    description: "Interface intuitive en 7 étapes simples",
    icon: Calculator,
  },
  {
    step: 2,
    title: "Recevez votre devis",
    description: "Estimation personnalisée par WhatsApp",
    icon: MessageCircle,
  },
  {
    step: 3,
    title: "Planifiez votre déménagement",
    description: "Notre équipe vous contacte sous 24h",
    icon: Truck,
  },
];

const testimonials = [
  {
    text: "Interface de devis révolutionnaire ! Simple, rapide et très claire.",
    author: "Karim M.",
    rating: 5,
  },
  {
    text: "J'ai eu mon devis en 3 minutes. Service client excellent !",
    author: "Samira L.",
    rating: 5,
  },
  {
    text: "Très transparent sur les prix. Aucune mauvaise surprise !",
    author: "Youssef A.",
    rating: 5,
  },
];

export default function Quote() {
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 text-white border-white/30 bg-white/10">
            Devis Gratuit en 5 Minutes
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Obtenez Votre Devis
            <span className="block text-brand-orange">Personnalisé Immédiatement</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Notre interface révolutionnaire vous guide étape par étape pour un devis précis et transparent
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="cta"
              size="xl"
              onClick={() => setShowQuoteModal(true)}
              className="text-lg px-8 py-4"
            >
              <Calculator className="mr-2 h-5 w-5" />
              Commencer Mon Devis Gratuit
            </Button>
            <Button
              variant="phone"
              size="xl"
              asChild
              className="text-lg px-8 py-4"
            >
              <a href="tel:+212661206929">
                <Phone className="mr-2 h-5 w-5" />
                Ou Appelez-nous : 06 61 20 69 29
              </a>
            </Button>
          </div>

          {/* Garanties rapides */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <Icon className="h-8 w-8 text-brand-orange mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-sm text-gray-300">{advantage.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
              Comment Ça Marche ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Un processus simplifié pour obtenir votre devis en quelques minutes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center relative">
                  {/* Ligne de connexion */}
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-brand-orange to-brand-blue transform translate-x-1/2 z-0" />
                  )}
                  
                  <div className="relative z-10 bg-background">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 shadow-orange">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="bg-brand-orange text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto -mt-2 mb-4 text-sm font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-brand-blue mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="cta"
              size="xl"
              onClick={() => setShowQuoteModal(true)}
              className="text-lg px-8 py-4"
            >
              Commencer Maintenant
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Avantages détaillés */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
              Pourquoi Choisir Notre Devis ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une approche moderne et transparente pour votre tranquillité d'esprit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className={`w-16 h-16 ${advantage.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon className={`h-8 w-8 ${advantage.color}`} />
                    </div>
                    <CardTitle className="text-xl text-brand-blue">{advantage.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {advantage.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Témoignages spécifiques */}
      <section className="py-16 bg-brand-blue text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ce Que Disent Nos Clients
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Des retours authentiques sur notre service de devis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <CheckCircle key={i} className="h-5 w-5 text-brand-orange" />
                  ))}
                </div>
                <p className="text-gray-200 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-brand-orange to-brand-green text-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <Zap className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Prêt à Obtenir Votre Devis ?
            </h2>
            <p className="text-xl mb-8">
              Rejoignez plus de 1000 clients satisfaits. Votre devis personnalisé vous attend !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="hero"
                size="xl"
                onClick={() => setShowQuoteModal(true)}
                className="text-lg px-8 py-4 bg-white text-brand-blue hover:bg-gray-100"
              >
                <Calculator className="mr-2 h-5 w-5" />
                Obtenir Mon Devis Maintenant
              </Button>
              <Button
                variant="outline"
                size="xl"
                asChild
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-brand-blue"
              >
                <a href="https://wa.me/+212661206929" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Direct
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de devis */}
      {showQuoteModal && <HoneycombQuote onClose={() => setShowQuoteModal(false)} />}
    </div>
  );
}