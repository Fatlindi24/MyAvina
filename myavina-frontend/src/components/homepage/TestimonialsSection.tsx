"use client";

import React from "react";
import Image from "next/image";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

// Swiper
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// ---- Types ----
type Testimonial = {
  quote: string;
  authorName: string;
  authorAge: number;
  authorImage: string;
  rating: number;
};

// --- Data ---
const testimonialsData = [
  {
    quote:
      "I finally sleep through the night again thanks to MyAvina's treatment plan. It's changed my life!",
    authorName: "Monica",
    authorAge: 51,
    authorImage: "/Images/homepage/Ellipse 23.png",
    rating: 5,
  },
  {
    quote:
      "My energy levels are back to what they were in my 30s. I feel like myself again.",
    authorName: "Jessica",
    authorAge: 48,
    authorImage: "/Images/homepage/Ellipse 23.png",
    rating: 5,
  },
  {
    quote:
      "The brain fog is gone. I can focus at work and feel sharp throughout the day.",
    authorName: "Sarah",
    authorAge: 53,
    authorImage: "/Images/homepage/Ellipse 23.png",
    rating: 5,
  },
  {
    quote:
      "I was skeptical at first, but the personalized care made all the difference.",
    authorName: "Emily",
    authorAge: 55,
    authorImage: "/Images/homepage/Ellipse 23.png",
    rating: 5,
  },
  {
    quote:
      "It's more than just treatment; it's support. The team at MyAvina truly listens.",
    authorName: "Linda",
    authorAge: 52,
    authorImage: "/Images/homepage/Ellipse 23.png",
    rating: 5,
  },
] as const satisfies ReadonlyArray<Testimonial>;

// --- Reusable Testimonial Card Component ---
const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="bg-[#F6F6F6] rounded-2xl p-8 text-center flex flex-col items-center min-h-[370px]">
    <div className="flex text-black items-center justify-center">
      {Array.from({ length: testimonial.rating }).map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-current" />
      ))}
    </div>
    <blockquote className="mt-6 text-[18px] text-dark text-400 flex-grow">
      “{testimonial.quote}”
    </blockquote>
    <div className="mt-6">
      <Image
        src={testimonial.authorImage}
        alt={testimonial.authorName}
        width={56}
        height={56}
        className="rounded-full mx-auto"
      />
      <p className="mt-4 text-[#828282] font-light text-[16px] tracking-normal text-center">
        {testimonial.authorName}, {testimonial.authorAge}
      </p>
    </div>
  </div>
);

// --- Custom Navigation Buttons Component ---
const TestimonialNavButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flex justify-center items-center gap-4 pt-10">
      <button
        onClick={() => swiper.slidePrev()}
        className="w-11 h-11 rounded-full border-2 border-[#774180] text-[#774180] flex items-center justify-center hover:bg-purple-400 hover:text-black transition-colors disabled:opacity-50"
      >
        <ArrowLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="w-11 h-11 rounded-full border-2 border-[#774180] bg-[#774180] text-white flex items-center justify-center hover:bg-purple-500 transition-colors disabled:opacity-50"
      >
        <ArrowRight className="h-5 w-5" />
      </button>
    </div>
  );
};

// --- Main Section Component ---
export const TestimonialsSection = () => {
  return (
    <section className="bg-white pt-16">
      <div className="container mx-auto px-6">
        <h2 className="text-center lg:text-[32px] text-[20px] font-medium mb-12">
          Thousands of women trust{" "}
          <span className="text-[#774180] uppercase">MyAvina</span> for the{" "}
          <br className="hidden md:block" /> relief, support, and community they
          deserve.
        </h2>

        <Swiper
          loop={false}
          centeredSlides={false}
          spaceBetween={30}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="!pb-16"
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index} className="h-auto p-0">
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
          <TestimonialNavButtons />
        </Swiper>
      </div>
    </section>
  );
};
