"use client";

import * as m from "framer-motion/m";
import { useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export default function ParallaxImage({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 768px)").matches);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const disableParallax = shouldReduceMotion || isMobile;

  if (hasError) {
    return (
      <div
        ref={ref}
        className={`bg-gradient-to-br from-brand-cream to-brand-beige ${className || ""}`}
      />
    );
  }

  return (
    <div ref={ref} className={`overflow-hidden ${className || ""}`}>
      <m.div
        style={disableParallax ? {} : { y }}
        className={`${disableParallax ? "h-full" : "h-[120%]"} w-full relative`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="object-cover"
          priority={priority}
          onError={() => setHasError(true)}
        />
      </m.div>
    </div>
  );
}
