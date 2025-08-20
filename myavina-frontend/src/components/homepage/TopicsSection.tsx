"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// --- Data ---
const articlesData = [
  {
    category: "HRT",
    date: "July 2025",
    title: "5 Myths About HRT Debunked",
    imageUrl: "/Images/homepage/topic1.png",
    isFeatured: true,
  },
  {
    category: "Sleep",
    date: "July 2025",
    title: "How to Sleep Better During Menopause",
    imageUrl: "/Images/homepage/topic2.png",
    isFeatured: false,
  },
  {
    category: "Mood",
    date: "July 2025",
    title: "What’s Causing Your Mood Swings?",
    imageUrl: "/Images/homepage/topic3.png",
    isFeatured: false,
  },
  {
    category: "Hotflashes",
    date: "July 2025",
    title: "How to Sleep Better During Menopause",
    imageUrl: "/Images/homepage/topic4.png",
    isFeatured: false,
  },
  {
    category: "HRT",
    date: "July 2025",
    title: "What’s Causing Your Mood Swings?",
    imageUrl: "/Images/homepage/topic5.jpg",
    isFeatured: false,
  },
];

// --- Card ---
const ArticleCard = ({
  article,
}: {
  article: (typeof articlesData)[number];
}) => {
  // --- Button base style ---
  const buttonClasses =
    "btn bg-white border border-black text-black hover:bg-black hover:text-white hover:border-black transition-colors duration-300";

  return (
    <div className="h-full">
      {/* Image block */}
      <div className="relative rounded-xl overflow-hidden">
        <div className="relative w-full aspect-[16/9]">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            priority={article.isFeatured}
          />
        </div>
        <span className="absolute top-3 left-3 rounded-full bg-black/45 text-white backdrop-blur-sm px-3 py-1 text-xs font-semibold">
          {article.category}
        </span>
      </div>

      {/* Text block */}
      <div className="px-1">
        <p className="mt-3 text-sm text-gray-500">{article.date}</p>
        <h3 className="mt-1 text-[20px] leading-[1.3] tracking-normal">
          {article.title}
        </h3>

        <div className="mt-4">
          <a
            href="#"
            className={`inline-block rounded-full px-5 py-3 text-[15px] leading-none transition-colors ${buttonClasses}`}
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

// --- Section ---
export const TopicsSection = () => {
  return (
    <section className="bg-[#F6F6F6] pt-10 pb-16">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto px-4">
          <h2 className="font-medium text-[28px] lg:text-[32px] leading-[1.3]">
            Explore Topics That Matter to You
          </h2>
          <p className="mt-4 text-[16px] lg:text-[18px] text-gray-700">
            From hormone therapy tips, discover expert advice for every stage of
            your menopause journey.
          </p>
        </div>

        {/* Carousel */}
        <div className="mt-12">
          <Swiper
            spaceBetween={24}
            slidesPerView={4.2}
            centeredSlides={false}
            className="!pl-4 sm:!pl-6 lg:!pl-8"
            breakpoints={{
              640: { slidesPerView: 2.2, spaceBetween: 24 },
              1024: { slidesPerView: 3.2, spaceBetween: 24 },
              1280: { slidesPerView: 4.2, spaceBetween: 24 },
            }}
          >
            {articlesData.map((article, i) => (
              <SwiperSlide key={i} className=" group h-auto">
                <ArticleCard article={article} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
