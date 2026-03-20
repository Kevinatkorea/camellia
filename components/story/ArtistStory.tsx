"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ArtistStory() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8">
        <div className="mb-16">
          <SectionHeading
            en="아티스트의 손끝에서 태어난 조형의 미"
            align="left"
          />
        </div>

        {/* Block 1: Image left 60% + Text right 40% */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10 md:gap-16 items-center mb-20 md:mb-32">
          <AnimatedSection>
            <div className="aspect-[4/5] bg-gradient-to-br from-brand-beige to-brand-cream rounded-sm" />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="font-sans text-base leading-body-kr text-brand-body">
              이 괄사는 단순한 도구를 넘어, 아티스트의 조형 언어가 깃든 뷰티
              오브제입니다.
            </p>
          </AnimatedSection>
        </div>

        {/* Block 2: Text left 40% + Image right 60% (reversed) */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-10 md:gap-16 items-center">
          <AnimatedSection className="order-2 md:order-1">
            <p className="font-sans text-base leading-body-kr text-brand-body">
              한국 전통 도예 기법으로, 하나하나 정성을 담아 빚어냅니다.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="order-1 md:order-2">
            <div className="aspect-[4/5] bg-gradient-to-br from-brand-cream to-brand-beige rounded-sm" />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
