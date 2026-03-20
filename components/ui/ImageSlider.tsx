"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import * as m from "framer-motion/m";
import { AnimatePresence } from "framer-motion";
import { imgSrc } from "@/lib/image-path";

export default function ImageSlider({
  images,
  alt,
  className = "",
  sizes = "100vw",
  priority = false,
  interval = 4000,
  objectPosition,
}: {
  images: string[];
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  interval?: number;
  objectPosition?: string | string[];
}) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [next, interval, images.length]);

  const getObjectPosition = (index: number) => {
    if (!objectPosition) return undefined;
    if (typeof objectPosition === "string") return { objectPosition };
    return objectPosition[index] ? { objectPosition: objectPosition[index] } : undefined;
  };

  if (images.length === 0) return null;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Base image — always rendered to maintain layout size */}
      <Image
        src={imgSrc(images[0])}
        alt={`${alt} 1`}
        fill
        className="object-cover"
        sizes={sizes}
        priority={priority}
        style={getObjectPosition(0)}
      />

      {/* Animated overlay for subsequent images */}
      <AnimatePresence>
        {current !== 0 && (
          <m.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-[1]"
          >
            <Image
              src={imgSrc(images[current])}
              alt={`${alt} ${current + 1}`}
              fill
              className="object-cover"
              sizes={sizes}
              style={getObjectPosition(current)}
            />
          </m.div>
        )}
      </AnimatePresence>

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                i === current ? "bg-white" : "bg-white/40"
              }`}
              aria-label={`이미지 ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
