import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CATEGORIAS, PRODUTOS, type Produto } from "./produtos.data";
import { useProdutosFiltro } from "./useProdutosFiltro";


export function ProdutosCatalogo() {
  const [selected, setSelected] = useState<Produto | null>(null);
  const { categoriaSelecionada, setCategoriaSelecionada, produtosFiltrados } =
    useProdutosFiltro(PRODUTOS);

  // ESC fecha modal
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (

      <div className="bg-background py-20 px-4">
        <div className="container mx-auto max-w-7xl px-6">

          {/* FILTROS */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {CATEGORIAS.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setCategoriaSelecionada(categoria)}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${categoriaSelecionada === categoria
                  ? "border-foreground bg-foreground text-background"
                  : "border-[color:var(--steel-light)] text-[color:var(--steel)] hover:border-foreground hover:text-foreground"
                  }`}
              >
                {categoria}
              </button>
            ))}
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {produtosFiltrados.map((produto) => (
              <motion.article
                key={produto.id}
                layoutId={produto.id}
                onClick={() => setSelected(produto)}
                className="cursor-pointer overflow-hidden rounded-3xl border bg-white"
              >
                {/* IMAGEM */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.div
                    layoutId={`${produto.id}-bg`}
                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-110
                    "
                    style={{ 
                      
                      backgroundImage: `
                      linear-gradient(135deg, rgba(255,255,255,0.15), rgba(0,0,0,0.25)),
                      url(${produto.gradiente})`, 
                      backgroundSize: "cover", 
                      backgroundPosition: "center"
                    }}
                  />

                  <div
                    className="absolute inset-0 opacity-30 mix-blend-overlay"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(45deg, transparent, transparent 6px, oklch(1 0 0 / 0.18) 6px, oklch(1 0 0 / 0.18) 7px)",
                    }}
                  />

                  <span className="absolute right-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-foreground backdrop-blur">
                    {produto.categoria}
                  </span>
                </div>

                {/* TEXTO */}
                <div className="p-6">

                    {produto.nome}
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
                        style={{  backgroundImage: `
                      linear-gradient(to top, rgba(0,0,0,0.6), transparent 60%),
                      url(${selected.gradiente})`, 
                      backgroundSize: "cover", 
                      backgroundPosition: "center"
                    }}
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
                        Espessura: {selected.espessura}
                      </p>

                      {/* 🔥 ÁREA SCROLL */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-4 pt-4 border-t overflow-y-auto"
                      >
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {selected.descricao}
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
  );
}