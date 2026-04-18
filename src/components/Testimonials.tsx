import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

const testimonials = [
  {
    quote:
      "Tive o privilégio de encontrar essa empresa no YouTube e, após uma troca de mensagens, fechar com eles a assessoria para a instalação dos meus equipamentos da Ubiquiti. Como são equipamentos de alto valor, e eu estou em SC enquanto eles estão no RJ, fiquei bastante preocupado. O atendimento e o profissionalismo deles são simplesmente incríveis. Podem contratar sem medo — super recomendo!",
    name: "Jonathan Araujo",
    role: "CEO",
    company: "Araújo Investimentos",
  },
  {
    quote:
      "Serviço impecável! O Yan tem um conhecimento absurdo em TI e redes, sempre resolve os problemas com eficiência e ainda dá aquele suporte que tranquiliza a gente. Dá pra ver que ama o que faz. Recomendo de olhos fechados!",
    name: "Massimiliano Billi",
    role: "CEO",
    company: "Celmapel Festas",
  },
  {
    quote:
      "Quero parabenizar a equipe pelo excelente serviço prestado. Foram rápidos, eficientes e extremamente prestativos em todas as minhas solicitações. Continuem com esse ótimo trabalho!",
    name: "Alexandre Oliveira",
    role: "CEO",
    company: "Clínica Nina & Alexandre",
  },
  {
    quote:
      "A empresa desenvolve um excelente trabalho. Consegue resolver qualquer solicitação de maneira rápida e eficaz.",
    name: "Jully Dutra",
    role: "Diretora",
    company: "CCAA Araruama",
  },
  {
    quote:
      "Empresa séria e altamente qualificada. Cuidam de todas as nossas máquinas, fazem o monitoramento de rede da nossa transportadora, responsáveis por todas nossas instalações. Estão sempre dispostos a resolver nossos problemas. O Yan é muito atencioso e profissional. Somos clientes satisfeitos e recomendamos sem peso na consciência.",
    name: "Bruno Viana",
    role: "Diretor",
    company: "Jadlog",
  },
  {
    quote:
      "Amei… trabalho super rápido e ainda tá me dando um super suporte!!! Meu notebook parece novo 🫶🏼",
    name: "Clara Mamede",
    role: "Diretora",
    company: "Petshop Clara Mamede",
  },
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  return (
    <section id="cases" className="py-24 bg-surface/40 border-y border-border relative overflow-hidden">
      <div className="container-custom relative">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-tag mb-5">Depoimentos</span>
          <h2 className="display-font text-2xl md:text-4xl font-extrabold leading-tight">
            O que nossos clientes <span className="text-gradient">dizem sobre nós</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            A confiança dos nossos parceiros é o nosso maior resultado.
          </p>
        </Reveal>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
              >
                <div className="glow-card rounded-2xl p-6 h-full flex flex-col">
                  <Quote className="text-primary mb-4" size={24} />
                  <p className="text-sm leading-relaxed mb-6 flex-1 text-muted-foreground">"{t.quote}"</p>
                  <div className="border-t border-border pt-4">
                    <div className="display-font font-bold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {t.role} · {t.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all"
            aria-label="Anterior"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all"
            aria-label="Próximo"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
