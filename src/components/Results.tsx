import CountUp from "react-countup";
import { Reveal } from "./Reveal";
import { TrendingDown, TrendingUp, Clock } from "lucide-react";

const cases = [
  {
    icon: TrendingDown,
    delta: "↓ 73%",
    title: "Quedas de Wi-Fi",
    desc: "Rede redesenhada com UniFi + RADIUS e políticas QoS.",
    extra: "Disponibilidade 99.7%",
  },
  {
    icon: TrendingUp,
    delta: "↑ 2.1x",
    title: "Velocidade média",
    desc: "Migração de topologia, VLANs e correção de loop L2.",
    extra: "Throughput 850 Mbps",
  },
  {
    icon: Clock,
    delta: "15min",
    title: "RTO de Backup",
    desc: "Backups imutáveis e testes de restauração trimestrais.",
    extra: "RPO < 1h",
  },
];

const stats = [
  { value: 150, suffix: "+", label: "Projetos entregues" },
  { value: 98, suffix: "%", label: "Taxa de sucesso" },
  { value: 24, suffix: "/7", label: "Suporte ativo" },
  { value: 2, prefix: "<", suffix: "h", label: "Tempo de resposta" },
];

const Results = () => {
  return (
    <section id="resultados" className="py-24 relative">
      <div className="container-custom relative">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-tag mb-5">Resultados</span>
          <h2 className="display-font text-2xl md:text-4xl font-extrabold leading-tight">
            Resultados <span className="text-gradient">na prática</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Transformação mensurável em projetos reais de infraestrutura e segurança.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {cases.map((c, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="glow-card rounded-2xl p-6 h-full">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <c.icon size={18} className="text-primary" />
                  </div>
                  <div className="display-font text-2xl font-extrabold text-gradient">{c.delta}</div>
                </div>
                <h3 className="display-font text-base font-bold mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{c.desc}</p>
                <div className="text-xs text-primary font-semibold">{c.extra}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="bg-card hover:bg-surface-elevated transition-colors p-6 h-full text-center">
                <div className="display-font text-3xl md:text-4xl font-extrabold text-gradient mb-2">
                  {s.prefix}
                  <CountUp end={s.value} duration={2.5} enableScrollSpy scrollSpyOnce />
                  {s.suffix}
                </div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
