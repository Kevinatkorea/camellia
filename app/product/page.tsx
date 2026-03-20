import type { Metadata } from "next";
import dynamic from "next/dynamic";
import ProductHero from "@/components/product/ProductHero";

const BeforeAfter = dynamic(() => import("@/components/product/BeforeAfter"));
const HotCoolTabs = dynamic(() => import("@/components/product/HotCoolTabs"));
const WhyCeramic = dynamic(() => import("@/components/product/WhyCeramic"));
const SocialProof = dynamic(() => import("@/components/product/SocialProof"));
const ProductCTA = dynamic(() => import("@/components/product/ProductCTA"));
const FAQ = dynamic(() => import("@/components/product/FAQ"));

export const metadata: Metadata = {
  title: "제품 소개",
  description:
    "아침 5분 온도 리추얼. SARAJOO 까멜리아 도자기 괄사 핫 & 쿨 세트로 붓기를 가라앉히고, 선명한 페이스라인을 만들어보세요.",
};

export default function ProductPage() {
  return (
    <main>
      {/* Hero — full viewport */}
      <ProductHero />

      {/* Before / After */}
      <div className="py-20 md:py-32">
        <BeforeAfter />
      </div>

      {/* HOT & COOL Tabs */}
      <HotCoolTabs />

      {/* Why Ceramic */}
      <div className="py-20 md:py-32">
        <WhyCeramic />
      </div>

      {/* Social Proof */}
      <div id="social-proof" className="py-20 md:py-32">
        <SocialProof />
      </div>

      {/* Product CTA */}
      <div className="py-20 md:py-32">
        <ProductCTA />
      </div>

      {/* FAQ */}
      <div className="py-20 md:py-32">
        <FAQ />
      </div>
    </main>
  );
}
