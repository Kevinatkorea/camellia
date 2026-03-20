export const SARAJOO_EASE = [0.16, 1, 0.3, 1] as const;

export const DURATION = {
  quick: 0.3,
  standard: 0.8,
  slow: 1.2,
} as const;

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: DURATION.standard, ease: SARAJOO_EASE },
};

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: DURATION.standard, ease: SARAJOO_EASE },
};

export const staggerContainer = {
  initial: {},
  whileInView: {},
  viewport: { once: true },
  transition: {
    staggerChildren: 0.15,
    delayChildren: 0.1,
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: DURATION.standard, ease: SARAJOO_EASE },
};
