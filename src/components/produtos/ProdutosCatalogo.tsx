import { useState } from "react";
import { PRODUTOS, Produto } from "./produtos.data";
import { useProdutosFiltro } from "./Filter/useProdutosFiltro";
import { ProdutoModal } from "./Modal/ProdutoModal";
import { useTranslation } from "react-i18next";

export function ProdutosCatalogo() {
  const { t } = useTranslation("acabamentos");

  const { 
    categorias, 
    categoriaSelecionada, 
    setCategoriaSelecionada, 
    produtosFiltrados 
  } = useProdutosFiltro(PRODUTOS);

  const [produtoAtivoModal, setProdutoAtivoModal] = useState<Produto | null>(null);

  return (
    <section className="bg-background py-24">
      <div className="max-w-7xl mx-auto">

        {/* NAVEGAÇÃO DE FILTROS */}
        <div className="mb-12 flex justify-center items-center RevealText">
          <div className="flex flex-wrap justify-center gap-1.5 rounded-full border border-zinc-200 bg-white/80 backdrop-blur-sm p-1.5 shadow-sm">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setCategoriaSelecionada(categoria)}
                className={`px-2 sm:px-6 sm:py-2 py-1.5 rounded-full text-sm font-sans transition duration-200 ${
                  categoriaSelecionada === categoria
                    ? "bg-black text-white shadow-md"
                    : "text-zinc-500 hover:text-black"
                }`}
              >
              {t(`categoriesButton.${categoria}`)}
              </button>
            ))}
          </div>
        </div>

        {/* GRID DE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-6 px-10 lg:px-0 RevealText">
          {produtosFiltrados.map((produto) => (
            <div
              key={produto.id}
              onClick={() => setProdutoAtivoModal(produto)}
              className="w-full mx-auto group relative aspect-3/4 cursor-pointer overflow-hidden rounded-[24px] shadow-sm bg-white"
            >
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
              />

              {/*OVERLAY*/}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              
              <div className="absolute bottom-0 p-6 text-white w-full">
                <h3 className="text-2xl font-sans tracking-tight">{t(`name.${produto.nome}`)}</h3>
                <p className="text-xs text-[#D9D9D9] font-sans mt-1">
                 {t(`description.${produto.descricao}`)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CONTROLE COMPONENTIZADO DO MODAL */}
        {produtoAtivoModal && (
          <ProdutoModal 
            produto={produtoAtivoModal} 
            onClose={() => setProdutoAtivoModal(null)} 
          />
        )}

      </div>
    </section>
  );
}