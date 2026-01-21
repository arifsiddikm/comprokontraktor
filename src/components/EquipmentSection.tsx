import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "6281234567890";

const equipment = [
  {
    name: "Bucket Excavator",
    image: "/images/equipment/excavator.png",
    description: "Excavator untuk penggalian, pengangkatan material, dan berbagai pekerjaan berat lainnya.",
  },
  {
    name: "Vibro Roller",
    image: "/images/equipment/vibro-roller.jpg",
    description: "Mesin pemadat tanah dengan getaran untuk pemadatan jalan dan area konstruksi.",
  },
  {
    name: "Dozer",
    image: "/images/equipment/dozer.jpg",
    description: "Bulldozer untuk meratakan tanah, mendorong material, dan pembukaan lahan.",
  },
  {
    name: "Scissor Lift",
    image: "/images/equipment/scissor-lift.jpg",
    description: "Platform kerja elevasi vertikal untuk pekerjaan di ketinggian hingga 14 meter.",
  },
  {
    name: "Boom Lift",
    image: "/images/equipment/boom-lift.jpg",
    description: "Lift artikulasi untuk akses ketinggian dengan jangkauan horizontal fleksibel.",
  },
  {
    name: "AWP (Aerial Work Platform)",
    image: "/images/equipment/awp.jpg",
    description: "Platform kerja udara untuk pekerjaan perawatan dan instalasi di ketinggian.",
  },
  {
    name: "Breaker Excavator",
    image: "/images/equipment/breaker.jpg",
    description: "Excavator dengan attachment pemecah beton dan batuan keras.",
  },
  {
    name: "Tandem Roller",
    image: "/images/equipment/tandem-roller.jpg",
    description: "Roller pemadat untuk finishing permukaan aspal dan jalan.",
  },
  {
    name: "Plate Compactor",
    image: "/images/equipment/plate-compactor.jpg",
    description: "Alat pemadat portabel untuk area sempit dan pemadatan lokal.",
  },
  {
    name: "Concrete Screed",
    image: "/images/equipment/concrete-screed.jpg",
    description: "Mesin perata beton untuk hasil permukaan floor yang halus dan rata.",
  },
  {
    name: "Forklift",
    image: "/images/equipment/forklift.png",
    description: "Forklift untuk memindahkan dan mengangkat material berat di area proyek.",
  },
  {
    name: "Genset",
    image: "/images/equipment/genset.jpg",
    description: "Generator set untuk kebutuhan listrik proyek di area tanpa suplai PLN.",
  },
];

const EquipmentSection = () => {
  const handleWhatsAppClick = (equipmentName: string) => {
    const message = encodeURIComponent(
      `Halo, saya ingin menanyakan ketersediaan dan harga sewa ${equipmentName}. Mohon informasi lebih lanjut.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section id="layanan" className="py-20 bg-secondary">
      <div className="container px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Layanan Kami
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground leading-tight mb-4">
            Daftar <span className="text-gradient-primary">Alat Berat</span> Tersedia
          </h2>
          <p className="text-muted-foreground">
            Kami menyediakan berbagai jenis alat berat berkualitas untuk mendukung kelancaran proyek Anda.
            Semua unit dalam kondisi prima dan siap beroperasi.
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {equipment.map((item, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-industrial transition-all duration-300 border border-border hover:border-primary/30"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <h3 className="font-display text-xl text-foreground">{item.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                  {item.description}
                </p>
                <Button
                  variant="whatsapp"
                  size="sm"
                  className="w-full mt-2"
                  onClick={() => handleWhatsAppClick(item.name)}
                >
                  <MessageCircle className="w-4 h-4" />
                  Tanya Ketersediaan
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
