import { Wrench, Zap, DollarSign, Clock, Target, HeadphonesIcon } from "lucide-react";

const advantages = [
  {
    icon: Wrench,
    title: "Unit Siap Pakai & Terawat",
    description: "Semua unit alat berat kami menjalani perawatan rutin dan inspeksi ketat sebelum disewakan.",
  },
  {
    icon: Zap,
    title: "Respon Cepat",
    description: "Tim sales kami siap merespon pertanyaan Anda dalam waktu maksimal 2 jam kerja.",
  },
  {
    icon: DollarSign,
    title: "Harga Kompetitif",
    description: "Dapatkan harga terbaik dengan kualitas unit premium dan layanan profesional.",
  },
  {
    icon: Clock,
    title: "Pengiriman Tepat Waktu",
    description: "Komitmen kami adalah mengirimkan alat berat sesuai jadwal yang telah disepakati.",
  },
  {
    icon: Target,
    title: "Cocok untuk Berbagai Proyek",
    description: "Dari proyek kecil hingga mega project, kami siap mendukung kebutuhan Anda.",
  },
  {
    icon: HeadphonesIcon,
    title: "Support 24/7",
    description: "Layanan dukungan teknis tersedia sepanjang waktu untuk memastikan kelancaran operasi.",
  },
];

const AdvantagesSection = () => {
  return (
    <section id="keunggulan" className="py-20 bg-background">
      <div className="container px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Mengapa Memilih Kami
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground leading-tight mb-4">
            Keunggulan <span className="text-gradient-primary">Layanan Kami</span>
          </h2>
          <p className="text-muted-foreground">
            Kami berkomitmen memberikan pengalaman terbaik dalam penyewaan alat berat
            untuk mendukung kesuksesan proyek Anda.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 shadow-card hover:shadow-industrial transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
