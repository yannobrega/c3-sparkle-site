import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap } from "lucide-react";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden glow-bg">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Floating glow orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-primary-glow/20 blur-[120px] animate-pulse-glow" />

      {/* Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/60"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <span className="section-tag">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Suporte de TI Corporativo · 24x7
          </span>
        </motion.div>

        {/* Ghost text behind */}
        <div className="relative text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="display-font ghost-text absolute inset-x-0 -top-8 md:-top-16 text-[18vw] md:text-[14vw] font-extrabold leading-none pointer-events-none select-none"
            aria-hidden
          >
            C3
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="display-font relative text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight text-glow"
          >
            Infraestrutura de TI <br />
            que <span className="text-gradient">não para.</span> Nunca.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground"
          >
            Suporte especializado, redes corporativas, segurança digital e monitoramento 24x7 para empresas que não podem
            se dar ao luxo de ficar offline.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#contato"
              className="btn-shimmer inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-primary-foreground"
            >
              Falar com Especialista
              <ArrowRight size={18} />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-foreground border border-border hover:border-primary/50 hover:bg-surface transition-all"
            >
              Ver Serviços
            </a>
          </motion.div>
        </div>

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto"
        >
          {[
            { value: 500, suffix: "+", label: "Empresas atendidas" },
            { value: 10, suffix: "+", label: "Anos de mercado" },
            { value: 99.9, suffix: "%", label: "Uptime garantido", decimals: 1 },
            { value: 24, suffix: "/7", label: "Monitoramento" },
          ].map((s, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm px-6 py-5 text-center hover:border-primary/40 transition-colors"
            >
              <div className="display-font text-3xl md:text-4xl font-extrabold text-gradient">
                <CountUp end={s.value} suffix={s.suffix} duration={2.5} decimals={s.decimals || 0} enableScrollSpy scrollSpyOnce />
              </div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
