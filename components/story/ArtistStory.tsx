"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import ImageSlider from "@/components/ui/ImageSlider";

export default function ArtistStory() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8">
        <div className="mb-16">
          <SectionHeading
            en="아티스트의 손끝에서 태어난 조형의 미"
            align="left"
          />
        </div>

        {/* Block 1: Image left 60% + Text right 40% */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10 md:gap-16 items-center mb-20 md:mb-32">
          <AnimatedSection>
            <ImageSlider
              images={["/images/story/silhouette.jpg", "/images/ritual/model-forehead-2.jpg"]}
              alt="아티스트 작업 과정"
              className="aspect-[4/5] rounded-sm"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div>
              <p className="font-sans text-base leading-body-kr text-brand-body mb-5">
                이 괄사는 단순한 뷰티 도구를 넘어, 아티스트의 조형 언어가 깃든 오브제입니다.
                한국 전통 도예를 전공한 아티스트가 까멜리아(동백)의 곡선을 연구하여
                얼굴과 몸의 라인에 자연스럽게 밀착되는 형태를 설계했습니다.
                화장대 위에 놓아두면 하나의 작품처럼 공간을 채웁니다.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 font-sans text-sm text-brand-body">
                  <span className="w-1 h-1 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                  한국 전통 도예 전공 아티스트의 디자인
                </li>
                <li className="flex items-start gap-2 font-sans text-sm text-brand-body">
                  <span className="w-1 h-1 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                  인체공학적 곡선 — 얼굴 라인에 자연스럽게 밀착
                </li>
                <li className="flex items-start gap-2 font-sans text-sm text-brand-body">
                  <span className="w-1 h-1 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                  화장대 위의 아트 오브제로서의 가치
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>

        {/* Block 2: Text left 40% + Image right 60% (reversed) */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-10 md:gap-16 items-center">
          <AnimatedSection className="order-2 md:order-1">
            <div>
              <p className="font-sans text-base leading-body-kr text-brand-body mb-5">
                원료 배합부터 성형, 소성, 연마까지 모든 과정이 수작업으로 이루어집니다.
                1,250°C의 가마 속에서 24시간 이상 소성된 세라믹은
                일반 도자기보다 치밀하고 단단한 조직을 갖게 되어,
                매끄러운 촉감과 뛰어난 온도 유지력을 동시에 실현합니다.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 font-sans text-sm text-brand-body">
                  <span className="w-1 h-1 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                  원료 → 성형 → 소성 → 연마 전 과정 수작업
                </li>
                <li className="flex items-start gap-2 font-sans text-sm text-brand-body">
                  <span className="w-1 h-1 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                  1,250°C · 24시간 이상 고온 소성
                </li>
                <li className="flex items-start gap-2 font-sans text-sm text-brand-body">
                  <span className="w-1 h-1 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                  정밀 연마로 완성되는 실크 같은 촉감
                </li>
              </ul>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="order-1 md:order-2">
            <ImageSlider
              images={["/images/story/philosophy-bms.jpg", "/images/story/stone-light.jpg"]}
              alt="한국 전통 도예"
              className="aspect-[4/5] rounded-sm"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
