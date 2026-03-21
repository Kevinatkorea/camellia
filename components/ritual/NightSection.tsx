"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import ImageSlider from "@/components/ui/ImageSlider";

export default function NightSection() {
  return (
    <section className="bg-gradient-hot py-20 md:py-32">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10 md:gap-16">
          {/* Image placeholder — left 60% */}
          <AnimatedSection className="order-2 md:order-1">
            <ImageSlider
              images={["/images/ritual/model-neck-ritual.jpg", "/images/ritual/model-shoulder.jpg", "/images/story/silhouette.jpg"]}
              alt="HOT 괄사 나이트 리추얼"
              className="aspect-[4/3] md:aspect-auto md:h-full rounded-sm"
              sizes="(max-width: 768px) 100vw, 60vw"
              objectPosition={["center 75%", "center 30%", "center 95%"]}
            />
          </AnimatedSection>

          {/* Text — right 40% */}
          <AnimatedSection delay={0.2} className="order-1 md:order-2">
            <div>
              <p className="font-display text-xs tracking-label uppercase text-brand-muted mb-4">
                Night Ritual
              </p>
              <h3 className="font-serif-kr font-light text-2xl md:text-4xl tracking-serif-wide text-brand-dark leading-heading mb-6">
                밤을 다독이는 따뜻한 위로
              </h3>
              <p className="font-sans text-base leading-body-kr text-brand-body">
                하루의 긴장이 쌓인 저녁, HOT 괄사의 따뜻한 온기가 근육을 이완시키고
                혈액순환을 촉진합니다. 세럼이나 크림을 도포한 후 사용하면
                온열 효과로 유효 성분의 피부 흡수율이 높아지며,
                페이스라인을 따라 부드럽게 마사지하면 하루의 피로가 녹아내립니다.
              </p>

              <ul className="mt-5 space-y-2">
                <li className="flex items-start gap-2 font-sans text-sm text-brand-body">
                  <span className="w-1 h-1 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                  전자레인지 15초로 간편하게 가열
                </li>
                <li className="flex items-start gap-2 font-sans text-sm text-brand-body">
                  <span className="w-1 h-1 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                  혈액순환 촉진 & 근육 이완
                </li>
                <li className="flex items-start gap-2 font-sans text-sm text-brand-body">
                  <span className="w-1 h-1 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                  스킨케어 유효 성분 흡수율 증가
                </li>
                <li className="flex items-start gap-2 font-sans text-sm text-brand-body">
                  <span className="w-1 h-1 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                  저녁 스킨케어 루틴의 마지막 단계로 최적
                </li>
                <li className="flex items-start gap-2 font-sans text-sm text-brand-body">
                  <span className="w-1 h-1 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                  클렌징 전 사용 시 모공 속 노폐물 정돈에 도움
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
