import React from "react";
import { motion } from "motion/react";
import { WEDDING_EVENTS } from "../data/weddingData";
import { Calendar, Clock, MapPin, Sparkles, Sun, Music, Wine, HeartHandshake, } from "lucide-react";
import { NightStringLights } from "./NightStringLights";
import { RoyalCard } from "./RoyalCard";
export const Events = () => {
    const getEventIcon = (name) => {
        switch (name) {
            case "Sun":
                return <Sun className="w-5 h-5 text-[#FCE08F]"/>;
            case "Sparkles":
                return <Sparkles className="w-5 h-5 text-[#FCE08F]"/>;
            case "Music":
                return <Music className="w-5 h-5 text-[#FCE08F]"/>;
            case "HeartHandshake":
                return <HeartHandshake className="w-5 h-5 text-[#FCE08F]"/>;
            case "Wine":
                return <Wine className="w-5 h-5 text-[#FCE08F]"/>;
            default:
                return <Sparkles className="w-5 h-5 text-[#FCE08F]"/>;
        }
    };
    return (<section id="events" className="relative py-24 px-4 text-[#FDFBF7] overflow-hidden">
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
        }} className="max-w-7xl mx-auto relative z-10 section-panel px-4 py-10 sm:px-6 sm:py-12">
        {/* Section Title with Scroll Animation */}
        <motion.div variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
            },
        }} className="text-center space-y-3 mb-16">
          <span className="font-hindi text-lg sm:text-xl text-[#FCE08F] font-bold tracking-widest block uppercase">
            ॥ मांगलिक कार्यक्रम ॥
          </span>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-[#FCE08F] tracking-wide">
            Wedding Ceremonies & Events
          </h2>
          <div className="flex items-center justify-center gap-3 pt-1">
            <span className="h-[1px] w-12 bg-[#D4AF37]"/>
            <Sparkles className="w-4 h-4 text-[#D4AF37]"/>
            <span className="h-[1px] w-12 bg-[#D4AF37]"/>
          </div>
          <p className="font-serif-royal italic text-lg sm:text-2xl text-[#FDFBF7]/90 max-w-2xl mx-auto">
            Join us in the sacred rituals, vibrant music, and joyous feasts
            celebrating our union.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WEDDING_EVENTS.map((evt, idx) => (<RoyalCard key={evt.id}>
              <div className="h-full flex flex-col justify-between">
                <div>
                  {/* Event Image Banner */}
                  <div className="relative h-52 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6 overflow-hidden border-b-2 border-[#D4AF37]">
                    <img src={evt.image} alt={evt.title} referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-700"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#100307] via-[#100307]/30 to-transparent"/>

                    {/* Top Badge Icon */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c040b]/90 backdrop-blur-md border border-[#D4AF37] shadow">
                      {getEventIcon(evt.iconName)}
                      <span className="font-hindi text-xs text-[#FCE08F] font-bold">
                        {evt.hindiTitle}
                      </span>
                    </div>
                  </div>

                  {/* Event Content Details */}
                  <div className="space-y-4">
                    <h3 className="font-cinzel text-2xl font-bold text-[#FCE08F]">
                      {evt.title}
                    </h3>

                    <p className="font-sans-clean text-sm text-[#FDFBF7]/90 leading-relaxed">
                      {evt.description}
                    </p>

                    <div className="space-y-2.5 pt-3 border-t border-[#D4AF37]/30 font-sans-clean text-xs sm:text-sm">
                      <div className="flex items-center gap-3 text-[#FCE08F] font-bold">
                        <Calendar className="w-4 h-4 text-[#D4AF37] shrink-0"/>
                        <span>{evt.date}</span>
                      </div>

                      <div className="flex items-center gap-3 text-[#FDFBF7]">
                        <Clock className="w-4 h-4 text-[#FCE08F] shrink-0"/>
                        <span className="font-medium">{evt.time}</span>
                      </div>

                      <div className="flex items-center gap-3 text-[#FDFBF7]">
                        <MapPin className="w-4 h-4 text-[#FCE08F] shrink-0"/>
                        <span className="truncate font-medium">
                          {evt.venue}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-6 mt-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FCE08F]">
                    Dress Code:
                  </span>
                  <span className="text-sm text-[#FDFBF7]/90">
                    {evt.dressCode}
                  </span>
                </div>
              </div>
            </RoyalCard>))}
        </div>
      </motion.div>
    </section>);
};
