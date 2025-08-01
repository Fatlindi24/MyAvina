"use client";

import Link from 'next/link';
import { Youtube, Linkedin, Facebook, Instagram, ChevronDown } from 'lucide-react';
import { useState, type FC } from 'react';

// --- DATA ---
// All footer links are sourced from here to make updates easy.
const footerSectionsData = [
  {
    title: 'Getting Started',
    links: [
      { name: 'Start My Free Visit', href: '#' },
      { name: 'Check My Symptoms', href: '#' },
      { name: 'Shop Treatments', href: '#' },
      { name: 'Bioidentical HRT', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About MYAVINA', href: '#' },
      { name: 'Reviews', href: '#' },
      { name: 'Ways We Care', href: '#' },
      { name: 'Affiliate Program', href: '#' },
      { name: 'Corporate Wellness', href: '#' },
      { name: 'Careers', href: '#' },
    ],
  },
  {
    title: 'Education',
    links: [
      { name: 'Menopause Symptoms', href: '#' },
      { name: 'All Articles', href: '#' },
    ],
  },

  {
    title: 'Support',
    links: [
      { name: 'FAQ', href: '#' },
      { name: 'Help Center', href: '#' },
      { name: 'Contact Us', href: '#' },
    ],
  },
    {
    title: 'Resources',
    links: [
      { name: 'Medical Journal', href: '#' },
      { name: 'States We Serve', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms & Conditions', href: '#' },
      { name: 'Consumer Health Privacy Policy', href: '#' },
      { name: 'Telehealth Consent', href: '#' },
    ],
  },
    {
    title: 'Medical Topics',
    links: [
      { name: 'Dryness', href: '#' },
      { name: 'Hot Flashes', href: '#' },
      { name: 'Hormone Replacement Therapy', href: '#' },
      { name: 'Lifestyle', href: '#' },
      { name: 'Mood & Anxiety', href: '#' },
      { name: 'Preventive Care', href: '#' },
      { name: 'Testosterone for Women', href: '#' },
      { name: 'Acne', href: '#' },
      { name: 'Bloating', href: '#' },
      { name: 'More Symptoms', href: '#' },
    ],
  },
];

const socialLinks = [
  { icon: Youtube, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
];


// --- REUSABLE SUB-COMPONENTS ---

const Logo: FC = () => (
    <div className="text-8xl font-medium tracking-tighter -ml-2 text-white">M</div>
);

const Socials: FC = () => (
    <div className="flex space-x-6 justify-center lg:justify-start">
        {socialLinks.map(({ icon: Icon, href }, index) => (
            <Link key={index} href={href} className="text-white hover:text-gray-300">
                <Icon className="h-6 w-6" />
            </Link>
        ))}
    </div>
);

const HsaFsaBadge: FC = () => (
    <div className="inline-flex items-center gap-2 bg-[#59526D] text-white text-sm font-semibold px-4 py-2 rounded-full">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="white"/>
        </svg>
        <span>HSA/FSA- eligible</span>
    </div>
);

const Newsletter: FC = () => (
  <div className="w-full mx-auto px-4">
  <div className="flex flex-col lg:flex-row justify-between items-center">
    
    {/* Left Side: Text */}
    <div className="lg:w-2/3 text-left lg:text-left">
      <h2 className="text-[24px] lg:text-[32px] text-400 leading-snug">
        Join our newsletter for trusted menopause advice, health tips, and exclusive updates.
      </h2>
    </div>

    {/* Right Side: Form */}
    <div className="w-full lg:w-1/2">
      <form className="flex w-full max-w-md mx-auto lg:ml-auto lg:mx-0 bg-white rounded-full p-1 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-purple-500">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full bg-transparent px-5 py-3 text-black placeholder-gray-500 focus:outline-none"
          aria-label="Email address"
        />
        <button
          type="submit"
          className="bg-black text-white font-semibold px-6 py-2 rounded-full hover:bg-gray-800 transition-colors flex-shrink-0"
        >
          Subscribe
        </button>
      </form>
    </div>

  </div>
</div>
);

// This responsive component acts as an accordion on mobile and a static list on desktop.
const FooterLinkSection: FC<{ title: string; links: { name: string; href: string }[] }> = ({ title, links }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="border-b border-gray-800 lg:border-none">
        <button
          className="w-full flex justify-between items-center py-4 text-left lg:pointer-events-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={`footer-section-${title.replace(/\s+/g, '-')}`}
        >
          <h3 className="text-lg font-normal text-white lg:mb-5">{title}</h3>
          <ChevronDown
            className={`lg:hidden h-5 w-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
        <div 
          id={`footer-section-${title.replace(/\s+/g, '-')}`}
          className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} lg:grid-rows-[1fr]`}
        >
            <div className="overflow-hidden">
                <ul className="space-y-4 pt-2 pb-4 lg:pt-0 lg:pb-0">
                {links.map((link) => (
                    <li key={link.name}>
                        <Link href={link.href} className="text-base text-gray-300 hover:text-white hover:underline">
                            {link.name}
                        </Link>
                    </li>
                ))}
                </ul>
            </div>
        </div>
      </div>
    );
};


// --- MAIN FOOTER COMPONENT ---
export function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white">
      <div className="container mx-auto px-4 ">
        
        {/* --- DESKTOP: NEWSLETTER --- */}
        <div className="hidden lg:block">
          <div className="pt-20 pb-16">
            <Newsletter />
          </div>
          <div className="border-b border-gray-800"></div>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between lg:py-16">
          
          {/* --- LEFT SECTION --- */}
          <div className="lg:w-1/4 pt-12 lg:pt-0">
             <Logo />
             <p className="mt-4 text-gray-300 text-base max-w-[300px]">
                Empowering women to navigate menopause with confidence and support.
            </p>
            {/* Socials & Badge are shown here on desktop only */}
            <div className="hidden lg:block mt-8">
                <Socials/>
            </div>
            <div className="hidden lg:block mt-8">
                <HsaFsaBadge/>
            </div>
          </div>
          
          {/* --- RIGHT SECTION / LINK COLUMNS --- */}
          <div className="w-full lg:w-3/4 mt-10 lg:mt-0 lg:pl-12">
            {/* Mobile Accordion View */}
            <div className="lg:hidden">
                {footerSectionsData.map((section) => (
                    <FooterLinkSection key={section.title} title={section.title} links={section.links} />
                ))}
            </div>
            {/* Desktop Grid View */}
            <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-4 lg:gap-8">
              {footerSectionsData.map((section) => (
                  <FooterLinkSection key={section.title} title={section.title} links={section.links} />
              ))}
            </div>
          </div>
        </div>

        {/* --- MOBILE ONLY: NEWSLETTER, SOCIALS, BADGE --- */}
        <div className="lg:hidden mt-12 space-y-10 text-center">
            <Newsletter />
            <Socials />
            <HsaFsaBadge />
        </div>

        {/* --- COPYRIGHT --- */}
        <div className="text-center text-gray-400 text-sm mt-16 mb-12 pt-8 border-t border-gray-800">
             © 2025 MyAvina — All Rights Reserved
        </div>

      </div>
    </footer>
  );
}