import React from "react";
import Link from "next/link";
import Image from "next/image";

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
      className={`inline-flex items-center gap-3.5 group transition-all duration-200 hover:opacity-95 ${className}`}
      aria-label="LedgerBridge Accountants - Home"
    >
      {/* LedgerBridge Logo Emblem */}
      <div className="relative w-12 h-12 flex-shrink-0 rounded-xl overflow-hidden shadow-md border border-[#D6B56D]/60 group-hover:border-[#F6E8B1] group-hover:scale-105 transition-all bg-[#061A16] flex items-center justify-center">
        <Image
          src="/ledgerbridge-accountants-logo.jpg"
          alt="LedgerBridge Accountants Logo"
          fill
          sizes="48px"
          className="object-cover"
          priority
        />
      </div>

      {/* Brand Name & Tagline Typography */}
      <div className="flex flex-col justify-center">
        <span
          className={`font-black tracking-[0.06em] text-[18px] leading-tight font-sans transition-colors ${
            isLight ? "text-white" : "text-forest"
          }`}
        >
          LEDGERBRIDGE
        </span>
        <span
          className={`text-[9.5px] uppercase tracking-[0.28em] font-extrabold leading-none mt-1 ${
            isLight ? "text-[#E8CE8A]" : "text-[#B88E3E]"
          }`}
        >
          ACCOUNTANTS
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
