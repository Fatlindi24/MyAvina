"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Star, CheckCircle, Flame, Annoyed, Cloud, HeartOff, BatteryLow, BedDouble, TrendingUp,
  ChevronDown, ArrowRight, ArrowLeft, Plus
} from 'lucide-react';
import {
  heroFeatures, symptoms, careAccordionItems, products, processSteps,
  processWorksGrid, pressLogos, doctorTestimonials, faqs
} from '@/data/homepageData';

// --- Icon Map for Data ---
const iconMap = {
    Flame, Annoyed, Cloud, HeartOff, BatteryLow, BedDouble, TrendingUp
};

// --- Main Page Component ---
export default function HomePage() {
  return (
    <div className="bg-white text-gray-800 ">
      <main className="space-y-24 md:space-y-32">
        <HeroSection />
  
        <SymptomsSection />
        <PersonalizedCareSection />
        <MenopauseCTA />
        <CareAccordionSection />
        <TreatmentsSection />
        <HowItWorksSection />
        <ProcessWorksSection />
        <PressSection />
        <DoctorTestimonialsSection />
        <FaqSection />
        <FinalCTA />
      </main>
    </div>
  );
}

// --- Section Components ---
const Feature = ({ icon, text }) => (
  <div className="flex items-center gap-3">
    {icon}
    <span className="text-gray-700">{text}</span>
  </div>
);
const StarIcon = () => (
  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
  </svg>
);

const HeroSection = () => (
  <section className="bg-white">
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        
        {/* Left Column: Text Content */}
        <div>
          <h1 className="font-bold text-gray-900 leading-tight hero-section-title">
            Because feeling amazing shouldn't stop with<span className=" decoration-purple-500 decoration-4 underline-offset-4 text-purple-500"> change.</span>
          </h1>
          <p className=" hero-section-paragraph">
            As hormones shift after 35, so does your wellbeing. Bioidentical HRT helps ease the symptoms you see and the ones you don't.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button className="bg-[#774180] rounded-full text-white  py-3 px-8  shadow-md hover:bg-purple-700 transition-colors w-full sm:w-auto">
              Restore My Hormones
            </button>
            <a href="/register" className="flex items-center gap-2 text-[#774180]">
              <span>Take The Quiz</span>
              <Image src="/homepage/take-quize-arrow.png"  width={25} height={25} alt=""/>
            </a>
          </div>

          {/* Features Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
            <Feature icon={<Image src="/homepage/boardcertifiedoctor.png"  width={25} height={25} alt=""/>} text="Board certified doctors" />
            <Feature icon={<Image src="/homepage/custommadefor.png"  width={25} height={25} alt=""/>} text="Custom-made for your body" />
            <Feature icon={<Image src="/homepage/pauseorcancel.png"  width={25} height={25} alt=""/>} text="Pause or cancel anytime" />
            <Feature icon={<Image src="/homepage/discreet.png"  width={25} height={25} alt=""/>} text="Discreet, secure delivery" />
            <Feature icon={<Image src="/homepage/unlimitedfree.png"  width={25} height={25} alt=""/>} text="Unlimited free follow-ups" />
            <Feature icon={<Image src="/homepage/freeshipping.png"  width={25} height={25} alt=""/>} text="Free shipping" />
       </div>
        </div>
        
        {/* Right Column: Image with Floating Elements */}
        <div className="relative mt-12 lg:mt-0">
          <Image src="/homepage/hero-woman-v1.png" alt="A woman feeling well and confident" width={600} height={500} className="w-full max-w-md mx-auto lg:max-w-none rounded-full" />

          {/* Floating Happy Patients Card */}
          {/* <div className="absolute top-1/2 -translate-y-1/2 right-0 sm:-right-4 bg-white p-3  shadow-xl flex items-center gap-3 w-max">
              <Image src="/homepage/Ellipse 13.png" alt="Happy patient" width={32} height={22} className="w-8 h-8 rounded-full border-2 border-white" />
              <div>
                  <div className="flex">
                      <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                  </div>
                  <p className="text-xs text-gray-600 mt-1">100,000+ Happy Patients</p>
              </div>
          </div> */}

          {/* Floating Heart Card */}
          {/* <div className="absolute bottom-16 -left-4 bg-white p-2  shadow-xl flex items-center gap-2">
              <div className="bg-white-100 p-2 rounded-full">
                  <Image width={20} height={20} className='inline-block h-6 w-6  ring-2 ring-white' src="/homepage/Vector (1).png" alt="User 1" />
              </div>
              <div className="flex -space-x-3">
                  <Image width={32} height={32} className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="/homepage/Ellipse 13.png" alt="User 1" />
                  <Image width={32} height={32} className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="/homepage/Ellipse 14.png"  alt="User 2" />
                  <Image width={32} height={32} className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="/homepage/Ellipse 15.png"  alt="User 3" />
                  <Image width={32} height={32} className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="/homepage/Ellipse 16.png"  alt="User 3" />
              </div>
          </div> */}
        </div>
      </div>
    </div>
  </section>
);

