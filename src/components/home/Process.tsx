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
      className="relative py-24 sm:py-32"
      style={{ background: "#414042" }}
    >
      {/* Grid de fundo */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="RevealText inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[color:var(--steel-light)]">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--brand)" }}
            />
            Como trabalhamos
          </div>
          <h2 className="RevealText mx-auto mt-6 max-w-3xl font-serif text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
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

        {/* Timeline Estrutura */}
        <div className="relative">
          {/* Linha Central Vertical (Desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white -translate-x-1/2 hidden md:block" />

          <div className="flex flex-col gap-16 md:gap-24">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className={`RevealText flex flex-col md:flex-row items-center w-full ${i % 2 !== 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* LADO DO CONTEÚDO (CARD) */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end in-even:md:justify-start px-4 md:px-8">
                  <div
                    className={`relative bg-[#404142] p-8 md:p-10 rounded-[2.5rem] border border-[#D9D9D9]/65 transition-colors hover:bg-[oklch(0.18_0.015_55)] shadow-2xl w-full max-w-[480px]
          ${i % 2 === 0 ? "md:text-right" : "md:text-left text-left"}`}
                  >
                    <div
                      className="font-serif text-6xl font-bold leading-none opacity-100"
                      style={{
                        background: "var(--gradient-brand)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "#D9D9D9",
                      }}
                    >
                      {s.n}
                    </div>
                    <h3 className="mt-4 font-serif text-3xl font-semibold text-white tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-[#D9D9D9]">
                      {s.desc}
                    </p>
                  </div>
                </div>

                {/* MARCADOR CENTRAL */}
                <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-white/40 rounded-full border-2 border-[#414042] hidden md:block z-10" />

                {/* ESPAÇO VAZIO (OPCIONAL) */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}