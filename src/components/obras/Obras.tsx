import { AnimatePresence, motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

// 1. Importação dos dados e do hook customizado de filtro
import { CATEGORIAS, Obras as ObrasDados, Obra } from "./obras.data";
import { useProdutosFiltro } from "./obrasFiltro";
import { useTranslation } from "react-i18next";

export function Obras() {
  const { t } = useTranslation();
  // 2. Estados para o Lightbox Modal
  const [selectedImage, setSelectedImage] = useState<Obra | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  // 3. Uso do Hook de Filtro passando os dados originais
  const {
    categoriaSelecionada,
    setCategoriaSelecionada,
    ObraFiltro,
  } = useProdutosFiltro(ObrasDados);

  const openLightbox = (image: Obra): void => {
    setSelectedImage(image);
    setIsLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = (): void => {
    setSelectedImage(null);
    setIsLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const goToNext = (): void => {
    if (!selectedImage) return;
    const currentIndex = ObraFiltro.findIndex((img) => img.title === selectedImage.title);
    const nextIndex = (currentIndex + 1) % ObraFiltro.length;
    setSelectedImage(ObraFiltro[nextIndex]);
  };

  const goToPrev = (): void => {
    if (!selectedImage) return;
    
    const currentIndex = ObraFiltro.findIndex((img) => img.title === selectedImage.title);
    const prevIndex = (currentIndex - 1 + ObraFiltro.length) % ObraFiltro.length;
    setSelectedImage(ObraFiltro[prevIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e: globalThis.KeyboardEvent): void => {
      if (isLightboxOpen) {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowRight") goToNext();
        if (e.key === "ArrowLeft") goToPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, selectedImage, ObraFiltro]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-background py-28 px-4 sm:px-6 lg:px-8 text-[#404142]">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-4 font-serif"
            >
              {t("projects.title")}
            </motion.h1>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="text-lg text-[black] max-w-2xl mx-auto font-sans"
            >
              {t("projects.description")}
            </motion.p>
          </motion.div>
        </div>

        {/* 4. BOTÕES DE FILTRO */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {CATEGORIAS.map((categoria) => (
            <button
              key={categoria}
              onClick={() => setCategoriaSelecionada(categoria)}
              className={`
                rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300
                ${
                  categoriaSelecionada === categoria
                    ? "bg-[#404142] text-white border-[#404142]"
                    : "border-black/10 text-[#404142]/70 hover:border-[#404142] hover:text-[#404142]"
                }
              `}
            >
              {t(`ACMProjectsButton.Buttons.${categoria}`)}
            </button>
          ))}
        </div>

        
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          
          <AnimatePresence mode="popLayout">
            {ObraFiltro.map((image, index) => {
              const row = Math.floor(index / 2);
              const posInRow = index % 2;

              let spanClass = "";
              if (row % 2 === 0) {
                spanClass = posInRow === 0 ? "lg:col-span-2" : "lg:col-span-1";
              } else {
                spanClass = posInRow === 0 ? "lg:col-span-1" : "lg:col-span-2";
              }

              return (
                <motion.div
                  layout
                  className={`relative cursor-pointer group ${spanClass}`}
                  onClick={() => openLightbox(image)}
                  key={image.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    className="w-full h-64 object-cover rounded-lg"
                    src={image.img}
                    alt={image.title}
                  />
                  <div className="absolute inset-0 group-hover:bg-black/60 duration-200 flex items-end">
                    <div className="p-4 text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-200 ">
                      <h3 className="font-semibold text-lg">{image.title}</h3>
                      <p className="text-sm">{image.descricao}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* MODAL LIGHTBOX */}
        <AnimatePresence>
          {isLightboxOpen && selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4"
            >
              <div className="relative bg-[#404142] rounded-xl overflow-hidden max-w-6xl w-full">
                <button
                  className="absolute top-4 right-4 z-10 bg-slate-800 hover:bg-slate-700 text-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                  onClick={closeLightbox}
                >
                  &times;
                </button>
                <div className="flex flex-col md:flex-row">
                  <div className="flex-1 p-6 flex items-center justify-center">
                    <img
                      className="w-full h-80 lg:h-160 object-cover rounded-lg"
                      src={selectedImage.img} 
                      alt={selectedImage.title}
                    />
                  </div>
                  <div className="md:w-96 bg-[#404142] p-6 text-white flex flex-col">
                    <h2 className="text-2xl font-bold mb-2">
                      {selectedImage.title}
                    </h2>
                    <p className="text-slate-300">
                      {selectedImage.descricao} 
                    </p>
                    <div className="mt-auto">
                      <div className="text-slate-400 mb-4 text-sm">
                        {ObraFiltro.findIndex((img) => img.title === selectedImage.title) + 1} / {ObraFiltro.length}
                      </div>
                      <div className="flex space-x-4">
                        <button
                          onClick={goToPrev}
                          className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded-lg"
                        >
                          {t("projects.previous")}
                        </button>
                        <button
                          onClick={goToNext}
                          className="flex-1 bg-blue-700 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
                        >
                          {t("projects.next")}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={goToPrev}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-slate-800 hover:bg-slate-700 text-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  &#10094;
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-800 hover:bg-slate-700 text-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  &#10095;
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}