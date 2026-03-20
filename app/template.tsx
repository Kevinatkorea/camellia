"use client";

import * as m from "framer-motion/m";
import { SARAJOO_EASE } from "@/lib/motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: SARAJOO_EASE }}
    >
      {children}
    </m.div>
  );
}
