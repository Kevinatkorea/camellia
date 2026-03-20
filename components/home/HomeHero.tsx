"use client";

import * as m from "framer-motion/m";
import TextReveal from "@/components/ui/TextReveal";
import ImageSlider from "@/components/ui/ImageSlider";
import { SARAJOO_EASE, DURATION } from "@/lib/motion";

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <ImageSlider
        images={["/images/hero/hero-main.jpg", "/images/hero/hero-alt-2.jpg", "/images/product/product-showcase.jpg", "/images/product/hands-fabric.jpg"]}
        alt="SARAJOO 까멜리아 도자기 괄사"
        className="absolute inset-0"
        sizes="100vw"
        priority
        interval={5000}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 to-brand-dark/20" />
      {/* Main copy */}
      <div className="relative z-10 text-center px-6">
        <TextReveal>
          <h1 className="font-serif font-light text-3xl md:text-6xl tracking-serif-wide text-white leading-heading">
            하루의 온도를 바꾸는 단 하나의 오브제
          </h1>
        </TextReveal>

        {/* Sub copy */}
        <m.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: DURATION.standard, ease: SARAJOO_EASE, delay: 0.5 }}
          className="font-display text-xs tracking-label uppercase text-white/70 mt-8"
        >
          SARAJOO &middot; INSPIRE BEAUTY
        </m.p>
      </div>

      {/* Scroll indicator */}
      <m.span
        className="absolute bottom-10 font-display text-xs tracking-label uppercase text-white/60"
        animate={{ y: [-5, 5] }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        Discover
      </m.span>
    </section>
  );
}
