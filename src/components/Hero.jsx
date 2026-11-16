import React from "react";
import { motion } from "motion/react";
import { COUPLE_DETAILS } from "../data/weddingData";
import { AnimatedScene } from "./AnimatedScene";
const heroSceneAssets = [
    {
        id: "peacock-1",
        src: "/peacock.png",
        alt: "Peacock",
        className: "right-6 bottom-12 w-[140px] sm:w-[180px] lg:w-[220px]",
        style: { transform: "translateX(2%) scaleX(-1)" },
        initial: { x: 0, y: 10 },
        animate: {
            x: [0, 8, 0, -8, 0],
            y: [10, 4, 10],
            rotate: [0, 0.5, 0, -0.5, 0],
        },
        transition: {
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
        },
    },
    {
        id: "banana-leaf-left",
        src: "/bananatree.png",
        alt: "Banana leaf left",
        className: "left-[-3rem] top-8 w-[200px] sm:w-[260px] lg:w-[340px]",
        style: { transform: "translateX(0) scaleX(1)" },
        initial: { x: 0 },
        animate: {
            x: [0, 20, 0],
            rotate: [0, 1, 0],
        },
        transition: {
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
        },
    },
    {
        id: "banana-leaf-right",
        src: "/bananatree2.png",
        alt: "Banana leaf right",
        className: "right-[-3rem] top-8 w-[200px] sm:w-[260px] lg:w-[340px]",
        style: { transform: "translateX(0) scaleX(-1)" },
        initial: { x: 0 },
        animate: {
            x: [0, -20, 0],
            rotate: [0, -1, 0],
        },
        transition: {
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
        },
    },
];
export const Hero = () => {
    return (<section id="home" className="relative overflow-hidden bg-transparent">
      <div className="relative w-full overflow-hidden">
        <picture>
          <source media="(min-width: 1024px)" srcSet="/hero-desktop.png"/>
          <img src="/backgroundhero.png" alt="Royal wedding backdrop" className="w-full h-auto block"/>
        </picture>

        <AnimatedScene assets={heroSceneAssets}/>

        <div className="absolute inset-0 flex items-center justify-center z-20 px-6 py-10">
          <div className="relative w-full max-w-4xl text-center">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="space-y-4">
              <p className="font-hindi text-5xl sm:text-7xl text-gold-gradient font-bold tracking-wider drop-shadow-md"></p>
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="font-serif-royal italic text-base sm:text-xl text-[#FDFBF7] tracking-wide font-normal max-w-2xl mx-auto mt-4"></motion.p>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.6 }} className="py-6">
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="flex items-center justify-center gap-3 sm:gap-5 lg:gap-8">
                  <span className="font-hindi text-3xl sm:text-4xl lg:text-5xl font-bold text-[#8B0000] tracking-wide drop-shadow-sm select-none">
                    Subha
                  </span>
                  <img src="/ganesh.png" alt="Ganesh" className="h-56 sm:h-64 lg:h-72 object-contain"/>
                  <span className="font-hindi text-3xl sm:text-4xl lg:text-5xl font-bold text-[#8B0000] tracking-wide drop-shadow-sm select-none">
                    Labha
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                  <h1 className="font-cinzel text-6xl sm:text-7xl md:text-8xl font-bold text-gold-gradient tracking-wider drop-shadow-lg">
                    {COUPLE_DETAILS.groom.name.split(" ")[0]}
                  </h1>
                  <span className="font-script text-6xl sm:text-7xl text-[#FCE08F]">
                    &
                  </span>
                  <h1 className="font-cinzel text-6xl sm:text-7xl md:text-8xl font-bold text-gold-gradient tracking-wider drop-shadow-lg">
                    {COUPLE_DETAILS.bride.name.split(" ")[0]}
                  </h1>
                </div>
              </div>
              <p className="font-serif-royal italic text-base sm:text-lg tracking-wider mt-4 text-white font-bold">
                  .                      .
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>);
};
