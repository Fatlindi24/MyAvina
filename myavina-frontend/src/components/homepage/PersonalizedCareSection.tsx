"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// ---- Small corner card
function InfoCard({
  title,
  lines = [],
  className = "",
}: {
  title: string;
  lines: string[];
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl bg-white/10 backdrop-blur-md border border-white/15 shadow-lg px-4 py-3 text-left text-white ${className}`}
    >
      <p className="text-xs text-purple-200">{title}</p>
      <div className="mt-1 text-sm leading-5">
        {lines.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>
    </div>
  );
}

// ---- One slide (panel)
function Slide({
  title,
  subtitle,
  image,
  className = "",
}: {
  title: string;
  subtitle: string;
  image: string;
  className?: string;
}) {
  return (
    <div className={`w-full shrink-0 ${className}`}>
      {/* Title + subtitle */}

      {/* Panel */}

      <div className="relative rounded-[28px] bg-gradient-to-b from-[#6f3a89] to-[#5e2f7a] p-5 md:p-8 lg:p-10 overflow-hidden">
        <div className="text-center mb-8">
          <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-white">
            {title}
          </h2>
          <p className="mt-2 text-[15px] md:text-[16px] text-purple-100">
            {subtitle}
          </p>
        </div>
        {/* Corner cards grid (kept inside container) */}
        <div className="grid grid-cols-2 gap-y-28 md:gap-y-32 ">
          {/* Left column */}
          <div className="flex flex-col gap-2 ">
            <InfoCard
              title="Name"
              lines={["Sarah"]}
              className="w-[140px] lg:w-[350px] md:w-[220px] flex flex-row items-center justify-between"
            />
            <InfoCard
              title="Age"
              lines={["55"]}
              className="w-[140px] lg:w-[350px] md:w-[220px] flex flex-row items-center justify-between text-[6px] md:text-[12px] lg:text-[14px]"
            />
          </div>

          {/* Right column */}
          <div className="flex flex-col items-end gap-2">
            <InfoCard
              title="History"
              lines={["Hot flashes"]}
              className="w-[140px] lg:w-[350px] md:w-[220px] flex md:flex-row flex-col items-center justify-between"
            />
            <InfoCard
              title="Goal"
              lines={["Sleep better"]}
              className="w-[140px] lg:w-[350px] md:w-[220px] flex md:flex-row flex-col items-center justify-between"
            />
          </div>
        </div>

        {/* Center image card */}
        <div className="pointer-events-none select-none absolute inset-0 flex items-center justify-center">
          <div className="relative w-[82%] md:w-[70%] lg:w-[60%] aspect-[16/8] rounded-3xl bg-black/35 shadow-2xl">
            <div className="absolute inset-0">
              <Image
                src={image}
                alt="Person"
                fill
                className="object-contain"
                sizes="(min-width:1024px) 60vw, 90vw"
                priority
              />
            </div>
          </div>
        </div>

        {/* CTA (center bottom) */}
        <div className="mt-[120px] md:mt-[210px] lg:mt-[280px] flex justify-center">
          <button className="rounded-full bg-white/20 hover:bg-white/30 text-white px-7 py-3 text-[15px] font-medium transition">
            See Your Plan
          </button>
        </div>
      </div>
    </div>
  );
}

// ---- Slider wrapper
export default function PersonalizedCareCarousel() {
  const slides = [
    {
      title: "Menopause Care Made Personal",
      subtitle: "Your menopause journey, supported every step by MyAvina",
      image: "/Images/homepage/menopause.png",
    },
    {
      title: "Tailored Plans, Real Results",
      subtitle: "Personalized HRT designed around your symptoms and goals",
      image: "/Images/homepage/menopause.png",
    },
    {
      title: "Feel Like Yourself Again",
      subtitle: "Clinically guided care you can trust",
      image: "/Images/homepage/menopause.png",
    },
  ];

  const [index, setIndex] = useState(0);
  const count = slides.length;
  const trackRef = useRef<HTMLDivElement>(null);

  const next = () => setIndex((i) => (i + 1) % count);
  const prev = () => setIndex((i) => (i - 1 + count) % count);

  // optional: swipe
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let startX: number | null = null;

    const down = (e: TouchEvent) => (startX = e.touches[0].clientX);
    const up = (e: TouchEvent) => {
      if (startX == null) return;
      const dx = e.changedTouches[0].clientX - startX;
      if (dx > 50) prev();
      else if (dx < -50) next();
      startX = null;
    };

    el.addEventListener("touchstart", down, { passive: true });
    el.addEventListener("touchend", up, { passive: true });
    return () => {
      el.removeEventListener("touchstart", down);
      el.removeEventListener("touchend", up);
    };
  }, [count]);

  return (
    <section className="w-full  py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Slider viewport */}
        <div className="relative overflow-hidden rounded-[32px]">
          {/* Track */}
          <div
            ref={trackRef}
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((s, i) => (
              <Slide
                key={i}
                title={s.title}
                subtitle={s.subtitle}
                image={s.image}
                className="px-2 sm:px-3 lg:px-4"
              />
            ))}
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous"
              className="w-10 h-10 rounded-full border border-[#774180]/30 text-[#774180]/90 hover:bg-[#774180]/10 transition"
            >
              ‹
            </button>
            <div className="mt-3 flex justify-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-[#774180]" : "w-2 bg-[#774180]/40"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next"
              className="w-10 h-10 rounded-full bg-[#774180]/20 text-[#774180] hover:bg-[#774180]/30 transition"
            >
              ›
            </button>
          </div>

          {/* Dots */}
        </div>
      </div>
    </section>
  );
}
