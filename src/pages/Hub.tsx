import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  Clock, 
  ArrowRight, 
  BookOpen, 
  TrendingUp, 
  Users, 
  Mail,
  CheckCircle,
  Calendar,
  Tag
} from 'lucide-react';

const categories = [
  { id: 'all', name: 'Tous', color: 'bg-muted text-foreground' },
  { id: 'planning', name: 'Planification', color: 'bg-brand-blue text-white' },
  { id: 'tips', name: 'Conseils pratiques', color: 'bg-brand-green text-white' },
  { id: 'finance', name: 'Finance', color: 'bg-brand-orange text-white' },
  { id: 'services', name: 'Services', color: 'bg-purple-500 text-white' },
  { id: 'admin', name: 'Administration', color: 'bg-red-500 text-white' },
  { id: 'international', name: 'International', color: 'bg-cyan-500 text-white' }
];

const articles = [
  {
    id: 1,
    title: "Guide complet pour préparer votre déménagement",
    excerpt: "Découvrez toutes les étapes essentielles pour organiser votre déménagement de A à Z, de la planification initiale au jour J.",
    category: 'planning',
    readTime: '8 min',
    isNew: true,
    publishedAt: '2024-01-15',
    image: '/lovable-uploads/e06d62b8-37b8-4426-9a67-91758cdb5a79.png'
  },
  {
    id: 2,
    title: "Comment emballer vos objets fragiles en sécurité",
    excerpt: "Techniques professionnelles pour protéger vos objets les plus précieux : vaisselle, miroirs, électronique et œuvres d'art.",
    category: 'tips',
    readTime: '6 min',
    isNew: true,
    publishedAt: '2024-01-12',
    image: '/lovable-uploads/e06d62b8-37b8-4426-9a67-91758cdb5a79.png'
  },
  {
    id: 3,
    title: "Budget déménagement : comment estimer les coûts",
    excerpt: "Tous les postes de dépenses à prévoir pour votre déménagement et nos conseils pour optimiser votre budget.",
    category: 'finance',
    readTime: '10 min',
    isNew: false,
    publishedAt: '2024-01-08',
    image: '/lovable-uploads/e06d62b8-37b8-4426-9a67-91758cdb5a79.png'
  },
  {
    id: 4,
    title: "Déménagement d'entreprise : meilleures pratiques",
    excerpt: "Guide spécialisé pour les professionnels : planification, communication et minimisation des interruptions d'activité.",
    category: 'services',
    readTime: '12 min',
    isNew: false,
    publishedAt: '2024-01-05',
    image: '/lovable-uploads/e06d62b8-37b8-4426-9a67-91758cdb5a79.png'
  },
  {
    id: 5,
    title: "Changement d'adresse : toutes les démarches",
    excerpt: "Check-list complète des organismes à prévenir et documents à mettre à jour lors de votre changement d'adresse.",
    category: 'admin',
    readTime: '7 min',
    isNew: false,
    publishedAt: '2024-01-02',
    image: '/lovable-uploads/e06d62b8-37b8-4426-9a67-91758cdb5a79.png'
  },
  {
    id: 6,
    title: "Déménager à l'international depuis le Maroc",
    excerpt: "Tout savoir sur les déménagements internationaux : formalités douanières, transport maritime et conseils pratiques.",
    category: 'international',
    readTime: '15 min',
    isNew: false,
    publishedAt: '2023-12-28',
    image: '/lovable-uploads/e06d62b8-37b8-4426-9a67-91758cdb5a79.png'
  },
  {
    id: 7,
    title: "Déménagement écologique : nos conseils verts",
    excerpt: "Comment réduire l'impact environnemental de votre déménagement avec des solutions durables et responsables.",
    category: 'tips',
    readTime: '9 min',
    isNew: false,
    publishedAt: '2023-12-25',
    image: '/lovable-uploads/e06d62b8-37b8-4426-9a67-91758cdb5a79.png'
  },
  {
    id: 8,
    title: "Assurance déménagement : ce qu'il faut savoir",
    excerpt: "Comprendre les différents types d'assurances, les garanties incluses et comment être bien protégé.",
    category: 'finance',
    readTime: '8 min',
    isNew: false,
    publishedAt: '2023-12-20',
    image: '/lovable-uploads/e06d62b8-37b8-4426-9a67-91758cdb5a79.png'
  },
  {
    id: 9,
    title: "Déménagement avec des enfants : guide pratique",
    excerpt: "Conseils pour impliquer vos enfants et rendre cette transition plus facile pour toute la famille.",
    category: 'tips',
    readTime: '11 min',
    isNew: false,
    publishedAt: '2023-12-15',
    image: '/lovable-uploads/e06d62b8-37b8-4426-9a67-91758cdb5a79.png'
  }
];

export default function Hub() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { toast } = useToast();

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Inscription réussie !",
      description: "Vous recevrez nos conseils déménagement par email.",
      duration: 5000,
    });
    
    setEmail('');
    setIsSubscribing(false);
  };

  const getCategoryInfo = (categoryId: string) => {
    return categories.find(cat => cat.id === categoryId) || categories[0];
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="pt-20 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Centre de Ressources Déménagement
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Conseils d'experts, guides pratiques et astuces pour réussir votre déménagement au Maroc
            </p>
            <div className="flex justify-center">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-lg px-4 py-2">
                <BookOpen className="h-5 w-5 mr-2" />
                Guides gratuits et mis à jour
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? category.color : ""}
              >
                <Tag className="h-4 w-4 mr-2" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => {
              const categoryInfo = getCategoryInfo(article.category);
              
              return (
                <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-all duration-200 group cursor-pointer">
                  <div className="relative">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className={categoryInfo.color}>
                        {categoryInfo.name}
                      </Badge>
                      {article.isNew && (
                        <Badge variant="destructive">
                          Nouveau
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(article.publishedAt)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {article.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight group-hover:text-brand-orange transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <CardDescription className="mb-4 line-clamp-3">
                      {article.excerpt}
                    </CardDescription>
                    <Button variant="ghost" className="p-0 h-auto font-semibold text-brand-orange hover:text-brand-blue group-hover:gap-2 transition-all">
                      Lire la suite
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Load More Button */}
          {filteredArticles.length > 6 && (
            <div className="text-center mt-12">
              <Button size="lg" variant="outline" className="button-float">
                Voir plus d'articles
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-brand-blue mb-2">50+</div>
              <div className="text-lg text-muted-foreground">Articles publiés</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-orange mb-2">10K+</div>
              <div className="text-lg text-muted-foreground">Lecteurs par mois</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-green mb-2">2000+</div>
              <div className="text-lg text-muted-foreground">Conseils pratiques</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-cta text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Restez informé
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Recevez nos derniers conseils et guides directement dans votre boîte mail. 
              <span className="text-yellow-300 font-semibold"> Inscription gratuite !</span>
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Votre adresse email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white text-gray-900"
              />
              <Button 
                type="submit" 
                variant="secondary" 
                disabled={isSubscribing}
                className="bg-white text-brand-green hover:bg-gray-100 font-semibold"
              >
                {isSubscribing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-brand-green border-t-transparent rounded-full animate-spin mr-2" />
                    Inscription...
                  </>
                ) : (
                  <>
                    <Mail className="h-4 w-4 mr-2" />
                    S'inscrire
                  </>
                )}
              </Button>
            </form>
            
            <div className="flex items-center justify-center gap-2 mt-4 text-sm opacity-80">
              <CheckCircle className="h-4 w-4" />
              <span>Désinscription possible à tout moment</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}