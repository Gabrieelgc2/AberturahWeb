export const SITE_CONTACT = {
  whatsappNumber: "5581999840131",
  phoneDisplay: "(81) 99984-0131",
  email: "contato@aberturah.com.br",
  addressLine1: "Rua Desembargador João Paes, 414",
  addressLine2: "Boa Viagem - Recife/PE",
  businessHours: "Segunda a Sexta - 8h às 18h",
} as const;

export const SITE_SOCIAL = {
  instagram: "https://www.instagram.com/aberturah",
  youtube: "https://www.youtube.com/@aberturah",
} as const;

export const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/produtos", label: "Produtos" },
  { to: "/sobre", label: "Sobre nós" },
  { to: "/noticias", label: "Notícias" },
  { to: "/contato", label: "Contato" },
] as const;

export const WHATSAPP_URL = `https://wa.me/${SITE_CONTACT.whatsappNumber}`;
