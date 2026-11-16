import React from "react";
const ICON_SYMBOLS = {
    sparkles: "✨",
    mandala: "✦",
    heart: "❤",
};
export const SectionDivider = ({ icon }) => {
    return (<div className="w-full px-4 py-3">
      <div className="mx-auto flex items-center justify-center gap-3 max-w-3xl">
        <div className="h-px flex-1 bg-[#D4AF37]/40"/>
        {icon && (<span className="text-lg text-[#D4AF37]" aria-hidden="true">
            {ICON_SYMBOLS[icon]}
          </span>)}
        <div className="h-px flex-1 bg-[#D4AF37]/40"/>
      </div>
    </div>);
};
