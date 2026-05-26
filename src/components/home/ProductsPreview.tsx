import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "../../components/SectionHeading";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

import portavideo from "../../assets/portavideo.mp4";
import revestimento from "../../assets/revestimento.mp4";
import brises from "../../assets/brises.mp4";
import pergolados from "../../assets/pergolados.mp4";

export function ProductsPreview() {
  const { t } = useTranslation();

  const categories = [
    {
      key: "solid",
      video: portavideo,
    },
    {
      key: "wood",
      video: revestimento,
    },
    {
      key: "matte",
      video: brises,
    },
    {
      key: "satin",
      video: pergolados,
    },
  ];

  return (
    <section className="bg-[#D9D9D9]/30 py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-10">

        {/* HEADER */}
        <div className="RevealText flex flex-col items-center gap-8 sm:flex-row justify-between sm:items-end">
          <SectionHeading
            align="left"
            eyebrow={t("productsPreview.badge")}
            title={
              <>
                <span className="font-serif">
                  {t("productsPreview.title.line1")}
                </span>

                <br />

                <span className="font-normal text-[#404142] font-serif">
                  {t("productsPreview.title.line2")}
                </span>
              </>
            }
          />

          <Link
            to="/produtos"
            className="
              font-sans
              RevealText
              -ml-10
              active:scale-95
              active:bg-foreground
              active:text-background
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-foreground
              px-5
              py-3
              text-sm
              text-foreground
              transition-colors
              hover:bg-foreground
              hover:text-background
            "
          >
            {t("productsPreview.button")}

            <ArrowUpRight
              className="
                RevealText
                h-4
                w-4
                transition-transform
                group-hover:rotate-45
              "
            />
          </Link>
        </div>

        {/* GRID */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 RevealImage">
          {categories.map((c) => (
            <ProductCard
              key={c.key}
              video={c.video}
              title={t(`productsPreview.categories.${c.key}.name`)}
              description={t(`productsPreview.categories.${c.key}.description`)}
              explore={t("productsPreview.explore")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

type ProductCardProps = {
  video: string;
  title: string;
  description: string;
  explore: string;
};

function ProductCard({
  video,
  title,
  description,
  explore,
}: ProductCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnter = async () => {
    if (window.innerWidth < 768) return;

    try {
      await videoRef.current?.play();
    } catch (err) {
      console.log(err);
    }
  };

  const handleLeave = () => {
    if (!videoRef.current) return;

    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <Link
      to="/produtos"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="
        group
        relative
        aspect-[3/4]
        overflow-hidden
        rounded-3xl
      "
    >
      {/* VIDEO */}
      <video
        ref={videoRef}
        src={video}
        muted
        loop
        playsInline
        preload="metadata"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-[center_80%]
          transition-transform
          duration-700
          group-hover:scale-120
        "
      />

      {/* OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/85
          via-black/20
          to-transparent
        "
      />

      {/* CONTENT */}
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <h3 className="font-serif text-2xl">
          {title}
        </h3>

        <p className="mt-2 text-sm text-[#D9D9D9] font-sans leading-relaxed">
          {description}
        </p>

        <div
          className="
            mt-4
            inline-flex
            items-center
            gap-1.5
            text-xs
            uppercase
            tracking-widest
            text-[#D9D9D9]
            font-sans
          "
        >
          {explore}

          <ArrowUpRight
            className="
              h-3.5
              w-3.5
              transition-transform
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />
        </div>
      </div>
    </Link>
  );
}