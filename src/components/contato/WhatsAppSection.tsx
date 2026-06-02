import { MessageCircle, Instagram, Youtube } from "lucide-react";
import { SITE_CONTACT, SITE_SOCIAL, WHATSAPP_URL } from "@/config/site";
import { useTranslation } from "react-i18next";

export function WhatsAppSection() {
  const { t } = useTranslation();
  return (
    <section className="pb-24 sm:pb-32">
      <div className="container mx-auto max-w-7xl px-6">
        <div
          className="relative RevealText rounded-3xl p-10 sm:p-16"
          style={{ background: "#404142" }}
        >
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs  uppercase tracking-widest text-[#D9D9D9]">
                <MessageCircle className="h-3.5 w-3.5 text-[#D9D9D9] RevealText font-sans" />
                {t("contactPage.whatsapp.badge")}
              </div>
              <h2 className="mt-6 font-sans text-xl leading-[1.05] text-white sm:text-3xl RevealText">
                {t("contactPage.whatsapp.title.line1")}<br />
                <span
                  style={{
                    WebkitBackgroundClip: "text",
                  }}
                >
                  {t("contactPage.whatsapp.title.line2")}
                </span>
              </h2>
              <p className="mt-6 max-w-md text-md sm:text-lg font-sans leading-relaxed text-[#D9D9D9] RevealText">
                {t("contactPage.whatsapp.description")}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm text-[color:var(--brand-foreground)] shadow-[var(--shadow-brand)] transition-transform hover:scale-105"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  <MessageCircle className="h-5 w-5 RevealText" />
                  <span className="RevealText font-sans">{t("contactPage.whatsapp.button")}</span>
                </a>
              </div>

              <div className="mt-8 flex gap-3">
                <a href={SITE_SOCIAL.instagram} target="_blank" rel="noreferrer" aria-label={t("footer.ariaLabels.instagram")} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-all hover:border-[color:var(--brand)] hover:text-[color:var(--brand)]">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href={SITE_SOCIAL.youtube} target="_blank" rel="noreferrer" aria-label={t("footer.ariaLabels.youtube")} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-all hover:border-[color:var(--brand)] hover:text-[color:var(--brand)]">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div
              className="relative aspect-square rounded-3xl border border-[#D9D9D9] p-12 RevealText"
              style={{
                background:
                  "#D9D9D98D",
              }}
            >
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-3xl sm:h-24 sm:w-24 RevealText"
                  style={{ background: "#4041429D" }}
                >
                  <MessageCircle className="h-8 w-8 text-[#D9D9D9] RevealText" strokeWidth={1.75}/>
                </div>
                <p className="mt-4 font-sans text-2xl text-[#404142] sm:text-3xl RevealText">
                  {SITE_CONTACT.phoneDisplay}
                </p>
                <p className="mt-4 font-sans text-sm uppercase tracking-widest text-[#404142] RevealText">
                  {t("contactPage.whatsapp.commercial")}
                </p>
                <p className="mt-4 max-w-xs text-sm text-[#404142] font-sans RevealText">
                  {t("contactPage.whatsapp.helper")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}