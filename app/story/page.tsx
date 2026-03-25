import type { Metadata } from "next";
import dynamic from "next/dynamic";
import StoryHero from "@/components/story/StoryHero";
import { JsonLdScript, articleSchema, breadcrumbSchema } from "@/lib/schemas";

const CamelliaStory = dynamic(() => import("@/components/story/CamelliaStory"));
const ArtistStory = dynamic(() => import("@/components/story/ArtistStory"));
const ProcessTimeline = dynamic(() => import("@/components/story/ProcessTimeline"));
const StoryCTA = dynamic(() => import("@/components/story/StoryCTA"));

export const metadata: Metadata = {
  title: "브랜드 스토리 — 아티스트 핸드메이드 도자기 괄사",
  description:
    "SARAJOO 도자기 괄사(로즈괄사)의 탄생 이야기. 동백꽃에서 영감받은 1,250°C 고온 소성 아티스트 핸드메이드 세라믹 괄사.",
  alternates: {
    canonical: "/story",
  },
  openGraph: {
    url: "/story",
    images: [{ url: "/images/story/philosophy-bms.jpg", alt: "SARAJOO 브랜드 스토리" }],
  },
};

export default function StoryPage() {
  return (
    <main>
      <JsonLdScript data={[articleSchema, breadcrumbSchema("story")]} />
      <StoryHero />
      <article>
        <CamelliaStory />
        <ArtistStory />
        <ProcessTimeline />
      </article>
      <StoryCTA />
    </main>
  );
}