// --- Icon Components (SVG definitions for clarity) ---
// No changes here, we will reuse the existing icons.
const CapsuleIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L12 12M12 22V12M12 12C15.3137 12 18 9.31371 18 6C18 2.68629 15.3137 0 12 0C8.68629 0 6 2.68629 6 6C6 9.31371 8.68629 12 12 12ZM12 12C8.68629 12 6 14.6863 6 18C6 21.3137 8.68629 24 12 24C15.3137 24 18 21.3137 18 18C18 14.6863 15.3137 12 12 12Z" stroke="currentColor" strokeWidth="1.5" /></svg>;
const LowEnergyIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="8" width="14" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M19 11H20.5C21.3284 11 22 11.6716 22 12.5V12.5C22 13.3284 21.3284 14 20.5 14H19V11Z" fill="currentColor"/><path d="M7 12H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
const HotFlashesIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 13V3M12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10C15 11.6569 13.6569 13 12 13ZM8 21H16M17 6L19 4M7 6L5 4M17 10H20M4 10H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
const NightSweatsIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.5C12 2.5 6 3 6 10C6 17 12 21.5 12 21.5C12 21.5 18 17 18 10C18 3 12 2.5 12 2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M15.5 8.5C15.5 8.5 15 6 13 6C11 6 11 8 11 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
const IntimacyIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.7828 10.2185C20.6974 13.521 18.7339 16.8998 15.5673 17.9189C12.4007 18.938 8.9413 17.6534 7.21875 14.8284C5.4962 12.0035 6.27375 8.44116 8.78184 6.64321C11.2899 4.84526 14.7396 5.30538 16.826 7.42533" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M11.5 6.5C12.5 5.5 15.5 4 17 6.5C18.5 9 16.5 11.5 15 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const SleepIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12H22M2 18H22M5 12V6.5C5 6.22386 5.22386 6 5.5 6H18.5C18.7761 6 19 6.22386 19 6.5V12M8 9H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
const AnxietyIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/><path d="M16 14.5C16 14.5 14.5 12.5 12 12.5C9.5 12.5 8 14.5 8 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M8.5 8C8.5 8 9 9 10 9C11 9 11.5 8 11.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M12.5 8C12.5 8 13 9 14 9C15 9 15.5 8 15.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
const MoodSwingsIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M9 13.5V10.5M15 10.5V13.5M9 10.5C9 9.67157 9.67157 9 10.5 9H13.5C14.3284 9 15 9.67157 15 10.5M9 13.5C9 14.3284 9.67157 15 10.5 15H13.5C14.3284 15 15 14.3284 15 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
const FatigueIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 18.5L9.5 12L14.5 16L21 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 15.5V9.5H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const BrainFogIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21C12.9227 21 13.8291 20.8189 14.6642 20.4735C16.8928 19.5414 18.5 17.4429 18.5 15C18.5 12.2386 16.2614 10 13.5 10C13.0645 10 12.6457 10.055 12.247 10.1583C11.1915 8.16518 9.28169 6.89932 7.09848 6.95355C4.28399 7.02237 2 9.24835 2 12C2 13.5217 2.72304 14.8885 3.90098 15.7916M17 19C17 17.8954 17.8954 17 19 17C20.1046 17 21 17.8954 21 19C21 20.1046 20.1046 21 19 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const SkinChangesIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3"/><path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const JointPainIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2V22M2 12H22M5.63604 5.63604L18.364 18.364M5.63604 18.364L18.364 5.63604" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;



