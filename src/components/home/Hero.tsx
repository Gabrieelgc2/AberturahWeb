import { ArrowRight } from "lucide-react";
import heroImage from "../../assets/hero-facade.webp";
import { useParallax } from "@/hooks/use-parallax";
import { useEffect, useRef } from "react";
import { startTitleAnimation } from "@/components/animations/animations";

export function Hero() {
const { ref: bgRef, offset: bgOffset } = useParallax<HTMLDivElement>(0.35);
const { ref: contentRef, offset: contentOffset } = useParallax<HTMLDivElement>(-0.15);
const titleRef = useRef(null);

  useEffect(() => {
    // Passamos a referência do elemento para a nossa função externa
    const instance = startTitleAnimation(titleRef.current);

    return () => {
    if (instance) {
      instance.revert();
    }
  };
}, []);

  return (
    <section
      className="relative isolate overflow-hidden pb-32 pt-40 sm:pb-40 sm:pt-48"
    >
      {/* Parallax background image */}
      <div
      ref={bgRef}
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Dark overlay for legibility */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.12 0.01 50 / 0.75) 0%, oklch(0.12 0.01 50 / 0.55) 10%, oklch(0.12 0.01 50 / 0.85) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--gradient-brand)" }}
      />

      <div className="container relative mx-auto max-w-7xl px-6">
         <div
          ref={contentRef}
          className="mx-auto max-w-4xl text-center"
          style={{
            transform: `translate3d(0, ${contentOffset}px, 0)`,
            willChange: "transform",
          }}
          >

          <h1 ref={titleRef} className="text-white mt-8 font-serif text-4xl font-bold leading-[1.2] tracking-normal sm:text-7xl lg:text-7xl">
            Projetos de alto <br></br> padrão em ACM
            {/* <span
          style={{color: "#ffff"}}>
            Projetos de 
            </span>
            <span
            style={{
                WebkitTextFillColor: "#ffff",
              }}> alto</span>
           
            <br />
            <span
            style={{
                color: "#ffff",
              }}> padrão </span>

            <span
              className="italic"
              style={{
                WebkitTextFillColor: "#ffff",
              }}> em </span>

               <span style={{ 
                color: "#ffff",
                 }}> ACM </span> */}
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-[color:white] sm:text-xl">
Entregamos projetos personalizados em ACM para quem busca design, precisão e execução impecável. Somos especializados em portas, revestimentos, brises e pergolados.
</p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-[color:var(--brand-foreground)] shadow-[var(--shadow-brand)] transition-transform hover:scale-105"
              style={{ background: "var(--gradient-brand)" }}
            >
              Solicitar orçamento
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
        </div>
    </section>
  );
}
