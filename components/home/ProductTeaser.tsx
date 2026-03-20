"use client";

import * as m from "framer-motion/m";
import SectionHeading from "@/components/ui/SectionHeading";
import CTAButton from "@/components/ui/CTAButton";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ImageSlider from "@/components/ui/ImageSlider";
import { SARAJOO_EASE, DURATION } from "@/lib/motion";

export default function ProductTeaser() {
  return (
    <AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8 md:gap-16 items-start">
        {/* Left — Product image placeholder (60%) */}
        <m.div
          className="aspect-[4/5] relative cursor-pointer overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: DURATION.standard, ease: SARAJOO_EASE }}
        >
          <ImageSlider
            images={["/images/product/hands-fabric.webp", "/images/product/cool-render-1.webp", "/images/product/hot-render-1.webp", "/images/product/cool-render-2.webp", "/images/product/hot-render-2.webp"]}
            alt="SARAJOO 제품"
            className="w-full h-full"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </m.div>

        {/* Right — Copy (40%) */}
        <div className="md:mt-16">
          <SectionHeading en="The Only Object" kr="온도의 비밀이 담긴 오브제" />

          <p className="font-sans text-brand-body leading-body-kr mt-6 md:mt-8">
            일반 도자기보다 250°C 높은 1,250°C에서 소성한 까멜리아 도자기 괄사입니다.
            높은 소성 온도가 만들어낸 치밀한 조직 덕분에 냉기와 온기를 48시간 이상 유지하며,
            비다공성 표면으로 세균 번식 없이 위생적으로 사용할 수 있습니다.
            핫 & 쿨 1쌍 세트로 아침과 저녁, 5분 온도 리추얼을 시작하세요.
          </p>

          <ul className="mt-6 space-y-2">
            <li className="flex items-start gap-2 font-sans text-sm text-brand-body">
              <span className="w-1 h-1 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
              48시간 이상 온도 유지 — 반복 사용 없이 한 번의 준비로 충분
            </li>
            <li className="flex items-start gap-2 font-sans text-sm text-brand-body">
              <span className="w-1 h-1 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
              100% 무독성 세라믹 — 금속 알레르기 걱정 없는 순수 소재
            </li>
            <li className="flex items-start gap-2 font-sans text-sm text-brand-body">
              <span className="w-1 h-1 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
              아티스트 핸드메이드 — 하나하나 손으로 빚은 뷰티 오브제
            </li>
            <li className="flex items-start gap-2 font-sans text-sm text-brand-body">
              <span className="w-1 h-1 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
              특허 출원 디자인 — 인체공학적 곡선의 까멜리아 형태
            </li>
          </ul>

          <div className="mt-8 md:mt-10">
            <CTAButton variant="outline" href="/product">
              온도의 비밀을 확인하세요 &rarr;
            </CTAButton>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
