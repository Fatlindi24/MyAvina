import React from 'react';
import Image from 'next/image';

export const CtaBannerSection = () => {
  return (
    <section className="bg-white mb-0 personalizer-care">
      <div className="mx-auto">
        <div className="relative min-h-[500px] lg:min-h-[450px] flex items-center justify-start  overflow-hidden shadow-2xl">

          {/* Layer 1: Background Image */}
          {/* This image fills the entire container and sits at the very back. */}
          <Image
            src="/Images/homepage/ctabanner1.png" // IMPORTANT: Replace with your image path
            alt="A group of happy, smiling women"
            fill
            className="object-cover object-right ml-[350px]"
          />

          {/* Layer 2: Purple Shape Overlay */}
          {/* This div sits on top of the image and uses clip-path to create the angled shape. */}
           <div className="absolute inset-0">
            <svg
              className="w-full h-full max-w-[850px]"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true" // Hide from screen readers as it's decorative
            >
              <path
                // This path draws the shape: a rectangle with a curved right side.
                // You can adjust the numbers to change the curve.
                d="M0,0 H65 Q85,50 65,100 H0 Z"
                fill="#7E22CE" // Using a purple color to match the design
              />
            </svg>
          </div>
          
           {/* Layer 3: Text & Button Content */}
          <div className="relative z-10 p-8 md:p-12 lg:p-16 max-w-[860px]">
            <h2 className="lg:text-[36px] text-500 text-white leading-tight">
              Start Your Personalized<br />HRT Plan Today
            </h2>
            <p className="mt-4 lg:text-[20px] text-300  text-purple-200">
              Treatments designed by board-certified doctors,<br /> delivered free, with unlimited follow-ups.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-black text-white  px-8 py-3 rounded-full transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-700">
                Start Treatment Now
              </button>
              <button className="bg-white text-black  px-8 py-3 rounded-full transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500">
                Take the Quiz
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};