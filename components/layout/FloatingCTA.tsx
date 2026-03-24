"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import * as m from "framer-motion/m";
import { AnimatePresence } from "framer-motion";
import { SHOP_URL } from "@/lib/constants";
import { SARAJOO_EASE } from "@/lib/motion";

const PRODUCTS = [
  { label: "핫 & 쿨 세트", originalPrice: "130,000원", salePrice: "91,000원" },
  { label: "단품", originalPrice: "65,000원", salePrice: "52,000원" },
];

export default function FloatingCTA() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(0);

  useEffect(() => {
    if (pathname !== "/product") return;

    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.5;
      setIsVisible(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const nextProduct = useCallback(() => {
    setCurrentProduct((prev) => (prev + 1) % PRODUCTS.length);
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setInterval(nextProduct, 4000);
    return () => clearInterval(timer);
  }, [isVisible, nextProduct]);

  if (pathname !== "/product") return null;

  const product = PRODUCTS[currentProduct];

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
        <div className="hidden sm:block relative overflow-hidden h-10">
          <AnimatePresence mode="wait">
            <m.div
              key={currentProduct}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: SARAJOO_EASE }}
            >
              <p className="font-sans text-sm font-medium text-brand-dark">
                SARAJOO 까멜리아 도자기 괄사
              </p>
              <p className="font-sans text-xs text-brand-muted">
                {product.label} ·{" "}
                <span className="line-through text-brand-muted/60">
                  {product.originalPrice}
                </span>{" "}
                {product.salePrice}
              </p>
            </m.div>
          </AnimatePresence>
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
