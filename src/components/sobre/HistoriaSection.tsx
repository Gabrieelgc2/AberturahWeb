const timeline = [
  { year: "2009", title: "Fundação", desc: "Nasce a ABERTURAH em São Paulo, focada em revenda de ACM importado." },
  { year: "2014", title: "Beneficiamento próprio", desc: "Inauguração da primeira linha CNC para corte e dobra." },
  { year: "2018", title: "Expansão nacional", desc: "Logística estruturada para atender obras em todas as regiões." },
  { year: "2024", title: "Nova fábrica", desc: "Ampliação da planta com tecnologia de última geração." },
];

export function HistoriaSection() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--steel-light)] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[color:var(--steel)]">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--brand)" }} />
              Nossa história
            </div>
            <h2 className="mt-6 font-serif text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl">
              Uma trajetória feita  <span className="italic">sob medida.</span>
            </h2>
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-[color:var(--steel)]">
              A ABERTURAH! surgiu como uma solução para atender demandas personalizadas dos projetos arquitetônicos, integrando técnica, funcionalidade e design. A empresa se destaca pela capacidade de realizar projetos ousados com especificações de alta complexidade. 
            </p>
            <p className="text-lg leading-relaxed text-[color:var(--steel)]">
            Utilizando materiais premium, como ACM, e tecnologias inovadoras, ela busca se tornar referência em propostas sob medida para o mercado da construção e design.
            </p>

            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[color:var(--steel-light)] bg-[color:var(--steel-light)] sm:grid-cols-2">
              {timeline.map((t) => (
                <div key={t.year} className="bg-background p-6">
                  <div
                    className="font-serif text-3xl font-bold"
                    style={{
                      background: "var(--gradient-brand)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {t.year}
                  </div>
                  <h4 className="mt-2 font-serif text-lg font-semibold text-foreground">{t.title}</h4>
                  <p className="mt-1 text-sm text-[color:var(--steel)]">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}