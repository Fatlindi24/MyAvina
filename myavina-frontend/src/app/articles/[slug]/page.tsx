"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { topics } from "@/data/topics";
import { articles } from "@/data/articles";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useRef } from "react";
import TopicsMenu from "@/components/TopicsMenu";

export default function ArticlePage() {
  const params = useParams();
  const slug = params?.slug as string;
  const article = articles.find((a) => a.slug === slug);
  if (!article)
    return <div className="container py-10">Article not found.</div>;

  const topic = topics.find(
    (t) => t.name.toLowerCase() === article.category.toLowerCase()
  );
  const related = articles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3);

  const [activeSection, setActiveSection] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      let current = null;
      article.sections.forEach((_, i) => {
        const el = document.getElementById(`section-${i}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = i;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [article.sections]);
  function RelatedNav() {
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);

    return (
      <div className="pointer-events-none absolute -top-12 right-0 hidden md:flex items-center gap-2">
        <button
          ref={prevRef}
          onClick={() =>
            (document.querySelector(".swiper") as any)?.swiper.slidePrev()
          }
          className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/20 bg-white hover:bg-black hover:text-white transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          ref={nextRef}
          onClick={() =>
            (document.querySelector(".swiper") as any)?.swiper.slideNext()
          }
          className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/20 bg-white hover:bg-black hover:text-white transition-colors"
          aria-label="Next"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    );
  }

  return (
    <div className="container px-6 py-10 mx-auto space-y-12 ">
      {/* Breadcrumbs */}
      <nav className="text-[16px] text-[#828282] font-light mb-1 lg:mb-4 ">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        /{" "}
        <Link href="/learn" className="hover:underline">
          Learn
        </Link>{" "}
        /{" "}
        <Link href={`/learn/${topic?.slug}`} className="hover:underline">
          {topic?.name}
        </Link>{" "}
        / <span className="text-gray-700">{article.title}</span>
      </nav>

      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] mt-4 lg:mt-12 gap-8 items-start">
        {/* Topics Menu */}
        <div className="lg:mt-18">
          <TopicsMenu />
        </div>

        {/* Hero Content */}
        <div>
          <span className="text-white bg-[#774180] px-2 py-0.5 rounded-full text-[15px] font-thin">
            Average Read Time • {article.readTime}
          </span>
          <h1 className="text-[32px] lg:text-[48px] mt-8 leading-snug font-medium">
            {article.title}
          </h1>

          {/* Author */}
          <div className="flex items-center gap-3 mt-8">
            <Image
              src={article.author.image}
              alt={article.author.name}
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <p className="text-[16px] text-gray-500">{article.author.role}</p>
              <p className="font-normal text-[24px] text-black">
                {article.author.name}
              </p>
              <p className="text-[16px] font-light text-gray-500">
                Updated: {article.updatedDate}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="mt-4 text-gray-700">{article.longDescription}</p>

          {/* Hero Image */}
          <div className="mt-6 relative w-full h-96">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-4 lg:gap-8 items-start">
        {/* Content Menu */}
        <aside className=" top-20 lg:sticky space-y-6 h-fit">
          <div>
            <h4 className="text-lg font-normal text-[#828282] mb-2">Content</h4>
            <ul className="relative pl-4 border-l border-gray-300 space-y-4  text-lg">
              {article.sections.map((section, i) => (
                <li
                  key={i}
                  className={`cursor-pointer transition-colors ${
                    activeSection === i
                      ? "text-black font-normal"
                      : "text-gray-500 hover:text-black"
                  }`}
                  onClick={() => {
                    const el = document.getElementById(`section-${i}`);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {section.heading}
                </li>
              ))}
            </ul>
          </div>
          {/* Promo Card */}
          <div
            className="text-white hidden lg:block rounded-lg px-4 py-12 text-center max-w-[320px] bg-cover bg-right"
            style={{ backgroundImage: "url('/Images/quiz-take.png')" }}
          >
            <h3 className="text-[32px]">Get Started today!</h3>
            <p className="text-[12px] font-light px-10 mt-3 mb-9">
              Discover personalized menopause care trusted by thousands of women
              just like you.
            </p>
            <Link
              href="#"
              className="bg-white text-black px-5 py-4 text-[16px] rounded-full font-light hover:bg-gray-200 inline-block"
            >
              Take the Quiz
            </Link>
          </div>
        </aside>

        {/* Sections */}
        <div>
          {article.sections.map((section, i) => (
            <section key={i} id={`section-${i}`} className="">
              {/* Heading */}
              {section.heading && (
                <h2 className="lg:text-[40px] text-[24px] font-medium text-black mb-3 mt-2 ">
                  {section.heading}
                </h2>
              )}

              {/* Content */}
              <p className="text-gray-700 text-[14px] lg:text-[16px] ">
                {section.content}
              </p>

              {/* Images - handle single or multiple */}
              {section.images && section.images.length > 0 && (
                <div
                  className={`mt-4 grid gap-4 ${
                    section.images.length > 1 ? "grid-cols-2" : "grid-cols-1"
                  }`}
                >
                  {section.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative w-full mb-10 lg:h-[300px] h-[140px]"
                    >
                      <Image
                        src={img}
                        alt={`${section.heading} ${idx + 1}`}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </div>

      <div className="border-b border-[#DD33DD]/20"></div>

      {/* Related Articles */}
      {related.length > 0 && (
        <div className="relative">
          {/* Nav buttons */}
          <RelatedNav />

          <Swiper
            loop={false}
            centeredSlides={false}
            spaceBetween={24}
            slidesPerView={1.2} // mobile default
            breakpoints={{
              640: { slidesPerView: 2 }, // sm
              1024: { slidesPerView: 3 }, // md, lg, xl, 2xl
            }}
            className="!pb-12 !pl-1"
          >
            {related.map((r) => (
              <SwiperSlide key={r.slug} className="h-full">
                <div className="flex flex-col h-full overflow-hidden rounded-lg">
                  {/* Image */}
                  <div className="relative w-full h-[200px]">
                    <Image
                      src={r.image}
                      alt={r.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>

                  {/* Card body */}
                  <div className="flex flex-col justify-between flex-1 py-4">
                    {/* Top: meta + title */}
                    <div>
                      <div className="flex justify-between font-light">
                        <p className="text-xs text-gray-500 uppercase">
                          Journal / {r.category}
                        </p>
                        <p className="text-xs text-gray-500 uppercase">
                          {r.date} | {r.readTime}
                        </p>
                      </div>

                      <h4 className="mt-1 font-normal text-[18px] text-black line-clamp-2">
                        {r.title}
                      </h4>
                    </div>

                    {/* Bottom: button */}
                    <div className="mt-4">
                      <Link
                        href={`/articles/${r.slug}`}
                        className="inline-flex items-center text-[16px] font-light text-white bg-black px-4 py-2 rounded-full hover:bg-gray-800 transition"
                      >
                        Read More
                        <ChevronRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Mobile CTA below slider */}
          <div
            className="text-white lg:hidden rounded-lg px-4 py-12 text-center bg-cover bg-center"
            style={{ backgroundImage: "url('/Images/quiz-take.png')" }}
          >
            <h3 className="text-[32px]">Get Started today!</h3>
            <p className="text-sm mb-3">
              Discover personalized menopause care trusted by thousands of women
              just like you.
            </p>
            <Link
              href="#"
              className="bg-white text-black px-5 py-4 shadow-xl rounded-full text-md font-light hover:bg-gray-200 inline-block"
            >
              Take the Quiz
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
