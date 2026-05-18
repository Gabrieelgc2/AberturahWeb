import { Link } from "@tanstack/react-router";
import { MessageCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/config/site";
import { useTranslation } from "react-i18next";

export function CTA() {
  const { t } = useTranslation();
  return (
    <section className="bg-background pb-24 pt-8 sm:pb-32">
      <div className="container mx-auto max-w-7xl px-6">
        <div
          className="RevealText relative rounded-3xl p-10 sm:p-16"
          style={{ background: "#414042" }}
        >
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 24px, oklch(1 0 0 / 0.4) 24px, oklch(1 0 0 / 0.4) 25px)",
            }}
          />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="RevealText font-serif text-4xl font-bold leading-[1.05] text-[color:var(--brand-foreground)] sm:text-5xl">
                {t("cta.title.line1")}
                <br />
                <span className="font-serif RevealText italic">{t("cta.title.line2")}</span>
              </h2>
              <p className="font-sans RevealText mt-5 max-w-md text-lg leading-relaxed text-[#D9D9D9]">
                {t("cta.description")}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-semibold text-background transition-transform hover:scale-105 text-sans"
              >
                <MessageCircle className="h-4 w-4" />
                {t("cta.whatsapp")}
              </a>
              <Link
                to="/contato"
                className="text-sans inline-flex items-center justify-center gap-2 rounded-full border-2 border-[color:var(--brand-foreground)] px-7 py-4 text-sm font-semibold text-[color:var(--brand-foreground)] transition-colors hover:bg-[color:var(--brand-foreground)] hover:text-[color:var(--brand)]"
              >
                {t("cta.contactPage")}
                <ArrowRight className="RevealText h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
