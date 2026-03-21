"use client";

import Accordion from "@/components/ui/Accordion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import TextReveal from "@/components/ui/TextReveal";

const FAQ_ITEMS = [
  {
    question: "떨어뜨리면 깨지나요?",
    answer:
      "1,250°C 고온 소성으로 일반 도자기보다 높은 강도를 갖추고 있습니다. 일상적인 사용에서는 걱정하지 않으셔도 됩니다. 다만, 높은 곳에서 딱딱한 바닥으로 떨어뜨리면 파손될 수 있습니다.",
  },
  {
    question: "전자레인지에 넣어도 되나요?",
    answer:
      "네, HOT 괄사는 전자레인지 15초 가열이 가능합니다. 물과 함께 넣어주세요.",
  },
  {
    question: "예민한 피부에도 사용 가능한가요?",
    answer:
      "100% 무독성 천연 소재로, 금속이나 실리콘 소재보다 피부 자극이 적습니다. 도자기의 매끄러운 표면이 피부를 부드럽게 마사지합니다.",
  },
  {
    question: "세트 구성은 어떻게 되나요?",
    answer:
      "HOT 괄사 1개 + COOL 괄사 1개, 전용 파우치, 사용 가이드가 포함됩니다.",
  },
  {
    question: "선물용으로 적합한가요?",
    answer:
      "프리미엄 패키지에 담겨 배송되며, 별도의 선물 포장 없이도 충분히 선물로 적합합니다. 아티스트 핸드메이드 오브제로서의 가치가 있습니다.",
  },
  {
    question: "사용 시 주의사항이 있나요?",
    answer:
      "전자레인지 15~30초 이내로 가열해 주세요(출력에 따라 다르며, 30초 이상 가열하지 마세요). 수증기 발생 시 과열 상태이므로 충분히 식힌 후 사용하세요. 가열 후에는 반드시 실리콘 부분을 잡고 꺼내 주세요. 냉동 상태의 괄사를 전자레인지에 바로 가열하면 파손될 수 있으며, 온열과 냉열 리추얼은 구분하여 사용하는 것을 권장합니다.",
  },
  {
    question: "세척은 어떻게 하나요?",
    answer:
      "사용 후 미온수와 부드러운 천으로 세척한 뒤 완전히 건조하여 보관해 주세요. 도자기 특성상 충격이나 낙하에 주의하시고, 제품에 손상이 있을 경우 사용을 중단해 주세요.",
  },
];

export default function FAQ() {
  return (
    <section className="max-w-screen-lg mx-auto px-6 md:px-8">
      {/* Heading */}
      <div className="text-center mb-12 md:mb-16">
        <TextReveal>
          <h2 className="font-serif font-light text-2xl md:text-4xl tracking-serif-wide text-brand-dark leading-heading">
            자주 묻는 질문
          </h2>
        </TextReveal>
      </div>

      {/* Accordion */}
      <AnimatedSection>
        <Accordion items={FAQ_ITEMS} />
      </AnimatedSection>

      {/* Bottom links */}
      <AnimatedSection delay={0.2} className="text-center mt-12 md:mt-16 space-y-4">
        <p className="font-sans text-sm text-brand-muted">
          여전히 궁금한 점이 있으신가요?
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* 카카오 채널 준비 중
          <a
            href="https://pf.kakao.com/PLACEHOLDER"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-brand-gold hover:text-brand-dark transition-colors underline underline-offset-4 decoration-brand-gold"
          >
            카카오 채널에서 상담하기
          </a>
          <span className="hidden sm:inline text-brand-taupe/30">|</span>
          */}
          <a
            href="#social-proof"
            className="font-sans text-sm text-brand-body hover:text-brand-gold transition-colors underline underline-offset-4 decoration-brand-taupe/30"
          >
            다른 후기 더 보기
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
}
