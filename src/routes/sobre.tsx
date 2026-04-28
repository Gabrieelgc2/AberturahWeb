import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageLayout } from "@/components/PageLayout";
import { CTA } from "@/components/home/CTA";
import { HistoriaSection } from "@/components/sobre/HistoriaSection";
import { MissaoValoresSection } from "@/components/sobre/MissaoValoresSection";
import { DiferenciaisSection } from "@/components/sobre/DiferenciaisSection";

export const Route = createFileRoute("/sobre")({
  component: SobrePage,
  head: () => ({
    meta: [
      { title: "ABERTURAH | Sobre nós" },
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
  return (
    <>
      <PageLayout
        eyebrow="Sobre Nós"
        title={
          <>
            Indústria,<br />
            <span className="italic">precisão e arte.</span>
          </>
        }
        description="Transformando especificações técnicas em soluções eficientes para cada projeto."
      />
      <HistoriaSection />
      <MissaoValoresSection />
      <DiferenciaisSection />
      <CTA />
    </>
  );
}