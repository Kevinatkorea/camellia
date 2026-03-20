import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, DM_Sans } from "next/font/google";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import MetaPixel from "@/components/layout/MetaPixel";
import MotionProvider from "@/components/layout/MotionProvider";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
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
    default: "SARAJOO — 하루의 온도를 바꾸는 도자기 괄사",
    template: "%s | SARAJOO",
  },
  description:
    "까멜리아 도자기 괄사. 1,250°C 고온 소성, 아티스트 핸드메이드. 핫 & 쿨 1쌍 세트로 5분 온도 리추얼을 시작하세요.",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "SARAJOO",
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
      </head>
      <body
        className={`${cormorant.variable} ${montserrat.variable} ${dmSans.variable} font-sans antialiased noise-overlay`}
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
