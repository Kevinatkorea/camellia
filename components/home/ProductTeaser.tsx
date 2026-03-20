"use client";

import * as m from "framer-motion/m";
import SectionHeading from "@/components/ui/SectionHeading";
import CTAButton from "@/components/ui/CTAButton";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { SARAJOO_EASE, DURATION } from "@/lib/motion";

export default function ProductTeaser() {
  return (
    <AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8 md:gap-16 items-start">
        {/* Left — Product image placeholder (60%) */}
        <m.div
          className="aspect-[4/5] bg-gradient-to-br from-brand-beige to-brand-taupe/30 cursor-pointer"
          whileHover={{ scale: 1.05, filter: "brightness(1.05)" }}
          transition={{ duration: DURATION.standard, ease: SARAJOO_EASE }}
        />

        {/* Right — Copy (40%) */}
        <div className="md:mt-16">
          <SectionHeading en="The Only Object" kr="온도의 비밀이 담긴 오브제" />

          <p className="font-sans text-brand-body leading-body-kr mt-6 md:mt-8">
            1,250&deg;C 고온 소성 까멜리아 도자기.
            <br />
            핫 &amp; 쿨 1쌍으로 완성하는 5분 온도 리추얼.
          </p>

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
