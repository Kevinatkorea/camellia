export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SARAJOO",
    url: "https://kevinatkorea.github.io/camellia",
    logo: "https://kevinatkorea.github.io/camellia/images/hero/hero-main.jpg",
    description: "까멜리아 도자기 괄사 브랜드. 1,250°C 고온 소성 세라믹 괄사.",
    sameAs: ["https://www.instagram.com/sarajoosj?igsh=MTFmNjAzbHc1MWN1cA=="],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "SARAJOO 까멜리아 도자기 괄사 핫앤쿨 세트",
    description: "1,250°C 고온 소성 까멜리아 도자기 괄사. 핫 & 쿨 1쌍 세트로 5분 온도 리추얼.",
    brand: { "@type": "Brand", name: "SARAJOO" },
    image: "https://kevinatkorea.github.io/camellia/images/product/product-hero.jpg",
    offers: {
      "@type": "Offer",
      price: "91000",
      priceCurrency: "KRW",
      availability: "https://schema.org/InStock",
      url: "https://smartstore.naver.com/PLACEHOLDER",
    },
    material: "세라믹 (도자기)",
    category: "뷰티 > 페이스 마사지 도구",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </>
  );
}
