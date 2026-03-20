"use client";

import Image from "next/image";
import * as m from "framer-motion/m";
import TextReveal from "@/components/ui/TextReveal";
import { SARAJOO_EASE, DURATION } from "@/lib/motion";
import { imgSrc } from "@/lib/image-path";

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image src={imgSrc("/images/hero/hero-main.webp")} alt="" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/70 to-brand-dark/50" />
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
