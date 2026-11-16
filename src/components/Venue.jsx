import React from "react";
import { motion } from "motion/react";
import { COUPLE_DETAILS } from "../data/weddingData";
import { Navigation, Calendar, Clock, Plane, Hotel, PhoneCall, Sparkles, } from "lucide-react";
import { NightStringLights } from "./NightStringLights";
import { RoyalCard } from "./RoyalCard";
export const Venue = () => {
    return (<section id="venue" className="relative py-24 px-4 text-[#FDFBF7] overflow-hidden">
      {/* Background String Lights Image */}
      <NightStringLights />

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={{
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.1,
                },
            },
        }} className="max-w-6xl mx-auto relative z-10 section-panel px-4 py-10 sm:px-6 sm:py-12 space-y-12">
        {/* Title */}
        <motion.div variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
            },
        }} className="text-center space-y-3">
          <span className="font-hindi text-lg sm:text-xl text-[#FCE08F] font-bold tracking-widest block uppercase">
            ॥ विवाह स्थल ॥
          </span>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-[#FCE08F] tracking-wide">
            Royal Venue & Location
          </h2>
          <div className="flex items-center justify-center gap-3 pt-1">
            <span className="h-[1px] w-12 bg-[#D4AF37]"/>
            <Sparkles className="w-4 h-4 text-[#D4AF37]"/>
            <span className="h-[1px] w-12 bg-[#D4AF37]"/>
          </div>
          <p className="font-serif-royal italic text-lg sm:text-2xl text-[#FDFBF7]/90 max-w-xl mx-auto">
            Experience royal hospitality at the majestic City Palace on the
            serene banks of Lake Pichola.
          </p>
        </motion.div>

        {/* Venue Card Main */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Details Box */}
          <div className="lg:col-span-7">
            <RoyalCard delay={0.1}>
              <div className="space-y-6">
                <div className="overflow-hidden rounded-[2rem] border border-[#D4AF37]/30 shadow-2xl bg-[#070b19]">
                  <img src="/palace.jpg" alt="The Grand City Palace Resort" className="w-full h-[360px] sm:h-[440px] md:h-[520px] object-cover" loading="lazy"/>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-sans-clean text-xs sm:text-sm">
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#1c040b]/80 border border-[#D4AF37]/50">
                    <Calendar className="w-5 h-5 text-[#FCE08F]"/>
                    <div>
                      <span className="text-xs text-[#FDFBF7]/80 block font-medium">
                        Wedding Date
                      </span>
                      <span className="font-bold text-[#FCE08F]">
                        Dec 12, 2026
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#1c040b]/80 border border-[#D4AF37]/50">
                    <Clock className="w-5 h-5 text-[#FCE08F]"/>
                    <div>
                      <span className="text-xs text-[#FDFBF7]/80 block font-medium">
                        Baraat & Muhurat
                      </span>
                      <span className="font-bold text-[#FCE08F]">
                        06:30 PM Onwards
                      </span>
                    </div>
                  </div>
                </div>

                {/* Google Maps Button */}
                <div className="pt-2">
                  <a href={COUPLE_DETAILS.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#8B0000] to-[#5C0000] hover:from-[#A00000] hover:to-[#700000] text-[#FDFBF7] font-cinzel font-bold text-xs sm:text-sm tracking-wider uppercase shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 border border-[#D4AF37]">
                    <Navigation className="w-4 h-4 fill-[#FCE08F] text-[#FCE08F]"/>
                    <span>View Location on Google Maps</span>
                  </a>
                </div>
              </div>
            </RoyalCard>
          </div>

          {/* Right Travel & Accommodation Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Travel Assistance Box */}
            <RoyalCard delay={0.2} hoverEffect={true}>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-[#FCE08F]">
                  <Plane className="w-5 h-5 text-[#FCE08F]"/>
                  <h4 className="font-cinzel text-lg font-bold">
                    Nearest Airport & Rail
                  </h4>
                </div>
                <p className="font-sans-clean text-xs sm:text-sm text-[#FDFBF7]/90 leading-relaxed">
                  Maharana Pratap Airport (Udaipur - UDR) is 24 km from the
                  venue. Pickup shuttles will be coordinated for outstation
                  guests upon request.
                </p>
              </div>
            </RoyalCard>

            {/* Stay Box */}
            <RoyalCard delay={0.3} hoverEffect={true}>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-[#FCE08F]">
                  <Hotel className="w-5 h-5 text-[#FCE08F]"/>
                  <h4 className="font-cinzel text-lg font-bold">
                    Royal Accommodation
                  </h4>
                </div>
                <p className="font-sans-clean text-xs sm:text-sm text-[#FDFBF7]/90 leading-relaxed">
                  Luxury suite arrangements have been reserved at Palace Wings
                  for our guests. Please confirm RSVP early for personalized
                  room allocation.
                </p>
              </div>
            </RoyalCard>

            {/* Concierge Help Box */}
            <RoyalCard delay={0.4} hoverEffect={true}>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-[#FCE08F]">
                  <PhoneCall className="w-5 h-5 text-[#FCE08F]"/>
                  <h4 className="font-cinzel text-lg font-bold">
                    Guest Help Desk
                  </h4>
                </div>
                <p className="font-sans-clean text-xs sm:text-sm text-[#FDFBF7]/90 leading-relaxed">
                  Hospitality Team Contact:{" "}
                  <span className="text-[#FCE08F] font-bold">
                    +91 98765 43210
                  </span>{" "}
                  /{" "}
                  <span className="text-[#FCE08F] font-bold">
                    wedding@rajan-and-rani.com
                  </span>
                </p>
              </div>
            </RoyalCard>
          </div>
        </div>
      </motion.div>
    </section>);
};
