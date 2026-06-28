import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Tradução em Português
import heropt from "./locales/pt/home/hero.json";
import aboutpreviewpt from "./locales/pt/home/aboutpreview.json";
import processpt from "./locales/pt/home/process.json";
import productspreviewpt from "./locales/pt/home/productspreview.json";
import testimonialspt from "./locales/pt/home/testimonials.json";
import whychooseuspt from "./locales/pt/home/whychooseus.json";
import aboutpt from "./locales/pt/about.json";
import Acmprojectsbutton from "./locales/pt/acmprojectsbutton.json";
import contactpt from "./locales/pt/contact.json";
import ctapt from "./locales/pt/cta.json";
import faqpt from "./locales/pt/faq.json";
import footerpt from "./locales/pt/footer.json";
import navbarpt from "./locales/pt/navbar.json";
import newspt from "./locales/pt/news.json";
import pagelayoutpt from "./locales/pt/pagelayout.json";
import Acabamentospt from "./locales/pt/acabamentos/acabamentos.json";
import Modalpt from "./locales/pt/acabamentos/modal.json";

// Tradução em inglês
import heroeng from "./locales/en/home/hero.json";
import aboutprevieweng from "./locales/en/home/aboutpreview.json";
import processeng from "./locales/en/home/process.json";
import productsprevieweng from "./locales/en/home/productspreview.json";
import testimonialseng from "./locales/en/home/testimonials.json";
import whychooseuseng from "./locales/en/home/whychooseus.json";
import abouteng from "./locales/en/about.json";
import Acabamentoseng from "./locales/en/acabamentos/acabamentos.json";
import contacteng from "./locales/en/contact.json";
import ctaeng from "./locales/en/cta.json";
import faqeng from "./locales/en/faq.json";
import footereng from "./locales/en/footer.json";
import navbareng from "./locales/en/navbar.json";
import newseng from "./locales/en/news.json";
import pagelayouteng from "./locales/en/pagelayout.json";
import Modaleng from "./locales/en/acabamentos/modal.json";


export async function initI18n() {
  if (!i18n.isInitialized) {
    await i18n
      .use(initReactI18next)
      .init({
        resources: {
          pt: { 
            hero: heropt,
            aboutpreview: aboutpreviewpt,
            process: processpt,
            productspreview: productspreviewpt,
            testimonials: testimonialspt,
            whychooseus: whychooseuspt,
            about: aboutpt,
            acmprojectsbutton: Acmprojectsbutton,
            acabamentos: Acabamentospt,
            contact: contactpt,
            cta: ctapt,
            faq: faqpt,
            footer: footerpt,
            navbar: navbarpt,
            news: newspt,
            pagelayout: pagelayoutpt,
            modal: Modalpt,
          },
          en: { 
            hero: heroeng,
            aboutpreview: aboutprevieweng,
            process: processeng,
            productspreview: productsprevieweng,
            testimonials: testimonialseng,
            whychooseus: whychooseuseng,
            about: abouteng,
            acmprojectsbutton: Acmprojectsbutton,
            acabamentos: Acabamentoseng,
            contact: contacteng,
            cta: ctaeng,
            faq: faqeng,
            footer: footereng,
            navbar: navbareng,
            news: newseng,
            pagelayout: pagelayouteng,
            modal: Modaleng,
          },
        },
        lng: typeof window !== "undefined"
          ? localStorage.getItem("lang") || "pt"
          : "pt",
        fallbackLng: "pt",
        interpolation: { escapeValue: false },
      });
    console.log("I18N initialized");
  }
}

export default i18n;