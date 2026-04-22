import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../components/home/Hero";
import { ProductsPreview } from "../components/home/ProductsPreview";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { AboutPreview } from "../components/home/AboutPreview";
import { Testimonials } from "../components/home/Testimonials";
import { Process } from "../components/home/Process";
import { FAQ } from "../components/home/FAQ";
import { CTA } from "../components/home/CTA";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ABERTURAH" },
      {
        name: "description",
        content:
          "Fabricação e beneficiamento de chapas ACM premium para fachadas, revestimentos e projetos arquitetônicos em todo o Brasil.",
      }, // Texto que aparece nos resultados de busca do Google logo abaixo do título.
      { property: "og:title", content: "ABERTURAH — Material ACM" },
      {
        property: "og:description",
        content: "Chapas ACM premium, beneficiamento CNC e suporte técnico em todo o Brasil.",
      },
      // É o que aparece quando você compartilha o link no WhatsApp, Instagram ou LinkedIn (aquela "cartinha" com imagem e resumo).
    ],
  }),
});

function Index() {
  return (
    <>
      <Hero />
      <ProductsPreview />
      <WhyChooseUs />
      <AboutPreview />
      <Testimonials />
      <Process />
      <FAQ />
      <CTA />
    </>
  );
}
