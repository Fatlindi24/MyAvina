"use client";

import {
  Venus,
  Flower2,
  Pill,
  Bandage,
  ShieldCheck,
  Salad,
  HandHeart,
  Sprout,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* --- Data (icons as components, not JSX elements) --- */
type Choice = { Icon: LucideIcon; title: string; description: string };
const choicesData: Choice[] = [
  {
    Icon: Venus,
    title: "Body",
    description: "Supports overall hormone balance.",
  },
  {
    Icon: Flower2,
    title: "Vaginal",
    description: "Relieves vaginal discomfort.",
  },
  { Icon: Pill, title: "Oral", description: "Easy hormone therapy by mouth." },
  {
    Icon: Bandage,
    title: "Patch",
    description: "Hormones delivered the skin.",
  },
];

type Feature = { Icon: LucideIcon; text: string };
const featuresData: Feature[] = [
  { Icon: ShieldCheck, text: "FDA-Approved Pills" },
  { Icon: HandHeart, text: "Compounded with Care" },
  { Icon: Salad, text: "Made Using Traditional Pestle and Mortar Methods" },
  { Icon: Sprout, text: "Plant-Based and Plant-Derived Ingredients" },
];

/* --- Sub-Components --- */
type ChoiceCardProps = {
  Icon: LucideIcon;
  title: string;
  description: string;
};
function ChoiceCard({ Icon, title, description }: ChoiceCardProps) {
  return (
    <div className="bg-[#F5ECFF] text-gray-900 px-6 py-4 rounded-2xl flex items-center gap-5 border border-transparent  transition-all duration-300">
      <div className="bg-white rounded-full p-4.5 flex-shrink-0 flex text-[#774180] items-center justify-center ">
        <Icon size={42} strokeWidth={1.75} />
      </div>
      <div>
        <h3 className="text-[18px] font-medium btn leading-tight">{title}</h3>
        <p className="text-[16px] font-normal btn leading-snug text-gray-700 mt-1">
          {description}
        </p>
      </div>
    </div>
  );
}

/* --- Main Section --- */
export default function TopChoices() {
  return (
    <section className="bg-white text-gray-900">
      <div className="mx-auto container py-16 sm:pb-24 px-4 ">
        <div className="lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
          {/* Left column */}
          <div>
            <h2 className="text-[24px] md:text-[32px] leading-[1.15] font-medium sm:text-[32px]">
              The Top Choice Among
              <br />
              Physicians for Menopause Care
            </h2>

            <ul className="mt-8 space-y-5">
              {featuresData.map(({ Icon, text }, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5">
                    <Icon size={24} />
                  </span>
                  <span className="text-[18px] text-gray-800">{text}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-[18px] text-gray-700 max-w-xl">
              Bioidentical Hormone Replacement Therapy (HRT) is a safe and
              effective solution for managing symptoms of perimenopause and
              menopause.
            </p>
          </div>

          {/* Right column */}
          <div className="mt-12 lg:mt-0">
            <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-2">
              {choicesData.map(({ Icon, title, description }) => (
                <ChoiceCard
                  key={title}
                  Icon={Icon}
                  title={title}
                  description={description}
                />
              ))}
            </div>
            <div className="mt-8">
              <a
                href="/treatments"
                className="inline-block bg-black text-white text-[16px] px-6 py-2 rounded-full hover:bg-gray-800 transition-colors btn font-normal"
              >
                Explore All Treatments
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
