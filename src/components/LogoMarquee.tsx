const partners = [
  "pfSense",
  "MikroTik",
  "Ubiquiti UniFi",
  "Huawei",
  "Cisco",
  "Fortinet",
  "Veeam",
  "Synology",
];

const clients = [
  "SD Informática",
  "Supra Alimentos",
  "Sólida Engenharia",
  "Grupo do Sertão",
  "Cartório do 2º Ofício",
  "Colégio CEJAN",
  "Celmapel Festas",
  "CCAA",
  "Araújo Investimentos",
  "PetShop Clara Mamede",
  "3G Remoções",
  "Jadlog",
  "Lagos Parafusos",
  "IOSA",
  "ADME",
  "Doce Delícia",
];

const LogoMarquee = () => {
  const items = [...clients, ...clients];
  return (
    <section className="py-12 border-y border-border bg-surface/30">
      <div className="container-custom">
        <p className="text-center text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
          Empresas que confiam em nós
        </p>
        <p className="text-center text-xs text-muted-foreground mb-8">
          Algumas das marcas que já contam com nossas soluções em tecnologia
        </p>
      </div>
      <div className="marquee mb-8">
        <div className="marquee-track">
          {items.map((p, i) => (
            <div
              key={i}
              className="display-font text-base md:text-lg font-bold text-muted-foreground/60 hover:text-foreground transition-colors whitespace-nowrap"
            >
              {p}
            </div>
          ))}
        </div>
        <div className="marquee-track" aria-hidden>
          {items.map((p, i) => (
            <div
              key={`b-${i}`}
              className="display-font text-base md:text-lg font-bold text-muted-foreground/60 whitespace-nowrap"
            >
              {p}
            </div>
          ))}
        </div>
      </div>

      <div className="container-custom">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
          <span className="font-semibold uppercase tracking-widest text-[10px]">Parceiros tecnológicos:</span>
          {partners.map((p) => (
            <span key={p} className="hover:text-primary transition-colors">{p}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
