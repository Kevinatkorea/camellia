"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

const boosterSteps = [
  { label: "스킨케어", icon: "1" },
  { label: "괄사 마사지", icon: "2" },
  { label: "마무리 보습", icon: "3" },
];

export default function SkincareBooster() {
  return (
    <section className="py-20 md:py-32 bg-brand-cream">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8">
        <AnimatedSection>
          <p className="font-display text-xs tracking-label uppercase text-brand-muted mb-2 text-center">
            Skincare Booster
          </p>
          <h3 className="font-serif-kr font-light text-2xl md:text-4xl tracking-serif-wide text-brand-dark leading-heading mb-16 text-center">
            스킨케어 부스터
          </h3>
        </AnimatedSection>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0">
          {boosterSteps.map((step, index) => (
            <AnimatedSection
              key={step.label}
              delay={index * 0.2}
              className="flex items-center gap-6 md:gap-0"
            >
              <div className="flex flex-col items-center gap-4">
                {/* Circle icon */}
                <div className="border-2 border-brand-gold rounded-full w-16 h-16 flex items-center justify-center">
                  <span className="font-mono font-thin text-xl text-brand-gold">
                    {step.icon}
                  </span>
                </div>
                <p className="font-sans text-sm text-brand-body text-center">
                  {step.label}
                </p>
              </div>

              {/* Dotted connector (not after last item) */}
              {index < boosterSteps.length - 1 && (
                <div className="hidden md:block w-24 lg:w-32 border-t-2 border-dashed border-brand-gold/40 mx-6" />
              )}
              {index < boosterSteps.length - 1 && (
                <div className="block md:hidden h-8 border-l-2 border-dashed border-brand-gold/40" />
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
