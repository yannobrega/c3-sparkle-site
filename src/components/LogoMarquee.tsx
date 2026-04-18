const partners = [
  "MikroTik",
  "pfSense",
  "Microsoft",
  "Google Workspace",
  "Fortinet",
  "Ubiquiti",
  "Cisco",
  "VMware",
  "Veeam",
  "Sophos",
  "Aruba",
  "Synology",
];

const LogoMarquee = () => {
  const items = [...partners, ...partners];
  return (
    <section className="py-16 border-y border-border bg-surface/30">
      <div className="container-custom">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-10">
          Tecnologias e parceiros que confiamos
        </p>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {items.map((p, i) => (
            <div
              key={i}
              className="display-font text-2xl md:text-3xl font-bold text-muted-foreground/60 hover:text-foreground transition-colors whitespace-nowrap"
            >
              {p}
            </div>
          ))}
        </div>
        <div className="marquee-track" aria-hidden>
          {items.map((p, i) => (
            <div
              key={`b-${i}`}
              className="display-font text-2xl md:text-3xl font-bold text-muted-foreground/60 whitespace-nowrap"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
