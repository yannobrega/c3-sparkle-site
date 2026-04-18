import { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Reveal } from "./Reveal";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", company: "", contact: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Solicitação enviada!",
        description: "Em breve um especialista entrará em contato para o seu diagnóstico gratuito.",
      });
      setForm({ name: "", company: "", contact: "", message: "" });
    }, 800);
  };

  return (
    <section id="contato" className="py-32 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/20 blur-[140px] rounded-full" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <span className="section-tag mb-6">Vamos conversar</span>
            <h2 className="display-font text-4xl md:text-6xl font-extrabold leading-[1.05]">
              Quer um <span className="text-gradient">diagnóstico gratuito</span> da sua TI?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Em até 48h um especialista da C3 Support entra em contato para entender seu cenário e propor o melhor caminho.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">E-mail</div>
                  <div className="font-semibold">contato@c3support.com.br</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Atendimento comercial</div>
                  <div className="font-semibold">Seg a Sex · 8h às 18h</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Bases</div>
                  <div className="font-semibold">Araruama-RJ · Goiânia-GO · Fortaleza-CE</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form
              onSubmit={onSubmit}
              className="glow-card rounded-3xl p-8 md:p-10 backdrop-blur-sm bg-card/80"
            >
              <div className="space-y-5">
                <div>
                  <label className="text-sm font-semibold mb-2 block">Nome</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-2 block">Empresa</label>
                  <input
                    required
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Nome da empresa"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-2 block">E-mail ou telefone</label>
                  <input
                    required
                    value={form.contact}
                    onChange={(e) => setForm({ ...form, contact: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Como podemos te contatar?"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-2 block">Mensagem</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    placeholder="Conte um pouco sobre seu cenário (opcional)"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-shimmer w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-base font-semibold text-primary-foreground disabled:opacity-60"
                >
                  {loading ? "Enviando..." : "Quero meu diagnóstico gratuito"}
                  <ArrowRight size={18} />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
