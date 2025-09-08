import React from "react";
import Image from "next/image";

// ---- Data (swap image paths as needed) ----
const stepsData = [
  {
    stepNumber: "1",
    title: "Your easiest visit ever",
    description:
      "We’ll gather your medical information and connect you with Myavina physician for personalized recommendations.",
    imageUrl: "/Images/homepage/step1.png",
    highlightImage: true, // shows the blue border (like your mobile mock)
  },
  {
    stepNumber: "2",
    title: "Your easiest visit ever",
    description:
      "We’ll gather your medical information and connect you with Myavina physician for personalized recommendations.",
    imageUrl: "/Images/homepage/step2.png",
  },
  {
    stepNumber: "3",
    title: "Your easiest visit ever",
    description:
      "We’ll gather your medical information and connect you with Myavina physician for personalized recommendations.",
    imageUrl: "/Images/homepage/step3.png",
  },
];

const DrNancyBubble = (
  <div className="relative">
    <div className="text-white text-sm font-normal pl-4 pb-1 mt-1">
      Dr. Nancy
    </div>
    {/* bubble */}
    <div className="flex items-start gap-3 bg-white/50 backdrop-blur-md rounded-2xl px-4 py-3 shadow-md">
      <div>
        <div className="text-white text-sm leading-snug">
          How have
          <br />
          you been feeling?
        </div>
      </div>
      <div className="relative -ml-8 -mt-8 h-12 w-12 shrink-0 rounded-full  overflow-hidden">
        <Image
          src="/Images/authors/dr-sarah.png" // change to your avatar
          alt="Dr. Nancy"
          fill
          className="object-cover"
        />
      </div>
    </div>
    {/* tail */}
  </div>
);

// ---- Reusable blocks ----
function TextCard({
  stepNumber,
  title,
  description,
}: {
  stepNumber: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-xl md:rounded-2xl border border-black/[0.06] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] p-4 md:p-6">
      <div className="flex items-start">
        {/* Number */}
        <span className="block leading-none text-[24px]  font-light text-gray-800">
          {stepNumber}
        </span>

        {/* Divider */}
        <span className="mx-3 md:mx-4 mt-[2px] h-[100] w-px bg-gray-300/80" />

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-[16px]  font-normal text-gray-900">{title}</h3>
          <p className="mt-2 text-[14px] font-light leading-relaxed text-[#828282]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function ImageCard({
  src,
  alt,
  highlight = false,
  overlay, // <-- NEW
  overlayClassName = "top-5 left-5", // <-- NEW
}: {
  src: string;
  alt: string;
  highlight?: boolean;
  overlay?: React.ReactNode;
  overlayClassName?: string; // e.g., "top-6 left-6" or "bottom-6 right-6"
}) {
  return (
    <div className="rounded-xl md:rounded-2xl overflow-hidden bg-white shadow-[0_10px_28px_rgba(0,0,0,0.18)]">
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
          priority
        />

        {/* Overlay (absolute) */}
        {overlay ? (
          <div className={`absolute ${overlayClassName} z-10`}>{overlay}</div>
        ) : null}
      </div>
    </div>
  );
}

// ---- Main Section ----
export const HowItWorksSection: React.FC = () => {
  return (
    <section className="bg-[#F6F6F6] py-10 md:pt-14 md:pb-20">
      <div className="container  mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto ">
          <h2 className="text-[32px] md:text-[40px] font-medium text-gray-900">
            How It Works
          </h2>
          <p className="mt-3 md:mt-4 text-[16px] md:text-[18px] text-gray-600">
            Myavina provides fast, easy and convenient care for your menopause
            symptoms.
          </p>
        </div>

        {/* ===== Mobile (<lg): stacked EXACTLY like your mock ===== */}
        <div className="lg:hidden mt-6 space-y-5">
          {stepsData.map((s, idx) => (
            <div key={idx} className="space-y-4">
              <TextCard
                stepNumber={s.stepNumber}
                title={s.title}
                description={s.description}
              />
              <ImageCard
                src={s.imageUrl}
                alt={`${s.title} - Step ${s.stepNumber}`}
                highlight={!!s.highlightImage}
                overlay={idx === 2 ? DrNancyBubble : undefined}
                overlayClassName="top-4 left-4"
              />
            </div>
          ))}
          <div className="h-6" />
        </div>

        {/* ===== Desktop (>=lg): 3 columns (image-top, text-top, image-top) ===== */}
        <div className="hidden lg:grid mt-14 grid-cols-3 gap-8 items-end">
          {/* Col 1: Image top */}
          <div className="flex flex-col gap-5">
            <ImageCard
              src={stepsData[0].imageUrl}
              alt={`${stepsData[0].title} - Step ${stepsData[0].stepNumber}`}
              highlight={!!stepsData[0].highlightImage}
            />
            <TextCard
              stepNumber={stepsData[0].stepNumber}
              title={stepsData[0].title}
              description={stepsData[0].description}
            />
          </div>

          {/* Col 2: Text top */}
          <div className="flex flex-col gap-5">
            <TextCard
              stepNumber={stepsData[1].stepNumber}
              title={stepsData[1].title}
              description={stepsData[1].description}
            />
            <ImageCard
              src={stepsData[1].imageUrl}
              alt={`${stepsData[1].title} - Step ${stepsData[1].stepNumber}`}
            />
          </div>

          {/* Col 3: Image top */}
          <div className="flex flex-col gap-5">
            <ImageCard
              src={stepsData[2].imageUrl}
              alt={`${stepsData[2].title} - Step ${stepsData[2].stepNumber}`}
              overlay={DrNancyBubble}
              overlayClassName="top-6 left-6"
            />
            <TextCard
              stepNumber={stepsData[2].stepNumber}
              title={stepsData[2].title}
              description={stepsData[2].description}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