const MoreIcon = () => (
  <Image
    width={22}
    height={22}
    src="/homepage/ArrowRight.png" // leading slash is important
    alt="More icon"
  />
);
// --- Data for the symptoms ---
const primarySymptomsData = [
  { name: 'Weight gain', icon: <CapsuleIcon /> },
  { name: 'Low energy', icon: <LowEnergyIcon /> },
  { name: 'Hot flashes', icon: <HotFlashesIcon /> },
  { name: 'Night sweats', icon: <NightSweatsIcon /> },
  { name: 'Intimacy issues', icon: <IntimacyIcon /> },
  { name: 'Sleep disruptions', icon: <SleepIcon /> },
  { name: 'Anxiety', icon: <AnxietyIcon /> },
  { name: 'Mood swings', icon: <MoodSwingsIcon /> },
];

// --- Data for the new sub-section ---
const secondarySymptomsData = [
    { name: 'Fatigue', icon: <FatigueIcon /> },
    { name: 'Brain fog', icon: <BrainFogIcon /> },
    { name: 'Skin changes', icon: <SkinChangesIcon /> },
    { name: 'Joint pain', icon: <JointPainIcon /> },
];

// --- Reusable Symptom Tag Component ---
const SymptomTag = ({ symptom, isSelected, onSelect }) => {
  const baseClasses = "w-full flex items-center justify-between text-left py-3 px-4 rounded-[10px] border transition-all duration-200";
  const selectedClasses = " to-purple-600  border-transparent ";
  const unselectedClasses = "border-transparent";

  return (
    <button
      onClick={() => onSelect(symptom.name)}
      className="bg-gradient-purple w-full flex items-center justify-between text-left py-3 px-4 rounded-xl "
    >
      <div className="flex items-center justify-between gap-3 ">
        <span className="text-[#774180] w-55">{symptom.name}</span>
        <span className="font-semibold">{symptom.icon}</span>
      </div>
      <div className="text-[#774180]">
        <MoreIcon />
      </div>
    </button>
  );
};

// --- Reusable Tag for the new sub-section ---
// This component is visually different and not selectable, so it's defined separately.
const SecondarySymptomTag = ({ symptom }) => (
    <div className="bg-gradient-purple w-full flex items-center justify-between text-left py-3 px-4 rounded-xl ">
      <div className="flex items-center gap-3">
        <span className="text-[#774180] w-50">{symptom.name}</span>
        <span className="font-semibold text-dark">{symptom.icon}</span>
      </div>
      <div className="text-[#774180]">
        <MoreIcon />
      </div>
    </div>
);


// --- Main Section Component ---
const SymptomsSection = () => {
  // State to track selected symptoms. 'Weight gain' is selected by default to match the image.
  const [selectedSymptoms, setSelectedSymptoms] = useState(['Weight gain']);

  const handleSelectSymptom = (symptomName) => {
    setSelectedSymptoms(prev =>
      prev.includes(symptomName)
        ? prev.filter(name => name !== symptomName) // Deselect if already selected
        : [...prev, symptomName] // Select if not already selected
    );
  };

  return (
    <div className="bg-white w-full py-16 sm:py-24">
      <div className="container mx-auto px-4">
        {/* Main interactive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {primarySymptomsData.map(symptom => (
            <SymptomTag
              key={symptom.name}
              symptom={symptom}
              isSelected={selectedSymptoms.includes(symptom.name)}
              onSelect={handleSelectSymptom}
            />
          ))}
        </div>

        {/* New sub-section */}
        <div className="mt-20 text-center">
            <h3 className="text-xl text-dark text-left">
                and those you might not recognize yet
            </h3>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {secondarySymptomsData.map(symptom => (
                    <SecondarySymptomTag key={symptom.name} symptom={symptom} />
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};




const InfoTag = ({ label, value, positionClasses }) => (
  <div className={`absolute ${positionClasses} rounded-lg bg-white/10 backdrop-blur-md border border-white/10 shadow-lg p-3 text-left`}>
    <span className="text-xs text-purple-200 block">{label}</span>
    <span className="text-sm text-white font-semibold">{value}</span>
  </div>
);

const PersonalizedCareSection = () => {
  return (
    <section className="relative w-full bg-purple-800 text-white overflow-hidden py-20 sm:py-32">
      {/* Wavy background layers */}
      <div className="absolute top-0 left-0 w-[150%] h-[700px] bg-purple-600/20 rounded-full transform -translate-x-1/4 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[150%] h-[700px] bg-purple-600/20 rounded-full transform translate-x-1/4 translate-y-1/2"></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-[40px] font-bold">
          Menopause Care Made Personal
        </h2>
        <p className="mt-2 text-[18px] text-purple-200">
          Your menopause journey, supported every step by MyAvina
        </p>

        {/* Central Card with Image and Info Tags */}
        <div className="relative mt-12 w-full max-w-4xl">
          <div className="bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 p-4 sm:p-6 shadow-2xl">
            <Image
              src="/homepage/image 43.png" // IMPORTANT: Replace with the actual path to your image
              alt="Personalized care plan preview"
              width={270}
              height={270}
              className="rounded-xl m-auto"
            />

            {/* Floating Info Tags */}
            <InfoTag label="Name" value="Sarah" positionClasses="top-20 text-[8] left-4 sm:top-10 sm:left-[-120] flex justify-between w-70 info-tag-bg"/>
            <InfoTag label="Age" value="55" positionClasses=" top-20 text-[8] left-4 sm:top-25 sm:left-[-120] flex justify-between w-70 info-tag-bg" />
            
            <InfoTag label="History" value="Hot flashes, Poor sleep" positionClasses="top-12 text-[8] right-4 sm:top-40 sm:right-[-120] flex justify-between w-70 info-tag-bg" />
            <InfoTag label="Goal" value="Sleep better, Feel balanced" positionClasses="top-32 text-[8] right-4 sm:top-55 sm:right-[-120] flex justify-between w-70 info-tag-bg" />

         
          </div>
        </div>

        {/* 'See Your Plan' Button */}
        <button className="mt-12 bg-white/20 backdrop-blur-md border border-white/20 hover:bg-white/30 text-white font-bold py-5 px-15 rounded-full transition-colors ">
          See Your Plan
        </button>
      </div>
    </section>
  );
};


// const SymptomsCarousel = () => (
//   <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     <h2 className="text-3xl font-bold text-center">Care for the changes you're in.</h2>
//     <div className="mt-8 flex gap-4 overflow-x-auto pb-4 -mx-4 px-4">
//       {symptoms.map(({ name, icon }) => {
//         const IconComponent = iconMap[icon as keyof typeof iconMap];
//         return (
//           <button key={name} className="flex-shrink-0 flex items-center gap-3 py-3 px-5 bg-gray-100 rounded-lg hover:bg-purple-100 hover:text-purple-700 transition-colors">
//             {IconComponent && <IconComponent className="h-5 w-5" />}
//             <span className="font-semibold">{name}</span>
//           </button>
//         );
//       })}
//     </div>
//   </section>
// );

const MenopauseCTA = () => (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-purple-600 to-indigo-800 text-white rounded-2xl p-12 text-center relative overflow-hidden">
             <Image src="/homepage/cta-woman.png" alt="Woman smiling" width={150} height={150} className="mx-auto rounded-full border-4 border-white mb-6" />
            <h2 className="text-4xl font-bold">Menopause on Your Terms</h2>
            <p className="mt-4 max-w-2xl mx-auto">Personalized treatments from real doctors. We combine the best of science and nature to help you feel like yourself again.</p>
            <button className="mt-8 bg-white text-purple-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">GET STARTED</button>
        </div>
    </section>
);

const CareAccordionSection = () => {
    const [openIndex, setOpenIndex] = useState(0);
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">The best care for your midlife starts here.</h2>
          <p className="text-lg text-gray-600 mb-8">We believe every woman deserves to feel informed, supported, and empowered during this life stage.</p>
          <div className="space-y-4">
            {careAccordionItems.map((item, index) => (
              <div key={item.title} className="border-b border-gray-200">
                <button onClick={() => setOpenIndex(index === openIndex ? -1 : index)} className="w-full flex justify-between items-center py-4 text-left">
                  <span className="text-xl font-semibold">{item.title}</span>
                  <ChevronDown className={`h-6 w-6 text-purple-500 transition-transform ${index === openIndex ? 'rotate-180' : ''}`} />
                </button>
                {index === openIndex && <p className="pb-4 pr-6 text-gray-600 animate-fadeIn">{item.content}</p>}
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:block"><Image src="/homepage/care-accordion-woman.png" alt="Woman holding a product" width={500} height={600} className="rounded-lg"/></div>
      </section>
    );
};

const TreatmentsSection = () => (
    <section className="text-center">
        <h2 className="text-3xl font-bold">Browse Menopause Treatments with MYAVINA</h2>
        <button className="mt-4 text-purple-600 font-semibold hover:underline">Shop All Treatments →</button>
        <div className="max-w-5xl mx-auto px-4 mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map(p => (
                <div key={p.name} className="bg-purple-50 p-6 rounded-xl text-center">
                    <Image src={p.imageSrc} alt={p.name} width={200} height={200} className="mx-auto h-48 object-contain" />
                    <h3 className="mt-4 font-bold text-lg">{p.name}</h3>
                    <p className="text-gray-600">${p.price}/month</p>
                </div>
            ))}
        </div>
    </section>
);

const HowItWorksSection = () => (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div><Image src="/homepage/how-it-works-phone.png" alt="App on a phone" width={400} height={500} /></div>
        <div className="space-y-8">
            <h2 className="text-3xl font-bold">How It Works</h2>
            {processSteps.map(step => (
                <div key={step.number} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 text-purple-600 font-bold rounded-full flex items-center justify-center">{step.number}</div>
                    <div>
                        <h3 className="font-bold text-lg">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

const ProcessWorksSection = () => (
    <section className="text-center max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold">What Makes Our Process Work For You</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {processWorksGrid.map(item => (
                <div key={item.title}>
                    <div className="bg-gray-100 rounded-lg p-6"><Image src={item.imageSrc} alt={item.title} width={300} height={200} /></div>
                    <h3 className="mt-4 font-bold text-xl">{item.title}</h3>
                    <p className="mt-2 text-gray-600">{item.text}</p>
                </div>
            ))}
        </div>
    </section>
);

const PressSection = () => (
    <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 flex justify-around items-center gap-8">
            <span className="font-semibold text-gray-500">Formulated by</span>
            {pressLogos.map(logo => <Image key={logo.name} src={logo.imageSrc} alt={logo.name} width={100} height={40} objectFit="contain" />)}
        </div>
    </section>
);

const DoctorTestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const next = () => setCurrentIndex(i => i === doctorTestimonials.length - 1 ? 0 : i + 1);
    const prev = () => setCurrentIndex(i => i === 0 ? doctorTestimonials.length - 1 : i - 1);

    return (
        <section className="max-w-5xl mx-auto px-4 text-center relative">
            <div key={currentIndex} className="animate-fadeIn">
                <Image src={doctorTestimonials[currentIndex].imageSrc} alt={doctorTestimonials[currentIndex].name} width={120} height={120} className="mx-auto rounded-full mb-6" />
                <blockquote className="text-2xl font-semibold max-w-3xl mx-auto">"{doctorTestimonials[currentIndex].quote}"</blockquote>
                <p className="mt-4 font-bold">{doctorTestimonials[currentIndex].name}</p>
                <p className="text-gray-500">{doctorTestimonials[currentIndex].title}</p>
            </div>
            <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-gray-100"><ArrowLeft /></button>
            <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-gray-100"><ArrowRight /></button>
        </section>
    );
};

const FaqSection = () => (
    <section className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
            {faqs.map(faq => (
                <div key={faq.q} className="p-6 bg-gray-50 rounded-lg flex justify-between items-center">
                    <span className="font-semibold text-lg">{faq.q}</span>
                    <Plus className="h-6 w-6 text-gray-500" />
                </div>
            ))}
        </div>
        <div className="text-center mt-8"><Link href="/faq" className="text-purple-600 font-semibold hover:underline">View All FAQs →</Link></div>
    </section>
);

const FinalCTA = () => (
    <section className="relative py-32 text-center text-white">
        <Image src="/homepage/final-cta-background.png" alt="Group of diverse women" layout="fill" objectFit="cover" className="z-0" />
        <div className="absolute inset-0 bg-purple-800 bg-opacity-60"></div>
        <div className="relative z-10">
            <h2 className="text-4xl font-bold">Take control of your menopause journey.</h2>
            <button className="mt-8 bg-white text-purple-600 font-bold py-4 px-10 rounded-lg hover:bg-gray-100 transition-colors">GET STARTED FOR FREE</button>
        </div>
    </section>
);