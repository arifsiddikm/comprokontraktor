import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const WHATSAPP_NUMBER = "6281234567890";

const Footer = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Halo, saya tertarik untuk menyewa alat berat.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <footer className="bg-surface-dark text-surface-dark-foreground">
      <div className="container px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display text-gradient-primary">
              RENTAL ALAT BERAT
            </h3>
            <p className="text-surface-dark-foreground/70 text-sm leading-relaxed">
              Partner terpercaya untuk penyewaan alat berat profesional. 
              Melayani seluruh Indonesia dengan unit berkualitas dan layanan prima.
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-2 text-whatsapp hover:text-whatsapp/80 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Chat via WhatsApp</span>
            </button>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-display text-lg">Layanan</h4>
            <ul className="space-y-2 text-sm text-surface-dark-foreground/70">
              <li>Bucket Excavator</li>
              <li>Vibro Roller</li>
              <li>Dozer</li>
              <li>Scissor Lift & Boom Lift</li>
              <li>Forklift</li>
              <li>Genset</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg">Navigasi</h4>
            <ul className="space-y-2 text-sm text-surface-dark-foreground/70">
              <li>
                <a href="#tentang" className="hover:text-primary transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-primary transition-colors">
                  Daftar Alat
                </a>
              </li>
              <li>
                <a href="#keunggulan" className="hover:text-primary transition-colors">
                  Keunggulan
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-primary transition-colors">
                  Hubungi Kami
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-lg">Kontak</h4>
            <ul className="space-y-3 text-sm text-surface-dark-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-primary shrink-0" />
                <span>
                  Jl. Industri Raya No. 123,<br />
                  Jakarta Timur, DKI Jakarta 13910
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+6281234567890" className="hover:text-primary transition-colors">
                  +62 812-3456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@rentalalatberat.com" className="hover:text-primary transition-colors">
                  info@rentalalatberat.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-surface-dark-foreground/10">
        <div className="container px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-surface-dark-foreground/50">
            <p>© 2024 Rental Alat Berat. Semua hak dilindungi.</p>
            <p>
              Dibuat dengan dedikasi untuk industri konstruksi Indonesia.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
