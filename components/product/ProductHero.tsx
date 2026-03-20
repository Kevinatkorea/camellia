"use client";

import * as m from "framer-motion/m";
import TextReveal from "@/components/ui/TextReveal";
import { SARAJOO_EASE, DURATION } from "@/lib/motion";

const BADGES = ["특허출원", "무독성", "핸드크래프트"];

export default function ProductHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-brand-beige to-brand-cream px-6">
      {/* Content */}
      <div className="text-center max-w-3xl mx-auto">
        <TextReveal>
          <h1 className="font-serif font-light text-3xl md:text-5xl lg:text-6xl tracking-serif-wide text-brand-dark leading-heading">
            아침마다 거울 속 부은 얼굴,
            <br />
            이제 5분이면 달라집니다.
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
        className="absolute bottom-12 left-0 right-0 flex items-center justify-center gap-4 md:gap-6"
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
