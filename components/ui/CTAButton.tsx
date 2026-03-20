"use client";

import Link from "next/link";
import * as m from "framer-motion/m";
import { SARAJOO_EASE, DURATION } from "@/lib/motion";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "outline";

export default function CTAButton({
  href,
  children,
  variant = "primary",
  external = false,
  className,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
  onClick?: () => void;
}) {
  const baseClasses =
    "inline-flex items-center justify-center font-sans text-sm md:text-base transition-colors";

  const variantClasses: Record<Variant, string> = {
    primary:
      "bg-brand-gold text-white px-8 py-3.5 rounded-none hover:bg-brand-dark",
    secondary:
      "bg-transparent text-brand-gold border border-brand-gold px-8 py-3.5 rounded-none hover:bg-brand-gold hover:text-white",
    outline:
      "text-brand-body underline underline-offset-4 decoration-brand-gold hover:text-brand-gold",
  };

  const combined = clsx(baseClasses, variantClasses[variant], className);

  const content = (
    <m.span
      className="inline-flex items-center gap-2"
      whileHover={{ scale: variant === "outline" ? 1 : 1.05 }}
      transition={{ duration: DURATION.quick, ease: SARAJOO_EASE }}
    >
      {children}
    </m.span>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combined}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={combined} onClick={onClick}>
      {content}
    </Link>
  );
}
