import { useMemo, useState } from "react";
import type { Produto } from "../produtos.data";

export function useProdutosFiltro(produtos: Produto[]) {
  // Gera categorias dinamicamente a partir dos produtos
  const categorias = useMemo(() => {
    return [
      "Todos",
      ...Array.from(new Set(produtos.map((p) => p.categoria))),
    ];
  }, [produtos]);

  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string>(categorias[0]);

  const produtosFiltrados = useMemo(() => {
    if (categoriaSelecionada === "Todos") return produtos;
    return produtos.filter((produto) => produto.categoria === categoriaSelecionada);
  }, [categoriaSelecionada, produtos]);

  return {
    categorias,
    categoriaSelecionada,
    setCategoriaSelecionada,
    produtosFiltrados,
  };
}
