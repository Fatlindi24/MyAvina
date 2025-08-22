"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/* Small helper for the translucent cards */
function Badge({
  labelLeft,
  value,
  align = "left",
}: {
  labelLeft: string;
  value: string;
  align?: "left" | "right";
}) {
  return (
    <div
      className={[
        "backdrop-blur-md rounded-xl",
        "bg-white/18 ring-1 ring-white/25 shadow-[0_6px_18px_rgba(0,0,0,0.25)]",
        "px-3 py-2 sm:px-4 sm:py-2.5",
        "flex items-center gap-3",
        align === "right" ? "justify-between" : "",
      ].join(" ")}
    >
      <span className="text-[11px] sm:text-[12px] text-white/85">
        {labelLeft}
      </span>
      <span className="text-[12px] sm:text-[13px] text-white font-medium">
        {value}
      </span>
    </div>
  );
}

/* The slide content (your designed panel) */
/* === Replace MenopauseCareSlide with this version === */
function MenopauseCareSlide({ priority = false }: { priority?: boolean }) {
  return (
    <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[28px]">
      {/* Background image */}
      <Image
        src="/Images/background-s.png"
        alt=""
        fill
        priority={priority}
        className="object-cover"
        sizes="(min-width:1280px) 1200px, 100vw"
      />

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col items-center text-center px-5 sm:px-24 py-8 sm:py-10 lg:py-12">
        {/* Title + subtitle */}
        <div className="max-w-3xl">
          <h2 className="text-white font-semibold leading-tight text-[28px] sm:text-[36px] lg:text-[44px]">
            Menopause Care Made Personal
          </h2>
          <p className="mt-2 text-white/85 text-[15px] sm:text-[16px]">
            Your menopause journey, supported every step by MyAvina
          </p>
        </div>

        {/* Gradient panel (smaller) */}
        <div className="relative mt-6 sm:mt-8 w-full max-w-[720px] aspect-[16/14]  md:aspect-[16/8] rounded-[22px] overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(100% 80% at 50% 55%, #774180 0%, #202020 100%)",
            }}
          />
          {/* Woman image – bottom center */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[62%] sm:w-[54%] lg:w-[48%]">
            <Image
              src="/images/homepage/menopause.png"
              alt="Woman"
              width={700}
              height={900}
              className="w-full h-auto object-contain"
              priority={priority}
              sizes="(min-width:1024px) 35vw, 55vw"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-6 sm:mt-8">
          <button className="rounded-full px-6 sm:px-8 py-2.5 sm:py-3 bg-white/60 hover:bg-white text-[#3C2C57] text-[15px] sm:text-[16px] transition">
            See Your Plan
          </button>
        </div>
      </div>

      {/* === Floating cards OUTSIDE the gradient panel === */}
      {/* Left cards */}
      <div className="pointer-events-none absolute z-20 left-3 sm:left-10 md:left-20 lg:left-32 xl:left-40 top-[45%] -translate-y-1/2 space-y-3 sm:space-y-4">
        <Badge labelLeft="Name" value="Sarah" />
        <Badge labelLeft="Age" value="55" />
      </div>

      {/* Right cards */}
      <div className="pointer-events-none absolute z-20 right-3 sm:right-8 bottom-[20%] sm:bottom-[30%] space-y-3 sm:space-y-4 text-left">
        <Badge
          labelLeft="History"
          value="Hot flashes · Poor sleep"
          align="right"
        />
        <Badge
          labelLeft="Goal"
          value="Sleep better · Feel balanced"
          align="right"
        />
      </div>
    </div>
  );
}

/* ===== Slider wrapper with 3 identical slides ===== */
export default function MenopauseCareSlider() {
  // create 3 identical slides
  const slides = [0, 1, 2];

  return (
    <section className="px-4">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        spaceBetween={16}
        loop={true}
        className="!py-10"
      >
        {slides.map((i) => (
          <SwiperSlide key={i} className="h-auto">
            <MenopauseCareSlide priority={i === 0} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
