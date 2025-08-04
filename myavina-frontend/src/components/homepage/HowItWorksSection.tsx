import React from 'react';
import Image from 'next/image';

// --- Placeholder Data ---
// In a real application, you might fetch this from a CMS.
const stepsData = [
  {
    stepNumber: '1',
    title: 'Your easiest visit ever',
    description: "We'll gather your medical information and connect you with Myavina physician for personalized recommendations.",
    imageUrl: '/Images/homepage/step1.png', // IMPORTANT: Replace with your image path
  },
  {
    stepNumber: '2',
    title: 'Your easiest visit ever',
    description: "We'll gather your medical information and connect you with Myavina physician for personalized recommendations.",
    imageUrl: '/Images/homepage/step2.png', // IMPORTANT: Replace with your image path
  },
  {
    stepNumber: '3',
    title: 'Your easiest visit ever',
    description: "We'll gather your medical information and connect you with Myavina physician for personalized recommendations.",
    imageUrl: '/Images/homepage/step3.png', // IMPORTANT: Replace with your image path
  },
];

// --- Reusable Step Card Component ---
interface StepCardProps {
  step: typeof stepsData[0];
  layout: 'image-top' | 'text-top';
  className?: string;
}

const StepCard: React.FC<StepCardProps> = ({ step, layout, className = '' }) => {
  const isImageTop = layout === 'image-top';

  const TextContent = () => (
    <div className="bg-white rounded-[8px] p-4">
      <p className="text-5xl font-bold text-gray-300">{step.stepNumber}</p>
      <h3 className="text-xl font-bold text-gray-900 mt-4">{step.title}</h3>
      <p className="text-gray-600 mt-2">{step.description}</p>
    </div>
  );

  const ImageContent = () => (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <Image
        src={step.imageUrl}
        alt={`${step.title} - Step ${step.stepNumber}`}
        width={384}
        height={256}
        className="w-full h-full object-cover"
      />
    </div>
  );

  return (
    <div
      className={`flex flex-col ${
        isImageTop ? 'lg:flex-col' : 'lg:flex-col-reverse'
      } ${className}`}
    >
      {/* Add responsive margins to each block */}
      <div className="mb-2 mb-4 ">
        <TextContent />
      </div>
      <div className="mt-2 mb-4 ">
        <ImageContent />
      </div>
    </div>
  );
};



// --- Main Section Component ---
export const HowItWorksSection = () => {
  return (
    <section className="bg-[#F6F6F6] ">
      <div className=" mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl sm:pt-20">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Myavina provides fast, easy and convenient care for your menopause symptoms.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-end">
          <StepCard 
            step={stepsData[0]} 
            layout="image-top"
          />
          <StepCard 
            step={stepsData[1]} 
            layout="text-top" 
            className="mb-4"
          />
          <StepCard 
            step={stepsData[2]} 
            layout="image-top"
          />
        </div>

      </div>
    </section>
  );
};