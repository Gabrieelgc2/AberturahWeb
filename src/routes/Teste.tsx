import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import BackGroundProduto from "../assets/Produtos.jpeg";


type Produto = {
  id: string;
  nome: string;
  cat: string;
  grad: string;
  esp: string;
};


const categorias = ["Todos", "Brilhante", "Escovado", "Madeirado", "Especial"] as const;

const produtos: Produto[] = [
  {
    id: "vermelho",
    nome: "ACM Vermelho Cardinal",
    cat: "Brilhante",
    esp: "4mm",
    grad: "linear-gradient(135deg, oklch(0.55 0.22 25), oklch(0.35 0.18 22))",
  },
  {
    id: "branco",
    nome: "ACM Branco Polar",
    cat: "Brilhante",
    esp: "4mm",
    grad: "linear-gradient(135deg, oklch(0.95 0.005 250), oklch(0.78 0.01 250))",
  },
  {
    id: "preto",
    nome: "ACM Preto Onyx",
    cat: "Brilhante",
    esp: "4mm",
    grad: "linear-gradient(135deg, oklch(0.18 0.015 250), oklch(0.05 0.005 250))",
  },
  {
    id: "inox",
    nome: "ACM Inox Escovado",
    cat: "Escovado",
    esp: "4mm",
    grad: "linear-gradient(135deg, oklch(0.78 0.01 250), oklch(0.45 0.012 250))",
  },
  { 
    id: "escovado",
    nome: "ACM Champagne Escovado", 
    cat: "Escovado", 
    esp: "4mm", 
    grad: "linear-gradient(135deg, oklch(0.82 0.06 80), oklch(0.55 0.08 70))",
  },

  { id: "cobre", nome: "ACM Cobre Escovado", 
    cat: "Escovado", 
    esp: "4mm", 
    grad: "linear-gradient(135deg, oklch(0.68 0.14 40), oklch(0.42 0.12 35))" },

  { id: "carvalho", 
    nome: "ACM Carvalho", 
    cat: "Madeirado", 
    esp: "4mm", 
    grad: "linear-gradient(135deg, oklch(0.62 0.08 60), oklch(0.38 0.06 50))" },

  { id: "imbuia", nome: "ACM Imbuia", 
    cat: "Madeirado", 
    esp: "4mm", 
    grad: "linear-gradient(135deg, oklch(0.42 0.07 45), oklch(0.22 0.05 35))" },

  { id: "espelhado", 
    nome: "ACM Espelhado", 
    cat: "Especial", 
    esp: "3mm", 
    grad: "linear-gradient(135deg, oklch(0.92 0.01 220), oklch(0.65 0.02 220))" },

  { id: "perfurado", 
    nome: "ACM Perfurado", 
    cat: "Especial", 
    esp: "4mm", 
    grad: "linear-gradient(135deg, oklch(0.45 0.04 280), oklch(0.22 0.03 280))" },

  { id: "grafite", 
    nome: "ACM Grafite Fosco", 
    cat: "Especial", 
    esp: "4mm", 
    grad: "linear-gradient(135deg, oklch(0.32 0.01 240), oklch(0.18 0.005 240))" },

  { id: "azul", 
    nome: "ACM Azul Cobalto", 
    cat: "Brilhante", 
    esp: "4mm", 
    grad: "linear-gradient(135deg, oklch(0.45 0.18 250), oklch(0.25 0.14 250))" },
];

export const Route = createFileRoute("/Teste")({
  component: ProdutosAnimados,
});


function ProdutosAnimados() {
  const [selected, setSelected] = useState<Produto | null>(null);
  const [filtro, setFiltro] = useState<(typeof categorias)[number]>("Todos");

  const lista =
    filtro === "Todos"
      ? produtos
      : produtos.filter((p) => p.cat === filtro);

  // ESC fecha modal
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <PageLayout
        eyebrow="Produtos"
        title={
          <>
            Linha completa<br />
            <span className="italic">de ACM premium.</span>
          </>
        }
        description="Mais de 40 acabamentos certificados para qualquer projeto, do residencial ao corporativo."
        image={BackGroundProduto}
      />

      <div className="bg-background py-20 px-4">
        <div className="container mx-auto max-w-7xl px-6">

          {/* FILTROS */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categorias.map((c) => (
              <button
                key={c}
                onClick={() => setFiltro(c)}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${filtro === c
                  ? "border-foreground bg-foreground text-background"
                  : "border-[color:var(--steel-light)] text-[color:var(--steel)] hover:border-foreground hover:text-foreground"
                  }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {lista.map((p) => (
              <motion.article
                key={p.id}
                layoutId={p.id}
                onClick={() => setSelected(p)}
                className="cursor-pointer overflow-hidden rounded-3xl border bg-white"
              >
                {/* IMAGEM */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.div
                    layoutId={`${p.id}-bg`}
                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                    style={{ background: p.grad }}
                  />

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

                {/* TEXTO */}
                <div className="p-6">

                    {p.nome}
                </div>
              </motion.article>
            ))}
          </div>

          {/* MODAL */}
          <AnimatePresence>
            {selected && (
              <>
                {/* OVERLAY */}
                <motion.div
                  className="fixed inset-0 bg-black/40 z-40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />

                {/* CONTAINER */}
                <motion.div
                  className="fixed inset-0 flex items-center justify-center z-50 px-4"
                  onClick={() => setSelected(null)}
                >
                  <motion.article
                    layoutId={selected.id}
                    transition={{ duration: 1 }}
                    onClick={(e) => e.stopPropagation()}
                    className="sm:w-full max-w-md sm:max-h-[90vh] w-xl h-115 overflow-hidden rounded-3xl border bg-white flex flex-col"
                  >
                    {/* IMAGEM (mesma proporção sempre) */}
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <motion.div
                        layoutId={`${selected.id}-bg`}
                        className="absolute inset-0"
                        style={{ background: selected.grad }}
                      />
                    </div>

                    {/* CONTEÚDO */}
                    <div className="p-6 flex flex-col flex-1">

                      <motion.h3
                        layoutId={`${selected.id}-title`}
                        className="font-serif text-xl font-semibold text-foreground"
                      >
                        {selected.nome}
                      </motion.h3>

                      <p className="mt-2 text-sm text-[#404142]">
                        Espessura: {selected.esp}
                      </p>

                      {/* 🔥 ÁREA SCROLL */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-4 pt-4 border-t overflow-y-auto"
                      >
                        <p className="text-sm text-gray-500 leading-relaxed">
                          lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
                          voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Doloribus, voluptate? Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Doloribus, voluptate?
                        </p>
                      </motion.div>
                    </div>
                  </motion.article>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}