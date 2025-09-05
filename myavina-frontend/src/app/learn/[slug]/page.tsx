// src/app/learn/[slug]/page.tsx
import { notFound } from "next/navigation";
import { topics, type Topic } from "@/data/topics";
import { articles, type Article } from "@/data/articles";
import TopicClient from "./TopicClient";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const topic = topics.find((t) => t.slug === slug) ?? null;
  if (!topic) return notFound();

  // Filter articles that belong to this topic/category
  const filteredArticles = articles.filter(
    (a) => a.category.toLowerCase().replace(/\s+/g, "-") === slug
  );

  // Pass only serializable props to the client
  return <TopicClient topic={topic} filteredArticles={filteredArticles} />;
}
