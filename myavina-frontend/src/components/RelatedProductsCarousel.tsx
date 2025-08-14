"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

// Swiper
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// ✅ Import your real products
import { products as allProducts, type Product } from "@/data/products";

type Props = {
  title?: string;
  subtitleBreakTitle?: string;
  ctaHref?: string;
  ctaLabel?: string;

  /** Build strategy */
  category?: string; // show products from this category
  excludeSlug?: string; // e.g., current product slug to hide
  limit?: number; // default 8
  slugs?: string[]; // explicit list (overrides category)

  className?: string;
  badgeText?: string; // default "100% Organic"
};

/* ---------- Card ---------- */
const ProductCard: React.FC<{ product: Product; badgeText?: string }> = ({
  product,
  badgeText = "100% Organic",
}) => {
  const rounded = Math.round(product.rating);

  return (
    <div>
      {/* Top (Image container) */}
      <div className="relative bg-[#F8F1FF] rounded-[15px] p-4 flex items-center justify-center aspect-square overflow-hidden">
        <span className="absolute top-4 left-4 z-10 inline-block text-[12px] bg-[#FFDBC5] text-gray-700 font-semibold px-3 py-1 rounded-full">
          {badgeText}
        </span>
        <div className="relative w-full h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-4"
            sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
            priority={false}
          />
        </div>
      </div>

      {/* Bottom (Details) */}
      <div className="mt-4 bg-[#F8F1FF] rounded-[15px] px-4 py-3 text-left shadow-sm">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[16px] font-medium text-gray-900 line-clamp-1">
            {product.name}
          </h3>
          <span className="text-[14px] text-[#828282] whitespace-nowrap">
            {product.price}
          </span>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <span className="text-[12px] text-[#828282]">
            {product.rating.toFixed(1)}
          </span>
          <div className="flex text-black">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < rounded ? "fill-current" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------- Custom Nav Buttons ---------- */
const SwiperNavButtons: React.FC = () => {
  const swiper = useSwiper();
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => swiper.slidePrev()}
        className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors disabled:opacity-50"
        aria-label="Previous"
      >
        <ArrowLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="w-10 h-10 rounded-full bg-[#5D3E8E] flex items-center justify-center text-white hover:bg-[#4a3171] transition-colors disabled:opacity-50"
        aria-label="Next"
      >
        <ArrowRight className="h-5 w-5" />
      </button>
    </div>
  );
};

/* ---------- Main Component ---------- */
const RelatedProductsCarousel: React.FC<Props> = ({
  title = "Explore Menopause",
  subtitleBreakTitle = "Treatments with MYAVINA",
  ctaHref = "/shop",
  ctaLabel = "Shop All Treatments",
  category,
  excludeSlug,
  limit = 8,
  slugs,
  className = "",
  badgeText = "100% Organic",
}) => {
  // Build dataset from your data file
  const data: Product[] = useMemo(() => {
    let base = allProducts;

    if (slugs?.length) {
      base = slugs
        .map((s) => base.find((p) => p.slug === s))
        .filter(Boolean) as Product[];
    } else if (category) {
      base = base.filter((p) => p.category === category);
    }

    if (excludeSlug) base = base.filter((p) => p.slug !== excludeSlug);

    return base.slice(0, limit);
  }, [category, excludeSlug, limit, slugs]);

  if (!data.length) return null;

  return (
    <section className={`bg-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="lg:text-[40px] text-[32px]">
            {title} <br />
            <span className="text-[#774180]">{subtitleBreakTitle}</span>
          </h2>
          <Link
            href={ctaHref}
            className="hidden text-[16px] sm:inline-block bg-black text-white px-5 py-3 rounded-full hover:bg-gray-800 transition-colors"
          >
            {ctaLabel}
          </Link>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1.15} // subtle peek on mobile
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }, // ✅ exactly 4 on desktop
              1280: { slidesPerView: 4 },
            }}
            className="!pb-16"
          >
            {data.map((product) => (
              <SwiperSlide key={product.id} className="h-auto">
                <Link
                  href={`/products/${product.slug}`}
                  className="block group"
                >
                  <ProductCard product={product} badgeText={badgeText} />
                </Link>
              </SwiperSlide>
            ))}

            {/* Desktop Nav */}
            <div className="hidden md:flex mt-10 justify-end z-10">
              <SwiperNavButtons />
            </div>
          </Swiper>
        </div>

        {/* Mobile CTA */}
        <Link
          href={ctaHref}
          className="mb-10 block w-full text-center lg:hidden text-[16px] font-normal bg-black text-white px-5 py-3 rounded-full hover:bg-gray-800 transition-colors"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
};

export default RelatedProductsCarousel;
