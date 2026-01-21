import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "6281234567890";

const CTASection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Halo, saya tertarik untuk konsultasi dan booking alat berat. Mohon informasi lebih lanjut.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Orange Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-primary/20" />

      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-surface-dark-foreground leading-tight">
            Siap Memulai{" "}
            <span className="text-gradient-primary">Proyek Anda?</span>
          </h2>
          
          <p className="text-lg text-surface-dark-foreground/80 max-w-2xl mx-auto">
            Konsultasikan kebutuhan alat berat Anda dengan tim ahli kami sekarang.
            Dapatkan penawaran terbaik dan booking unit sebelum kehabisan!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="whatsapp"
              size="xl"
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto"
            >
              <MessageCircle className="w-6 h-6" />
              Konsultasi & Booking Sekarang
            </Button>
            <a
              href="tel:+6281234567890"
              className="inline-flex items-center gap-2 text-surface-dark-foreground/80 hover:text-surface-dark-foreground transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+62 812-3456-7890</span>
            </a>
          </div>

          {/* Trust Badge */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-surface-dark-foreground/60 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-whatsapp" />
              Respon dalam 2 jam
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Harga kompetitif
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Tanpa biaya konsultasi
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
