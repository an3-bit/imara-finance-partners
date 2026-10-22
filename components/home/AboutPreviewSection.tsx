import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, CheckCircle } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function AboutPreviewSection() {
  return (
    <section className="py-20 bg-brand-ivory/50 border-b border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Firm Story */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              About LedgerBridge Accountants
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-forest tracking-tight">
              Reliable Accountants for Your Business
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-brand-charcoal/85 leading-relaxed">
              <p>
                LedgerBridge Accountants is established to provide accessible,
                structured accounting, bookkeeping, tax compliance support,
                payroll management, and practical financial advisory to
                growing businesses worldwide.
              </p>
              <p>
                Our core focus is on helping business owners maintain organized
                financial information, understand their true financial position,
                and approach their operational and compliance responsibilities
                with confidence and discipline.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-forest">
                <CheckCircle className="w-4 h-4 text-brand-primary flex-shrink-0" />
                <span>Dedicated client communication</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-forest">
                <CheckCircle className="w-4 h-4 text-brand-primary flex-shrink-0" />
                <span>Confidential data management</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-forest">
                <CheckCircle className="w-4 h-4 text-brand-primary flex-shrink-0" />
                <span>Statutory &amp; tax compliance expertise</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-forest">
                <CheckCircle className="w-4 h-4 text-brand-primary flex-shrink-0" />
                <span>Practical management reporting</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-brand-primary text-white hover:bg-[#066537] transition-all shadow-sm"
              >
                <span>Learn About Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="inline-flex items-center gap-2 text-xs text-brand-muted">
                <MapPin className="w-4 h-4 text-brand-primary flex-shrink-0" />
                <span>Serving Clients Globally · Remote &amp; On-Site</span>
              </div>
            </div>
          </div>

          {/* Right Column: Office Collaboration Photograph */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-brand-border">
              <div
                className="relative h-[420px] w-full"
                style={{
                  position: "relative",
                  height: "420px",
                  minHeight: "420px",
                  width: "100%",
                }}
              >
                <Image
                  src="https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Finance professionals reviewing business performance"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-forest/20 mix-blend-multiply" />
              </div>
              <div className="p-4 bg-white border-t border-brand-border flex items-center justify-between text-xs">
                <span className="font-semibold text-forest">
                  Global Financial Advisory
                </span>
                <span className="text-brand-muted">Virtual &amp; Dedicated Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
