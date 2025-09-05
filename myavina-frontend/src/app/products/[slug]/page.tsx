// src/app/products/[slug]/page.tsx
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { testimonials } from "@/data/testimonials";
import ProductClient from "./ProductClient";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Next 15 expects `params` to be a Promise
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);
  if (!product) return notFound();

  // If you want to compute related on the server, do it here or keep it client-side.
  return <ProductClient product={product} testimonials={testimonials} />;
}
