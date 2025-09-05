// src/app/products/[slug]/ProductClient.tsx
"use client";

import Image from "next/image";
import React, { useMemo, useRef, useState } from "react";
import {
  ChevronRight,
  Star,
  Venus,
  Pill,
  Bandage,
  Bed,
  Droplet,
  ThermometerIcon,
  CheckCircle2,
  Truck,
  Stethoscope,
  ChevronLeft,
  ShieldCheck,
  TicketPercent,
  Headset,
  Flower,
} from "lucide-react";

import RelatedProductsCarousel from "@/components/RelatedProductsCarousel";
import ProductFAQ from "@/components/product/ProductFAQ";
import TreatmentInformation from "@/components/product/TreatmentInformation";
import TestimonialsSlider from "@/components/product/TestimonialsSlider";
import SectionSix from "@/components/AboutComponents/SectionSix";

// ✅ Import the real types from your data
import { products, type Product as ProductType } from "@/data/products";
// If you have a type exported for testimonials, prefer importing it:
// import { testimonials, type Testimonial as TestimonialType } from "@/data/testimonials";
// Otherwise derive it from the array you pass in:
type TestimonialType =
  typeof import("@/data/testimonials").testimonials[number];

export default function ProductClient({
  product,
  testimonials,
}: {
  product: ProductType; // ✅ use your real Product type
  testimonials: TestimonialType[]; // ✅ matches your data
}) {
  // compute related with the same imported products list
  const related = useMemo(
    () =>
      products
        .filter(
          (p) => p.category === product.category && p.slug !== product.slug
        )
        .slice(0, 4),
    [product.category, product.slug]
  );

  // gallery + hooks…
  const gallery = useMemo<string[]>(
    () => [
      product.image,
      "/Images/learn/learn1.png",
      "/Images/products/product.png",
      "/Images/learn/learn1.png",
    ],
    [product.image]
  );

  const [active, setActive] = useState(0);
  const prev = () => setActive((i) => (i === 0 ? gallery.length - 1 : i - 1));
  const next = () => setActive((i) => (i === gallery.length - 1 ? 0 : i + 1));
  const goto = (i: number) => setActive(i);

  const startX = useRef<number | null>(null);
  const onPointerDown = (e: React.PointerEvent) => {
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    startX.current = e.clientX;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (startX.current == null) return;
    const delta = e.clientX - startX.current;
    if (delta > 40) prev();
    else if (delta < -40) next();
    startX.current = null;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="grid grid-cols-1 lg:grid-cols-[500px_1fr] gap-6 lg:gap-7 container mx-auto px-6 py-10">
        {/* MOBILE Title + Rating + FDA */}
        <div className="block lg:hidden order-1">
          <h1 className="text-[20px] font-normal text-gray-900 mb-3">
            {product.name}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm mb-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.round(product.rating)
                      ? "text-black fill-current"
                      : "text-gray-300"
                  }`}
                  fill={
                    i < Math.round(product.rating) ? "currentColor" : "none"
                  }
                  stroke={
                    i < Math.round(product.rating) ? "none" : "currentColor"
                  }
                />
              ))}
              <span className="ml-1 text-gray-700">{product.rating}</span>
              <span className="ml-1 text-gray-400">Stars</span>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs text-gray-800">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-700" />
              FDA-approved medication
            </span>
          </div>
        </div>

        {/* LEFT: Sticky Product Image + Carousel */}
        <div className="order-2 lg:order-1 lg:sticky lg:top-24 lg:self-start">
          {/* Stage */}
          <div
            className="relative w-full h-[420px] lg:h-[520px] bg-[#F1EAFB] rounded-2xl overflow-hidden"
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
          >
            <div
              className="absolute inset-0 flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {gallery.map((src, i) => (
                <div key={i} className="relative w-full h-full shrink-0">
                  <Image
                    src={src}
                    alt={`${product.name} ${i + 1}`}
                    fill
                    className="object-contain"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>

            {/* Nav arrows */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 shadow flex items-center justify-center"
            >
              <ChevronLeft className="w-4 h-4 text-gray-700" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 shadow flex items-center justify-center"
            >
              <ChevronRight className="w-4 h-4 text-gray-700" />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="mt-4 grid grid-cols-4 gap-4">
            {gallery.map((src, i) => (
              <button
                key={i}
                onClick={() => goto(i)}
                className={`relative h-20 rounded-xl overflow-hidden border transition ${
                  i === active
                    ? "border-black"
                    : "border-transparent hover:border-gray-300"
                }`}
                aria-label={`Go to image ${i + 1}`}
              >
                <Image
                  src={src}
                  alt={`${product.name} thumb ${i + 1}`}
                  fill
                  className="object-contain"
                />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: Content */}
        <div className="space-y-8 order-3 lg:order-2">
          {/* Title + rating (desktop only) */}
          <div className="hidden lg:block">
            <h1 className="text-[48px] font-normal text-gray-900 mb-3">
              {product.name}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-sm mb-4">
              {/* stars + FDA same as above */}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-700 md:text-[16px] text-[14px] leading-relaxed max-w-prose">
            {product.description}
          </p>

          {/* CTAs */}
          <div className="space-y-3">
            <button className="text-[16px] w-full bg-black text-white py-3 rounded-full font-light hover:bg-gray-900 transition cursor-pointer">
              Start Your Free Assessment
            </button>
            <button className="w-full text-[16px] border border-[#774180] text-[#774180] py-3 rounded-full font-light hover:bg-[#774180] hover:text-white transition cursor-pointer">
              1-Month Supply: <span className="ml-1">{product.price}</span>
            </button>
            <div className="flex items-center gap-2 text-sm font-light text-[#828282]">
              <TicketPercent className="text-white w-10 h-10" fill="gold" />
              $5 off your first order
            </div>
          </div>

          {/* Symptoms (two columns) */}
          <div>
            <h3 className="text-[20px] font-normal text-gray-900 mb-5">
              Target 100+ menopause symptoms:
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-2 gap-x-6 md:text-lg font-light">
              {[
                "Night sweats & hot flashes",
                "Hormonal weight gain",
                "Low energy & fatigue",
                "Joint & hip pain",
                "Low libido & vaginal dryness",
                "Brain fog",
              ].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gray-900" />
                  <span className="text-gray-800">{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits / service rows */}
          <div className="space-y-4">
            {[
              {
                icon: Truck,
                title: "Free shipping",
                sub: "We’ll deliver your treatments discreetly, fast, and free.",
              },
              {
                icon: Stethoscope,
                title: "Free doctor check-ins",
                sub: "Your questions answered by a licensed specialist, anytime.",
              },
              {
                icon: Headset,
                title: "Community & care, 24/7",
                sub: "Join live events, share stories, and find answers day or night.",
              },
            ].map(({ icon: Icon, title, sub }) => (
              <div key={title} className="flex items-center gap-3">
                <span className="mt-0.5 inline-flex p-2 lg:p-4 rounded-full bg-gray-100 items-center justify-center">
                  <Icon className="w-7 h-7 text-[#774180]" strokeWidth="1.5" />
                </span>
                <div>
                  <p className="text-lg md:text-xl font-normal text-black-900">
                    {title}
                  </p>
                  <p className="text-sm md:text-md font-light text-black-500">
                    {sub}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Rest: symptoms, benefits, treatment info */}
          <TreatmentInformation product={product} />
        </div>
      </section>

      {/* 90% STAT SECTION */}
      <section className="bg-[#f6f6f6] py-12 mb-16 w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Icons Row */}
        <div className="container mx-auto ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 px-4 md:px-0">
            {/* Body */}
            <div className="flex items-center gap-4">
              <div className="p-5 rounded-full bg-white flex items-center justify-center">
                <Venus className="text-[#774180] w-10 h-10" strokeWidth={1.6} />
              </div>
              <div>
                <p className="font-medium btn text-lg">Body</p>
                <p className="text-md btn font-normal text-gray-600">
                  Supports overall hormone balance.
                </p>
              </div>
            </div>

            {/* Vaginal */}
            <div className="flex items-center gap-4">
              <div className="p-5 rounded-full bg-white flex items-center justify-center">
                <Flower
                  className="text-[#774180] w-10 h-10"
                  strokeWidth={1.6}
                />
              </div>
              <div>
                <p className="font-medium btn text-lg">Vaginal</p>
                <p className="text-md btn font-normal text-gray-600">
                  Relieves vaginal discomfort.
                </p>
              </div>
            </div>

            {/* Oral */}
            <div className="flex items-center gap-4">
              <div className="p-5 rounded-full bg-white flex items-center justify-center">
                <Pill className="text-[#774180] w-10 h-10" strokeWidth={1.6} />
              </div>
              <div>
                <p className="font-medium btn text-lg">Oral</p>
                <p className="text-md btn font-normal text-gray-600">
                  Easy hormone therapy by mouth.
                </p>
              </div>
            </div>

            {/* Patch */}
            <div className="flex items-center gap-4">
              <div className="p-5 rounded-full bg-white flex items-center justify-center">
                <Bandage
                  className="text-[#774180] w-10 h-10"
                  strokeWidth={1.6}
                />
              </div>
              <div>
                <p className="font-medium btn text-lg">Patch</p>
                <p className="text-md btn font-normal text-gray-600">
                  Hormones delivered through the skin.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Two-Part Flex Layout */}
        <div className="flex flex-col mx-auto lg:flex-row items-center justify-between gap-5 md:gap-12 container">
          {/* Left - Image */}
          <div className="flex-shrink-0 w-full lg:w-1/2">
            <div className="relative w-full h-100 rounded-2xl overflow-hidden">
              <Image
                src="/Images/learn/learn1.png"
                alt="Learn"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center ">
              <span className="text-[70px] md:text-[128px] font-medium text-gray-900">
                90%
              </span>
              <div className="ml-4 relative w-[160px] h-[120px]">
                <Image
                  src="/Images/pill.png"
                  alt="Pill"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <p className="text-xl font-normal text-black mb-6">
              of women report better sleep and more energy within weeks of
              starting treatment.
            </p>
            <p className="text-xl font-normal text-black mb-6">
              Bioidentical estrogen and progesterone can help stabilize hormone
              levels naturally — so you can sleep deeper, wake refreshed, and
              feel more like yourself again.
            </p>
            <button className="bg-black text-white w-full lg:w-[70%] px-6 py-3 rounded-full font-normal btn hover:bg-gray-800 transition">
              See if it&apos;s right for you
            </button>
          </div>
        </div>
      </section>

      {/* WHAT ARE ... SECTION */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-[40px]">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Left - Text (4/7) */}
          <div className="w-full lg:w-4/7">
            <h2 className="text-[32px] md:text-[40px] font-medium text-black mb-6 leading-tight">
              What Are {product.name}?
            </h2>
            <p className="text-black mb-8 leading-relaxed text-lg md:text-[20px]">
              {product.name} are a type of hormone replacement therapy (HRT)
              used to relieve menopause symptoms like hot flashes, vaginal
              dryness, and mood changes. They help restore estrogen levels in
              the body, which naturally decline during menopause.
            </p>

            <p className="text-lg md:text-[20px] font-light mb-4">
              Key Benefits:
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <ThermometerIcon className="w-7 h-7 text-[#774180] mr-3" />
                <span className="text-black font-light text-[16px]">
                  Reduces hot flashes and night sweats
                </span>
              </div>
              <div className="flex items-center">
                <Bed className="w-7 h-7 text-[#774180] mr-3" />
                <span className="text-black font-light text-[16px]">
                  Improves sleep and mood
                </span>
              </div>
              <div className="flex items-center">
                <Droplet className="w-7 h-7 text-[#774180] mr-3" />
                <span className="text-black font-light text-[16px]">
                  Supports vaginal and urinary health
                </span>
              </div>
            </div>

            <button className="bg-black text-white px-6 py-3 rounded-full font-normal btn hover:bg-gray-800 transition">
              Get Started Today
            </button>
          </div>

          {/* Right - Image (3/7) */}
          <div className="w-full lg:w-3/7">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden">
              <Image
                src="/Images/learn/learn1.png"
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialsSlider items={testimonials} auto={true} interval={5000} />

      {/* RELATED PRODUCTS */}
      <RelatedProductsCarousel excludeSlug={product.slug} />

      <ProductFAQ title={`${product.name} FAQs`} faq={product.faqs || []} />

      {/* CTA Banner */}
      <SectionSix />
    </div>
  );
}
