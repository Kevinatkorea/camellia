"use client";

import Image from "next/image";
import { useState } from "react";
import { imgSrc } from "@/lib/image-path";

const GALLERY_IMAGES = [
  { src: imgSrc("/images/gallery/gallery-1.webp"), alt: "SARAJOO 갤러리 1" },
  { src: imgSrc("/images/gallery/gallery-2.webp"), alt: "SARAJOO 갤러리 2" },
  { src: imgSrc("/images/gallery/gallery-3.webp"), alt: "SARAJOO 갤러리 3" },
  { src: imgSrc("/images/gallery/gallery-4.webp"), alt: "SARAJOO 갤러리 4" },
  { src: imgSrc("/images/gallery/gallery-5.webp"), alt: "SARAJOO 갤러리 5" },
  { src: imgSrc("/images/product/package-3d.webp"), alt: "SARAJOO 패키지" },
  { src: imgSrc("/images/product/pair-display.webp"), alt: "SARAJOO 제품 페어" },
  { src: imgSrc("/images/product/cool-render-1.webp"), alt: "COOL 괄사" },
  { src: imgSrc("/images/product/hot-render-1.webp"), alt: "HOT 괄사" },
  { src: imgSrc("/images/product/package-flat.webp"), alt: "SARAJOO 패키지 디자인" },
];

export default function GalleryStrip() {
  const [isPaused, setIsPaused] = useState(false);
  const [hasError, setHasError] = useState<Record<number, boolean>>({});

  const images = [...GALLERY_IMAGES, ...GALLERY_IMAGES];

  return (
    <div className="relative overflow-hidden py-20 md:py-32">
      <button
        onClick={() => setIsPaused(!isPaused)}
        className="absolute top-4 right-4 z-10 font-display text-xs tracking-label uppercase text-brand-muted hover:text-brand-gold transition-colors hidden md:block"
        aria-label={isPaused ? "갤러리 자동 스크롤 재개" : "갤러리 자동 스크롤 일시정지"}
      >
        {isPaused ? "Play" : "Pause"}
      </button>

      <div
        className={`flex gap-4 overflow-x-auto md:overflow-hidden snap-x snap-mandatory md:snap-none ${isPaused ? "" : "gallery-auto-scroll"}`}
        style={{ width: "fit-content" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="relative w-60 h-80 md:w-80 md:h-96 flex-shrink-0 snap-start group"
          >
            {hasError[index] ? (
              <div className="w-full h-full bg-gradient-to-br from-brand-cream to-brand-beige" />
            ) : (
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 240px, 320px"
                className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-105"
                style={{
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onError={() =>
                  setHasError((prev) => ({ ...prev, [index]: true }))
                }
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
