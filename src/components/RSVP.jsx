import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { WEDDING_EVENTS } from '../data/weddingData';
import { Send, CheckCircle2, Heart, User, Mail, Phone, MessageSquare, Utensils } from 'lucide-react';
import { NightStringLights } from './NightStringLights';
import { RoyalCard } from './RoyalCard';
export const RSVP = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        attendance: 'yes',
        guestsCount: 1,
        eventsAttending: ['wedding', 'sangeet', 'reception'],
        dietaryPreference: 'Pure Vegetarian (Jain options available)',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const handleEventToggle = (eventId) => {
        setFormData(prev => {
            const exists = prev.eventsAttending.includes(eventId);
            return {
                ...prev,
                eventsAttending: exists
                    ? prev.eventsAttending.filter(id => id !== eventId)
                    : [...prev.eventsAttending, eventId]
            };
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.fullName.trim())
            return;
        setSubmitted(true);
        // Confetti burst on RSVP submission
        confetti({
            particleCount: 120,
            spread: 90,
            origin: { y: 0.6 },
            colors: ['#D4AF37', '#FCE08F', '#8B0000', '#B8860B', '#FDFBF7']
        });
    };
    const handleReset = () => {
        setSubmitted(false);
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            attendance: 'yes',
            guestsCount: 1,
            eventsAttending: ['wedding', 'sangeet', 'reception'],
            dietaryPreference: 'Pure Vegetarian',
            message: ''
        });
    };
    return (<section id="rsvp" className="relative py-24 px-4 text-[#FDFBF7] overflow-hidden">
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
        }} className="max-w-3xl mx-auto relative z-10">
        
        {/* Title */}
        <motion.div variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
            }
        }} className="text-center space-y-3 mb-12">
          <span className="font-hindi text-lg sm:text-xl text-[#FCE08F] font-bold tracking-widest block uppercase">
            ॥ उपस्थिति स्वीकृति ॥
          </span>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-[#FCE08F] tracking-wide">
            Confirm Your Presence (RSVP)
          </h2>
          <div className="flex items-center justify-center gap-3 pt-1">
            <span className="h-[1px] w-12 bg-[#D4AF37]"/>
            <Heart className="w-4 h-4 fill-[#FCE08F] text-[#FCE08F]"/>
            <span className="h-[1px] w-12 bg-[#D4AF37]"/>
          </div>
          <p className="font-serif-royal italic text-lg sm:text-2xl text-[#FDFBF7]/90 max-w-lg mx-auto">
            Your presence and warm blessings will double the joy of our wedding celebration.
          </p>
        </motion.div>

        {/* RSVP Card Form */}
        <RoyalCard delay={0.1} hoverEffect={false}>
          <AnimatePresence mode="wait">
            {!submitted ? (<motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit} className="space-y-6 font-sans-clean">
                {/* Attendance Radio Pills */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-[#FCE08F] uppercase tracking-wider">
                    Will you be joining us?
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button type="button" onClick={() => setFormData({ ...formData, attendance: 'yes' })} className={`p-3.5 rounded-2xl border flex items-center justify-center gap-2 font-serif-royal font-bold text-sm sm:text-base transition-all ${formData.attendance === 'yes'
                ? 'bg-[#8B0000] text-[#FDFBF7] border-[#D4AF37] shadow-md scale-[1.02]'
                : 'bg-[#080d1a]/80 text-[#FDFBF7]/80 border-[#D4AF37]/50 hover:border-[#D4AF37]'}`}>
                      <span>Joyfully Accepts</span>
                    </button>

                    <button type="button" onClick={() => setFormData({ ...formData, attendance: 'no' })} className={`p-3.5 rounded-2xl border flex items-center justify-center gap-2 font-serif-royal font-bold text-sm sm:text-base transition-all ${formData.attendance === 'no'
                ? 'bg-[#8B0000] text-[#FDFBF7] border-[#D4AF37] shadow-md'
                : 'bg-[#080d1a]/80 text-[#FDFBF7]/80 border-[#D4AF37]/50 hover:border-[#D4AF37]'}`}>
                      <span>Regretfully Declines</span>
                    </button>
                  </div>
                </div>

                {/* Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-[#FCE08F] uppercase tracking-wider">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#FCE08F]"/>
                    <input type="text" required placeholder="e.g. Vikramaditya Singh" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#080d1a]/90 border border-[#D4AF37]/60 text-[#FDFBF7] placeholder-[#FDFBF7]/50 focus:outline-none focus:border-[#FCE08F] text-sm font-medium"/>
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-[#FCE08F] uppercase tracking-wider">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#FCE08F]"/>
                      <input type="email" placeholder="yourname@gmail.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#080d1a]/90 border border-[#D4AF37]/60 text-[#FDFBF7] placeholder-[#FDFBF7]/50 focus:outline-none focus:border-[#FCE08F] text-sm font-medium"/>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-[#FCE08F] uppercase tracking-wider">
                      Phone / WhatsApp Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#FCE08F]"/>
                      <input type="tel" placeholder="+91 98765 43210" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#080d1a]/90 border border-[#D4AF37]/60 text-[#FDFBF7] placeholder-[#FDFBF7]/50 focus:outline-none focus:border-[#FCE08F] text-sm font-medium"/>
                    </div>
                  </div>
                </div>

                {/* Guest Count */}
                {formData.attendance === 'yes' && (<>
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-[#FCE08F] uppercase tracking-wider">
                        Number of Attending Guests
                      </label>
                      <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((num) => (<button type="button" key={num} onClick={() => setFormData({ ...formData, guestsCount: num })} className={`flex-1 py-2.5 rounded-xl border font-bold text-sm transition-all ${formData.guestsCount === num
                        ? 'bg-[#8B0000] text-[#FDFBF7] border-[#D4AF37]'
                        : 'bg-[#080d1a]/80 text-[#FDFBF7]/80 border-[#D4AF37]/50 hover:border-[#D4AF37]'}`}>
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </button>))}
                      </div>
                    </div>

                    {/* Events Selection Checklist */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-[#FCE08F] uppercase tracking-wider">
                        Events You Will Attend
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {WEDDING_EVENTS.map((evt) => {
                    const isSelected = formData.eventsAttending.includes(evt.id);
                    return (<button type="button" key={evt.id} onClick={() => handleEventToggle(evt.id)} className={`p-3 rounded-xl border text-left flex items-center justify-between text-xs sm:text-sm font-semibold transition-all ${isSelected
                            ? 'bg-[#8B0000] text-[#FDFBF7] border-[#D4AF37]'
                            : 'bg-[#080d1a]/80 text-[#FDFBF7]/80 border-[#D4AF37]/50 hover:border-[#D4AF37]'}`}>
                              <span>{evt.title}</span>
                              <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${isSelected ? 'bg-[#D4AF37] border-[#FDFBF7]' : 'border-[#D4AF37]'}`}>
                                {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#8B0000]"/>}
                              </div>
                            </button>);
                })}
                      </div>
                    </div>

                    {/* Dietary preference */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-[#FCE08F] uppercase tracking-wider">
                        Dietary Preference
                      </label>
                      <div className="relative">
                        <Utensils className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#FCE08F]"/>
                        <select value={formData.dietaryPreference} onChange={(e) => setFormData({ ...formData, dietaryPreference: e.target.value })} className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#080d1a]/90 border border-[#D4AF37]/60 text-[#FDFBF7] focus:outline-none focus:border-[#FCE08F] text-sm font-medium">
                          <option value="Pure Vegetarian (Jain options available)" className="bg-[#080d1a] text-[#FDFBF7]">Pure Vegetarian (Jain options available)</option>
                          <option value="Standard Royal Buffet (Veg & Non-Veg)" className="bg-[#080d1a] text-[#FDFBF7]">Standard Royal Buffet (Veg & Non-Veg)</option>
                          <option value="Vegan / Gluten-Free" className="bg-[#080d1a] text-[#FDFBF7]">Vegan / Gluten-Free</option>
                        </select>
                      </div>
                    </div>
                  </>)}

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-[#FCE08F] uppercase tracking-wider">
                    Heartfelt Message / Blessings for the Couple
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3.5 top-3 w-4 h-4 text-[#FCE08F]"/>
                    <textarea rows={3} placeholder="Share your warm wishes and blessing prayers..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#080d1a]/90 border border-[#D4AF37]/60 text-[#FDFBF7] placeholder-[#FDFBF7]/50 focus:outline-none focus:border-[#FCE08F] text-sm font-medium"/>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button type="submit" className="w-full py-4 rounded-2xl bg-[#8B0000] hover:bg-[#A00000] text-[#FDFBF7] font-cinzel font-bold text-sm sm:text-base tracking-wider uppercase shadow-xl hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-3 border border-[#D4AF37]">
                    <Send className="w-5 h-5 text-[#FCE08F]"/>
                    <span>Send Royal RSVP Blessing</span>
                  </button>
                </div>

              </motion.form>) : (
        /* Success Overlay Card */
        <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10 px-4 space-y-6">
                <div className="w-20 h-20 rounded-full bg-[#8B0000] p-1 shadow-xl mx-auto flex items-center justify-center border-2 border-[#D4AF37]">
                  <div className="w-full h-full rounded-full bg-[#080d1a] flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-[#FCE08F]"/>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="font-hindi text-2xl text-[#FCE08F] font-bold block uppercase">
                    ॥ धन्यवाद एवं सादर आमंत्रण ॥
                  </span>
                  <h3 className="font-cinzel text-3xl font-bold text-[#FCE08F]">
                    RSVP Received with Joy!
                  </h3>
                  <p className="font-serif-royal italic text-xl text-[#FDFBF7]">
                    Thank you, <span className="text-[#FCE08F] font-bold">{formData.fullName}</span>!
                  </p>
                </div>

                <div className="bg-[#080d1a]/90 p-6 rounded-2xl border border-[#D4AF37]/60 max-w-md mx-auto text-sm text-[#FDFBF7] space-y-2 text-left font-sans-clean">
                  <p><strong className="text-[#FCE08F]">Attendance:</strong> {formData.attendance === 'yes' ? 'Joyfully Attending' : 'Regretfully Declining'}</p>
                  {formData.attendance === 'yes' && (<>
                      <p><strong className="text-[#FCE08F]">Guests Reserved:</strong> {formData.guestsCount} Person(s)</p>
                      <p><strong className="text-[#FCE08F]">Dietary Preference:</strong> {formData.dietaryPreference}</p>
                    </>)}
                  {formData.message && (<p className="italic text-[#FCE08F] pt-2 border-t border-[#D4AF37]/40 font-medium">"{formData.message}"</p>)}
                </div>

                <button onClick={handleReset} className="px-6 py-2.5 rounded-full border-2 border-[#D4AF37] bg-[#8B0000] text-[#FDFBF7] hover:bg-[#A00000] text-xs uppercase font-bold tracking-wider font-sans-clean shadow">
                  Edit or Submit Another RSVP
                </button>
              </motion.div>)}
          </AnimatePresence>

        </RoyalCard>

      </motion.div>
    </section>);
};
