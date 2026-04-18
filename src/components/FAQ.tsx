import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

const FAQS = [
  {
    id: "faq-1",
    q: "Vocês atendem em todo o Brasil?",
    a: "Sim. Temos base operacional em Araruama-RJ e atendemos remotamente todo o território nacional, com suporte presencial conforme demanda. Já cobrimos mais de 120 cidades.",
  },
  {
    id: "faq-2",
    q: "Como funciona o suporte 24x7?",
    a: "Nossa central de monitoramento (NOC) acompanha sua infraestrutura em tempo real com SNMP, Syslog e NetFlow. Em caso de incidente, o chamado é aberto automaticamente e iniciamos o atendimento conforme o SLA contratado.",
  },
  {
    id: "faq-3",
    q: "Com quais marcas vocês trabalham?",
    a: "Somos especialistas e certificados em pfSense, MikroTik, UniFi (Ubiquiti) e Huawei. Também atuamos com Cisco e Fortinet, sempre recomendando a melhor solução para o seu cenário.",
  },
  {
    id: "faq-4",
    q: "Vocês oferecem diagnóstico gratuito?",
    a: "Sim! Realizamos uma avaliação inicial sem custo para identificar gargalos da sua infraestrutura e propor soluções sob medida. Solicite pelo formulário ou WhatsApp.",
  },
  {
    id: "faq-5",
    q: "Como funciona a estratégia de backup?",
    a: "Implementamos a estratégia 3-2-1 com snapshots imutáveis, criptografia ponta-a-ponta e replicação multi-região. Realizamos testes regulares de restauração para garantir RTO < 15min e RPO < 1h.",
  },
  {
    id: "faq-6",
    q: "O que é Zero Trust e por que adotar?",
    a: "Zero Trust é uma arquitetura baseada em autenticação contínua, microsegmentação e princípio de menor privilégio. Combina MFA, VLANs/ACLs, monitoramento 24x7 e compliance LGPD para máxima segurança.",
  },
] as const;

const FAQ = () => {
  return (
    <section id="faq" className="py-24 relative">
      <div className="container-custom relative">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-tag mb-5">Perguntas Frequentes</span>
          <h2 className="display-font text-2xl md:text-4xl font-extrabold leading-tight">
            Tire suas <span className="text-gradient">dúvidas</span>
          </h2>
        </Reveal>

        <Reveal className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((f) => (
              <AccordionItem
                key={f.id}
                value={f.id}
                className="glow-card rounded-xl px-5 border-border"
              >
                <AccordionTrigger className="text-left display-font font-bold text-sm md:text-base hover:text-primary hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
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