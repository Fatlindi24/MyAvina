"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const wordsToCycle = ['change.', 'midlife.', 'this stage.', 'menopause.', 'you.'];

const Feature = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
  <div className="flex items-center gap-3">
    {icon}
    <span className="hero-features-grid-span">{text}</span>
  </div>
);

export const HeroSection = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setWordIndex((prevIndex) => (prevIndex + 1) % wordsToCycle.length);
        setIsFading(false);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white">
      <div className="relative py-12 lg:py-0">
        <div>
          <h1 className="absolute top-0 left-0 z-20 font-bold text-gray-900 leading-tight hero-section-title w-full lg:w-3/4">
            Because feeling amazing<br /> shouldn't stop with{' '}
            <span className="inline-block min-w-[300px] text-left">
              <span className={`decoration-purple-500 decoration-4 underline-offset-4 text-purple-500 transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                {wordsToCycle[wordIndex]}
              </span>
            </span>
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="lg:mt-25 lg:mt-22 mt-22">
            <p className="hero-section-paragraph">
              As hormones shift after 35, so does your wellbeing. Bioidentical HRT helps ease the symptoms you see and the ones you don't.
            </p>
            <div className="pt-10 m-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button className="hero-button-main bg-[#774180] rounded-full text-white py-3 px-8 shadow-md hover:bg-purple-700 transition-colors w-full sm:w-auto">
                Restore My Hormones
              </button>
              <a href="/register" className="hero-button-secondary flex items-center gap-2 text-[#774180] m-auto ">
                <span>Take The Quiz</span>
                <Image src="/Images/homepage/take-quize-arrow.png" width={25} height={25} alt="arrow icon" />
              </a>
            </div>
            <div className="lg:mt-12 mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 ">
                <Feature icon={<Image src="/Images/homepage/boardcertifiedoctor.png"  width={25} height={25} alt=""/>} text="Board certified doctors" />
                <Feature icon={<Image src="/Images/homepage/custommadefor.png"  width={25} height={25} alt=""/>} text="Custom-made for your body" />
                <Feature icon={<Image src="/Images/homepage/pauseorcancel.png"  width={25} height={25} alt=""/>} text="Pause or cancel anytime" />
                <Feature icon={<Image src="/Images/homepage/discreet.png"  width={25} height={25} alt=""/>} text="Discreet, secure delivery" />
                <Feature icon={<Image src="/Images/homepage/unlimitedfree.png"  width={25} height={25} alt=""/>} text="Unlimited free follow-ups" />
                <Feature icon={<Image src="/Images/homepage/freeshipping.png"  width={25} height={25} alt=""/>} text="Free shipping" />
            </div>
          </div>
          <div className="relative lg:mt-12 mt-10 lg:mt-0">
            <Image src="/Images/homepage/hero-woman-v1.png" alt="A woman feeling well and confident" width={1600} height={500} className="w-full max-w-md mx-auto lg:max-w-none rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};