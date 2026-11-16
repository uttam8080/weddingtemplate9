import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
export const EnvelopeModal = ({ isOpen, onClose, }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isFading, setIsFading] = useState(false);
    const [videoError, setVideoError] = useState(false);
    const [videoSrc, setVideoSrc] = useState("https://res.cloudinary.com/n0c7bqpd/video/upload/v1784791952/Envelope_opening_animation_202607231301_online-video-cutter.com_pzifuj.mp4");
    useEffect(() => {
        if (typeof window === "undefined")
            return;
        const mobileSrc = "https://res.cloudinary.com/n0c7bqpd/video/upload/v1784791952/Envelope_opening_animation_202607231301_online-video-cutter.com_pzifuj.mp4";
        const desktopSrc = "https://res.cloudinary.com/n0c7bqpd/video/upload/v1784792471/Envelope_opening_animation_202607231310_online-video-cutter.com_qdgl1v.mp4";
        const mediaQuery = window.matchMedia("(min-width: 1024px)");
        const updateVideoSource = (event) => {
            setVideoSrc(event.matches ? desktopSrc : mobileSrc);
        };
        updateVideoSource(mediaQuery);
        mediaQuery.addEventListener("change", updateVideoSource);
        return () => mediaQuery.removeEventListener("change", updateVideoSource);
    }, []);
    useEffect(() => {
        if (!isOpen)
            return;
        const previousHtmlOverflow = document.documentElement.style.overflow;
        const previousBodyOverflow = document.body.style.overflow;
        const previousPaddingRight = document.body.style.paddingRight;
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
        if (scrollbarWidth > 0) {
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        }
        return () => {
            document.documentElement.style.overflow = previousHtmlOverflow;
            document.body.style.overflow = previousBodyOverflow;
            document.body.style.paddingRight = previousPaddingRight;
        };
    }, [isOpen]);
    // Auto-play attempt on mount
    useEffect(() => {
        if (!isOpen)
            return;
        if (videoRef.current) {
            setIsFading(false);
            setVideoError(false);
            const video = videoRef.current;
            video.currentTime = 0;
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                    setIsPlaying(true);
                })
                    .catch(() => {
                    setIsPlaying(false);
                });
            }
        }
    }, [isOpen]);
    const handleCanPlay = () => {
        if (!videoRef.current || isPlaying)
            return;
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
            playPromise.then(() => setIsPlaying(true)).catch(() => { });
        }
    };
    // Handle video progress to trigger slow disappear 1.5s before end
    const handleTimeUpdate = () => {
        if (!videoRef.current)
            return;
        const video = videoRef.current;
        const duration = video.duration;
        const currentTime = video.currentTime;
        if (duration > 0 && !isNaN(duration)) {
            // 1.5 seconds before video ends, start slow fade out
            const timeRemaining = duration - currentTime;
            if (timeRemaining <= 1.5 && !isFading) {
                setIsFading(true);
            }
        }
    };
    const handleVideoEnded = () => {
        setIsFading(true);
        setTimeout(() => {
            onClose();
        }, 1500);
    };
    if (!isOpen)
        return null;
    return (<AnimatePresence>
      <motion.div initial={{ opacity: 1 }} animate={{ opacity: isFading ? 0 : 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.5, ease: "easeInOut" }} onAnimationComplete={() => {
            if (isFading) {
                onClose();
            }
        }} className="fixed inset-0 z-50 flex items-center justify-center bg-[#070b19] overflow-hidden select-none">
        {/* Ambient Dark Gold Radial Backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#8B0000]/25 via-[#070b19]/90 to-[#070b19] pointer-events-none"/>

        {/* Ambient Floating Gold Dust Glow */}
        <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px]"/>

        {/* Video Player Container */}
        <div className="relative z-10 w-full h-full mx-auto overflow-hidden bg-transparent flex items-center justify-center">
          {/* Main Envelope Animation Video */}
          <video ref={videoRef} playsInline muted preload="auto" onCanPlay={() => {
            handleCanPlay();
        }} onTimeUpdate={handleTimeUpdate} onEnded={handleVideoEnded} onError={() => setVideoError(true)} className="min-w-full min-h-full object-cover" key={videoSrc}>
            <source src={videoSrc} type="video/mp4"/>
          </video>

          {videoError && (<div className="absolute inset-0 flex items-center justify-center bg-[#070b19] p-4">
              <button type="button" onClick={onClose} className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm text-white transition hover:bg-white/20">
                Continue to Site
              </button>
            </div>)}
        </div>
      </motion.div>
    </AnimatePresence>);
};
