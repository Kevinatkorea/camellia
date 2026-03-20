import dynamic from "next/dynamic";
import HomeHero from "@/components/home/HomeHero";

const ProductTeaser = dynamic(() => import("@/components/home/ProductTeaser"));
const PhilosophyTeaser = dynamic(() => import("@/components/home/PhilosophyTeaser"));
const GalleryStrip = dynamic(() => import("@/components/ui/GalleryStrip"));
const MicroConversion = dynamic(() => import("@/components/home/MicroConversion"));

export default function Home() {
  return (
    <main>
      <HomeHero />

      <section className="max-w-screen-xl mx-auto px-6 md:px-8 py-20 md:py-32">
        <ProductTeaser />
      </section>

      <PhilosophyTeaser />

      <GalleryStrip />

      <MicroConversion />
    </main>
  );
}
