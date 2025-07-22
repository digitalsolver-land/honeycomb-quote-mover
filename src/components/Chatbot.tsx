import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageCircle, Send, X, User, Bot, Phone, Calculator } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: '1',
    content: "Bonjour ! Je suis l'assistant Mon Auxiliaire 👋\n\nJe suis là pour vous aider avec :\n• Informations sur nos services\n• Questions sur le déménagement\n• Conseils et devis\n\nComment puis-je vous aider aujourd'hui ?",
    sender: 'assistant',
    timestamp: new Date(),
  },
];

const quickActions = [
  {
    label: "Devis Gratuit",
    action: "quote",
    icon: Calculator,
    color: "bg-brand-green text-white",
  },
  {
    label: "Appeler Maintenant",
    action: "call",
    icon: Phone,
    color: "bg-brand-orange text-white",
  },
  {
    label: "Nos Services",
    action: "services",
    icon: MessageCircle,
    color: "bg-brand-blue text-white",
  },
];

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (content: string, sender: 'user' | 'assistant') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleQuickAction = (action: string) => {
    switch (action) {
      case 'quote':
        addMessage("Je souhaiterais obtenir un devis", 'user');
        setTimeout(() => {
          addMessage(
            "Parfait ! Pour vous faire un devis personnalisé, je vais vous rediriger vers notre interface spécialisée. Vous y trouverez un processus simple en 7 étapes.\n\nVoulez-vous que je vous y amène maintenant ?",
            'assistant'
          );
        }, 1000);
        break;
      case 'call':
        window.open('tel:+212661206929', '_self');
        break;
      case 'services':
        addMessage("Quels sont vos services ?", 'user');
        setTimeout(() => {
          addMessage(
            "Nous proposons 4 services principaux :\n\n🏠 **Déménagement Résidentiel**\nPour appartements, maisons et villas\n\n🏢 **Déménagement Entreprise**\nBureaux et locaux commerciaux\n\n📦 **Emballage & Protection**\nMatériel professionnel inclus\n\n🏪 **Stockage Sécurisé**\nEspaces climatisés et surveillés 24h/24\n\nQuel service vous intéresse le plus ?",
            'assistant'
          );
        }, 1000);
        break;
    }
  };

  const simulateAssistantResponse = (userMessage: string) => {
    setIsTyping(true);
    
    setTimeout(() => {
      let response = "";
      
      const lowerMessage = userMessage.toLowerCase();
      
      if (lowerMessage.includes('prix') || lowerMessage.includes('tarif') || lowerMessage.includes('coût')) {
        response = "Les tarifs dépendent de plusieurs facteurs :\n• Type et taille du logement\n• Distance du déménagement\n• Services additionnels\n• Période (weekend/semaine)\n\nPour un devis précis et gratuit, utilisez notre interface de devis ou appelez-nous au 06 61 20 69 29 !";
      } else if (lowerMessage.includes('devis')) {
        response = "Excellent ! Notre système de devis en ligne est très simple :\n\n✅ Interface intuitive en 7 étapes\n✅ Résultat immédiat par WhatsApp\n✅ Totalement gratuit et sans engagement\n\nVoulez-vous que je vous y dirige maintenant ?";
      } else if (lowerMessage.includes('service')) {
        response = "Nous couvrons tous vos besoins de déménagement :\n\n• **Résidentiel** : Appartements, maisons\n• **Professionnel** : Bureaux, commerces\n• **Emballage** : Matériel professionnel\n• **Stockage** : Espaces sécurisés\n\nTous nos services incluent l'assurance tous risques ! Quel service vous intéresse ?";
      } else if (lowerMessage.includes('contact') || lowerMessage.includes('téléphone')) {
        response = "Vous pouvez nous contacter :\n\n📞 **Téléphone** : 06 61 20 69 29\n📱 **WhatsApp** : +212 6 61 20 69 29\n✉️ **Email** : contact@monauxiliaire.ma\n📍 **Zone** : Casablanca et tout le Maroc\n\n🕒 **Horaires** : Lun-Sam 8h-19h\n\nNous répondons sous 2h maximum !";
      } else if (lowerMessage.includes('zone') || lowerMessage.includes('région')) {
        response = "Nous intervenons dans tout le Maroc ! 🇲🇦\n\n**Zones principales :**\n• Casablanca et région\n• Rabat-Salé-Kénitra\n• Marrakech-Safi\n• Fès-Meknès\n• Tanger-Tétouan\n\n**Services longue distance** disponibles entre toutes les villes marocaines.\n\nOù souhaitez-vous déménager ?";
      } else {
        response = "Je suis spécialisé dans les questions de déménagement ! 🚚\n\nJe peux vous aider avec :\n• Informations sur nos services\n• Conseils de déménagement\n• Tarification et devis\n• Planning et disponibilités\n\nQue souhaitez-vous savoir sur votre déménagement ?";
      }
      
      setIsTyping(false);
      addMessage(response, 'assistant');
    }, 1500);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    addMessage(inputValue, 'user');
    simulateAssistantResponse(inputValue);
    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Bouton flottant */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg z-50 animate-pulse-soft"
          variant="cta"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Interface du chat */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-xl z-50 flex flex-col animate-slide-up">
          <CardHeader className="bg-gradient-hero text-white rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-lg">Assistant Mon Auxiliaire</CardTitle>
                  <p className="text-sm text-gray-200">En ligne • Répond en 30s</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex",
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[80%] rounded-lg px-3 py-2 text-sm",
                      message.sender === 'user'
                        ? 'bg-brand-orange text-white'
                        : 'bg-muted text-foreground'
                    )}
                  >
                    <div className="flex items-start space-x-2">
                      {message.sender === 'assistant' && (
                        <Bot className="h-4 w-4 mt-0.5 text-brand-blue flex-shrink-0" />
                      )}
                      {message.sender === 'user' && (
                        <User className="h-4 w-4 mt-0.5 text-white flex-shrink-0" />
                      )}
                      <div className="whitespace-pre-line">{message.content}</div>
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted rounded-lg px-3 py-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Bot className="h-4 w-4 text-brand-blue" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-brand-blue rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-brand-blue rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-brand-blue rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Actions rapides */}
            <div className="border-t p-3">
              <div className="grid grid-cols-3 gap-2 mb-3">
                {quickActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <Button
                      key={action.action}
                      variant="ghost"
                      size="sm"
                      onClick={() => handleQuickAction(action.action)}
                      className={cn("text-xs h-auto py-2 flex flex-col", action.color)}
                    >
                      <Icon className="h-4 w-4 mb-1" />
                      {action.label}
                    </Button>
                  );
                })}
              </div>

              {/* Input de message */}
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Tapez votre message..."
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  variant="cta"
                  disabled={!inputValue.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};