"use client"

import React from 'react'

const SectionTwo = () => {
    return (
        <div>
            <section className="py-16 bg-[#F6F6F6] my-10">
                <div className="mx-auto px-4 max-w-[1400px] space-y-24">
                    {/* Row 1: Our Story (text → image) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                            <span className="inline-block text-purple-600 text-2xl">
                                <img src="/aboutpage/vector.png" />
                            </span>
                            <h3 className="text-3xl font-semibold text-gray-900">Our Story</h3>
                            <p className="text-lg text-gray-700 max-w-md">
                                Too many women navigate this powerful transition alone — confused by symptoms, dismissed by doctors,
                                and left without support. At MyAvina, we believe women deserve more. That’s why we built a platform dedicated
                                to expert care, real answers, and personalized solutions — designed specifically for women’s hormonal health.
                                We’re here to replace shame with confidence, uncertainty with knowledge, and silence with support.
                            </p>
                        </div>
                        <img
                            src="/aboutpage/aboutimage.png"
                            alt="Our Story"
                            className="w-full rounded-2xl object-cover"
                        />
                    </div>

                    {/* Row 2: Our Mission (flipped on md) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Mission text */}
                        <div className="space-y-4 md:order-2">
                            <span className="inline-block text-purple-600 text-2xl">            <img src="/aboutpage/vector.png" />
                            </span>
                            <h3 className="text-3xl font-semibold text-gray-900">Our Mission</h3>
                            <p className="text-lg text-gray-700 max-w-md">
                                We’re on a mission to make menopause support accessible, personalized, and stigma-free.
                                Through evidence-based treatments, education, and community, MyAvina helps women take control of
                                their hormonal health — with confidence, clarity, and compassion.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center space-x-2">
                                    <span className="text-purple-600"> <img src="/aboutpage/vectorone.png" /></span><span className="text-gray-800">Expert Care</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="text-purple-600"> <img src="/aboutpage/vectortwo.png" /></span><span className="text-gray-800">Personalized Support</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="text-purple-600"> <img src="/aboutpage/vectorthree.png" /></span><span className="text-gray-800">Empowered Women</span>
                                </li>
                            </ul>
                        </div>
                        {/* Mission image */}
                        <img
                            src="/aboutpage/aboutimage.png"
                            alt="Our Mission"
                            className="w-full rounded-2xl object-cover md:order-1"
                        />
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                        <button className="bg-black text-white px-8 py-4 rounded-full hover:opacity-90 transition">
                            Start My Free Visit
                        </button>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default SectionTwo
