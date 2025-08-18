// components/ProductPage.tsx
"use client";

import { products } from "@/data/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function ProductPageComponent({
  category,
  slug,
}: {
  category?: string;
  slug: string;
}) {
  // Find product by slug
  const product = products.find((p) => p.slug === slug);

  if (!product) return notFound();

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <Link href="/">Home</Link> /{" "}
          {category && <Link href={`/treatments/${category}`}>{category}</Link>}{" "}
          / <span>{product.name}</span>
        </div>

        {/* Product Content */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Image */}
          <div className="relative w-full h-96">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>

          {/* Details */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-700 mb-6">{product.description}</p>

            <div className="text-2xl font-semibold mb-6">${product.price}</div>

            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
