import { useMemo, useState } from "react";
import { CATEGORIAS, type Produto, type ProdutoCategoria } from "./produtos.data";

export function useProdutosFiltro(produtos: Produto[]) {
  const [categoriaSelecionada, setCategoriaSelecionada] =
    useState<ProdutoCategoria>(CATEGORIAS[0]);

  const produtosFiltrados = useMemo(() => {
    if (categoriaSelecionada === "Todos") {
      return produtos;
    }

    return produtos.filter((produto) => produto.categoria === categoriaSelecionada);
  }, [categoriaSelecionada, produtos]);

  return {
    categoriaSelecionada,
    setCategoriaSelecionada,
    produtosFiltrados,
  };
}
