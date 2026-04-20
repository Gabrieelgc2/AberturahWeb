import { Link } from "@tanstack/react-router";
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
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translate3d(0, ${bgOffset}px, 0) scale(1.15)`,
          willChange: "transform",
        }}
      />
      {/* Dark overlay for legibility */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.12 0.01 50 / 0.75) 0%, oklch(0.12 0.01 50 / 0.55) 40%, oklch(0.12 0.01 50 / 0.85) 100%)",
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
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[color:var(--steel-light)] backdrop-blur">
            <Sparkles className="h-3 w-3 text-[color:var(--brand)]" />
            +15 anos transformando fachadas
          </div>

          <h1 className="mt-8 font-serif text-6xl font-bold leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
            Fachadas que
            <br />
            <span
              className="italic"
              style={{
                background: "var(--gradient-brand)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              definem skylines.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[color:var(--steel-light)] sm:text-xl">
            ABERTURAH é referência em chapas de ACM premium e beneficiamento de
            precisão. Da matéria-prima ao acabamento, entregamos o que sua obra
            merece.
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
            <Link
              to="/produtos"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/5"
            >
              Ver produtos
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-8 border-t border-white/10 pt-10">
            {[
              { v: "+15", l: "Anos de mercado" },
              { v: "2.500+", l: "Obras entregues" },
              { v: "40+", l: "Acabamentos" },
            ].map((s) => (
              <div key={s.l}>
                <div
                  className="font-serif text-4xl font-bold sm:text-5xl"
                  style={{
                    background: "var(--gradient-brand)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {s.v}
                </div>
                <p className="mt-2 text-xs uppercase tracking-widest text-[color:var(--steel-light)]">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
