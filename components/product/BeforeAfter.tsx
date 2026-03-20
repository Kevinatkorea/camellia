"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

export default function BeforeAfter() {
  return (
    <section className="max-w-screen-xl mx-auto px-6 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Before */}
        <AnimatedSection>
          <div className="border border-brand-taupe/20 bg-brand-beige p-8 md:p-12">
            <p className="font-display font-light text-xs tracking-label uppercase text-brand-muted mb-4">
              Before
            </p>
            <p className="font-sans text-lg md:text-xl text-brand-dark leading-body-kr">
              매일 아침 반복되는
              <br />
              붓기와 피로한 인상
            </p>
          </div>
        </AnimatedSection>

        {/* After */}
        <AnimatedSection delay={0.15}>
          <div className="border border-brand-taupe/20 bg-white p-8 md:p-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-brand-gold text-sm">&#10003;</span>
              <p className="font-display font-light text-xs tracking-label uppercase text-brand-gold">
                After
              </p>
            </div>
            <p className="font-sans text-lg md:text-xl text-brand-dark leading-body-kr">
              5분 리추얼 후,
              <br />
              선명해진 라인과 환한 표정
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
