"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import CTAButton from "@/components/ui/CTAButton";
import { SHOP_URL } from "@/lib/constants";

export default function StoryCTA() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8 text-center">
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <CTAButton href={SHOP_URL} variant="primary" external>
              아티스트의 손끝에서 당신의 일상으로
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
