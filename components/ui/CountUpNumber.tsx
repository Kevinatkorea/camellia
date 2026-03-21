"use client";

import * as m from "framer-motion/m";
import {
  useInView,
  useMotionValue,
  animate,
  useReducedMotion,
} from "framer-motion";
import { useRef, useEffect, useState, useMemo } from "react";
import { SARAJOO_EASE, DURATION } from "@/lib/motion";

export default function CountUpNumber({
  target,
  suffix = "",
  label,
  description,
}: {
  target: number;
  suffix?: string;
  label: string;
  description?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState("0");

  const formatter = useMemo(
    () => new Intl.NumberFormat("ko-KR"),
    []
  );

  useEffect(() => {
    if (!isInView) return;

    if (shouldReduceMotion) {
      setDisplayValue(formatter.format(target));
      return;
    }

    const unsubscribe = count.on("change", (v) => {
      setDisplayValue(formatter.format(Math.round(v)));
    });

    animate(count, target, {
      duration: 2,
      ease: SARAJOO_EASE,
    });

    return unsubscribe;
  }, [isInView, target, count, shouldReduceMotion, formatter]);

  return (
    <div ref={ref} className="text-center" aria-live="polite">
      <div className="relative inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28">
        <svg className="absolute inset-0" viewBox="0 0 100 100" aria-hidden="true">
          <m.circle
            cx="50"
            cy="50"
            r={46}
            fill="none"
            stroke="#B8986E"
            strokeWidth={1}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: SARAJOO_EASE }}
          />
        </svg>
        <div className="font-mono font-thin text-2xl sm:text-3xl md:text-4xl text-brand-dark tracking-wide">
          <span>{displayValue}</span>
          {suffix}
        </div>
      </div>
      <p className="font-display text-xs tracking-label uppercase text-brand-muted mt-3">
        {label}
      </p>
      {description && (
        <p className="font-sans text-xs text-brand-muted/70 mt-1">
          {description}
        </p>
      )}
    </div>
  );
}
