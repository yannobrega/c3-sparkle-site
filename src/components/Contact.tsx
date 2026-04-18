import { useState } from "react";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Clock,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Reveal } from "./Reveal";

interface ContactForm {
  name: string;
  company: string;
  contact: string;
  message: string;
}

const EMPTY_FORM: ContactForm = {
  name: "",
  company: "",
  contact: "",
  message: "",
};

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState<ContactForm>(EMPTY_FORM);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Solicitação enviada!",
        description:
          "Em breve um especialista da C3 Support entrará em contato.",
      });
      setForm(EMPTY_FORM);
    }, 800);
  };

  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/20 blur-[140px] rounded-full" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <Reveal>
            <span className="section-tag mb-5">Vamos conversar</span>

            <h2 className="display-font text-2xl md:text-4xl font-extrabold leading-[1.1]">
              Vamos elevar a sua rede para{" "}
              <span className="text-gradient">padrão enterprise?</span>
            </h2>
            <p className="mt-5 text-base text-muted-foreground">
              Envie um WhatsApp ou solicite uma avaliação sem custo para receber
              um diagnóstico do seu ambiente.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">
                    Telefone e WhatsApp
                  </div>
                  <div className="font-semibold text-sm">(22) 3542-0992</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">E-mail</div>
                  <div className="font-semibold text-sm">
                    contato@c3support.com.br
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Endereço</div>
                  <div className="font-semibold text-sm">
                    Rua Mário Vasconcelos, 20 - Sala 307
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Centro — Araruama, RJ · CEP 28979-132
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                  <Clock size={16} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">
                    Horário de funcionamento
                  </div>
                  <div className="font-semibold text-sm">
                    Seg a Sex — 08:00 às 18:00
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Sáb e Dom — atendimento em sobreaviso
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/message/SXJMS25D6IM3P1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold border border-primary/40 text-primary hover:bg-primary/10 transition-all"
            >
              <MessageCircle size={16} />
              Falar no WhatsApp
            </a>
          </Reveal>

          <Reveal delay={0.15}>
            <form
              onSubmit={onSubmit}
              className="glow-card rounded-2xl p-6 md:p-8 backdrop-blur-sm bg-card/80"
            >
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold mb-1.5 block">
                    Nome
                  </label>
                  <input
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    className="w-full px-4 py-2.5 text-sm rounded-lg bg-input border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold mb-1.5 block">
                    Empresa
                  </label>
                  <input
                    required
                    autoComplete="organization"
                    value={form.company}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, company: e.target.value }))
                    }
                    className="w-full px-4 py-2.5 text-sm rounded-lg bg-input border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Nome da empresa"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold mb-1.5 block">
                    E-mail ou telefone
                  </label>
                  <input
                    required
                    autoComplete="email"
                    value={form.contact}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, contact: e.target.value }))
                    }
                    className="w-full px-4 py-2.5 text-sm rounded-lg bg-input border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Como podemos te contatar?"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold mb-1.5 block">
                    Mensagem
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    className="w-full px-4 py-2.5 text-sm rounded-lg bg-input border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    placeholder="Conte um pouco sobre seu cenário (opcional)"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-shimmer w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-primary-foreground disabled:opacity-60"
                >
                  {loading ? "Enviando..." : "Solicitar diagnóstico gratuito"}
                  <ArrowRight size={16} />
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