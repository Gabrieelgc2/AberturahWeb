import { Obras } from "@/components/obras/Obras";
import { PageLayout } from "@/components/PageLayout";
import { createFileRoute } from "@tanstack/react-router";

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
  return (
    <>
      <PageLayout
            eyebrow="Obras"
            title={
              <>
                Obras que transformam <br />
                <span className="italic">cada projeto</span>
              </>
            }
            description="A solução completa em ACM para projetos modernos e sofisticados."
            />
    <Obras />
    </>
  );
}