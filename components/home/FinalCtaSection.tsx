import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function FinalCtaSection() {
  return (
    <section className="py-20 bg-forest text-white relative overflow-hidden">
      {/* Background geometric accents */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 rounded-full bg-forest-light/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 rounded-full bg-brand-primary/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-brand-accent font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-brand-accent flex-shrink-0" />
          <span>Professional & Confidential Advisory</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Ready to Bring More Clarity to Your Business Finances?
        </h2>

        <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto font-normal leading-relaxed">
          Tell us about your business and the accounting support you need. We
          will help you identify an appropriate next step and outline a suitable
          engagement scope.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-base bg-brand-accent text-forest hover:bg-white transition-all shadow-xl shadow-black/20 active:scale-[0.98]"
          >
            <span>Talk to Our Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-medium text-base text-white border border-white/30 hover:bg-white/10 transition-all"
          >
            <span>Review All Services</span>
          </Link>
        </div>

        <div className="pt-6 flex items-center justify-center gap-2 text-xs text-gray-300">
          <MapPin className="w-3.5 h-3.5 text-brand-accent" />
          <span>
            {siteConfig.address.building}, {siteConfig.address.floor},{" "}
            {siteConfig.address.area}, Nairobi, Kenya
          </span>
        </div>
      </div>
    </section>
  );
}
