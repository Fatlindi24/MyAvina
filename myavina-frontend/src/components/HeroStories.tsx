"use client";
import { useRef } from "react";
import { women } from "@/data/woman";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";

export default function HeroStories() {
  const swiperRef = useRef<any>(null);

  return (
    <>
      {/* --- Top Hero Banner --- */}
      <section className="container mx-auto py-6 md:py-12">
        <p className="text-md text-[#774180] px-6 uppercase tracking-wide mb-5">
          Reviews
        </p>
        <div className="flex flex-col gap-8 items-start md:items-center">
          {/* Left Text */}
          <div className="flex flex-col md:flex-row justify-between md:items-center w-full px-6">
            <h1 className="text-[32px] md:text-[48px] font-medium md:font-normal mb-4">
              Real Stories. <br /> Real Relief.
            </h1>
            <p className="text-black md:max-w-1/2 text-md md:text-xl">
              See how MyAvina is helping women feel balanced, confident, and
              fully themselves again — in every stage of menopause.
            </p>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="/images/reviews/hero-banner.png"
              alt="MyAvina Reviews Banner"
              className="px-0 md:px-6 rounded-lg w-full object-cover md:h-full"
            />
          </div>
        </div>
      </section>

      {/* --- Stories + Swiper --- */}
      <section className="bg-[#F6F6F6]">
        <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row gap-1 md:gap-20">
          {/* Left Side Text */}
          <div className="md:w-1/3 flex flex-col justify-between">
            <div>
              <h2 className="text-[32px] md:text-[40px] font-medium mb-6">
                Real Stories from Real Women
              </h2>
              <p className="text-black text-[14px] md:text-lg mb-8 max-w-md">
                Supporting women through menopause is our mission. Here’s how
                MyAvina is making a difference — one story at a time.
              </p>
            </div>

            {/* Desktop Arrows */}
            <div className="hidden md:flex gap-4 mt-4">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-purple-600 hover:text-white transition"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-purple-600 hover:text-white transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Side Swiper */}
          <div className="md:w-2/3">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1.2}
              breakpoints={{
                1024: { slidesPerView: 2.2 },
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {women.map((woman) => (
                <SwiperSlide key={woman.id}>
                  <div className="overflow-hidden">
                    <img
                      src={woman.image}
                      alt={woman.name}
                      className="w-full h-auto rounded-lg object-contain"
                    />
                    <div className="pt-4">
                      <h3 className="font-medium text-lg">
                        Meet, {woman.name}
                      </h3>
                      <p className="text-md font-light text-[#828282]">
                        Age {woman.age}, {woman.city}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Mobile Arrows */}
            <div className="flex md:hidden gap-4 mt-6 justify-center">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-purple-600 hover:text-white transition"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-purple-600 hover:text-white transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
