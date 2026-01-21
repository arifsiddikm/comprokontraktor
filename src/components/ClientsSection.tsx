const clients = [
  "PT Wijaya Karya",
  "PT Adhi Karya",
  "PT PP (Persero)",
  "PT Hutama Karya",
  "PT Waskita Karya",
  "PT Semen Indonesia",
  "PT Krakatau Steel",
  "PT Astra International",
];

const ClientsSection = () => {
  return (
    <section className="py-16 bg-secondary border-y border-border">
      <div className="container px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">
            Dipercaya oleh Berbagai Perusahaan Konstruksi dan Industri
          </p>
          <h2 className="text-2xl md:text-3xl font-display text-foreground">
            Klien & <span className="text-gradient-primary">Partner Kami</span>
          </h2>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
            >
              <span className="text-foreground font-semibold text-center text-sm md:text-base">
                {client}
              </span>
            </div>
          ))}
        </div>

        {/* Projects Count */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Dan lebih dari <span className="text-primary font-bold">100+ perusahaan</span> lainnya yang telah mempercayakan kebutuhan alat berat mereka kepada kami.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
