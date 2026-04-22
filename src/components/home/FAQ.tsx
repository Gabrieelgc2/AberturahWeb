import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { SectionHeading } from "../../components/SectionHeading";

const faqs = [
  {
    q: "O que é ACM e onde pode ser aplicado?",
    a: "ACM (Aluminum Composite Material) é um painel composto por duas chapas de alumínio com núcleo de polietileno. É amplamente usado em fachadas ventiladas, revestimentos internos, totens, comunicação visual e mobiliário urbano por ser leve, plano e altamente durável.",
  },
  {
    q: "Qual a espessura ideal para fachadas?",
    a: "Para fachadas externas recomendamos painéis de 4mm com lâmina de alumínio de 0,30mm a 0,50mm. Para uso interno ou comunicação visual, espessuras de 3mm já são suficientes. Nossa equipe técnica orienta a melhor especificação para cada caso.",
  },
  {
    q: "Vocês fazem o beneficiamento das chapas?",
    a: "Sim. Realizamos corte CNC, dobra, fresagem, usinagem e preparação de bandejas em nossa própria fábrica. Isso garante precisão milimétrica e otimiza o tempo de instalação na obra.",
  },
  {
    q: "Quais são os prazos de entrega?",
    a: "Pedidos padrão saem em 5 a 10 dias úteis. Para projetos com beneficiamento complexo, o prazo é definido em conjunto após análise técnica. Mantemos estoque robusto para atender urgências.",
  },
  {
    q: "Vocês entregam em todo o Brasil?",
    a: "Sim. Trabalhamos com transportadoras especializadas em material plano, com embalagem técnica que garante a integridade das chapas até o destino final.",
  },
  {
    q: "Como funciona a garantia?",
    a: "Nossas chapas têm garantia de até 10 anos para projetos arquitetônicos, dependendo do acabamento escolhido. Fornecemos toda a documentação técnica e suporte pós-venda.",
  },
];

export function FAQ() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Perguntas frequentes"
          title={
            <>
              Tire suas dúvidas
              <br />
              <span className="italic">sobre ACM.</span>
            </>
          }
        />

        <Accordion type="single" collapsible className="mt-16 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-[color:var(--steel-light)] bg-background px-6 transition-colors data-[state=open]:bg-[color:var(--steel-light)]/40"
            >
              <AccordionTrigger className="py-6 text-left font-serif text-lg font-semibold text-foreground hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base leading-relaxed text-[color:var(--steel)]">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
