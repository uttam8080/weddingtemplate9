import React from "react";
import { motion } from "motion/react";
export const AnimatedScene = ({ assets }) => {
    return (<div className="absolute inset-0 pointer-events-none overflow-hidden">
      {assets.map((asset) => (<motion.img key={asset.id} src={asset.src} alt={asset.alt} className={`absolute ${asset.className ?? ""}`} style={asset.style} initial={asset.initial ?? { opacity: 0, y: 20 }} animate={asset.animate ?? {
                opacity: [0, 1, 0.95, 1],
                y: [20, 10, 20],
                rotate: [0, 1, 0, -1, 0],
            }} transition={asset.transition ?? {
                duration: 8,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
            }}/>))}
    </div>);
};
