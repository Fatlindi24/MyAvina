"use client";
import { useState, useMemo } from "react";
import { reviews } from "@/data/reviews";
import ReviewCard from "@/components/ReviewCard";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

export default function ReviewsSection() {
  const [filter, setFilter] = useState("All Reviews");
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false); // dropdown state
  const perPage = 4;

  // ✅ Dynamically extract unique symptoms from reviews
  const symptoms = useMemo(() => {
    const unique = Array.from(new Set(reviews.map((r) => r.symptom)));
    return ["All Reviews", ...unique];
  }, []);

  // Apply filter
  const filtered =
    filter === "All Reviews"
      ? reviews
      : reviews.filter((r) => r.symptom === filter);

  // Pagination logic
  const totalPages = Math.ceil(filtered.length / perPage);
  const start = (page - 1) * perPage;
  const paginated = filtered.slice(start, start + perPage);

  // ✅ Generate page numbers with ellipsis
  const getPageNumbers = () => {
    const numbers: (number | string)[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) numbers.push(i);
    } else {
      if (page <= 3) {
        numbers.push(1, 2, 3, "...", totalPages);
      } else if (page >= totalPages - 2) {
        numbers.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        numbers.push(1, "...", page - 1, page, page + 1, "...", totalPages);
      }
    }
    return numbers;
  };

  const numbers = getPageNumbers();

  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-[32px] md:text-[48px] font-medium md:mb-12 mb-6">
        Reviews
      </h2>

      <div className="grid md:grid-cols-[360px_1fr] gap-8">
        {/* Left Filters (desktop only) */}
        <div className="hidden md:flex flex-col gap-2">
          <h3 className="font-medium text-md text-lg mb-2">By Symptom</h3>
          {symptoms.map((sym) => (
            <button
              key={sym}
              onClick={() => {
                setFilter(sym);
                setPage(1);
              }}
              className={`px-4 py-3 rounded-full text-md text-left font-medium uppercase transition ${
                filter === sym
                  ? "bg-[#C49FEB]/60 text-white"
                  : "bg-white border border-[#d3d3d3]/50 text-black/50 hover:bg-gray-300"
              }`}
            >
              {sym}
            </button>
          ))}
        </div>

        {/* Reviews + Filters for mobile */}
        <div>
          {/* ✅ Mobile custom dropdown */}
          <div className="relative md:hidden mb-6">
            <button
              onClick={() => setOpen(!open)}
              className="w-full flex justify-between items-center px-4 py-3 rounded-full bg-white border border-gray-300 text-black/70 font-medium uppercase"
            >
              {filter}
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>
            {open && (
              <div className="absolute mt-2 w-full bg-white shadow-lg rounded-lg border border-gray-200 z-10">
                {symptoms.map((sym) => (
                  <button
                    key={sym}
                    onClick={() => {
                      setFilter(sym);
                      setPage(1);
                      setOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition ${
                      filter === sym
                        ? "bg-[#C49FEB]/60 text-white"
                        : "hover:bg-gray-100 text-black/70"
                    }`}
                  >
                    {sym}
                  </button>
                ))}
              </div>
            )}
          </div>
          {/* Mobile: 1x3 grid */}
          <div className="grid grid-cols-1 gap-6 md:hidden items-stretch">
            {filtered.slice(0, 3).map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          {/* Desktop: 2x2 grid */}
          <div className="hidden md:grid grid-cols-2 gap-6 items-stretch">
            {paginated.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-10">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="flex items-center justify-center disabled:opacity-40"
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
                className="flex items-center justify-center disabled:opacity-40"
                aria-label="Next page"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
