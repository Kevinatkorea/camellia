"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import * as m from "framer-motion/m";
import { AnimatePresence } from "framer-motion";
import { SARAJOO_EASE, DURATION } from "@/lib/motion";
import { imgSrc } from "@/lib/image-path";

const EVENT_END_DATE = "2026-05-10";
const STORAGE_KEY = "sarajoo-event-hidden";

function getToday() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function isEventActive() {
  return new Date() <= new Date(EVENT_END_DATE + "T23:59:59");
}

function isHiddenToday() {
  if (typeof window === "undefined") return true;
  return localStorage.getItem(`${STORAGE_KEY}-${getToday()}`) === "1";
}

export default function EventPopup() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);

  useEffect(() => {
    if (pathname === "/" && isEventActive() && !isHiddenToday()) {
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setMobileExpanded(false);
  }, []);

  const handleHideToday = useCallback(() => {
    localStorage.setItem(`${STORAGE_KEY}-${getToday()}`, "1");
    handleClose();
  }, [handleClose]);

  useEffect(() => {
    if (!isVisible && !mobileExpanded) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isVisible, mobileExpanded, handleClose]);

  if (!isVisible) return null;

  return (
    <>
      {/* ── Desktop popup (md+) ── */}
      <AnimatePresence>
        {isVisible && (
          <m.div
            className="hidden md:flex fixed inset-0 z-[60] items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: DURATION.quick, ease: SARAJOO_EASE }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-brand-dark/40"
              onClick={handleClose}
            />

            {/* Modal */}
            <m.div
              className="relative z-10 w-full max-w-[420px] bg-brand-cream border border-brand-taupe/30 shadow-2xl overflow-hidden"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: DURATION.standard, ease: SARAJOO_EASE }}
              role="dialog"
              aria-modal="true"
              aria-label="오픈 기념 이벤트"
            >
              {/* Label */}
              <div className="pt-8 pb-4 text-center">
                <p className="font-display text-[10px] uppercase tracking-[0.3em] text-brand-gold">
                  Open Celebration
                </p>
              </div>

              {/* Image */}
              <div className="mx-8 aspect-[4/3] relative overflow-hidden">
                <Image
                  src={imgSrc("/images/event/leafpick-gift.jpg")}
                  alt="오픈 기념 리픽 증정 이벤트"
                  fill
                  className="object-cover"
                  sizes="420px"
                />
              </div>

              {/* Divider */}
              <div className="flex items-center gap-4 px-8 py-6">
                <span className="flex-1 h-px bg-brand-gold/30" />
                <span className="font-display text-[9px] uppercase tracking-[0.2em] text-brand-gold/60">
                  Event
                </span>
                <span className="flex-1 h-px bg-brand-gold/30" />
              </div>

              {/* Copy */}
              <div className="text-center px-8">
                <p className="font-serif-kr text-sm text-brand-muted mb-2">
                  오픈 기념 이벤트
                </p>
                <h2 className="font-serif text-2xl tracking-serif-wide text-brand-dark leading-tight mb-1">
                  구매 고객 전원
                </h2>
                <p className="font-serif-kr text-lg text-brand-dark">
                  리픽 <span className="text-brand-gold font-medium">무료 증정</span>
                </p>
                <p className="font-display text-[10px] uppercase tracking-[0.2em] text-brand-muted mt-4">
                  ~ 2026. 5. 10 까지
                </p>
              </div>

              {/* CTA */}
              <div className="px-8 pt-6">
                <Link
                  href="/product"
                  onClick={handleClose}
                  className="block w-full bg-brand-gold text-white text-center font-sans text-sm py-3.5 hover:bg-brand-dark transition-colors"
                >
                  지금 만나보기
                </Link>
              </div>

              {/* Footer actions */}
              <div className="flex items-center justify-center gap-6 px-8 py-5">
                <button
                  onClick={handleHideToday}
                  className="font-sans text-xs text-brand-muted hover:text-brand-body transition-colors"
                >
                  오늘하루 보지 않음
                </button>
                <span className="w-px h-3 bg-brand-taupe/30" />
                <button
                  onClick={handleClose}
                  className="font-sans text-xs text-brand-muted hover:text-brand-body transition-colors"
                >
                  닫기
                </button>
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>

      {/* ── Mobile bottom banner (< md) ── */}
      <AnimatePresence>
        {isVisible && !mobileExpanded && (
          <m.button
            className="md:hidden fixed bottom-0 left-0 right-0 z-[60] bg-brand-cream border-t border-brand-taupe/30 px-4 py-3.5"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: DURATION.quick, ease: SARAJOO_EASE }}
            onClick={() => setMobileExpanded(true)}
          >
            <div className="max-w-screen-xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center text-sm">
                  🎁
                </span>
                <div className="text-left">
                  <p className="font-sans text-xs font-medium text-brand-dark">
                    구매 시 리픽 무료 증정
                  </p>
                  <p className="font-display text-[9px] uppercase tracking-[0.15em] text-brand-muted">
                    Open Event · ~5.10
                  </p>
                </div>
              </div>
              <span className="font-sans text-xs text-brand-gold">
                자세히 &rarr;
              </span>
            </div>
          </m.button>
        )}
      </AnimatePresence>

      {/* ── Mobile fullscreen overlay ── */}
      <AnimatePresence>
        {mobileExpanded && (
          <m.div
            className="md:hidden fixed inset-0 z-[60] bg-brand-cream overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: DURATION.quick, ease: SARAJOO_EASE }}
            role="dialog"
            aria-modal="true"
            aria-label="오픈 기념 이벤트"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="fixed top-4 right-4 z-10 w-10 h-10 flex items-center justify-center"
              aria-label="닫기"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="text-brand-muted"
              >
                <path
                  d="M4 4l12 12M16 4L4 16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* Content */}
            <div className="pt-16 pb-24 px-6">
              {/* Label */}
              <p className="text-center font-display text-[10px] uppercase tracking-[0.3em] text-brand-gold mb-6">
                Open Celebration
              </p>

              {/* Image */}
              <div className="aspect-[4/3] relative overflow-hidden mb-8">
                <Image
                  src={imgSrc("/images/event/leafpick-gift.jpg")}
                  alt="오픈 기념 리픽 증정 이벤트"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>

              {/* Divider */}
              <div className="flex items-center gap-4 mb-8">
                <span className="flex-1 h-px bg-brand-gold/30" />
                <span className="font-display text-[9px] uppercase tracking-[0.2em] text-brand-gold/60">
                  Event
                </span>
                <span className="flex-1 h-px bg-brand-gold/30" />
              </div>

              {/* Copy */}
              <div className="text-center mb-8">
                <p className="font-serif-kr text-sm text-brand-muted mb-2">
                  오픈 기념 이벤트
                </p>
                <h2 className="font-serif text-2xl tracking-serif-wide text-brand-dark leading-tight mb-1">
                  구매 고객 전원
                </h2>
                <p className="font-serif-kr text-lg text-brand-dark mb-6">
                  리픽 <span className="text-brand-gold font-medium">무료 증정</span>
                </p>

                <p className="font-sans text-sm text-brand-body leading-body-kr mb-2">
                  SARAJOO 도자기 괄사를 구매하시는 모든 고객님께
                </p>
                <p className="font-sans text-sm text-brand-body leading-body-kr mb-4">
                  감성을 더하는 리픽 세트를 무료로 드립니다.
                </p>

                <p className="font-display text-[10px] uppercase tracking-[0.2em] text-brand-muted">
                  ~ 2026. 5. 10 까지
                </p>
              </div>

              {/* CTA */}
              <Link
                href="/product"
                onClick={handleClose}
                className="block w-full bg-brand-gold text-white text-center font-sans text-sm py-3.5 hover:bg-brand-dark transition-colors"
              >
                지금 만나보기
              </Link>

              {/* Hide today */}
              <div className="text-center mt-6">
                <button
                  onClick={handleHideToday}
                  className="font-sans text-xs text-brand-muted hover:text-brand-body transition-colors"
                >
                  오늘하루 보지 않음
                </button>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
