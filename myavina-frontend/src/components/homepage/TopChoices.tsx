import Image from 'next/image';
import React from 'react';

// --- Icon Components ---
const BodyIcon = () => (<Image src="/Images/homepage/body.svg" alt="Body icon" width={38} height={38}/>);
const VaginalIcon = () => (<Image src="/Images/homepage/vaginal.svg" alt="Vaginal icon" width={38} height={38} />);
const OralIcon = () => (<Image src="/Images/homepage/capsule.png" alt="Oral icon" width={38} height={38}/>);
const PatchIcon = () => (<Image src="/Images/homepage/patch.png" alt="Patch icon" width={38} height={38}/>);
const ShieldCheckIcon = () => (<Image src="/Images/homepage/shield-check.png" alt="Shield check icon" width={24} height={24} />);
const CompoundedIcon = () => (<Image src="/Images/homepage/compunded-icon.png" alt="Compounded icon" width={24} height={24} />);
const PestleMortarIcon = () => (<Image src="/Images/homepage/pestle-icon.png" alt="Pestle and mortar icon" width={24} height={24} />);
const PlantIcon = () => (<Image src="/Images/homepage/plant.png" alt="Plant icon" width={24} height={24} />);

// --- Data ---
const choicesData = [
    { icon: <BodyIcon />, title: "Body", description: "Supports overall hormone balance."},
    { icon: <VaginalIcon />, title: "Vaginal", description: "Relieves vaginal discomfort."},
    { icon: <OralIcon />, title: "Oral", description: "Easy hormone therapy by mouth."},
    { icon: <PatchIcon />, title: "Patch", description: "Hormones delivered through the skin."},
];
const featuresData = [
    { icon: <ShieldCheckIcon />, text: "FDA-Approved Pills" },
    { icon: <CompoundedIcon />, text: "Compounded with Care" },
    { icon: <PestleMortarIcon />, text: "Made Using Traditional Pestle and Mortar Methods" },
    { icon: <PlantIcon />, text: "Plant-Based and Plant-Derived Ingredients" },
];

// --- Sub-Components ---
interface ChoiceCardProps { icon: React.ReactNode; title: string; description: string; }
const ChoiceCard: React.FC<ChoiceCardProps> = ({ icon, title, description }) => (
    <div className="bg-[#F5ECFF] text-black p-6 rounded-2xl flex items-center gap-5 cursor-pointer border border-transparent hover:border-purple-300 transition-all duration-300">
        <div className="bg-white rounded-full p-3 flex-shrink-0 flex items-center justify-center">{icon}</div>
        <div><h3 className="font-400 text-[18px] ">{title}</h3><p className="text-dark font-400 text-[16px;]">{description}</p></div>
    </div>
);

// --- Main Section Component ---
export const TopChoices = () => {
    return (
        <section className="bg-white text-gray-900">
            <div className="mx-auto max-w-7xl py-16 sm:py-24 px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                    <div>
                        <h2 className="lg:text-[32px] text-[24px;] font-500 font-medium  leading-[32px] tracking-normal">The Top Choice Among<br />Physicians for Menopause Care</h2>
                        <ul className="mt-8 space-y-5">
                            {featuresData.map((feature, index) => (<li key={index} className="flex items-start gap-3"><div className="flex-shrink-0 mt-0.5">{feature.icon}</div><span className="text-dark-400 lg:text-[18px] text-[14px]">{feature.text}</span></li>))}
                        </ul>
                        <p className="mt-8 font-400 font-normal lg:text-[18px] text-[14px;] ">Bioidentical Hormone Replacement Therapy (HRT) is a safe and effective solution for managing symptoms of perimenopause and menopause.</p>
                    </div>
                    <div className="mt-12 lg:mt-0">
                        <div className="grid grid-cols-1 gap-1 lg:gap-2">
                            {choicesData.map((choice) => (<ChoiceCard key={choice.title} {...choice} />))}
                        </div>
                        <div className="mt-10 text-left"><a href="#" className="inline-block bg-black text-white text-[16px] px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">Explore All Treatments</a></div>
                    </div>
                </div>
            </div>
        </section>
    );
};