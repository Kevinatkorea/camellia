"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import CTAButton from "@/components/ui/CTAButton";

export default function MicroConversion() {
  return (
    <AnimatedSection className="border-t border-brand-gold/30 bg-brand-cream">
      <div className="text-center py-20 md:py-32 px-6">
        <p className="font-display tracking-label uppercase text-brand-muted text-xs">
          Follow Our Journey
        </p>

        <p className="font-serif text-xl text-brand-dark mt-4">
          @sarajoo_official
        </p>

        <div className="mt-8">
          <CTAButton
            variant="secondary"
            external
            href="https://instagram.com/sarajoo_official"
          >
            Instagram
          </CTAButton>
        </div>
      </div>
    </AnimatedSection>
  );
}
