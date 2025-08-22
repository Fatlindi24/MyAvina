"use client";

import React from "react";
import {
  ChevronDown,
  Stethoscope,
  Laptop,
  Package,
  HeartHandshake,
  HandHeart,
} from "lucide-react";

const SectionFour = () => {
  return (
    <section className="bg-[#F6F6F6] py-16 md:py-20">
      <div className="container mx-auto px-6 ">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-[32px] md:text-[40px] font-medium text-black">
            How We Help
          </h3>
          <p className="mt-4 text-[16px] md:text-[18px] text-[#1A1A1A]/80">
            We make menopause care simple, safe, and personal
            <br />— designed around you.
          </p>
        </div>

        {/* Features */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 btn">
          {/* 1 */}
          <div className="flex flex-col items-center lg:items-start text-left gap-4">
            <div className="bg-white/90 rounded-full p-4 shadow-sm ring-1 ring-black/5">
              <Stethoscope
                className="w-12 h-12 text-[#774180]"
                strokeWidth={1.8}
              />
            </div>
            <h4 className="text-[18px] md:text-[24px] font-medium text-black">
              Personalized Care
            </h4>
            <p className="text-[16px] text-black/70 text-center lg:text-left leading-snug max-w-[28ch]">
              Doctor-prescribed, customized hormone therapy
            </p>
          </div>

          {/* 2 */}
          <div className="flex flex-col items-center lg:items-start text-left gap-4">
            <div className="bg-white/90 rounded-full p-4 shadow-sm ring-1 ring-black/5">
              <Laptop className="w-12 h-12 text-[#774180]" strokeWidth={1.8} />
            </div>
            <h4 className="text-[18px] md:text-[24px] font-medium text-black">
              Easy Online Visits
            </h4>
            <p className="text-[16px] text-black/70 text-center lg:text-left leading-snug max-w-[28ch]">
              Simple telehealth & free follow-ups anytime
            </p>
          </div>

          {/* 3 */}
          <div className="flex flex-col items-center lg:items-start text-left gap-4">
            <div className="bg-white/90 rounded-full p-4 shadow-sm ring-1 ring-black/5">
              <Package className="w-12 h-12 text-[#774180]" strokeWidth={1.8} />
            </div>
            <h4 className="text-[18px] md:text-[24px] font-medium text-black">
              Discreet Delivery
            </h4>
            <p className="text-[16px] text-black/70 text-center lg:text-left leading-snug max-w-[28ch]">
              Your treatments shipped to your door, always private
            </p>
          </div>

          {/* 4 */}
          <div className="flex flex-col items-center lg:items-start text-left gap-4">
            <div className="bg-white/90 rounded-full p-4 shadow-sm ring-1 ring-black/5">
              <HandHeart
                className="w-12 h-12 text-[#774180]"
                strokeWidth={1.8}
              />
            </div>
            <h4 className="text-[18px] md:text-[24px] font-medium text-black">
              Ongoing Support
            </h4>
            <p className="text-[16px] text-black/70 text-center lg:text-left leading-snug max-w-[28ch]">
              Menopause specialists by your side whenever you need
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="mt-14 md:mt-16 border-t border-[#E9D7F0] mx-6 md:mx-24" />

        {/* Coast to Coast */}
        <div className="mt-12 md:mt-16 text-center max-w-3xl mx-auto">
          <h3 className="text-[24px] md:text-[36px] font-medium text-black">
            Here for Women Coast to Coast
          </h3>
          <p className="mt-4 text-[16px] md:text-[20px] font-light text-black/75">
            MyAvina is growing fast! We currently serve many states and are
            expanding to reach more women every month. See if we’re available
            where you live.
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 md:mt-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
          <input
            type="email"
            placeholder="Email"
            className="h-14 w-full md:w-[420px] rounded-full bg-white px-5 text-[16px] placeholder-[#B7B7B7] shadow-sm ring-1 ring-black/10 focus:outline-none focus:ring-2 focus:ring-[#774180]"
          />
          <div className="relative h-14 w-full md:w-[320px]">
            <select
              defaultValue=""
              className="appearance-none h-full w-full rounded-full bg-white px-5 pr-12 text-[16px] shadow-sm ring-1 ring-black/10 focus:outline-none focus:ring-2 focus:ring-[#774180] text-[#B7B7B7]"
            >
              <option value="" disabled>
                Select State
              </option>
              <option value="NY">New York</option>
              <option value="CA">California</option>
              <option value="TX">Texas</option>
              <option value="FL">Florida</option>
              <option value="IL">Illinois</option>
              <option value="PA">Pennsylvania</option>
              <option value="OH">Ohio</option>
              <option value="MI">Michigan</option>
              <option value="GA">Georgia</option>
              <option value="NC">North Carolina</option>
              <option value="NJ">New Jersey</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="AZ">Arizona</option>
              <option value="MA">Massachusetts</option>
              <option value="MD">Maryland</option>
              <option value="CO">Colorado</option>
              <option value="MN">Minnesota</option>
              <option value="WI">Wisconsin</option>
              <option value="MO">Missouri</option>
              <option value="IN">Indiana</option>
              <option value="TN">Tennessee</option>
              <option value="SC">South Carolina</option>
              <option value="AL">Alabama</option>
              <option value="KY">Kentucky</option>
              <option value="OR">Oregon</option>
              <option value="OK">Oklahoma</option>
              <option value="CT">Connecticut</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="UT">Utah</option>
              <option value="NV">Nevada</option>
              <option value="AR">Arkansas</option>
              <option value="LA">Louisiana</option>
              <option value="MS">Mississippi</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-black/50" />
          </div>
          <button
            type="submit"
            className="h-14 w-full btn md:w-[320px] rounded-full bg-black text-white text-[16px] font-normal hover:bg-black/90 transition-colors"
          >
            Get Notified
          </button>
        </form>
      </div>
    </section>
  );
};

export default SectionFour;
