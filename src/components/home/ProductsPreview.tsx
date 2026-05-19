import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "../../components/SectionHeading";
import foto1 from "../../assets/Foto1.webp";
import foto2 from "../../assets/Foto2.webp";
import foto3 from "../../assets/Porta fosca.jpeg";
import foto4 from "../../assets/ACM acetinado.jpeg";
import { useTranslation } from "react-i18next";

export function ProductsPreview() {
  const { t } = useTranslation();

  const categories = [
    {
      key: "solid",
      grad: foto1,
    },
    {
      key: "wood",
      grad: foto2,
    },
    {
      key: "matte",
      grad: foto3,
    },
    {
      key: "satin",
      grad: foto4,
    },
  ];
  return (
    <section className="bg-[#D9D9D9]/30 py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-10">
        <div
          className="RevealText flex flex-col items-center gap-8 sm:flex-row justify-between sm:items-end" >
          <SectionHeading
            align="left"
            eyebrow={t("productsPreview.badge")}
            title={
              <>
                <span className="font-serif">{t("productsPreview.title.line1")}</span><br />
                <span className="font-normal text-[#404142] font-serif">
                  {t("productsPreview.title.line2")}
                </span>
              </>
            }
          />
          <Link
            to="/produtos"
            className="font-sans RevealText -ml-10 active:scale-95 active:bg-foreground active:text-background group inline-flex items-center gap-2 rounded-full border border-foreground px-5 py-3 text-sm text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            {t("productsPreview.button")}
            <ArrowUpRight className="RevealText h-4 w-4 transition-transform group-hover:rotate-45" />
          </Link>
        </div>

    <div
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 RevealImage">
          {categories.map((c) => (
            <Link
              key={c.key}
              to="/produtos"
              className="group relative aspect-3/4 overflow-hidden rounded-3xl"
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${c.grad})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              

              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <h3 className="font-serif text-2xl">{t(`productsPreview.categories.${c.key}.name`)}</h3>
                <p className="mt-2 text-sm text-[#D9D9D9] font-sans">{t(`productsPreview.categories.${c.key}.description`)}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-(--brand) font-sans">
                  {t("productsPreview.explore")}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>

            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
