"use client";

import * as m from "framer-motion/m";
import { useReducedMotion } from "framer-motion";
import { SARAJOO_EASE, DURATION } from "@/lib/motion";

export default function TextReveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={`overflow-hidden ${className || ""}`}>
      <m.div
        initial={{ y: "100%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true }}
        transition={{ duration: DURATION.standard, ease: SARAJOO_EASE, delay }}
      >
        {children}
      </m.div>
    </div>
  );
}
