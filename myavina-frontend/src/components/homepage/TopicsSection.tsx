"use client";

import React from 'react';
import Image from 'next/image';

// Import Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// --- Placeholder Data for the Articles ---
const articlesData = [
  {
    category: 'HRT',
    date: 'July 2025',
    title: '5 Myths About HRT Debunked',
    imageUrl: '/Images/homepage/topic1.png', // IMPORTANT: Replace with your image paths
    isFeatured: true, // This will make its button black
  },
  {
    category: 'Sleep',
    date: 'July 2025',
    title: 'How to Sleep Better During Menopause',
    imageUrl: '/Images/homepage/topic2.png',
    isFeatured: false,
  },
  {
    category: 'Mood',
    date: 'July 2025',
    title: "What's Causing Your Mood Swings?",
    imageUrl: '/Images/homepage/topic3.png',
    isFeatured: false,
  },
  {
    category: 'Hot flashes',
    date: 'July 2025',
    title: 'How to Sleep Better During Menopause',
    imageUrl: '/Images/homepage/topic4.png',
    isFeatured: false,
  },
  {
    category: 'HRT',
    date: 'July 2025',
    title: "What's Causing Your Mood Swings?",
    imageUrl: '/Images/homepage/topic5.jpg',
    isFeatured: false,
  },
];

// --- Reusable Article Card Component ---
const ArticleCard = ({ article }) => {
  const buttonClasses = article.isFeatured
    ? 'bg-black text-white hover:bg-gray-800'
    : 'bg-white text-black border border-gray-300 hover:bg-gray-100';

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden h-full flex flex-col group">
      <div className="relative">
        <Image 
          src={article.imageUrl} 
          alt={article.title} 
          width={400} 
          height={250} 
          className="w-full object-cover aspect-[4/3]"
        />
        <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
          {article.category}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm text-gray-500 font-normal text-[18px] leading-[130%] tracking-normal">{article.date}</p>
        <h3 className="tfont-normal text-[20px] leading-[130%] tracking-normal mt-2 flex-grow group-hover:text-purple-700 transition-colors">
          {article.title}
        </h3>
        <div className="mt-4">
          <a href="#" className={`font-normal text-[16px] leading-[100%] tracking-normal inline-block px-6 py-2.5 rounded-full transition-colors ${buttonClasses}`}>
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

// --- Main Section Component ---
export const TopicsSection = () => {
  return (
    <section className="bg-[#F6F6F6] py-16 sm:py-24">
      <div className="container mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto my-10 px-4">
          <h2 className="pt-10 lg:pt-0 font-medium lg:text-[32px] text-[24px;] leading-[130%] tracking-normal text-center">
            Explore Topics That Matter to You
          </h2>
          <p className="font-normal lg:text-[18px] text-[16px;] mt-5 leading-[130%] tracking-normal text-center">
            From hormone therapy tips, discover expert advice for every stage of your menopause journey.
          </p>
        </div>

        {/* Articles Carousel */}
        <div className="mt-16">
          <Swiper
            spaceBetween={24}
            slidesPerView={1.25}
            centeredSlides={false}
            // Add left padding by using the wrapper class
            className="!pl-4 sm:!pl-6 lg:!pl-8" 
            breakpoints={{
              640: { slidesPerView: 2.5 },
              1024: { slidesPerView: 3.5 },
              1280: { slidesPerView: 4.25 },
            }}
          >
            {articlesData.map((article, index) => (
              <SwiperSlide key={index} className="h-auto !pr-4 sm:!pr-6 lg:!pr-8 mb-10">
                <ArticleCard article={article} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
      </div>
    </section>
  );
};