"use client";

import React from "react";
import Image from "next/image";

// --- Data for the feature cards (unchanged) ---
const featuresData = {
  natural: {
    title: "Natural Ingredients",
    subtitle: "Powered by nature.",
    description:
      "Our creams and supplements are made with pure, plant-based ingredients — safe for menopause and carefully chosen to support long-term wellness.",
    imageUrl: "/Images/naturalprod.png",
  },
  science: {
    title: "Backed by Science",
    subtitle: "Driven by data, not just words.",
    description:
      "Clinical research supports each formulation — from progesterone to mood blends.",
    imageUrl: "/Images/homepage/feature-cream.png",
  },
  easy: {
    title: "Easy to Use",
    subtitle: "Simple. Daily. Stress-free.",
    description:
      "From once-a-day drops to easy gummies — it fits into your lifestyle with no stress.",
    imageUrl: "/Images/homepage/pills.png",
  },
  experts: {
    title: "Created by Experts",
    subtitle: "By women, for women.",
    description:
      "Designed with real doctors and women who’ve experienced menopause firsthand. We understand your needs, so we create solutions that work.",
    imageUrl: "/Images/homepage/doctor.png",
  },
};

// Helpers: image placement per card (absolute, behind text)
const imagePositions: Record<keyof typeof featuresData, string> = {
  natural:
    // big rounded square at right side
    "right-6 md:right-4 top-1/2 -translate-y-1/2 w-35 h-40 md:w-40 md:h-48",
  science:
    // small illustration at right-bottom
    "right-4 md:right-8 bottom-6 w-36 h-24 md:w-44 md:h-28",
  easy:
    // pill cluster bottom-left
    "right-2 md:right-8 top-14 md:top-6 w-34 h-28 md:w-56 md:h-full",
  experts:
    // portrait on right, vertically centered
    "right-0 md:right-4 bottom-0  w-40 h-48 md:w-48 md:h-56",
};

export const FeaturesSection = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <h1 className="text-[32px] lg:text-[40px] text-center mb-10">
          What Makes Our Products Work for You
        </h1>

        {/* Masonry using CSS columns. Cards must avoid column breaks */}
        <div className="columns-1 lg:columns-2 gap-4 [column-fill:_balance]">
          {/* CARD: Natural */}
          <article className="relative mb-4 break-inside-avoid rounded-2xl bg-[#F5ECFF] p-8 md:p-10 overflow-hidden">
            {/* Image behind text */}
            <div
              className={`pointer-events-none absolute ${imagePositions.natural}`}
              aria-hidden="true"
            >
              <Image
                src={featuresData.natural.imageUrl}
                alt=""
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>

            {/* Text content */}

            <h3 className="text-[28px] lg:text-[40px] font-normal text-gray-900">
              {featuresData.natural.title}
            </h3>

            <p className="text-[18px] md:text-[20px] mt-2">
              {featuresData.natural.subtitle}
            </p>
            <div className="max-w-[50%] md:max-w-[70%]">
              <p className="mt-4 text-[16px] text-gray-600 max-w-[44ch]">
                {featuresData.natural.description}
              </p>
            </div>
          </article>

          {/* CARD: Easy */}
          <article className="relative mb-4 break-inside-avoid rounded-2xl bg-[#F5ECFF] p-8 md:p-10 overflow-hidden">
            <div
              className={`pointer-events-none absolute ${imagePositions.easy}`}
              aria-hidden="true"
            >
              <Image
                src={featuresData.easy.imageUrl}
                alt=""
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="max-w-[70%]">
              <h3 className="text-[28px] lg:text-[40px] font-normal text-gray-900">
                {featuresData.easy.title}
              </h3>
              <p className="text-[18px] md:text-[20px] text-gray-800 mt-2">
                {featuresData.easy.subtitle}
              </p>
              <p className="mt-4 text-gray-600 max-w-[50ch]">
                {featuresData.easy.description}
              </p>
            </div>
          </article>

          {/* CARD: Science */}
          <article className="relative mb-4 break-inside-avoid rounded-2xl bg-[#F5ECFF] p-8 md:p-10 overflow-hidden">
            <div
              className={`pointer-events-none absolute ${imagePositions.science}`}
              aria-hidden="true"
            >
              <Image
                src={featuresData.science.imageUrl}
                alt=""
                fill
                style={{ objectFit: "contain" }}
              />
            </div>

            <h3 className="text-[28px] lg:text-[40px] font-normal text-gray-900">
              {featuresData.science.title}
            </h3>
            <div className="max-w-[70%]">
              <p className="text-[18px] md:text-[20px] text-gray-800 mt-2">
                {featuresData.science.subtitle}
              </p>
              <p className="mt-4 text-gray-600 max-w-[50ch]">
                {featuresData.science.description}
              </p>
            </div>
          </article>

          {/* CARD: Experts */}
          <article className="relative mb-4 break-inside-avoid rounded-2xl bg-[#F5ECFF] p-8 md:p-10 overflow-hidden">
            <div
              className={`pointer-events-none absolute ${imagePositions.experts}`}
              aria-hidden="true"
            >
              <Image
                src={featuresData.experts.imageUrl}
                alt=""
                fill
                style={{ objectFit: "contain" }}
              />
            </div>

            <h3 className="text-[28px] lg:text-[40px] font-normal text-gray-900">
              {featuresData.experts.title}
            </h3>
            <div className="max-w-[70%]">
              <p className="text-[18px] md:text-[20px] text-gray-800 mt-2">
                {featuresData.experts.subtitle}
              </p>
              <p className="mt-4 text-gray-600 max-w-[50ch]">
                {featuresData.experts.description}
              </p>
            </div>

            {/* Optional badge like the mock */}
          </article>
        </div>
      </div>
    </section>
  );
};
