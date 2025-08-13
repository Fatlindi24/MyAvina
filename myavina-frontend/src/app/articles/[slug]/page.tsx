"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { topics } from "@/data/topics";
import { articles } from "@/data/articles";
import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
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

  return (
    <div className="container px-4 py-10 space-y-12 prompt">
      {/* Breadcrumbs */}
      <nav className="text-[16px] text-gray-500 mb-4 prompt">
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
      <div className="grid grid-cols-1 md:grid-cols-[350px_1fr] gap-8 items-start">
        {/* Topics Menu */}
        <TopicsMenu />

        {/* Hero Content */}
        <div>
          <span className="bg-purple-100 text-[#774180] px-3 py-1 rounded-full text-xs font-normal">
            Average Read Time • {article.readTime}
          </span>
          <h1 className="mt-4 text-5xl font-bold text-black">
            {article.title}
          </h1>

          {/* Author */}
          <div className="flex items-center gap-3 mt-4">
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

      <div className="border-b border-pink-300/40"></div>

      {/* Article Content */}
      <div className="grid grid-cols-1 md:grid-cols-[350px_1fr] gap-4 md:gap-8 items-start">
        {/* Content Menu */}
        <aside className=" top-4 space-y-6 h-fit">
          <div>
            <h4 className="text-sm font-semibold text-gray-500 mb-2">
              Content
            </h4>
            <ul className="relative pl-4 border-l border-gray-300 space-y-2 text-sm">
              {article.sections.map((section, i) => (
                <li
                  key={i}
                  className={`cursor-pointer transition-colors ${
                    activeSection === i
                      ? "text-black font-semibold"
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
            className="text-white hidden md:block rounded-lg px-4 py-12 text-center bg-cover bg-center"
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
        </aside>

        {/* Sections */}
        <div>
          {article.sections.map((section, i) => (
            <section key={i} id={`section-${i}`} className="">
              {/* Heading */}
              {section.heading && (
                <h2 className="text-2xl font-bold text-black mb-2">
                  {section.heading}
                </h2>
              )}

              {/* Content */}
              <p className="text-gray-700 ">{section.content}</p>

              {/* Images - handle single or multiple */}
              {section.images && section.images.length > 0 && (
                <div
                  className={`mt-4 grid gap-4 ${
                    section.images.length > 1 ? "grid-cols-2" : "grid-cols-1"
                  }`}
                >
                  {section.images.map((img, idx) => (
                    <div key={idx} className="relative w-full h-[300px]">
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

      <div className="border-b border-pink-300/40"></div>

      {/* Related Articles */}
      {related.length > 0 && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {related.map((r) => (
              <div key={r.slug} className=" overflow-hidden">
                <div className="relative w-full h-[200px]">
                  <Image
                    src={r.image}
                    alt={r.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="py-4">
                  <div className="flex justify-between font-light">
                    <p className="text-xs text-gray-500 uppercase">
                      Journal / {r.category}
                    </p>
                    <p className="text-xs text-gray-500 uppercase">
                      {r.date} | {r.readTime}
                    </p>
                  </div>

                  <h4 className="mt-1 font-normal text-[18px] text-black">
                    {r.title}
                  </h4>
                  <Link
                    href={`/articles/${r.slug}`}
                    className="inline-flex items-center mt-3 text-[16px] font-light text-white bg-black px-4 py-2 rounded-full hover:bg-gray-800 transition"
                  >
                    Read More
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div
            className="text-white md:hidden rounded-lg px-4 py-12 text-center bg-cover bg-center"
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
