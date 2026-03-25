"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

const processSteps = [
  {
    label: "원료",
    description: "엄선된 도자기 원료를 배합합니다.",
  },
  {
    label: "성형",
    description: "아티스트가 하나하나 손으로 빚어냅니다.",
  },
  {
    label: "소성",
    description: "1,250°C 고온에서 소성합니다.",
  },
  {
    label: "연마",
    description: "매끄러운 표면을 위해 정밀 연마합니다.",
  },
  {
    label: "완성",
    description: "까멜리아 도자기 괄사가 완성됩니다.",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-20 md:py-32 bg-brand-cream">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8">
        <AnimatedSection className="mb-16 text-center">
          <p className="font-display text-xs tracking-label uppercase text-brand-muted mb-2">
            Process
          </p>
          <h2 className="font-serif font-light text-2xl md:text-4xl tracking-serif-wide text-brand-dark leading-heading">
            제작 프로세스
          </h2>
        </AnimatedSection>

        {/* Timeline container */}
        <div className="relative">
          {/* Horizontal connector line (desktop only) */}
          <div className="hidden md:block absolute top-1.5 left-[10%] right-[10%] border-t border-brand-gold/30" />

          {/* Steps */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-4">
            {processSteps.map((step, index) => (
              <AnimatedSection
                key={step.label}
                delay={index * 0.15}
                className="flex-1 flex flex-col items-center text-center relative"
              >
                {/* Step dot */}
                <div className="w-3 h-3 rounded-full bg-brand-gold mb-4 relative z-10" />

                <p className="font-display text-xs tracking-label uppercase text-brand-dark mb-2">
                  {step.label}
                </p>
                <p className="font-sans text-sm leading-body-kr text-brand-muted max-w-[160px]">
                  {step.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
