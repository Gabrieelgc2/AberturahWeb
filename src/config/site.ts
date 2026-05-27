export const SITE_CONTACT = {
  whatsappNumber: "5581999840131",
  phoneDisplay: "(81) 99984-0131",
  email: "contato@aberturah.com.br",
    address: {
    line1: "Rua Desembargador João Paes, 414",
    line2: "Boa Viagem - Recife/PE, Brazil",
  },
} as const;

export const SITE_SOCIAL = {
  instagram: "https://www.instagram.com/aberturah",
  youtube: "https://www.youtube.com/@aberturah",
} as const;

export const NAV_ITEMS = [
  { to: "/", label: "nav.home" },
  { to: "/produtos", label: "nav.products" },
  { to: "/sobre", label: "nav.about" },
  { to: "/contato", label: "nav.contact" },
] as const;

export const WHATSAPP_URL = `https://wa.me/${SITE_CONTACT.whatsappNumber}`;
