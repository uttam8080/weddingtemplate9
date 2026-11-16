import React, { useState, useEffect } from "react";
import { Menu, X, Mail } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
export const Navbar = ({ onOpenEnvelope, isPlayingMusic, onToggleMusic, }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            // Section spy
            const sections = [
                "home",
                "couple",
                "story",
                "events",
                "gallery",
                "venue",
            ];
            const scrollPos = window.scrollY + 200;
            for (const sec of sections) {
                const el = document.getElementById(sec);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    if (scrollPos >= top && scrollPos < top + height) {
                        setActiveSection(sec);
                        break;
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const navLinks = [
        { label: "Home", href: "#home" },
        { label: "Couple", href: "#couple" },
        { label: "Our Story", href: "#story" },
        { label: "Events", href: "#events" },
        { label: "Gallery", href: "#gallery" },
        { label: "Venue", href: "#venue" },
    ];
    const handleNavClick = (e, href) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setMobileMenuOpen(false);
        }
    };
    return (<header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${isScrolled
            ? "bg-[#8B0000]/95 backdrop-blur-md border-b-2 border-[#D4AF37] py-3 shadow-2xl"
            : "bg-gradient-to-b from-[#8B0000]/85 via-[#8B0000]/40 to-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8860B] p-0.5 flex items-center justify-center shadow-lg border border-[#FCE08F]">
            <span className="font-hindi text-base text-[#8B0000] font-bold">
              ॐ
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-cinzel text-lg sm:text-xl font-bold text-[#FCE08F] tracking-wide leading-none group-hover:text-white transition-colors">
              Raja & Ananya
            </span>
            <span className="font-hindi text-[10px] text-[#D4AF37] tracking-widest mt-0.5 font-bold">
              शुभ विवाह
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (<a key={link.label} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className={`font-serif-royal text-base font-semibold tracking-wider transition-all duration-300 relative py-1 ${isActive
                    ? "text-[#FCE08f]"
                    : "text-[#FDFBF7]/90 hover:text-[#FCE08f]"}`}>
                {link.label}
                {isActive && (<motion.div layoutId="activeNavIndicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D4AF37] via-[#FCE08F] to-[#D4AF37]"/>)}
              </a>);
        })}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {/* Open Envelope Button */}
          <button onClick={onOpenEnvelope} className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37] bg-[#5C000B] hover:bg-[#8B0000] text-[#FCE08F] font-sans-clean text-xs font-semibold tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 shadow-md" title="View Invitation Card Envelope">
            <Mail className="w-3.5 h-3.5 text-[#D4AF37]"/>
            <span>Open Card</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button onClick={onOpenEnvelope} className="p-2 rounded-full border border-[#D4AF37] bg-[#5C000B] text-[#FCE08F]" title="Open Envelope">
            <Mail className="w-4 h-4 text-[#D4AF37]"/>
          </button>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-lg text-[#FCE08F] hover:bg-[#5C000B] transition-colors" aria-label="Toggle navigation menu">
            {mobileMenuOpen ? (<X className="w-6 h-6"/>) : (<Menu className="w-6 h-6"/>)}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="lg:hidden bg-[#8B0000] border-b-2 border-[#D4AF37] backdrop-blur-xl overflow-hidden">
            <div className="px-6 py-6 space-y-4 flex flex-col items-center text-center">
              <span className="font-hindi text-xl text-[#FCE08F]">
                ॥ शुभ विवाह ॥
              </span>
              {navLinks.map((link) => (<a key={link.label} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="font-serif-royal text-lg text-[#FDFBF7] hover:text-[#FCE08F] font-semibold py-1 block w-full">
                  {link.label}
                </a>))}

              <div className="pt-2 flex flex-col gap-3 w-full max-w-xs">
                <button onClick={() => {
                onOpenEnvelope();
                setMobileMenuOpen(false);
            }} className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full border border-[#D4AF37] bg-[#5C000B] text-[#FCE08F] font-sans-clean text-sm font-semibold">
                  <Mail className="w-4 h-4 text-[#D4AF37]"/>
                  <span>View Invitation Card</span>
                </button>

                <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="w-full py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#5C000B] font-cinzel text-sm font-bold tracking-wider uppercase text-center border border-[#FCE08F]/50">
                  Back to Top
                </a>
              </div>
            </div>
          </motion.div>)}
      </AnimatePresence>
    </header>);
};
