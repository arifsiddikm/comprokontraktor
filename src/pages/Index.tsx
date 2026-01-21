import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EquipmentSection from "@/components/EquipmentSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import ClientsSection from "@/components/ClientsSection";
import ContactFormSection from "@/components/ContactFormSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <EquipmentSection />
        <AdvantagesSection />
        <ClientsSection />
        <ContactFormSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
