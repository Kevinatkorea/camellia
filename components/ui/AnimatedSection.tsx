"use client";

import * as m from "framer-motion/m";
import { useReducedMotion } from "framer-motion";
import { SARAJOO_EASE, DURATION } from "@/lib/motion";

export default function AnimatedSection({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <section className={className}>{children}</section>;
  }

  return (
    <m.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: DURATION.standard, ease: SARAJOO_EASE, delay }}
      className={className}
    >
      {children}
    </m.section>
  );
}
