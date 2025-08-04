import React from 'react';
import Image from 'next/image';
import { ShieldCheck } from 'lucide-react';

// --- Data for the feature cards ---
// In a real app, this might come from a CMS or API.
const featuresData = {
  natural: {
    title: 'Natural Ingredients',
    subtitle: 'Powered by nature.',
    description: 'Our creams and supplements are made with pure, plant-based ingredients — safe for menopause and carefully chosen to support long-term wellness.',
    imageUrl: '/Images/homepage/bottle-purple.png', // IMPORTANT: Replace with your image path
  },
  science: {
    title: 'Backed by Science',
    subtitle: 'Driven by data, not just words.',
    description: 'Clinical research supports each formulation — from progesterone to mood blends.',
    imageUrl: '/Images/homepage/feature-cream.png', // IMPORTANT: Replace with your image path
  },
  easy: {
    title: 'Easy to Use',
    subtitle: 'Simple. Daily. Stress-free.',
    description: 'From once-a-day drops to easy gummies — it fits into your lifestyle with no stress.',
    imageUrl: '/Images/homepage/pills.png', // IMPORTANT: Replace with your image path
  },
  experts: {
    title: 'Created by Experts',
    subtitle: 'By women, for women.',
    description: 'Designed with real doctors and women who’ve experienced menopause firsthand.',
    imageUrl: '/Images/homepage/doctor.png', // IMPORTANT: Replace with your image path
  },
};

// --- Main Section Component ---
export const FeaturesSection = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <h1 className='text-[32px] lg:text-[40px] text-center mb-10'>What Makes Our Products Work for You</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            
            {/* Card 1: Natural Ingredients */}
            <div className="bg-[#F5ECFF] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="md:w-3/5">
                <h3 className="text-[32px] font-[300] text-gray-900">{featuresData.natural.title}</h3>
                <p className="text-[18px] font-400  mt-2">{featuresData.natural.subtitle}</p>
                <p className="mt-4 text-[16px] text-gray-600">{featuresData.natural.description}</p>
              </div>
              <div className="md:w-2/5 flex justify-center items-center">
                <Image src={featuresData.natural.imageUrl} alt={featuresData.natural.title} width={150} height={150} style={{ objectFit: "contain" }} />
              </div>
            </div>

            {/* Card 3: Easy to Use */}
            <div className="bg-[#F5ECFF] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="md:w-3/5">
                <h3 className="text-3xl font-bold text-gray-900">{featuresData.easy.title}</h3>
                <p className="font-semibold text-gray-800 mt-2">{featuresData.easy.subtitle}</p>
                <p className="mt-4 text-gray-600">{featuresData.easy.description}</p>
              </div>
              <div className="md:w-2/5 flex justify-center items-center">
                <Image src={featuresData.easy.imageUrl} alt={featuresData.easy.title} width={180} height={180} style={{ objectFit: "contain" }} />
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            
            {/* Card 2: Backed by Science */}
            <div className="bg-[#F5ECFF] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="md:w-3/5">
                <h3 className="text-3xl font-bold text-gray-900">{featuresData.science.title}</h3>
                <p className="font-semibold text-gray-800 mt-2">{featuresData.science.subtitle}</p>
                <p className="mt-4 text-gray-600">{featuresData.science.description}</p>
              </div>
              <div className="md:w-2/5 flex justify-center items-center">
                <Image src={featuresData.science.imageUrl} alt={featuresData.science.title} width={150} height={150} style={{ objectFit: "contain" }} />
              </div>
            </div>
            
            {/* Card 4: Created by Experts */}
            <div className="bg-[#F5ECFF] rounded-2xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[260px]">
  
  {/* Column 1: Text Content */}
  <div>
    <h3 className="text-3xl font-bold text-gray-900">{featuresData.experts.title}</h3>
    <p className="font-semibold text-gray-800 mt-2">{featuresData.experts.subtitle}</p>
    <p className="mt-4 text-gray-600">{featuresData.experts.description}</p>
  </div>

  {/* Column 2: Image Content */}
  <div className="relative w-full min-h-[200px] md:min-h-full">
    <Image 
      src={featuresData.experts.imageUrl} 
      alt={featuresData.experts.title} 
      fill 
      style={{ objectFit: 'contain', objectPosition: 'center' }} 
    />
  </div>
  
</div>

          </div>
        </div>
      </div>
    </section>
  );
};