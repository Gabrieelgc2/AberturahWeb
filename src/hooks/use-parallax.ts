import { useEffect, useRef, useState } from "react";

/**
 * useParallax — returns a ref and an offset (in px) calculated from
 * the element's position relative to the viewport center.
 *
 * Single responsibility: expose a vertical parallax offset.
 * Consumers decide how to apply it (translateY, background-position, etc.).
 */
export function useParallax<T extends HTMLElement>(speed = 0.3) {
  const ref = useRef<T | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let frame = 0;
    const update = () => {
      const rect = node.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      setOffset((elementCenter - viewportCenter) * -speed);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [speed]);

  return { ref, offset };
}