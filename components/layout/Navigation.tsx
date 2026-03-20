"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import * as m from "framer-motion/m";
import { AnimatePresence } from "framer-motion";
import { SARAJOO_EASE, DURATION } from "@/lib/motion";
import { SHOP_URL } from "@/lib/constants";
import clsx from "clsx";

const NAV_ITEMS = [
  { href: "/product", label: "Product", external: false },
  { href: "/ritual", label: "Ritual", external: false },
  { href: "/story", label: "Story", external: false },
  { href: SHOP_URL, label: "Shop", external: true },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) setMobileOpen(false);
    },
    [mobileOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileOpen, handleKeyDown]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 md:px-8 glass border-b border-brand-taupe/20"
      >
        <Link
          href="/"
          className="font-serif font-light text-xl tracking-serif-wide text-brand-dark"
        >
          SARAJOO
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) =>
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display font-light text-sm tracking-label uppercase transition-colors relative text-brand-body hover:text-brand-gold"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "font-display font-light text-sm tracking-label uppercase transition-colors relative text-brand-body hover:text-brand-gold",
                  pathname === item.href && "text-brand-gold"
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <m.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-brand-gold"
                    transition={{
                      duration: DURATION.quick,
                      ease: SARAJOO_EASE,
                    }}
                  />
                )}
              </Link>
            )
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={mobileOpen}
        >
          <span
            className={clsx(
              "w-5 h-px transition-all origin-center bg-brand-dark",
              mobileOpen && "rotate-45 translate-y-[3.5px]"
            )}
          />
          <span
            className={clsx(
              "w-5 h-px transition-all origin-center bg-brand-dark",
              mobileOpen && "-rotate-45 -translate-y-[3.5px]"
            )}
          />
        </button>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: DURATION.quick, ease: SARAJOO_EASE }}
            className="fixed inset-0 z-40 glass flex flex-col items-center justify-center gap-10"
            role="dialog"
            aria-modal="true"
            aria-label="모바일 메뉴"
          >
            {NAV_ITEMS.map((item) =>
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif font-light text-3xl tracking-serif-wide transition-colors text-brand-dark"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    "font-serif font-light text-3xl tracking-serif-wide transition-colors",
                    pathname === item.href
                      ? "text-brand-gold"
                      : "text-brand-dark"
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
