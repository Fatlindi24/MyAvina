"use client";

export default function Prefooter() {
  return (
    <section className="relative w-full min-h-[360px]">
      {/* Background image */}
      <div className="absolute inset-0">
        <picture>
          {/* Mobile image */}
          <source
            srcSet="/Images/prefooter-mob.jpg"
            media="(max-width: 768px)"
            className="w-full h-[320px] rounded-t-4xl object-cover"
          />
          {/* Desktop image */}
          <img
            src="/Images/prefooter-desk.jpg"
            alt="Prefooter Background"
            className="w-full h-full rounded-t-4xl object-cover"
          />
        </picture>
        {/* Gradient overlay */}
        <div className="absolute inset-0 "></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 pt-5 pb-12 md:py-28 flex flex-col md:flex-row items-start md:items-center">
        <div className="max-w-2xl text-white">
          <h2 className="text-[32px] md:text-[64px] font-medium leading-tight mb-4">
            Ready to Write Your Own Success Story?
          </h2>
          <p className="text-sm md:text-[24px] font-light mb-6">
            Join thousands of women finding relief, balance, and confidence with
            personalized menopause care.
          </p>
          <button className="px-6 py-3 bg-black text-white rounded-full font-normal btn hover:bg-gray-900 transition">
            Start My Free Visit
          </button>
        </div>
      </div>
    </section>
  );
}
