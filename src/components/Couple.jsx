import React from 'react';
import { motion } from 'motion/react';
import { COUPLE_DETAILS } from '../data/weddingData';
import { Sparkles } from 'lucide-react';
import { NightStringLights } from './NightStringLights';
import { RoyalCard } from './RoyalCard';
export const Couple = () => {
    return (<section id="couple" className="relative py-24 px-4 text-[#FDFBF7] overflow-hidden">
      {/* Background String Lights & Mason Jars */}
      <NightStringLights />

      {/* Background Subtle Mandalas */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 opacity-15 pointer-events-none">
        <div className="w-full h-full border-2 border-dashed border-[#D4AF37] rounded-full animate-spin-slow"/>
      </div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 opacity-15 pointer-events-none">
        <div className="w-full h-full border-2 border-dashed border-[#D4AF37] rounded-full animate-spin-reverse"/>
      </div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={{
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.1,
                },
            },
        }} className="max-w-6xl mx-auto relative z-10 section-panel px-4 py-10 sm:px-6 sm:py-12">
        
        {/* Section Title Header with Scroll Animation */}
        <motion.div variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
            }
        }} className="text-center space-y-3 mb-16">
          <span className="font-hindi text-lg sm:text-xl text-[#FCE08F] font-bold tracking-widest block uppercase">
            ॥ वर एवं वधू ॥
          </span>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-[#FCE08F] tracking-wide">
            Meet the Couple
          </h2>
          <div className="flex items-center justify-center gap-3 pt-1">
            <span className="h-[1px] w-12 bg-[#D4AF37]"/>
            <Sparkles className="w-4 h-4 text-[#D4AF37]"/>
            <span className="h-[1px] w-12 bg-[#D4AF37]"/>
          </div>
          <p className="font-serif-royal italic text-lg sm:text-2xl text-[#FDFBF7]/90 max-w-xl mx-auto pt-1">
            Two souls brought together by destiny, blessed by love, and bound by seven sacred vows.
          </p>
        </motion.div>

        {/* Couple Profile Cards Grid */}
        <motion.div variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
            }
        }} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Groom Card */}
          <div className="lg:col-span-5">
            <RoyalCard delay={0.1}>
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6 border-2 border-[#D4AF37]/80 shadow-lg group-hover:border-[#FCE08F] transition-colors duration-500">
                <img src={COUPLE_DETAILS.groom.image} alt={COUPLE_DETAILS.groom.name} referrerPolicy="no-referrer" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"/>
                <div className="absolute inset-0 bg-gradient-to-t from-[#100307] via-transparent to-transparent opacity-90"/>
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="font-hindi text-sm text-[#FCE08F] uppercase tracking-wider block font-bold">
                    वर (Groom)
                  </span>
                  <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white drop-shadow">
                    {COUPLE_DETAILS.groom.name}
                  </h3>
                </div>
              </div>

              <div className="text-center space-y-3 font-sans-clean">
                <p className="font-serif-royal text-base text-[#FCE08F] italic font-bold">
                  {COUPLE_DETAILS.groom.family}
                </p>
                <p className="text-sm text-[#FDFBF7]/90 leading-relaxed font-normal">
                  "{COUPLE_DETAILS.groom.bio}"
                </p>
              </div>
            </RoyalCard>
          </div>

          {/* Center Ornate Divider Motif */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center my-4 lg:my-0 text-center space-y-4">
            <div className="hidden lg:block h-24 w-[2px] bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent"/>
            
            <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} animate={{ rotate: [0, 360] }} transition={{
            scale: { duration: 0.6, delay: 0.2 },
            opacity: { duration: 0.6, delay: 0.2 },
            rotate: { repeat: Infinity, duration: 25, ease: "linear" }
        }} className="w-20 h-20 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#B8860B] to-[#FCE08F] p-1 shadow-xl flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#1c040b] flex flex-col items-center justify-center p-2 text-center border border-[#D4AF37]">
                <span className="font-script text-3xl text-[#FCE08F] font-bold leading-none">
                  &
                </span>
                <span className="font-hindi text-[9px] text-[#D4AF37] font-bold uppercase tracking-widest mt-0.5">
                  विवाह
                </span>
              </div>
            </motion.div>

            <div className="hidden lg:block h-24 w-[2px] bg-gradient-to-b from-[#D4AF37] via-transparent to-transparent"/>
          </div>

          {/* Bride Card */}
          <div className="lg:col-span-5">
            <RoyalCard delay={0.3}>
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6 border-2 border-[#D4AF37]/80 shadow-lg group-hover:border-[#FCE08F] transition-colors duration-500">
                <img src={COUPLE_DETAILS.bride.image} alt={COUPLE_DETAILS.bride.name} referrerPolicy="no-referrer" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"/>
                <div className="absolute inset-0 bg-gradient-to-t from-[#100307] via-transparent to-transparent opacity-90"/>
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="font-hindi text-sm text-[#FCE08F] uppercase tracking-wider block font-bold">
                    वधू (Bride)
                  </span>
                  <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white drop-shadow">
                    {COUPLE_DETAILS.bride.name}
                  </h3>
                </div>
              </div>

              <div className="text-center space-y-3 font-sans-clean">
                <p className="font-serif-royal text-base text-[#FCE08F] italic font-bold">
                  {COUPLE_DETAILS.bride.family}
                </p>
                <p className="text-sm text-[#FDFBF7]/90 leading-relaxed font-normal">
                  "{COUPLE_DETAILS.bride.bio}"
                </p>
              </div>
            </RoyalCard>
          </div>

        </motion.div>

      </motion.div>
    </section>);
};
