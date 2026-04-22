import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
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
      <PageHero
        eyebrow="Sobre Nós"
        title={
          <>
            Indústria,<br />
            <span className="italic">precisão e arte.</span>
          </>
        }
        description="Há mais de 15 anos transformando a forma como o Brasil reveste seus edifícios."
      />
      <HistoriaSection />
      <MissaoValoresSection />
      <DiferenciaisSection />
      <CTA />
    </>
  );
}