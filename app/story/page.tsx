import dynamic from "next/dynamic";
import StoryHero from "@/components/story/StoryHero";

const CamelliaStory = dynamic(() => import("@/components/story/CamelliaStory"));
const ArtistStory = dynamic(() => import("@/components/story/ArtistStory"));
const ProcessTimeline = dynamic(() => import("@/components/story/ProcessTimeline"));
const StoryCTA = dynamic(() => import("@/components/story/StoryCTA"));

export const metadata = {
  title: "브랜드 스토리",
  description:
    "동백, 겨울에 피는 꽃. SARAJOO의 이야기, 아티스트의 손끝에서 태어난 도자기 괄사.",
};

export default function StoryPage() {
  return (
    <main>
      <StoryHero />
      <CamelliaStory />
      <ArtistStory />
      <ProcessTimeline />
      <StoryCTA />
    </main>
  );
}
