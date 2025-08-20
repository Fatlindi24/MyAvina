"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { topics } from "@/data/topics";
import { articles } from "@/data/articles";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TopicsMenu from "@/components/TopicsMenu";

export default function TopicPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const topic = topics.find((t) => t.slug === slug);
  const filteredArticles = articles.filter(
    (a) => a.category.toLowerCase().replace(/\s+/g, "-") === slug
  );

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedArticles = filteredArticles.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    pages.push(1);
    if (currentPage > 3) pages.push("...");
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      pages.push(i);
    }
    if (currentPage < totalPages - 2) pages.push("...");
    pages.push(totalPages);
    return pages;
  };

  if (!topic) {
    return (
      <div className="container flex flex-col justify-center items-center gap-20 mx-auto py-10">
        <h1 className="font-bold text-3xl md:text-7xl">Topic not found.</h1>
        {/* back to home button */}
        <Link
          href="/"
          className="text-white bg-[#774180] px-10 py-5 md:px-20 md:py-10 rounded-4xl hover:bg-[#5c3164] transition-all text-[20px] font-regular"
        >
          Go back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 space-y-10 prompt px-4">
      {/* Breadcrumbs */}
      <nav className="text-[16px] text-gray-500 mb-4 prompt">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        /{" "}
        <Link href="/learn" className="hover:underline">
          Learn
        </Link>{" "}
        / <span className="text-gray-700">{topic.name}</span>
      </nav>

      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-[350px_1fr] gap-8 items-start">
        <TopicsMenu />

        <div>
          <h1 className="text-5xl font-bold  text-black">{topic.name}</h1>
          <p className="mt-2 text-[20px] text-gray-800">{topic.description}</p>
          <div className="mt-6 text-[16px] relative w-full h-96">
            <Image
              src={topic.image}
              alt={topic.name}
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <p className="mt-4 text-gray-700 leading-relaxed">
            {topic.longDescription}
          </p>
        </div>
      </div>

      <div className="border-b border-gray-300"></div>

      {/* Articles */}
      <div>
        <h2 className="mb-6 text-gray-500 uppercase tracking-wide text-[20px] prompt-extralight">
          All Articles for "{topic.name}"
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {paginatedArticles.map((article) => (
            <div key={article.slug} className="rounded-lg overflow-hidden">
              {/* Image full width + fixed height */}
              <div className="relative w-full h-[400px]">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Text content */}
              <div className="py-4">
                <div className="flex justify-between">
                  <p className="text-[14px] prompt-light text-gray-500 uppercase">
                    Journal / {article.category}
                  </p>
                  <p className="text-[14px] prompt-light text-gray-500 uppercase">
                    {article.date} | {article.readTime}
                  </p>
                </div>
                <h3 className="mt-2 font-regular text-[20px] text-black">
                  {article.title}
                </h3>
                <p className="mt-1 text-gray-600 prompt text-[14px]">
                  {article.excerpt}
                </p>
                <Link
                  href={`/articles/${article.slug}`}
                  className="inline-flex items-center mt-4 px-4 py-2 text-white bg-black rounded-full hover:bg-gray-800 transition"
                >
                  Read More
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8">
            {/* Prev */}
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="disabled:opacity-30 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Page Numbers */}
            {getPageNumbers().map((page, i) =>
              typeof page === "number" ? (
                <button
                  key={i}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 flex items-center justify-center rounded-full transition ${
                    currentPage === page
                      ? "bg-[#774180] text-white font-light "
                      : "text-black hover:text-[#774180] cursor-pointer"
                  }`}
                >
                  {page}
                </button>
              ) : (
                <span key={i} className="px-2 text-black">
                  {page}
                </span>
              )
            )}

            {/* Next */}
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="disabled:opacity-30 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
