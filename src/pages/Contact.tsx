import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Send,
  CheckCircle,
  AlertCircle,
  Building,
  Home,
  Package,
  Warehouse
} from 'lucide-react';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(10, "Numéro de téléphone requis"),
  serviceType: z.enum(["residential", "corporate", "packing", "storage"], {
    required_error: "Veuillez sélectionner un type de service"
  }),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères")
});

const serviceTypes = [
  { value: "residential", label: "Déménagement Résidentiel", icon: Home },
  { value: "corporate", label: "Déménagement Entreprise", icon: Building },
  { value: "packing", label: "Emballage & Protection", icon: Package },
  { value: "storage", label: "Stockage Sécurisé", icon: Warehouse }
];

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    details: "Casablanca, Maroc",
    subtitle: "Intervention dans tout le Maroc",
    color: "text-brand-blue"
  },
  {
    icon: Phone,
    title: "Téléphone",
    details: "06 61 20 69 29",
    subtitle: "Appel gratuit",
    color: "text-brand-green",
    href: "tel:+212661206929"
  },
  {
    icon: Mail,
    title: "Email",
    details: "contact@monauxiliaire.ma",
    subtitle: "Réponse sous 2h",
    color: "text-brand-orange",
    href: "mailto:contact@monauxiliaire.ma"
  },
  {
    icon: Clock,
    title: "Horaires",
    details: "Lun-Sam : 8h-19h",
    subtitle: "Urgences 24h/24",
    color: "text-brand-blue"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validation
      const validatedData = contactSchema.parse(formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
        duration: 5000,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        message: ''
      });

    } catch (error) {
      if (error instanceof z.ZodError) {
        const firstError = error.errors[0];
        toast({
          title: "Erreur de validation",
          description: firstError.message,
          variant: "destructive",
          duration: 5000,
        });
      } else {
        toast({
          title: "Erreur",
          description: "Une erreur est survenue. Veuillez réessayer.",
          variant: "destructive",
          duration: 5000,
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateWhatsAppLink = () => {
    const selectedService = serviceTypes.find(s => s.value === formData.serviceType)?.label || 'Service non spécifié';
    const message = `Bonjour Mon Auxiliaire,

Je souhaiterais obtenir des informations concernant : ${selectedService}

Mes coordonnées :
- Nom : ${formData.name || '[À remplir]'}
- Email : ${formData.email || '[À remplir]'}
- Téléphone : ${formData.phone || '[À remplir]'}

Message : ${formData.message || '[À remplir]'}

Merci !`;
    
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/212661206929?text=${encodedMessage}`;
  };

  return (
    <div className="pt-20 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Notre équipe vous répond rapidement pour tous vos besoins de déménagement
          </p>
          <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-lg px-4 py-2">
            <CheckCircle className="h-5 w-5 mr-2" />
            Réponse garantie sous 2h
          </Badge>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-brand-blue mb-6">
                  Informations de contact
                </h2>
                <p className="text-muted-foreground mb-8">
                  Plusieurs moyens de nous joindre pour répondre à toutes vos questions et vous accompagner dans votre projet de déménagement.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <Card key={index} className="p-4 border-l-4 border-l-brand-orange hover:shadow-md transition-all duration-200 cursor-pointer">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center ${info.color}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-brand-blue">{info.title}</h3>
                          <p className="text-lg font-medium">{info.details}</p>
                          <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                        </div>
                      </div>
                    </Card>
                  );

                  return info.href ? (
                    <a key={index} href={info.href} className="block">
                      {content}
                    </a>
                  ) : content;
                })}
              </div>

              {/* WhatsApp Quick Contact */}
              <Card className="p-6 bg-brand-green text-white">
                <div className="flex items-center space-x-3 mb-4">
                  <MessageSquare className="h-6 w-6" />
                  <h3 className="text-lg font-semibold">Contact WhatsApp</h3>
                </div>
                <p className="mb-4 opacity-90">
                  Discutez directement avec notre équipe sur WhatsApp pour une réponse immédiate.
                </p>
                <Button 
                  variant="secondary" 
                  className="w-full bg-white text-brand-green hover:bg-gray-100"
                  onClick={() => window.open(generateWhatsAppLink(), '_blank')}
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Ouvrir WhatsApp
                </Button>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl text-brand-blue">Envoyez-nous un message</CardTitle>
                  <CardDescription>
                    Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nom complet *</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Votre nom complet"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="votre@email.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Téléphone *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="06 XX XX XX XX"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Type de service *</Label>
                        <Select value={formData.serviceType} onValueChange={(value) => handleInputChange('serviceType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez un service" />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceTypes.map((service) => {
                              const Icon = service.icon;
                              return (
                                <SelectItem key={service.value} value={service.value}>
                                  <div className="flex items-center space-x-2">
                                    <Icon className="h-4 w-4" />
                                    <span>{service.label}</span>
                                  </div>
                                </SelectItem>
                              );
                            })}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Décrivez-nous votre projet de déménagement..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        required
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="flex-1 button-float"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Envoyer le message
                          </>
                        )}
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="lg"
                        onClick={() => window.open(generateWhatsAppLink(), '_blank')}
                        className="button-float"
                      >
                        <MessageSquare className="h-4 w-4 mr-2" />
                        WhatsApp
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
              Pourquoi choisir Mon Auxiliaire ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez les avantages qui font de nous votre partenaire idéal pour votre déménagement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-brand-blue mb-2">Plus de 1000 déménagements</h3>
              <p className="text-muted-foreground">Expérience prouvée avec des milliers de clients satisfaits</p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-brand-blue mb-2">Équipe professionnelle</h3>
              <p className="text-muted-foreground">Déménageurs formés et certifiés pour tous types de biens</p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-brand-blue mb-2">Assurance tous risques</h3>
              <p className="text-muted-foreground">Protection complète de vos biens pendant le transport</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}