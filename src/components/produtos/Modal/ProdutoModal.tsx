import { useState, useEffect } from "react";
import { Produto, Material, EscopoPVC, Cor } from "../produtos.data";
import { AnimatePresence } from "framer-motion";
import { ModalAmpliaCor } from "./ModalAmpliaCor";
import { useTranslation } from "react-i18next";

interface ProdutoModalProps {
  produto: Produto;
  onClose: () => void;
}

export function ProdutoModal({ produto, onClose }: ProdutoModalProps) {
  const { t } = useTranslation("modal");

  const [materialSelecionado, setMaterialSelecionado] = useState<Material | null>(null);
  const [escopoPvc, setEscopoPvc] = useState<EscopoPVC | null>(null);
  const [corAmpliada, setCorAmpliada] = useState<Cor | null>(null);

  let coresExibidas: Cor[] = [];

  if (materialSelecionado) {
    if (materialSelecionado.tipo === "ACM") {
      // ACM direto da propriedade 'cores'
      coresExibidas = materialSelecionado.cores || [];
    } else if (materialSelecionado.tipo === "PVC" && escopoPvc) {
      // PVC direto do objeto de escopos indexado pela escolha do usuário
      coresExibidas = materialSelecionado.coresPorEscopo?.[escopoPvc] || [];
    }
  }

  const handleReset = () => {
    setMaterialSelecionado(null);
    setEscopoPvc(null);
  };

  const handleVoltarDaGrade = () => {
  if (materialSelecionado?.tipo === "PVC") {
    // Se for PVC, volta para a seleção de Interno/Externo
    setEscopoPvc(null);
  } else {
    // Se for ACM (ou qualquer outro), volta para o início de tudo
    setMaterialSelecionado(null);
  }
};

  useEffect(() => {
    // Quando o modal abre, adiciona a classe que esconde o overflow do site
    document.body.classList.add("overflow-hidden");

    // FUNÇÃO DE LIMPEZA (Cleanup): roda automaticamente quando o modal fecha
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []); // Array vazio garante que isso só roda ao abrir e ao fechar

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center p-6 z-50 animate-[fadeIn_0.2s_ease-out]"
      onClick={onClose}
    >
      <div
        className="bg-white sm:w-full max-w-4xl rounded-[28px] p-8 shadow-2xl flex flex-col md:flex-row gap-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* BOTÃO FECHAR */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-zinc-400 hover:text-black text-xl"
        >
          ✕
        </button>

        {/* LADO ESQUERDO: PREVIEW DO PRODUTO */}
        <div className="w-full md:w-2/5 flex flex-col gap-4">
          <div className="aspect-3/4 w-full rounded-2xl overflow-hidden bg-zinc-100">
            <img src={produto.imagem} alt={produto.nome} className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-3xl tracking-[-0.03em] font-sans">{t(`name.${produto.nome}`)}</h2>
            <p className="text-[#404142] mt-1 text-sm font-sans"> {t("category")}: {t(`categoriesModal.${produto.categoria}`)}</p>
          </div>
        </div>

        {/* LADO DIREITO: SELEÇÕES E ACABAMENTOS */}
        <div className="flex-1 flex flex-col justify-between pt-4">
          <div>

            {/* ETAPA 1: Selecionar Tipo de Material (ACM ou PVC) */}
            {!materialSelecionado && (
              <div>
                <h3 className="text-lg mb-4">{t("selectBaseMaterial")}</h3>
                <div className="flex flex-col gap-3">
                  {produto.materiais.map((m) => (
                    <button
                      key={m.tipo}
                      onClick={() => setMaterialSelecionado(m)}
                      className="w-full py-2 rounded-xl border-2 border-zinc-200 text-left px-6 text-lg transition hover:border-black hover:bg-zinc-50"
                    >
                      {t(`materials.${m.tipo.toLowerCase()}`)} — {t("premiumSolutions")}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ETAPA 1.5: Se escolheu PVC, decide se quer Interno ou Externo */}
            {materialSelecionado?.tipo === "PVC" && !escopoPvc && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-sans">{t("pvcUsage")}</h3>
                  <button onClick={handleReset} className="text-sm font-sans text-[#404142] hover:text-black underline">{t("back")}</button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {(["Interno", "Externo"] as EscopoPVC[]).map((tipo) => (
                    <button
                      key={tipo}
                      onClick={() => setEscopoPvc(tipo)}
                      className="py-3 rounded-xl border text-center text-base font-sans transition hover:bg-black hover:text-white"
                    >
                      {t("environment")} {t(`scope.${tipo}`)}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ETAPA 2: Grade de Cores (Só renderiza se escolheu ACM OU se escolheu PVC + Escopo) */}
            {materialSelecionado && (materialSelecionado.tipo === "ACM" || escopoPvc) && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-md text-[#404142]">
                     {t("finishesIn")} {t(`materials.${materialSelecionado.tipo.toLowerCase()}`)}
                     {escopoPvc ? ` (${t(`scope.${escopoPvc}`)})` : ""}
                  </h3>
                  <button onClick={handleVoltarDaGrade} className="text-sm text-[#404142] hover:text-black underline">{t("back")}</button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-40 sm:max-h-100 overflow-y-auto pr-2 scrollbar-thin">
                  {coresExibidas.map((cor, i) => (
                    <div key={i}
                      onClick={() => setCorAmpliada(cor)}
                      className="flex flex-col gap-1.5 group cursor-pointer">
                      <div className="aspect-square rounded-xl overflow-hidden bg-zinc-100 border border-zinc-200">
                        <img src={cor.imagem} alt={cor.nome} className="w-full h-full object-cover transition duration-300 group-hover:scale-110" />
                      </div>
                      <span className="text-xs text-center font-medium text-[#404142] group-hover:text-black">{cor.nome}</span>
                    </div>
                  ))}
                </div>
              </div>

            )}
          </div>

        </div>
      </div>

      <AnimatePresence>
        {corAmpliada && (
          <ModalAmpliaCor
            isOpen={!!corAmpliada}
            src={corAmpliada.imagem}
            alt={corAmpliada.nome}
            onClose={() => setCorAmpliada(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}