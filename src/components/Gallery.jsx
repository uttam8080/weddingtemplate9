import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_IMAGES } from '../data/weddingData';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { NightStringLights } from './NightStringLights';
const GALLERY_TABS = [
    { id: 'all', label: 'All Photos', hindi: 'सभी चित्र' },
    { id: 'prewedding', label: 'Pre-Wedding', hindi: 'प्री-वेडिंग' },
    { id: 'rituals', label: 'Rituals & Functions', hindi: 'संस्कार एवं कार्यक्रम' },
    { id: 'decor', label: 'Decor & Mandap', hindi: 'सजावट एवं मंडप' },
];
const CATEGORY_HINDI = {
    prewedding: 'प्री-वेडिंग',
    rituals: 'पवित्र संस्कार',
    decor: 'राजसी सजावट',
};
const CornerOrnament = ({ className = '' }) => (<svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={`w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-current stroke-[1.5] text-[#D4AF37] group-hover:text-[#FCE08F] transition-colors duration-500 ${className}`}>
    <path d="M1 10 V3 A2 2 0 0 1 3 1 H10"/>
    <circle cx="3" cy="3" r="1.5" fill="currentColor"/>
  </svg>);
const GalleryPhotoBox = ({ img, index, onOpen }) => {
    return (<motion.article layout initial={{ opacity: 0, y: 36, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: 0.94 }} transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }} whileHover={{ y: -6 }} className="group relative">
      <button type="button" onClick={onOpen} aria-label={`View ${img.title}`} className="relative w-full text-left rounded-[1.75rem] p-[2px] bg-gradient-to-br from-[#FCE08F]/90 via-[#D4AF37]/70 to-[#7a5518]/90 shadow-[0_16px_40px_rgba(0,0,0,0.78),0_0_18px_rgba(212,175,55,0.12)] transition-all duration-500 hover:shadow-[0_22px_52px_rgba(0,0,0,0.88),0_0_32px_rgba(212,175,55,0.28)] hover:from-[#FCE08F] hover:via-[#FCE08F]/90 hover:to-[#D4AF37] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FCE08F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070b19]">
        <div className="relative rounded-[calc(1.75rem-2px)] overflow-hidden bg-gradient-to-br from-[#8B0000] via-[#5C0000] to-[#3a0008] p-1 sm:p-1.5">
          <div className="relative w-full overflow-hidden rounded-[1.25rem] border border-[#D4AF37]/35 group-hover:border-[#FCE08F]/70 transition-colors duration-500 aspect-[3/4]">
            <img src={img.imageUrl} alt={img.title} referrerPolicy="no-referrer" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-focus-visible:scale-105"/>

            <div className="absolute inset-0 bg-gradient-to-t from-[#100307]/92 via-[#100307]/25 to-[#100307]/10 pointer-events-none"/>
            <div className="absolute inset-0 bg-[#8B0000]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"/>

            <div className="absolute top-2.5 left-2.5 pointer-events-none">
              <CornerOrnament />
            </div>
            <div className="absolute top-2.5 right-2.5 pointer-events-none rotate-90">
              <CornerOrnament />
            </div>
            <div className="absolute bottom-2.5 left-2.5 pointer-events-none -rotate-90">
              <CornerOrnament />
            </div>
            <div className="absolute bottom-2.5 right-2.5 pointer-events-none rotate-180">
              <CornerOrnament />
            </div>

            <div className="absolute inset-2 sm:inset-2.5 border border-[#FCE08F]/15 rounded-[1rem] pointer-events-none group-hover:border-[#FCE08F]/35 transition-colors duration-500"/>

            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1c040b]/88 backdrop-blur-md border border-[#D4AF37]/60 shadow-lg">
              <ImageIcon className="w-3 h-3 text-[#D4AF37] shrink-0"/>
              <span className="font-hindi text-[9px] sm:text-[10px] text-[#FCE08F] font-bold uppercase tracking-wide">
                {CATEGORY_HINDI[img.category]}
              </span>
            </div>

            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 min-w-[2rem] h-8 px-2 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#996515] border border-[#FCE08F]/50 shadow-lg flex items-center justify-center">
              <span className="font-cinzel text-[11px] sm:text-xs font-bold text-[#1c040b] tabular-nums">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
              <div className="w-14 h-14 rounded-full bg-[#8B0000]/90 border-2 border-[#FCE08F] flex items-center justify-center shadow-[0_0_30px_rgba(252,224,143,0.35)] scale-75 group-hover:scale-100 transition-transform duration-300">
                <Maximize2 className="w-5 h-5 text-[#FCE08F]"/>
              </div>
            </div>

            <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 pointer-events-none">
              <div className="rounded-2xl bg-[#100307]/75 backdrop-blur-md border border-[#D4AF37]/30 px-3 py-2.5 sm:px-4 sm:py-3 group-hover:border-[#FCE08F]/50 transition-colors duration-500">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#8B0000]/80 border border-[#D4AF37]/40 font-hindi text-[9px] text-[#FCE08F] font-bold uppercase tracking-[0.18em] mb-1.5">
                  <span className="text-[#D4AF37] text-[7px]" aria-hidden="true">✦</span>
                  Shubh Vivaah
                </span>
                <h4 className="font-cinzel text-sm sm:text-base font-bold text-white tracking-wide leading-snug line-clamp-2">
                  {img.title}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </button>
    </motion.article>);
};
export const Gallery = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const filteredImages = activeTab === 'all'
        ? GALLERY_IMAGES
        : GALLERY_IMAGES.filter(img => img.category === activeTab);
    const handlePrev = () => {
        if (selectedImageIndex === null)
            return;
        setSelectedImageIndex(selectedImageIndex === 0 ? filteredImages.length - 1 : selectedImageIndex - 1);
    };
    const handleNext = () => {
        if (selectedImageIndex === null)
            return;
        setSelectedImageIndex(selectedImageIndex === filteredImages.length - 1 ? 0 : selectedImageIndex + 1);
    };
    return (<section id="gallery" className="relative py-24 px-4 text-[#FDFBF7] overflow-hidden">
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
        }} className="max-w-7xl mx-auto relative z-10 section-panel px-4 py-10 sm:px-6 sm:py-12">
        
        {/* Title */}
        <motion.div variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
            }
        }} className="text-center space-y-3 mb-12">
          <span className="inline-flex items-center justify-center gap-2.5 px-5 py-1.5 rounded-full bg-[#1c040b]/70 border border-[#D4AF37]/45 backdrop-blur-sm font-hindi text-sm sm:text-base text-[#FCE08F] font-bold tracking-[0.18em] uppercase shadow-[0_0_20px_rgba(212,175,55,0.15)]">
            <span className="text-[#D4AF37] text-[10px] sm:text-xs leading-none" aria-hidden="true">✦</span>
            <span>॥ चित्र वीथिका ॥</span>
            <span className="text-[#D4AF37] text-[10px] sm:text-xs leading-none" aria-hidden="true">✦</span>
          </span>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-wide">
            <span className="text-gold-gradient">Royal</span>{' '}
            <span className="text-[#FCE08F]">Photo Gallery</span>
          </h2>
          <div className="flex items-center justify-center gap-3 pt-1">
            <span className="h-[1px] w-14 sm:w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#FCE08F]"/>
            <Sparkles className="w-4 h-4 text-[#D4AF37]"/>
            <span className="h-[1px] w-14 sm:w-20 bg-gradient-to-l from-transparent via-[#D4AF37] to-[#FCE08F]"/>
          </div>
          <p className="font-serif-royal italic text-lg sm:text-2xl text-[#FDFBF7]/90 max-w-xl mx-auto">
            <span className="text-[#FCE08F]/80 not-italic font-sans-clean text-xs sm:text-sm uppercase tracking-[0.25em] block mb-2 font-semibold">
              Captured Memories
            </span>
            Glimpses of vibrant colors, traditional attire, and unforgettable celebration moments.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12">
          {GALLERY_TABS.map((tab) => (<button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-5 py-2.5 rounded-full text-center transition-all duration-300 ${activeTab === tab.id
                ? 'bg-gradient-to-r from-[#8B0000] to-[#5C0000] text-[#FDFBF7] shadow-lg scale-105 border border-[#D4AF37]'
                : 'bg-[#1c040b]/80 backdrop-blur-md text-[#FCE08F] hover:bg-[#8B0000] hover:text-[#FDFBF7] border border-[#D4AF37]/50'}`}>
              <span className="font-hindi text-[10px] sm:text-xs block uppercase tracking-wider font-bold opacity-90 leading-tight">
                {tab.hindi}
              </span>
              <span className="font-serif-royal text-sm sm:text-base font-bold tracking-wider block mt-0.5">
                {tab.label}
              </span>
            </button>))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, idx) => (<GalleryPhotoBox key={img.id} img={img} index={idx} onOpen={() => setSelectedImageIndex(idx)}/>))}
          </AnimatePresence>
        </motion.div>

      </motion.div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && filteredImages[selectedImageIndex] && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-[#080d1a]/95 backdrop-blur-2xl flex items-center justify-center p-4">
            {/* Close button */}
            <button onClick={() => setSelectedImageIndex(null)} className="absolute top-6 right-6 p-3 rounded-full bg-[#8B0000] text-[#FCE08F] hover:scale-110 transition-transform border border-[#D4AF37]">
              <X className="w-6 h-6"/>
            </button>

            {/* Prev button */}
            <button onClick={handlePrev} className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#8B0000]/90 text-[#FCE08F] hover:scale-110 transition-transform border border-[#D4AF37]">
              <ChevronLeft className="w-6 h-6"/>
            </button>

            {/* Next button */}
            <button onClick={handleNext} className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#8B0000]/90 text-[#FCE08F] hover:scale-110 transition-transform border border-[#D4AF37]">
              <ChevronRight className="w-6 h-6"/>
            </button>

            {/* Lightbox Image Container */}
            <motion.div initial={{ opacity: 0, y: 24, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.96 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center text-center">
              <div className="relative rounded-[1.5rem] p-[2px] bg-gradient-to-br from-[#FCE08F] via-[#D4AF37] to-[#996515] shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_40px_rgba(212,175,55,0.2)]">
                <div className="rounded-[calc(1.5rem-2px)] bg-[#8B0000] p-1.5 sm:p-2">
                  <img src={filteredImages[selectedImageIndex].imageUrl} alt={filteredImages[selectedImageIndex].title} referrerPolicy="no-referrer" className="max-w-full max-h-[70vh] sm:max-h-[72vh] object-contain rounded-xl border border-[#D4AF37]/50"/>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c040b]/80 border border-[#D4AF37]/50 font-hindi text-[10px] sm:text-xs text-[#FCE08F] font-bold uppercase tracking-[0.2em]">
                  <span className="text-[#D4AF37]" aria-hidden="true">✦</span>
                  {CATEGORY_HINDI[filteredImages[selectedImageIndex].category]}
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#FCE08F] tracking-wide">
                  {filteredImages[selectedImageIndex].title}
                </h3>
                <p className="font-serif-royal text-xs sm:text-sm text-[#FDFBF7]/90 flex items-center justify-center gap-1.5 flex-wrap">
                  <span className="font-hindi text-[10px] text-[#D4AF37] uppercase tracking-widest font-bold">
                    चित्र
                  </span>
                  <span className="text-[#FCE08F] font-bold tabular-nums">
                    {selectedImageIndex + 1}
                  </span>
                  <span className="text-[#FDFBF7]/50 italic">of</span>
                  <span className="text-[#FCE08F] font-bold tabular-nums">
                    {filteredImages.length}
                  </span>
                  <span className="font-hindi text-[10px] text-[#D4AF37]/80 uppercase tracking-widest font-bold">
                    स्मृतियाँ
                  </span>
                </p>
              </div>
            </motion.div>
          </motion.div>)}
      </AnimatePresence>
    </section>);
};
