"use client"

import React from 'react'
import Marquee from "react-fast-marquee";

const SectionFive = () => {
    const logos = [
        '/aboutpage/logo1.png',
        '/aboutpage/logo2.png',
        '/aboutpage/logo3.png',
        '/aboutpage/logo4.png',
        '/aboutpage/logo1.png',
        '/aboutpage/logo2.png',
        '/aboutpage/logo3.png',
        '/aboutpage/logo4.png',
        '/aboutpage/logo1.png',
        '/aboutpage/logo2.png',
        '/aboutpage/logo3.png',
        '/aboutpage/logo4.png',
        '/aboutpage/logo1.png',
        '/aboutpage/logo2.png',
        '/aboutpage/logo3.png',
        '/aboutpage/logo4.png',
    ];
    const triple = [...logos, ...logos, ...logos, ...logos, ...logos];

    return (
        <div>
            <Marquee
                gradient={false}
                speed={50}           // adjust to taste
                pauseOnHover={true}  // optional
            >
                {logos.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt={`logo ${i + 1}`}
                        className="h-8 mx-8 object-contain my-12"
                    />
                ))}
            </Marquee>

        </div>
    )
}

export default SectionFive
