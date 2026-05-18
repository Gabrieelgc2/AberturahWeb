import pergolado from "../../assets/pergolado.png";
import brises from "../../assets/brise.png";
import image from "../../assets/images.png";
import portas from "../../assets/porta.png";

export type ObrasCategoria =
  | "Todos"
  | "Portas"
  | "Brises"
  | "Revestimentos"
  | "Pergolados"
  | "Ripados"

export type Obra = {
  title: string;
  img: string;
  descricao: string;
  categoria: Exclude<ObrasCategoria, "Todos">;
};

export const CATEGORIAS: readonly ObrasCategoria[] = [
  "Todos",
  "Portas",
  "Brises",
  "Revestimentos",
  "Pergolados",
  "Ripados"
];

export const Obras: Obra[] = [
 {
    categoria: "Pergolados",
    img: pergolado,
    title: "Forest Pathway",
    descricao: "Serene forest path during autumn",
  },
  {
    categoria: "Brises",
    img: brises,
    title: "Desert Adventure",
    descricao: "Golden sand dunes in the desert",
  },
  {
    categoria: "Portas",
    img: image,
    title: "Ocean Sunset",
    descricao: "Stunning sunset over the ocean horizon",
  },
  {
    categoria: "Portas",
    img: portas,
    title: "Colorful Nature",
    descricao: "Vibrant flowers in a green field",
  },
  {
    categoria: "Pergolados",
    img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=90",
    title: "Misty Mountains",
    descricao: "Mysterious fog covering mountain peaks",
  },
  {
    categoria: "Portas",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=90",
    title: "Mountain Landscape",
    descricao: "Beautiful mountain view with lake reflection",
  },
];
