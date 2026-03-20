"use client";

import * as m from "framer-motion/m";
import TextReveal from "@/components/ui/TextReveal";
import { SARAJOO_EASE, DURATION } from "@/lib/motion";

interface ComparisonCard {
  name: string;
  temperature: string;
  irritation: string;
  hygiene: string;
  aesthetics: string;
  isSarajoo?: boolean;
}

const CARDS: ComparisonCard[] = [
  {
    name: "SARAJOO\n까멜리아 도자기",
    temperature: "48시간 이상 유지",
    irritation: "거의 없음",
    hygiene: "비다공성 · 세균 번식 차단",
    aesthetics: "아티스트 핸드메이드 오브제",
    isSarajoo: true,
  },
  {
    name: "실리콘",
    temperature: "빠르게 소실",
    irritation: "중간",
    hygiene: "미세 기공 · 세균 번식 가능",
    aesthetics: "일반적",
  },
  {
    name: "스테인리스",
    temperature: "빠르게 소실",
    irritation: "금속 알레르기 가능",
    hygiene: "양호",
    aesthetics: "산업적 느낌",
  },
  {
    name: "옥",
    temperature: "보통",
    irritation: "적음",
    hygiene: "다공성 · 관리 필요",
    aesthetics: "전통적",
  },
];

const COMPARISON_LABELS = ["온도 유지", "피부 자극", "위생", "심미성"];

export default function WhyCeramic() {
  return (
    <section className="max-w-screen-xl mx-auto px-6 md:px-8">
      {/* Headline */}
      <div className="text-center mb-12 md:mb-16">
        <TextReveal>
          <h2 className="font-serif font-light italic text-2xl md:text-4xl lg:text-5xl tracking-serif-wide text-brand-dark leading-heading">
            도자기만이 할 수 있는 것들이 있습니다.
          </h2>
        </TextReveal>
      </div>

      {/* Cards — horizontal scroll on mobile, grid on desktop */}
      <div className="md:grid md:grid-cols-4 md:gap-6 flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:pb-0 snap-x snap-mandatory md:snap-none">
        {CARDS.map((card, index) => (
          <m.div
            key={card.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: DURATION.standard,
              ease: SARAJOO_EASE,
              delay: index * 0.1,
            }}
            className={`flex-shrink-0 w-[280px] md:w-auto snap-start p-6 md:p-8 ${
              card.isSarajoo
                ? "border-2 border-brand-gold bg-gradient-to-br from-white to-brand-cream"
                : "border border-gray-300 bg-white"
            }`}
          >
            {/* Card name */}
            <p
              className={`font-sans font-medium text-sm whitespace-pre-line mb-6 ${
                card.isSarajoo ? "text-brand-gold" : "text-brand-muted"
              }`}
            >
              {card.name}
            </p>

            {/* Comparison items */}
            <div className="space-y-5">
              {[card.temperature, card.irritation, card.hygiene, card.aesthetics].map(
                (value, i) => (
                  <div key={COMPARISON_LABELS[i]}>
                    <p className="font-display font-light text-[10px] tracking-label uppercase text-brand-muted mb-1">
                      {COMPARISON_LABELS[i]}
                    </p>
                    <p
                      className={`font-sans text-sm leading-body-kr ${
                        card.isSarajoo ? "text-brand-dark" : "text-brand-body"
                      }`}
                    >
                      {value}
                    </p>
                  </div>
                )
              )}
            </div>
          </m.div>
        ))}
      </div>
    </section>
  );
}
