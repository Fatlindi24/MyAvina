import { HeroSection } from '@/components/homepage/HeroSection';
import { SymptomsSection } from '@/components/homepage/SymptomsSection';
import { PersonalizedCareSection } from '@/components/homepage/PersonalizedCareSection';
import { TopChoices } from '@/components/homepage/TopChoices';
import { TreatmentsSection } from '@/components/homepage/TreatmentsSection';
import { HowItWorksSection } from '@/components/homepage/HowItWorksSection';
import { FeaturesSection } from '@/components/homepage/FeaturesSection';
import { MarqueSection } from '@/components/homepage/MarqueSection';
import { TestimonialsSection } from '@/components/homepage/TestimonialsSection';
import { CtaSection } from '@/components/homepage/CtaSection';
import { TopicsSection } from '@/components/homepage/TopicsSection';
import { FaqSection } from '@/components/homepage/FaqSection';
import { CtaBannerSection } from '@/components/homepage/CtaBanner';
export default function HomePage() {
  return (
    <div className=" bg-white text-gray-800">
      <main className=" container space-y-24 md:space-y-32">
        <HeroSection />
        </main>
        <SymptomsSection />
        <PersonalizedCareSection />
        <TopChoices />
        <TreatmentsSection />
        <HowItWorksSection />
        <FeaturesSection />
        <MarqueSection />
        <TestimonialsSection />
        <CtaSection />
        <TopicsSection />
        <FaqSection />
      
      <CtaBannerSection />
    </div>
  );
}