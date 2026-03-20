"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { SHOP_URL } from "@/lib/constants";

export default function FloatingCTA() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (pathname !== "/product") return;

    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.5;
      setIsVisible(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  if (pathname !== "/product") return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 glass border-t border-brand-taupe/20 px-4 py-3 transition-all duration-500 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between gap-4">
        <div className="hidden sm:block">
          <p className="font-sans text-sm font-medium text-brand-dark">
            SARAJOO 까멜리아 도자기 괄사
          </p>
          <p className="font-sans text-xs text-brand-muted">
            핫 & 쿨 1쌍 세트 · 79,000원
          </p>
        </div>
        <a
          href={SHOP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-gold text-white font-sans text-sm px-6 py-2.5 hover:bg-brand-dark transition-colors flex-shrink-0 w-full sm:w-auto text-center"
          style={{
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          지금 만나보기
        </a>
      </div>
    </div>
  );
}
