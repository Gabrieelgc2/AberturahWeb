import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "../components/PageLayout";
import { InformacoesContato } from "../components/contato/InformacoesContato";
import { WhatsAppSection } from "../components/contato/WhatsAppSection";
import contato from "../assets/contato.jpeg";

export const Route = createFileRoute("/contato")({
  component: ContatoPage,
  head: () => ({
    meta: [
      { title: "ABERTURAH | Contato" },
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
      <PageLayout
        eyebrow="Contato"
        title={
          <>
            Fale com a<br />
            <span className="italic">ABERTURAh!</span>
          </>
        }
        description="Estamos prontos para entender seu projeto e enviar uma proposta em até 24 horas."
              image={contato}
      />
      <InformacoesContato />
      <WhatsAppSection />
    </>
  );
}