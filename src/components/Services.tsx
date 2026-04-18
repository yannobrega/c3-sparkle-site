import { Search, Shield, Wifi, Cloud, Megaphone, Headphones } from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  {
    n: "01",
    tag: "Diagnóstico",
    icon: Search,
    title: "Consultoria e Auditoria de Redes",
    desc: "Mapeamento completo da infraestrutura, identificação de vulnerabilidades e plano de ação detalhado para otimização.",
    bullets: ["Discovery e documentação técnica", "Análise de segurança e compliance", "Roadmap priorizado de melhorias"],
    time: "1-2 semanas",
  },
  {
    n: "02",
    tag: "Segurança",
    icon: Shield,
    title: "Firewall & Segurança",
    desc: "Implementação de políticas avançadas, VPNs corporativas, DPI, IDS/IPS e arquitetura Zero Trust alinhada à LGPD.",
    bullets: ["Regras por aplicação (Layer 7)", "VPN IPsec e WireGuard", "Hardening e auditoria contínua"],
    time: "2-3 semanas",
  },
  {
    n: "03",
    tag: "Conectividade",
    icon: Wifi,
    title: "Wi-Fi Corporativo",
    desc: "Projeto, site survey, implementação com RADIUS, captive portal personalizado e otimização contínua.",
    bullets: ["Segmentação por VLAN e SSID", "Autenticação 802.1X com RADIUS", "Portal cativo com branding"],
    time: "1-2 semanas",
  },
  {
    n: "04",
    tag: "Proteção",
    icon: Cloud,
    title: "Cloud Backup & DR",
    desc: "Estratégia 3-2-1, backups imutáveis, criptografia ponta-a-ponta e testes regulares de recuperação.",
    bullets: ["Snapshots incrementais automáticos", "Replicação multi-região", "Runbooks de disaster recovery"],
    time: "1 semana",
  },
  {
    n: "05",
    tag: "Marketing",
    icon: Megaphone,
    title: "Hotspot & Marketing Wi-Fi",
    desc: "Portais customizados com login social, sistema de vouchers, coleta de dados com LGPD e analytics.",
    bullets: ["Integração com CRM e automação", "Design responsivo personalizado", "Relatórios de uso e conversão"],
    time: "2 semanas",
  },
  {
    n: "06",
    tag: "Operação",
    icon: Headphones,
    title: "Suporte & Manutenção",
    desc: "NOC 24×7, monitoramento proativo, SLA garantido, patching automático e gestão completa de ativos.",
    bullets: ["Alertas inteligentes e automação", "Asset management centralizado", "Relatórios executivos mensais"],
    time: "Contínuo",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      <div className="container-custom relative">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-tag mb-5">Nossos Serviços</span>
          <h2 className="display-font text-2xl md:text-4xl font-extrabold leading-tight">
            Serviços que resolvem hoje e <span className="text-gradient">escalam amanhã</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Soluções completas de infraestrutura, do diagnóstico à operação contínua.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <article className="glow-card rounded-2xl p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <s.icon size={20} className="text-primary" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    <span className="text-primary font-bold mr-1">{s.n}</span>{s.tag}
                  </span>
                </div>
                <h3 className="display-font text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-1.5 mb-5 text-sm">
                  {s.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4 border-t border-border flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Tempo médio: <span className="text-foreground font-semibold">{s.time}</span></span>
                  <a href="#contato" className="text-primary font-semibold hover:underline">Solicitar →</a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-6 py-5 rounded-2xl border border-border bg-card/60">
            <div className="text-left">
              <div className="display-font font-bold text-base">Não sabe por onde começar?</div>
              <div className="text-sm text-muted-foreground">Avaliação inicial sem custo para identificar gargalos.</div>
            </div>
            <a href="#contato" className="btn-shimmer px-5 py-2.5 rounded-full text-sm font-semibold text-primary-foreground whitespace-nowrap">
              Falar com consultor
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Services;
