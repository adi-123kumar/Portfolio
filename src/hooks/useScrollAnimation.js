// Reusable scroll-reveal motion props — spread directly onto a
// framer-motion component: <motion.div {...useScrollAnimation()}>
// `delay` lets you stagger multiple elements in the same section.
export function useScrollAnimation(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, delay },
  };
}