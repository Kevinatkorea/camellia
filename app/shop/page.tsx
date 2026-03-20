"use client";

import { useEffect } from "react";
import { SHOP_URL } from "@/lib/constants";

export default function ShopPage() {
  useEffect(() => {
    window.location.href = SHOP_URL;
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <p className="font-sans text-brand-muted">구매 페이지로 이동 중...</p>
    </main>
  );
}
