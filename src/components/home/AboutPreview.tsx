import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { CSSProperties } from "react";
import { SectionHeading } from "../../components/SectionHeading";
import AberturahCasa from "../../assets/image.webp";
import { useTranslation } from "react-i18next";

export function AboutPreview() {
  const { t } = useTranslation();
  return (
    <section
      className="relative py-24 sm:py-32"
      style={{ background: "#414042" }}
    >
      <div 
      className="pointer-events-none absolute inset-0 opacity-[0.05]"
      style={{
           
            backgroundImage:
            "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
            backgroundSize: "60px 60px"}}/>

      <div className="container mx-auto max-w-7xl px-6">
        <div className="RevealText grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow={t("aboutPreview.badge")}
              eyebrowClassName="text-[#D9D9D9]"
              title={
                <>
                <span className="text-[#D9D9D9] font-serif">
                  {t("aboutPreview.title.line1")}
                  </span><br />
                  <span className="italic text-[#D9D9D9] font-serif">{t("aboutPreview.title.line2")}</span>
                </>
              }
            />
            <p className="RevealText mt-6 text-lg leading-relaxed text-[#D9D9D9] font-sans">
              {t("aboutPreview.description")}
            </p>
            <Link
              to="/sobre"
              className="RevealText mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[color:#D9D9D9] underline-offset-4 hover:underline font-sans"
            >
              {t("aboutPreview.button")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
                <div
                  className="RevealImage h-[120%] w-full"
                  style={{
                    backgroundImage: `url(${AberturahCasa})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    ["--range-lg"]: "entry 30% cover 50%",
                  } as CSSProperties & Record<"--range-lg", string>}
                />
            </div>
            <div
              className="absolute -bottom-6 -right-6 max-w-[260px] rounded-2xl bg-background p-6 shadow-[var(--shadow-card)]"
            >
              <div
                className="RevealText font-sans text-5xl font-bold leading-none"
                style={{
                  background: "var(--gradient-brand)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                100%
              </div>
              <p className="RevealText mt-2 text-sm text-[#404142] font-sans">
                {t("aboutPreview.highlight.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
