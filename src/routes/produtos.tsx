import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/home/CTA";
import { ProdutosCatalogo } from "@/components/produtos/ProdutosCatalogo";

export const Route = createFileRoute("/produtos")({
  component: ProdutosPage,
  head: () => ({
    meta: [
      { title: "Produtos — ABERTURAH" },
      {
        name: "description",
        content:
          "Linha completa de chapas ACM: brilhante, escovado, madeirado e acabamentos especiais. Mais de 40 cores disponíveis.",
      },
      { property: "og:title", content: "Produtos ACM — ABERTURAH" },
      {
        property: "og:description",
        content: "Linha completa de chapas ACM com mais de 40 acabamentos.",
      },
    ],
  }),
});

function ProdutosPage() {
  return (
    <>
      <PageHero
        eyebrow="Produtos"
        title={
          <>
            Linha completa<br />
            <span className="italic">de ACM premium.</span>
          </>
        }
        description="Mais de 40 acabamentos certificados para qualquer projeto, do residencial ao corporativo."
      />
      <ProdutosCatalogo />
      <CTA />
    </>
  );
}