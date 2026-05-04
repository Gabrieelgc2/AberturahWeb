import { animate, splitText, stagger } from 'animejs';

export const startTitleAnimation = (target: HTMLElement | null) => {
  if (!target) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  // 1. Aplica o Split
  const split = splitText(target, {
    chars: { wrap: true },
  });

  // 2. Executa a Animação
  animate(split.chars, {
  y: ['100%', '0%'],
  duration: 750,
  ease: 'out(3)',
  delay: stagger(50),
  loop: false,

  });

  // Retornamos o objeto split para podermos usar o .revert() depois
  return split;
};