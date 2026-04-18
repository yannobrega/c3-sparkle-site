import { ArrowRight, MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";

const CTABanner = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-primary/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="container-custom relative">
        <Reveal>
          <div className="rounded-2xl border border-primary/20 bg-card/60 backdrop-blur-sm px-8 md:px-14 py-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
                Diagnóstico gratuito
              </p>
              <h2 className="display-font text-2xl md:text-3xl font-extrabold leading-tight text-foreground">
                Sua infraestrutura tem gargalos que você ainda não sabe.
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Em 30 minutos de conversa, identificamos vulnerabilidades,
                pontos de falha e oportunidades de melhoria — sem compromisso.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 shrink-0">
              <a
                href="#contato"
                className="btn-shimmer inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-primary-foreground whitespace-nowrap"
              >
                Solicitar diagnóstico
                <ArrowRight size={16} />
              </a>
              <a
                href="https://wa.me/message/SXJMS25D6IM3P1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-primary/40 text-primary hover:bg-primary/10 transition-all whitespace-nowrap"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTABanner;