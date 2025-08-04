"use client";

import { useState } from 'react';
import Image from 'next/image';

// --- Icon Components ---
const CapsuleIcon = () => (<Image src="/Images/homepage/capsule.png" alt="Capsule icon" width={24} height={24} />);
const LowEnergyIcon = () => (<Image src="/Images/homepage/low-energy.png" alt="Low energy icon" width={24} height={24} />);
const HotFlashesIcon = () => (<Image src="/Images/homepage/hot-flashes.png" alt="Hot flashes icon" width={24} height={24} />);
const NightSweatsIcon = () => (<Image src="/Images/homepage/night-sweats.png" alt="Night sweats icon" width={24} height={24} />);
const IntimacyIcon = () => (<Image src="/Images/homepage/intimacy.png" alt="Intimacy icon" width={24} height={24} />);
const SleepIcon = () => (<Image src="/Images/homepage/bed.png" alt="Sleep icon" width={24} height={24} />);
const AnxietyIcon = () => (<Image src="/Images/homepage/anxiety.png" alt="Anxiety icon" width={24} height={24} />);
const MoodSwingsIcon = () => (<Image src="/Images/homepage/mood-swings.png" alt="Mood swings icon" width={24} height={24} />);
const FatigueIcon = () => (<Image src="/Images/homepage/fatigue.png" alt="Fatigue icon" width={24} height={24} />);
const BrainFogIcon = () => (<Image src="/Images/homepage/brain-fog.png" alt="Brain fog icon" width={24} height={24} />);
const SkinChangesIcon = () => (<Image src="/Images/homepage/skin-changes.png" alt="Skin changes icon" width={24} height={24} />);
const JointPainIcon = () => (<Image src="/Images/homepage/joint-pain.png" alt="Joint pain icon" width={24} height={24} />);
const MoreIcon = () => (<Image width={22} height={22} src="/Images/homepage/ArrowRight.svg" alt="More icon" />);

// --- Data ---
const primarySymptomsData = [
  { name: 'Weight gain', icon: <CapsuleIcon /> }, { name: 'Low energy', icon: <LowEnergyIcon /> },
  { name: 'Hot flashes', icon: <HotFlashesIcon /> }, { name: 'Night sweats', icon: <NightSweatsIcon /> },
  { name: 'Intimacy issues', icon: <IntimacyIcon /> }, { name: 'Sleep disruptions', icon: <SleepIcon /> },
  { name: 'Anxiety', icon: <AnxietyIcon /> }, { name: 'Mood swings', icon: <MoodSwingsIcon /> },
];
const secondarySymptomsData = [
    { name: 'Fatigue', icon: <FatigueIcon /> }, { name: 'Brain fog', icon: <BrainFogIcon /> },
    { name: 'Skin changes', icon: <SkinChangesIcon /> }, { name: 'Joint pain', icon: <JointPainIcon /> },
];

// --- Sub-Components ---
const SymptomTag = ({ symptom, isSelected, onSelect }) => (
    <button onClick={() => onSelect(symptom.name)} className="bg-gradient-purple lg:w-full w-65 flex items-center justify-between text-left py-3 px-4 rounded-xl">
        <div className="flex items-center justify-between gap-3 "><span className="text-[#774180] lg:text-[16px] text-[14px] w-40">{symptom.name}</span><span className="font-semibold">{symptom.icon}</span></div>
        <div className="text-[#774180]"><MoreIcon /></div>
    </button>
);
const SecondarySymptomTag = ({ symptom }) => (
    <div className="bg-gradient-purple w-full flex items-center justify-between text-left lg:text-[16px] text-[14px] py-3 px-4 rounded-xl "><div className="flex items-center gap-3"><span className="text-[#774180] w-50">{symptom.name}</span><span className="font-semibold text-dark">{symptom.icon}</span></div><div className="text-[#774180]"><MoreIcon /></div></div>
);

// --- Main Section Component ---
export const SymptomsSection = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState(['Weight gain']);

  const handleSelectSymptom = (symptomName) => {
    setSelectedSymptoms(prev => prev.includes(symptomName) ? prev.filter(name => name !== symptomName) : [...prev, symptomName]);
  };

  return (
    <div className="bg-white w-full lg:py-16 py-0 sm:py-24">
      <div className="container mx-auto px-4">
        <h1 className='symptoms-main-title lg:text-[40] text-[32px]  mt-10  mb-10 w-full'>Care for the changes you notice</h1>
        <div className="overflow-x-auto pb-4 no-scrollbar">
          <div className="grid grid-rows-2 grid-flow-col gap-4">
            {primarySymptomsData.map(symptom => (<SymptomTag key={symptom.name} symptom={symptom} isSelected={selectedSymptoms.includes(symptom.name)} onSelect={handleSelectSymptom} />))}
          </div>
        </div>
        <div className="mt-20 text-center">
          <h3 className="text-xl text-dark text-left">and those you might not recognize yet</h3>
          <div className="overflow-x-auto pb-4 no-scrollbar">
            <div className="grid grid-rows-1 grid-flow-col gap-4">
              {secondarySymptomsData.map(symptom => (<SecondarySymptomTag key={symptom.name} symptom={symptom} />))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};