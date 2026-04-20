import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { InformacoesContato } from "@/components/contato/InformacoesContato";
import { WhatsAppSection } from "@/components/contato/WhatsAppSection";

export const Route = createFileRoute("/contato")({
  component: ContatoPage,
  head: () => ({
    meta: [
      { title: "Contato — ABERTURAH" },
      {
        name: "description",
        content:
          "Fale com a ABERTURAH via WhatsApp, telefone ou e-mail. Atendimento técnico para projetos em todo o Brasil.",
      },
      { property: "og:title", content: "Contato — ABERTURAH" },
      {
        property: "og:description",
        content: "WhatsApp, telefone, e-mail e endereço da ABERTURAH.",
      },
    ],
  }),
});

function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title={
          <>
            Fale com a<br />
            <span className="italic">ABERTURAH.</span>
          </>
        }
        description="Estamos prontos para entender seu projeto e enviar uma proposta em até 24 horas."
      />
      <InformacoesContato />
      <WhatsAppSection />
    </>
  );
}