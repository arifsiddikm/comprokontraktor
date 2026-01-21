import { Button } from "@/components/ui/button";
import { MessageCircle, FileText } from "lucide-react";

const WHATSAPP_NUMBER = "6281234567890";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Halo, saya tertarik untuk menyewa alat berat. Mohon informasi lebih lanjut.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const handleDownloadProfile = () => {
    // In production, this would link to actual PDF
    alert("Company Profile akan segera tersedia untuk diunduh.");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Orange Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground/90">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium">Melayani Seluruh Indonesia</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-surface-dark-foreground leading-tight">
            Jasa Rental{" "}
            <span className="text-gradient-primary">Alat Berat</span>
            <br />
            Profesional & Terpercaya
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-surface-dark-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Solusi sewa alat berat untuk proyek konstruksi & industri skala kecil hingga besar.
            Unit terawat, operator berpengalaman, dan harga kompetitif.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              variant="whatsapp" 
              size="xl" 
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" />
              Hubungi Sales via WhatsApp
            </Button>
            <Button 
              variant="outline-light" 
              size="xl" 
              onClick={handleDownloadProfile}
              className="w-full sm:w-auto"
            >
              <FileText className="w-5 h-5" />
              Download Company Profile
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-surface-dark-foreground/60">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-display text-primary">500+</span>
              <span className="text-sm">Proyek Selesai</span>
            </div>
            <div className="w-px h-8 bg-surface-dark-foreground/20" />
            <div className="flex items-center gap-2">
              <span className="text-3xl font-display text-primary">50+</span>
              <span className="text-sm">Unit Tersedia</span>
            </div>
            <div className="w-px h-8 bg-surface-dark-foreground/20" />
            <div className="flex items-center gap-2">
              <span className="text-3xl font-display text-primary">24/7</span>
              <span className="text-sm">Layanan Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
