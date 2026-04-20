import { useState } from "react";
import { Instagram, Youtube, Heart, Play } from "lucide-react";

type Source = "Todos" | "Instagram" | "YouTube";

const posts = [
  { source: "Instagram", title: "Fachada concluída em SP — ACM Cobre Escovado", date: "12 abr 2026", grad: "linear-gradient(135deg, oklch(0.62 0.18 35), oklch(0.42 0.14 30))" },
  { source: "YouTube", title: "Tour pela nossa fábrica de beneficiamento", date: "08 abr 2026", grad: "linear-gradient(135deg, oklch(0.18 0.015 60), oklch(0.32 0.05 40))" },
  { source: "Instagram", title: "Bastidores: corte CNC de bandejas perfuradas", date: "02 abr 2026", grad: "linear-gradient(135deg, oklch(0.45 0.04 280), oklch(0.22 0.03 280))" },
  { source: "YouTube", title: "Como escolher a espessura ideal de ACM", date: "27 mar 2026", grad: "linear-gradient(135deg, oklch(0.55 0.22 25), oklch(0.35 0.18 22))" },
  { source: "Instagram", title: "Obra entregue em Curitiba: ACM Madeirado", date: "20 mar 2026", grad: "linear-gradient(135deg, oklch(0.55 0.09 60), oklch(0.32 0.05 40))" },
  { source: "Instagram", title: "Linha 2026: novos acabamentos em destaque", date: "15 mar 2026", grad: "linear-gradient(135deg, oklch(0.78 0.01 250), oklch(0.45 0.012 250))" },
  { source: "YouTube", title: "Instalação de fachada ventilada — passo a passo", date: "10 mar 2026", grad: "linear-gradient(135deg, oklch(0.32 0.01 240), oklch(0.18 0.005 240))" },
  { source: "Instagram", title: "Antes e depois: retrofit de fachada corporativa", date: "05 mar 2026", grad: "linear-gradient(135deg, oklch(0.68 0.14 40), oklch(0.42 0.12 35))" },
  { source: "Instagram", title: "Showroom ABERTURAH em SP", date: "28 fev 2026", grad: "linear-gradient(135deg, oklch(0.82 0.06 80), oklch(0.55 0.08 70))" },
  { source: "YouTube", title: "Webinar: tendências de fachadas 2026", date: "20 fev 2026", grad: "linear-gradient(135deg, oklch(0.45 0.18 250), oklch(0.25 0.14 250))" },
] as const;

export function NoticiasFeed() {
  const [filtro, setFiltro] = useState<Source>("Todos");
  const [visiveis, setVisiveis] = useState(6);

  const filtrados = filtro === "Todos" ? posts : posts.filter((p) => p.source === filtro);
  const exibir = filtrados.slice(0, visiveis);

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {(["Todos", "Instagram", "YouTube"] as const).map((s) => {
            const Icon = s === "Instagram" ? Instagram : s === "YouTube" ? Youtube : null;
            return (
              <button
                key={s}
                onClick={() => {
                  setFiltro(s);
                  setVisiveis(6);
                }}
                className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${
                  filtro === s
                    ? "border-foreground bg-foreground text-background"
                    : "border-[color:var(--steel-light)] text-[color:var(--steel)] hover:border-foreground hover:text-foreground"
                }`}
              >
                {Icon && <Icon className="h-4 w-4" />}
                {s}
              </button>
            );
          })}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {exibir.map((p, i) => {
            const Icon = p.source === "Instagram" ? Instagram : Youtube;
            return (
              <article key={i} className="group overflow-hidden rounded-3xl border border-[color:var(--steel-light)] bg-background transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
                <div className="relative aspect-square overflow-hidden">
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110" style={{ background: p.grad }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-foreground backdrop-blur">
                    <Icon className="h-3 w-3" />
                    {p.source}
                  </div>
                  {p.source === "YouTube" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 transition-transform group-hover:scale-110">
                        <Play className="h-6 w-6 fill-foreground text-foreground" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-widest text-[color:var(--steel)]">{p.date}</p>
                  <h3 className="mt-3 font-serif text-lg font-semibold leading-snug text-foreground">{p.title}</h3>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-[color:var(--steel)]">
                    <Heart className="h-3.5 w-3.5" />
                    Ver publicação
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {visiveis < filtrados.length && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setVisiveis((v) => v + 3)}
              className="rounded-full border-2 border-foreground px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Carregar mais publicações
            </button>
          </div>
        )}
      </div>
    </section>
  );
}