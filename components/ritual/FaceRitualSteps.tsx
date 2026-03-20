"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

const stepImages = [
  "/images/ritual/daily-ritual.webp",
  "/images/ritual/face-ritual.webp",
  "/images/ritual/leg-foot.webp",
];

const steps = [
  {
    number: "01",
    text: "세안 후 에센스 도포",
  },
  {
    number: "02",
    text: "괄사를 턱 라인→관자놀이 방향으로 슬라이드",
  },
  {
    number: "03",
    text: "이마, 눈 주변을 부드럽게 마사지",
  },
];

export default function FaceRitualSteps() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8">
        <AnimatedSection>
          <p className="font-display text-xs tracking-label uppercase text-brand-muted mb-2 text-center">
            Face Ritual
          </p>
          <h3 className="font-serif font-light text-2xl md:text-4xl tracking-serif-wide text-brand-dark leading-heading mb-16 text-center">
            페이스 리추얼 스텝
          </h3>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {steps.map((step, index) => (
            <AnimatedSection key={step.number} delay={index * 0.15}>
              <div className="flex flex-col items-center text-center">
                <span className="font-mono font-thin text-4xl text-brand-gold mb-6">
                  {step.number}
                </span>
                <p className="font-sans text-base leading-body-kr text-brand-body mb-6">
                  {step.text}
                </p>
                <div className="aspect-[4/3] w-full relative rounded-sm overflow-hidden">
                  <Image src={stepImages[index]} alt={step.text} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
