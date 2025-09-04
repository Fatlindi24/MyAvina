"use client";

import { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";
import type { Product } from "@/data/products";

function AccordionRow({
  title,
  content,
}: {
  title: string;
  content: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight);
    }
  }, [content]);

  return (
    <div className="border-b border-gray-200 py-4">
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center gap-4 cursor-pointer font-medium text-left"
        aria-expanded={isOpen}
      >
        <Plus
          className={`w-4 h-4 text-purple-600 transition-transform duration-200 ${
            isOpen ? "rotate-225" : "rotate-0"
          }`}
          aria-hidden="true"
        />
        {title}
      </button>

      {/* Animated content */}
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? height : 0 }}
      >
        <div
          ref={ref}
          className={`pt-1 text-gray-600 transition-all duration-300 ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
          }`}
        >
          {content}
        </div>
      </div>
    </div>
  );
}

export default function TreatmentInformation({
  product,
}: {
  product: Product;
}) {
  const items = [
    {
      title: "DESCRIPTION",
      content: product.description && <p>{product.description}</p>,
    },
    { title: "HOW TO USE", content: product.usage && <p>{product.usage}</p> },
    {
      title: "INGREDIENTS",
      content: product.ingredients?.length ? (
        <ul className="list-disc list-inside space-y-1">
          {product.ingredients.map((x, i) => (
            <li key={i}>{x}</li>
          ))}
        </ul>
      ) : null,
    },
    {
      title: "SAFETY INFORMATION",
      content: product.safety && <p>{product.safety}</p>,
    },
    {
      title: "BENEFITS",
      content: product.benefits?.length ? (
        <ul className="list-disc list-inside space-y-1">
          {product.benefits.map((x, i) => (
            <li key={i}>{x}</li>
          ))}
        </ul>
      ) : null,
    },
  ].filter((i) => i.content);

  if (!items.length) return null;

  return (
    <section className="container mx-auto mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Treatment Information
      </h2>
      <div className="flex flex-col">
        {items.map(({ title, content }) => (
          <AccordionRow key={title} title={title} content={content} />
        ))}
      </div>
    </section>
  );
}
