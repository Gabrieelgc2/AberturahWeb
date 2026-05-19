import { createFileRoute } from "@tanstack/react-router";
import { CTA } from "@/components/home/CTA";
import { ProdutosCatalogo } from "@/components/produtos/ProdutosCatalogo";
import BackGroundProduto from "../assets/image-casa-aberturah.webp";
import { PageLayout } from "@/components/PageLayout";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/produtos")({
  component: ProdutosPage,
  head: () => ({
    meta: [
      { title: "ABERTURAh! | Produtos" },
      {
        name: "description",
        content:
          "Linha completa de chapas ACM: brilhante, escovado, madeirado e acabamentos especiais. Mais de 40 cores disponíveis.",
      },
      { property: "og:title", content: "Produtos ACM — ABERTURAh!" },
      {
        property: "og:description",
        content: "Linha completa de chapas ACM com mais de 40 acabamentos.",
      },
    ],
  }),
});

function ProdutosPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageLayout
        eyebrow={t("PageLayout.eyebrow1")}
        title={
          <>
            {t("PageLayout.title1.line1")} <br />
            <span>
              {t("PageLayout.title1.line2")}
            </span>
          </>
        }
        description={t("PageLayout.description1")}
        image={BackGroundProduto}
      />
      <ProdutosCatalogo />
      <CTA />
    </>
  );
}