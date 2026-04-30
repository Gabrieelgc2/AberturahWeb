import { createFileRoute } from "@tanstack/react-router";
import { CTA } from "@/components/home/CTA";
import {ProdutosCatalogo} from "@/components/produtos/ProdutosCatalogo";
import BackGroundProduto from "../assets/Produtos.jpeg";
import { PageLayout } from "@/components/PageLayout";

export const Route = createFileRoute("/produtos")({
  component: ProdutosPage,
  head: () => ({
    meta: [
      { title: "ABERTURAH | Produtos" },
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
      <PageLayout
        eyebrow="Produtos"
        title={
          <>
            Linha completa<br />
            <span className="italic">de ACM premium.</span>
          </>
        }
        description="Mais de 40 acabamentos certificados para qualquer projeto, do residencial ao corporativo."
        image={BackGroundProduto}
      />
      <ProdutosCatalogo />
      <CTA />
    </>
  );
}