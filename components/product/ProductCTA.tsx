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
        <h2 className="font-serif-kr font-light text-2xl md:text-4xl lg:text-5xl tracking-serif-wide text-brand-dark leading-heading">
          당신의 스킨케어가 이 괄사를 만나면 완성됩니다.
        </h2>
      </TextReveal>

      {/* Price */}
      <AnimatedSection delay={0.2} className="mb-10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          {/* 단품 */}
          <div className="text-center">
            <p className="font-display text-xs tracking-label uppercase text-brand-muted mb-1">단품</p>
            <p className="font-sans text-brand-body">
              <span className="line-through text-brand-muted text-sm">65,000원</span>
              <span className="font-medium text-brand-dark text-lg ml-2">52,000원</span>
            </p>
            <p className="font-sans text-xs text-brand-gold mt-1">20% OFF</p>
          </div>
          {/* 핫앤쿨 세트 */}
          <div className="text-center border border-brand-gold/30 px-6 py-3">
            <p className="font-display text-xs tracking-label uppercase text-brand-gold mb-1">핫 &amp; 쿨 세트</p>
            <p className="font-sans text-brand-body">
              <span className="line-through text-brand-muted text-sm">130,000원</span>
              <span className="font-medium text-brand-dark text-lg ml-2">91,000원</span>
            </p>
            <p className="font-sans text-xs text-brand-gold mt-1">30% OFF · 무료 배송</p>
          </div>
        </div>
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
