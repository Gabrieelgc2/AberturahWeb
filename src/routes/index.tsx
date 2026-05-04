import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Hero } from "../components/home/Hero";

const ProductsPreview = lazy(() =>
  import("../components/home/ProductsPreview").then((module) => ({
    default: module.ProductsPreview,
  })),
);
const WhyChooseUs = lazy(() =>
  import("../components/WhyChooseUs").then((module) => ({
    default: module.WhyChooseUs,
  })),
);
const AboutPreview = lazy(() =>
  import("../components/home/AboutPreview").then((module) => ({
    default: module.AboutPreview,
  })),
);
const Testimonials = lazy(() =>
  import("../components/home/Testimonials").then((module) => ({
    default: module.Testimonials,
  })),
);
const Process = lazy(() =>
  import("../components/home/Process").then((module) => ({
    default: module.Process,
  })),
);
const FAQ = lazy(() =>
  import("../components/home/FAQ").then((module) => ({
    default: module.FAQ,
  })),
);
const CTA = lazy(() =>
  import("../components/home/CTA").then((module) => ({
    default: module.CTA,
  })),
);

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
      <Suspense fallback={null}>
        <ProductsPreview />
        <WhyChooseUs />
        <AboutPreview />
        <Testimonials />
        <Process />
        <FAQ />
        <CTA />
      </Suspense>
    </>
  );
}
