import type { Metadata } from "next";
import { Playfair_Display, Noto_Serif_KR, Montserrat, DM_Sans } from "next/font/google";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import MetaPixel from "@/components/layout/MetaPixel";
import MotionProvider from "@/components/layout/MotionProvider";
import JsonLd from "@/components/layout/JsonLd";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const notoSerifKR = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-serif-kr",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "400"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sarajoo.com"),
  title: {
    default: "SARAJOO — 도자기 괄사 | 까멜리아 로즈괄사 핫앤쿨 세트",
    template: "%s | SARAJOO",
  },
  description:
    "SARAJOO 까멜리아 도자기 괄사(로즈괄사). 1,250°C 고온 소성 세라믹 괄사로 5분 온도 리추얼. 핫 & 쿨 1쌍 세트. 붓기 완화, 페이스 리프팅, 스킨케어 부스터.",
  keywords: [
    "도자기 괄사", "로즈괄사", "세라믹 괄사", "까멜리아 괄사",
    "괄사 마사지", "페이스 리프팅", "붓기 완화", "괄사 사용법",
    "핫앤쿨 괄사", "SARAJOO", "사라주", "뷰티 괄사",
    "핸드메이드 괄사", "스킨케어 도구", "페이스 마사지",
  ],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "SARAJOO",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "SARAJOO 까멜리아 도자기 괄사" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "https://sarajoo.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <JsonLd />
      </head>
      <body
        className={`${playfair.variable} ${notoSerifKR.variable} ${montserrat.variable} ${dmSans.variable} font-sans antialiased noise-overlay`}
      >
        <MotionProvider>
          <MetaPixel />
          <Navigation />
          {children}
          <FloatingCTA />
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
