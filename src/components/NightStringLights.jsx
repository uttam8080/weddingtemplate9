import React from 'react';
export const NightStringLights = () => {
    return (<div className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-[#070b19]">
      {/* Background Image Layer */}
      <div className="absolute inset-0 bg-cover bg-top bg-no-repeat opacity-40 mix-blend-screen" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1920&auto=format&fit=crop')` }}/>

      {/* Dark Navy Radial Vignette Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080d1a]/50 via-[#0a0f24]/75 to-[#070b19]/95"/>

      {/* Vector Catenary String Lights & Mason Jar Lanterns at Top of Section */}
      <svg className="absolute top-0 left-0 w-full h-[400px] sm:h-[500px] z-1" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMin slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Intense Glow Filter for Jar Lights */}
          <filter id="jarGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="10" result="blur1"/>
            <feGaussianBlur stdDeviation="20" result="blur2"/>
            <feMerge>
              <feMergeNode in="blur2"/>
              <feMergeNode in="blur1"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Soft Bulb Glow */}
          <filter id="bulbGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Radial Gradient for Mason Jar Light */}
          <radialGradient id="jarLight" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1"/>
            <stop offset="25%" stopColor="#FFF2B2" stopOpacity="0.95"/>
            <stop offset="60%" stopColor="#FCE08F" stopOpacity="0.75"/>
            <stop offset="85%" stopColor="#D4AF37" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0"/>
          </radialGradient>

          {/* String Light Bulb Gradient */}
          <radialGradient id="bulbLight" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF"/>
            <stop offset="60%" stopColor="#FFE89C"/>
            <stop offset="100%" stopColor="#D4AF37"/>
          </radialGradient>
        </defs>

        {/* --- STRINGS OF FAIRY LIGHTS --- */}
        <path d="M-50,15 Q250,90 500,25 Q750,85 1050,10" stroke="rgba(255,235,180,0.6)" strokeWidth="1.5" fill="none"/>
        <path d="M-50,40 Q200,135 450,55 Q700,125 1050,30" stroke="rgba(255,235,180,0.7)" strokeWidth="1.8" fill="none"/>
        <path d="M-50,75 Q300,175 600,90 Q850,150 1050,65" stroke="rgba(255,235,180,0.5)" strokeWidth="1.2" fill="none"/>

        {/* --- BULBS ON STRING 1 --- */}
        {[
            { x: 20, y: 25 }, { x: 80, y: 45 }, { x: 140, y: 60 }, { x: 200, y: 68 }, { x: 260, y: 67 }, { x: 320, y: 60 },
            { x: 380, y: 48 }, { x: 440, y: 34 }, { x: 500, y: 25 }, { x: 560, y: 34 }, { x: 620, y: 48 }, { x: 680, y: 61 },
            { x: 740, y: 69 }, { x: 800, y: 67 }, { x: 860, y: 58 }, { x: 920, y: 43 }, { x: 980, y: 25 }
        ].map((pt, i) => (<g key={`b1-${i}`}>
            <circle cx={pt.x} cy={pt.y} r="6" fill="#FCE08F" opacity="0.4" filter="url(#bulbGlow)"/>
            <circle cx={pt.x} cy={pt.y} r="2.5" fill="url(#bulbLight)"/>
          </g>))}

        {/* --- BULBS ON STRING 2 --- */}
        {[
            { x: 10, y: 50 }, { x: 70, y: 76 }, { x: 130, y: 98 }, { x: 190, y: 112 }, { x: 250, y: 115 }, { x: 310, y: 107 },
            { x: 370, y: 91 }, { x: 430, y: 69 }, { x: 490, y: 59 }, { x: 550, y: 68 }, { x: 610, y: 86 }, { x: 670, y: 103 },
            { x: 730, y: 115 }, { x: 790, y: 115 }, { x: 850, y: 104 }, { x: 910, y: 84 }, { x: 970, y: 58 }
        ].map((pt, i) => (<g key={`b2-${i}`}>
            <circle cx={pt.x} cy={pt.y} r="7" fill="#FCE08F" opacity="0.45" filter="url(#bulbGlow)"/>
            <circle cx={pt.x} cy={pt.y} r="3" fill="url(#bulbLight)"/>
          </g>))}

        {/* --- BULBS ON STRING 3 --- */}
        {[
            { x: 30, y: 88 }, { x: 100, y: 115 }, { x: 170, y: 138 }, { x: 240, y: 152 }, { x: 310, y: 156 }, { x: 380, y: 149 },
            { x: 450, y: 132 }, { x: 520, y: 111 }, { x: 590, y: 92 }, { x: 660, y: 102 }, { x: 730, y: 122 }, { x: 800, y: 137 },
            { x: 870, y: 140 }, { x: 940, y: 125 }, { x: 1000, y: 98 }
        ].map((pt, i) => (<g key={`b3-${i}`}>
            <circle cx={pt.x} cy={pt.y} r="5" fill="#FCE08F" opacity="0.35" filter="url(#bulbGlow)"/>
            <circle cx={pt.x} cy={pt.y} r="2" fill="url(#bulbLight)"/>
          </g>))}

        {/* --- HANGING MASON JARS / LANTERNS --- */}
        {[
            { x: 95, topY: 85, length: 90, jarW: 26, jarH: 38 },
            { x: 525, topY: 62, length: 115, jarW: 28, jarH: 42 },
            { x: 785, topY: 115, length: 55, jarW: 24, jarH: 34 },
            { x: 865, topY: 100, length: 120, jarW: 30, jarH: 46 },
        ].map((jar, idx) => {
            const jarY = jar.topY + jar.length;
            return (<g key={`jar-${idx}`}>
              {/* Wire line */}
              <line x1={jar.x} y1={jar.topY} x2={jar.x} y2={jarY} stroke="rgba(240,220,180,0.7)" strokeWidth="1.2"/>

              {/* Wire Ring / Handle */}
              <path d={`M ${jar.x - 7} ${jarY} C ${jar.x - 7} ${jarY - 7}, ${jar.x + 7} ${jarY - 7}, ${jar.x + 7} ${jarY}`} stroke="#D4AF37" strokeWidth="1.5" fill="none"/>

              {/* Outer Glowing Light Halo */}
              <circle cx={jar.x} cy={jarY + jar.jarH / 2} r={jar.jarW * 1.8} fill="url(#jarLight)" filter="url(#jarGlow)"/>

              {/* Jar Glass Body */}
              <rect x={jar.x - jar.jarW / 2} y={jarY} width={jar.jarW} height={jar.jarH} rx="5" fill="rgba(255, 245, 210, 0.25)" stroke="#FCE08F" strokeWidth="1.5"/>

              {/* Jar Metallic Cap */}
              <rect x={jar.x - jar.jarW / 2 - 2} y={jarY - 3} width={jar.jarW + 4} height="4" rx="1" fill="#D4AF37" stroke="#FFF" strokeWidth="0.5"/>

              {/* Inner Bright Firefly Light Bulb */}
              <circle cx={jar.x} cy={jarY + jar.jarH * 0.45} r={jar.jarW * 0.28} fill="url(#jarLight)"/>
              <circle cx={jar.x} cy={jarY + jar.jarH * 0.45} r={jar.jarW * 0.14} fill="#FFFFFF"/>
            </g>);
        })}
      </svg>
    </div>);
};
