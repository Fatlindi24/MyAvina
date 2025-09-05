// src/app/symptoms/[slug]/page.tsx
import { notFound } from "next/navigation";
import { symptoms, type Symptom } from "@/data/symptoms";
import { products, type Product } from "@/data/products";
import SymptomClient from "./SymptomClient";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const s = symptoms.find((x) => x.slug === slug);
  if (!s) return notFound();

  const recommended = products.filter((p) =>
    s.recommendedProductIds.includes(p.id)
  );

  const related = symptoms.filter((x) => s.relatedSymptoms.includes(x.slug));

  // Pass serializable props only
  return (
    <SymptomClient symptom={s} recommended={recommended} related={related} />
  );
}
