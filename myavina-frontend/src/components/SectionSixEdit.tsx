"use client";

import React from "react";

const SectionSix = () => {
  return (
    <section className="w-full overflow-hidden bg-white">
      {/* ===== MOBILE/TABLET (<lg) ===== */}
      <div className="lg:hidden">
        {/* Purple panel with diagonal bottom */}
        <div className="relative bg-[#774180] text-white [clip-path:polygon(0_0,100%_0,100%_93%,0_100%)]">
          <div className="container mx-auto px-6 py-12">
            <div className="max-w-md">
              <h2 className="text-[26px] font-medium leading-tight">
                Take Control of Your Menopause Journey
              </h2>
              <p className="mt-4 text-[16px] font-light">
                Start your free visit today and discover a personalized HRT plan
                designed just for you.
              </p>
              <div className="mt-6 flex flex-col gap-4">
                <button className="rounded-full px-6 py-3 h-12 bg-black text-white hover:bg-black/90">
                  Start Treatment Now
                </button>
                <button className="rounded-full px-6 py-3 h-12 bg-white text-black hover:bg-black hover:text-white">
                  Take the Quiz
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Image directly under the diagonal; negative margin removes any seam */}
        <img
          src="/aboutpage/background2.png"
          alt="Woman discussing HRT options"
          className="-mt-[28px] block w-full h-[320px] object-cover"
        />
      </div>

      {/* ===== DESKTOP (lg+) ===== */}
      <div className="relative hidden lg:block h-[360px] xl:h-[420px]">
        {/* Background layer (no layout shift, content remains in container) */}
        <div className="pointer-events-none absolute inset-0">
          {/* Right image */}
          <img
            src="/aboutpage/background.png"
            alt=""
            className="absolute right-0 top-0 h-full w-[58%] object-cover object-center"
          />
          {/* Left purple panel with diagonal right edge */}
          <div className="absolute left-0 top-0 h-full w-[60%] bg-[#774180] [clip-path:polygon(0_0,82%_0,100%_100%,0_100%)]" />
        </div>

        {/* Content inside container */}
        <div className="container mx-auto relative z-10 h-full">
          <div className="flex items-center h-full">
            <div className="max-w-2xl text-white px-6">
              <h2 className="text-[32px] xl:text-[40px] font-medium leading-tight">
                Take Control of Your Menopause Journey
              </h2>
              <p className="mt-4 text-[18px]">
                Start your free visit today and discover a personalized HRT plan
                designed just for you.
              </p>

              <div className="mt-7 flex gap-4">
                <button
                  className="rounded-full px-6 py-3 h-12 bg-black text-white hover:bg-black/90 transition-colors"
                  aria-label="Start Treatment Now"
                >
                  Start Treatment Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSix;
