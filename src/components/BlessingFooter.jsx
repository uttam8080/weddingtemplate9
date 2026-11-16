import React from "react";
import { motion } from "motion/react";
import { COUPLE_DETAILS } from "../data/weddingData";
import { Heart, ChevronUp } from "lucide-react";
export const BlessingFooter = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (<footer className="relative py-20 px-4 bg-cover bg-center bg-no-repeat text-[#FDFBF7] overflow-hidden border-t-2 border-[#D4AF37]" style={{ backgroundImage: "url('/footer22.png')" }}>
      {/* Background Mandala Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-15 pointer-events-none">
        <div className="w-full h-full border border-dashed border-[#D4AF37] rounded-full animate-spin-slow"/>
      </div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                    staggerChildren: 0.15,
                    delayChildren: 0.1,
                },
            },
        }} className="max-w-4xl mx-auto relative z-10 text-center space-y-8">
        {/* Heart icon emblem */}
        <div className="w-16 h-16 rounded-full bg-[#FDFBF7] p-1 shadow-xl mx-auto flex items-center justify-center border-2 border-[#D4AF37]">
          <div className="w-full h-full rounded-full bg-[#8B0000] flex items-center justify-center">
            <Heart className="w-7 h-7 text-[#FCE08F] fill-[#FCE08F]"/>
          </div>
        </div>

        {/* Closing Quote */}
        <div className="space-y-3 text-black">
          <p className="font-serif-royal italic text-xl sm:text-3xl max-w-2xl mx-auto leading-relaxed text-black">
            "With love in our hearts and joy in our souls, we invite you to be
            part of our beautiful beginning."
          </p>

          <span className="font-hindi text-3xl sm:text-4xl text-black font-bold tracking-widest block pt-2 uppercase">
            शुभ विवाह
          </span>
        </div>

        {/* Compliments Lineage */}
        <div className="pt-8 border-t border-[#D4AF37]/40 text-xs sm:text-sm font-sans-clean text-black space-y-1">
          <p className="font-serif-royal italic text-sm sm:text-base text-black">
            With Best Compliments From
          </p>
          <p className="font-bold text-black">
            Maharana & Sharma Families, Relatives, and Friends
          </p>
          <p className="text-[11px] text-black pt-3">
            © 2026 {COUPLE_DETAILS.groom.name.split(" ")[0]} &{" "}
            {COUPLE_DETAILS.bride.name.split(" ")[0]}'s Shubh Vivaah. All Rights
            Reserved.
          </p>
          <p className="text-[11px] text-black pt-1">
            <a href="https://tekkzy.com/" target="_blank" rel="noreferrer" className="underline">
              Crafted by Tekkzy
            </a>{" "}
            — AI-Powered Intelligent Cloud Solutions
          </p>
        </div>

        {/* Back to top button */}
        <div className="pt-4">
          <button onClick={scrollToTop} title="Scroll to Top" className="p-3 rounded-full border border-[#D4AF37] bg-[#8B0000] text-[#FCE08F] hover:bg-[#A00000] transition-all shadow">
            <ChevronUp className="w-5 h-5 text-[#FCE08F]"/>
          </button>
        </div>
      </motion.div>
    </footer>);
};
