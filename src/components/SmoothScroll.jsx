import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
export const SmoothScroll = ({ children }) => {
    const lenisRef = useRef(null);
    useEffect(() => {
        // Initialize Lenis smooth scrolling instance
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 1.8,
            infinite: false,
        });
        lenisRef.current = lenis;
        // Animation frame loop
        let rafId;
        function raf(time) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }
        rafId = requestAnimationFrame(raf);
        // Smooth scroll handler for anchor links
        const handleAnchorClick = (e) => {
            const target = e.target;
            const anchor = target?.closest('a');
            if (anchor) {
                const href = anchor.getAttribute('href');
                if (href && href.startsWith('#') && href.length > 1) {
                    const element = document.querySelector(href);
                    if (element) {
                        e.preventDefault();
                        lenis.scrollTo(element, { offset: 0, duration: 1.4 });
                    }
                }
            }
        };
        document.addEventListener('click', handleAnchorClick);
        return () => {
            cancelAnimationFrame(rafId);
            document.removeEventListener('click', handleAnchorClick);
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);
    return <>{children}</>;
};
