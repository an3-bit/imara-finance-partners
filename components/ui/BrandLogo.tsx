import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  variant?: "dark" | "light";
  className?: string;
  showTagline?: boolean;
}

export default function BrandLogo({
  variant = "dark",
  className = "",
  showTagline = false,
}: BrandLogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group transition-opacity hover:opacity-95 ${className}`}
      aria-label="Imara Finance Partners - Home"
    >
      {/* Restrained geometric financial growth symbol */}
      <div className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform transition-transform group-hover:scale-105"
        >
          {/* Rounded base badge */}
          <rect
            width="40"
            height="40"
            rx="10"
            fill={isLight ? "#0D2925" : "#123B35"}
          />
          {/* Interlocking geometric growth pillars */}
          <rect
            x="8"
            y="21"
            width="5.5"
            height="11"
            rx="2.5"
            fill={isLight ? "#A8E986" : "#A8E986"}
          />
          <rect
            x="17"
            y="13"
            width="5.5"
            height="19"
            rx="2.5"
            fill={isLight ? "#FFFFFF" : "#087A43"}
          />
          <rect
            x="26"
            y="8"
            width="5.5"
            height="24"
            rx="2.5"
            fill={isLight ? "#D6B56D" : "#D6B56D"}
          />
          {/* Subtle bridge representing partnership */}
          <path
            d="M 10.75 21 Q 19.75 13 28.75 8"
            stroke={isLight ? "rgba(255,255,255,0.4)" : "rgba(168,233,134,0.7)"}
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeDasharray="2 2"
          />
        </svg>
      </div>

      {/* Brand Name Typography */}
      <div className="flex flex-col">
        <span
          className={`font-bold tracking-tight text-xl leading-none font-sans ${
            isLight ? "text-white" : "text-forest"
          }`}
        >
          IMARA
        </span>
        <span
          className={`text-[9.5px] uppercase tracking-[0.22em] font-semibold mt-1 leading-none ${
            isLight ? "text-[#A8E986]" : "text-brand-primary"
          }`}
        >
          Finance Partners
        </span>
        {showTagline && (
          <span
            className={`text-xs mt-1.5 ${
              isLight ? "text-gray-300" : "text-brand-muted"
            }`}
          >
            Professional Accounting. Stronger Financial Decisions.
          </span>
        )}
      </div>
    </Link>
  );
}
