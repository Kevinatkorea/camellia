"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import CTAButton from "@/components/ui/CTAButton";
import { SHOP_URL } from "@/lib/constants";

export default function RitualCTA() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8 text-center">
        <AnimatedSection>
          <p className="font-sans font-medium text-xl md:text-2xl text-brand-dark mb-10">
            5분이면 충분합니다. 나만의 리추얼을 시작하세요.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <CTAButton href={SHOP_URL} variant="primary" external>
              나만의 리추얼 시작하기
            </CTAButton>
            <CTAButton href="/product" variant="outline">
              제품 상세 보기 →
            </CTAButton>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
