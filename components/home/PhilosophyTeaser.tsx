"use client";

import Image from "next/image";
import * as m from "framer-motion/m";
import TextReveal from "@/components/ui/TextReveal";
import { SARAJOO_EASE, DURATION } from "@/lib/motion";

const WORDS = [
  { text: "BODY", indent: "ml-0" },
  { text: "MIND", indent: "ml-0 md:ml-12" },
  { text: "SOUL", indent: "ml-0 md:ml-24" },
];

export default function PhilosophyTeaser() {
  return (
    <section className="relative overflow-hidden">
      {/* Background placeholder with gradient overlay */}
      <Image src="/images/story/philosophy-bms.webp" alt="" fill className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-cream/90 via-brand-cream/60 to-brand-cream/30" />

      {/* Content */}
      <div className="relative max-w-screen-xl mx-auto px-6 md:px-8 py-20 md:py-32">
        {/* BODY / MIND / SOUL staggered */}
        <div className="space-y-4 md:space-y-6">
          {WORDS.map((word, i) => (
            <div key={word.text} className={word.indent}>
              <TextReveal delay={i * 0.3}>
                <span className="font-serif font-light text-4xl md:text-7xl lg:text-9xl tracking-serif-wide text-brand-dark leading-heading block">
                  {word.text}
                </span>
              </TextReveal>
            </div>
          ))}
        </div>

        {/* Bottom copy */}
        <m.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: DURATION.standard, ease: SARAJOO_EASE, delay: 1 }}
          className="font-sans text-brand-body leading-body-kr mt-12 md:mt-16 max-w-md"
        >
          진정한 아름다움은 안팎의 조화에서 시작됩니다.
        </m.p>
      </div>
    </section>
  );
}
