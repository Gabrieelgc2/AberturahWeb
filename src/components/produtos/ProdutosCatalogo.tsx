import { useState } from "react";
import { Check } from "lucide-react";

const categorias = ["Todos", "Brilhante", "Escovado", "Madeirado", "Especial"] as const;

const produtos = [

  { nome: "ACM Vermelho Cardinal", 
    cat: "Brilhante", 
    esp: "4mm", 
    grad: "linear-gradient(135deg, oklch(0.55 0.22 25), oklch(0.35 0.18 22))" },

  { nome: "ACM Branco Polar", 
    cat: "Brilhante", 
    esp: "4mm", 
    grad: "linear-gradient(135deg, oklch(0.95 0.005 250), oklch(0.78 0.01 250))" },

  { nome: "ACM Preto Onyx", 
    cat: "Brilhante", 
    esp: "4mm", 
    grad: "linear-gradient(135deg, oklch(0.18 0.015 250), oklch(0.05 0.005 250))" },

  { nome: "ACM Inox Escovado", 
    cat: "Escovado", 
    esp: "4mm", 
    grad: "linear-gradient(135deg, oklch(0.78 0.01 250), oklch(0.45 0.012 250))" },

  { nome: "ACM Champagne Escovado", 
    cat: "Escovado", 
    esp: "4mm", 
    grad: "linear-gradient(135deg, oklch(0.82 0.06 80), oklch(0.55 0.08 70))" },

  { nome: "ACM Cobre Escovado", 
    cat: "Escovado", 
    esp: "4mm", 
    grad: "linear-gradient(135deg, oklch(0.68 0.14 40), oklch(0.42 0.12 35))" },

  { nome: "ACM Carvalho", 
    cat: "Madeirado", 
    esp: "4mm", 
    grad: "linear-gradient(135deg, oklch(0.62 0.08 60), oklch(0.38 0.06 50))" },

  { nome: "ACM Imbuia", 
    cat: "Madeirado", 
    esp: "4mm", 
    grad: "linear-gradient(135deg, oklch(0.42 0.07 45), oklch(0.22 0.05 35))" },

  { nome: "ACM Espelhado", 
    cat: "Especial", 
    esp: "3mm", 
    grad: "linear-gradient(135deg, oklch(0.92 0.01 220), oklch(0.65 0.02 220))" },

  { nome: "ACM Perfurado", 
    cat: "Especial", 
    esp: "4mm", 
    grad: "linear-gradient(135deg, oklch(0.45 0.04 280), oklch(0.22 0.03 280))" },

  { nome: "ACM Grafite Fosco", 
    cat: "Especial", 
    esp: "4mm", 
    grad: "linear-gradient(135deg, oklch(0.32 0.01 240), oklch(0.18 0.005 240))" },

  { nome: "ACM Azul Cobalto", 
    cat: "Brilhante", 
    esp: "4mm", 
    grad: "linear-gradient(135deg, oklch(0.45 0.18 250), oklch(0.25 0.14 250))" },
];

export function ProdutosCatalogo() {
  const [filtro, setFiltro] = useState<(typeof categorias)[number]>("Todos");
  const lista = filtro === "Todos" ? produtos : produtos.filter((p) => p.cat === filtro);

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categorias.map((c) => (
            <button
              key={c}
              onClick={() => setFiltro(c)}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${
                filtro === c
                  ? "border-foreground bg-foreground text-background"
                  : "border-[color:var(--steel-light)] text-[color:var(--steel)] hover:border-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lista.map((p) => (
            <article key={p.nome} className="group overflow-hidden rounded-3xl border border-[color:var(--steel-light)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110" style={{ background: p.grad }} />
                <div
                  className="absolute inset-0 opacity-30 mix-blend-overlay"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, transparent, transparent 6px, oklch(1 0 0 / 0.18) 6px, oklch(1 0 0 / 0.18) 7px)",
                  }}
                />
                <span className="absolute right-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-foreground backdrop-blur">
                  {p.cat}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground">{p.nome}</h3>
                <div className="mt-4 flex items-center gap-4 text-xs text-[color:var(--steel)]">
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5" style={{ color: "var(--brand)" }} />
                    Sob medida
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}