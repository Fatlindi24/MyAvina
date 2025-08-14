import Image from "next/image";
import {
  Heart,
  Star,
  Stethoscope,
  Brain,
  BriefcaseMedical,
  Leaf,
} from "lucide-react";

const SectionTwo = () => {
  return (
    <section className="py-16 bg-[#F6F6F6] my-10">
      <div className="container mx-auto p-2 md:px-4 space-y-24">
        {/* Row 1: Our Story (text 65% → image 35%) */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="space-y-4 w-full md:w-[60%]">
            <Leaf className="text-[#774180] w-8 h-8" strokeWidth={2} />
            <h3 className="text-3xl font-semibold text-gray-900">Our Story</h3>
            <p className="text-lg text-gray-700">
              Too many women navigate this powerful transition alone — confused
              by symptoms, dismissed by doctors, and left without support. At
              MyAvina, we believe women deserve more. That’s why we built a
              platform dedicated to expert care, real answers, and personalized
              solutions — designed specifically for women’s hormonal health.
              We’re here to replace shame with confidence, uncertainty with
              knowledge, and silence with support.
            </p>
          </div>
          <div className="w-full md:w-[40%]">
            <Image
              src="/aboutpage/aboutimage.png"
              alt="Our Story"
              width={500}
              height={500}
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* Row 2: Our Mission (image 35% → text 65%) */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-[40%]">
            <Image
              src="/aboutpage/aboutimage.png"
              alt="Our Mission"
              width={500}
              height={500}
              className="w-full rounded-2xl object-cover"
            />
          </div>
          <div className="space-y-4 w-full md:w-[60%]">
            <Leaf className="text-[#774180] w-8 h-8" strokeWidth={2} />
            <h3 className="text-3xl font-semibold text-gray-900">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700">
              We’re on a mission to make menopause support accessible,
              personalized, and stigma-free. Through evidence-based treatments,
              education, and community, MyAvina helps women take control of
              their hormonal health — with confidence, clarity, and compassion.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Stethoscope
                  className="text-[#774180]  bg-white rounded-full p-2"
                  strokeWidth={2}
                  size={40}
                />
                <span className="text-gray-800">Expert Care</span>
              </li>
              <li className="flex items-center space-x-2">
                <BriefcaseMedical
                  className="text-[#774180]  bg-white rounded-full p-2"
                  strokeWidth={2}
                  size={40}
                />
                <span className="text-gray-800">Personalized Support</span>
              </li>
              <li className="flex items-center space-x-2">
                <Brain
                  className="text-[#774180] bg-white rounded-full p-2"
                  strokeWidth={2}
                  size={40}
                />
                <span className="text-gray-800">Empowered Women</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-black text-white px-8 py-4 rounded-full hover:opacity-90 transition">
            Start My Free Visit
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
