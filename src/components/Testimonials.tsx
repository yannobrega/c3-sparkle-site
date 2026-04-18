import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

const testimonials = [
  {
    quote:
      "A C3 Support reestruturou toda a nossa rede e firewall. Reduzimos incidentes em 90% e ganhamos visibilidade total da operação.",
    name: "Marcos Almeida",
    role: "Diretor de TI",
    company: "Indústria Metal RJ",
  },
  {
    quote:
      "Atendimento rápido, equipe extremamente técnica e proativa. Recomendo para qualquer empresa que leve TI a sério.",
    name: "Patrícia Rocha",
    role: "Gerente Administrativa",
    company: "Logística Express GO",
  },
  {
    quote:
      "O monitoramento 24x7 já evitou três incidentes graves antes mesmo de impactarem nossos clientes. Vale cada centavo.",
    name: "Rafael Souza",
    role: "CEO",
    company: "Tech Solutions CE",
  },
  {
    quote:
      "Migração de backup para nuvem foi impecável. Tranquilidade total de saber que nossos dados estão seguros e auditáveis.",
    name: "Júlia Mendes",
    role: "Controller",
    company: "Grupo Atlântico",
  },
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  return (
    <section id="cases" className="py-32 bg-surface/40 border-y border-border relative overflow-hidden">
      <div className="container-custom relative">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-tag mb-6">Cases & Depoimentos</span>
          <h2 className="display-font text-4xl md:text-6xl font-extrabold leading-tight">
            Quem confia na <span className="text-gradient">C3 Support</span>
          </h2>
        </Reveal>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
              >
                <div className="glow-card rounded-2xl p-8 h-full flex flex-col">
                  <Quote className="text-primary mb-6" size={32} />
                  <p className="text-lg leading-relaxed mb-8 flex-1">"{t.quote}"</p>
                  <div className="border-t border-border pt-5">
                    <div className="display-font font-bold">{t.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {t.role} · {t.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-10">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="w-12 h-12 rounded-full border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all"
            aria-label="Anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="w-12 h-12 rounded-full border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all"
            aria-label="Próximo"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
