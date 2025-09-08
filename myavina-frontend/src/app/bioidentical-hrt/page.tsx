// app/bioidentical-hrt/page.tsx
"use client";

import Image from "next/image";
import {
  Brain,
  Flame,
  Moon,
  type LucideIcon,
  Cloud,
  ThermometerSun,
  SunMoonIcon,
  RefreshCcwDot,
  BatteryLow,
  Zap,
  Flower,
  RefreshCcw,
  Bone,
  Stethoscope,
  Candy,
  Puzzle,
  BicepsFlexed,
  ShieldAlert,
  Leaf,
  Sprout,
  Dna,
  CheckCircle,
  Sparkles,
  PillIcon,
} from "lucide-react";
import SectionSix from "@/components/AboutComponents/SectionSix";

/* helpers */
const Feature = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-3">
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full">
      {icon}
    </span>
    <span className="text-[14px] leading-6 text-gray-800">{text}</span>
  </div>
);

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-black text-white text-[13px] px-4 py-2">
      {children}
    </span>
  );
}

function Stat({
  icon: Icon,
  title,
  body,
}: {
  icon: LucideIcon;
  title: string;
  body: string;
}) {
  return (
    <div className="flex gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F2EEF7]">
        <Icon className="h-5 w-5 text-[#774180]" />
      </div>
      <div>
        <p className="font-medium text-black">{title}</p>
        <p className="text-black/70">{body}</p>
      </div>
    </div>
  );
}

