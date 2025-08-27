"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { articles } from "@/data/articles"; // expects: { slug, title, image, date, excerpt? }[]

type Article = {
  slug: string;
  title: string;
  image: string;
  date: string; // "July 28, 2025"
  excerpt?: string; // optional
  tags?: string[]; // optional: ["HOT FLASHES", "DRYNESS"]
};

// --- 1) Symptoms list (left sidebar)
const SYMPTOMS = [
  "ACNE",
  "ALLERGIES",
  "ANXIETY",
  "ARTHRITIS",
  "BLOATING",
  "BODY ODOR",
  "BRAIN FOG",
  "BREAST PAIN",
  "BRUISING",
  "CHANGES IN FINGERNAILS",
  "CLUMSINESS",
  "CONSTIPATION",
  "CRAMPS",
  "DECREASED",
  "DEPRESSION",
  "DRY SKIN",
  "FATIGUE",
  "HAIR LOSS",
  "HOT FLASHES",
  "SLEEP PROBLEMS",
];

// --- 2) Simple helpers
const slugify = (s: string) => s.toLowerCase().replace(/\s+/g, "-");

// Try to decide if an article belongs to a symptom.
// Priority: explicit tags → fallback to title/excerpt contains the symptom words.
function articleMatchesSymptom(a: Article, symptom: string) {
  if (!symptom || symptom === "ALL") return true;
  const sym = symptom.toLowerCase();
  if (Array.isArray(a.tags) && a.tags.some((t) => t.toLowerCase() === sym))
    return true;
  const hay = (a.title + " " + (a.excerpt ?? "")).toLowerCase();
  return hay.includes(sym);
}

export default function SymptomsPage() {
  // --- 3) UI state
  const [activeSymptom, setActiveSymptom] = useState<string>("ALL");
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 6;

  // --- 4) Filtered & paginated articles
  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return (articles as Article[])
      .filter((a) => articleMatchesSymptom(a, activeSymptom))
      .filter((a) =>
        !term
          ? true
          : a.title.toLowerCase().includes(term) ||
            (a.excerpt ?? "").toLowerCase().includes(term)
      );
  }, [activeSymptom, q]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  const pageItems = filtered.slice(start, start + PAGE_SIZE);

  // reset to page 1 when filters change
  useMemo(() => setPage(1), [activeSymptom, q]);

  // page numbers like your mock (1 2 3 4 5 6 7 with chevrons)
  const numbers = useMemo(() => {
    const maxShown = 7;
    if (totalPages <= maxShown)
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (page <= 4)
      return [1, 2, 3, 4, 5, "…", totalPages] as (number | string)[];
    if (page >= totalPages - 3)
      return [
        1,
        "…",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ] as (number | string)[];
    return [1, "…", page - 1, page, page + 1, "…", totalPages] as (
      | number
      | string
    )[];
  }, [page, totalPages]);

  return (
    <div className="container mx-auto px-6 pt-10 pb-24">
      {/* Hero */}
      <header className="mb-6">
        <h1 className="text-[32px] md:text-[48px] font-medium leading-tight text-black max-w-2xl">
          Myavina Symptom
          <br />
          Tracker &amp; Insights
        </h1>
        <p className="mt-3 text-[14px] md:text-[16px] max-w-xl text-gray-700">
          Stay informed with reliable, expert-backed knowledge about menopause
          and its symptoms—designed to support you every step of the way.
        </p>
      </header>

      {/* Search bar */}
      <div className="mb-8">
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#774180] flex items-center justify-center">
            <Search className="w-4 h-4 text-white" />
          </div>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="What are you looking for?"
            className="w-full h-12 pl-12 pr-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C9A8D9]"
          />
        </div>
      </div>

      {/* Content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
        {/* Left sidebar (Symptoms) */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          {/* Mobile collapsible */}
          <details className="mb-4 lg:hidden bg-white rounded-xl border border-gray-200">
            <summary className="cursor-pointer list-none px-4 py-3 font-semibold">
              SYMPTOMS
            </summary>
            <ul className="divide-y border-t">
              <li>
                <button
                  onClick={() => setActiveSymptom("ALL")}
                  className={`w-full text-left px-4 py-2 text-sm ${
                    activeSymptom === "ALL"
                      ? "bg-black text-white"
                      : "hover:bg-gray-50"
                  }`}
                >
                  All
                </button>
              </li>
              {SYMPTOMS.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => setActiveSymptom(s)}
                    className={`w-full text-left px-4 py-2 text-sm ${
                      activeSymptom === s
                        ? "bg-black text-white"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </details>

          {/* Desktop list */}
          <div className="hidden lg:block bg-white rounded-xl border border-gray-200">
            <div className="px-4 py-3 font-semibold">SYMPTOMS</div>
            <ul className="divide-y">
              <li>
                <button
                  onClick={() => setActiveSymptom("ALL")}
                  className={`w-full text-left px-4 py-2 text-sm ${
                    activeSymptom === "ALL"
                      ? "bg-black text-white"
                      : "hover:bg-gray-50"
                  }`}
                >
                  All
                </button>
              </li>
              {SYMPTOMS.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => setActiveSymptom(s)}
                    className={`w-full text-left px-4 py-2 text-sm ${
                      activeSymptom === s
                        ? "bg-black text-white"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Right column: All Articles */}
        <section>
          <h2 className="text-xs tracking-widest text-gray-700 mb-3">
            ALL ARTICLES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pageItems.map((a) => (
              <article
                key={a.slug}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                {/* image */}
                <Link href={`/learn/${a.slug}`}>
                  <div className="relative w-full h-56">
                    <Image
                      src={a.image}
                      alt={a.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </Link>

                {/* body */}
                <div className="p-4">
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest">
                    {a.date}
                  </p>
                  <h3 className="mt-1 text-[16px] md:text-[18px] font-medium leading-snug">
                    <Link href={`/learn/${a.slug}`} className="hover:underline">
                      {a.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-[13px] text-gray-700 line-clamp-3">
                    {a.excerpt ??
                      "Hormonal shifts during menopause can affect more than you think—including your eyes. Discover the connection between menopause and dry eyes, explore common symptoms, and learn practical ways to find lasting relief."}
                  </p>

                  <Link
                    href={`/learn/${a.slug}`}
                    className="mt-3 inline-flex items-center gap-1 h-9 px-4 rounded-full bg-black text-white text-[12px]"
                  >
                    Read More
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-10">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center disabled:opacity-40"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {numbers.map((n, idx) =>
                typeof n === "number" ? (
                  <button
                    key={idx}
                    onClick={() => setPage(n)}
                    className={`w-8 h-8 rounded-full text-sm ${
                      n === page ? "bg-black text-white" : "hover:bg-gray-100"
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
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center disabled:opacity-40"
                aria-label="Next page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
