import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { COUPLE_DETAILS } from '../data/weddingData';
import { Sparkles } from 'lucide-react';
import { NightStringLights } from './NightStringLights';
import { RoyalCard } from './RoyalCard';
export const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    useEffect(() => {
        const targetDate = new Date(COUPLE_DETAILS.weddingDate).getTime();
        const updateTimer = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;
            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000)
                });
            }
            else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };
        updateTimer();
        const interval = setInterval(updateTimer, 1000);
        return () => clearInterval(interval);
    }, []);
    const timeBlocks = [
        { label: 'Days', hindiLabel: 'दिन', value: timeLeft.days },
        { label: 'Hours', hindiLabel: 'घंटे', value: timeLeft.hours },
        { label: 'Minutes', hindiLabel: 'मिनट', value: timeLeft.minutes },
        { label: 'Seconds', hindiLabel: 'सेकंड', value: timeLeft.seconds }
    ];
    return (<section className="relative py-20 px-4 text-[#FDFBF7] overflow-hidden">
      {/* Background String Lights Image */}
      <NightStringLights />

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={{
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.1,
                },
            },
        }} className="max-w-5xl mx-auto relative z-10 section-panel px-4 py-10 sm:px-6 sm:py-12 text-center space-y-8">
        
        {/* Header with Scroll Animation */}
        <motion.div variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
            }
        }} className="space-y-2">
          <span className="font-hindi text-lg sm:text-xl text-[#FCE08F] font-bold tracking-widest block uppercase">
            ॥ शुभ मुहूर्त ॥
          </span>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-[#FCE08F] tracking-wide">
            Counting Down to the Muhurat
          </h2>
          <p className="font-serif-royal italic text-lg sm:text-2xl text-[#FDFBF7]/90 max-w-lg mx-auto">
            {COUPLE_DETAILS.formattedDate} — {COUPLE_DETAILS.muhuratTime}
          </p>
        </motion.div>

        {/* Countdown Blocks - Royal Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {timeBlocks.map((block, i) => (<RoyalCard key={block.label} delay={i * 0.1}>
              <div className="text-center py-2">
                <div className="font-cinzel text-4xl sm:text-6xl font-bold text-[#FCE08F] drop-shadow-md">
                  {String(block.value).padStart(2, '0')}
                </div>
                <div className="mt-2 space-y-0.5">
                  <span className="font-hindi text-xs text-[#FCE08F] block uppercase tracking-wider font-bold">
                    {block.hindiLabel}
                  </span>
                  <span className="font-serif-royal text-xs sm:text-sm text-[#FDFBF7] uppercase tracking-widest font-medium">
                    {block.label}
                  </span>
                </div>
              </div>
            </RoyalCard>))}
        </div>

        {/* Blessing Mantra */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="pt-4 flex items-center justify-center gap-2 text-base text-[#FCE08F] font-serif-royal italic font-bold">
          <Sparkles className="w-4 h-4 text-[#D4AF37]"/>
          <span>"सप्तपदी भव: — May seven steps unite us forever in love"</span>
          <Sparkles className="w-4 h-4 text-[#D4AF37]"/>
        </motion.div>

      </motion.div>
    </section>);
};
