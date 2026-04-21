import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-facade.png";
import { useParallax } from "@/hooks/use-parallax";

export function Hero() {
  const { ref: bgRef, offset: bgOffset } = useParallax<HTMLDivElement>(0.35);
  const { ref: contentRef, offset: contentOffset } = useParallax<HTMLDivElement>(-0.15);

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

          <h1 className="mt-8 font-serif text-6xl font-bold leading-[0.95] tracking-normal sm:text-7xl lg:text-6xl">
            <span
          style={{color: "#faf9d7"}}>
            Projetos de 
            </span>
            <span
            style={{
                WebkitTextFillColor: "#faf9d7",
              }}> alto</span>
           
            <br />
            <span
            style={{
                color: "#faf9d7",
              }}> padrão </span>

            <span
              className="italic"
              style={{
                WebkitTextFillColor: "#faf9d7",
              }}> em </span>

               <span style={{ 
                color: "#faf9d7",
                 }}> ACM </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[color:white] sm:text-xl">
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
