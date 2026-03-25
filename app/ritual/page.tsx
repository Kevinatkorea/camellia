import type { Metadata } from "next";
import dynamic from "next/dynamic";
import RitualHero from "@/components/ritual/RitualHero";
import { JsonLdScript, howToSchema, breadcrumbSchema } from "@/lib/schemas";

const MorningSection = dynamic(() => import("@/components/ritual/MorningSection"));
const NightSection = dynamic(() => import("@/components/ritual/NightSection"));
const FaceRitualSteps = dynamic(() => import("@/components/ritual/FaceRitualSteps"));
const SkincareBooster = dynamic(() => import("@/components/ritual/SkincareBooster"));
const RitualCTA = dynamic(() => import("@/components/ritual/RitualCTA"));

export const metadata: Metadata = {
  title: "리추얼 가이드 — 5분 괄사 마사지",
  description:
    "도자기 괄사(로즈괄사) 사용법. 모닝 쿨 리추얼로 붓기 완화, 나이트 핫 리추얼로 스킨케어 흡수. SARAJOO 5분 괄사 마사지 가이드.",
  alternates: {
    canonical: "/ritual",
  },
  openGraph: {
    url: "/ritual",
    images: [{ url: "/images/ritual/cool-water.jpg", alt: "SARAJOO 괄사 리추얼 가이드" }],
  },
};

export default function RitualPage() {
  return (
    <main>
      <JsonLdScript data={[howToSchema, breadcrumbSchema("ritual")]} />
      <RitualHero />
      <MorningSection />
      <NightSection />
      <FaceRitualSteps />
      <SkincareBooster />
      <RitualCTA />
    </main>
  );
}
