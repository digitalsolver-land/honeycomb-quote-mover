import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { 
  ArrowLeft, 
  ArrowRight, 
  Building2, 
  Home as HomeIcon, 
  Briefcase, 
  Store, 
  CalendarIcon,
  Phone,
  User,
  Mail,
  MapPin,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

interface FormData {
  housingType: string;
  surface: string;
  floor: string;
  departureAddress: string;
  arrivalAddress: string;
  timeSlot: string;
  additionalServices: string[];
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  movingDate: Date | undefined;
}

const initialFormData: FormData = {
  housingType: '',
  surface: '',
  floor: '',
  departureAddress: '',
  arrivalAddress: '',
  timeSlot: '',
  additionalServices: [],
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  movingDate: undefined,
};

const steps = [
  { id: 0, title: "Type de Logement", description: "Sélectionnez votre type d'habitation" },
  { id: 1, title: "Surface", description: "Quelle est la superficie ?" },
  { id: 2, title: "Étage", description: "À quel étage se situe votre logement ?" },
  { id: 3, title: "Adresses", description: "Adresses de départ et d'arrivée" },
  { id: 4, title: "Planning", description: "Quand souhaitez-vous déménager ?" },
  { id: 5, title: "Services", description: "Services additionnels souhaités" },
  { id: 6, title: "Contact", description: "Vos informations pour le devis" },
];

const housingTypes = [
  { id: 'apartment', label: 'Appartement', icon: Building2 },
  { id: 'house', label: 'Maison', icon: HomeIcon },
  { id: 'office', label: 'Bureau', icon: Briefcase },
  { id: 'commercial', label: 'Local commercial', icon: Store },
];

const surfaces = [
  '< 50m²', '50-100m²', '100-150m²', '150-200m²', '200-300m²', '> 300m²'
];

const floors = [
  'Rez-de-chaussée', '1er étage', '2e étage', '3e étage', '4e étage et +'
];

const timeSlots = [
  'Matin (8h-12h)', 'Après-midi (14h-18h)', 'Soirée (18h-20h)', 
  'Weekend (Sam-Dim)', 'Flexible', 'À définir'
];

const additionalServices = [
  { id: 'dismount', label: 'Démontage/Remontage meubles', price: '+150 MAD' },
  { id: 'packing', label: 'Emballage professionnel', price: '+200 MAD' },
  { id: 'cleaning', label: 'Nettoyage post-déménagement', price: '+300 MAD' },
  { id: 'storage', label: 'Garde-meuble temporaire', price: '+100 MAD/jour' },
  { id: 'fragile', label: 'Transport objets fragiles', price: '+250 MAD' },
  { id: 'express', label: 'Déménagement express', price: '+400 MAD' },
];

// Hexagon component pour l'interface unique
const HexagonButton = ({ 
  children, 
  isSelected, 
  onClick, 
  className = "",
  disabled = false 
}: {
  children: React.ReactNode;
  isSelected?: boolean;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={cn(
      "relative w-24 h-24 md:w-32 md:h-32 transition-all duration-300 group",
      "before:content-[''] before:absolute before:inset-0",
      "before:bg-gradient-to-r before:from-brand-orange/20 before:to-brand-blue/20",
      "before:clip-path-hexagon before:transition-all before:duration-300",
      "hover:before:from-brand-orange/40 hover:before:to-brand-blue/40",
      "hover:scale-110 hover:-translate-y-2",
      isSelected && "before:from-brand-orange before:to-brand-blue before:shadow-orange",
      disabled && "opacity-50 cursor-not-allowed hover:scale-100 hover:translate-y-0",
      className
    )}
  >
    <div className={cn(
      "relative z-10 w-full h-full flex flex-col items-center justify-center",
      "text-brand-blue group-hover:text-white transition-colors duration-300",
      isSelected && "text-white"
    )}>
      {children}
    </div>
  </button>
);

export const HoneycombQuote = ({ onClose }: { onClose: () => void }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(serviceId)
        ? prev.additionalServices.filter(id => id !== serviceId)
        : [...prev.additionalServices, serviceId]
    }));
  };

  const validateForm = () => {
    return formData.firstName && 
           formData.lastName && 
           formData.phone && 
           formData.email &&
           formData.housingType &&
           formData.surface;
  };

  const generateWhatsAppLink = () => {
    const message = `Bonjour! Je souhaite un devis pour un déménagement:
    
🏠 Type: ${housingTypes.find(h => h.id === formData.housingType)?.label}
📐 Surface: ${formData.surface}
🏢 Étage: ${formData.floor}
📍 De: ${formData.departureAddress}
📍 Vers: ${formData.arrivalAddress}
⏰ Créneau: ${formData.timeSlot}
📅 Date: ${formData.movingDate ? format(formData.movingDate, 'dd/MM/yyyy', { locale: fr }) : 'À définir'}
👤 Contact: ${formData.firstName} ${formData.lastName}
📞 Tel: ${formData.phone}
✉️ Email: ${formData.email}
${formData.additionalServices.length > 0 ? `🔧 Services: ${formData.additionalServices.map(id => additionalServices.find(s => s.id === id)?.label).join(', ')}` : ''}

Merci de me faire parvenir votre devis!`;
    
    return `https://wa.me/+212661206929?text=${encodeURIComponent(message)}`;
  };

  const submitQuote = async () => {
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulation API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Générer lien WhatsApp et ouvrir
    const whatsappUrl = generateWhatsAppLink();
    window.open(whatsappUrl, '_blank');
    
    // Fermer modal et reset
    onClose();
    setCurrentStep(0);
    setFormData(initialFormData);
    setIsSubmitting(false);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0: // Type de logement
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-brand-blue mb-2">Type de Logement</h3>
              <p className="text-muted-foreground">Sélectionnez votre type d'habitation</p>
            </div>
            <div className="grid grid-cols-2 gap-6 justify-items-center max-w-md mx-auto">
              {housingTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <HexagonButton
                    key={type.id}
                    isSelected={formData.housingType === type.id}
                    onClick={() => updateFormData('housingType', type.id)}
                  >
                    <Icon className="h-6 w-6 mb-1" />
                    <span className="text-xs font-medium text-center leading-tight">
                      {type.label}
                    </span>
                  </HexagonButton>
                );
              })}
            </div>
          </div>
        );

      case 1: // Surface
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-brand-blue mb-2">Surface</h3>
              <p className="text-muted-foreground">Quelle est la superficie à déménager ?</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center max-w-lg mx-auto">
              {surfaces.map((surface) => (
                <HexagonButton
                  key={surface}
                  isSelected={formData.surface === surface}
                  onClick={() => updateFormData('surface', surface)}
                >
                  <span className="text-sm font-medium text-center leading-tight">
                    {surface}
                  </span>
                </HexagonButton>
              ))}
            </div>
          </div>
        );

      case 2: // Étage
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-brand-blue mb-2">Étage</h3>
              <p className="text-muted-foreground">À quel étage se situe votre logement ?</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center max-w-lg mx-auto">
              {floors.map((floor) => (
                <HexagonButton
                  key={floor}
                  isSelected={formData.floor === floor}
                  onClick={() => updateFormData('floor', floor)}
                >
                  <span className="text-xs font-medium text-center leading-tight px-1">
                    {floor}
                  </span>
                </HexagonButton>
              ))}
            </div>
          </div>
        );

      case 3: // Adresses
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-brand-blue mb-2">Adresses</h3>
              <p className="text-muted-foreground">Adresses de départ et d'arrivée</p>
            </div>
            <div className="space-y-4 max-w-md mx-auto">
              <div>
                <Label htmlFor="departure" className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-brand-orange" />
                  Adresse de départ
                </Label>
                <Input
                  id="departure"
                  placeholder="Ex: Rue Hassan II, Casablanca"
                  value={formData.departureAddress}
                  onChange={(e) => updateFormData('departureAddress', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="arrival" className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-brand-green" />
                  Adresse d'arrivée
                </Label>
                <Input
                  id="arrival"
                  placeholder="Ex: Boulevard Mohamed V, Rabat"
                  value={formData.arrivalAddress}
                  onChange={(e) => updateFormData('arrivalAddress', e.target.value)}
                />
              </div>
            </div>
          </div>
        );

      case 4: // Planning
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-brand-blue mb-2">Planning</h3>
              <p className="text-muted-foreground">Quel créneau vous convient le mieux ?</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center max-w-lg mx-auto">
              {timeSlots.map((slot) => (
                <HexagonButton
                  key={slot}
                  isSelected={formData.timeSlot === slot}
                  onClick={() => updateFormData('timeSlot', slot)}
                >
                  <Clock className="h-4 w-4 mb-1" />
                  <span className="text-xs font-medium text-center leading-tight px-1">
                    {slot}
                  </span>
                </HexagonButton>
              ))}
            </div>
          </div>
        );

      case 5: // Services additionnels
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-brand-blue mb-2">Services Additionnels</h3>
              <p className="text-muted-foreground">Sélectionnez les services souhaités (optionnel)</p>
            </div>
            <div className="space-y-3 max-w-md mx-auto">
              {additionalServices.map((service) => (
                <div key={service.id} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                  <Checkbox
                    id={service.id}
                    checked={formData.additionalServices.includes(service.id)}
                    onCheckedChange={() => handleServiceToggle(service.id)}
                  />
                  <Label htmlFor={service.id} className="flex-1 cursor-pointer">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{service.label}</span>
                      <span className="text-xs text-brand-green">{service.price}</span>
                    </div>
                  </Label>
                </div>
              ))}
            </div>
          </div>
        );

      case 6: // Contact
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-brand-blue mb-2">Informations Contact</h3>
              <p className="text-muted-foreground">Pour recevoir votre devis personnalisé</p>
            </div>
            <div className="space-y-4 max-w-md mx-auto">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="flex items-center gap-2 mb-2">
                    <User className="h-4 w-4 text-brand-orange" />
                    Prénom *
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="Mohamed"
                    value={formData.firstName}
                    onChange={(e) => updateFormData('firstName', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="mb-2 block">Nom *</Label>
                  <Input
                    id="lastName"
                    placeholder="Alami"
                    value={formData.lastName}
                    onChange={(e) => updateFormData('lastName', e.target.value)}
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="phone" className="flex items-center gap-2 mb-2">
                  <Phone className="h-4 w-4 text-brand-green" />
                  Téléphone *
                </Label>
                <Input
                  id="phone"
                  placeholder="06 XX XX XX XX"
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="flex items-center gap-2 mb-2">
                  <Mail className="h-4 w-4 text-brand-blue" />
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="mohamed@email.ma"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label className="flex items-center gap-2 mb-2">
                  <CalendarIcon className="h-4 w-4 text-brand-orange" />
                  Date souhaitée
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !formData.movingDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.movingDate ? (
                        format(formData.movingDate, "dd MMMM yyyy", { locale: fr })
                      ) : (
                        <span>Sélectionner une date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={formData.movingDate}
                      onSelect={(date) => updateFormData('movingDate', date)}
                      disabled={(date) => date < new Date()}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <CardHeader className="bg-gradient-hero text-white">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl">Devis Gratuit Mon Auxiliaire</CardTitle>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20"
              onClick={onClose}
            >
              ✕
            </Button>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <div className="flex-1 bg-white/20 rounded-full h-2">
              <div 
                className="bg-white h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
            <span className="text-sm font-medium">
              {currentStep + 1}/{steps.length}
            </span>
          </div>
        </CardHeader>

        <CardContent className="p-8">
          <div className="min-h-[400px] flex flex-col justify-center">
            {renderStep()}
          </div>
        </CardContent>

        <div className="border-t bg-muted/50 p-6">
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 0}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Précédent
            </Button>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Étape {currentStep + 1}: {steps[currentStep].title}
              </p>
            </div>

            {currentStep < steps.length - 1 ? (
              <Button
                variant="cta"
                onClick={nextStep}
                className="flex items-center gap-2"
              >
                Suivant
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                variant="cta"
                onClick={submitQuote}
                disabled={!validateForm() || isSubmitting}
                className="flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>Envoi en cours...</>
                ) : (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Recevoir mon Devis
                  </>
                )}
              </Button>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};