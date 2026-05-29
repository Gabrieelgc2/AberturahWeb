import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "../../components/SectionHeading";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";

import portavideo from "../../assets/videos/portavideo.webm";
import revestimento from "../../assets/videos/revestimento.webm";
import brises from "../../assets/videos/brises.webm";
import pergolados from "../../assets/videos/pergolados.webm";

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
        <div
          className="
            RevealText
            flex
            flex-col
            items-start
            gap-8
            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >
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
  const cardRef = useRef<HTMLAnchorElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isMobile, setIsMobile] = useState(false);

  /*
  ========================================
  DETECTA MOBILE
  ========================================
  */
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  /*
  ========================================
  MOBILE:
  PLAY QUANDO APARECE
  ========================================
  */
  useEffect(() => {
    if (!isMobile) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!videoRef.current) return;

        if (entry.isIntersecting) {
          videoRef.current.play().catch(() => {});
        } else {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      },
      {
        threshold: 0.6,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isMobile]);

  /*
  ========================================
  DESKTOP HOVER
  ========================================
  */
  const handleEnter = async () => {
    if (isMobile) return;

    try {
      await videoRef.current?.play();
    } catch (err) {
      console.log(err);
    }
  };

  const handleLeave = () => {
    if (!videoRef.current || isMobile) return;

    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <Link
      ref={cardRef}
      to="/acabamentos"
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
        poster=""
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-[center_80%]
          transition-transform
          duration-700
          group-hover:scale-110
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
      <div className="absolute inset-0 z-10 p-6 text-white flex flex-col min-h-[110px] justify-end">
        <h3 className="font-serif text-2xl leading-none">
          {title}
        </h3>

        <p
          className="
            mt-2
            text-sm
            text-[#D9D9D9]
            font-sans
            leading-relaxed
            max-w-[260px]
          "
        >
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