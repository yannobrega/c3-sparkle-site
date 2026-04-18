import { Linkedin, Instagram, Facebook, MapPin } from "lucide-react";
import logo from "@/assets/c3-logo.png";

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
              Consultoria especialista em redes, Wi-Fi corporativo, firewall, backup em nuvem e monitoramento.
              Implementamos e sustentamos ambientes de alto desempenho.
            </p>
            <div className="flex gap-3 mt-8">
              {[Linkedin, Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg border border-border hover:border-primary hover:bg-primary/10 hover:text-primary flex items-center justify-center transition-all"
                  aria-label="Social"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="display-font font-bold mb-5 text-sm">Navegação</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#servicos" className="hover:text-foreground transition-colors">Serviços</a></li>
              <li><a href="#metodologia" className="hover:text-foreground transition-colors">Metodologia</a></li>
              <li><a href="#resultados" className="hover:text-foreground transition-colors">Resultados</a></li>
              <li><a href="#cases" className="hover:text-foreground transition-colors">Cases</a></li>
              <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
              <li><a href="#contato" className="hover:text-foreground transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="display-font font-bold mb-5 text-sm">Contato</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><MapPin size={14} className="text-primary mt-1 shrink-0" /> Araruama-RJ</li>
              <li>(22) 3542-0992</li>
              <li>contato@c3support.com.br</li>
            </ul>
            <p className="text-xs text-muted-foreground mt-4">Atendimento em todo o Brasil</p>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} C3 Support. Todos os direitos reservados.</div>
          <div>CNPJ disponível mediante solicitação · c3support.com.br</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
