"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import * as m from "framer-motion/m";
import { AnimatePresence } from "framer-motion";
import TextReveal from "@/components/ui/TextReveal";
import { SARAJOO_EASE, DURATION } from "@/lib/motion";
import { imgSrc } from "@/lib/image-path";

const BADGES = ["특허출원", "무독성", "핸드크래프트"];

const HERO_IMAGES = [
  imgSrc("/images/product/hero-model-1.png"),
  imgSrc("/images/product/hero-model-2.png"),
  imgSrc("/images/product/hero-model-3.png"),
];

export default function ProductHero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % HERO_IMAGES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Base image */}
      <Image
        src={HERO_IMAGES[0]}
        alt="SARAJOO 까멜리아 도자기 괄사"
        fill
        className="object-cover"
        priority
      />

      {/* Animated overlay images */}
      <AnimatePresence>
        {current !== 0 && (
          <m.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 z-[1]"
          >
            <Image
              src={HERO_IMAGES[current]}
              alt="SARAJOO 까멜리아 도자기 괄사"
              fill
              className="object-cover"
            />
          </m.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/80 to-brand-cream/60 z-[2]" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <TextReveal>
          <h1 className="font-serif-kr font-light text-3xl md:text-5xl lg:text-6xl tracking-serif-wide text-brand-dark leading-heading">
            아침마다 거울 속 부은 얼굴, 이제 5분이면 달라집니다.
          </h1>
        </TextReveal>

        <m.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: DURATION.standard, ease: SARAJOO_EASE, delay: 0.3 }}
          className="font-sans text-base md:text-lg text-brand-muted mt-6 md:mt-8"
        >
          SARAJOO 까멜리아 도자기 괄사{" "}
          <span className="text-brand-gold">[핫 &amp; 쿨]</span>
        </m.p>
      </div>

      {/* Trust Badges */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: DURATION.standard, ease: SARAJOO_EASE, delay: 0.6 }}
        className="relative z-10 absolute bottom-12 left-0 right-0 flex items-center justify-center gap-4 md:gap-6"
      >
        {BADGES.map((badge) => (
          <span
            key={badge}
            className="font-sans text-xs text-brand-muted/70 tracking-wide"
          >
            {badge}
          </span>
        ))}
      </m.div>
    </section>
  );
}
