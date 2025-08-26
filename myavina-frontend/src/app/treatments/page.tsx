"use client";

import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import SectionSix from "@/components/AboutComponents/SectionSix";

export default function ShopPage() {
  const categories = Array.from(new Set(products.map((p) => p.category)));
  const [visible, setVisible] = useState<Record<string, number>>(
    Object.fromEntries(categories.map((c) => [c, 4]))
  );

  const handleSeeMore = (category: string) => {
    setVisible((prev) => ({
      ...prev,
      [category]: products.filter((p) => p.category === category).length,
    }));
  };

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-[32px] md:text-[48px] font-medium max-w-lg leading-tight mb-8 text-black ">
            Explore Our Menopause Solutions
          </h1>
          <p className="font-normal text-[16px] md:text-[20px] max-w-md">
            Doctor-recommended treatments designed to support your unique
            journey.
          </p>
        </div>
        <div className="border-b border-[#D3D3D3]"></div>
        {categories.map((category) => {
          const items = products.filter((p) => p.category === category);
          const shownItems = items.slice(0, visible[category]);
          return (
            <div key={category} className="my-12">
              <h2 className="text-xl md:text-2xl font-normal mb-4 uppercase">
                {category}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {shownItems.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              {visible[category] < items.length && (
                <div className="mt-4 text-center">
                  <Link
                    href={`/treatments/${category
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="mt-4 inline-flex items-center text-sm text-purple-700 font-medium hover:underline"
                  >
                    See More
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <SectionSix />
    </div>
  );
}
