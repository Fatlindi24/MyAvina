"use client";

import React from "react";

const SectionSix = () => {
  return (
    <section className="w-full overflow-hidden bg-white">
      {/* ===== MOBILE/TABLET (<lg) ===== */}
      <div className="lg:hidden">
        {/* Purple panel with diagonal bottom */}
        <div className="relative z-10 bg-[#774180] text-white h-96 [clip-path:polygon(0_0,100%_0,100%_85%,0_100%)]">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-md">
              <h2 className="text-[26px] font-medium leading-tight">
                Take Back Your Balance
              </h2>
              <p className="mt-4 text-[16px] font-light">
                Get doctor-guided, personalized support made just for you.
              </p>
              <div className="mt-6 flex flex-col gap-4">
                <button className="btn rounded-full px-6 py-3 bg-black text-white hover:bg-black/90 transition-colors">
                  Start Treatment Now
                </button>
                <button className="btn rounded-full px-6 py-3 bg-white text-black hover:bg-black hover:text-white transition-colors">
                  Take the Quiz
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Image pulled up under panel */}
        <img
          src="/aboutpage/background2.png"
          alt="Balance support"
          className="relative z-0 -mt-12 block w-full h-[300px] object-cover"
        />
      </div>

      {/* ===== DESKTOP (lg+) ===== */}
      <div className="hidden lg:block relative h-[360px] xl:h-[420px]">
        {/* Right image */}
        <img
          src="/aboutpage/background.png"
          alt="Balance support"
          className="absolute right-0 top-0 h-full w-[58%] object-cover object-right"
        />

        {/* Left purple panel with diagonal right edge */}
        <div className="absolute inset-y-0 left-0 w-[55%] bg-[#774180]  [clip-path:polygon(0_0,86%_0,100%_100%,0_100%)] z-10">
          <div className="container mx-auto h-full">
            <div className="px-4 h-full flex items-center w-full">
              <div className="max-w-xl  text-white">
                <h2 className="text-[32px] xl:text-[40px] font-medium leading-tight">
                  Take Back Your Balance
                </h2>
                <p className="mt-4 text-[18px]">
                  Get doctor-guided, personalized support made just for you.
                </p>
                <div className="mt-6 flex gap-4">
                  <button className="btn rounded-full px-6 py-3 bg-black text-white hover:bg-black/90 transition-colors">
                    Start Treatment Now
                  </button>
                  <button className="btn rounded-full px-6 py-3 bg-white text-black hover:bg-black hover:text-white transition-colors">
                    Take the Quiz
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSix;
