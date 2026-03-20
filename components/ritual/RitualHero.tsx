"use client";

import TextReveal from "@/components/ui/TextReveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function RitualHero() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8">
        <SectionHeading
          en="5 Minutes of Temperature, A Day of Change."
          kr="5분의 온도, 하루의 변화"
          align="center"
        />
      </div>
    </section>
  );
}
