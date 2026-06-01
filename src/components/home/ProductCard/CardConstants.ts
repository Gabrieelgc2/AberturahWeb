import portavideo from "../../../assets/videos/portavideo.webm";
import revestimento from "../../../assets/videos/revestimento.webm";
import brises from "../../../assets/videos/brises.webm";
import pergolados from "../../../assets/videos/pergolados.webm";

import portavideofoto from "../../../assets/thumbs/porta.webp";
import brisesfoto from "../../../assets/thumbs/brises.webp";
import pergoladosfoto from "../../../assets/thumbs/pergolados.webp";
import revestimentofoto from "../../../assets/thumbs/revestimentos.webp";

export interface ProductCategory {
  key: string;
  video: string;
  poster: string;
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    key: "porta",
    video: portavideo,
    poster: portavideofoto,
  },
  {
    key: "revestimento",
    video: revestimento,
    poster: revestimentofoto,
  },
  {
    key: "brises",
    video: brises,
    poster: brisesfoto,
  },
  {
    key: "pergolados",
    video: pergolados,
    poster: pergoladosfoto,
  },
];