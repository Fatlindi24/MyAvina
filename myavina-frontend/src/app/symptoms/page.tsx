"use client";

import { useMemo, useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import SymptomsMenu from "@/components/SymptomsMenu";
import { symptoms } from "@/data/symptoms";
import SymptomCard from "@/components/SymptomCard";
import SectionSix from "@/components/AboutComponents/SectionSix";

export default function SymptomsIndex() {
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 6;

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return symptoms.filter((s) => {
      if (!term) return true;
      return (
        s.name.toLowerCase().includes(term) ||
        s.short.toLowerCase().includes(term) ||
        s.tags.some((t) => t.toLowerCase().includes(term))
      );
    });
  }, [q]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  const pageItems = filtered.slice(start, start + PAGE_SIZE);

  useMemo(() => setPage(1), [q]);

  const numbers = useMemo(() => {
    const maxShown = 7;
    if (totalPages <= maxShown)
      return Array.from({ length: totalPages }, (_, i) => i + 1) as (
        | number
        | string
      )[];
    if (page <= 4) return [1, 2, 3, 4, 5, "…", totalPages];
    if (page >= totalPages - 3)
      return [
        1,
        "…",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    return [1, "…", page - 1, page, page + 1, "…", totalPages];
  }, [page, totalPages]);

  return (
    <div>
      <div className="container mx-auto px-6 pt-15 pb-24">
        {/* Hero */}
        <header className="mb-5">
          <h1 className="text-[32px] md:text-[48px] font-medium leading-tight text-black max-w-2xl">
            Myavina Symptom
            <br />
            Tracker &amp; Insights
          </h1>
          <p className="mt-3 text-[16px] md:text-[18px] max-w-xl text-gray-700">
            Stay informed with reliable, expert-backed knowledge about menopause
            and its symptoms, designed to support you every step of the way.
          </p>
        </header>

        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#774180] flex items-center justify-center">
              <Search className="w-5 h-5 text-white" />
            </div>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="What are you looking for?"
              className="w-full h-15 pl-15 pr-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C9A8D9]"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-8">
          <SymptomsMenu />

          <section>
            <h2 className="text-lg md:text-xl font-light text-black mb-8">
              ALL SYMPTOMS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-5 md:gap-x-5 md:gap-y-10">
              {pageItems.map((s) => (
                <SymptomCard
                  key={s.slug}
                  slug={s.slug}
                  name={s.name}
                  short={s.short}
                  image={s.image}
                  lastReviewed={s.lastReviewed}
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-10">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className=" flex items-center justify-center disabled:opacity-40"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {numbers.map((n, idx) =>
                  typeof n === "number" ? (
                    <button
                      key={idx}
                      onClick={() => setPage(n)}
                      className={`px-4 py-2 rounded-full text-md ${
                        n === page
                          ? "bg-[#774180] text-white"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {n}
                    </button>
                  ) : (
                    <span key={idx} className="px-2 text-gray-400">
                      {n}
                    </span>
                  )
                )}

                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="  flex items-center justify-center disabled:opacity-40"
                  aria-label="Next page"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
      <SectionSix />
    </div>
  );
}
