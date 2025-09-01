// app/faq/page.tsx
"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { faqCategories, type FaqCategoryId } from "@/data/faqPage";
import { PlusCircle } from "lucide-react";

function AccordionItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
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
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [a]);

  return (
    <div className="py-5">
      <button
        className="flex w-full items-center justify-between text-left text-lg font-medium text-gray-900"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-normal text-md md:text-[32px] "> {q}</span>
        <span
          className={`inline-flex h-6 w-6  md:w-8 items-center justify-center rounded-full text-blacks transition-transform duration-300 ${
            isOpen ? "rotate-225" : "rotate-0"
          }`}
        >
          <PlusCircle className="md:h-18 md:w-18   h-10 w-10" strokeWidth={2} />
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{ height: isOpen ? h : 0 }}
      >
        <div
          ref={ref}
          className={`pr-1 pt-3 text-base text-black font-light text-md md:text-xl transition-all duration-300 ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
          }`}
        >
          {a}
        </div>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [activeCat, setActiveCat] = useState<FaqCategoryId>("GENERAL");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const current = useMemo(
    () => faqCategories.find((c) => c.id === activeCat)!,
    [activeCat]
  );

  return (
    <section className="container mx-auto px-6 py-12 md:py-20">
      {/* Header */}
      <div className="md:text-center mb-10 md:mb-16">
        <h1 className="text-[32px] md:text-[48px] font-medium mb-2">
          How can we help?
        </h1>
        <p className="text-black text-md md:text-xl max-w-2xl mx-auto">
          Answers to the most common questions about menopause care, treatments,
          and your MyAvina experience.
        </p>
        <hr className="mt-8 border-gray-200" />
      </div>

      {/* Tabs */}
      <div className="flex justify-between gap-2 mb-12 overflow-x-auto scrollbar-hide">
        {faqCategories.map((cat) => {
          const active = cat.id === activeCat;
          return (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCat(cat.id);
                setOpenIndex(null);
              }}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-normal uppercase tracking-wide border transition
          ${
            active
              ? "bg-[#774180] text-white border-[#774180]"
              : "border-gray-200 text-black/50 hover:bg-gray-100"
          }`}
              aria-pressed={active}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* FAQ list (filtered) */}
      <div className=" mx-auto divide-y divide-gray-200">
        {current.items.map((faq, i) => (
          <AccordionItem
            key={`${activeCat}-${i}`}
            q={faq.q}
            a={faq.a}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </section>
  );
}
