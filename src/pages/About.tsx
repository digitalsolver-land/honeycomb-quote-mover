import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Clock, 
  Users, 
  Award, 
  CheckCircle, 
  Star,
  Truck,
  Phone,
  MapPin,
  Target,
  Heart,
  Briefcase
} from 'lucide-react';

const stats = [
  {
    number: "1000+",
    label: "Déménagements réussis",
    icon: CheckCircle,
    color: "text-brand-green"
  },
  {
    number: "5+",
    label: "Années d'expérience",
    icon: Award,
    color: "text-brand-orange"
  },
  {
    number: "24h/7j",
    label: "Service d'urgence",
    icon: Clock,
    color: "text-brand-blue"
  },
  {
    number: "100%",
    label: "Clients satisfaits",
    icon: Star,
    color: "text-brand-green"
  }
];

const values = [
  {
    title: "Qualité de service",
    description: "Nous nous engageons à fournir un service irréprochable à chaque intervention",
    icon: Star,
    color: "bg-brand-green"
  },
  {
    title: "Respect des délais",
    description: "Ponctualité et respect des horaires convenus pour votre tranquillité d'esprit",
    icon: Clock,
    color: "bg-brand-orange"
  },
  {
    title: "Assurance et sécurité",
    description: "Protection complète de vos biens avec notre assurance tous risques incluse",
    icon: Shield,
    color: "bg-brand-blue"
  },
  {
    title: "Satisfaction client",
    description: "Votre satisfaction est notre priorité absolue, nous nous adaptons à vos besoins",
    icon: Heart,
    color: "bg-brand-green"
  }
];

const team = [
  {
    name: "Ahmed Benali",
    role: "Directeur Général",
    description: "15 ans d'expérience dans le secteur du déménagement au Maroc",
    icon: Briefcase
  },
  {
    name: "Fatima Alaoui",
    role: "Responsable Opérations",
    description: "Coordinatrice experte en logistique et planification de déménagements",
    icon: Users
  },
  {
    name: "Mohamed Tazi",
    role: "Chef d'équipe Technique",
    description: "Spécialiste en manutention et protection d'objets fragiles",
    icon: Truck
  }
];

const certifications = [
  "Certification transport de marchandises",
  "Agrément déménagement professionnel",
  "Assurance RC professionnelle",
  "Formation sécurité au travail",
  "Certification ISO qualité service"
];

export default function About() {
  return (
    <div className="pt-20 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Mon Auxiliaire
              </h1>
              <h2 className="text-2xl md:text-3xl mb-6 opacity-90">
                Votre partenaire de confiance
              </h2>
              <p className="text-xl leading-relaxed opacity-90 mb-8">
                Depuis notre création, nous nous sommes imposés comme une référence dans le secteur du déménagement au Maroc. 
                Notre mission est simple : vous offrir un déménagement serein et professionnel, où que vous soyez.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  <MapPin className="h-4 w-4 mr-2" />
                  Tout le Maroc
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  <Shield className="h-4 w-4 mr-2" />
                  Assuré & Certifié
                </Badge>
              </div>
            </div>
            <div className="lg:text-right">
              <img 
                src="/lovable-uploads/e06d62b8-37b8-4426-9a67-91758cdb5a79.png" 
                alt="Équipe Mon Auxiliaire"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center p-6 border-l-4 border-l-brand-orange">
                  <div className={`w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4 ${stat.color}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold text-brand-blue mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Histoire Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
                Notre histoire
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  <strong className="text-brand-blue">Mon Auxiliaire</strong> a été fondée avec une vision claire : 
                  révolutionner l'expérience du déménagement au Maroc en apportant professionnalisme, 
                  fiabilité et humanité à chaque intervention.
                </p>
                <p>
                  Partant du constat que déménager est souvent source de stress, nous avons développé 
                  une approche sur-mesure qui place le client au cœur de nos préoccupations. 
                  Chaque déménagement est unique, chaque famille a ses propres besoins.
                </p>
                <p>
                  Aujourd'hui, forte de plus de <strong className="text-brand-orange">1000 déménagements réussis</strong>, 
                  notre équipe continue de grandir et d'innover pour vous offrir toujours plus de qualité et de sérénité.
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-brand-blue mb-4">Nos zones d'intervention</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Casablanca et région",
                    "Rabat-Salé-Kénitra", 
                    "Marrakech-Safi",
                    "Fès-Meknès",
                    "Tanger-Tétouan-Al Hoceïma",
                    "Agadir et le Sud"
                  ].map((zone, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-brand-green" />
                      <span className="text-sm">{zone}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="h-6 w-6 text-brand-orange" />
                  <h3 className="text-xl font-semibold text-brand-blue">Notre Mission</h3>
                </div>
                <p className="text-muted-foreground">
                  Accompagner nos clients dans cette étape importante de leur vie en leur offrant 
                  un service de déménagement professionnel, sécurisé et adapté à leurs besoins spécifiques.
                </p>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="h-6 w-6 text-brand-green" />
                  <h3 className="text-xl font-semibold text-brand-blue">Notre Vision</h3>
                </div>
                <p className="text-muted-foreground">
                  Devenir la référence du déménagement au Maroc en alliant expertise technique, 
                  innovation et excellence du service client pour transformer chaque déménagement en expérience positive.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Équipe Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
              Notre équipe dirigeante
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des professionnels expérimentés et passionnés qui mettent leur expertise à votre service
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => {
              const Icon = member.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-200">
                  <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-blue mb-2">{member.name}</h3>
                  <Badge variant="secondary" className="mb-4">{member.role}</Badge>
                  <p className="text-muted-foreground">{member.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Valeurs Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
              Nos valeurs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Les principes qui guident chacune de nos actions et font notre différence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="p-6 border-l-4 border-l-brand-orange">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-lg ${value.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-brand-blue mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
                Certifications et formations
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Notre équipe est régulièrement formée et certifiée pour vous garantir 
                un service professionnel conforme aux plus hauts standards de qualité.
              </p>
              
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-green flex-shrink-0" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="p-8 bg-brand-blue text-white">
              <div className="text-center">
                <Shield className="h-16 w-16 mx-auto mb-6 opacity-90" />
                <h3 className="text-2xl font-bold mb-4">Garantie sérénité</h3>
                <p className="text-lg opacity-90 mb-6">
                  Tous nos déménagements sont couverts par une assurance tous risques 
                  pour votre totale tranquillité d'esprit.
                </p>
                <Badge variant="secondary" className="bg-white text-brand-blue">
                  Couverture jusqu'à 50 000 MAD
                </Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-cta text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à nous faire confiance ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Rejoignez les milliers de clients qui nous ont fait confiance pour leur déménagement. 
            Contactez-nous dès aujourd'hui pour un devis gratuit et personnalisé.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="button-float">
              Devis Gratuit
            </Button>
            <Button size="lg" variant="outline" className="button-float border-white text-white hover:bg-white hover:text-brand-green">
              <Phone className="h-5 w-5 mr-2" />
              06 61 20 69 29
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}