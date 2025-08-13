"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

export default function TestimonialsSlider({
  items = [], // Added default empty array to prevent undefined errors
  auto = false,
  interval = 6000,
}: {
  items?: Testimonial[]; // Made items optional
  auto?: boolean;
  interval?: number;
}) {
  const [index, setIndex] = useState(0);
  const count = items.length;
  const timer = useRef<number | null>(null);

  const visibleItems = 3;
  const maxIndex = Math.max(0, count - visibleItems);

  const next = useCallback(() => {
    setIndex((i) => Math.min(i + 1, maxIndex));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setIndex((i) => Math.max(i - 1, 0));
  }, []);

  useEffect(() => {
    if (!auto || count <= visibleItems) return;
    timer.current = window.setInterval(() => {
      setIndex((i) => {
        if (i >= maxIndex) return 0; // Reset to beginning
        return i + 1;
      });
    }, interval);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [auto, interval, count, maxIndex, visibleItems]);

  const canGoPrev = index > 0;
  const canGoNext = index < maxIndex;
  const showNavigation = count > visibleItems;

  // Return early if no items to prevent rendering issues
  if (count === 0) {
    return (
      <section className="my-10">
        <h3 className="text-3xl font-bold text-center mb-8">
          What Women Are Saying About{" "}
          <span className="text-purple-600">MYAVINA</span>
        </h3>
        <p className="text-center text-gray-500">No testimonials available.</p>
      </section>
    );
  }

  return (
    <section className="my-10">
      <h3 className="text-3xl font-bold text-center mb-8">
        What Women Are Saying About{" "}
        <span className="text-purple-600">MYAVINA</span>
      </h3>

      {/* track */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${(index * 100) / visibleItems}%)`,
          }}
        >
          {items.map((review, i) => (
            <div
              key={i}
              className="min-w-full md:min-w-[50%] lg:min-w-[33.3333%] px-3 mb-4"
            >
              <article className="bg-gray-100 rounded-2xl p-6 h-full flex flex-col justify-between">
                {/* stars */}
                <div className="flex mb-4 text-2xl leading-none">
                  {"★".repeat(review.stars)}
                  {"☆".repeat(5 - review.stars)}
                </div>

                {/* text */}
                <p className="text-lg text-gray-900 mb-6">{review.text}</p>

                {/* footer */}
                <div className="flex items-center">
                  <div className="relative w-10 h-10 mr-3">
                    <Image
                      src={review.avatar || "/placeholder.svg"}
                      alt={review.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{review.name}</p>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      {/* tiny verified icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M16.707 5.293a1 1 0 0 0-1.414 0L8 12.586 4.707 9.293a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l8-8a1 1 0 0 0 0-1.414z" />
                      </svg>
                      {review.role}
                    </p>
                    <p className="text-xs text-gray-400">{review.date}</p>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {showNavigation && (
        <div className="flex gap-3 justify-center">
          {/* controls */}
          <button
            aria-label="Previous"
            onClick={canGoPrev ? prev : undefined}
            disabled={!canGoPrev}
            className={`flex z-10 w-10 h-10 rounded-full text-white items-center justify-center transition-all ${
              canGoPrev
                ? "bg-purple-700 hover:bg-purple-800 cursor-pointer"
                : "bg-purple-700 opacity-50 cursor-not-allowed"
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            aria-label="Next"
            onClick={canGoNext ? next : undefined}
            disabled={!canGoNext}
            className={`flex z-10 w-10 h-10 rounded-full text-white items-center justify-center transition-all ${
              canGoNext
                ? "bg-purple-700 hover:bg-purple-800 cursor-pointer"
                : "bg-purple-700 opacity-50 cursor-not-allowed"
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </section>
  );
}
