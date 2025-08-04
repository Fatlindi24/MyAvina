"use client";

import SectionFive from "@/components/AboutComponents/SectionFive";
import SectionFour from "@/components/AboutComponents/SectionFour";
import SectionOne from "@/components/AboutComponents/SectionOne";
import SectionSix from "@/components/AboutComponents/SectionSix";
import SectionThree from "@/components/AboutComponents/SectionThree";
import SectionTwo from "@/components/AboutComponents/SectionTwo";


export default function AboutUs() {

    return (
        <section className="bg-white">
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
        </section>
    );
}