"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  PauseCircle,
  MessageSquareMore,
  ArrowRightCircle,
  Dna,
  ClipboardPlus,
  ShieldCheck,
  Package,
} from "lucide-react";

const wordsToCycle = [
  "change.",
  "midlife.",
  "this stage.",
  "menopause.",
  "you.",
];

const Feature = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-3">
    <span className="inline-flex items-center justify-center w-6 h-6   rounded-full ">
      {icon}
    </span>
    <span className="text-[14px] leading-6 text-gray-800">{text}</span>
  </div>
);

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % wordsToCycle.length);
        setIsFading(false);
      }, 400);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    /* FULL-WIDTH WRAPPER so the image can live outside the container */
    <section className="relative w-full overflow-visible">
      {/* Absolutely positioned image OUTSIDE the container */}
      <div className="pointer-events-none select-none hidden lg:block">
        <Image
          src="/Images/homepage/hero-woman-v1.png"
          alt="Confident woman"
          width={720}
          height={900}
          priority
          className="absolute right-0 top-1/2 -translate-y-1/2 max-w-[45vw] h-auto"
        />
      </div>

      {/* CONTENT CONTAINER — reserve space on the right so text never overlaps img */}
      <div className="container mx-auto px-6 ">
        {/* Add right padding only on large screens to clear the outside image */}
        <div className="relative py-10 lg:py-16 lg:pr-[450px]">
          {/* TEXT BLOCK — capped at 60% width */}
          <div className="">
            <h1 className="font-medium text-gray-900 leading-[1.1] text-[32px] md:text-[48px] ">
              Because feeling amazing
              <br />
              shouldn’t stop with{" "}
              <span className="inline-block min-w-[250px] align-baseline">
                <span
                  className={` text-[#774180] transition-opacity duration-500 ${
                    isFading ? "opacity-0" : "opacity-100"
                  }`}
                >
                  {wordsToCycle[wordIndex]}
                </span>
              </span>
            </h1>

            <p className="mt-5 text-[20px]  text-gray-700 max-w-xl">
              As hormones shift after 35, so does your wellbeing. Bioidentical
              HRT helps ease the symptoms you see — and the ones you don’t.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <a
                href="/get-started"
                className="inline-flex items-center justify-center btn rounded-full bg-[#774180] text-white px-7 py-3 font-regular text-[16px] shadow hover:bg-[#4b2951] transition-colors w-full sm:w-auto"
              >
                Restore My Hormones
              </a>
              <a
                href="/register"
                className="inline-flex items-center btn gap-2 text-[#774180] font-medium"
              >
                Take The Quiz
                <ArrowRightCircle className="w-5 h-5 -rotate-45" />
              </a>
            </div>

            {/* Features */}
            <div className="mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 max-w-[520px] text-[14px] font-medium">
              <Feature
                icon={<ClipboardPlus className=" text-black" />}
                text="Board certified doctors"
              />
              <Feature
                icon={<Dna className=" text-black" />}
                text="Custom-made for your body"
              />
              <Feature
                icon={<PauseCircle className=" text-black" />}
                text="Pause or cancel anytime"
              />
              <Feature
                icon={<ShieldCheck className=" text-black" />}
                text="Discreet, secure delivery"
              />
              <Feature
                icon={<MessageSquareMore className=" text-black" />}
                text="Unlimited free follow‑ups"
              />
              <Feature
                icon={<Package className=" text-black" />}
                text="Free shipping"
              />
            </div>
          </div>

          {/* MOBILE/TABLET image (inside flow) */}
          <div className="mt-10 flex justify-center lg:hidden">
            <Image
              src="/Images/about-mobile.png"
              alt="Confident woman"
              width={520}
              height={720}
              priority
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
