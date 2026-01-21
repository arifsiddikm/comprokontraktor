import { Shield, Award, Clock, Truck } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="tentang" className="py-20 bg-background">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Tentang Kami
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground leading-tight">
              Partner Terpercaya untuk{" "}
              <span className="text-gradient-primary">Proyek Anda</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Kami berdiri sejak tahun 1900</strong> dan telah menjadi mitra 
                strategis bagi berbagai perusahaan konstruksi, industri, dan developer di seluruh Indonesia. 
                Dengan pengalaman lebih dari satu dekade, kami memahami kebutuhan alat berat yang berkualitas 
                dan andal untuk mendukung kelancaran proyek Anda.
              </p>
              
              <p>
                Setiap unit alat berat kami menjalani perawatan rutin dan inspeksi ketat untuk memastikan 
                performa optimal di lapangan. Kami tidak hanya menyewakan alat, tetapi juga menyediakan 
                operator berpengalaman yang terlatih untuk mengoperasikan berbagai jenis alat berat dengan 
                aman dan efisien.
              </p>
              
              <p>
                Komitmen kami adalah memberikan layanan terbaik dengan harga yang kompetitif. Tim sales kami 
                siap membantu Anda 24/7 untuk konsultasi kebutuhan proyek, dari pemilihan alat hingga 
                pengiriman ke lokasi proyek di seluruh Indonesia.
              </p>
              
              <p>
                Kepercayaan klien adalah prioritas utama kami. Kami bangga telah melayani ratusan proyek 
                besar dan kecil, dari pembangunan infrastruktur, gedung bertingkat, hingga proyek pertambangan 
                dan industri manufaktur.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-card border-gradient shadow-card">
              <Shield className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-3xl font-display text-foreground">100%</h3>
              <p className="text-muted-foreground text-sm mt-1">Unit Bergaransi</p>
            </div>
            
            <div className="p-6 rounded-xl bg-card border-gradient shadow-card">
              <Award className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-3xl font-display text-foreground">25+</h3>
              <p className="text-muted-foreground text-sm mt-1">Tahun Pengalaman</p>
            </div>
            
            <div className="p-6 rounded-xl bg-card border-gradient shadow-card">
              <Clock className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-3xl font-display text-foreground">2 Jam</h3>
              <p className="text-muted-foreground text-sm mt-1">Respon Maksimal</p>
            </div>
            
            <div className="p-6 rounded-xl bg-card border-gradient shadow-card">
              <Truck className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-3xl font-display text-foreground">34</h3>
              <p className="text-muted-foreground text-sm mt-1">Provinsi Terlayani</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
