import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";

const WHATSAPP_NUMBER = "6281234567890";

const navLinks = [
  { href: "#tentang", label: "Tentang Kami" },
  { href: "#layanan", label: "Alat Berat" },
  { href: "#keunggulan", label: "Keunggulan" },
  { href: "#kontak", label: "Kontak" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Halo, saya tertarik untuk menyewa alat berat.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-dark/95 backdrop-blur-md border-b border-surface-dark-foreground/10">
      <div className="container px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-display text-gradient-primary">
              RENTAL ALAT BERAT
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-surface-dark-foreground/80 hover:text-primary transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <Button variant="whatsapp" size="sm" onClick={handleWhatsAppClick}>
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-surface-dark-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-surface-dark-foreground/10 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-surface-dark-foreground/80 hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                variant="whatsapp"
                size="lg"
                onClick={handleWhatsAppClick}
                className="mt-2"
              >
                <MessageCircle className="w-5 h-5" />
                Hubungi via WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
