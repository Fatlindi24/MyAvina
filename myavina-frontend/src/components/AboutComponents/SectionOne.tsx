"use client";

import React from "react";

const SectionOne = () => {
  return (
    <div className="container mx-auto md:px-6">
      <p className="text-[16px] px-4 pt-10 text-[#774180] uppercase font-light mb-4">
        About Us
      </p>
      <div className="pt-4 px-4 container grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Heading column with new paragraph above */}
        <div className="">
          <h2 className="text-[32px] md:text-[48px] font-medium text-gray-900 leading-tight">
            Empowering Women Through Every{" "}
            <span className="text-[#774180]">Life Stage.</span>
          </h2>
        </div>

        {/* Paragraph + Button (unchanged) */}
        <div className="space-y-6 max-w-md">
          <p className="text-lg text-black font-normal">
            We created MyAvina to bring clarity, compassion, and science-backed
            care to women navigating perimenopause, menopause, and beyond.
          </p>
          <button className="inline-block bg-black text-white btn text-[16px] font-normal px-6 py-3 rounded-full hover:opacity-90 transition">
            Start Your Free Visit
          </button>
        </div>
      </div>
      <div className="mt-12 mx-auto  ">
        <div className="bg-purple-100 md:rounded-2xl overflow-hidden flex items-end justify-center">
          <img
            src="/aboutpage/hero.png"
            alt="Group of women"
            className="w-4/5 md:w-3/4 lg:w-2/3 h-auto pt-10 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
