import { useParallax } from "@/hooks/use-parallax";

interface Props {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

/**
 * Parallax — declarative wrapper that applies a vertical translate
 * based on scroll position. Keeps parallax logic out of feature components.
 */
export function Parallax({ children, speed = 0.3, className }: Props) {
  const { ref, offset } = useParallax<HTMLDivElement>(speed);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translate3d(0, ${offset}px, 0)`,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}