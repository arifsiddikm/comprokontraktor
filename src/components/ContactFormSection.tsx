import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Send, FileText } from "lucide-react";

const WHATSAPP_NUMBER = "6281234567890";

const equipmentOptions = [
  "Bucket Excavator",
  "Vibro Roller",
  "Dozer",
  "Scissor Lift",
  "Boom Lift",
  "AWP",
  "Breaker Excavator",
  "Tandem Roller",
  "Plate Compactor",
  "Concrete Screed",
  "Forklift",
  "Genset",
  "Lainnya",
];

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    nama: "",
    perusahaan: "",
    whatsapp: "",
    jenisAlat: "",
    durasi: "",
    lokasi: "",
    pesan: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*FORMULIR PEMESANAN ALAT BERAT*
    
📋 *Data Pemohon:*
• Nama: ${formData.nama}
• Perusahaan/Proyek: ${formData.perusahaan}
• No. WhatsApp: ${formData.whatsapp}

🔧 *Detail Kebutuhan:*
• Jenis Alat: ${formData.jenisAlat}
• Durasi Sewa: ${formData.durasi}
• Lokasi Proyek: ${formData.lokasi}

💬 *Pesan Tambahan:*
${formData.pesan || "-"}

Mohon informasi harga dan ketersediaan. Terima kasih.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDirectWhatsApp = () => {
    const message = encodeURIComponent("Halo, saya tertarik untuk menyewa alat berat. Mohon informasi lebih lanjut.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const handleDownloadProfile = () => {
    alert("Company Profile akan segera tersedia untuk diunduh.");
  };

  return (
    <section id="kontak" className="py-20 bg-background">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Formulir Pemesanan
              </div>
              <h2 className="text-3xl md:text-4xl font-display text-foreground mb-2">
                Pesan <span className="text-gradient-primary">Alat Berat</span>
              </h2>
              <p className="text-muted-foreground">
                Isi formulir di bawah ini dan tim kami akan segera menghubungi Anda via WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Nama Lengkap *</label>
                  <Input
                    name="nama"
                    value={formData.nama}
                    onChange={handleChange}
                    placeholder="Masukkan nama Anda"
                    required
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Perusahaan / Proyek *</label>
                  <Input
                    name="perusahaan"
                    value={formData.perusahaan}
                    onChange={handleChange}
                    placeholder="Nama perusahaan atau proyek"
                    required
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Nomor WhatsApp *</label>
                  <Input
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="08xxxxxxxxxx"
                    required
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Jenis Alat Berat *</label>
                  <select
                    name="jenisAlat"
                    value={formData.jenisAlat}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Pilih jenis alat</option>
                    {equipmentOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Durasi Sewa *</label>
                  <Input
                    name="durasi"
                    value={formData.durasi}
                    onChange={handleChange}
                    placeholder="Contoh: 1 bulan, 6 bulan"
                    required
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Lokasi Proyek *</label>
                  <Input
                    name="lokasi"
                    value={formData.lokasi}
                    onChange={handleChange}
                    placeholder="Kota / Provinsi"
                    required
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Pesan Tambahan</label>
                <Textarea
                  name="pesan"
                  value={formData.pesan}
                  onChange={handleChange}
                  placeholder="Detail tambahan atau pertanyaan lainnya..."
                  rows={4}
                  className="bg-background resize-none"
                />
              </div>

              <Button type="submit" variant="whatsapp" size="lg" className="w-full">
                <Send className="w-5 h-5" />
                Kirim via WhatsApp
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-display text-foreground mb-4">
                Hubungi Kami Langsung
              </h3>
              <p className="text-muted-foreground mb-6">
                Tidak ingin mengisi formulir? Hubungi tim sales kami langsung via WhatsApp
                untuk konsultasi cepat dan penawaran harga terbaik.
              </p>
              <div className="space-y-4">
                <Button
                  variant="whatsapp"
                  size="xl"
                  className="w-full"
                  onClick={handleDirectWhatsApp}
                >
                  <MessageCircle className="w-5 h-5" />
                  Hubungi Sales via WhatsApp
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full"
                  onClick={handleDownloadProfile}
                >
                  <FileText className="w-5 h-5" />
                  Download Company Profile
                </Button>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid gap-4">
              <div className="p-5 rounded-xl bg-card border border-border shadow-card">
                <h4 className="font-display text-lg text-foreground mb-1">Alamat Kantor</h4>
                <p className="text-muted-foreground text-sm">
                  Jl. Industri Raya No. 123, Kawasan Industri,<br />
                  Jakarta Timur, DKI Jakarta 13910
                </p>
              </div>
              <div className="p-5 rounded-xl bg-card border border-border shadow-card">
                <h4 className="font-display text-lg text-foreground mb-1">Jam Operasional</h4>
                <p className="text-muted-foreground text-sm">
                  Senin - Jumat: 08:00 - 17:00 WIB<br />
                  Sabtu: 08:00 - 14:00 WIB<br />
                  <span className="text-primary font-medium">Support 24/7 via WhatsApp</span>
                </p>
              </div>
              <div className="p-5 rounded-xl bg-card border border-border shadow-card">
                <h4 className="font-display text-lg text-foreground mb-1">Email</h4>
                <p className="text-muted-foreground text-sm">
                  info@rentalalatberat.com<br />
                  sales@rentalalatberat.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