export default function BioidenticalHrtPage() {
  return (
    <>
      {/* ================== HERO (full-bleed) ================== */}
      <section className="relative w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-visible">
        {/* Right outside image on desktop */}
        <div className="pointer-events-none select-none hidden lg:block">
          <Image
            src="/Images/biohrt/woman-hrt.jpg"
            alt="Confident woman"
            width={720}
            height={900}
            priority
            className="absolute right-0 top-1/2 -translate-y-1/2 max-w-[45vw] h-auto"
          />
        </div>
        {/* Content container with right padding to clear the outside image */}
        <div className="container mx-auto px-6 ">
          <div className="relative py-10 lg:py-30 lg:pr-[450px]">
            <h1 className="font-medium text-gray-900 leading-[1.1] max-w-xl text-[32px] md:text-[48px]">
              Hormone Replacement Therapy (HRT) for Menopause Relief
            </h1>
            <p className="mt-5 text-[16px] md:text-lg text-gray-700 max-w-xl">
              Personalized, plant-based treatments designed to restore balance,
              reduce symptoms, and improve quality of life.
            </p>
            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <a
                href="/get-started"
                className="inline-flex items-center justify-center rounded-full bg-black text-white px-7 py-3 text-[16px] shadow hover:bg-[#774180] transition-colors w-full sm:w-auto"
              >
                Start Your Free Visit
              </a>
            </div>
            {/* Mobile/tablet image (inside flow) */}
            <div className="mt-10 flex justify-center lg:hidden">
              <Image
                src="/Images/biohrt/woman-hrtmobile.jpg"
                alt="Confident woman"
                width={520}
                height={720}
                priority
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ================== What is HRT ================== */}
      <section className="relative w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#F6F6F6]">
        <div className="container mx-auto px-6 py-12 md:py-14">
          <div className="max-w-5xl mx-auto text-left md:text-center">
            {/* label */}
            <p className="text-[16px] font-light text-[#774180] mb-2">HRT</p>

            {/* title */}
            <h2 className="text-[32px] md:text-[40px] font-medium text-black">
              What is HRT?
            </h2>

            {/* copy */}
            <p className="mt-3 text-[14px] md:text-[18px] text-black font-normal">
              As women transition into menopause, natural hormone levels like
              estrogen, progesterone, and testosterone begin to steadily
              decline.
              <br />
              <br />
              This shift can trigger over 100 possible symptoms, including hot
              flashes, night sweats, mood swings, and brain fog. Hormone
              Replacement Therapy (HRT) is a doctor-prescribed treatment that
              restores these hormone levels using bioidentical, plant-based
              hormones. By replenishing what the body is losing, HRT helps
              relieve symptoms and supports long-term health.
            </p>
          </div>

          {/* image (desktop vs mobile) */}
          <div className="mt-8">
            {/* Desktop / tablet */}
            <Image
              src="/Images/biohrt/what-is-hrt.jpg"
              alt="What is HRT"
              width={1200}
              height={720}
              className="hidden md:block w-full h-auto rounded-3xl  object-cover"
              priority={false}
            />
            {/* Mobile */}
            <Image
              src="/Images/biohrt/what-is-hrtmobile.jpg"
              alt="What is HRT (mobile)"
              width={900}
              height={1200}
              className="md:hidden w-full h-auto bg-[#f6f6f6] rounded-3xl object-cover"
              priority={false}
            />
          </div>
        </div>
      </section>
      {/* ================== How HRT Works ================== */}
      <section className="mx-auto px-6 py-10 md:py-14 flex flex-col-reverse md:grid md:grid-cols-[1fr_1.2fr] gap-10 md:gap-16 container items-center">
        {/* Left side */}
        <div className="order-2 md:order-1">
          <p className="text-[16px] tracking-widest text-[#774180] mb-2">HRT</p>

          <h3 className="md:text-[40px] text-[32px] leading-tight text-black font-medium">
            How Does HRT Work for Menopausal Women?
          </h3>

          <p className="mt-3 text-black text-[14px] md:text-[18px]">
            Every woman’s journey is unique—there’s no one-size-fits-all
            solution. Bioidentical HRT is tailored to your specific needs based
            on your symptoms. Our clinicians design a personalized plan to help
            you feel like yourself again.
          </p>

          <div className="mt-6">
            <a
              href="/get-started"
              className="inline-flex items-center justify-center rounded-full bg-black text-white px-7 py-3 text-[16px] shadow hover:bg-[#774180] transition-colors w-full sm:w-auto"
            >
              Start Your Free Visit
            </a>
          </div>
        </div>

        {/* Right side: 2x3 grid */}
        <div className="order-1 md:order-2">
          <div className="grid grid-cols-2  gap-[6px]  ">
            {[
              { icon: ThermometerSun, text: "Hot flashes" },
              { icon: SunMoonIcon, text: "Night sweats" },
              { icon: Cloud, text: "Brain fog" },
              { icon: BatteryLow, text: "Low energy" },
              { icon: RefreshCcwDot, text: "Mood swings" },
              { icon: Flame, text: "Intimacy issues" },
            ].map(({ icon: I, text }) => {
              const [first = "", second = ""] = text.split(" ");
              return (
                <div
                  key={text}
                  className="flex items-center gap-4 rounded-md bg-[#F5ECFF] px-4 md:px-14 py-4"
                >
                  <I
                    className="md:h-10 md:w-10 h-7 w-7 text-[#774180]"
                    strokeWidth={1.7}
                  />
                  <span className="text-[14px] md:text-[16px]">
                    <span className="text-black">{first}</span>
                    <span className="text-[#774180]">{second}</span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* ================== Types of HRT ================== */}
      <section className="bg-[#F6F6F6] py-16 md:py-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-[32px] md:text-[40px] font-medium text-black">
              Types of HRT
            </h3>
            <p className="mt-4 text-[16px] md:text-[20px] text-black">
              We make menopause care simple, safe, and personal
              <br />— designed around you.
            </p>
          </div>

          {/* Features */}
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
            {[
              {
                title: "Estrogen Therapy",
                body: "Reduces hot flashes, night sweats, and vaginal dryness.",
                Icon: Flower,
              },
              {
                title: "Progesterone Therapy",
                body: "Balances estrogen and supports sleep & mood.",
                Icon: Moon,
              },
              {
                title: "Testosterone Therapy",
                body: "Boosts libido, energy, and muscle health.",
                Icon: Zap,
              },
              {
                title: "Combination Therapy",
                body: "Customized mix for full menopause symptom relief.",
                Icon: RefreshCcw,
              },
            ].map(({ title, body, Icon }) => (
              <div
                key={title}
                className="flex flex-col items-center lg:items-start text-left gap-4"
              >
                <div className="bg-white/90 rounded-full p-4 ">
                  <Icon
                    className="w-12 h-12 text-[#774180]"
                    strokeWidth={1.8}
                  />
                </div>
                <h4 className="text-[18px] md:text-[24px] font-medium text-black">
                  {title}
                </h4>
                <p className="text-[14px] md:text-[16px] text-black/70 text-center lg:text-left leading-snug max-w-[28ch]">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================== Benefits ================== */}
      <section className="container mx-auto px-6 py-16 md:py-20">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-[32px] md:text-[40px] font-medium text-black">
            Benefits of HRT
          </h3>
          <p className="mt-3 text-[16px] md:text-[18px] text-black">
            Discover the long-term health benefits of hormone replacement
            therapy
          </p>
        </div>

        {/* List */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {/* 1 */}
          <div className="flex items-start gap-4">
            <div className="p-5 rounded-full bg-[#E9E2FF] flex items-center justify-center ">
              <Bone className="w-8 h-8 text-[#774180]" strokeWidth={1.8} />
            </div>
            <div>
              <h4 className="text-[18px] md:text-[20px] font-medium text-black">
                Stronger Bones
              </h4>
              <p className="mt-1 text-[14px] md:text-lg text-black ">
                HRT preserves bone density and lowers the risk of osteoporosis
                and fractures.
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="flex items-start gap-4">
            <div className="p-5 rounded-full bg-[#E9E2FF] flex items-center justify-center ">
              <Brain className="w-8 h-8 text-[#774180]" strokeWidth={1.8} />
            </div>
            <div>
              <h4 className="text-[18px] md:text-[20px] font-medium text-black">
                Reduced Alzheimer’s Risk
              </h4>
              <p className="mt-1 text-[14px] md:text-lg text-black ">
                Some studies show HRT lowers the chance of developing
                Alzheimer’s disease.
              </p>
            </div>
          </div>

          {/* 3 */}
          <div className="flex items-start gap-4">
            <div className="p-5 rounded-full bg-[#E9E2FF] flex items-center justify-center ">
              <Candy className="w-8 h-8 text-[#774180]" strokeWidth={1.8} />
            </div>
            <div>
              <h4 className="text-[18px] md:text-[20px] font-medium text-black">
                Lower Diabetes Risk
              </h4>
              <p className="mt-1 text-[14px] md:text-lg text-black ">
                Studies show HRT reduces the incidence of diabetes by up to 30%.
              </p>
            </div>
          </div>

          {/* 4 */}
          <div className="flex items-start gap-4">
            <div className="p-5 rounded-full bg-[#E9E2FF] flex items-center justify-center ">
              <Stethoscope
                className="w-8 h-8 text-[#774180]"
                strokeWidth={1.8}
              />
            </div>
            <div>
              <h4 className="text-[18px] md:text-[20px] font-medium text-black">
                Cardiovascular Protection
              </h4>
              <p className="mt-1 text-[14px] md:text-lg text-black ">
                Estrogen supports blood vessel health and reduces plaque
                build-up.
              </p>
            </div>
          </div>

          {/* 5 */}
          <div className="flex items-start gap-4">
            <div className="p-5 rounded-full bg-[#E9E2FF] flex items-center justify-center ">
              <Puzzle className="w-8 h-8 text-[#774180]" strokeWidth={1.8} />
            </div>
            <div>
              <h4 className="text-[18px] md:text-[20px] font-medium text-black">
                Colorectal Cancer Protection
              </h4>
              <p className="mt-1 text-[14px] md:text-lg text-black ">
                Research indicates HRT may lower colorectal cancer risk.
              </p>
            </div>
          </div>

          {/* 6 */}
          <div className="flex items-start gap-4">
            <div className="p-5 rounded-full bg-[#E9E2FF] flex items-center justify-center ">
              <BicepsFlexed
                className="w-8 h-8 text-[#774180]"
                strokeWidth={1.8}
              />
            </div>
            <div>
              <h4 className="text-[18px] md:text-[20px] font-medium text-black">
                Supports Muscle Mass
              </h4>
              <p className="mt-1 text-[14px] md:text-lg text-black ">
                Maintains strength, connective tissue, and vitality.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ================== Risks ================== */}
      <section className="bg-[#F6F6F6] py-16 md:py-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-[32px] md:text-[36px] font-medium text-black">
              Health Risks of Hormone Therapy
            </h3>
            <p className="mt-3 text-[16px] md:text-[18px] text-black">
              As with any treatment, Hormone Replacement Therapy (HRT) carries
              potential risks. Discussing your medical history with your doctor
              can help determine if HRT is right for you.
            </p>
          </div>

          {/* Risks list */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1 */}
            <div className="flex items-start gap-4">
              <div className="p-4  rounded-full bg-[#E9E2FF] flex items-center justify-center ring-1 ring-black/5">
                <ShieldAlert
                  className="w-8 h-8 text-[#774180]"
                  strokeWidth={1.8}
                />
              </div>
              <div>
                <h4 className="text-[18px] md:text-[20px] font-medium text-black">
                  Heart disease
                </h4>
                <p className="mt-1 text-[14px] md:text-lg text-black max-w-[36ch]">
                  Including the risk of heart attack.
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="flex items-start gap-4">
              <div className="p-4  rounded-full bg-[#E9E2FF] flex items-center justify-center ring-1 ring-black/5">
                <ShieldAlert
                  className="w-8 h-8 text-[#774180]"
                  strokeWidth={1.8}
                />
              </div>
              <div>
                <h4 className="text-[18px] md:text-[20px] font-medium text-black">
                  Blood clots and stroke
                </h4>
                <p className="mt-1 text-[14px] md:text-lg text-black  max-w-[36ch]">
                  Risk may be higher during the first year of use, especially
                  for those with high blood pressure or who smoke.
                </p>
              </div>
            </div>

            {/* 3 */}
            <div className="flex items-start gap-4">
              <div className="p-4 rounded-full bg-[#E9E2FF] flex items-center justify-center ring-1 ring-black/5">
                <ShieldAlert
                  className="w-8 h-8 text-[#774180]"
                  strokeWidth={1.8}
                />
              </div>
              <div>
                <h4 className="text-[18px] md:text-[20px] font-medium text-black">
                  Breast cancer
                </h4>
                <p className="mt-1 text-[14px] md:text-lg text-black max-w-[36ch]">
                  Long-term use of HRT may increase the risk.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="mt-10 overflow-hidden rounded-2xl ">
            {/* Desktop / tablet */}
            <Image
              src="/Images/biohrt/risk.png"
              alt="Doctor discussing HRT with patient"
              width={1400}
              height={700}
              className="hidden md:block w-full h-auto object-cover"
              sizes="(min-width: 768px) 1100px, 100vw"
              priority
            />

            {/* Mobile */}
            <Image
              src="/Images/biohrt/riskmobile.png"
              alt="Doctor discussing HRT with patient"
              width={750}
              height={900}
              className="block md:hidden w-full h-auto object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </section>
      {/* ================== Bioidentical explainer ================== */}

      <section className="container mx-auto px-6 py-10 md:py-14 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
        {/* Left */}
        <div className="md:col-span-1">
          {/* Tiny leaf accent */}
          <Leaf className="w-6 h-6 text-[#774180] mb-3" strokeWidth={2} />

          <h3 className="text-[32px] md:text-[40px] font-medium text-black leading-tight">
            Bioidentical HRT
          </h3>

          <p className="mt-2 text-[18px] text-black">
            A safer, plant-based approach to hormone therapy
          </p>

          <h4 className="mt-6 text-[20px] md:text-[24px] font-normal text-black">
            What Makes Bioidentical Different?
          </h4>

          <ul className="mt-4 space-y-3">
            {[
              { Icon: Sprout, text: "Plant-based & natural" },
              { Icon: Dna, text: "Molecularly identical" },
              { Icon: CheckCircle, text: "FDA-approved ingredients" },
              { Icon: Sparkles, text: "Fewer side effects" },
              { Icon: PillIcon, text: "Multiple forms available" },
            ].map(({ Icon, text }) => (
              <li key={text} className="flex items-center gap-3">
                <span className="inline-flex w-9 h-9 items-center justify-center rounded-full  ring-1 ring-black/15">
                  <Icon className="w-6 h-6 text-[#774180]" strokeWidth={1.8} />
                </span>
                <span className="text-[15px] md:text-[16px] text-black">
                  {text}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <a
              href="/get-started"
              className="inline-flex items-center justify-center rounded-full bg-black text-white px-7 py-3 text-[16px] shadow hover:bg-[#774180] transition-colors w-full sm:w-auto"
            >
              Start Your Free Visit
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="md:col-span-2">
          <Image
            src="/Images/biohrt/womans.jpg"
            alt="Bioidentical HRT"
            width={880}
            height={620}
            className="w-full h-auto rounded-2xl object-cover ring-1 ring-black/5"
            priority
          />
        </div>
      </section>
      {/* ================== CTA band ================== */}
      <SectionSix />
    </>
  );
}
