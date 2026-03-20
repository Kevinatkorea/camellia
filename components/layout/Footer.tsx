import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-beige border-t border-brand-gold/30">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8 py-16 md:py-20">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand */}
          <div>
            <p className="font-serif font-light text-2xl tracking-serif-wide text-brand-dark">
              SARAJOO
            </p>
            <p className="font-display font-light text-xs tracking-label uppercase text-brand-muted mt-2">
              Body · Mind · Soul
            </p>
            <p className="font-sans text-sm text-brand-muted mt-4 leading-body-kr">
              전자레인지 30초, 냉동실 1시간.
              <br />
              작은 습관이 만드는 놀라운 변화를 경험하세요.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-display font-light text-xs tracking-label uppercase text-brand-muted mb-4">
              Navigate
            </p>
            <nav className="flex flex-col gap-2">
              <Link
                href="/product"
                className="font-sans text-sm text-brand-body hover:text-brand-gold transition-colors"
              >
                제품 소개
              </Link>
              <Link
                href="/ritual"
                className="font-sans text-sm text-brand-body hover:text-brand-gold transition-colors"
              >
                리추얼 가이드
              </Link>
              <Link
                href="/story"
                className="font-sans text-sm text-brand-body hover:text-brand-gold transition-colors"
              >
                브랜드 스토리
              </Link>
              <Link
                href="/shop"
                className="font-sans text-sm text-brand-body hover:text-brand-gold transition-colors"
              >
                구매하기
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div>
            <p className="font-display font-light text-xs tracking-label uppercase text-brand-muted mb-4">
              Connect
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://instagram.com/sarajoo_official"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-brand-body hover:text-brand-gold transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://pf.kakao.com/PLACEHOLDER"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-brand-body hover:text-brand-gold transition-colors"
              >
                카카오 채널
              </a>
            </div>
          </div>
        </div>

        {/* Bottom — Legal */}
        <div className="mt-12 pt-8 border-t border-brand-taupe/20">
          <div className="font-sans text-xs text-brand-muted/70 leading-relaxed space-y-1">
            <p>상호: SARAJOO | 대표: [대표자명] | 사업자등록번호: [000-00-00000]</p>
            <p>통신판매업 신고번호: 제0000-서울강남-00000호</p>
            <p>주소: [사업장 주소] | 고객센터: [전화번호]</p>
            <p className="mt-2">
              © {new Date().getFullYear()} SARAJOO. All rights reserved. |
              특허 출원 중
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
