
const steps = [
  {
    n: "01",
    title: "Briefing técnico",
    desc: "Entendemos o projeto, prazos e especificações. Visita técnica quando necessário.",
  },
  {
    n: "02",
    title: "Projeto e cotação",
    desc: "Dimensionamento, escolha de acabamentos e proposta detalhada com prazos.",
  },
  {
    n: "03",
    title: "Beneficiamento",
    desc: "Corte CNC, dobra e preparo das peças com precisão milimétrica em nossa fábrica.",
  },
  {
    n: "04",
    title: "Entrega e suporte",
    desc: "Logística especializada e acompanhamento técnico durante toda a instalação.",
  },
];

export function Process() {
  return (
    <section
      className="relative overflow-hidden py-24 sm:py-32"
      style={{ background: " #414042" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[color:var(--steel-light)]">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--brand)" }}
            />
            Como trabalhamos
          </div>
          <h2 className="mx-auto mt-6 max-w-3xl font-serif text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
            Do esboço à fachada,
            <br />
            <span
              className="italic"
              style={{
                background: "var(--gradient-brand)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "grey",
              }}
            >
              em 4 etapas.
            </span>
          </h2>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative bg-[oklch(0.14_0.012_55)] p-8 transition-colors hover:bg-[oklch(0.18_0.015_55)]"
            >
              <div
                className="font-serif text-6xl font-bold leading-none"
                style={{
                  background: "var(--gradient-brand)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {s.n}
              </div>
              <h3 className="mt-6 font-serif text-2xl font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--steel-light)]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
