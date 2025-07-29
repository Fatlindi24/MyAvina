  "use client";


import Link from 'next/link';
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,

  Star,
  MessageSquare,
  Icon as LucideIcon
} from 'lucide-react';
import Image from 'next/image';

// --- DATA FOR FOOTER LINKS ---
// Storing links in an array makes the footer easier to manage and update.
import { footerSections } from '@/data/footerData';


const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    // Placeholder for TikTok as it's not in Lucide by default
    { icon: Linkedin, href: "#" },
];


export function Footer() {
  return (
    <footer className="bg-[#242424] text-white">
      {/* Top Bar - Trustpilot */}
      <div className="bg-teal-600 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span>Rated 4.7 on</span>
            <span className="font-bold">★ Trustpilot</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-white fill-current" />
              ))}
            </div>
          </div>
          <span>Based on 3,900+ reviews</span>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
          
          {/* Column 1: Logo, Socials, Copyright */}
          <div className="col-span-2 lg:col-span-1 space-y-8 flex flex-col items-start">
            <span className="font-extrabold text-white text-3xl tracking-widest">MyAvina</span>
            <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href }, index) => (
                    <Link key={index} href={href} className="text-white-400 hover:text-white">
                        <Icon className="h-5 w-5" />
                    </Link>
                ))}
            </div>
            {/* LegitScript Badge Placeholder */}
            <div className="mt-auto pt-8">
                <Image src="/Images/legitscript-badge.png" alt="LegitScript approved" width={50} height={50} />
            </div>
          </div>
          
          {/* Link Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">{section.title}</h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-base text-white-400 hover:text-white hover:underline">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
        </div>

        {/* Vertical Copyright Text (Desktop only) */}
        <div className="hidden lg:block absolute left-4 bottom-40">
           <p className="[writing-mode:vertical-rl] transform rotate-180 text-xs text-gray-500 tracking-widest">
                © 2025 MyAvina. ALL RIGHTS RESERVED.
            </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-400">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms & Conditions</Link>
            <Link href="#" className="hover:text-white">Consumer Health Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Telehealth Consent</Link>
            <a href="mailto:hello@byMyAvina.com" className="hover:text-white">hello@byMyAvina.com</a>
        </div>
      
      </div>
    </footer>
  );
}