// app/products/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Check, ChevronRight, Star, Plus } from "lucide-react";
import { products } from "@/data/products";
import { testimonials } from "@/data/testimonials";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      {/* HERO with STICKY IMAGE */}
      <section className="grid grid-cols-1 lg:grid-cols-[minmax(0,520px)_1fr] gap-12 mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* LEFT: Sticky Product Image */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="relative w-full h-[420px] lg:h-[520px] bg-purple-50 rounded-2xl overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* RIGHT: Title, Price, Buttons, Targets, Badges, Accordions */}
        <div className="space-y-12">
          {/* Title, rating, description */}
          <section className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>

              <div className="flex items-center space-x-2 mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  medically reviewed
                </span>
              </div>

              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              {/* Hook up to Cart later */}
              <button className="w-full bg-black text-white py-3 px-6 rounded-full font-medium hover:bg-gray-800 transition">
                Add to Cart
              </button>
              <button className="w-full border border-gray-300 py-3 px-6 rounded-full font-medium hover:bg-gray-50 transition">
                1‑Month supply:{" "}
                <span className="font-semibold">${product.price}</span>
              </button>
              <div className="flex items-center text-sm text-gray-600">
                <Check className="w-4 h-4 mr-2 text-green-600" />
                30‑day risk‑free
              </div>
            </div>

            {/* Targets */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">
                Targets 100+ menopause symptoms:
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {[
                  "Hot flashes",
                  "Night sweats",
                  "Mood swings",
                  "Sleep issues",
                ].map((t) => (
                  <div key={t} className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-green-600" />
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Badges / Benefits header row */}
            <div className="space-y-2">
              {[
                "Free shipping",
                "Free doctor check‑ins",
                "Personalized to your body",
              ].map((b) => (
                <div key={b} className="flex items-center text-sm">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full" />
                  </div>
                  {b}
                </div>
              ))}
            </div>
          </section>

          <div className="border-b" />

          {/* Treatment Information (accordions) */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Treatment Information
              </h2>
            </div>
            <div className="lg:col-span-2 space-y-4">
              {/* DESCRIPTION */}
              <details className="border border-gray-200 rounded-lg">
                <summary className="px-6 py-4 cursor-pointer font-medium flex items-center justify-between">
                  DESCRIPTION <Plus className="w-4 h-4" />
                </summary>
                <div className="px-6 pb-4 text-gray-600">
                  <p>{product.description}</p>
                </div>
              </details>

              {/* HOW TO USE */}
              <details className="border border-gray-200 rounded-lg">
                <summary className="px-6 py-4 cursor-pointer font-medium flex items-center justify-between">
                  HOW TO USE <Plus className="w-4 h-4" />
                </summary>
                <div className="px-6 pb-4 text-gray-600">
                  <p>{product.usage}</p>
                </div>
              </details>

              {/* INGREDIENTS */}
              <details className="border border-gray-200 rounded-lg">
                <summary className="px-6 py-4 cursor-pointer font-medium flex items-center justify-between">
                  INGREDIENTS <Plus className="w-4 h-4" />
                </summary>
                <div className="px-6 pb-4 text-gray-600">
                  <ul className="list-disc list-inside space-y-1">
                    {product.ingredients?.map((ing, i) => (
                      <li key={i}>{ing}</li>
                    ))}
                  </ul>
                </div>
              </details>

              {/* BENEFITS */}
              <details className="border border-gray-200 rounded-lg">
                <summary className="px-6 py-4 cursor-pointer font-medium flex items-center justify-between">
                  BENEFITS <Plus className="w-4 h-4" />
                </summary>
                <div className="px-6 pb-4 text-gray-600">
                  <ul className="list-disc list-inside space-y-1">
                    {product.benefits?.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              </details>
            </div>
          </section>
        </div>
      </section>

      {/* 90% STAT SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-80 bg-purple-50 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-32 bg-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-4xl font-bold">M</span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center mb-4">
            <span className="text-6xl font-bold text-gray-900">90%</span>
            <div className="ml-4 w-16 h-8 bg-orange-200 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-orange-400 rounded-full" />
            </div>
          </div>
          <p className="text-lg text-gray-600 mb-6">
            of women report better sleep and more energy within weeks of
            starting treatment.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition">
            See if it&apos;s right for you
          </button>
        </div>
      </section>

      {/* WHAT ARE ... SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What Are {product.name}?
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            {product.name} are a type of therapy designed to help relieve common
            menopause symptoms like hot flashes, vaginal dryness, mood changes,
            and sleep issues.
          </p>
          <div className="space-y-3 mb-6">
            {[
              "Reduces hot flashes & night sweats",
              "Supports restful sleep and steady mood",
              "Promotes vaginal and urinary health",
            ].map((t) => (
              <div key={t} className="flex items-center">
                <Check className="w-4 h-4 mr-3 text-green-600" />
                <span className="text-sm">{t}</span>
              </div>
            ))}
          </div>
          <button className="border border-black px-6 py-2 rounded-full font-medium hover:bg-black hover:text-white transition">
            Get Started Today
          </button>
        </div>
        <div className="relative h-80 bg-purple-50 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-32 bg-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-4xl font-bold">M</span>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS (3 cards, with arrows UI) */}
      <section className="mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">
          What Women Are Saying
        </h2>
        <p className="text-center text-gray-600 mb-8">
          About <span className="text-purple-600 font-semibold">MYAVINA</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((t) => (
            <div key={t.id} className="bg-gray-50 rounded-2xl p-6">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">{t.text}</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3" />
                <div>
                  <p className="font-medium text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
                <div className="ml-auto">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-2">{t.date}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50">
            <ChevronRight className="w-4 h-4 rotate-180" />
          </button>
          <button className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center hover:bg-purple-700">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Explore More Support for
            <br />
            Your Menopause Journey
          </h2>
          <Link
            href="/shop"
            className="text-purple-600 font-medium flex items-center"
          >
            Shop all <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {related.map((rp) => (
            <Link key={rp.id} href={`/products/${rp.slug}`} className="group">
              <div className="bg-purple-50 rounded-2xl p-6 text-center group-hover:shadow-lg transition">
                <div className="relative w-full h-36 mb-4">
                  <Image
                    src={rp.image}
                    alt={rp.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{rp.name}</h3>
                <p className="text-sm text-gray-500 mb-2">${rp.price}</p>
                <div className="flex justify-center text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          <button className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center">
            <ChevronRight className="w-3 h-3 rotate-180" />
          </button>
          <button className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center">
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          MYAVINA Estrogen Body Cream
          <br />
          (with Progesterone) FAQs
        </h2>

        <div className="space-y-4">
          {[
            {
              q: "Why would I need both estrogen and progesterone?",
              a: "Both hormones work together to provide comprehensive menopause symptom relief and hormonal balance.",
            },
            {
              q: "Is progesterone safe to use in a cream?",
              a: "Yes, topical progesterone is considered safe when used as directed by a healthcare provider.",
            },
            {
              q: 'What does "bioest" mean?',
              a: "Bioest refers to bioidentical estrogen that matches your body's natural hormone structure.",
            },
            {
              q: "Why isn't the bottle full?",
              a: "The bottle contains the exact amount needed for your prescribed dosage and treatment duration.",
            },
            {
              q: "Is the progesterone in the cream safe if I have a peanut allergy?",
              a: "Please consult with your healthcare provider about any allergies before starting treatment.",
            },
          ].map((item) => (
            <details key={item.q} className="border border-gray-200 rounded-lg">
              <summary className="px-6 py-4 cursor-pointer font-medium flex items-center justify-between">
                {item.q}
                <Plus className="w-4 h-4" />
              </summary>
              <div className="px-6 pb-4 text-gray-600">
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-purple-600 rounded-2xl p-8 text-center text-white mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-2">
          Ready to Feel Like Yourself Again?
        </h2>
        <p className="mb-6 opacity-90">
          Start your personalized menopause plan today and join thousands of
          women feeling their best.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition">
            Start Treatment Today
          </button>
          <button className="border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-purple-600 transition">
            Take the Quiz
          </button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-900 rounded-2xl p-8 text-center text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h3 className="text-lg font-semibold mb-2">
          Join our newsletter for trusted menopause advice, health tips, and
          exclusive updates.
        </h3>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mt-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-full text-gray-900"
          />
          <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
}
