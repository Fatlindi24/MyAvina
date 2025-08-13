"use client";

import React from "react";

const SectionSix = () => {
  return (
    <div>
      <section className="w-full overflow-hidden">
        {/* Mobile / tablet: full-width purple panel → clipped bottom → image below */}
        <div
          className="
      relative z-10
      bg-[#774180] text-white
      px-6 pt-12 pb-20
      md:hidden
      [clip-path:polygon(0_0,100%_0,100%_85%,0_100%)]
    "
        >
          <div className="max-w-md mx-auto space-y-6">
            <h2 className="text-3xl font-bold">Take Back Your Balance</h2>
            <p className="text-lg">
              Get doctor-guided, personalized support made just for you.
            </p>
            <div className="flex flex-col gap-4">
              <button className="bg-black text-white px-6 py-3 rounded-full">
                Start Treatment Now
              </button>
              <button className="bg-white text-black px-6 py-3 rounded-full">
                Take the Quiz
              </button>
            </div>
          </div>
        </div>

        {/* Mobile image pulled up under the purple panel */}
        <img
          src="/aboutpage/background2.png"
          alt="Balance support"
          className="relative z-0 block w-full h-[300px] object-cover -mt-12 md:hidden"
        />

        {/* Desktop: original two-column clipped layout */}
        <div className="hidden md:block relative h-96 md:h-[500px] w-full overflow-hidden">
          <img
            src="/aboutpage/background.png"
            alt="Balance support"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div
            className="
        absolute inset-y-0 left-0
        w-[45%]
        bg-[#774180]
        flex items-center px-16
        [clip-path:polygon(0_0,85%_0,100%_100%,0_100%)]
        z-10
      "
          >
            <div className="max-w-lg space-y-6 text-white">
              <h2 className="text-3xl md:text-4xl font-bold">
                Take Back Your Balance
              </h2>
              <p className="text-base md:text-lg">
                Get doctor-guided, personalized support made just for you.
              </p>
              <div className="flex gap-4">
                <button className="bg-black text-white px-6 py-3 rounded-full">
                  Start Treatment Now
                </button>
                <button className="bg-white text-black px-6 py-3 rounded-full">
                  Take the Quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionSix;
