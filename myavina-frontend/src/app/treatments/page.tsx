"use client";

import { useMemo } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionSixEdit from "@/components/SectionSixEdit";

function slugify(input: string) {
  return input.toLowerCase().replace(/\s+/g, "-");
}

export default function ShopPage() {
  const categories = useMemo(
    () => Array.from(new Set(products.map((p) => p.category))),
    []
  );

  return (
    <div>
      <div className="container mx-auto px-6 py-8">
        {/* Heading row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:mt-20 mb-10 ">
          <h1 className="text-[32px] md:text-[48px] font-normal leading-tight text-black max-w-xl">
            Explore Our Menopause Solutions
          </h1>
          <p className="text-[16px] md:text-[20px] max-w-md">
            Doctor-recommended treatments designed to support your unique
            journey.
          </p>
        </div>

        <div className="border-b border-[#D3D3D3] mt-2" />

        {categories.map((category) => {
          const catId = slugify(category);
          const items = products.filter((p) => p.category === category);

          return (
            <section key={category} className="mt-5 mb-12">
              <h2 className="text-xl md:text-2xl font-normal mb-4 uppercase tracking-wide">
                {category}
              </h2>

              {/* Carousel (mobile & desktop) */}
              <Swiper
                modules={[Navigation, Pagination]}
                // mobile-first
                spaceBetween={16}
                slidesPerView={1.15}
                pagination={{
                  el: `.swiper-pagination-${catId}`,
                  clickable: true,
                }}
                navigation={{
                  nextEl: `.swiper-button-next-${catId}`,
                  prevEl: `.swiper-button-prev-${catId}`,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2.15,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3.15,
                    spaceBetween: 24,
                  },
                  1280: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                  },
                }}
                className="product-swiper"
              >
                {items.map((product) => (
                  <SwiperSlide key={product.id}>
                    <ProductCard product={product} />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Controls (chevrons + dots) */}
              {/* <div className="flex items-center justify-center mt-6 gap-4">
                <button
                  className={`swiper-button-prev-${catId} w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors`}
                  aria-label="Previous"
                >
                  <ChevronRight className="w-4 h-4 rotate-180" />
                </button>

                <div
                  className={`swiper-pagination-${catId} flex gap-2`}
                  aria-label="Pagination"
                />

                <button
                  className={`swiper-button-next-${catId} w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors`}
                  aria-label="Next"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div> */}
            </section>
          );
        })}
      </div>

      {/* optional extra section */}
      <SectionSixEdit />

      {/* Swiper bullets style to match the mock */}
      {/* <style jsx global>{`
        .product-swiper .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          background: #d3d3d3;
          opacity: 1;
        }
        .product-swiper .swiper-pagination-bullet-active {
          background: #000000;
        }
      `}</style> */}
    </div>
  );
}
