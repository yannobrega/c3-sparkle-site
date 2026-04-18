import { Cloud, Shield, Wifi, Network, Activity, Headphones } from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  {
    icon: Network,
    title: "Redes Corporativas",
    desc: "Projeto, implantação e gestão de redes cabeadas e estruturadas com alta performance e redundância.",
  },
  {
    icon: Wifi,
    title: "Wi-Fi Empresarial",
    desc: "Cobertura total com soluções Ubiquiti, MikroTik e Aruba — alta densidade, controle e segurança.",
  },
  {
    icon: Shield,
    title: "Firewall & Segurança",
    desc: "pfSense, MikroTik e Fortinet. Filtragem, VPN, IDS/IPS e proteção avançada contra ameaças.",
  },
  {
    icon: Cloud,
    title: "Backup em Nuvem",
    desc: "Backup automatizado, criptografado e versionado. Restauração rápida e plano de continuidade.",
  },
  {
    icon: Activity,
    title: "Monitoramento 24x7",
    desc: "NOC ativo monitorando servidores, links e dispositivos. Resposta proativa antes do incidente.",
  },
  {
    icon: Headphones,
    title: "Suporte Técnico",
    desc: "Atendimento remoto e presencial em todo o Brasil. SLA definido e equipe certificada.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      <div className="container-custom relative">
        <Reveal className="text-center max-w-3xl mx-auto mb-20">
          <span className="section-tag mb-6">Nossos Serviços</span>
          <h2 className="display-font text-4xl md:text-6xl font-extrabold leading-tight">
            Soluções completas para a <span className="text-gradient">TI da sua empresa</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Cobrimos toda a infraestrutura: da camada física à segurança lógica e backup, com equipe certificada.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <article className="glow-card rounded-2xl p-8 h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <s.icon size={26} className="text-primary" />
                </div>
                <h3 className="display-font text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
