import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SectionHeading } from "../../components/SectionHeading";
import { ProductCard } from "./ProductCard/ProductCard";

import { PRODUCT_CATEGORIES } from "./ProductCard/CardConstants";

export function ProductsPreview() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#D9D9D9]/30 py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-10">
        
        {/* HEADER */}
        <div className="RevealText flex flex-col items-start gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            align="left"
            eyebrow={t("productsPreview.badge")}
            title={
              <>
                <span className="font-serif">{t("productsPreview.title.line1")}</span>
                <br />
                <span className="font-normal text-[#404142] font-serif">
                  {t("productsPreview.title.line2")}
                </span>
              </>
            }
          />

          <Link
            to="/acabamentos"
            className="group font-sans RevealText inline-flex items-center gap-2 rounded-full border border-foreground px-5 py-3 text-sm text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            {t("productsPreview.button")}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </Link>
        </div>

        {/* GRID DE PRODUTOS */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 RevealImage">
          {PRODUCT_CATEGORIES.map((category) => (
            <ProductCard
              key={category.key}
              video={category.video}
              poster={category.poster}
              title={t(`productsPreview.categories.${category.key}.name`)}
              description={t(`productsPreview.categories.${category.key}.description`)}
              explore={t("productsPreview.explore")}
            />
          ))}
        </div>

      </div>
    </section>
  );
}