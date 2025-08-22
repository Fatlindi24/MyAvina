import React from "react";
import Image from "next/image";

export const CtaBannerSection = () => {
  return (
    <section className="bg-white mb-0 personalizer-care">
      <div className="mx-auto">
        {/* =================== MOBILE / TABLET (<lg) =================== */}
        <div className="lg:hidden">
          {/* Single stacking context: image behind, purple mask on top */}
          <div className="relative w-full h-[700px] overflow-hidden">
            {/* BG image (behind everything) */}
            <Image
              src="/Images/homepage/womancta.png"
              alt="A group of happy, smiling women"
              fill
              className="object-cover object-top "
              priority
            />

            {/* Purple panel with deep curved bottom (ON TOP of the image) */}
            <div className="absolute inset-x-0 top-0 h-[410px]">
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full"
                aria-hidden="true"
              >
                {/*
                  Rectangle with a deep curved bottom:
                  - Bottom edge at y=72, bulge depth with control (50,105).
                  Adjust 72/105 to tweak thickness and curve.
                */}
                <path d="M0,0 H100 V80 Q50,105 0,80 Z" fill="#774180" />
              </svg>

              {/* Content on top of the purple */}
              <div className="relative z-[1] h-full flex items-start">
                <div className="container mx-auto px-4 pt-5">
                  <div className="max-w-xl">
                    <h2 className="text-[24px] text-500 text-white leading-tight">
                      Start Your Personalized
                      <br />
                      HRT Plan Today
                    </h2>
                    <p className="mt-4 text-[18px] text-300 text-purple-200">
                      Treatments designed by board-certified doctors, delivered
                      free, with unlimited follow-ups.
                    </p>
                    <div className="mt-6 flex flex-col gap-4">
                      <button className="bg-black text-white px-8 py-3 rounded-full transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-700">
                        Start Treatment Now
                      </button>
                      <button className="bg-white text-black px-8 py-3 rounded-full transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500">
                        Take the Quiz
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* tiny overlap insurance to hide any anti‑alias seam */}
          </div>
        </div>

        {/* =================== DESKTOP (lg+) — same as before =================== */}
        <div className="hidden lg:block">
          <div className="relative min-h-[340px] xl:min-h-[380px] 2xl:min-h-[420px] overflow-hidden">
            <Image
              src="/Images/homepage/ctabanner1.png"
              alt="A group of happy, smiling women"
              fill
              className="object-cover object-right"
              priority
            />
            <div className="absolute inset-y-0 left-0 w-[58%] max-w-[980px]">
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="w-full h-full"
                aria-hidden="true"
              >
                <path d="M0,0 H75 Q90,50 75,100 H0 Z" fill="#774180" />
              </svg>
            </div>
            <div className="absolute inset-y-0 left-0 w-[58%] max-w-[980px] z-10">
              <div className="h-full flex items-center justify-start">
                <div className="container mx-auto px-6">
                  <div className="mx-auto max-w-[560px] text-left text-white">
                    <h2 className="lg:text-[36px] text-500 leading-tight">
                      Start Your Personalized
                      <br />
                      HRT Plan Today
                    </h2>
                    <p className="mt-4 lg:text-[20px] text-300 text-purple-200">
                      Treatments designed by board-certified doctors, delivered
                      free, with unlimited follow-ups.
                    </p>
                    <div className="mt-8 flex flex-row gap-4 justify-start">
                      <button className="bg-black text-white px-8 py-3 rounded-full transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-700">
                        Start Treatment Now
                      </button>
                      <button className="bg-white text-black px-8 py-3 rounded-full transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500">
                        Take the Quiz
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ====================================================== */}
      </div>
    </section>
  );
};
