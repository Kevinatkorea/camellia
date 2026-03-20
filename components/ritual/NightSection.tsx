"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

export default function NightSection() {
  return (
    <section className="bg-gradient-hot py-20 md:py-32">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10 md:gap-16 items-center">
          {/* Image placeholder — left 60% */}
          <AnimatedSection className="order-2 md:order-1">
            <div className="aspect-[4/5] bg-gradient-to-br from-brand-cream to-brand-beige rounded-sm" />
          </AnimatedSection>

          {/* Text — right 40% */}
          <AnimatedSection delay={0.2} className="order-1 md:order-2">
            <div>
              <p className="font-display text-xs tracking-label uppercase text-brand-muted mb-4">
                Night Ritual
              </p>
              <h3 className="font-serif font-light text-2xl md:text-4xl tracking-serif-wide text-brand-dark leading-heading mb-6">
                밤을 다독이는
                <br />
                따뜻한 위로
              </h3>
              <p className="font-sans text-base leading-body-kr text-brand-body">
                HOT 괄사를 전자레인지 30초 가열 후 사용합니다. 근육의 긴장을
                녹이고 스킨케어 흡수를 돕습니다.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
