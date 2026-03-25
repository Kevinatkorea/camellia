import type { Metadata } from "next";
import dynamic from "next/dynamic";
import ProductHero from "@/components/product/ProductHero";
import { JsonLdScript, productSchema, faqSchema, breadcrumbSchema } from "@/lib/schemas";

const BeforeAfter = dynamic(() => import("@/components/product/BeforeAfter"));
const HotCoolTabs = dynamic(() => import("@/components/product/HotCoolTabs"));
const WhyCeramic = dynamic(() => import("@/components/product/WhyCeramic"));
const SocialProof = dynamic(() => import("@/components/product/SocialProof"));
const ProductCTA = dynamic(() => import("@/components/product/ProductCTA"));
const FAQ = dynamic(() => import("@/components/product/FAQ"));

export const metadata: Metadata = {
  title: "제품 소개 — 도자기 괄사 핫앤쿨 세트",
  description:
    "SARAJOO 까멜리아 도자기 괄사(로즈괄사) 핫 & 쿨 세트. 1,250°C 소성 세라믹, 100% 무독성. 아침 5분 온도 리추얼로 붓기 완화, 페이스라인 관리.",
  alternates: {
    canonical: "/product",
  },
  openGraph: {
    url: "/product",
    images: [{ url: "/images/product/product-hero.jpg", alt: "SARAJOO 도자기 괄사 제품" }],
  },
};

export default function ProductPage() {
  return (
    <main>
      <JsonLdScript data={[productSchema, faqSchema, breadcrumbSchema("product")]} />

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
