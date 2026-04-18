const CLIENT_LOGOS = [
  { src: "/client_logos/3g.png",             alt: "3G Remoções" },
  { src: "/client_logos/adme.png",           alt: "ADME" },
  { src: "/client_logos/araujo.png",         alt: "Araújo Investimentos" },
  { src: "/client_logos/atb.png",            alt: "ATB" },
  { src: "/client_logos/cartorio.png",       alt: "Cartório do 2º Ofício" },
  { src: "/client_logos/ccaa.png",           alt: "CCAA" },
  { src: "/client_logos/cejan.png",          alt: "Colégio CEJAN" },
  { src: "/client_logos/celmapel.png",       alt: "Celmapel Festas" },
  { src: "/client_logos/Clara-mamede.png",   alt: "PetShop Clara Mamede" },
  { src: "/client_logos/doce-delicia.png",   alt: "Doce Delícia" },
  { src: "/client_logos/grupo-sertao.png",   alt: "Grupo do Sertão" },
  { src: "/client_logos/icatolica.png",      alt: "iCatólica" },
  { src: "/client_logos/iosa.png",           alt: "IOSA" },
  { src: "/client_logos/jadlog.png",         alt: "Jadlog" },
  { src: "/client_logos/lagosparafusos.png", alt: "Lagos Parafusos" },
  { src: "/client_logos/pib.png",            alt: "PIB" },
  { src: "/client_logos/sd-informatica.png", alt: "SD Informática" },
  { src: "/client_logos/solida.png",         alt: "Sólida Engenharia" },
  { src: "/client_logos/supra.png",          alt: "Supra Alimentos" },
] as const;

const MARQUEE_ITEMS = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

const LogoMarquee = () => {
  return (
    <section className="py-10 border-y border-border bg-surface/30">
      <div className="container-custom">
        <p className="text-center text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
          Empresas que confiam em nós
        </p>
        <p className="text-center text-xs text-muted-foreground mb-6">
          Algumas das marcas que já contam com nossas soluções em tecnologia
        </p>
      </div>

      <div className="marquee">
        <div className="marquee-track">
          {MARQUEE_ITEMS.map((logo, i) => (
            <div
              key={`a-${i}`}
              className="flex items-center justify-center px-8 opacity-70 hover:opacity-100 transition-opacity"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-14 w-auto max-w-[160px] object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="marquee-track" aria-hidden>
          {MARQUEE_ITEMS.map((logo, i) => (
            <div
              key={`b-${i}`}
              className="flex items-center justify-center px-8 opacity-70"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-14 w-auto max-w-[160px] object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;