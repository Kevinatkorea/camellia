import { SITE_URL, SHOP_URL } from "@/lib/constants";
import { FAQ_ITEMS } from "@/lib/data/faq";
import { REVIEWS } from "@/lib/data/reviews";
import { RITUAL_STEPS } from "@/lib/data/ritual-steps";

// --- Helper Component ---
// Note: dangerouslySetInnerHTML is safe here because all data is
// hardcoded schema definitions from our own codebase, not user input.

export function JsonLdScript({ data }: { data: object | object[] }) {
  const schemas = Array.isArray(data) ? data : [data];
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

// --- Global Schemas ---

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SARAJOO",
  alternateName: "사라주",
  url: SITE_URL,
  description:
    "까멜리아 도자기 괄사 브랜드. 1,250°C 고온 소성 세라믹 괄사로 5분 온도 리추얼.",
  inLanguage: "ko",
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SARAJOO",
  legalName: "사라주랩",
  url: SITE_URL,
  logo: `${SITE_URL}/images/og-image.png`,
  description:
    "까멜리아 도자기 괄사 브랜드. 1,250°C 고온 소성 세라믹 괄사.",
  founder: {
    "@type": "Person",
    name: "주세정",
  },
  brand: {
    "@type": "Brand",
    name: "SARAJOO",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+82-2-477-3950",
    contactType: "customer service",
    availableLanguage: "Korean",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "양재대로 1615 B1",
    addressLocality: "강동구",
    addressRegion: "서울시",
    addressCountry: "KR",
  },
  sameAs: [
    "https://www.instagram.com/sarajoosj",
    SHOP_URL,
  ],
};

// --- Product Page Schemas ---

const reviewSchemas = REVIEWS.map((review) => ({
  "@type": "Review",
  reviewRating: {
    "@type": "Rating",
    ratingValue: review.rating,
    bestRating: 5,
  },
  author: {
    "@type": "Person",
    name: review.author,
  },
  reviewBody: review.quote,
}));

const avgRating =
  REVIEWS.reduce((sum, r) => sum + r.rating, 0) / REVIEWS.length;

export const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "SARAJOO 까멜리아 도자기 괄사 핫앤쿨 세트",
  description:
    "1,250°C 고온 소성 까멜리아 도자기 괄사. 핫 & 쿨 1쌍 세트로 5분 온도 리추얼. 붓기 완화, 페이스 리프팅, 스킨케어 부스터.",
  brand: { "@type": "Brand", name: "SARAJOO" },
  manufacturer: { "@type": "Organization", name: "사라주랩" },
  image: [
    `${SITE_URL}/images/product/product-hero.jpg`,
    `${SITE_URL}/images/product/hot-stone.jpg`,
  ],
  material: "세라믹 (도자기)",
  category: "뷰티 > 페이스 마사지 도구",
  offers: [
    {
      "@type": "Offer",
      name: "핫 & 쿨 세트",
      price: "91000",
      priceCurrency: "KRW",
      availability: "https://schema.org/InStock",
      url: SHOP_URL,
      priceValidUntil: "2026-12-31",
    },
    {
      "@type": "Offer",
      name: "단품",
      price: "52000",
      priceCurrency: "KRW",
      availability: "https://schema.org/InStock",
      url: SHOP_URL,
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: avgRating.toFixed(1),
    reviewCount: REVIEWS.length,
    bestRating: 5,
    worstRating: 1,
  },
  review: reviewSchemas,
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "소성 온도",
      value: "1,250°C",
    },
    {
      "@type": "PropertyValue",
      name: "온도 유지 시간",
      value: "15분 이상",
    },
    {
      "@type": "PropertyValue",
      name: "특허 출원 번호",
      value: "10-2025-0131819",
    },
  ],
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

// --- Ritual Page Schemas ---

export const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "도자기 괄사 페이스 리추얼 사용법",
  description:
    "SARAJOO 까멜리아 도자기 괄사로 5분 페이스 마사지하는 방법. 세안 후 에센스 도포, 턱 라인 슬라이드, 이마·눈 주변 마사지 3단계.",
  totalTime: "PT5M",
  tool: [
    { "@type": "HowToTool", name: "SARAJOO 까멜리아 도자기 괄사" },
    { "@type": "HowToTool", name: "에센스 또는 페이스 오일" },
  ],
  step: RITUAL_STEPS.map((step, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: step.text,
    text: step.description,
    image: `${SITE_URL}${step.image}`,
  })),
};

// --- Story Page Schemas ---

export const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "SARAJOO 브랜드 스토리 — 동백꽃에서 영감받은 도자기 괄사",
  description:
    "동백꽃에서 영감받은 1,250°C 고온 소성 아티스트 핸드메이드 세라믹 괄사의 탄생 이야기.",
  author: {
    "@type": "Organization",
    name: "SARAJOO",
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "SARAJOO",
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/og-image.png`,
    },
  },
  image: `${SITE_URL}/images/story/philosophy-bms.jpg`,
  inLanguage: "ko",
};

// --- Breadcrumb Helper ---

const BREADCRUMB_MAP: Record<string, string> = {
  product: "제품 소개",
  ritual: "리추얼 가이드",
  story: "브랜드 스토리",
};

export function breadcrumbSchema(page?: string) {
  const items = [
    {
      "@type": "ListItem" as const,
      position: 1,
      name: "홈",
      item: SITE_URL,
    },
  ];

  if (page && BREADCRUMB_MAP[page]) {
    items.push({
      "@type": "ListItem" as const,
      position: 2,
      name: BREADCRUMB_MAP[page],
      item: `${SITE_URL}/${page}`,
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}
