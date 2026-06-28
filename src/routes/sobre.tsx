import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { CTA } from "@/components/CTA";
import { HistoriaSection } from "@/components/sobre/HistoriaSection";
import { MissaoValoresSection } from "@/components/sobre/MissaoValoresSection";
import { DiferenciaisSection } from "@/components/sobre/DiferenciaisSection";
import BackGroundSobre from "../assets/aboutbg.webp";
import {useTranslation} from "react-i18next";

export const Route = createFileRoute("/sobre")({
  component: SobrePage,
  head: () => ({
    meta: [
      { title: "ABERTURAh! | Sobre nós" },
      {
        name: "description",
        content:
          "Conheça a história, missão e diferenciais da ABERTURAH, indústria brasileira de chapas ACM e beneficiamento.",
      },
      { property: "og:title", content: "Sobre a ABERTURAH" },
      {
        property: "og:description",
        content: "Indústria brasileira referência em ACM. História, missão e diferenciais.",
      },
    ],
  }),
});

function SobrePage() {
  const { t } = useTranslation("pagelayout"); 
  return (
    <>
      <PageLayout
        eyebrow={t("eyebrow3")}
        title={
          <>
            {t("title3.line1")}<br />
            <span>{t("title3.line2")}</span>
          </>
        }
        description={t("description3")}
        image={BackGroundSobre}
      />
      <HistoriaSection />
      <MissaoValoresSection />
      <DiferenciaisSection />
      <CTA />
    </>
  );
}