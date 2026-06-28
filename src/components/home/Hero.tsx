import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import heroVideo from "../../assets/videos/Hero-Video-Compressaos.webm";

import { WHATSAPP_URL } from "@/config/site";
import SplittingText from "../animations/animations";

export function Hero() {
  const { t } = useTranslation("hero");

  const sectionRef = useRef<HTMLElement>(null);
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
  PLAY / PAUSE QUANDO ENTRA NA TELA
  ========================================
  */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!videoRef.current) return;

        if (entry.isIntersecting) {
          videoRef.current.play().catch(() => {});
        } else {
          videoRef.current.pause();
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        isolate
        overflow-hidden
        pb-20
        pt-60
        sm:pb-40
        sm:pt-48
      "
    >
      {/* VIDEO BACKGROUND */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        className="
          pointer-events-none
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
      >
        {/* MOBILE VIDEO MAIS LEVE */}
        <source
          src={heroVideo}
          type="video/webm"
        />
      </video>

      {/* OVERLAY */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.12 0.01 50 / 0.78) 0%, oklch(0.12 0.01 50 / 0.58) 15%, oklch(0.12 0.01 50 / 0.88) 100%)",
        }}
      />

      {/* CONTENT */}
      <div className="container relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">

          {/* TITLE */}
          <h1
            className="
              text-white
              font-sans
              font-normal
              text-3xl
              leading-tight
              tracking-normal
              sm:text-5xl
              sm:leading-[1.1]
            "
          >
            <SplittingText
              text={t("title.line1")}
            />

            <br />

            <SplittingText
              text={t("title.line2")}
              delay={1200}
            />
            <br />
              <SplittingText
              text={t("title.line3")}
              delay={2000}
            />
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              leading-relaxed
              text-white
              sm:text-xl
              font-sans
              font-normal
            "
          >
            {t("description")}
          </p>

          {/* BUTTON */}
          <div
            className="
              mt-10
              flex
              flex-col
              items-center
              justify-center
              gap-4
              sm:flex-row
            "
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-full
                px-7
                py-4
                text-sm
                text-[color:var(--brand-foreground)]
                shadow-[var(--shadow-brand)]
                transition-transform
                hover:scale-105
                font-sans
              "
              style={{
                background: "var(--gradient-brand)",
              }}
            >
              {t("button")}

              <ArrowRight
                className="
                  h-4
                  w-4
                  transition-transform
                  group-hover:translate-x-1
                "
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}