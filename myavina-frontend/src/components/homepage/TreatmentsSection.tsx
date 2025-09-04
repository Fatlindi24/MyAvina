"use client";

import React from "react";
import Image from "next/image";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

// Import Swiper React components and styles
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// --- Placeholder Data ---
// In a real application, you would fetch this data from an API.
const treatmentsData = [
  {
    name: "Progesterone Body Cream",
    price: 89,
    rating: 4.9,
    reviews: 29837,
    imageUrl: "/Images/homepage/bottle-green.png", // IMPORTANT: Replace with your image path
    isOrganic: true,
  },
  {
    name: "Progesterone Body Cream",
    price: 89,
    rating: 4.9,
    reviews: 29837,
    imageUrl: "/Images/homepage/bottle-purple.png", // IMPORTANT: Replace with your image path
    isOrganic: true,
  },
  {
    name: "Hormone Balance Patch",
    price: 79,
    rating: 4.9,
    reviews: 29837,
    imageUrl: "/Images/homepage/patch-img.png", // IMPORTANT: Replace with your image path
    isOrganic: true,
  },
  {
    name: "Estrogen Body Cream",
    price: 95,
    rating: 4.8,
    reviews: 15420,
    imageUrl: "/Images/homepage/bottle-green.png", // IMPORTANT: Replace with your image path
    isOrganic: true,
  },
  {
    name: "Testosterone Support",
    price: 89,
    rating: 4.9,
    reviews: 19500,
    imageUrl: "/Images/homepage/bottle-purple.png", // IMPORTANT: Replace with your image path
    isOrganic: true,
  },
];

// --- Reusable Product Card Component ---
const ProductCard = ({ product }) => (
  // This is now the main wrapper for the two separate parts.
  <div>
    {/* Part 1: The Image Container */}
    <div className="bg-[#F8F1FF] rounded-[15px] p-4 flex items-center justify-center relative aspect-square">
      {product.isOrganic && (
        <div className="absolute top-4 left-4 bg-[#FFDBC5] text-[12px] text-gray-700 font-normal px-3 py-1 rounded-full z-10">
          100% Organic
        </div>
      )}
      <div className="w-full h-full relative">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          style={{ objectFit: "contain" }}
          className="p-4"
        />
      </div>
    </div>

    {/* Part 2: The Text Details Container (Now separate) */}
    <div className="mt-4 bg-[#F8F1FF] p-4 rounded-[15px]">
      <div className="flex justify-between items-center">
        <h3 className="text-[16px] font-normal text-gray-900">
          {product.name}
        </h3>
        <p className="text-[14px] font-light text-[#828282]">
          ${product.price}/month
        </p>
      </div>
      <div className="flex justify-between items-center mt-2 text-sm">
        <span className="text-[12px] font-light text-[#828282]">
          {product.rating} ({product.reviews.toLocaleString()})
        </span>
        <div className="flex text-black">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" />
          ))}
        </div>
      </div>
    </div>
  </div>
);

// --- Custom Navigation Buttons for the Carousel ---
const SwiperNavButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => swiper.slidePrev()}
        className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors disabled:opacity-50"
      >
        <ArrowLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="w-10 h-10 rounded-full bg-[#5D3E8E] flex items-center justify-center text-white hover:bg-[#4a3171] transition-colors disabled:opacity-50"
      >
        <ArrowRight className="h-5 w-5" />
      </button>
    </div>
  );
};

// --- Main Section Component ---
export const TreatmentsSection = () => {
  return (
    <section className="bg-white pb-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="lg:text-[40px] text-[32px] ">
            Explore Menopause <br></br>
            Treatments with <span className="text-[#774180]">MYAVINA</span>
          </h2>
          <a
            href="#"
            className="hidden text-[16px] text-normal sm:inline-block bg-black text-white btn px-4.5 py-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            Shop All Treatments
          </a>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1.25} // Show a peek of the next slide on mobile
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-5 md:!pb-16 " // Add padding-bottom for navigation
        >
          {treatmentsData.map((product, index) => (
            <SwiperSlide key={index} className="h-auto">
              <ProductCard product={product} />
            </SwiperSlide>
          ))}

          <div className="hidden lg:block absolute bottom-0 right-0 z-10">
            <SwiperNavButtons />
          </div>
        </Swiper>
        <a
          href="/treatments"
          className="mb-0 md:mb-10 block w-full text-center lg:hidden text-[16px] font-normal bg-black text-white px-4.5 py-2 rounded-full hover:bg-gray-800 transition-colors"
        >
          Shop All Treatments
        </a>
      </div>
    </section>
  );
};
