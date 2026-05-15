import { AnimatePresence, motion, Variants } from "framer-motion";
import { useEffect, useState, KeyboardEvent } from "react";
import pergolado from "../../assets/pergolado.png";
import brises from "../../assets/brise.png";
import image from "../../assets/images.png";
import portas from "../../assets/porta.png";

// 1. Definição da Interface para os dados das imagens
interface ImageItem {
  id: number;
  src: string;
  title: string;
  description: string;
}

const images: ImageItem[] = [
  {
    id: 1,
    src: pergolado,
    title: "Forest Pathway",
    description: "Serene forest path during autumn",
  },
  {
    id: 2,
    src: brises,
    title: "Desert Adventure",
    description: "Golden sand dunes in the desert",
  },
  {
    id: 3,
    src: image,
    title: "Ocean Sunset",
    description: "Stunning sunset over the ocean horizon",
  },
  {
    id: 4,
    src: portas,
    title: "Colorful Nature",
    description: "Vibrant flowers in a green field",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=90",
    title: "Misty Mountains",
    description: "Mysterious fog covering mountain peaks",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=90",
    title: "Mountain Landscape",
    description: "Beautiful mountain view with lake reflection",
  },
];

export function Obras(){
  // 2. Tipagem dos Estados
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const openLightbox = (image: ImageItem): void => {
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
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const goToPrev = (): void => {
    if (!selectedImage) return;
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  useEffect(() => {
    // 3. Tipagem do evento de teclado
    const handleKeyDown = (e: globalThis.KeyboardEvent): void => {
      if (isLightboxOpen) {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowRight") goToNext();
        if (e.key === "ArrowLeft") goToPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, selectedImage]);

  // 4. Definição de Variantes para organização (opcional, mas ajuda no TS)
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
              Obras em ACM premium
            </motion.h1>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="text-lg text-[black] max-w-2xl mx-auto font-sans"
            >
              Clique nas imagens para ver detalhes adicionais
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {images.map((image, index) => {
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
                className={`relative cursor-pointer group ${spanClass}`}
                onClick={() => openLightbox(image)}
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  className="w-full h-64 object-cover rounded-lg"
                  src={image.src}
                  alt={image.title}
                />
                <div className="absolute inset-0 group-hover:bg-black/60 duration-200 flex items-end">
                  <div className="p-4 text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-200 ">
                    <h3 className="font-semibold text-lg">{image.title}</h3>
                    <p className="text-sm">{image.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <AnimatePresence>
          {isLightboxOpen && selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4"
            >
              <div className="relative bg-slate-900 rounded-xl overflow-hidden max-w-6xl w-full">
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
                      src={selectedImage.src}
                      alt={selectedImage.title}
                    />
                  </div>
                  <div className="md:w-96 bg-slate-800 p-6 text-white flex flex-col">
                    <h2 className="text-2xl font-bold mb-2">
                      {selectedImage.title}
                    </h2>
                    <p className="text-slate-300">
                      {selectedImage.description}
                    </p>
                    <div className="mt-auto">
                      <div className="text-slate-400 mb-4 text-sm">
                        {images.findIndex((img) => img.id === selectedImage.id) + 1} / {images.length}
                      </div>
                      <div className="flex space-x-4">
                        <button
                          onClick={goToPrev}
                          className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded-lg"
                        >
                          Anterior
                        </button>
                        <button
                          onClick={goToNext}
                          className="flex-1 bg-blue-700 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
                        >
                          Próximo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Overlay buttons for easier navigation */}
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
};