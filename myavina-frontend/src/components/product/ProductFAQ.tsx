"use client";

import { useEffect, useRef, useState } from "react";
import { PlusCircle } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

interface ProductFAQProps {
  title: string;
  faq: FAQItem[];
}

function Row({
  idx,
  q,
  a,
  isOpen,
  onToggle,
}: {
  idx: number;
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [h, setH] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => setH(el.scrollHeight);
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [a]);

  return (
    <div className="py-5 border-b border-gray-200 last:border-0">
      <button
        className="flex w-full items-center justify-between text-left text-lg font-medium text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#774180]/40 rounded-md"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`pf-panel-${idx}`}
      >
        <span className="font-normal text-[16px] md:text-[32px] leading-[130%]">
          {q}
        </span>

        <span
          className={[
            "inline-flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full ",
            "transition-all duration-300",
            isOpen ? "bg-white text-black" : "bg-white text-black",
          ].join(" ")}
        >
          <PlusCircle
            className={[
              "h-6 w-6 md:h-8 md:w-8 transition-transform duration-300",
              isOpen ? "rotate-225" : "rotate-0",
            ].join(" ")}
            strokeWidth={2}
          />
        </span>
      </button>

      <div
        id={`pf-panel-${idx}`}
        role="region"
        aria-hidden={!isOpen}
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{ maxHeight: isOpen ? h : 0 }}
      >
        <div
          ref={ref}
          className={[
            "pr-1 pt-3 md:pt-4 text-black/70 font-light",
            "text-[15px] md:text-xl leading-relaxed",
            "transition-all duration-300",
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1",
          ].join(" ")}
        >
          {a}
        </div>
      </div>
    </div>
  );
}

export default function ProductFAQ({ title, faq }: ProductFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  if (!faq || faq.length === 0) return null;

  return (
    <section className="container mx-auto px-6 mb-16">
      <h2 className="text-[32px] md:text-[40px] font-normal text-gray-900 mb-6 md:mb-8">
        MYAVINA {title}
      </h2>

      <div className="divide-y-0">
        {faq.map((item, idx) => (
          <Row
            key={idx}
            idx={idx}
            q={item.q}
            a={item.a}
            isOpen={openIndex === idx}
            onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
          />
        ))}
      </div>
    </section>
  );
}
