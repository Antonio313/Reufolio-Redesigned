import { getLenis } from '../hooks/useLenis';

export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(element);
  } else {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Instant jump to top, synced with Lenis's internal scroll state so it
// doesn't get fought or desynced on the next scroll/wheel interaction.
export const scrollToTop = () => {
  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(0, { immediate: true });
  } else {
    window.scrollTo(0, 0);
  }
};
