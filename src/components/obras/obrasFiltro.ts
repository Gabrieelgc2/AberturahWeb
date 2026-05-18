import { useMemo, useState } from "react";
import { CATEGORIAS, Obra, ObrasCategoria } from "./obras.data";

export function useProdutosFiltro(Obra: Obra[]) {
  const [categoriaSelecionada, setCategoriaSelecionada] =
    useState<ObrasCategoria>(CATEGORIAS[0]);

  const ObraFiltro = useMemo(() => {
    if (categoriaSelecionada === "Todos") {
      return Obra;
    }

    return Obra.filter((obra) => obra.categoria === categoriaSelecionada);
  }, [categoriaSelecionada, Obra]);

  return {
    categoriaSelecionada,
    setCategoriaSelecionada,
    ObraFiltro,
  };
}
