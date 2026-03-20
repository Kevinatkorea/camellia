"use client";

import { useState } from "react";
import Image from "next/image";
import * as m from "framer-motion/m";
import { AnimatePresence } from "framer-motion";
import { SARAJOO_EASE, DURATION } from "@/lib/motion";

type TabKey = "hot" | "cool";

const TAB_DATA: Record<
  TabKey,
  {
    label: string;
    copy: string;
    details: string[];
    gradient: string;
  }
> = {
  hot: {
    label: "HOT",
    copy: "15분의 온기 — 근육의 긴장을 녹이고 스킨케어의 깊이를 더합니다.",
    details: [
      "전자레인지 30초 가열",
      "저녁 스킨케어 전 사용",
      "혈액순환 촉진",
    ],
    gradient: "bg-gradient-hot",
  },
  cool: {
    label: "COOL",
    copy: "30분의 청량함 — 부기를 가라앉히고 무너진 라인을 정교하게 조각합니다.",
    details: [
      "냉동실 1시간 냉각",
      "아침 기상 직후 사용",
      "붓기 완화 & 모공 수축",
    ],
    gradient: "bg-gradient-cool",
  },
};

export default function HotCoolTabs() {
  const [activeTab, setActiveTab] = useState<TabKey>("hot");
  const data = TAB_DATA[activeTab];

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient transition */}
      <AnimatePresence mode="wait">
        <m.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: DURATION.standard, ease: SARAJOO_EASE }}
          className={`absolute inset-0 ${data.gradient}`}
        />
      </AnimatePresence>

      <div className="relative max-w-screen-xl mx-auto px-6 md:px-8 py-20 md:py-32">
        {/* Tab buttons */}
        <div className="flex gap-0 mb-12 md:mb-16">
          {(Object.keys(TAB_DATA) as TabKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`relative font-display font-light text-sm tracking-label uppercase px-6 py-3 transition-colors ${
                activeTab === key
                  ? "text-brand-dark"
                  : "text-brand-muted hover:text-brand-dark"
              }`}
            >
              {TAB_DATA[key].label}
              {activeTab === key && (
                <m.span
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-px bg-brand-gold"
                  transition={{
                    duration: DURATION.standard,
                    ease: SARAJOO_EASE,
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <m.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: DURATION.standard, ease: SARAJOO_EASE }}
            className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8 md:gap-12 items-start"
          >
            {/* Image placeholder */}
            <div className="aspect-[4/5] md:aspect-[3/4] relative overflow-hidden border border-brand-taupe/10">
              <Image src={activeTab === "hot" ? "/images/product/hot-usage.webp" : "/images/product/cool-usage.webp"} alt={activeTab === "hot" ? "HOT 괄사 사용법" : "COOL 괄사 사용법"} fill className="object-cover" sizes="(max-width: 768px) 100vw, 60vw" />
            </div>

            {/* Text */}
            <div className="md:mt-16">
              <p className="font-serif font-light italic text-xl md:text-2xl text-brand-dark leading-body-kr mb-8">
                {data.copy}
              </p>
              <ul className="space-y-4">
                {data.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-brand-gold mt-2.5 flex-shrink-0" />
                    <span className="font-sans text-sm text-brand-body leading-body-kr">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </m.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
