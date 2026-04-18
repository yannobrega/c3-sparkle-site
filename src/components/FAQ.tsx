import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "Vocês atendem em todo o Brasil?",
    a: "Sim. Temos bases físicas em Araruama-RJ, Goiânia-GO e Fortaleza-CE, com atendimento remoto para todo o território nacional e suporte presencial conforme demanda.",
  },
  {
    q: "Como funciona o suporte 24x7?",
    a: "Nossa central de monitoramento (NOC) acompanha sua infraestrutura em tempo real. Em caso de incidente, abrimos chamado automaticamente e iniciamos o atendimento conforme o SLA contratado.",
  },
  {
    q: "Preciso assinar contrato de longo prazo?",
    a: "Trabalhamos com modelos flexíveis: pacotes pontuais, mensalidades e contratos anuais. Nosso time comercial monta a melhor proposta para o seu cenário.",
  },
  {
    q: "Vocês atendem empresas de qual porte?",
    a: "Atendemos desde pequenos escritórios até indústrias e redes com múltiplas unidades. Nossa metodologia se adapta ao seu tamanho e maturidade de TI.",
  },
  {
    q: "Quais marcas de firewall e rede vocês trabalham?",
    a: "Somos especialistas em pfSense, MikroTik, Fortinet, Ubiquiti, Cisco e Aruba. Recomendamos a melhor solução conforme orçamento e necessidade técnica.",
  },
  {
    q: "Como funciona o backup em nuvem?",
    a: "Implementamos backup automatizado, criptografado e com versionamento. Testamos restauração periodicamente para garantir que seus dados estarão recuperáveis quando necessário.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-32 relative">
      <div className="container-custom relative">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-tag mb-6">Perguntas Frequentes</span>
          <h2 className="display-font text-4xl md:text-6xl font-extrabold leading-tight">
            Tire suas <span className="text-gradient">dúvidas</span>
          </h2>
        </Reveal>

        <Reveal className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glow-card rounded-2xl px-6 border-border"
              >
                <AccordionTrigger className="text-left display-font font-bold text-lg hover:text-primary hover:no-underline py-6">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
};

export default FAQ;
