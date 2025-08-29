"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, CheckCircle2, ChevronDown } from "lucide-react";
import { symptoms } from "@/data/symptoms";
import { products } from "@/data/products";
import SymptomsMenu from "@/components/SymptomsMenu";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function SymptomDetailPage() {
  const { slug } = useParams();
  const s = symptoms.find((x) => x.slug === slug);

  if (!s) {
    return <div className="container py-12">Symptom not found.</div>;
  }

  const recommended = products.filter((p) =>
    s.recommendedProductIds.includes(p.id)
  );
  const related = symptoms.filter((x) => s.relatedSymptoms.includes(x.slug));

  // Build sections dynamically
  const sections = [
    { id: "what", label: "What it is" },
    { id: "helps", label: "What helps" },
    ...(s.redFlags.length > 0
      ? [{ id: "doctor", label: "When to talk to a doctor" }]
      : []),
    ...(s.faq.length > 0 ? [{ id: "faqs", label: "FAQs" }] : []),
  ];

  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      let current: string | null = null;
      sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = sec.id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div className="container px-6 py-10 mx-auto space-y-12">
      {/* Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-10 items-start">
        <SymptomsMenu />
        <div>
          <span className="text-white bg-[#774180] px-2 py-0.5 rounded-full text-[14px] font-thin">
            {s.category} • Last reviewed {s.lastReviewed}
          </span>
          <h1 className="text-[32px] lg:text-[48px] mt-6 leading-snug font-medium">
            {s.name}
          </h1>
          <p className="mt-4 text-gray-700">{s.short}</p>
          {s.image && (
            <div className="mt-6 relative w-full h-80">
              <Image
                src={s.image}
                alt={s.name}
                fill
                className="rounded-lg object-cover"
              />
            </div>
          )}
        </div>
      </div>

      {/* Content + Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-8 items-start">
        {/* Mobile dropdown */}
        <details className="lg:hidden mb-6 bg-[#f6f6f6] rounded-lg border border-gray-200">
          <summary className="flex justify-between items-center px-4 py-3 cursor-pointer text-lg font-medium">
            Content
            <ChevronDown className="w-4 h-4" />
          </summary>
          <ul className="px-4 pb-4 space-y-3 text-base">
            {sections.map((sec) => (
              <li
                key={sec.id}
                className="cursor-pointer text-gray-700 hover:text-black"
                onClick={() => {
                  const el = document.getElementById(sec.id);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {sec.label}
              </li>
            ))}
          </ul>
        </details>

        {/* Desktop sticky Overview */}
        <aside className="hidden lg:block top-20 sticky space-y-6 h-fit">
          <h4 className="text-lg font-normal text-[#828282] mb-2">Content</h4>
          <ul className="relative pl-4 border-l border-gray-300 space-y-4 text-lg">
            {sections.map((sec) => (
              <li
                key={sec.id}
                className={`cursor-pointer transition-colors ${
                  activeSection === sec.id
                    ? "text-black font-medium"
                    : "text-gray-500 hover:text-black"
                }`}
                onClick={() => {
                  const el = document.getElementById(sec.id);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {sec.label}
              </li>
            ))}
          </ul>
        </aside>

        {/* Sections */}
        <div className="space-y-12">
          <section id="what">
            <h2 className="lg:text-[32px] text-[24px] font-medium mb-2">
              What it is
            </h2>
            <p className="text-gray-700">{s.description}</p>
          </section>

          <section id="helps">
            <h2 className="lg:text-[32px] text-[24px] font-medium mb-2">
              What helps
            </h2>
            <ul className="space-y-2">
              {s.tips.map((t, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-800">
                  <CheckCircle2 className="w-5 h-5 text-gray-900 mt-0.5" />
                  {t}
                </li>
              ))}
            </ul>
          </section>

          {s.redFlags.length > 0 && (
            <section id="doctor" className="bg-yellow-50 border rounded-xl p-4">
              <h3 className="text-lg font-semibold mb-2">
                When to talk to a doctor
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-800">
                {s.redFlags.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </section>
          )}

          {s.faq.length > 0 && (
            <section id="faqs">
              <h2 className="lg:text-[32px] text-[24px] font-medium mb-4">
                FAQs
              </h2>
              <div className="space-y-4">
                {s.faq.map((f, i) => (
                  <div key={i} className="rounded-xl border p-4">
                    <p className="font-medium">{f.q}</p>
                    <p className="text-gray-700 mt-1">{f.a}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Recommended + Related */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
        {/* Recommended Treatments */}
        <div>
          {recommended.length > 0 && (
            <div className="mt-12">
              <h3 className="text-xl font-normal mb-3">
                Recommended Treatments
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {recommended.map((p) => (
                  <Link
                    key={p.id}
                    href={`/product/${p.slug}`}
                    className="bg-[#F6ECFF] rounded-xl p-4 hover:shadow-md transition block"
                  >
                    <p className="text-[12px] text-gray-500">{p.category}</p>
                    <p className="font-semibold">{p.name}</p>
                    <p className="text-[12px] text-gray-500 mt-1">{p.price}</p>
                    <span className="mt-3 inline-flex h-8 px-4 rounded-full border border-black text-[12px] items-center">
                      Learn More
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Related Symptoms as Swiper */}
        {related.length > 0 && (
          <aside className="mt-12">
            <h4 className="text-lg font-normal mb-3">Related Symptoms</h4>

            <Swiper
              loop={false}
              centeredSlides={false}
              spaceBetween={12}
              slidesPerView={2.2} // mobile default
              breakpoints={{
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              className="!pb-8"
            >
              {related.map((r) => (
                <SwiperSlide key={r.slug}>
                  <Link
                    href={`/symptoms/${r.slug}`}
                    className="px-3 h-8 rounded-full border text-[12px] inline-flex items-center justify-center whitespace-nowrap bg-white hover:bg-gray-100"
                  >
                    {r.name}
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </aside>
        )}
      </div>
    </div>
  );
}
