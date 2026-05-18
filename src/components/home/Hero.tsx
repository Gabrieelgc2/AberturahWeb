import { ArrowRight } from "lucide-react";
import heroImage from "../../assets/hero-facade.webp";
import { WHATSAPP_URL } from "@/config/site";
import SplittingText from "../animations/animations";
import { useTranslation } from "react-i18next";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section
      className="relative isolate overflow-hidden pb-20 pt-60 sm:pb-40 sm:pt-48"
    >
      {/* Parallax background image */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Dark overlay for legibility */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.12 0.01 50 / 0.75) 0%, oklch(0.12 0.01 50 / 0.55) 10%, oklch(0.12 0.01 50 / 0.85) 100%)",
        }}
      />

      <div className="container relative mx-auto max-w-7xl px-6">
         <div
          className="mx-auto max-w-4xl text-center"
          >

          <h1 className="text-white font-serif text-4xl font-bold leading-[1.1] tracking-normal sm:text-7xl">
          <SplittingText text={t("hero.title.line1")}
          delay={450}  />
          <br></br>
          <SplittingText text={t("hero.title.line2")}  
          delay={1200}
          />
         </h1>

          <p className="mx-auto mt-8 max-w-2xl leading-relaxed text-[color:white] sm:text-xl font-serif">
          {t("hero.description")}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-[color:var(--brand-foreground)] shadow-[var(--shadow-brand)] transition-transform hover:scale-105 font-sans"
              style={{ background: "var(--gradient-brand)" }}
            >
              {t("hero.button")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
        </div>
    </section>
  );
}
