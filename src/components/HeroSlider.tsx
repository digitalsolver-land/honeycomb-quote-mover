import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Truck, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Images de démonstration - à remplacer par les vraies images Mon Auxiliaire
const slides = [
  {
    id: 1,
    title: "Déménagement Professionnel",
    subtitle: "Votre partenaire de confiance depuis plus de 10 ans",
    description: "Équipe certifiée, matériel moderne, assurance tous risques incluse",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&h=600&fit=crop",
    icon: Truck,
  },
  {
    id: 2,
    title: "Service Premium Garanti",
    subtitle: "Plus de 1000 déménagements réussis",
    description: "Devis gratuit sous 24h, intervention rapide sur tout le Maroc",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop",
    icon: Shield,
  },
  {
    id: 3,
    title: "Équipe Expérimentée",
    subtitle: "Des professionnels à votre service",
    description: "Formation continue, respect des délais, satisfaction client garantie",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=600&fit=crop",
    icon: Users,
  },
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div 
      className="relative h-[600px] md:h-[700px] overflow-hidden rounded-lg"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => {
          const Icon = slide.icon;
          return (
            <div
              key={slide.id}
              className={cn(
                "absolute inset-0 transition-all duration-700 ease-in-out",
                index === currentSlide 
                  ? "opacity-100 translate-x-0" 
                  : index < currentSlide 
                    ? "opacity-0 -translate-x-full" 
                    : "opacity-0 translate-x-full"
              )}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/80 via-brand-blue/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="container mx-auto px-6 lg:px-8">
                  <div className="max-w-2xl text-white">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="bg-brand-orange/20 backdrop-blur-sm p-3 rounded-full">
                        <Icon className="h-8 w-8 text-brand-orange" />
                      </div>
                      <span className="text-brand-orange font-semibold uppercase tracking-wide text-sm">
                        Mon Auxiliaire
                      </span>
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                      {slide.title}
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-gray-200 mb-2 animate-fade-in">
                      {slide.subtitle}
                    </p>
                    
                    <p className="text-lg text-gray-300 mb-8 max-w-xl animate-fade-in">
                      {slide.description}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
                      <Button variant="cta" size="xl" asChild>
                        <a href="/quote">
                          Devis Gratuit Immédiat
                        </a>
                      </Button>
                      <Button variant="phone" size="xl" asChild>
                        <a href="tel:+212661206929">
                          Appeler Maintenant
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-white/20"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-white/20"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentSlide
                ? "bg-brand-orange scale-125"
                : "bg-white/50 hover:bg-white/80"
            )}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div 
          className="h-full bg-brand-orange transition-all duration-300"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%` 
          }}
        />
      </div>
    </div>
  );
};