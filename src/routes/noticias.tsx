import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/home/CTA";
import { NoticiasFeed } from "@/components/noticias/NoticiasFeed";

export const Route = createFileRoute("/noticias")({
  component: NoticiasPage,
  head: () => ({
    meta: [
      { title: "Notícias — ABERTURAH" },
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
      <PageHero
        eyebrow="Notícias"
        title={
          <>
            Bastidores e<br />
            <span className="italic">novas obras.</span>
          </>
        }
        description="Acompanhe nossos projetos, processo produtivo e novidades publicadas no Instagram e YouTube."
      />
      <NoticiasFeed />
      <CTA />
    </>
  );
}