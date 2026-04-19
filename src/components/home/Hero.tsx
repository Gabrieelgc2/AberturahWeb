import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden pb-32 pt-40 sm:pb-40 sm:pt-48"
      style={{ background: "var(--gradient-dark)" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="pointer-events-none absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--gradient-brand)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full opacity-20 blur-3xl"
        style={{ background: "oklch(0.55 0.16 25)" }}
      />

      <div className="container relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
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
