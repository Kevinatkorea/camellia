"use client";

import TextReveal from "@/components/ui/TextReveal";
import CTAButton from "@/components/ui/CTAButton";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { SHOP_URL } from "@/lib/constants";

export default function ProductCTA() {
  return (
    <section className="max-w-screen-xl mx-auto px-6 md:px-8 text-center">
      {/* Copy */}
      <TextReveal className="mb-6">
        <h2 className="font-serif font-light text-2xl md:text-4xl lg:text-5xl tracking-serif-wide text-brand-dark leading-heading">
          당신의 스킨케어가 이 괄사를 만나면 완성됩니다.
        </h2>
      </TextReveal>

      {/* Price */}
      <AnimatedSection delay={0.2} className="mb-10">
        <p className="font-sans text-base md:text-lg text-brand-body">
          <span className="font-medium text-brand-dark">79,000원</span>
          <span className="text-brand-muted mx-2">&middot;</span>
          핫 &amp; 쿨 1쌍 세트
          <span className="text-brand-muted mx-2">&middot;</span>
          무료 배송
        </p>
      </AnimatedSection>

      {/* CTA Buttons */}
      <AnimatedSection delay={0.35} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
        <CTAButton href={SHOP_URL} variant="primary" external>
          지금 만나보기
        </CTAButton>
        <CTAButton href={SHOP_URL} variant="secondary" external>
          선물하기
        </CTAButton>
      </AnimatedSection>

      <AnimatedSection delay={0.5}>
        <CTAButton href="/ritual" variant="outline">
          5분 사용법 먼저 확인해보세요 &rarr;
        </CTAButton>
      </AnimatedSection>
    </section>
  );
}
