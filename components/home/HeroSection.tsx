import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  TrendingUp,
  FileSpreadsheet,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function HeroSection() {
  return (
    <section className="px-3 sm:px-6 lg:px-8 pt-3 pb-6 max-w-[1440px] mx-auto">
      {/* Contained Hero Canvas with FedhaTrac-style rounded container */}
      <div
        className="relative rounded-2xl md:rounded-3xl overflow-hidden min-h-[640px] lg:min-h-[700px] flex flex-col justify-between bg-forest text-white shadow-2xl"
        style={{ position: "relative" }}
      >
        {/* Animated Background Image Layer (Smooth continuous zoom in and out) */}
        <div
          className="absolute inset-0 z-0 overflow-hidden"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <div
            className="relative w-full h-full animate-hero-zoom"
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="African finance professionals reviewing business performance and financial statements in an office"
              fill
              priority
              sizes="(max-width: 1440px) 100vw, 1440px"
              className="object-cover object-center filter contrast-[1.06] brightness-[1.04]"
            />
          </div>

          {/* Clean, Light-Translucent Overlay ensuring the image is bright and vibrant */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(90deg, rgba(14, 45, 39, 0.72) 0%, rgba(18, 59, 53, 0.46) 48%, rgba(18, 59, 53, 0.15) 100%), radial-gradient(circle at 10% 50%, rgba(255, 255, 255, 0.08), transparent 40%), rgba(0, 0, 0, 0.18)",
            }}
          />
        </div>

        {/* Hero Main Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-16 lg:py-20 w-full flex-1 flex flex-col justify-between">
          {/* Top Location Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest/85 backdrop-blur-md border border-brand-accent/60 text-xs text-brand-accent font-bold w-fit mb-4 shadow-md">
            <MapPin className="w-3.5 h-3.5 text-brand-accent flex-shrink-0" />
            <span className="tracking-wide">{siteConfig.locationIndicator}</span>
          </div>

          {/* Center/Left Headline & Description with Highlighted Text */}
          <div className="max-w-2xl lg:max-w-3xl space-y-6 my-auto pt-4 pb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-black tracking-tight text-white leading-[1.18]">
              <span className="inline-block bg-[#A8E986] text-forest px-4 py-1.5 rounded-2xl shadow-xl mb-2 mr-2 border border-white/40">
                Professional Accounting.
              </span>{" "}
              <span className="text-white block sm:inline drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
                Stronger Financial Decisions.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-white font-medium leading-relaxed max-w-xl drop-shadow-[0_1px_4px_rgba(0,0,0,0.75)]">
              Reliable accounting, tax compliance, payroll, and financial
              advisory services designed to help growing businesses worldwide stay
              organized, understand their numbers, and grow with confidence.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm bg-white text-forest hover:bg-brand-accent hover:text-forest hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-xl shadow-black/35"
              >
                <span>Request a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-white bg-black/30 hover:bg-black/50 border border-white/50 hover:border-white transition-all duration-200 backdrop-blur-md shadow-lg"
              >
                <span>Explore Our Services</span>
              </Link>
            </div>
          </div>

          {/* Bottom Row: Tags on left, Paired FedhaTrac-Style Floating Cards on right */}
          <div className="pt-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-t border-white/20">
            {/* Quick Service Tags with crisp contrast */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="px-3.5 py-1.5 rounded-full bg-forest/85 backdrop-blur-md border border-white/30 text-white font-semibold shadow-sm">
                Bookkeeping
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-forest/85 backdrop-blur-md border border-white/30 text-white font-semibold shadow-sm">
                Tax Compliance
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-forest/85 backdrop-blur-md border border-white/30 text-white font-semibold shadow-sm">
                Payroll Management
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-forest/85 backdrop-blur-md border border-white/30 text-white font-semibold shadow-sm">
                Systems Integration
              </span>
            </div>

            {/* Bottom-Right Paired Floating Cards */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-end gap-3.5 self-end w-full sm:w-auto">
              {/* Floating Card 1: High-Contrast Forest Card with Bright Green Header */}
              <div
                className="p-5 rounded-xl border border-brand-accent/40 text-white w-full sm:w-[225px] shadow-2xl flex flex-col justify-between"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(14, 40, 35, 0.96), rgba(8, 24, 21, 0.98))",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-brand-primary/50 border border-brand-accent/50 flex items-center justify-center text-brand-accent mb-3">
                    <FileSpreadsheet className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-[#A8E986] leading-snug tracking-tight">
                    Reliable Financial Records
                  </h3>
                  <p className="text-xs text-white/95 mt-1.5 leading-relaxed font-medium">
                    Structured bookkeeping and timely monthly reconciliations.
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-white/20 flex items-center gap-1.5 text-xs text-[#A8E986] font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Monthly Support</span>
                </div>
              </div>

              {/* Floating Card 2: Fresh Lime Green Card */}
              <div
                className="p-5 rounded-xl text-forest w-full sm:w-[225px] shadow-2xl flex flex-col justify-between border border-white/40"
                style={{ backgroundColor: "#A8E986" }}
              >
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-forest/85 mb-2">
                    <TrendingUp className="w-4 h-4 text-forest" />
                    <span>Clear Performance</span>
                  </div>
                  <p className="text-sm font-extrabold text-forest leading-snug">
                    Small businesses see clearer books after partnering with LEDGERBRIDGE.
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-forest/25 text-xs font-bold text-forest">
                  Practical business insights.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
