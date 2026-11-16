import React from 'react';
import { motion } from 'motion/react';
export const RoyalCard = ({ children, className = '', delay = 0, hoverEffect = true, ...props }) => {
    return (<motion.div initial={{ opacity: 0, y: 40, scale: 0.96 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }} whileHover={hoverEffect ? { y: -8, scale: 1.01 } : undefined} className={`relative group rounded-3xl p-[1.5px] bg-gradient-to-b from-[#D4AF37]/90 via-[#FCE08F]/50 to-[#996515]/80 shadow-[0_20px_50px_rgba(0,0,0,0.85),_0_0_25px_rgba(212,175,55,0.18)] transition-all duration-500 hover:shadow-[0_25px_60px_rgba(0,0,0,0.9),_0_0_35px_rgba(212,175,55,0.35)] ${className}`} {...props}>
      {/* Inner Container with Deep Glassmorphism Backdrop */}
      <div className="relative h-full w-full bg-gradient-to-br from-[#1a0510]/85 via-[#0b0f26]/85 to-[#070b19]/90 backdrop-blur-2xl rounded-[22px] p-6 sm:p-8 overflow-hidden border border-[#D4AF37]/30">
        
        {/* Glass Specular Top Highlight */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#FCE08F]/50 to-transparent pointer-events-none"/>

        {/* Fine Gold Inner Filament Border */}
        <div className="absolute inset-2 sm:inset-3 border border-[#D4AF37]/30 rounded-[17px] pointer-events-none group-hover:border-[#FCE08F]/60 transition-colors duration-500 shadow-[inset_0_0_20px_rgba(212,175,55,0.08)]"/>

        {/* Four Royal Corner Accents */}
        {/* Top-Left Corner */}
        <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 w-4 h-4 pointer-events-none text-[#D4AF37] group-hover:text-[#FCE08F] transition-colors duration-500">
          <svg viewBox="0 0 20 20" fill="none" className="w-full h-full stroke-current stroke-[1.5]">
            <path d="M1 10 V3 A2 2 0 0 1 3 1 H10"/>
            <circle cx="3" cy="3" r="1.5" fill="currentColor"/>
          </svg>
        </div>

        {/* Top-Right Corner */}
        <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 w-4 h-4 pointer-events-none text-[#D4AF37] group-hover:text-[#FCE08F] transition-colors duration-500">
          <svg viewBox="0 0 20 20" fill="none" className="w-full h-full stroke-current stroke-[1.5]">
            <path d="M19 10 V3 A2 2 0 0 0 17 1 H10"/>
            <circle cx="17" cy="3" r="1.5" fill="currentColor"/>
          </svg>
        </div>

        {/* Bottom-Left Corner */}
        <div className="absolute bottom-3.5 left-3.5 sm:bottom-4 sm:left-4 w-4 h-4 pointer-events-none text-[#D4AF37] group-hover:text-[#FCE08F] transition-colors duration-500">
          <svg viewBox="0 0 20 20" fill="none" className="w-full h-full stroke-current stroke-[1.5]">
            <path d="M1 10 V17 A2 2 0 0 0 3 19 H10"/>
            <circle cx="3" cy="17" r="1.5" fill="currentColor"/>
          </svg>
        </div>

        {/* Bottom-Right Corner */}
        <div className="absolute bottom-3.5 right-3.5 sm:bottom-4 sm:right-4 w-4 h-4 pointer-events-none text-[#D4AF37] group-hover:text-[#FCE08F] transition-colors duration-500">
          <svg viewBox="0 0 20 20" fill="none" className="w-full h-full stroke-current stroke-[1.5]">
            <path d="M19 10 V17 A2 2 0 0 1 17 19 H10"/>
            <circle cx="17" cy="17" r="1.5" fill="currentColor"/>
          </svg>
        </div>

        {/* Ambient Radial Glass Shimmer */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#FCE08F]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none"/>

        {/* Card Content */}
        <div className="relative z-10 h-full">{children}</div>
      </div>
    </motion.div>);
};
