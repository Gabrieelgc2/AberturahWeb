import portas from "../../assets/thumbs/porta.webp";
import brises from "../../assets/thumbs/brises.webp";
import pergolados from "../../assets/thumbs/pergolados.webp";
import revestimentos from "../../assets/thumbs/revestimentos.webp";

export type ProdutoCategoria =
  | "Todos"
  | "Portas"
  | "Brises"
  | "Pergolados"
  | "Revestimentos";

export type Produto = {
  id: string;
  nome: string;
  categoria: Exclude<ProdutoCategoria, "Todos">;
  imagem: string;
  descricao: string;
};

export const CATEGORIAS: readonly ProdutoCategoria[] = [
  "Todos",
  "Portas",
  "Brises",
  "Pergolados",
  "Revestimentos",
];

export const PRODUTOS: Produto[] = [
  {
    id: "porta-acm-preta",
    nome: "Porta",
    categoria: "Portas",
    imagem: portas,
    descricao:
      "Porta em ACM com acabamento premium e design minimalista para projetos contemporâneos.",
  },

  {
    id: "Brise",
    nome: "Brise",
    categoria: "Brises",
    imagem: brises,
    descricao:
      "Controle solar sofisticado com linhas arquitetônicas modernas.",
  },


  {
    id: "Pergolado",
    nome: "Pergolado",
    categoria: "Pergolados",
    imagem: pergolados,
    descricao:
      "Estrutura sofisticada para áreas externas com acabamento refinado.",
  },


  {
    id: "revestimento-fosco",
    nome: "Revestimento",
    categoria: "Revestimentos",
    imagem: revestimentos,
    descricao:
      "Acabamento minimalista para fachadas elegantes e modernas.",
  },

];
