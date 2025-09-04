"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import { articles, type Article } from "@/data/articles";

// --- Topics you want represented once each ---
const TARGET_CATEGORIES = [
  "Drynes",
  "Hot Flashes",
  "Lifestyle",
  "Menopause",
  "Mood, Anxiety & Depression",
  "Relationships",
  "Regenerative Care",
  "Preventive Care",
  "Women's Health Initiative",
] as const;

// --- Utility: pick one random from list ---
function pickOneRandom<T>(items: T[]): T | null {
  if (!items.length) return null;
  return items[Math.floor(Math.random() * items.length)];
}

// --- Card ---
const ArticleCard = ({ article }: { article: Article }) => {
  const buttonClasses =
    "btn bg-white border border-black text-black hover:bg-black hover:text-white hover:border-black transition-colors duration-300";

  return (
    // inside your SwiperSlide (see notes below)
    <div className="!h-auto">
      <article className="grid grid-rows-[auto,1fr,auto] h-full rounded-xl">
        {/* 1) Image */}
        <div className="relative rounded-xl overflow-hidden group">
          <div className="relative w-full aspect-[16/9]">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              priority={false}
            />
          </div>
          <span className="absolute top-3 left-3 rounded-full bg-black/45 text-white backdrop-blur-sm px-3 py-1 text-xs font-semibold">
            {article.category}
          </span>
        </div>

        {/* 2) Text (grows) */}
        <div className="px-1 min-h-0">
          <p className="mt-3 text-sm text-gray-500">{article.date}</p>
          <h3 className="mt-1 text-[20px] leading-[1.3] tracking-normal min-h-14 line-clamp-2">
            {article.title}
          </h3>
        </div>

        {/* 3) Button (auto row, always on the same baseline) */}
        <div className="px-1 pt-4">
          <Link
            href={`/learn/${article.slug}`}
            className={`inline-block rounded-full px-5 py-3 text-[15px] leading-none ${buttonClasses}`}
          >
            Read more
          </Link>
        </div>
      </article>
    </div>
  );
};

// --- Section ---
export const TopicsSection = () => {
  // group by category and pick one random article per category
  const slides = useMemo(() => {
    return TARGET_CATEGORIES.map((cat) => {
      const pool = articles.filter((a) => a.category === cat);
      return pickOneRandom(pool);
    }).filter(Boolean) as Article[];
  }, []);

  return (
    <section className="bg-[#F6F6F6] pt-10 pb-16">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto px-4">
          <h2 className="font-medium text-[28px] lg:text-[32px] leading-[1.3]">
            Explore Topics That Matter to You
          </h2>
          <p className="mt-4 text-[16px] lg:text-[18px] text-gray-700">
            From hormone therapy tips to lifestyle advice, discover expert
            guidance for every stage of your menopause journey.
          </p>
        </div>

        {/* Carousel */}
        <div className="mt-12">
          <Swiper
            spaceBetween={24}
            slidesPerView={1.2}
            centeredSlides={false}
            className="!pl-4 sm:!pl-6 lg:!pl-8"
            breakpoints={{
              640: { slidesPerView: 2.2, spaceBetween: 24 },
              1024: { slidesPerView: 3.2, spaceBetween: 24 },
              1280: { slidesPerView: 4.2, spaceBetween: 24 },
            }}
          >
            {slides.map((article) => (
              <SwiperSlide key={article.slug} className="group h-full ">
                <ArticleCard article={article} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
