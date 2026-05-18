import { Obras } from "@/components/obras/Obras";
import { PageLayout } from "@/components/PageLayout";
import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/obras")({
  component: Obra,
  head: () => ({
    meta: [
      { title: "ABERTURAh! | Obras" },
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


function Obra() {
  const { t } = useTranslation();
  return (
    <>
      <PageLayout
            eyebrow={t("PageLayout.eyebrow2")}
            title={
              <>
                {t("PageLayout.title2.line1")} <br />
                <span className="italic">{t("PageLayout.title2.line2")}</span>
              </>
            }
            description={t("PageLayout.description2")}
            />
    <Obras />
    </>
  );
}