import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "../components/PageLayout";
import { InformacoesContato } from "../components/contato/InformacoesContato";
import { WhatsAppSection } from "../components/contato/WhatsAppSection";
import contato from "../assets/contato.jpeg";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/contato")({
  component: ContatoPage,
  head: () => ({
    meta: [
      { title: "ABERTURAh! | Contato" },
      {
        name: "description",
        content:
          "Fale com a ABERTURAh! via WhatsApp, telefone ou e-mail. Atendimento técnico para projetos em todo o Brasil.",
      },
      { property: "og:title", content: "Contato — ABERTURAh!" },
      {
        property: "og:description",
        content: "WhatsApp, telefone, e-mail e endereço da ABERTURAh!.",
      },
    ],
  }),
});

function ContatoPage() {
const {t} = useTranslation();
  return (
    <>
      <PageLayout
        eyebrow={t("PageLayout.eyebrow5")}
        title={
          <>
            {t("PageLayout.title5.line1")}<br />
            <span>{t("PageLayout.title5.line2")}</span>
          </>
        }
        description={t("PageLayout.description5")}
        image={contato}
      />
      <InformacoesContato />
      <WhatsAppSection />
    </>
  );
}