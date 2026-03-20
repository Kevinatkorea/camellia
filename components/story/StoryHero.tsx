"use client";

import TextReveal from "@/components/ui/TextReveal";

const words = ["BODY", "MIND", "SOUL"];

export default function StoryHero() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8">
        {/* BODY MIND SOUL stagger */}
        <div className="flex flex-col items-center gap-2 md:gap-4 mb-16">
          {words.map((word, index) => (
            <TextReveal key={word} delay={index * 0.3}>
              <span className="block text-4xl md:text-7xl lg:text-8xl font-serif font-light tracking-serif-wider text-brand-dark leading-heading text-center">
                {word}
              </span>
            </TextReveal>
          ))}
        </div>

        {/* Placeholder background */}
        <div className="aspect-[16/9] bg-gradient-to-br from-brand-beige to-brand-cream rounded-sm" />
      </div>
    </section>
  );
}
