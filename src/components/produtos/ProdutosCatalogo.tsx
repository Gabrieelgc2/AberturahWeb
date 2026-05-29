import { useState } from "react";
import { PRODUTOS } from "./produtos.data";

type Material = "ACM" | "PVC";

const CORES: Record<Material, string[]> = {
  ACM: [
    "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
  ],
  PVC: [
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  ],
};

export function ProdutosCatalogo() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");
  const [open, setOpen] = useState<any>(null);
  const [material, setMaterial] = useState<Material | null>(null);

  const categorias = [
    "Todos",
    "Portas",
    "Brises",
    "Pergolados",
    "Revestimentos",
  ];

  const produtosFiltrados =
    categoriaAtiva === "Todos"
      ? PRODUTOS
      : PRODUTOS.filter((p) => p.categoria === categoriaAtiva);

  return (
    <section className="bg-background py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* BOTÕES */}
        <div className="mb-12 flex justify-center">
          <div className="flex gap-2 rounded-full border bg-white/70 p-2">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setCategoriaAtiva(categoria)}
                className={`px-5 py-2 rounded-full text-sm transition ${
                  categoriaAtiva === categoria
                    ? "bg-black text-white"
                    : "text-zinc-500 hover:text-black"
                }`}
              >
                {categoria}
              </button>
            ))}
          </div>
        </div>

        {/* CARDS */}
        <div className="flex gap-4 h-[520px]">
          {produtosFiltrados.map((produto) => (
            <div
              key={produto.id}
              onClick={() => {
                setOpen(produto);
                setMaterial(null);
              }}
              className="group relative flex-1 cursor-pointer overflow-hidden rounded-[28px]"
            >
              <img
                src={produto.imagem}
                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-2xl font-medium">{produto.nome}</h3>
                <p className="text-sm text-white/70 mt-1">
                 {produto.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL PREMIUM */}
        {open && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setOpen(null)}
          >
            <div
              className="
                bg-white
                w-full
                max-w-4xl
                rounded-[28px]
                p-6
                shadow-2xl
                transform
                animate-[fadeIn_0.25s_ease-out]
              "
              onClick={(e) => e.stopPropagation()}
            >

              {/* HEADER */}
              <div className="mb-8">
                <h2 className="text-4xl tracking-[-0.03em] font-serif">
                  {open.nome}
                </h2>
                <p className="text-[#404142] mt-2 font-sans">
                  Escolha o acabamento ideal para o seu projeto
                </p>
              </div>

              {/* STEP 1 */}
              {!material && (
                <div className="flex gap-4">
                  {["ACM", "PVC"].map((m) => (
                    <button
                      key={m}
                      onClick={() => setMaterial(m as Material)}
                      className="
                        flex-1
                        py-4
                        rounded-2xl
                        border
                        text-lg
                        font-medium
                        transition
                        hover:scale-[1.02]
                        hover:bg-black
                        hover:text-white
                      "
                    >
                      {m}
                    </button>
                  ))}
                </div>
              )}

              {/* STEP 2 - CORES */}
              {material && (
                <>
                  <div className="flex justify-between items-center mb-6 mt-2">
                    <h3 className="text-lg font-medium">
                      {material} — Cores disponíveis
                    </h3>

                    <button
                      onClick={() => setMaterial(null)}
                      className="text-sm text-zinc-500 hover:text-black"
                    >
                      voltar
                    </button>
                  </div>

<div className="
  grid grid-cols-3 gap-2
  max-h-[300px]
  overflow-y-auto
  pr-1
  scrollbar-thin scrollbar-thumb-zinc-300 scrollbar-track-transparent
">
  {CORES[material].map((img, i) => (
    <div
      key={i}
      className="
        aspect-square
        rounded-lg
        overflow-hidden
        cursor-pointer
        group
      "
    >
      <img
        src={img}
        className="
          w-full
          h-full
          object-cover
          transition
          duration-500
          group-hover:scale-110
        "
      />
    </div>
  ))}
</div>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* ANIMATION KEYFRAME */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}