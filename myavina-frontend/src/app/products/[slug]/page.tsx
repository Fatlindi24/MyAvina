"use client";
// app/products/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  ChevronRight,
  Star,
  Plus,
  Venus,
  Flower2,
  Pill,
  Bandage,
  Bed,
  Droplet,
  ThermometerIcon,
  CheckCircle2,
  Truck,
  Stethoscope,
  Users,
  Zap,
  ChevronLeft,
  ShieldCheck,
} from "lucide-react";
import { products } from "@/data/products";
import { testimonials } from "@/data/testimonials";
import TreatmentInformation from "@/components/product/TreatmentInformation";
import TestimonialsSlider from "@/components/product/TestimonialsSlider";
import RelatedProductsCarousel from "@/components/RelatedProductsCarousel";
import ProductFAQ from "@/components/product/ProductFAQ";
import React from "react";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  return (
    <div className=" min-h-screen bg-white ">
      {/* HERO */}
      <section className="grid grid-cols-1 lg:grid-cols-[560px_1fr] gap-10 lg:gap-12 mb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* LEFT: Sticky Product Image + Functional Carousel */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          {(() => {
            // 1) Images for the gallery (first is the main product image)
            const gallery = [
              product.image,
              "/Images/learn/learn1.png",
              "/Images/products/product.png",
              "/Images/learn/learn1.png",
            ];

            // 2) State + handlers
            const [active, setActive] = React.useState(0);

            const prev = () =>
              setActive((i) => (i === 0 ? gallery.length - 1 : i - 1));
            const next = () =>
              setActive((i) => (i === gallery.length - 1 ? 0 : i + 1));
            const goto = (i: number) => setActive(i);

            // 3) Keyboard arrows
            React.useEffect(() => {
              const onKey = (e: KeyboardEvent) => {
                if (e.key === "ArrowLeft") prev();
                if (e.key === "ArrowRight") next();
              };
              window.addEventListener("keydown", onKey);
              return () => window.removeEventListener("keydown", onKey);
            }, []);

            // 4) Simple swipe (touch / mouse)
            const startX = React.useRef<number | null>(null);
            const onPointerDown = (e: React.PointerEvent) => {
              (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
              startX.current = e.clientX;
            };
            const onPointerUp = (e: React.PointerEvent) => {
              if (startX.current == null) return;
              const delta = e.clientX - startX.current;
              // threshold ~ 40px
              if (delta > 40) prev();
              else if (delta < -40) next();
              startX.current = null;
            };

            return (
              <>
                {/* Stage */}
                <div
                  className="relative w-full h-[420px] lg:h-[520px] bg-[#F1EAFB] rounded-2xl overflow-hidden"
                  onPointerDown={onPointerDown}
                  onPointerUp={onPointerUp}
                >
                  {/* track */}
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
                    type="button"
                    aria-label="Previous image"
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 shadow flex items-center justify-center hover:bg-white transition"
                  >
                    <ChevronLeft className="w-4 h-4 text-gray-700" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next image"
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 shadow flex items-center justify-center hover:bg-white transition"
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
                      aria-label={`Select image ${i + 1}`}
                      className={`relative h-20 rounded-xl overflow-hidden border transition ${
                        i === active
                          ? "border-black"
                          : "border-transparent hover:border-gray-300"
                      }`}
                    >
                      <Image
                        src={src}
                        alt={`${product.name} thumb ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </>
            );
          })()}
        </div>

        {/* RIGHT: Content */}
        <div className="space-y-8">
          {/* Title + rating + badges + desc */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              {product.name}
            </h1>

            {/* Rating row */}
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

              <span className="inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs text-gray-800">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-700" />
                FDA‑approved medication
              </span>
            </div>

            <p className="text-gray-700 leading-relaxed max-w-prose">
              {product.description}
            </p>
          </div>

          {/* CTAs */}
          <div className="space-y-3">
            <button className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-900 transition">
              Start Your Free Assessment
            </button>
            <button className="w-full border border-[#D9C8FF] py-3 rounded-full font-medium hover:bg-purple-50/40 transition">
              1‑Month Supply:{" "}
              <span className="font-semibold ml-1">{product.price}</span>
            </button>

            {/* Promo chip */}
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-yellow-100">
                <Zap className="w-3 h-3 text-yellow-600" />
              </span>
              $5 off your first order
            </div>
          </div>

          {/* Symptoms (two columns) */}
          <div>
            <h3 className="text-[15px] font-semibold text-gray-900 mb-2">
              Target 100+ menopause symptoms:
            </h3>
            <div className="grid grid-cols-2 gap-y-2 gap-x-6 text-sm">
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
                title: "Free doctor check‑ins",
                sub: "Your questions answered by a licensed specialist, anytime.",
              },
              {
                icon: Users,
                title: "Community & care, 24/7",
                sub: "Join live events, share stories, and find answers day or night.",
              },
            ].map(({ icon: Icon, title, sub }) => (
              <div key={title} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex w-7 h-7 rounded-full bg-purple-100 items-center justify-center">
                  <Icon className="w-4 h-4 text-purple-700" />
                </span>
                <div>
                  <p className="text-sm font-medium text-gray-900">{title}</p>
                  <p className="text-xs text-gray-500">{sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Divider + Treatment details */}
          <div className="border-b mt-4" />
          <TreatmentInformation product={product} />
        </div>
      </section>

      {/* 90% STAT SECTION */}
      <section className="bg-[#f6f6f6] py-12 mb-16 w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Icons Row */}
        <div className="container mx-auto ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Body */}
            <div className="flex items-center gap-4">
              <div className="p-5 rounded-full bg-white flex items-center justify-center">
                <Venus className="text-purple-600 w-6 h-6" />
              </div>
              <div>
                <p className="font-bold">Body</p>
                <p className="text-sm text-gray-600">
                  Supports overall hormone balance.
                </p>
              </div>
            </div>

            {/* Vaginal */}
            <div className="flex items-center gap-4">
              <div className="p-5 rounded-full bg-white flex items-center justify-center">
                <Flower2 className="text-purple-600 w-6 h-6" />
              </div>
              <div>
                <p className="font-bold">Vaginal</p>
                <p className="text-sm text-gray-600">
                  Relieves vaginal discomfort.
                </p>
              </div>
            </div>

            {/* Oral */}
            <div className="flex items-center gap-4">
              <div className="p-5 rounded-full bg-white flex items-center justify-center">
                <Pill className="text-purple-600 w-6 h-6" />
              </div>
              <div>
                <p className="font-bold">Oral</p>
                <p className="text-sm text-gray-600">
                  Easy hormone therapy by mouth.
                </p>
              </div>
            </div>

            {/* Patch */}
            <div className="flex items-center gap-4">
              <div className="p-5 rounded-full bg-white flex items-center justify-center">
                <Bandage className="text-purple-600 w-6 h-6" />
              </div>
              <div>
                <p className="font-bold">Patch</p>
                <p className="text-sm text-gray-600">
                  Hormones delivered through the skin.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Two-Part Flex Layout */}
        <div className="flex flex-col mx-auto lg:flex-row items-center justify-between gap-12 container">
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
              <span className="text-[128px] font-bold text-gray-900">90%</span>
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
            <p className="text-lg text-gray-600 mb-6">
              of women report better sleep and more energy within weeks of
              starting treatment.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Bioidentical estrogen and progesterone can help stabilize hormone
              levels naturally — so you can sleep deeper, wake refreshed, and
              feel more like yourself again.
            </p>
            <button className="bg-black text-white w-full lg:w-[70%] px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              What Are {product.name}?
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              {product.name} are a type of hormone replacement therapy (HRT)
              used to relieve menopause symptoms like hot flashes, vaginal
              dryness, and mood changes. They help restore estrogen levels in
              the body, which naturally decline during menopause.
            </p>

            <p className="font-semibold mb-4">Key Benefits:</p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <ThermometerIcon className="w-5 h-5 text-purple-600 mr-3" />
                <span className="text-gray-700">
                  Reduces hot flashes and night sweats
                </span>
              </div>
              <div className="flex items-center">
                <Bed className="w-5 h-5 text-purple-600 mr-3" />
                <span className="text-gray-700">Improves sleep and mood</span>
              </div>
              <div className="flex items-center">
                <Droplet className="w-5 h-5 text-purple-600 mr-3" />
                <span className="text-gray-700">
                  Supports vaginal and urinary health
                </span>
              </div>
            </div>

            <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition">
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

      {/* TESTIMONIALS (3 cards, with arrows UI) */}
      <TestimonialsSlider items={testimonials} auto={true} interval={5000} />

      {/* RELATED PRODUCTS */}
      <RelatedProductsCarousel excludeSlug={product.slug} />

      <ProductFAQ title={`${product.name} FAQs`} faq={product.faqs || []} />

      {/* CTA Banner */}
    </div>
  );
}
