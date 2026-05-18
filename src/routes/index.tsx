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
      { title: "ABERTURAh!" },
      {
        name: "description",
        content:
          "Fabricação e beneficiamento de chapas ACM premium para fachadas, revestimentos e projetos arquitetônicos em todo o Brasil.",
      }, // Texto que aparece nos resultados de busca do Google logo abaixo do título.
      { property: "og:title", content: "ABERTURAh! — Material ACM" },
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
      {/* 1. Hero: Carregamento imediato */}
      <Hero />

      {/* 2. ProductsPreview */}
      <Suspense fallback={<div className="h-[2237px] md:h-[1417px] bg-[#D9D9D9]/30 w-full" />}>
        <ProductsPreview />
      </Suspense>

      {/* 3. WhyChooseUs */}
      <Suspense fallback={<div className="h-[2541px] md:h-[1541px] bg-white w-full" />}>
        <WhyChooseUs />
      </Suspense>

      {/* 4. AboutUsPreview (WhoWeAre) */}
      <Suspense fallback={<div className="h-[1000px] md:h-[1370px] bg-[#414042] w-full" />}>
        <AboutPreview />
      </Suspense>

      {/* 5. Testimonials */}
      <Suspense fallback={<div className="h-[1652px] md:h-[1416px] bg-background w-full" />}>
        <Testimonials />
      </Suspense>

      {/* 6. HowWeWork (Process) */}
      <Suspense fallback={<div className="h-[1755px] md:h-[1954px] bg-white w-full" />}>
        <Process />
      </Suspense>

      {/* 7. FAQ */}
      <Suspense fallback={<div className="h-[991px] md:h-[996px] bg-background w-full" />}>
        <FAQ />
      </Suspense>

      {/* 8. CTA */}
      <Suspense fallback={<div className="h-[588px] md:h-[562px] bg-background w-full" />}>
        <CTA />
      </Suspense>
    </>
  );
}