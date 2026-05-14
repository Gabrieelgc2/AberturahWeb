import VanillaTilt from "vanilla-tilt";
import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function TiltCard({ children, className }: Props) {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!tiltRef.current) return;

    VanillaTilt.init(tiltRef.current, {
      max: 8,
      speed: 400,
      glare: true,
      "max-glare": 0.15,
      scale: 1.02,
    });

    return () => {
      (tiltRef.current as any)?.vanillaTilt?.destroy();
    };
  }, []);

  return (
    <div ref={tiltRef} className={className}>
      {children}
    </div>
  );
}