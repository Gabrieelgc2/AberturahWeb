import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { CTA } from "@/components/home/CTA";
import { NoticiasFeed } from "@/components/noticias/NoticiasFeed";
import Noticias from "../assets/Noticia4.jpeg";

export const Route = createFileRoute("/noticias")({
  component: NoticiasPage,
  head: () => ({
    meta: [
      { title: "ABERTURAH | Notícias" },
      {
        name: "description",
        content:
          "Acompanhe os bastidores, obras e novidades da ABERTURAH no Instagram e YouTube.",
      },
      { property: "og:title", content: "Notícias — ABERTURAH" },
      {
        property: "og:description",
        content: "Bastidores, obras e novidades da ABERTURAH.",
      },
    ],
  }),
});

function NoticiasPage() {
  return (
    <>
      <PageLayout
        eyebrow="Notícias"
        title={
          <>
            Bastidores e<br />
            <span className="italic">novas obras.</span>
          </>
        }
        description="Acompanhe nossos projetos, processo produtivo e novidades publicadas no Instagram e YouTube."
        image={Noticias}
      />
      <NoticiasFeed />
      <CTA />
    </>
  );
}