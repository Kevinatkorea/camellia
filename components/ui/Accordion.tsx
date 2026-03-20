"use client";

import { useState } from "react";
import * as m from "framer-motion/m";
import { AnimatePresence } from "framer-motion";
import { SARAJOO_EASE, DURATION } from "@/lib/motion";

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-brand-taupe/20">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-sans font-medium text-brand-dark pr-4">
          {question}
        </span>
        <m.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: DURATION.quick, ease: SARAJOO_EASE }}
          className="text-brand-gold text-xl flex-shrink-0"
        >
          +
        </m.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: DURATION.standard, ease: SARAJOO_EASE }}
            className="overflow-hidden"
          >
            <div className="pb-5">
              <p className="font-sans text-brand-body leading-body-kr">
                {answer}
              </p>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Accordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="glass rounded-sm p-6 md:p-8">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() =>
            setOpenIndex(openIndex === index ? null : index)
          }
        />
      ))}
    </div>
  );
}
