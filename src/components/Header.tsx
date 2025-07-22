import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Devis Gratuit', href: '/quote' },
  { name: 'Hub', href: '/hub' },
  { name: 'Contact', href: '/contact' },
  { name: 'À Propos', href: '/about' },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-elegant">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href="/" className="flex items-center space-x-2">
            <div className="bg-gradient-hero p-2 rounded-lg">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-brand-blue">Mon Auxiliaire</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Ouvrir le menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-semibold leading-6 transition-colors hover:text-brand-orange",
                item.name === 'Devis Gratuit' 
                  ? "text-brand-green" 
                  : "text-brand-blue"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-3">
          <Button variant="phone" size="sm" asChild>
            <a href="tel:+212661206929" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              06 61 20 69 29
            </a>
          </Button>
          <Button variant="cta" size="sm" asChild>
            <a href="/quote">Devis Gratuit</a>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="flex items-center space-x-2">
                <div className="bg-gradient-hero p-2 rounded-lg">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-brand-blue">Mon Auxiliaire</span>
              </a>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors",
                        item.name === 'Devis Gratuit'
                          ? "text-brand-green hover:bg-brand-green/10"
                          : "text-brand-blue hover:bg-brand-blue/10"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6 space-y-3">
                  <Button variant="phone" className="w-full" asChild>
                    <a href="tel:+212661206929" className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4" />
                      06 61 20 69 29
                    </a>
                  </Button>
                  <Button variant="cta" className="w-full" asChild>
                    <a href="/quote">Devis Gratuit</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};