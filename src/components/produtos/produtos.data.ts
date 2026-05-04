export type ProdutoCategoria =
  | "Todos"
  | "Brilhante"
  | "Escovado"
  | "Madeirado"
  | "Especial";

export type Produto = {
  id: string;
  nome: string;
  categoria: Exclude<ProdutoCategoria, "Todos">;
  espessura: string;
  gradiente: string;
  descricao: string;
};

export const CATEGORIAS: readonly ProdutoCategoria[] = [
  "Todos",
  "Brilhante",
  "Escovado",
  "Madeirado",
  "Especial",
];

export const PRODUTOS: Produto[] = [
  {
    id: "vermelho",
    nome: "ACM Vermelho Cardinal",
    categoria: "Brilhante",
    espessura: "4mm",
    gradiente: "linear-gradient(135deg, oklch(0.55 0.22 25), oklch(0.35 0.18 22))",
    descricao:
      "Chapa com brilho intenso para fachadas comerciais e comunicação visual de alto contraste.",
  },
  {
    id: "branco",
    nome: "ACM Branco Polar",
    categoria: "Brilhante",
    espessura: "4mm",
    gradiente: "linear-gradient(135deg, oklch(0.95 0.005 250), oklch(0.78 0.01 250))",
    descricao:
      "Acabamento clean e versátil, indicado para projetos corporativos e residenciais.",
  },
  {
    id: "preto",
    nome: "ACM Preto Onyx",
    categoria: "Brilhante",
    espessura: "4mm",
    gradiente: "linear-gradient(135deg, oklch(0.18 0.015 250), oklch(0.05 0.005 250))",
    descricao:
      "Visual elegante com profundidade de cor, ideal para composições modernas e sóbrias.",
  },
  {
    id: "inox",
    nome: "ACM Inox Escovado",
    categoria: "Escovado",
    espessura: "4mm",
    gradiente: "linear-gradient(135deg, oklch(0.78 0.01 250), oklch(0.45 0.012 250))",
    descricao:
      "Textura metálica técnica para aplicações arquitetônicas de alta resistência visual.",
  },
  {
    id: "escovado",
    nome: "ACM Champagne Escovado",
    categoria: "Escovado",
    espessura: "4mm",
    gradiente: "linear-gradient(135deg, oklch(0.82 0.06 80), oklch(0.55 0.08 70))",
    descricao:
      "Tom sofisticado para fachadas premium e painéis com estética contemporânea.",
  },
  {
    id: "cobre",
    nome: "ACM Cobre Escovado",
    categoria: "Escovado",
    espessura: "4mm",
    gradiente: "linear-gradient(135deg, oklch(0.68 0.14 40), oklch(0.42 0.12 35))",
    descricao:
      "Efeito quente e nobre para projetos autorais com identidade marcante.",
  },
  {
    id: "carvalho",
    nome: "ACM Carvalho",
    categoria: "Madeirado",
    espessura: "4mm",
    gradiente: "linear-gradient(135deg, oklch(0.62 0.08 60), oklch(0.38 0.06 50))",
    descricao:
      "Textura amadeirada de alta durabilidade para unir aconchego e performance técnica.",
  },
  {
    id: "imbuia",
    nome: "ACM Imbuia",
    categoria: "Madeirado",
    espessura: "4mm",
    gradiente: "linear-gradient(135deg, oklch(0.42 0.07 45), oklch(0.22 0.05 35))",
    descricao:
      "Acabamento escuro amadeirado para composições elegantes em fachadas e interiores.",
  },
  {
    id: "espelhado",
    nome: "ACM Espelhado",
    categoria: "Especial",
    espessura: "3mm",
    gradiente: "linear-gradient(135deg, oklch(0.92 0.01 220), oklch(0.65 0.02 220))",
    descricao:
      "Superfície reflexiva para efeitos visuais impactantes e projetos diferenciados.",
  },
  {
    id: "perfurado",
    nome: "ACM Perfurado",
    categoria: "Especial",
    espessura: "4mm",
    gradiente: "linear-gradient(135deg, oklch(0.45 0.04 280), oklch(0.22 0.03 280))",
    descricao:
      "Opção técnica para ventilação, controle solar e linguagem arquitetônica exclusiva.",
  },
  {
    id: "grafite",
    nome: "ACM Grafite Fosco",
    categoria: "Especial",
    espessura: "4mm",
    gradiente: "linear-gradient(135deg, oklch(0.32 0.01 240), oklch(0.18 0.005 240))",
    descricao:
      "Visual fosco discreto com excelente desempenho para propostas minimalistas.",
  },
  {
    id: "azul",
    nome: "ACM Azul Cobalto",
    categoria: "Brilhante",
    espessura: "4mm",
    gradiente: "linear-gradient(135deg, oklch(0.45 0.18 250), oklch(0.25 0.14 250))",
    descricao:
      "Cor vibrante para identidade visual forte em fachadas e elementos de destaque.",
  },
];
