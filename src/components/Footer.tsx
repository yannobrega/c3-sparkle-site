import { Linkedin, Instagram, Facebook, MapPin } from "lucide-react";
import logo from "@/assets/c3-logo.png";

const SOCIAL_LINKS = [
  { Icon: Linkedin, href: "https://linkedin.com/company/c3support", label: "LinkedIn" },
  { Icon: Instagram, href: "https://instagram.com/c3support", label: "Instagram" },
  { Icon: Facebook, href: "https://facebook.com/c3support", label: "Facebook" },
] as const;

const NAV_LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Resultados", href: "#resultados" },
  { label: "Cases", href: "#cases" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
] as const;

const Footer = () => {
  return (
    <footer className="border-t border-border bg-surface/40 pt-20 pb-10">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <img src={logo} alt="C3 Support" className="h-10 w-auto" />
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Consultoria especialista em redes, Wi-Fi corporativo, firewall,
              backup em nuvem e monitoramento. Implementamos e sustentamos
              ambientes de alto desempenho.
            </p>
            <div className="flex gap-3 mt-8">
              {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-border hover:border-primary hover:bg-primary/10 hover:text-primary flex items-center justify-center transition-all"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="display-font font-bold mb-5 text-sm">Navegação</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="display-font font-bold mb-5 text-sm">Contato</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-primary mt-1 shrink-0" />
                Araruama-RJ
              </li>
              <li>(22) 3542-0992</li>
              <li>contato@c3support.com.br</li>
            </ul>
            <p className="text-xs text-muted-foreground mt-4">
              Atendimento em todo o Brasil
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between gap-4 text-sm text-muted-foreground">
          <div>
            © {new Date().getFullYear()} C3 Support. Todos os direitos
            reservados.
          </div>
          <div>
            CNPJ · c3support.com.br
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;