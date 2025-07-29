"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// --- DATA STRUCTURE ---
const navItems = [
    {
        name: 'Treatments',
        href: '/treatments',
        dropdownItems: [
            { name: 'All Treatments', href: '/treatments' },
            { name: 'Estrogen Cream', href: '/treatments/estrogen-cream' },
            { name: 'Progesterone Capsules', href: '/treatments/progesterone' },
            { name: 'HRT Patch', href: '/treatments/hrt-patch' },
        ]
    },
    {
        name: 'Learn',
        href: '/learn',
        dropdownItems: [
            {name: 'test', href: "href"},
        ]

    },
    {
        name: 'About Us',
        href: '/about',
        dropdownItems: [
            { name: 'Who We Are', href: '/about' },
            { name: 'Our Care', href: '/about/our-care' },
            { name: 'Our Approach', href: '/about/our-approach' },
            { name: 'Our Physicians', href: '/about/our-physicians' },
            { name: 'FAQs', href: '/faq' },
            { name: 'Careers', href: '/careers' },
        ]
    },
    { name: 'Reviews', href: '/reviews' },
];

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const router = useRouter();
    const [user, setUser] = useState<any>(null);
    const [sessionTime, setSessionTime] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    useEffect(() => {
        let interval: NodeJS.Timeout;

        const fetchUserAndSession = async () => {
            try {
                const [userRes, sessionRes] = await Promise.all([
                    fetch('http://localhost:5050/api/auth/me', { credentials: 'include' }),
                    fetch('http://localhost:5050/api/auth/session-info', { credentials: 'include' }),
                ]);

                if (!userRes.ok || !sessionRes.ok) return;

                const userData = await userRes.json();
                const sessionData = await sessionRes.json();

                setUser(userData);

                let remaining = sessionData.remainingMs;

                const updateTime = () => {
                    if (remaining <= 0) {
                        setSessionTime('Session expired');
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
                console.error('Failed to fetch user/session:', err);
            }
        };

        fetchUserAndSession();
        return () => clearInterval(interval);
    }, []);

    const handleLogout = async () => {
        await fetch('http://localhost:5050/api/auth/logout', {
            method: 'POST',
            credentials: 'include',
        });
        setUser(null);
        router.push('/');
    };

    return (
        <header className="bg-white w-full shadow-sm sticky top-0 z-50">
            <div className="h-1 bg-gray-800" />

            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="flex items-center justify-between h-20">

                    <div className="flex-shrink-0">
                        <Link href="/" className="text-3xl font-light tracking-[0.2em] text-gray-800">
                            MyAvina
                        </Link>
                    </div>

                    <div className="hidden lg:flex items-center space-x-8">
                        {/* Desktop Navigation */}
                        <nav className="flex items-center space-x-3">
                            {navItems.map((item) => (
                                <div
                                    key={item.name}
                                    className="relative"
                                    onMouseEnter={() => item.dropdownItems && setOpenDropdown(item.name)}
                                    onMouseLeave={() => item.dropdownItems && setOpenDropdown(null)}
                                >
                                    <Link href={item.href} className="flex items-center text-gray-600 hover:text-purple-600 transition-colors duration-200 py-2">
                                        {item.name}
                                        {item.dropdownItems && <ChevronDown className="h-4 w-4 ml-1" />}
                                    </Link>

                                    {item.dropdownItems && openDropdown === item.name && (
                                        // --- MODIFICATION START ---
                                        // The outer div is for positioning and is now flush with the nav item.
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-56">
                                            {/* This new inner div creates the visual gap with padding, fixing the hover issue. */}
                                            <div className="pt-2">
                                                <div className="bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                    <div className="p-4 space-y-3">
                                                        {item.dropdownItems.map((subItem) => (
                                                            <Link
                                                                key={subItem.name}
                                                                href={subItem.href}
                                                                className="block text-gray-700 hover:text-purple-600 hover:underline"
                                                                onClick={() => setOpenDropdown(null)}
                                                            >
                                                                {subItem.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        // --- MODIFICATION END ---
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Desktop Action Buttons */}
                        <div className="flex items-center space-x-4">
                            {user ? (
                                <>
                                    <a href="/register" className="text-blue-600 font-semibold hover:underline">Get Started</a>
                                    <div className="relative inline-block text-left">
                                        <button
                                            onClick={() => setShowDropdown(!showDropdown)}
                                            className="flex items-center space-x-2 focus:outline-none"
                                        >
                                            <Image src="/profile-icon.svg" width={32} height={32} alt="Profile" />
                                            <span className="text-gray-700 font-medium">{user.firstName}</span>
                                        </button>

                                        {showDropdown && (
                                            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                                                <div className="px-4 py-2 text-sm text-gray-700 border-b">⏳ {sessionTime}</div>
                                                <a href="/profile" className="block px-4 py-2 text-sm hover:bg-gray-100">My Profile</a>
                                                <button
                                                    onClick={handleLogout}
                                                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                                >
                                                    Logout
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </>
                            ) : (
                                <>
                                    <a href="/register" className="text-blue-600 font-semibold hover:underline">Get Started</a>
                                    <a href="/login" className="text-gray-700 hover:underline">Login</a>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" className="p-2 text-gray-600 rounded-md hover:bg-gray-100 transition">
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* --- MOBILE MENU WITH DROPDOWNS --- */}
            {isMenuOpen && (
                 <div className="lg:hidden">
                    <div className="fixed inset-0 bg-black bg-opacity-25 z-40" onClick={() => setIsMenuOpen(false)}></div>
                    <div className="fixed top-0 right-0 w-full max-w-sm h-full bg-white shadow-lg z-50 flex flex-col">
                        <div className="p-5 flex items-center justify-between border-b">
                            <Link href="/" className="text-2xl font-light tracking-[0.2em] text-gray-800">MyAvina</Link>
                            <button onClick={() => setIsMenuOpen(false)} className="p-2 -mr-2"><X className="h-6 w-6 text-gray-600" /></button>
                        </div>
                        <nav className="mt-6 flex-grow px-5 space-y-1">
                            {navItems.map((item) => (
                                <MobileNavItem key={item.name} item={item} closeMenu={() => setIsMenuOpen(false)} />
                            ))}
                        </nav>
                        <div className="p-5 border-t space-y-4">
                            <Link href="/get-started" onClick={() => setIsMenuOpen(false)} className="block w-full text-center bg-purple-400 text-white font-bold py-3 px-6 rounded-lg">
                                GET STARTED
                            </Link>
                            <Link href="/login" onClick={() => setIsMenuOpen(false)} className="block w-full text-center text-purple-500 font-bold">
                                LOGIN
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

// Helper component for mobile navigation items
function MobileNavItem({ item, closeMenu }: { item: typeof navItems[0], closeMenu: () => void }) {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    if (!item.dropdownItems) {
        return (
            <Link href={item.href} onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
                {item.name}
            </Link>
        );
    }

    return (
        <div>
            <button onClick={() => setIsSubmenuOpen(!isSubmenuOpen)} className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
                <span>{item.name}</span>
                <ChevronDown className={`h-5 w-5 transition-transform ${isSubmenuOpen ? 'rotate-180' : ''}`} />
            </button>
            {isSubmenuOpen && (
                <div className="pl-6 pt-2 pb-1 space-y-1">
                    {item.dropdownItems.map((subItem) => (
                        <Link key={subItem.name} href={subItem.href} onClick={closeMenu} className="block py-2 text-gray-600 hover:text-purple-600">
                            {subItem.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}