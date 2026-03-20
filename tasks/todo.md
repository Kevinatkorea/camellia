# SARAJOO 브랜드 사이트 v4.0 — 풀 빌드 작업 목록

> 5관점 검토 보강 사항 전부 반영. 예상 16~20시간.

## Step 1: 초기 설정 ✅
- [x] Next.js 14 프로젝트 생성
- [x] 의존성 설치 (framer-motion, tailwindcss@3, clsx 등)
- [x] tailwind.config.ts (8색 컬러 + 폰트 + 자간/행간 + 그라데이션)
- [x] 폰트 설정 (Cormorant Garamond, Pretendard CDN, Montserrat, DM Sans)
- [x] lib/motion.ts (SARAJOO_EASE + 프리셋)
- [x] globals.css (노이즈 + 글래스모피즘 + prefers-reduced-motion)
- [x] next.config.mjs (이미지 최적화)
- [x] placeholder 이미지 디렉토리 생성

## Step 2: 공통 UI 컴포넌트 ✅
- [x] TextReveal.tsx (className 버그 수정 + reduced-motion 대응)
- [x] ParallaxImage.tsx (모바일 비활성화 + onError 폴백)
- [x] AnimatedSection.tsx (reduced-motion 대응)
- [x] CTAButton.tsx (primary/secondary/outline 3 variant)
- [x] CountUpNumber.tsx (useState 동기화 + Intl.NumberFormat + aria-live)
- [x] Accordion.tsx (AnimatePresence + height 측정)
- [x] SectionHeading.tsx (EN serif + KR sans 조합)
- [x] GalleryStrip.tsx (무한 스크롤 + pause 버튼 + 모바일 수동)

## Step 3: 공통 레이아웃 ✅
- [x] Navigation.tsx (글래스모피즘 + 모바일 오버레이 + ESC 키 + 포커스)
- [x] Footer.tsx (법적 표기 placeholder)
- [x] FloatingCTA.tsx (/product 전용 + 가격 표시)
- [x] template.tsx (페이지 전환 Quartic Out)

## Step 4: 제품 페이지 /product ✅
- [x] ProductHero.tsx (TextReveal + 신뢰배지)
- [x] BeforeAfter.tsx (좌우 카드)
- [x] HotCoolTabs.tsx (그라데이션 + 비대칭)
- [x] WhyCeramic.tsx (비교 카드 4열)
- [x] SocialProof.tsx (후기 4개 + CountUp + 카카오 접점)
- [x] ProductCTA.tsx (가격 공시 + 선물 CTA)
- [x] FAQ.tsx (글래스모피즘 + 이탈 방지)

## Step 5: 플로팅 CTA ✅
- [x] FloatingCTA.tsx (Step 3에서 이미 구현)

## Step 6: 홈 페이지 / ✅
- [x] HomeHero.tsx (그라데이션 배경 + TextReveal + Discover)
- [x] ProductTeaser.tsx (비대칭 60:40 + 호버)
- [x] PhilosophyTeaser.tsx (BODY·MIND·SOUL stagger)
- [x] GalleryStrip (Step 2에서 구현)
- [x] MicroConversion.tsx (인스타 팔로우)

## Step 7: 리추얼 /ritual ✅
- [x] RitualHero, MorningSection, NightSection
- [x] FaceRitualSteps, SkincareBooster
- [x] RitualCTA (구매 + 제품 교차 링크)

## Step 8: 스토리 /story ✅
- [x] StoryHero (BODY·MIND·SOUL)
- [x] CamelliaStory (동백 서사)
- [x] ArtistStory (교차 레이아웃)
- [x] ProcessTimeline (5단계 타임라인)
- [x] StoryCTA

## Step 9: 리디렉트 /shop ✅
- [x] redirect to PLACEHOLDER URL

## Step 10: 트래킹 + SEO ✅
- [x] Meta Pixel 설정 (lib/meta-pixel.ts + MetaPixel 컴포넌트)
- [x] 페이지별 SEO 메타 (product, ritual, story)

## Step 11: 반응형 QA ✅
- [x] 모바일 375px 검증
- [x] 태블릿 768px 검증
- [x] 데스크톱 1280px+ 검증

## Step 12: 성능 최적화 ✅
- [x] LazyMotion + dynamic import (domMax + m 컴포넌트 마이그레이션)
- [x] 모바일 성능 분기 확인 (GalleryStrip, CountUpNumber 반응형 최적화)
- [x] Playwright 3 viewport × 4페이지 전체 통과 (5라운드)
