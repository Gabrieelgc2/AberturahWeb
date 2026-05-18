import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { CTA } from "@/components/home/CTA";
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
  const { t } = useTranslation(); 
  return (
    <>
      <PageLayout
        eyebrow={t("PageLayout.eyebrow3")}
        title={
          <>
            {t("PageLayout.title3.line1")}<br />
            <span className="italic">{t("PageLayout.title3.line2")}</span>
          </>
        }
        description={t("PageLayout.description3")}
        image={BackGroundSobre}
      />
      <HistoriaSection />
      <MissaoValoresSection />
      <DiferenciaisSection />
      <CTA />
    </>
  );
}