import dynamic from "next/dynamic";
import RitualHero from "@/components/ritual/RitualHero";

const MorningSection = dynamic(() => import("@/components/ritual/MorningSection"));
const NightSection = dynamic(() => import("@/components/ritual/NightSection"));
const FaceRitualSteps = dynamic(() => import("@/components/ritual/FaceRitualSteps"));
const SkincareBooster = dynamic(() => import("@/components/ritual/SkincareBooster"));
const RitualCTA = dynamic(() => import("@/components/ritual/RitualCTA"));

export const metadata = {
  title: "리추얼 가이드",
  description:
    "5분의 온도, 하루의 변화. SARAJOO 도자기 괄사로 시작하는 모닝·나이트 리추얼 가이드.",
};

export default function RitualPage() {
  return (
    <main>
      <RitualHero />
      <MorningSection />
      <NightSection />
      <FaceRitualSteps />
      <SkincareBooster />
      <RitualCTA />
    </main>
  );
}
