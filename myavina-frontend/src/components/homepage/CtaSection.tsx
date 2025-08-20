import React from "react";
import Image from "next/image";
import Link from "next/link";

// --- Data for the Call-to-Action cards ---
const ctaData = [
  {
    title: "Expert Answers, Live",
    description:
      "Connect with MyAvina's menopause specialists and get real-time answers to all your questions.",
    buttonText: "Shop All Treatments",
    buttonLink: "/treatments",
    imageUrl: "/Images/homepage/cta1.png", // IMPORTANT: Replace with your image path
    buttonVariant: "dark",
  },
  {
    title: "Did you know there are over 100 menopause symptoms?",
    description:
      "Learn what's normal and what to expect, so you're never caught off guard.",
    buttonText: "Explore Symptoms",
    buttonLink: "/symptoms",
    imageUrl: "/Images/homepage/cta2.png", // IMPORTANT: Replace with your image path
    buttonVariant: "light",
  },
];

// --- Reusable Card Component ---
interface CtaCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
  buttonVariant?: "dark" | "light";
}

const CtaCard: React.FC<CtaCardProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  imageUrl,
  buttonVariant = "dark",
}) => {
  const buttonClasses =
    buttonVariant === "dark"
      ? "bg-black text-white hover:bg-gray-800"
      : "bg-white text-black border border-transparent hover:bg-gray-200";

  return (
    <Link
      href={buttonLink}
      className="group relative block w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
    >
      {/* Background Image */}
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
      />

      {/* Darkening Overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-8 sm:p-10 text-white">
        {/* Top Text */}
        <div className="max-w-lg">
          <h3 className="font-medium text-[32px] leading-[130%] tracking-normal">
            {title}
          </h3>
          <p className="font-normal text-[20px] leading-[130%] tracking-normal font-prompt">
            {description}
          </p>
        </div>

        {/* Bottom Button */}
        <div>
          <span
            className={`inline-block font-normal text-[16px] leading-[100%] tracking-normal px-6 py-3 rounded-full transition-colors ${buttonClasses}`}
          >
            {buttonText}
          </span>
        </div>
      </div>
    </Link>
  );
};

// --- Main Section Component ---
export const CtaSection = () => {
  return (
    <section className="bg-white pb-16 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {ctaData.map((card, index) => (
            <CtaCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};
