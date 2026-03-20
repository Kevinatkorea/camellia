"use client";

import Image from "next/image";
import * as m from "framer-motion/m";
import TextReveal from "@/components/ui/TextReveal";
import { SARAJOO_EASE, DURATION } from "@/lib/motion";
import { imgSrc } from "@/lib/image-path";

const BADGES = ["특허출원", "무독성", "핸드크래프트"];

export default function ProductHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      <Image src={imgSrc("/images/product/product-hero.jpg")} alt="" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/80 to-brand-cream/60" />
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
