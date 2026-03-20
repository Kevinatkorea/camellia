"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

export default function CamelliaStory() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8">
        {/* Text */}
        <AnimatedSection className="mb-16 text-center md:text-left">
          <h3 className="font-serif font-light italic text-2xl md:text-4xl tracking-serif-wide text-brand-dark leading-heading mb-6">
            동백, 겨울에 피는 꽃.
          </h3>
          <p className="font-sans text-base leading-body-kr text-brand-body max-w-2xl">
            차가움과 따뜻함 사이에서 아름다움을 찾습니다.
          </p>
        </AnimatedSection>

        {/* Image juxtaposition — asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6">
          <AnimatedSection>
            <div className="aspect-[4/5] bg-gradient-to-br from-brand-beige to-brand-cream rounded-sm" />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="aspect-[4/5] bg-gradient-to-br from-brand-cream to-brand-taupe/20 rounded-sm" />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
