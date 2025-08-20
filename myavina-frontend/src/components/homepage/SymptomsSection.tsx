"use client";

import Link from "next/link";
import {
  Pill,
  BatteryLow,
  Flame,
  Droplets,
  HeartHandshake,
  Bed,
  Activity,
  Smile,
  Zap,
  Brain,
  Sun,
  Bone,
  ArrowRightCircle,
} from "lucide-react";

// --- Data ---
const primarySymptomsData = [
  { name: "Weight gain", icon: Pill },
  { name: "Low energy", icon: BatteryLow },
  { name: "Hot flashes", icon: Flame },
  { name: "Night sweats", icon: Droplets },
  { name: "Intimacy issues", icon: HeartHandshake },
  { name: "Sleep disruptions", icon: Bed },
  { name: "Anxiety", icon: Activity },
  { name: "Mood swings", icon: Smile },
];

const secondarySymptomsData = [
  { name: "Fatigue", icon: Zap },
  { name: "Brain fog", icon: Brain },
  { name: "Skin changes", icon: Sun },
  { name: "Joint pain", icon: Bone },
];

// --- Card Component ---
const SymptomTag = ({ symptom }) => {
  const Icon = symptom.icon;

  // Split into first word + remaining words
  const words = symptom.name.split(" ");
  const firstPart = words[0];
  const secondPart = words.slice(1).join(" ");

  return (
    <Link
      href="/symptoms"
      className="group flex items-center justify-between py-6 px-4 rounded-xl transition-all duration-300 bg-[#F5ECFF] hover:bg-gradient-to-r min-w-[240px] hover:from-[#F5ECFF] hover:via-[#E4D4FF] hover:to-[#D2BBFF]"
    >
      <span className="text-[16px] font-normal 1">
        <span className="text-black">{firstPart}</span>{" "}
        <span className="text-[#774180]">{secondPart}</span>
      </span>
      <div className="flex items-center gap-2">
        <Icon className="text-[#774180]" size={30} />
        <ArrowRightCircle
          className="text-[#F5ECFF] fill-[#774180] group-hover:text-[#774180] group-hover:fill-[#F5ECFF]"
          size={30}
        />
      </div>
    </Link>
  );
};

// --- Main Section ---
export const SymptomsSection = () => {
  return (
    <div className="bg-white w-full prompt ">
      <div className="container mx-auto px-4">
        <h1 className="symptoms-main-title lg:text-[40px] text-[32px] mt-10 mb-10 w-full">
          Care for the changes you notice
        </h1>

        <div className="overflow-x-auto pb-4 no-scrollbar prompt">
          <div className="grid grid-rows-2 grid-flow-col gap-4">
            {primarySymptomsData.map((symptom) => (
              <SymptomTag key={symptom.name} symptom={symptom} />
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-xl text-dark text-left mb-6 prompt">
            and those you might not recognize yet
          </h3>
          <div className="overflow-x-auto pb-4 no-scrollbar prompt">
            <div className="grid grid-rows-1 grid-flow-col gap-4">
              {secondarySymptomsData.map((symptom) => (
                <SymptomTag key={symptom.name} symptom={symptom} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
