"use client";

import { useState, useCallback } from "react";
import * as m from "framer-motion/m";
import { AnimatePresence } from "framer-motion";
import CountUpNumber from "@/components/ui/CountUpNumber";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { SARAJOO_EASE, DURATION } from "@/lib/motion";

const STATS = [
  {
    target: 1250,
    suffix: "°C",
    label: "고온 소성",
    description: "일반 도자기 1,000°C 대비 250°C 높음",
  },
  {
    target: 100,
    suffix: "%",
    label: "무독성 소재",
  },
  {
    target: 48,
    suffix: "h",
    label: "온도 유지 시간",
  },
];

const REVIEWS = [
  {
    quote: "디자인도 이쁜데 그립감도 좋아서 매일 쓰고 있어요",
    author: "박민**** · ★★★★★",
  },
  {
    quote: "너무 너무 좋네요♥ 감사합니다",
    author: "한혜**** · ★★★★★",
  },
  {
    quote: "공구 또 언제 하나요? 너무 좋아서 선물하고 싶어요",
    author: "박주**** · ★★★★★",
  },
  {
    quote: "시원한 느낌이 기분좋아요. 아침마다 쓰고 있어요",
    author: "김연**** · ★★★★★",
  },
  {
    quote: "열심히 써보고 있어요. 촉감이 매끄럽고 좋습니다",
    author: "신은**** · ★★★★",
  },
];

export default function SocialProof() {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = useCallback(() => {
    setCurrentReview((prev) => (prev + 1) % REVIEWS.length);
  }, []);

  const prevReview = useCallback(() => {
    setCurrentReview((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  }, []);

  return (
    <section className="max-w-screen-xl mx-auto px-6 md:px-8">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-20 md:mb-32">
        {STATS.map((stat) => (
          <CountUpNumber
            key={stat.label}
            target={stat.target}
            suffix={stat.suffix}
            label={stat.label}
            description={stat.description}
          />
        ))}
      </div>

      {/* Review Carousel */}
      <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
        <div className="relative min-h-[160px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <m.div
              key={currentReview}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: DURATION.standard, ease: SARAJOO_EASE }}
              className="text-center"
            >
              <p className="font-serif font-light italic text-xl md:text-2xl text-brand-dark leading-body-kr mb-4">
                &ldquo;{REVIEWS[currentReview].quote}&rdquo;
              </p>
              <p className="font-sans text-sm text-brand-muted">
                &mdash; {REVIEWS[currentReview].author}
              </p>
            </m.div>
          </AnimatePresence>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prevReview}
            className="font-sans text-sm text-brand-muted hover:text-brand-gold transition-colors p-2"
            aria-label="이전 후기"
          >
            &larr;
          </button>
          <div className="flex gap-2">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentReview(i)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === currentReview ? "bg-brand-gold" : "bg-brand-taupe/30"
                }`}
                aria-label={`후기 ${i + 1}번`}
              />
            ))}
          </div>
          <button
            onClick={nextReview}
            className="font-sans text-sm text-brand-muted hover:text-brand-gold transition-colors p-2"
            aria-label="다음 후기"
          >
            &rarr;
          </button>
        </div>
      </AnimatedSection>

      {/* Badges */}
      <AnimatedSection delay={0.2} className="flex flex-wrap items-center justify-center gap-3 mb-16">
        {["1,250°C 고온 소성", "100% 무독성", "아티스트 핸드메이드"].map(
          (badge) => (
            <span
              key={badge}
              className="border border-brand-taupe/30 rounded-full px-4 py-2 font-sans text-xs text-brand-muted"
            >
              {badge}
            </span>
          )
        )}
      </AnimatedSection>

      {/* Kakao Contact */}
      <AnimatedSection delay={0.3} className="text-center">
        <p className="font-sans text-sm text-brand-muted mb-3">
          궁금한 점이 있으신가요?
        </p>
        <a
          href="https://pf.kakao.com/PLACEHOLDER"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-sans text-sm text-brand-gold hover:text-brand-dark transition-colors underline underline-offset-4 decoration-brand-gold"
        >
          카카오 채널에서 상담하기
        </a>
      </AnimatedSection>
    </section>
  );
}
