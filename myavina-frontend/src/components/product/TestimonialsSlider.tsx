"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Check } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

type Props = {
  items?: Testimonial[]; // testimonials array
  auto?: boolean; // autoplay on/off
  interval?: number; // autoplay interval (ms)
};

export default function TestimonialsSlider({
  items = [],
  auto = false,
  interval = 6000,
}: Props) {
  const [index, setIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1); // responsive
  const count = items.length;

  // --- Responsive items per view (Tailwind breakpoints) ---
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w >= 1024) setItemsPerView(3); // lg+
      else if (w >= 768) setItemsPerView(2); // md
      else setItemsPerView(1); // base
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  const maxIndex = useMemo(
    () => Math.max(0, count - itemsPerView),
    [count, itemsPerView]
  );

  // Clamp index if data or viewport changes
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const next = useCallback(() => {
    setIndex((i) => (i >= maxIndex ? maxIndex : i + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setIndex((i) => (i <= 0 ? 0 : i - 1));
  }, []);

  // --- Autoplay ---
  useEffect(() => {
    if (!auto || count <= itemsPerView) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, interval);
    return () => window.clearInterval(id);
  }, [auto, interval, count, itemsPerView, maxIndex]);

  const canGoPrev = index > 0;
  const canGoNext = index < maxIndex;
  const showNavigation = count > itemsPerView;

  // Translate based on itemsPerView
  const translateX = `translateX(-${(index * 100) / itemsPerView}%)`;

  // Basis per card (1/1, 1/2, 1/3)
  const basis = `${100 / itemsPerView}%`;

  if (count === 0) {
    return (
      <section className="my-16">
        <h3 className="text-3xl font-bold text-center mb-8">
          What Women Are Saying About{" "}
          <span className="text-purple-600">MYAVINA</span>
        </h3>
        <p className="text-center text-gray-500">No testimonials available.</p>
      </section>
    );
  }

  return (
    <section className="container mx-auto mt-16 mb-16 px-4 sm:px-6 lg:px-8 max-w-7xl">
      <h3 className="text-[20px] md:text-[40px] font-medium text-center text-gray-900 leading-tight">
        What Women Are Saying
      </h3>
      <p className="text-[20px] md:text-[40px] font-medium text-center text-gray-900 leading-tight mb-10">
        About <span className="text-[#774180]">MYAVINA</span>
      </p>

      {/* Viewport */}
      <div className="relative">
        {/* Track */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: translateX }}
          >
            {items.map((review) => (
              <div
                key={review.id}
                style={{ flex: `0 0 ${basis}` }}
                className="pr-6 lg:pr-8"
              >
                <article className="bg-gray-50 rounded-2xl p-6 h-full flex flex-col justify-between">
                  {/* Top: stars + text */}
                  <div>
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => {
                        const filled = i < review.stars;
                        return (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              filled
                                ? "text-black fill-current"
                                : "text-gray-300"
                            }`}
                            fill={filled ? "currentColor" : "none"}
                            stroke={filled ? "none" : "currentColor"}
                          />
                        );
                      })}
                    </div>
                    <p className="text-gray-800 leading-relaxed">
                      {review.text}
                    </p>
                  </div>

                  {/* Bottom: user info + date at very bottom */}
                  <div className="mt-6">
                    <div className="flex items-center">
                      {/* Avatar with absolute verify badge */}
                      <div className="relative">
                        <Image
                          src={review.avatar || "/placeholder.svg"}
                          alt={review.name}
                          width={40}
                          height={40}
                          className="rounded-full object-cover"
                        />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-600 flex items-center justify-center">
                          <Check className="w-2 h-2 text-white" />
                        </div>
                      </div>

                      <div className="ml-3">
                        <p className="font-medium text-gray-900">
                          {review.name}
                        </p>
                        <p className="text-sm text-gray-500">{review.role}</p>
                      </div>
                    </div>

                    {/* Date at very bottom */}
                    <p className="text-xs text-gray-400 mt-3">{review.date}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        {showNavigation && (
          <div className="flex gap-3 justify-center mt-8">
            <button
              aria-label="Previous"
              onClick={canGoPrev ? prev : undefined}
              disabled={!canGoPrev}
              className={`flex w-10 h-10 rounded-full text-white items-center justify-center transition
                ${
                  canGoPrev
                    ? "bg-[#774180] hover:bg-[#774180]/90"
                    : "bg-[#774180] opacity-50 cursor-not-allowed"
                }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              aria-label="Next"
              onClick={canGoNext ? next : undefined}
              disabled={!canGoNext}
              className={`flex w-10 h-10 rounded-full text-white items-center justify-center transition
                ${
                  canGoNext
                    ? "bg-[#774180] hover:bg-[#774180]/90"
                    : "bg-[#774180] opacity-50 cursor-not-allowed"
                }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
