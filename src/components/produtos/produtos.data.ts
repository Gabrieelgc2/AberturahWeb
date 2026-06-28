import * as img from "./img/imgConstant";

export interface Cor {
  nome: string;
  imagem: string;
}

export type TipoMaterial = "ACM" | "PVC";
export type EscopoPVC = "Interno" | "Externo";

export interface Material {
  tipo: TipoMaterial;
  cores?: Cor[];
  coresPorEscopo?: Record<EscopoPVC, Cor[]>;
}

export interface Produto {
  id: string;
  nome: string;
  categoria: "doors" | "brises" | "pergolas" | "cladding";
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
    nome: "doors",
    categoria: "doors",
    imagem: img.portaImg,
    descricao: "doors",
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
    nome: "brises",
    categoria: "brises",
    imagem: img.briseImg,
    descricao: "brises",
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
    nome: "pergolas",
    categoria: "pergolas",
    imagem: img.pergoladoImg,
    descricao: "pergolas",
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
    nome: "cladding",
    categoria: "cladding",
    imagem: img.revestimentoImg,
    descricao: "cladding",
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