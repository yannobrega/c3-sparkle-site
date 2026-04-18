import CountUp from "react-countup";
import { Reveal } from "./Reveal";
import { TrendingDown, TrendingUp, Clock, Zap } from "lucide-react";

const CASES = [
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
] as const;

const STATS = [
  { value: 150, suffix: "+", label: "Projetos entregues" },
  { value: 98, suffix: "%", label: "Taxa de sucesso" },
  { value: 24, suffix: "/7", label: "Suporte ativo" },
  { value: 2, prefix: "<", suffix: "h", label: "Tempo de resposta" },
] as const;

const UPTIME_STATS = [
  { v: "< 2h",   l: "SLA médio" },
  { v: "< 15min", l: "RTO de backup" },
  { v: "Zero",   l: "Brechas no Zero Trust" },
  { v: "100%",   l: "MFA nos ambientes" },
] as const;

const Results = () => {
  return (
    <section id="resultados" className="py-24 relative">
      <div className="container-custom relative">

        {/* Featured uptime stat */}
        <Reveal className="mb-14">
          <div className="rounded-2xl border border-primary/20 bg-card/40 backdrop-blur-sm p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-primary/10 blur-[80px] pointer-events-none" />
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Zap size={14} className="text-primary" />
                <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                  Uptime garantido
                </span>
              </div>
              <div className="display-font text-5xl md:text-7xl font-extrabold text-gradient leading-none">
                99.9%
              </div>
              <p className="mt-3 text-sm text-muted-foreground max-w-sm">
                De disponibilidade nos ambientes gerenciados pela C3 Support.
                Monitoramento proativo 24x7 com NOC próprio.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 shrink-0">
              {UPTIME_STATS.map((s) => (
                <div
                  key={s.l}
                  className="text-center p-4 rounded-xl bg-background/40 border border-border"
                >
                  <div className="display-font text-lg font-extrabold text-gradient">
                    {s.v}
                  </div>
                  <div className="text-[10px] text-muted-foreground mt-1 uppercase tracking-wider">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-tag mb-5">Resultados</span>
          <h2 className="display-font text-2xl md:text-4xl font-extrabold leading-tight">
            Resultados <span className="text-gradient">na prática</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Transformação mensurável em projetos reais de infraestrutura e
            segurança.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {CASES.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="glow-card rounded-2xl p-6 h-full">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <c.icon size={18} className="text-primary" />
                  </div>
                  <div className="display-font text-2xl font-extrabold text-gradient">
                    {c.delta}
                  </div>
                </div>
                <h3 className="display-font text-base font-bold mb-2">
                  {c.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{c.desc}</p>
                <div className="text-xs text-primary font-semibold">
                  {c.extra}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="bg-card hover:bg-surface-elevated transition-colors p-6 h-full text-center">
                <div className="display-font text-3xl md:text-4xl font-extrabold text-gradient mb-2">
                  {"prefix" in s ? s.prefix : ""}
                  <CountUp
                    end={s.value}
                    duration={2.5}
                    enableScrollSpy
                    scrollSpyOnce
                  />
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