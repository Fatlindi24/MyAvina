"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { topics } from "@/data/topics";
import { articles } from "@/data/articles";
import { ChevronRight } from "lucide-react";
import TopicsMenu from "@/components/TopicsMenu";

export default function LearnLandingPage() {
  const shuffledArticles = [...articles].sort(() => 0.5 - Math.random());

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(shuffledArticles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedArticles = shuffledArticles.slice(
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

  return (
    <div className="container mx-auto py-10 space-y-10 prompt px-4">
      {/* Breadcrumbs */}
      <nav className="text-[16px] text-gray-500 mb-4 prompt">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        / <span className="text-gray-700">Learn</span>
      </nav>

      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-[350px_1fr] gap-8 items-start">
        {/* Left: Topics Menu */}
        <TopicsMenu />

        {/* Right: Page Info */}
        <div>
          <h1 className="text-5xl  text-black prompt-bold">Learn</h1>
          <p className="mt-2 text-[20px] text-gray-600">
            Explore expert insights, guides, and tips to help you navigate
            menopause, health, and wellness with confidence.
          </p>

          <div className="mt-6 relative w-full h-96">
            <Image
              src="/images/learn/learn-1.png"
              alt="Learn"
              fill
              className="rounded-lg object-cover"
            />
          </div>

          <p className="mt-4 text-gray-700 leading-relaxed text-[16px]">
            A hot flash feels like a sudden wave of heat that spreads through
            the body, often bringing a flushed face and sweating. They can also
            cause a racing heartbeat, dizziness, or anxiety for some women.
            <br />
            The good news? There are simple ways to ease hot flashes — like
            wearing light clothing, avoiding triggers such as spicy foods or
            alcohol, and practicing stress-relieving habits like deep breathing.
            Hormone replacement therapy (HRT) can also help reduce hot flashes
            and protect your overall health if they’re severe. Knowing what to
            expect and how to manage them can make a real difference in your
            day-to-day comfort.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-b border-gray-300"></div>

      {/* Articles Section */}
      <div>
        <h2 className="mb-6 text-gray-500 uppercase tracking-wide text-sm">
          All Articles
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
                  <p className="text-xs text-gray-500 uppercase">
                    Journal / {article.category}
                  </p>
                  <p className="text-xs text-gray-500 uppercase">
                    {article.date} | {article.readTime}
                  </p>
                </div>
                <h3 className="mt-2 font-semibold text-lg text-black">
                  {article.title}
                </h3>
                <p className="mt-1 text-gray-800 text-sm">{article.excerpt}</p>
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
          <div className="flex justify-center gap-2 mt-8">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded-full bg-gray-200 text-black  disabled:opacity-50"
            >
              ‹
            </button>
            {getPageNumbers().map((page, i) =>
              typeof page === "number" ? (
                <button
                  key={i}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 rounded-full ${
                    currentPage === page
                      ? "bg-purple-600 text-white  font-bold"
                      : "text-gray-400 hover:bg-gray-300"
                  }`}
                >
                  {page}
                </button>
              ) : (
                <span key={i} className="px-3 py-1">
                  {page}
                </span>
              )
            )}
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded-full bg-gray-200 text-black  disabled:opacity-50"
            >
              ›
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
