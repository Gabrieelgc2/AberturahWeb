import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface ModalAmpliaCorProps {
  isOpen: boolean;
  src: string;
  alt: string;
  onClose: () => void;
}

export function ModalAmpliaCor({ isOpen, src, alt, onClose }: ModalAmpliaCorProps) {
  const { t } = useTranslation("modal")
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* OVERLAY ESCURO (Fundo) */}
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      />

      {/* CONTAINER DA FOTO EXPANDIDA */}
      <motion.div
        className="relative max-w-md w-full bg-white rounded-[28px] overflow-hidden shadow-2xl z-10 p-4 flex flex-col gap-4"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {/* BOTÃO FECHAR */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-6 right-6 w-8 h-8 rounded-full bg-black/50 hover:bg-black text-white flex items-center justify-center transition-colors text-sm z-20"
        >
          ✕
        </button>

        {/* FOTO QUADRADA AMPLIADA */}
        <div className="aspect-square w-full rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200">
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        </div>

        {/* LEGENDA */}
        <div className="text-center pb-2">
          <h4 className="text-xl font-sans font-medium text-zinc-900">{alt}</h4>
          <p className="text-xs text-zinc-400 mt-1 uppercase tracking-widest font-sans">
            {t("selectedFinish")}
          </p>        
          </div>
      </motion.div>
    </div>
  );
}