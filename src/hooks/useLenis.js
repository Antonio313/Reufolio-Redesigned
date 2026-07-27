import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { useReducedMotion } from 'framer-motion';

let activeLenis = null;

export const getLenis = () => activeLenis;

export const useLenis = () => {
  const prefersReducedMotion = useReducedMotion();
  const rafRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    activeLenis = lenis;

    const raf = (time) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };
    rafRef.current = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafRef.current);
      lenis.destroy();
      activeLenis = null;
    };
  }, [prefersReducedMotion]);
};
