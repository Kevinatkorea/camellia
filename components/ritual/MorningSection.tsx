"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { imgSrc } from "@/lib/image-path";

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
                COOL 괄사를 냉동실에서 꺼내 세안 후 사용합니다. 붓기와 열감을
                가라앉히고 모공을 수축시킵니다.
              </p>
            </div>
          </AnimatedSection>

          {/* Image placeholder — right 60% */}
          <AnimatedSection delay={0.2}>
            <div className="aspect-[4/5] relative rounded-sm overflow-hidden">
              <Image src={imgSrc("/images/ritual/cool-pool.webp")} alt="COOL 괄사 모닝 리추얼" fill className="object-cover" sizes="(max-width: 768px) 100vw, 60vw" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
