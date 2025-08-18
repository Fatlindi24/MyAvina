"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Plus, ChevronRight, User } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { topics } from "@/data/topics";
import { products } from "@/data/products"; // ✅ pull categories from data

// --- helpers: unique categories (catslug -> category) ---
const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const categoryPairs = Array.from(
  products.reduce((map, p) => {
    const key = (p as any).catslug ?? slugify(p.category); // ✅ fallback if catslug missing
    if (!map.has(key)) map.set(key, p.category);
    return map;
  }, new Map<string, string>())
).sort((a, b) => a[1].localeCompare(b[1]));

const treatmentCategoryLinks = categoryPairs.map(([catslug, category]) => ({
  name: category,
  href: `/products/${catslug}`, // ✅ legacy /products/<catslug> category URL
}));

const navItems = [
  {
    name: "Treatments",
    href: "/treatments",
    dropdownItems: [
      { name: "All Treatments", href: "/treatments" },
      ...treatmentCategoryLinks, // ✅ dynamic categories
    ],
  },
  {
    name: "Learn",
    href: "/learn",
    dropdownItems: topics.map((topic) => ({
      name: topic.name,
      href: `/learn/${topic.slug}`,
    })),
  },
  {
    name: "About Us",
    href: "/about",
    dropdownItems: [
      { name: "Who We Are", href: "/about" },
      { name: "Our Care", href: "/about/our-care" },
      { name: "Our Approach", href: "/about/our-approach" },
      { name: "Our Physicians", href: "/about/our-physicians" },
      { name: "FAQs", href: "/faq" },
      { name: "Careers", href: "/careers" },
    ],
  },
  { name: "Reviews", href: "/reviews" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [sessionTime, setSessionTime] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const fetchUserAndSession = async () => {
      try {
        const [userRes, sessionRes] = await Promise.all([
          fetch("http://localhost:5050/api/auth/me", {
            credentials: "include",
          }),
          fetch("http://localhost:5050/api/auth/session-info", {
            credentials: "include",
          }),
        ]);

        if (!userRes.ok || !sessionRes.ok) return;

        const userData = await userRes.json();
        const sessionData = await sessionRes.json();

        setUser(userData);

        let remaining = sessionData.remainingMs;
        const updateTime = () => {
          if (remaining <= 0) {
            setSessionTime("Session expired");
            clearInterval(interval);
            return;
          }
          const mins = Math.floor(remaining / 60000);
          const secs = Math.floor((remaining % 60000) / 1000);
          setSessionTime(`${mins}m ${secs}s`);
          remaining -= 1000;
        };

        updateTime();
        interval = setInterval(updateTime, 1000);
      } catch (err) {
        console.error("Failed to fetch user/session:", err);
      }
    };

    fetchUserAndSession();
    return () => clearInterval(interval);
  }, []);

  const handleLogout = async () => {
    await fetch("http://localhost:5050/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });
    setUser(null);
    router.push("/");
  };

  return (
    <header className="bg-white w-full shadow-sm sticky top-0 z-50 prompt">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl md:text-3xl font-light tracking-[0.2em] text-gray-800"
          >
            MYAVINA
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() =>
                    item.dropdownItems && setOpenDropdown(item.name)
                  }
                  onMouseLeave={() =>
                    item.dropdownItems && setOpenDropdown(null)
                  }
                >
                  <Link
                    href={item.href}
                    className="flex items-center text-gray-600 hover:text-[#774180] transition-colors duration-200 py-2"
                  >
                    {item.name}
                    {item.dropdownItems && (
                      <Plus
                        className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                          openDropdown === item.name ? "rotate-45" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {item.dropdownItems && openDropdown === item.name && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 pt-2">
                      <div className="bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden transition-all duration-300">
                        <div className="p-4 space-y-3">
                          {item.dropdownItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block text-gray-700 hover:text-[#774180] hover:underline"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              <Link
                href="/get-started"
                className="bg-[#774180] text-white px-5 py-2 rounded-full flex items-center hover:bg-[#62346b] transition"
              >
                Get Started
                <ChevronRight className="ml-2 w-4 h-4" />
              </Link>

              {user ? (
                <div className="relative inline-block text-left">
                  <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="flex items-center space-x-2 focus:outline-none"
                  >
                    <User className="w-6 h-6 text-gray-700" />
                    <span className="text-gray-700 font-medium">
                      {user.firstName}
                    </span>
                  </button>
                  {showDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                      <div className="px-4 py-2 text-sm text-gray-700 border-b">
                        ⏳ {sessionTime}
                      </div>
                      <Link
                        href="/profile"
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        My Profile
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link href="/login">
                  <User className="w-6 h-6 text-gray-700 hover:text-[#774180] transition" />
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Right */}
          <div className="lg:hidden flex items-center space-x-3 propmt">
            <Link
              href="/get-started"
              className="bg-[#774180] text-white px-4 py-2 rounded-full text-sm flex items-center hover:bg-[#5c3164]  transition prompt"
            >
              Get Started
              <ChevronRight className="ml-2 w-4 h-4" />
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 rounded-md hover:bg-gray-100 transition prompt"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 bg-black bg-opacity-25 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 w-full max-w-sm h-full bg-white shadow-lg z-50 flex flex-col">
            <div className="p-5 flex items-center justify-between border-b">
              <Link
                href="/"
                className="text-2xl font-light tracking-[0.2em] text-gray-800"
              >
                MYAVINA
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 -mr-2"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
            </div>
            <nav className="mt-6 flex-grow px-5 space-y-1">
              {navItems.map((item) => (
                <MobileNavItem
                  key={item.name}
                  item={item}
                  closeMenu={() => setIsMenuOpen(false)}
                />
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

function MobileNavItem({
  item,
  closeMenu,
}: {
  item: (typeof navItems)[0];
  closeMenu: () => void;
}) {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
        className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
      >
        <span>{item.name}</span>
        {item.dropdownItems ? (
          <Plus
            className={`w-5 h-5 transition-transform duration-300 ${
              isSubmenuOpen ? "rotate-45" : ""
            }`}
          />
        ) : null}
      </button>
      {isSubmenuOpen && item.dropdownItems && (
        <div className="pl-6 pt-2 pb-1 space-y-1 transition-all duration-300">
          {item.dropdownItems.map((subItem) => (
            <Link
              key={subItem.name}
              href={subItem.href}
              onClick={closeMenu}
              className="block py-2 text-gray-600 hover:text-[#774180]"
            >
              {subItem.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
