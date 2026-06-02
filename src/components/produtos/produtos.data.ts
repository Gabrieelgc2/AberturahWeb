import * as img from "./imgConstant";

export interface Cor {
  nome: string;
  imagem: string;
}

export type TipoMaterial = "ACM" | "PVC";
export type EscopoPVC = "Interno" | "Externo";

export interface Material {
  tipo: TipoMaterial;
  cores?: Cor[];
  coresPorEscopo?: Record<EscopoPVC, Cor[]>; // Facilita a separação no modal
}

export interface Produto {
  id: string;
  nome: string;
  categoria: "Portas" | "Brises" | "Pergolados" | "Revestimentos";
  imagem: string;
  descricao: string;
  materiais: Material[];
}

export const CORES_ACM: Cor[] = [
  { nome: "Preto", imagem: img.acmPreto },
  { nome: "Branco", imagem: img.acmBranco },
  { nome: "Cinza", imagem: img.acmCinza },
  { nome: "Champagne", imagem: img.acmChampagne },
  { nome: "Madeira", imagem: img.acmMadeira },
  { nome: "Fosco", imagem: img.acmFosco },
];

export const CORES_PVC_INTERNO: Cor[] = [
  { nome: "Eucalyptus", imagem: img.pvcIntEucalyptus },
  { nome: "Oak", imagem: img.pvcInternoOak },
  { nome: "Poplar", imagem: img.pvcInternoPoplar },
  { nome: "Teak", imagem: img.pvcInternoTeak },
  { nome: "Walnut", imagem: img.pvcInternoWalnut },
];

export const CORES_PVC_EXTERNO: Cor[] = [
  { nome: "BlackMatt", imagem: img.pvcExternoBlackMatt },
  { nome: "GoldenMatt", imagem: img.pvcExternoGoldenMatt },
  { nome: "Larchmarrone", imagem: img.pvcExternoLarchmarrone },
  { nome: "LarchNature", imagem: img.pvcExternoLarchNature },
  { nome: "Larchterrabrown", imagem: img.pvcExternoLarchterrabrown },
  { nome: "MontanaOak", imagem: img.pvcExternoMontanaOak },
];

export const PRODUTOS: Produto[] = [
  {
    id: "porta",
    nome: "Porta",
    categoria: "Portas",
    imagem: img.portaImg,
    descricao: "Clique para ver mais detalhes",
    materiais: [
      {
        tipo: "PVC",
        coresPorEscopo: {
          Interno: CORES_PVC_INTERNO,
          Externo: CORES_PVC_EXTERNO,
        }
      },
    ],
  },
  {
    id: "brise",
    nome: "Brise",
    categoria: "Brises",
    imagem: img.briseImg,
    descricao: "Clique para ver mais detalhes",
    materiais: [
      { tipo: "ACM", cores: CORES_ACM },
      {
        tipo: "PVC",
        coresPorEscopo: {
          Interno: CORES_PVC_INTERNO,
          Externo: CORES_PVC_EXTERNO,
        }
      },
    ],
  },
  {
    id: "pergolado",
    nome: "Pergolado",
    categoria: "Pergolados",
    imagem: img.pergoladoImg,
    descricao: "Clique para ver mais detalhes",
    materiais: [
      { tipo: "ACM", cores: CORES_ACM },
      {
        tipo: "PVC",
        coresPorEscopo: {
          Interno: CORES_PVC_INTERNO,
          Externo: CORES_PVC_EXTERNO,
        }
      },
    ],
  },
  {
    id: "revestimento",
    nome: "Revestimento",
    categoria: "Revestimentos",
    imagem: img.revestimentoImg,
    descricao: "Clique para ver mais detalhes",
    materiais: [
      { tipo: "ACM", cores: CORES_ACM },
      {
        tipo: "PVC",
        coresPorEscopo: {
          Interno: CORES_PVC_INTERNO,
          Externo: CORES_PVC_EXTERNO,
        }
      },
    ],
  },
];