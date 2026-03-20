"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import ImageSlider from "@/components/ui/ImageSlider";

export default function MorningSection() {
  return (
    <section className="bg-gradient-cool py-20 md:py-32">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-10 md:gap-16 items-center">
          {/* Text — left 40% */}
          <AnimatedSection>
            <div>
              <p className="font-display text-xs tracking-label uppercase text-brand-muted mb-4">
                Morning Ritual
              </p>
              <h3 className="font-serif-kr font-light text-2xl md:text-4xl tracking-serif-wide text-brand-dark leading-heading mb-6">
                아침을 깨우는 차가운 리듬
              </h3>
              <p className="font-sans text-base leading-body-kr text-brand-body">
                밤사이 쌓인 수분과 노폐물로 인한 아침 붓기. COOL 괄사의 냉각 에너지가
                림프 순환을 촉진하여 부기를 빠르게 가라앉힙니다.
                세안 후 에센스를 도포한 피부 위로 부드럽게 슬라이드하면,
                차가운 세라믹 표면이 모공을 수축시키고 피부 탄력을 높여줍니다.
              </p>

              <ul className="mt-5 space-y-2">
                <li className="flex items-start gap-2 font-sans text-sm text-brand-body">
                  <span className="w-1 h-1 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                  냉동실 1시간이면 준비 완료
                </li>
                <li className="flex items-start gap-2 font-sans text-sm text-brand-body">
                  <span className="w-1 h-1 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                  림프 순환 촉진으로 붓기 빠르게 완화
                </li>
                <li className="flex items-start gap-2 font-sans text-sm text-brand-body">
                  <span className="w-1 h-1 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                  모공 수축 & 피부결 정돈
                </li>
                <li className="flex items-start gap-2 font-sans text-sm text-brand-body">
                  <span className="w-1 h-1 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                  세안 후 에센스와 함께 5분 사용
                </li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Image placeholder — right 60% */}
          <AnimatedSection delay={0.2}>
            <div className="aspect-[4/5] relative rounded-sm overflow-hidden">
              <ImageSlider
                images={["/images/ritual/cool-pool.webp", "/images/story/cool-ocean.webp", "/images/ritual/model-cheek.webp"]}
                alt="COOL 괄사 모닝 리추얼"
                className="absolute inset-0"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
