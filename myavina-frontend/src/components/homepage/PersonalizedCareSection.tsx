"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type PanelProps = {
  // These props are still accepted, but the slider content comes from the slides[] below.
  title?: string;
  subtitle?: string;
  centerImageDesktop?: string; // e.g. "/Images/woman-s-desk.png"
  centerImageMobile?: string; // e.g. "/Images/woman-s-mobile.png"
  buttonText?: string;
  onButtonClick?: () => void;
};

export default function SimpleThreePartPanel({
  // defaults kept for compatibility if you want to reuse later
  title,
  subtitle,
  centerImageDesktop = "/Images/woman-s-desk.png",
  centerImageMobile = "/Images/woman-s-mobile.png",
  buttonText = "See Your Plan",
  onButtonClick,
}: PanelProps) {
  // --- Slides data (edit text/images here) ---
  const slides = [
    {
      title: "Menopause Care Made Personal",
      subtitle: "Your menopause journey, supported every step by MyAvina",
      centerImageDesktop: "/Images/woman-s-desk.png",
      centerImageMobile: "/Images/woman-s-mobile.png",
      buttonText: "See Your Plan",
    },
    {
      title: "Tailored Plans, Real Results",
      subtitle: "Personalized HRT designed around your symptoms and goals",
      centerImageDesktop: "/Images/woman-s-desk.png",
      centerImageMobile: "/Images/woman-s-mobile.png",
      buttonText: "Start Assessment",
    },
    {
      title: "Feel Like Yourself Again",
      subtitle: "Clinically guided care you can trust",
      centerImageDesktop: "/Images/woman-s-desk.png",
      centerImageMobile: "/Images/woman-s-mobile.png",
      buttonText: "Get Started",
    },
  ];

  const [index, setIndex] = useState(0);
  const count = slides.length;
  const trackRef = useRef<HTMLDivElement>(null);

  const next = () => setIndex((i) => (i + 1) % count);
  const prev = () => setIndex((i) => (i - 1 + count) % count);

  // Optional: swipe support
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let startX: number | null = null;

    const onTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (startX == null) return;
      const dx = e.changedTouches[0].clientX - startX;
      if (dx > 50) prev();
      else if (dx < -50) next();
      startX = null;
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <section className="container mx-auto py-10">
      {/* Slider viewport with background image */}
      <div className="relative overflow-hidden rounded-[28px]">
        {/* Background image (covers entire slider) */}
        <Image
          src="/Images/background-s.png"
          alt="" // decorative
          fill
          priority
          className="object-cover object-center"
          sizes="(min-width:1024px) 1200px, 100vw"
        />
        {/* Optional overlay for contrast */}

        {/* Track */}
        <div
          ref={trackRef}
          className="relative flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((s, i) => (
            <div key={i} className="w-full shrink-0">
              {/* Slide content: 3 vertical parts */}
              <div className="relative grid grid-rows-[auto,1fr,auto] items-center text-center px-5 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-14 min-h-[520px] md:min-h-[640px]">
                {/* 1) Title + subtitle */}
                <div>
                  <h2 className="text-white text-[28px] md:text-[36px] lg:text-[44px] font-semibold leading-tight">
                    {s.title ?? title}
                  </h2>
                  {(s.subtitle ?? subtitle) && (
                    <p className="mt-2 text-white/80 text-[15px] md:text-[16px]">
                      {s.subtitle ?? subtitle}
                    </p>
                  )}
                </div>

                {/* 2) Center image */}
                <div className="flex items-center justify-center">
                  <div className="relative w-[90%] sm:aspect-[16/7] aspect-[1/1] rounded-3xl ">
                    {/* Mobile image */}
                    <div className="absolute inset-0 sm:hidden">
                      <Image
                        src={s.centerImageMobile ?? centerImageMobile}
                        alt="Center image (mobile)"
                        fill
                        className="object-contain"
                        sizes="100vw"
                        priority
                      />
                    </div>

                    {/* Desktop image */}
                    <div className="absolute inset-0 hidden sm:block">
                      <Image
                        src={s.centerImageDesktop ?? centerImageDesktop}
                        alt="Center image (desktop)"
                        fill
                        className="object-contain"
                        sizes="(min-width:1024px) 60vw, 70vw"
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* 3) Button */}
                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={onButtonClick}
                    className=" rounded-full bg-white/50 hover:bg-white text-white btn px-7 py-3 text-[16px] font-normal transition"
                  >
                    {s.buttonText ?? buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls + Dots */}
      </div>
      <div className="relative z-10 mt-4 sm:mt-6 mb-2 flex flex-col items-center gap-3">
        {/* Arrows */}
        <div className="flex items-center gap-3">
          <button
            onClick={prev}
            aria-label="Previous"
            className="w-10 h-10 rounded-full border border-[#774180]/40 text-[#774180]/90 hover:bg-[#774180]/15 transition"
          >
            ‹
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-[#774180]" : "w-2 bg-[#774180]/50"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next"
            className="w-10 h-10 rounded-full border border-[#774180]/40 text-[#774180]/90 hover:bg-[#774180]/15 transition"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
