import { Network, Wifi, Shield, Lock, HardDrive, Activity } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  {
    icon: Network,
    title: "Segmentação de Rede",
    desc: "VLANs, ACLs e políticas granulares para isolamento de tráfego e proteção por zonas.",
    bullets: ["VLANs por departamento/função", "Inter-VLAN routing controlado", "Políticas baseadas em identidade"],
  },
  {
    icon: Wifi,
    title: "Wi-Fi Corporativo",
    desc: "Redes wireless com RADIUS, 802.1X, roaming perfeito e análise preditiva de cobertura.",
    bullets: ["Autenticação 802.1X + RADIUS", "SSIDs múltiplos e isolados", "Fast roaming (802.11r/k/v)"],
  },
  {
    icon: Shield,
    title: "Firewall Avançado",
    desc: "DPI, IDS/IPS, controle de aplicações e prevenção de ameaças.",
    bullets: ["Layer 7 filtering", "IPS/IDS integrado", "Geo-blocking e threat intel"],
  },
  {
    icon: Lock,
    title: "VPN Site-to-Site",
    desc: "Conexões seguras entre filiais com IPsec, WireGuard ou OpenVPN.",
    bullets: ["IPsec e WireGuard", "Redundância automática", "Split tunneling inteligente"],
  },
  {
    icon: HardDrive,
    title: "Backup & DR",
    desc: "Estratégia 3-2-1, snapshots imutáveis, replicação multi-região.",
    bullets: ["Backups incrementais/full", "Retenção configurável", "Restore em < 15min"],
  },
  {
    icon: Activity,
    title: "Monitoramento 24x7",
    desc: "NOC com alertas proativos, dashboards em tempo real e análise de tendências.",
    bullets: ["SNMP + Syslog + NetFlow", "Alertas inteligentes", "Relatórios executivos"],
  },
];

const highlights = [
  {
    tag: "Destaque",
    title: "Zero Trust Architecture",
    desc: "Autenticação contínua, microsegmentação e princípio de menor privilégio.",
    stats: [
      { v: "100%", l: "MFA" },
      { v: "VLAN/ACL", l: "Microsegmentação" },
      { v: "24x7", l: "Monitoramento" },
      { v: "LGPD", l: "Compliance" },
    ],
  },
  {
    tag: "Destaque",
    title: "SD-WAN & Multi-Cloud",
    desc: "Conectividade inteligente com balanceamento automático entre múltiplos links.",
    stats: [
      { v: "99.9%", l: "Uptime" },
      { v: "< 20ms", l: "Latência" },
      { v: "10Gbps", l: "Throughput" },
      { v: "< 3s", l: "Failover" },
    ],
  },
];

const Methodology = () => {
  return (
    <section id="metodologia" className="py-24 bg-surface/40 border-y border-border relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="container-custom relative">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-tag mb-5">Arquitetura</span>
          <h2 className="display-font text-2xl md:text-4xl font-extrabold leading-tight">
            Arquiteturas modernas, com <span className="text-gradient">foco em segurança</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Infraestrutura planejada com as melhores práticas, garantindo performance, escalabilidade e proteção.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {items.map((s, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="glow-card rounded-2xl p-6 h-full">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                  <s.icon size={18} className="text-primary" />
                </div>
                <h3 className="display-font text-base font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-1.5 text-sm">
                  {s.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {highlights.map((h, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="glow-card rounded-2xl p-6">
                <span className="section-tag mb-4 text-[10px]">{h.tag}</span>
                <h3 className="display-font text-lg font-bold mt-3 mb-2">{h.title}</h3>
                <p className="text-sm text-muted-foreground mb-5">{h.desc}</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {h.stats.map((s, j) => (
                    <div key={j} className="text-center p-3 rounded-lg bg-background/40 border border-border">
                      <div className="display-font text-base font-extrabold text-gradient">{s.v}</div>
                      <div className="text-[10px] text-muted-foreground mt-1 uppercase tracking-wider">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <div className="rounded-2xl border border-border bg-card/40 p-6">
            <div className="display-font text-sm font-bold mb-4 text-center text-muted-foreground uppercase tracking-widest">
              Stack Tecnológico
            </div>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {["pfSense", "MikroTik", "Ubiquiti", "Huawei", "Cisco", "Fortinet"].map((t) => (
                <span key={t} className="display-font text-base md:text-lg font-bold text-muted-foreground hover:text-foreground transition-colors">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Methodology;
