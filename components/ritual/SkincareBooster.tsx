"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import ImageSlider from "@/components/ui/ImageSlider";

const boosterSteps = [
  { label: "스킨케어", icon: "1" },
  { label: "괄사 마사지", icon: "2" },
  { label: "마무리 보습", icon: "3" },
];

export default function SkincareBooster() {
  return (
    <section className="py-20 md:py-32 bg-brand-cream">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10 md:gap-16">
          {/* Image — left 60% */}
          <AnimatedSection>
            <ImageSlider
              images={[
                "/images/ritual/skincare-lifestyle.jpg",
                "/images/ritual/model-cheek.jpg",
                "/images/ritual/model-face-1.jpg",
              ]}
              alt="스킨케어 부스터"
              className="aspect-[4/3] md:aspect-auto md:h-full rounded-sm"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </AnimatedSection>

          {/* Text — right 40% */}
          <AnimatedSection delay={0.2}>
            <div>
              <p className="font-display text-xs tracking-label uppercase text-brand-muted mb-4">
                Skincare Booster
              </p>
              <h3 className="font-serif-kr font-light text-2xl md:text-4xl tracking-serif-wide text-brand-dark leading-heading mb-6">
                스킨케어 부스터
              </h3>
              <p className="font-sans text-base leading-body-kr text-brand-body">
                온열 괄사를 기초화장품과 함께 롤링하는 순간,
                흡수력의 차이를 느낄 수 있습니다.
                오일·에센스·밤 등 기초 스킨케어와 함께 사용하면
                깊은 온열 효과로 흡수와 밀착이 자연스럽게 높아집니다.
              </p>

              <ul className="mt-5 space-y-2">
                <li className="flex items-start gap-2 font-sans text-sm text-brand-body">
                  <span className="w-1 h-1 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                  오일·에센스·밤 등 기초 스킨케어와 함께 사용
                </li>
                <li className="flex items-start gap-2 font-sans text-sm text-brand-body">
                  <span className="w-1 h-1 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                  온열 효과로 모공을 열어 흡수력 향상
                </li>
                <li className="flex items-start gap-2 font-sans text-sm text-brand-body">
                  <span className="w-1 h-1 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                  피부에 더 잘 밀착되는 스킨케어 부스터
                </li>
              </ul>

              {/* 3-step flow — desktop only */}
              <div className="hidden md:flex items-center justify-start gap-0 mt-10">
                {boosterSteps.map((step, index) => (
                  <div key={step.label} className="flex items-center">
                    <div className="flex flex-col items-center gap-2">
                      <div className="border border-brand-gold/50 rounded-full w-10 h-10 flex items-center justify-center">
                        <span className="font-mono font-thin text-sm text-brand-gold">
                          {step.icon}
                        </span>
                      </div>
                      <p className="font-sans text-xs text-brand-muted text-center">
                        {step.label}
                      </p>
                    </div>
                    {index < boosterSteps.length - 1 && (
                      <div className="w-12 lg:w-16 border-t border-dashed border-brand-gold/30 mx-3" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
