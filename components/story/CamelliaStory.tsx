"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import ImageSlider from "@/components/ui/ImageSlider";

export default function CamelliaStory() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8">
        {/* Text */}
        <AnimatedSection className="mb-16 text-center md:text-left">
          <h3 className="font-serif-kr font-light italic text-2xl md:text-4xl tracking-serif-wide text-brand-dark leading-heading mb-6">
            동백, 겨울에 피는 꽃.
          </h3>
          <p className="font-sans text-base leading-body-kr text-brand-body max-w-2xl mb-6">
            동백(까멜리아)은 가장 추운 겨울에 피어나는 꽃입니다.
            차가운 바람 속에서도 고요한 아름다움을 지키는 동백처럼,
            SARAJOO 괄사는 냉기와 온기 사이에서 당신의 피부를 지킵니다.
            수백 년간 이어져 온 동백 오일의 미용 전통에서 영감을 받아,
            현대적 세라믹 기술로 재탄생시킨 뷰티 오브제입니다.
          </p>
          <ul className="space-y-2 max-w-2xl">
            <li className="flex items-start gap-2 font-sans text-sm text-brand-body">
              <span className="w-1 h-1 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
              동백꽃의 곡선에서 영감받은 인체공학적 디자인
            </li>
            <li className="flex items-start gap-2 font-sans text-sm text-brand-body">
              <span className="w-1 h-1 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
              한국 미의 정수를 담은 핸드메이드 오브제
            </li>
            <li className="flex items-start gap-2 font-sans text-sm text-brand-body">
              <span className="w-1 h-1 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
              자연에서 온 영감, 1,250°C 불꽃으로 완성
            </li>
          </ul>
        </AnimatedSection>

        {/* Image juxtaposition — asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6">
          <AnimatedSection>
            <ImageSlider
              images={["/images/story/stone-light.jpg", "/images/ritual/model-body.jpg"]}
              alt="동백 이야기"
              className="aspect-[4/5] rounded-sm"
              sizes="(max-width: 768px) 100vw, 60vw"
              objectPosition={["center 70%", "center center"]}
            />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <ImageSlider
              images={["/images/story/cool-ocean.jpg", "/images/story/beach-rock.jpg"]}
              alt="리추얼 분위기"
              className="aspect-[4/5] rounded-sm"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
