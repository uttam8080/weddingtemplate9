import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "motion/react";
import { Sparkles, MapPin, Clock } from "lucide-react";
import confetti from "canvas-confetti";
import { COUPLE_DETAILS } from "../data/weddingData";
import { RoyalCard } from "./RoyalCard";
const SCRATCH_REVEAL_THRESHOLD = 10;
export const ScratchReveal = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const [isScratched, setIsScratched] = useState(false);
    const [isDrawing, setIsDrawing] = useState(false);
    const lastPosRef = useRef(null);
    const isScratchedRef = useRef(false);
    const hasScratchedRef = useRef(false);
    const revealFully = useCallback(() => {
        if (!isScratchedRef.current) {
            setIsScratched(true);
            isScratchedRef.current = true;
            triggerCelebration();
        }
    }, []);
    // Sync ref with state
    useEffect(() => {
        isScratchedRef.current = isScratched;
    }, [isScratched]);
    // Celebrate with confetti
    const triggerCelebration = () => {
        confetti({
            particleCount: 90,
            spread: 80,
            origin: { y: 0.6 },
            colors: ["#D4AF37", "#FCE08F", "#8B0000", "#FFFFFF", "#FFD700"],
        });
    };
    // Initialize and draw the gold foil texture on canvas
    const initCanvas = useCallback(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container)
            return;
        const ctx = canvas.getContext("2d");
        if (!ctx)
            return;
        const width = container.clientWidth;
        const height = container.clientHeight;
        // Set display and internal resolution
        canvas.width = width;
        canvas.height = height;
        // Reset composite operation
        ctx.globalCompositeOperation = "source-over";
        // Create rich gold metallic gradient
        const grad = ctx.createLinearGradient(0, 0, width, height);
        grad.addColorStop(0, "#B8860B");
        grad.addColorStop(0.25, "#FFD700");
        grad.addColorStop(0.5, "#FFF8DC");
        grad.addColorStop(0.75, "#DAA520");
        grad.addColorStop(1, "#8B6508");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
        // Overlay fine glitter/dust pattern
        for (let i = 0; i < 400; i++) {
            const x = Math.random() * width;
            const y = Math.random() * height;
            const size = Math.random() * 2 + 0.5;
            ctx.fillStyle = Math.random() > 0.5 ? "#FFFFFF" : "#FCE08F";
            ctx.globalAlpha = Math.random() * 0.7 + 0.3;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.globalAlpha = 1.0;
        // Royal border frame on canvas
        ctx.strokeStyle = "#8B0000";
        ctx.lineWidth = 4;
        ctx.strokeRect(12, 12, width - 24, height - 24);
        ctx.strokeStyle = "#DAA520";
        ctx.lineWidth = 1.5;
        ctx.strokeRect(18, 18, width - 36, height - 36);
        // Center Gold Foil Emblem / Text
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        // Hindi text
        ctx.fillStyle = "#4A0404";
        ctx.font = 'bold 22px "Rozha One", serif, sans-serif';
        ctx.fillText("॥ शुभ विवाह तिथि ॥", width / 2, height / 2 - 28);
        // Scratch instruction text
        ctx.fillStyle = "#2A0000";
        ctx.font = 'bold 15px "Cinzel", serif, sans-serif';
        ctx.fillText("✦ SCRATCH HERE TO REVEAL DATE ✦", width / 2, height / 2 + 10);
        ctx.fillStyle = "#6B1111";
        ctx.font = 'italic 12px "Cinzel", serif, sans-serif';
        ctx.fillText("(Swipe gently to reveal)", width / 2, height / 2 + 35);
        setIsScratched(false);
        isScratchedRef.current = false;
        hasScratchedRef.current = false;
    }, []);
    // Initialize canvas ONLY on mount or resize
    useEffect(() => {
        initCanvas();
        const handleResize = () => {
            if (!isScratchedRef.current) {
                initCanvas();
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [initCanvas]);
    // Calculate percentage of area scratched away
    const calculateScratchedArea = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas || isScratchedRef.current)
            return;
        const ctx = canvas.getContext("2d");
        if (!ctx)
            return;
        try {
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const pixels = imageData.data;
            let transparentPixels = 0;
            for (let i = 3; i < pixels.length; i += 4) {
                if (pixels[i] === 0) {
                    transparentPixels++;
                }
            }
            const totalPixels = pixels.length / 4;
            const percent = Math.round((transparentPixels / totalPixels) * 100);
            if (percent >= SCRATCH_REVEAL_THRESHOLD && !isScratchedRef.current) {
                setIsScratched(true);
                isScratchedRef.current = true;
                triggerCelebration();
            }
        }
        catch {
            // Ignore cross-origin / image data edge cases
        }
    }, []);
    // Smooth Scratch Stroke Logic with continuous path drawing
    const scratch = (clientX, clientY) => {
        const canvas = canvasRef.current;
        if (!canvas || isScratchedRef.current)
            return;
        const ctx = canvas.getContext("2d");
        if (!ctx)
            return;
        const rect = canvas.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        ctx.globalCompositeOperation = "destination-out";
        ctx.lineWidth = 55; // Large comfortable brush
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.beginPath();
        if (lastPosRef.current) {
            ctx.moveTo(lastPosRef.current.x, lastPosRef.current.y);
            ctx.lineTo(x, y);
            ctx.stroke();
        }
        else {
            ctx.arc(x, y, 28, 0, Math.PI * 2);
            ctx.fill();
        }
        lastPosRef.current = { x, y };
        hasScratchedRef.current = true;
        calculateScratchedArea();
    };
    // Mouse Handlers
    const handleMouseDown = (e) => {
        if (isScratchedRef.current)
            return;
        setIsDrawing(true);
        const rect = canvasRef.current?.getBoundingClientRect();
        if (rect) {
            lastPosRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            };
        }
        scratch(e.clientX, e.clientY);
    };
    const handleMouseMove = (e) => {
        if (!isDrawing || isScratchedRef.current)
            return;
        scratch(e.clientX, e.clientY);
    };
    const handleMouseUp = () => {
        setIsDrawing(false);
        lastPosRef.current = null;
        if (hasScratchedRef.current && !isScratchedRef.current) {
            revealFully();
        }
    };
    // Touch Handlers
    const handleTouchStart = (e) => {
        if (isScratchedRef.current || e.touches.length === 0)
            return;
        setIsDrawing(true);
        const rect = canvasRef.current?.getBoundingClientRect();
        if (rect) {
            lastPosRef.current = {
                x: e.touches[0].clientX - rect.left,
                y: e.touches[0].clientY - rect.top,
            };
        }
        scratch(e.touches[0].clientX, e.touches[0].clientY);
    };
    const handleTouchMove = (e) => {
        if (!isDrawing || isScratchedRef.current || e.touches.length === 0)
            return;
        scratch(e.touches[0].clientX, e.touches[0].clientY);
    };
    const handleTouchEnd = () => {
        setIsDrawing(false);
        lastPosRef.current = null;
        if (hasScratchedRef.current && !isScratchedRef.current) {
            revealFully();
        }
    };
    return (<section className="relative py-16 sm:py-24 px-4 overflow-hidden z-10">
      <motion.div initial="hidden" animate="visible" variants={{
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.1,
                },
            },
        }} className="max-w-3xl mx-auto relative z-10 section-panel px-4 py-10 sm:px-6 sm:py-12">
        {/* Section Header */}
        <motion.div variants={{
            hidden: { opacity: 0, y: 35 },
            visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
            },
        }} className="text-center space-y-3 mb-10">
          <span className="font-hindi text-lg sm:text-xl text-[#FCE08F] font-bold tracking-widest block uppercase">
            ॥ शुभ विवाह मुहूर्त ॥
          </span>
          <h2 className="font-cinzel text-5xl sm:text-6xl md:text-7xl font-bold tracking-wide text-white">
            Secret Wedding Date
          </h2>
          <p className="font-serif-royal italic text-base sm:text-lg text-white/90 max-w-md mx-auto">
            Scratch the royal golden card below to reveal the auspicious muhurat
            and wedding date!
          </p>
        </motion.div>

        {/* Scratch Card Outer Wrapper */}
        <RoyalCard hoverEffect={false} className="w-full">
          <div className="flex flex-col items-center justify-center py-4 space-y-6 text-center">
            {/* SVG ClipPath Definition for Heart Structure */}
            <svg className="absolute w-0 h-0 pointer-events-none">
              <defs>
                <clipPath id="royal-heart-clip" clipPathUnits="objectBoundingBox">
                  <path d="M 0.50,0.16 C 0.32,-0.04 0.02,0.10 0.02,0.38 C 0.02,0.64 0.28,0.80 0.50,0.96 C 0.72,0.80 0.98,0.64 0.98,0.38 C 0.98,0.10 0.68,-0.04 0.50,0.16 Z"/>
                </clipPath>
              </defs>
            </svg>

            {/* Heart-Shaped Container Wrapper */}
            <div className="relative w-full max-w-sm sm:max-w-md aspect-square flex items-center justify-center group">
              {/* Outer Glowing Heart Gold Aura */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#8B0000] via-[#D4AF37] to-[#FCE08F] opacity-70 blur-xl group-hover:opacity-90 transition-opacity duration-500" style={{ clipPath: "url(#royal-heart-clip)" }}/>

              {/* Gold Heart Border Outline Frame */}
              <div className="absolute inset-0 z-20 pointer-events-none drop-shadow-[0_10px_25px_rgba(212,175,55,0.4)]">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                  <path d="M 50,16 C 32,-4 2,10 2,38 C 2,64 28,80 50,96 C 72,80 98,64 98,38 C 98,10 68,-4 50,16 Z" fill="none" stroke="url(#goldGradient)" strokeWidth="2.5"/>
                  <defs>
                    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FCE08F"/>
                      <stop offset="50%" stopColor="#D4AF37"/>
                      <stop offset="100%" stopColor="#996515"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Scratch Interactive Canvas Container inside Heart Clip */}
              <div ref={containerRef} style={{ clipPath: "url(#royal-heart-clip)" }} className="relative w-full h-full shadow-[0_15px_40px_rgba(0,0,0,0.85)] cursor-pointer touch-none select-none bg-gradient-to-br from-[#2a040d] via-[#0f142b] to-[#070b19]">
                {/* --- UNDERLYING REVEALED CONTENT --- */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center space-y-2 sm:space-y-3 bg-gradient-to-b from-[#8B0000]/40 via-[#070b19] to-[#070b19]">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#8B0000] border-2 border-[#D4AF37] flex items-center justify-center shadow-lg text-[#FCE08F] mt-2">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse"/>
                  </div>

                  <span className="font-hindi text-xs sm:text-sm text-[#FCE08F] font-bold tracking-widest uppercase">
                    ॥ शुभ विवाह मुहूर्त ॥
                  </span>

                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#FFFFFF] tracking-wide">
                    {COUPLE_DETAILS.formattedDate}
                  </h3>

                  <div className="flex items-center justify-center gap-2 text-[#FCE08F] text-xs sm:text-sm font-serif-royal">
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4AF37]"/>
                    <span>{COUPLE_DETAILS.muhuratTime}</span>
                  </div>

                  <div className="flex items-center justify-center gap-1.5 text-[#FDFBF7]/80 text-[11px] sm:text-xs font-sans-clean max-w-[200px] sm:max-w-xs">
                    <MapPin className="w-3 h-3 text-[#D4AF37] shrink-0"/>
                    <span className="truncate">{COUPLE_DETAILS.venueName}</span>
                  </div>
                </div>

                {/* --- TOP SCRATCH CANVAS FOIL LAYER --- */}
                <canvas ref={canvasRef} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} className={`absolute inset-0 z-10 w-full h-full transition-opacity duration-700 ease-out ${isScratched
            ? "opacity-0 pointer-events-none"
            : "opacity-100"}`}/>
              </div>
            </div>

            {/* Scratch Controls & Status */}
            <div className="flex justify-center w-full mt-4"></div>
          </div>
        </RoyalCard>
      </motion.div>
    </section>);
};
