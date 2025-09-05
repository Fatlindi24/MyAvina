// src/app/articles/[slug]/page.tsx
import { notFound } from "next/navigation";
import { articles, type Article } from "@/data/articles";
import { topics, type Topic } from "@/data/topics";
import ArticleClient from "./ArticleClient";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = articles.find((a) => a.slug === slug);
  if (!article) return notFound();

  const topic =
    topics.find(
      (t) => t.name.toLowerCase() === article.category.toLowerCase()
    ) ?? null;

  const related = articles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3);

  return <ArticleClient article={article} topic={topic} related={related} />;
}
