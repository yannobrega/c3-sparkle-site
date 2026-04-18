import CountUp from "react-countup";
import { Reveal } from "./Reveal";

const stats = [
  { value: 500, suffix: "+", label: "Empresas atendidas", desc: "Em todo o Brasil" },
  { value: 10, suffix: "+", label: "Anos no mercado", desc: "De experiência sólida" },
  { value: 99.9, suffix: "%", label: "Uptime garantido", desc: "Em SLA contratado", decimals: 1 },
  { value: 3, suffix: "", label: "Bases no Brasil", desc: "RJ · GO · CE" },
];

const Results = () => {
  return (
    <section id="resultados" className="py-32 relative">
      <div className="container-custom relative">
        <Reveal className="text-center max-w-3xl mx-auto mb-20">
          <span className="section-tag mb-6">Resultados</span>
          <h2 className="display-font text-4xl md:text-6xl font-extrabold leading-tight">
            Números que <span className="text-gradient">comprovam</span> nossa entrega
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="bg-card hover:bg-surface-elevated transition-colors p-10 h-full">
                <div className="display-font text-5xl md:text-6xl font-extrabold text-gradient mb-4">
                  <CountUp end={s.value} suffix={s.suffix} duration={2.5} decimals={s.decimals || 0} enableScrollSpy scrollSpyOnce />
                </div>
                <div className="display-font text-lg font-bold mb-1">{s.label}</div>
                <div className="text-sm text-muted-foreground">{s.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
