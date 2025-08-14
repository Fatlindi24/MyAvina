"use client";

import React from "react";

const SectionOne = () => {
  return (
    <div className="container mx-auto">
      <div className="pt-16 container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Heading column with new paragraph above */}
        <div>
          <p className="text-lg text-gray-700 mb-4">About Us</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Empowering Women
            <br className="hidden md:block" />
            Through Every <span className="text-[#774180]">Life Stage.</span>
          </h2>
        </div>

        {/* Paragraph + Button (unchanged) */}
        <div className="space-y-6 max-w-md">
          <p className="text-lg text-gray-700">
            We created MyAvina to bring clarity, compassion, and science-backed
            care to women navigating perimenopause, menopause, and beyond.
          </p>
          <button className="inline-block bg-black text-white px-6 py-3 rounded-full hover:opacity-90 transition">
            Start Your Free Visit
          </button>
        </div>
      </div>
      <div className="mt-12 mx-auto px-4 ">
        <div className="bg-purple-100 rounded-2xl overflow-hidden flex items-end justify-center">
          <img
            src="/aboutpage/hero.png"
            alt="Group of women"
            className="w-4/5 md:w-3/4 lg:w-2/3 h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
