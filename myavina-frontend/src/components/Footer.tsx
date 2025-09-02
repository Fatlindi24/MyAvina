"use client";

import Link from "next/link";
import {
  Youtube,
  Linkedin,
  Facebook,
  Instagram,
  ChevronDown,
  CheckCircle,
} from "lucide-react";
import { useState, type FC } from "react";

/* ---------------- DATA ---------------- */

const footerSectionsData = [
  {
    title: "Getting Started",
    links: [
      { name: "Start My Free Visit", href: "#" },
      { name: "Check My Symptoms", href: "#" },
      { name: "Shop Treatments", href: "#" },
      { name: "Bioidentical HRT", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About MYAVINA", href: "/about" },
      { name: "Reviews", href: "/reviews" },
      { name: "Ways We Care", href: "#" },
      { name: "Affiliate Program", href: "#" },
      { name: "Corporate Wellness", href: "#" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "Education",
    links: [
      { name: "Menopause Symptoms", href: "#" },
      { name: "All Articles", href: "/learn" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "FAQ", href: "/faq" },

      { name: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Medical Journal", href: "#" },
      { name: "States We Serve", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Consumer Health Privacy Policy", href: "/consumer-health" },
      { name: "Telehealth Consent", href: "telehealth-consent" },
    ],
  },
  {
    title: "Medical Topics",
    links: [
      { name: "Dryness", href: "#" },
      { name: "Hot Flashes", href: "#" },
      { name: "Hormone Replacement Therapy", href: "#" },
      { name: "Lifestyle", href: "#" },
      { name: "Mood & Anxiety", href: "#" },
      { name: "Preventive Care", href: "#" },
      { name: "Testosterone for Women", href: "#" },
      { name: "Acne", href: "#" },
      { name: "Bloating", href: "#" },
      { name: "More Symptoms", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: Youtube, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
];

/* ---------------- SMALL PARTS ---------------- */

const Logo: FC = () => (
  <div className="text-8xl md:text-9xl font-medium tracking-tight text-white">
    M
  </div>
);

const Socials: FC = () => (
  <div className="flex items-center gap-6">
    {socialLinks.map(({ icon: Icon, href }, i) => (
      <Link
        key={i}
        href={href}
        className="text-white/90 hover:text-white transition-colors"
      >
        <Icon className="h-6 w-6" />
      </Link>
    ))}
  </div>
);

const HsaFsaBadge: FC = () => (
  <div className="inline-flex items-center gap-2 bg-[#774180] text-white text-sm font-semibold pl-1 pr-2 py-2 rounded-full">
    <CheckCircle />
    <span className="text-[16px] font-normal">HSA/FSA- eligible</span>
  </div>
);

const Newsletter: FC = () => (
  <div className="w-full">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <h2 className="md:max-w-[60%] text-[20px] md:text-[32px]  font-normal">
        Join our newsletter for trusted menopause advice, health tips, and
        exclusive updates.
      </h2>
      <form className="w-full md:w-auto">
        <div className="flex items-center bg-white rounded-full p-1 max-w-md md:max-w-none">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-transparent px-4 py-3 text-black placeholder-gray-500 focus:outline-none"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="rounded-full bg-black text-white px-6 py-2.5 hover:bg-black/90 transition-colors"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  </div>
);

// Mobile accordion; becomes static open list on md+
const FooterLinkSection: FC<{
  title: string;
  links: { name: string; href: string }[];
}> = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const id = `footer-${title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className="border-b border-white/10 md:border-none">
      <button
        className="w-full flex justify-between items-center py-4 text-left md:cursor-default md:py-0"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-controls={id}
      >
        <h3 className="text-lg font-normal text-white md:mb-4">{title}</h3>
        <ChevronDown
          className={`md:hidden h-5 w-5 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        id={id}
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        } md:grid-rows-[1fr]`}
      >
        <div className="overflow-hidden">
          <ul className="space-y-4 pb-4 md:pb-0">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-base font-light text-[16px] text-white/80 hover:text-white hover:font-medium"
                >
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

/* ---------------- MAIN FOOTER ---------------- */

export function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white">
      <div className="container mx-auto px-6">
        {/* DESKTOP (md+): Newsletter + divider */}
        <div className="hidden md:block pt-16 pb-10">
          <Newsletter />
          <hr className="mt-8 md:border-white/50" />
        </div>

        {/* Top content row */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-stretch md:py-2">
          {/* Left brand column */}
          <div className="flex flex-col justify-between text-center md:text-left items-center md:items-start md:w-[38%] pt-12 md:pt-0">
            {/* Top: logo + text */}
            <div>
              <Logo />
              <p className="mt-5 text-white/80 text-base text-[16px] md:text-[18px] font-light max-w-md">
                Empowering women to navigate menopause with confidence and
                support.
              </p>

              {/* Socials visible only on md+ (below text) */}
              <div className="hidden md:block mt-8">
                <Socials />
              </div>
            </div>

            {/* Bottom: badge visible only on md+ */}
            <div className="hidden md:block mt-8">
              <HsaFsaBadge />
            </div>
          </div>

          {/* Right links column */}
          <div className="w-full md:w-[58%] mt-10 md:mt-0 md:pl-10">
            {/* Mobile accordion (below md) */}
            <div className="md:hidden">
              {footerSectionsData.map((s) => (
                <FooterLinkSection
                  key={s.title}
                  title={s.title}
                  links={s.links}
                />
              ))}
            </div>

            {/* Desktop grid (md+) – 3 columns like mock */}
            <div className="hidden md:grid grid-cols-3 gap-12">
              <div className="space-y-8">
                <FooterLinkSection
                  {...footerSectionsData.find(
                    (s) => s.title === "Getting Started"
                  )!}
                />
                <FooterLinkSection
                  {...footerSectionsData.find((s) => s.title === "Support")!}
                />
                <FooterLinkSection
                  {...footerSectionsData.find((s) => s.title === "Resources")!}
                />
              </div>
              <div className="space-y-8">
                <FooterLinkSection
                  {...footerSectionsData.find((s) => s.title === "Company")!}
                />
                <FooterLinkSection
                  {...footerSectionsData.find((s) => s.title === "Legal")!}
                />
              </div>
              <div className="space-y-8">
                <FooterLinkSection
                  {...footerSectionsData.find((s) => s.title === "Education")!}
                />
                <FooterLinkSection
                  {...footerSectionsData.find(
                    (s) => s.title === "Medical Topics"
                  )!}
                />
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE-ONLY: Newsletter + socials + badge (order as mock) */}
        <div className="md:hidden mt-10 space-y-8">
          <Newsletter />

          <Socials />
          <HsaFsaBadge />
        </div>

        {/* Bottom bar */}
        <div className="mt-10 md:mt-14 border-t border-white/50">
          <p className="text-center font-thin text-sm text-white/70 py-4">
            © 2025 MyAvina — All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
