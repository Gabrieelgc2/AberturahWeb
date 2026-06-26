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
  linkedin: "https://www.linkedin.com",
  facebook: "https://www.facebook.com",
  whatsapp: "https://www.whatsapp.com",
} as const;

export const NAV_ITEMS = [
  { to: "/", label: "nav.home" },
  { to: "/acabamentos", label: "nav.acabamentos" },
  { to: "/sobre", label: "nav.about" },
  { to: "/contato", label: "nav.contact" },
] as const;

export const WHATSAPP_URL = `https://wa.me/${SITE_CONTACT.whatsappNumber}`;
