import { useRef, useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

type ProductCardProps = {
  video: string;
  title: string;
  description: string;
  explore: string;
  poster: string;
};

export function ProductCard({ video, title, description, explore, poster }: ProductCardProps) {

  const cardRef = useRef<HTMLAnchorElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detecta mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Autoplay no Mobile ao entrar no Viewport
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
      { threshold: 0.6 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [isMobile]);

  // Controles de Hover no Desktop
  const handleEnter = async () => {
    if (isMobile) return;
    try {
      await videoRef.current?.play();
    } catch (err) {
      console.log(err);
    }
  };

  // Se o mouse sair do card, pausa e reseta o vídeo
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
      className="group relative aspect-[3/4] overflow-hidden rounded-3xl block"
    >
      {/* VÍDEO DE FUNDO */}
      <video
        ref={videoRef}
        src={video}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover object-[center_80%] transition-transform duration-700 group-hover:scale-110"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />

      {/* CONTEÚDO */}
      <div className="absolute inset-0 z-10 p-6 text-white flex flex-col justify-end">
        <h3 className="font-serif text-2xl leading-none">{title}</h3>

        <p className="mt-2 min-h-23.75 text-sm text-[#D9D9D9] font-sans leading-relaxed">
          {description}
        </p>

        <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#D9D9D9] font-sans">
          {explore}
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </Link>
  );
}