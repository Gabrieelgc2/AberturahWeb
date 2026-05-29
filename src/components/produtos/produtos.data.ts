

// Imagens dos produtos (exemplo Unsplash/Google)
const portaImg = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80";
const briseImg = "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80";
const pergoladoImg = "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80";
const revestimentoImg = "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80";

// Cores ACM (exemplo Unsplash/Google)
const acmPreto = "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80";
const acmBranco = "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80&sat=0";
const acmCinza = "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=200&q=80";
const acmChampagne = "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80&sat=50";
const acmMadeira = "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=200&q=80";
const acmFosco = "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=200&q=80";

// Cores PVC Interno (exemplo Unsplash/Google)
const pvcIntBranco = "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80&sat=0";
const pvcIntCinza = "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=200&q=80";
const pvcIntMadeira = "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=200&q=80";
const pvcIntBege = "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=200&q=80";
const pvcIntGrafite = "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=200&q=80";
const pvcIntPreto = "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80";

// Cores PVC Externo (exemplo Unsplash/Google)
const pvcExtBranco = pvcIntBranco;
const pvcExtCinza = pvcIntCinza;
const pvcExtMadeira = pvcIntMadeira;
const pvcExtBege = pvcIntBege;
const pvcExtGrafite = pvcIntGrafite;
const pvcExtPreto = pvcIntPreto;

// Tipos e interfaces
export interface Cor {
  nome: string;
  imagem: string;
}

export interface PVCVariant {
  tipo: "Interno" | "Externo";
  cores: Cor[];
}

export interface Material {
  tipo: "ACM" | "PVC";
  cores?: Cor[]; // ACM
  pvcTipos?: PVCVariant[]; // PVC
}

export interface Produto {
  id: string;
  nome: string;
  categoria: "Portas" | "Brises" | "Pergolados" | "Revestimentos";
  imagem: string;
  descricao: string;
  materiais: Material[];
}

// Listas de cores
const CORES_ACM: Cor[] = [
  { nome: "Preto", imagem: acmPreto },
  { nome: "Branco", imagem: acmBranco },
  { nome: "Cinza", imagem: acmCinza },
  { nome: "Champagne", imagem: acmChampagne },
  { nome: "Madeira", imagem: acmMadeira },
  { nome: "Fosco", imagem: acmFosco },
];

const CORES_PVC_INTERNO: Cor[] = [
  { nome: "Branco", imagem: pvcIntBranco },
  { nome: "Cinza", imagem: pvcIntCinza },
  { nome: "Madeira", imagem: pvcIntMadeira },
  { nome: "Bege", imagem: pvcIntBege },
  { nome: "Grafite", imagem: pvcIntGrafite },
  { nome: "Preto", imagem: pvcIntPreto },
];

const CORES_PVC_EXTERNO: Cor[] = [
  { nome: "Branco", imagem: pvcExtBranco },
  { nome: "Cinza", imagem: pvcExtCinza },
  { nome: "Madeira", imagem: pvcExtMadeira },
  { nome: "Bege", imagem: pvcExtBege },
  { nome: "Grafite", imagem: pvcExtGrafite },
  { nome: "Preto", imagem: pvcExtPreto },
];

// Produtos
export const PRODUTOS: Produto[] = [
  {
    id: "porta",
    nome: "Porta",
    categoria: "Portas",
    imagem: portaImg,
    descricao: "Clique para ver mais detalhes",
    materiais: [
      {
        tipo: "PVC",
        pvcTipos: [
          { tipo: "Interno", cores: CORES_PVC_INTERNO },
          { tipo: "Externo", cores: CORES_PVC_EXTERNO },
        ],
      },
    ],
  },
  {
    id: "brise",
    nome: "Brise",
    categoria: "Brises",
    imagem: briseImg,
    descricao: "Clique para ver mais detalhes",
    materiais: [
      {
        tipo: "ACM",
        cores: CORES_ACM,
      },
      {
        tipo: "PVC",
        pvcTipos: [
          { tipo: "Interno", cores: CORES_PVC_INTERNO },
          { tipo: "Externo", cores: CORES_PVC_EXTERNO },
        ],
      },
    ],
  },
  {
    id: "pergolado",
    nome: "Pergolado",
    categoria: "Pergolados",
    imagem: pergoladoImg,
    descricao: "Clique para ver mais detalhes",
    materiais: [
      {
        tipo: "ACM",
        cores: CORES_ACM,
      },
      {
        tipo: "PVC",
        pvcTipos: [
          { tipo: "Interno", cores: CORES_PVC_INTERNO },
          { tipo: "Externo", cores: CORES_PVC_EXTERNO },
        ],
      },
    ],
  },
  {
    id: "revestimento",
    nome: "Revestimento",
    categoria: "Revestimentos",
    imagem: revestimentoImg,
    descricao: "Clique para ver mais detalhes",
    materiais: [
      {
        tipo: "ACM",
        cores: CORES_ACM,
      },
      {
        tipo: "PVC",
        pvcTipos: [
          { tipo: "Interno", cores: CORES_PVC_INTERNO },
          { tipo: "Externo", cores: CORES_PVC_EXTERNO },
        ],
      },
    ],
  },
];