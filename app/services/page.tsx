import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpenCheck,
  FileCheck,
  Users,
  LineChart,
  Receipt,
  TrendingUp,
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  AlertCircle,
  ChevronRight,
} from "lucide-react";
import { servicesData } from "@/lib/services-data";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Accounting, Tax & Payroll Services",
  description:
    "Comprehensive accounting, bookkeeping, tax compliance support, payroll management, eTIMS alignment, and financial advisory for businesses in Kenya.",
  openGraph: {
    title: "Accounting, Tax & Payroll Services | Imara Finance Partners",
    description:
      "Structured accounting, bookkeeping, tax compliance, payroll, and business finance advisory services in Nairobi, Kenya.",
    url: `${siteConfig.siteUrl}/services`,
  },
  alternates: {
    canonical: `${siteConfig.siteUrl}/services`,
  },
};

const iconMap = {
  BookOpenCheck,
  FileCheck,
  Users,
  LineChart,
  Receipt,
  TrendingUp,
  CreditCard,
  ShieldCheck,
};

export default function ServicesPage() {
  return (
    <div className="bg-brand-ivory min-h-screen">
      {/* Header Banner */}
      <section className="bg-forest text-white py-16 lg:py-24 relative overflow-hidden border-b border-forest-light">
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/90 to-forest/95" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-brand-accent font-medium">
              <span>Professional Services Overview</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Accounting, Tax & Finance Advisory Services
            </h1>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              We provide structured, dependable support across eight core financial
              disciplines, designed to help Kenyan businesses maintain organized
              records, satisfy statutory obligations, and make informed commercial decisions.
            </p>
          </div>

          {/* Quick Jump Bar */}
          <div className="mt-10 pt-8 border-t border-white/15">
            <span className="text-xs uppercase font-bold tracking-wider text-brand-accent block mb-3">
              Jump directly to a service:
            </span>
            <div className="flex flex-wrap gap-2">
              {servicesData.map((s, idx) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-brand-accent hover:text-forest text-xs font-medium text-white transition-all border border-white/10"
                >
                  {idx + 1}. {s.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Services List */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.iconName] || BookOpenCheck;
            const isEven = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28 rounded-3xl bg-white border border-brand-border/80 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-10 lg:p-12"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Left Column: Title, Overview & Scope Note */}
                  <div className="lg:col-span-5 space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-forest text-brand-accent flex items-center justify-center shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-brand-primary bg-brand-ivory px-3 py-1 rounded-full border border-brand-border/60">
                        Service 0{index + 1}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-forest tracking-tight">
                      {service.title}
                    </h2>

                    <p className="text-base text-forest/90 font-medium leading-relaxed">
                      {service.shortDescription}
                    </p>

                    <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                      {service.fullDescription}
                    </p>

                    {/* Scope & Distinction Notice */}
                    <div className="p-4 rounded-xl bg-brand-ivory/80 border border-brand-border/70 text-xs text-brand-muted space-y-1">
                      <div className="flex items-center gap-1.5 font-bold text-forest">
                        <AlertCircle className="w-3.5 h-3.5 text-brand-primary" />
                        <span>Scope & Engagement Clarity</span>
                      </div>
                      <p>{service.scopeNote}</p>
                    </div>

                    {/* Consultation CTA button */}
                    <div className="pt-2">
                      <Link
                        href={`/contact?service=${encodeURIComponent(
                          service.title
                        )}`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-brand-primary text-white hover:bg-[#066537] transition-all shadow-sm"
                      >
                        <span>Inquire About This Service</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Key Deliverables Checklist */}
                  <div className="lg:col-span-7 bg-brand-ivory/40 rounded-2xl p-6 sm:p-8 border border-brand-border/60 space-y-6">
                    <div className="flex items-center justify-between border-b border-brand-border/60 pb-3">
                      <h3 className="text-base font-bold text-forest">
                        Key Deliverables & Activities
                      </h3>
                      <span className="text-xs text-brand-muted">
                        Tailored to your volume
                      </span>
                    </div>

                    <ul className="space-y-3.5">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-brand-charcoal/90 leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Highlights Strip */}
                    <div className="pt-4 border-t border-brand-border/60">
                      <span className="text-xs font-semibold uppercase tracking-wider text-brand-muted block mb-2">
                        Core Value Highlights
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {service.keyHighlights.map((hl, hlIdx) => (
                          <span
                            key={hlIdx}
                            className="px-3 py-1 rounded-full bg-white text-forest text-xs font-medium border border-brand-border/80 shadow-2xs"
                          >
                            ✓ {hl}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Services Closing CTA */}
      <section className="py-20 bg-forest text-white border-t border-forest-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
            Tailored Engagement
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Not Sure Which Service Your Business Needs?
          </h2>
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto">
            Tell us a little about your business and your current accounting
            challenges. We can discuss a suitable scope of support and help you
            determine the most effective starting point.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-base bg-brand-accent text-forest hover:bg-white transition-all shadow-xl"
            >
              <span>Request a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
