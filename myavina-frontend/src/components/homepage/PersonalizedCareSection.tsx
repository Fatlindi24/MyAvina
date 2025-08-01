import Image from 'next/image';

const InfoTag = ({ label, value, positionClasses }) => (
  <div className={`absolute ${positionClasses} rounded-lg bg-white/10 backdrop-blur-md border border-white/10 shadow-lg p-3 text-left`}>
    <span className="text-xs text-purple-200 block">{label}</span>
    <span className="text-sm text-white ">{value}</span>
  </div>
);

export const PersonalizedCareSection = () => {
  return (
    <section className="personalizer-care relative w-full  text-white overflow-hidden">
      <div className=' py-20 sm:py-32 container rounded-[30px] bg-[url("/Images/homepage/linear-background.png")] bg-cover bg-center bg-no-repeat'>
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
          <h2 className="text-[32px] lg:text-[40px] text-[32px] font-[500]">Menopause Care Made Personal</h2>
          <p className="mt-2 lg:text-[18px] text-[16px] text-purple-200">Your menopause journey, supported every step by MyAvina</p>
          <div className="relative mt-12 w-full max-w-4xl">
            <div className="menopause-care backdrop-blur-xl rounded-2xl border border-white/10 p-4 sm:p-6 shadow-2xl">
              <Image src="/Images/homepage/image 43.png" alt="Personalized care plan preview" width={270} height={270} className="rounded-xl m-auto" />
              <InfoTag label="Name" value="Sarah" positionClasses="top-20 text-[8] lg:left-4  lg:top-10 top-[10] left-[-10] lg:left-[-120] flex justify-between lg:w-70 w-30 info-tag-bg"/>
              <InfoTag label="Age" value="55" positionClasses=" top-20 text-[8] left-4 lg:top-25 top-20 left-[-10] lg:left-[-120] flex justify-between lg:w-70 w-30 info-tag-bg" />
              <InfoTag label="History" value="Hot flashes, Poor sleep" positionClasses="top-12 text-[8] lg:right-4 right-[-10] lg:top-40 top-[180] flex justify-between lg:w-70 w-60 info-tag-bg" />
              <InfoTag label="Goal" value="Sleep better, Feel balanced" positionClasses="top-32 text-[8] lg:right-4 right-[-10] lg:top-55  top-[230] sm:right-[-120] flex justify-between lg:w-70 w-60 info-tag-bg" />
            </div>
          </div>
<button className="mt-12 bg-dark py-5 px-15 rounded-full transition-colors see-more-personalized-care" >
  See Your Plan
</button>
        </div>
      </div>
    </section>
  );
};