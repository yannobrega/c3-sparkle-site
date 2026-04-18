import { useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CountUp from "react-countup";

const STATS = [
  { value: 120, prefix: "+", suffix: "", label: "Cidades atendidas" },
  { value: 2500, prefix: "+", suffix: "", label: "Equipamentos gerenciados" },
  { value: 2, prefix: "<", suffix: "h", label: "SLA médio" },
  { value: 98, prefix: "", suffix: "%", label: "Satisfação" },
] as const;

const Hero = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: `${4 + Math.random() * 4}s`,
        delay: `${Math.random() * 4}s`,
      })),
    [],
  );

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden glow-bg">
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-primary-glow/20 blur-[120px] animate-pulse-glow" />

      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute w-1 h-1 rounded-full bg-primary/60"
          style={{
            top: p.top,
            left: p.left,
            animation: `float ${p.duration} ease-in-out infinite`,
            animationDelay: p.delay,
          }}
        />
      ))}

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <span className="section-tag">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Redes · Cibersegurança · Infraestrutura
          </span>
        </motion.div>

        <div className="relative text-center">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="display-font relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-glow max-w-4xl mx-auto"
          >
            Conectividade{" "}
            <span className="text-gradient">confiável e segura</span> para
            empresas em todo o Brasil
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground"
          >
            Consultoria especialista em redes, Wi-Fi corporativo, firewall,
            backup em nuvem e monitoramento. Implementamos e sustentamos
            ambientes de alto desempenho com pfSense, MikroTik, UniFi e Huawei.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center"
          >
            <a
              href="#contato"
              className="btn-shimmer inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-primary-foreground"
            >
              Solicitar proposta
              <ArrowRight size={16} />
            </a>
            <a
              href="https://wa.me/message/SXJMS25D6IM3P1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-foreground border border-border hover:border-primary/50 hover:bg-surface transition-all"
            >
              Falar no WhatsApp
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-5 text-xs text-muted-foreground"
          >
            Resposta rápida e diagnóstico gratuito · pfSense · MikroTik · UniFi
            · Huawei Certified
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto"
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-border bg-card/60 backdrop-blur-sm px-4 py-4 text-center hover:border-primary/40 transition-colors"
            >
              <div className="display-font text-2xl md:text-3xl font-extrabold text-gradient">
                {s.prefix}
                <CountUp
                  end={s.value}
                  duration={2.5}
                  separator="."
                  enableScrollSpy
                  scrollSpyOnce
                />
                {s.suffix}
              </div>
              <div className="text-[11px] md:text-xs text-muted-foreground mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;