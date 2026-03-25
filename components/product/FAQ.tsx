"use client";

import Accordion from "@/components/ui/Accordion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import TextReveal from "@/components/ui/TextReveal";
import { FAQ_ITEMS } from "@/lib/data/faq";

export default function FAQ() {
  return (
    <section className="max-w-screen-lg mx-auto px-6 md:px-8">
      {/* Heading */}
      <div className="text-center mb-12 md:mb-16">
        <TextReveal>
          <h2 className="font-serif font-light text-2xl md:text-4xl tracking-serif-wide text-brand-dark leading-heading">
            자주 묻는 질문
          </h2>
        </TextReveal>
      </div>

      {/* Accordion */}
      <AnimatedSection>
        <Accordion items={FAQ_ITEMS} />
      </AnimatedSection>

      {/* Bottom links */}
      <AnimatedSection delay={0.2} className="text-center mt-12 md:mt-16 space-y-4">
        <p className="font-sans text-sm text-brand-muted">
          여전히 궁금한 점이 있으신가요?
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* 카카오 채널 준비 중
          <a
            href="https://pf.kakao.com/PLACEHOLDER"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-brand-gold hover:text-brand-dark transition-colors underline underline-offset-4 decoration-brand-gold"
          >
            카카오 채널에서 상담하기
          </a>
          <span className="hidden sm:inline text-brand-taupe/30">|</span>
          */}
          <a
            href="#social-proof"
            className="font-sans text-sm text-brand-body hover:text-brand-gold transition-colors underline underline-offset-4 decoration-brand-taupe/30"
          >
            다른 후기 더 보기
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
}
