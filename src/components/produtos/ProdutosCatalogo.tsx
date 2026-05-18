import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { CATEGORIAS, PRODUTOS, type Produto } from "./produtos.data";
import { useProdutosFiltro } from "./useProdutosFiltro";
import { TiltCard } from "../animations/TiltCard";
import { useTranslation } from "react-i18next";

export function ProdutosCatalogo() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<Produto | null>(null);

  const {
    categoriaSelecionada,
    setCategoriaSelecionada,
    produtosFiltrados,
  } = useProdutosFiltro(PRODUTOS);

  /* =========================================================
     ESC FECHA MODAL
  ========================================================= */

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelected(null);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <section className="bg-background py-20 px-4">
      <div className="container mx-auto max-w-7xl">

        {/* =========================================================
            FILTROS
        ========================================================= */}

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIAS.map((categoria) => (
            <button
              key={categoria}
              onClick={() => setCategoriaSelecionada(categoria)}
              className={`
                rounded-full
                border
                px-5
                py-2.5
                text-sm
                font-semibold
                transition-all
                duration-300

                ${
                  categoriaSelecionada === categoria
                    ? "border-foreground bg-foreground text-background"
                    : "border-[color:var(--steel-light)] text-[color:var(--steel)] hover:border-foreground hover:text-foreground"
                }
              `}
            >
              {categoria}
            </button>
          ))}
        </div>

        {/* =========================================================
            GRID
        ========================================================= */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-3
            gap-8
          "
        >
          {produtosFiltrados.map((produto) => (
            <TiltCard key={produto.id}>

              <motion.article
                layoutId={produto.id}
                onClick={() => setSelected(produto)}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="
                  group
                  relative
                  cursor-pointer
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-black/5
                  bg-white
                  shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                "
              >

                {/* =========================================================
                    IMAGEM
                ========================================================= */}

                <div className="relative aspect-[4/5] overflow-hidden">

                  <motion.div
                    layoutId={`${produto.id}-bg`}
                    className="
                      absolute
                      inset-0
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                    style={{
                      backgroundImage: `
                        linear-gradient(
                          to top,
                          rgba(0,0,0,0.45),
                          transparent 60%
                        ),
                        url(${produto.gradiente})
                      `,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />

                  {/* =========================================================
                      TEXTURA
                  ========================================================= */}

                  <div
                    className="
                      absolute
                      inset-0
                      opacity-20
                      mix-blend-overlay
                    "
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(45deg, transparent, transparent 6px, rgba(255,255,255,0.15) 6px, rgba(255,255,255,0.15) 7px)",
                    }}
                  />

                  {/* =========================================================
                      BADGE
                  ========================================================= */}

                  <span
                    className="
                      absolute
                      right-4
                      top-4
                      rounded-full
                      bg-white/80
                      px-3
                      py-1
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-black
                      backdrop-blur
                    "
                  >
                    {produto.categoria}
                  </span>

                  {/* =========================================================
                      TEXTO
                  ========================================================= */}

                  <div className="absolute bottom-0 left-0 p-6">

                    <motion.h3
                      layoutId={`${produto.id}-title`}
                      className="
                        text-2xl
                        font-semibold
                        text-white
                      "
                    >
                      {produto.nome}
                    </motion.h3>

                    <p className="mt-2 text-sm text-white/70">
                      {produto.espessura}
                    </p>

                  </div>
                </div>
              </motion.article>
            </TiltCard>
          ))}
        </div>

        {/* =========================================================
            MODAL
        ========================================================= */}

        <AnimatePresence>
          {selected && (
            <>
              {/* OVERLAY */}

              <motion.div
                className="
                  fixed
                  inset-0
                  z-40
                  bg-black/50
                  backdrop-blur-sm
                "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              {/* CONTAINER */}

              <motion.div
                className="
                  fixed
                  inset-0
                  z-50
                  flex
                  items-center
                  justify-center
                  p-4
                "
                onClick={() => setSelected(null)}
              >

                <motion.article
                  layoutId={selected.id}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 18,
                  }}
                  onClick={(e) => e.stopPropagation()}
                  className="
                    w-full
                    max-w-5xl
                    h-[90vh]
                    md:h-[80vh]
                    overflow-hidden
                    rounded-[32px]
                    bg-white
                    shadow-2xl
                    grid
                    md:grid-cols-2
                  "
                >

                  {/* =========================================================
                      IMAGEM
                  ========================================================= */}

                  <div
                    className="
                      relative
                      h-[320px]
                      md:h-full
                      overflow-hidden
                    "
                  >

                    <motion.div
                      layoutId={`${selected.id}-bg`}
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `
                          linear-gradient(
                            to top,
                            rgba(0,0,0,0.5),
                            transparent 60%
                          ),
                          url(${selected.gradiente})
                        `,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />

                    {/* TEXTURA */}

                    <div
                      className="
                        absolute
                        inset-0
                        opacity-20
                        mix-blend-overlay
                      "
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(45deg, transparent, transparent 6px, rgba(255,255,255,0.15) 6px, rgba(255,255,255,0.15) 7px)",
                      }}
                    />

                    {/* TÍTULO SOBRE IMAGEM */}

                    <div className="absolute bottom-0 left-0 p-8">

                      <motion.h2
                        layoutId={`${selected.id}-title`}
                        className="
                          text-4xl
                          font-bold
                          text-white
                        "
                      >
                        {selected.nome}
                      </motion.h2>

                      <p className="mt-3 text-white/70">
                        {selected.espessura}
                      </p>

                    </div>
                  </div>

                  {/* =========================================================
                      CONTEÚDO
                  ========================================================= */}

                  <div
                    className="
                      flex
                      flex-col
                      overflow-y-auto
                      p-8
                    "
                  >

                    {/* CATEGORIA */}

                    <div className="mb-6">

                      <span
                        className="
                          rounded-full
                          bg-black
                          px-4
                          py-2
                          text-xs
                          font-bold
                          uppercase
                          tracking-[0.2em]
                          text-white
                        "
                      >
                        {selected.categoria}
                      </span>

                    </div>

                    {/* DESCRIÇÃO */}

                    <div className="space-y-6">

                      <div>

                        <h3
                          className="
                            text-lg
                            font-semibold
                            text-foreground
                          "
                        >
                          {t("products.modal.description")}
                        </h3>

                        <p
                          className="
                            mt-3
                            leading-relaxed
                            text-[#404142]
                          "
                        >
                          {selected.descricao}
                        </p>

                      </div>

                      {/* ESPECIFICAÇÕES */}

                      <div
                        className="
                          rounded-2xl
                          border
                          bg-neutral-50
                          p-6
                        "
                      >

                        <h4
                          className="
                            text-sm
                            font-bold
                            uppercase
                            tracking-[0.15em]
                            text-neutral-500
                          "
                        >
                          {t("products.modal.technicalInfo")}
                        </h4>

                        <div className="mt-4 space-y-3">

                          <div className="flex justify-between">
                            <span className="text-neutral-500">
                              {t("products.modal.thickness")}
                            </span>

                            <span className="font-medium">
                              {selected.espessura}
                            </span>
                          </div>

                          <div className="flex justify-between">
                            <span className="text-neutral-500">
                              {t("products.modal.category")}
                            </span>

                            <span className="font-medium">
                              {selected.categoria}
                            </span>
                          </div>

                        </div>
                      </div>
                    </div>

                    {/* BOTÃO */}

                    <div className="mt-auto pt-8">

                      <button
                        className="
                          w-full
                          rounded-2xl
                          bg-black
                          px-6
                          py-4
                          text-sm
                          font-semibold
                          text-white
                          transition-all
                          duration-300
                          hover:scale-[1.02]
                        "
                      >
                        {t("products.modal.requestQuote")}
                      </button>

                    </div>
                  </div>
                </motion.article>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}