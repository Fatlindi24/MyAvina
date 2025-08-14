"use client";

import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

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
    <div className="container mx-auto px-4 py-8 prompt">
      <h1 className="text-3xl font-bold mb-8 text-black prompt">
        Explore Our Menopause Solutions
      </h1>
      {categories.map((category) => {
        const items = products.filter((p) => p.category === category);
        const shownItems = items.slice(0, visible[category]);
        return (
          <div key={category} className="mb-12">
            <h2 className="text-xl font-semibold mb-4">{category}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {shownItems.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {visible[category] < items.length && (
              <div className="mt-4 text-center">
                <Link
                  href={`/shop/${category.toLowerCase().replace(/\s+/g, "-")}`}
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
  );
}
