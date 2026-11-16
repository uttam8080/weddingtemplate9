import React, { useState } from "react";
import { SmoothScroll } from "./components/SmoothScroll";
import { PetalsCanvas } from "./components/PetalsCanvas";
import { EnvelopeModal } from "./components/EnvelopeModal";
import { Hero } from "./components/Hero";
import { ScratchReveal } from "./components/ScratchReveal";
import { Events } from "./components/Events";
import { Gallery } from "./components/Gallery";
import { Countdown } from "./components/Countdown";
import { Venue } from "./components/Venue";
import { BlessingFooter } from "./components/BlessingFooter";
import { SectionDivider } from "./components/SectionDivider";
export default function App() {
    const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(true);
    const handleEnvelopeClose = () => {
        setIsEnvelopeOpen(false);
        const heroSection = document.getElementById("home");
        if (heroSection) {
            heroSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    return (<SmoothScroll>
      <div className="relative min-h-screen bg-[#080d1a] text-[#FDFBF7] font-sans-clean overflow-x-hidden selection:bg-[#8B0000] selection:text-[#FDFBF7]">
        {/* Floating Petals Canvas Background */}
        <PetalsCanvas />

        {/* Opening Envelope Interactive Modal */}
        <EnvelopeModal isOpen={isEnvelopeOpen} onClose={handleEnvelopeClose}/>

        {/* Main Wedding Page Content */}
        <main className="relative z-10 bg-transparent">
          {/* Hero Section */}
          <Hero />

          <SectionDivider icon="sparkles"/>

          {/* Interactive Scratch Card Date Reveal */}
          <ScratchReveal />

          <SectionDivider icon="mandala"/>

          <SectionDivider icon="sparkles"/>

          {/* Wedding Ceremonies & Events */}
          <Events />

          <SectionDivider icon="mandala"/>

          {/* Royal Photo Gallery */}
          <Gallery />

          <SectionDivider icon="sparkles"/>

          {/* Countdown Timer */}
          <Countdown />

          <SectionDivider icon="mandala"/>

          {/* Venue Location & Travel */}
          <Venue />
        </main>

        <SectionDivider icon="sparkles"/>

        {/* Blessing Footer */}
        <BlessingFooter />
      </div>
    </SmoothScroll>);
}
