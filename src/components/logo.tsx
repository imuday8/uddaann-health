import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "", size = "md", showText = true }) => {
  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-12 h-12"
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl"
  };

  return (
    <div className={`flex items-center gap-2.5 group cursor-pointer ${className}`}>
      {/* Brand Icon */}
      <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-tr from-[#157BFF] to-[#22C55E] p-0.5 shadow-md shadow-[#157BFF]/20 group-hover:scale-105 transition-transform duration-300 ${iconSizes[size]}`}>
        <div className="w-full h-full bg-[#0B1220] rounded-[10px] flex items-center justify-center p-1.5 overflow-hidden relative">
          {/* Subtle inner pulse glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#157BFF]/20 to-[#22C55E]/20 animate-pulse" />
          
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full relative z-10 text-white"
          >
            {/* Wing / Soaring Arc */}
            <path
              d="M6 24C12 12 24 6 34 8C30 16 22 26 12 28C10 28.4 7.5 26.5 6 24Z"
              fill="url(#wingGradient)"
            />
            {/* Medical Pulse Heartbeat embedded in Wing */}
            <path
              d="M8 22H14L17 14L22 29L26 18L29 24H34"
              stroke="#22C55E"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient id="wingGradient" x1="6" y1="6" x2="34" y2="28" gradientUnits="userSpaceOnUse">
                <stop stopColor="#157BFF" />
                <stop offset="1" stopColor="#0B1220" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <div className={`font-heading font-extrabold tracking-tight ${textSizes[size]} text-slate-900 dark:text-white flex items-center gap-1`}>
            <span>Uddaann</span>
            <span className="text-[#157BFF]">Health</span>
          </div>
          <span className="text-[9px] uppercase tracking-widest font-semibold text-slate-500 dark:text-slate-400 -mt-0.5">
            AI Ecosystem
          </span>
        </div>
      )}
    </div>
  );
};
