import React from 'react';
import { motion } from 'motion/react';
import { OUR_STORY } from '../data/weddingData';
import { Sparkles, Heart } from 'lucide-react';
import { NightStringLights } from './NightStringLights';
import { RoyalCard } from './RoyalCard';
export const Story = () => {
    return (<section id="story" className="relative py-24 px-4 text-[#FDFBF7] overflow-hidden">
      {/* Background String Lights Image */}
      <NightStringLights />
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]"/>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={{
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.1,
                },
            },
        }} className="max-w-5xl mx-auto relative z-10 section-panel px-4 py-10 sm:px-6 sm:py-12">
        
        {/* Header with scroll animation */}
        <motion.div variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
            }
        }} className="text-center space-y-3 mb-16 sm:mb-20">
          <span className="font-hindi text-lg sm:text-xl text-[#FCE08F] font-bold tracking-widest block uppercase">
            ॥ हमारी प्रेम कहानी ॥
          </span>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-[#FCE08F] tracking-wide">
            Our Wedding Story
          </h2>
          <div className="flex items-center justify-center gap-3 pt-1">
            <span className="h-[1px] w-12 bg-[#D4AF37]"/>
            <Heart className="w-4 h-4 fill-[#FCE08F] text-[#FCE08F]"/>
            <span className="h-[1px] w-12 bg-[#D4AF37]"/>
          </div>
          <p className="font-serif-royal italic text-lg sm:text-2xl text-[#FDFBF7]/90 max-w-xl mx-auto">
            From a chance glance under Jaipuri arches to swearing seven vows by Lake Pichola.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Central Vertical Golden Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#FCE08F] to-[#D4AF37] transform -translate-x-1/2"/>

          <div className="space-y-12 sm:space-y-16">
            {OUR_STORY.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (<div key={item.id} className={`relative flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Content Box with RoyalCard */}
                  <div className="w-full md:w-1/2">
                    <RoyalCard delay={0.1 * idx}>
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3.5 py-1 rounded-full bg-[#8B0000] text-[#FDFBF7] font-cinzel text-xs font-bold tracking-wider border border-[#D4AF37]">
                          {item.year}
                        </span>
                        <Sparkles className="w-4 h-4 text-[#D4AF37]"/>
                      </div>

                      <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#FCE08F] mb-1">
                        {item.title}
                      </h3>
                      <p className="font-serif-royal italic text-base text-[#FCE08F]/80 font-bold mb-3">
                        {item.subtitle}
                      </p>
                      <p className="font-sans-clean text-sm text-[#FDFBF7]/90 leading-relaxed">
                        {item.description}
                      </p>
                    </RoyalCard>
                  </div>

                  {/* Center Node Badge */}
                  <motion.div initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 * idx }} className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8860B] p-1 shadow-xl shrink-0 border-2 border-[#FDFBF7]">
                    <div className="w-full h-full rounded-full bg-[#1c040b] flex items-center justify-center border border-[#D4AF37]">
                      <span className="font-hindi text-xs text-[#FCE08F] font-bold">
                        {idx + 1}
                      </span>
                    </div>
                  </motion.div>

                  {/* Image Box */}
                  <motion.div initial={{ opacity: 0, scale: 0.95, y: 30 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay: 0.2 * idx }} className="w-full md:w-1/2">
                    <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border-2 border-[#D4AF37] shadow-xl group">
                      <img src={item.image} alt={item.title} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#100307]/70 via-transparent to-transparent opacity-60"/>
                    </div>
                  </motion.div>

                </div>);
        })}
          </div>

        </div>

      </motion.div>
    </section>);
};
