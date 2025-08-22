"use client";

import React from "react";

const SectionThree = () => {
  return (
    <div>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6  space-y-12">
          {/* Heading + intro */}
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            <h2 className="text-[32px] md:text-[40px] font-medium text-gray-900 leading-tight">
              Meet the Experts
              <br />
              Behind MyAvina
            </h2>
            <p className="md:text-lg text-[16px]  md:text-right md:max-w-md text-gray-700">
              A team of doctors, advocates, and founders committed to
              transforming menopause care.
            </p>
          </div>

          {/* Expert grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-4">
            {/* Card 1 */}
            <div className="">
              <img
                src="/aboutpage/doc1.png"
                alt="Dr. Saranne Perman"
                className="w-full rounded-2xl object-cover"
              />
              <h3 className="text-xl mt-3 font-medium pb-1 text-gray-900">
                Dr. Saranne Perman
              </h3>
              <p className="text-black text-[16px] font-normal">
                Chief Medical Advisor
              </p>
              <p className="text-[#828282] font-light pt-4 text-[16px]">
                Board-certified OB-GYN with 15+ years of experience in menopause
                care.
              </p>
            </div>

            {/* Card 2 */}
            <div className="">
              <img
                src="/aboutpage/doc2.png"
                alt="Emma Clarke"
                className="w-full rounded-2xl object-cover"
              />
              <h3 className="text-xl mt-3 font-medium pb-1 text-gray-900">
                Emma Clarke
              </h3>
              <p className="text-black text-[16px] font-normal">
                Co-Founder & CEO
              </p>
              <p className="text-[#828282] font-light pt-4 text-[16px]">
                Founded MyAvina to bring better support to women through
                menopause.
              </p>
            </div>

            {/* Card 3 */}
            <div className="">
              <img
                src="/aboutpage/doc3.png"
                alt="Dr. Aisha Patel"
                className="w-full rounded-2xl object-cover"
              />
              <h3 className="text-xl mt-3 font-medium pb-1 text-gray-900">
                Dr. Aisha Patel
              </h3>
              <p className="text-black text-[16px] font-normal">
                Hormonal Health Specialist
              </p>
              <p className="text-[#828282] font-light pt-4 text-[16px]">
                Expert in hormonal wellness and natural therapies for women.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionThree;
