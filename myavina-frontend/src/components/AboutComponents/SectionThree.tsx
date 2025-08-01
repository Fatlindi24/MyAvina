"use client"

import React from 'react'

const SectionThree = () => {
    return (
        <div>
            <section className="py-16 bg-white">
                <div className="mx-auto px-4 max-w-[1400px] space-y-12">
                    {/* Heading + intro */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Meet the Experts<br className="hidden md:inline" />
                            Behind MyAvina
                        </h2>
                        <p className="text-lg text-gray-700">
                            A team of doctors, advocates, and founders committed to transforming menopause care.
                        </p>
                    </div>

                    {/* Expert grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="space-y-4">
                            <img
                                src="/aboutpage/doc1.png"
                                alt="Dr. Saranne Perman"
                                className="w-full rounded-2xl object-cover"
                            />
                            <h3 className="text-xl font-semibold text-gray-900">
                                Dr. Saranne Perman
                            </h3>
                            <p className="text-gray-600">Chief Medical Advisor</p>
                            <p className="text-gray-500 text-sm">
                                Board-certified OB-GYN with 15+ years of experience in menopause care.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="space-y-4">
                            <img
                                src="/aboutpage/doc2.png"
                                alt="Emma Clarke"
                                className="w-full rounded-2xl object-cover"
                            />
                            <h3 className="text-xl font-semibold text-gray-900">
                                Emma Clarke
                            </h3>
                            <p className="text-gray-600">Co-Founder & CEO</p>
                            <p className="text-gray-500 text-sm">
                                Founded MyAvina to bring better support to women through menopause.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="space-y-4">
                            <img
                                src="/aboutpage/doc3.png"
                                alt="Dr. Aisha Patel"
                                className="w-full rounded-2xl object-cover"
                            />
                            <h3 className="text-xl font-semibold text-gray-900">
                                Dr. Aisha Patel
                            </h3>
                            <p className="text-gray-600">Hormonal Health Specialist</p>
                            <p className="text-gray-500 text-sm">
                                Expert in hormonal wellness and natural therapies for women.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default SectionThree
