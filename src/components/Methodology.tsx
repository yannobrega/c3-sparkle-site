import { Search, PenTool, Rocket, LifeBuoy } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  {
    letter: "D",
    icon: Search,
    title: "Diagnóstico",
    desc: "Mapeamos sua infraestrutura, identificamos gargalos, riscos e oportunidades de melhoria.",
  },
  {
    letter: "P",
    icon: PenTool,
    title: "Projeto",
    desc: "Desenhamos a solução ideal — escalável, segura e dimensionada para seu crescimento.",
  },
  {
    letter: "I",
    icon: Rocket,
    title: "Implementação",
    desc: "Executamos com precisão, mínimo downtime e documentação completa de toda a entrega.",
  },
  {
    letter: "S",
    icon: LifeBuoy,
    title: "Suporte",
    desc: "Monitoramos, mantemos e evoluímos sua TI continuamente, com SLA garantido.",
  },
];

const Methodology = () => {
  return (
    <section id="metodologia" className="py-32 bg-surface/40 border-y border-border relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="container-custom relative">
        <Reveal className="text-center max-w-3xl mx-auto mb-20">
          <span className="section-tag mb-6">Metodologia</span>
          <h2 className="display-font text-4xl md:text-6xl font-extrabold leading-tight">
            Como <span className="text-gradient">trabalhamos</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Um processo simples e comprovado que entrega resultados previsíveis em projetos de qualquer porte.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="relative glow-card rounded-2xl p-8 h-full overflow-hidden">
                <div
                  className="display-font absolute -top-8 -right-4 text-[10rem] font-extrabold text-foreground/[0.04] leading-none pointer-events-none select-none"
                  aria-hidden
                >
                  {s.letter}
                </div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mb-5">
                    <s.icon size={22} className="text-primary" />
                  </div>
                  <div className="text-xs uppercase tracking-widest text-primary mb-2">Etapa 0{i + 1}</div>
                  <h3 className="display-font text-2xl font-bold mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
