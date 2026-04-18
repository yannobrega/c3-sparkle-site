import { ShieldCheck, Clock, MapPin, Award } from "lucide-react";
import { Reveal } from "./Reveal";

const DIFFERENTIALS = [
  {
    icon: ShieldCheck,
    title: "Certificados nas principais tecnologias",
    desc: "pfSense, MikroTik, UniFi e Huawei Certified — não somos revendedores, somos especialistas que vivem dentro da tecnologia.",
  },
  {
    icon: Clock,
    title: "SLA médio abaixo de 2 horas",
    desc: "Monitoramento proativo 24x7 com NOC próprio. Identificamos e resolvemos incidentes antes que você perceba.",
  },
  {
    icon: MapPin,
    title: "+120 cidades atendidas",
    desc: "Base em Araruama-RJ com atendimento remoto em todo o Brasil e presencial sob demanda — sem franquias ou terceiros.",
  },
  {
    icon: Award,
    title: "98% de satisfação comprovada",
    desc: "Mais de 150 projetos entregues. Nossos clientes renovam e indicam — nossa carteira cresce principalmente por referência.",
  },
] as const;

const WhyC3 = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-20" />

      <div className="container-custom relative">
        <Reveal className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="section-tag mb-5">Por que a C3 Support?</span>
              <h2 className="display-font text-2xl md:text-4xl font-extrabold leading-tight mt-4">
                Não somos uma empresa de TI genérica.<br />
                <span className="text-gradient">Somos especialistas em infraestrutura.</span>
              </h2>
            </div>
            <a
              href="#contato"
              className="btn-shimmer shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-primary-foreground"
            >
              Falar com um especialista
            </a>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {DIFFERENTIALS.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.08}>
              <div className="bg-card hover:bg-surface-elevated transition-colors p-8 h-full flex gap-5">
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                  <d.icon size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="display-font text-base font-bold mb-2 leading-snug">
                    {d.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {d.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyC3;