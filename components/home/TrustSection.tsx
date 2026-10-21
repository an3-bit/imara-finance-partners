import React from "react";
import { FolderCheck, ShieldAlert, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: FolderCheck,
    title: "Organized Financial Records",
    description:
      "Keep transactions, reconciliations, and financial reports structured and easier to understand across every operating month.",
    badge: "Structure & Clarity",
  },
  {
    icon: ShieldAlert,
    title: "Compliance Support",
    description:
      "Get practical support with relevant tax, payroll, invoicing, and statutory compliance processes aligned with prevailing Kenyan regulations.",
    badge: "Statutory Diligence",
  },
  {
    icon: Sparkles,
    title: "Better Business Decisions",
    description:
      "Turn raw financial records into actionable insights for budgeting, cash-flow management, cost control, and profitability planning.",
    badge: "Informed Leadership",
  },
];

export default function TrustSection() {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
            Foundations of Sound Finance
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-forest tracking-tight">
            Financial Clarity for Every Stage of Business
          </h2>
          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            Sound financial records help business owners understand their true
            operating position, plan ahead responsibly, manage statutory
            responsibilities, and make well-founded commercial decisions.
          </p>
        </div>

        {/* 3 Clean Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="relative p-8 rounded-2xl bg-brand-ivory border border-brand-border/80 hover:border-brand-primary/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-forest text-brand-accent flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-primary bg-white px-2.5 py-1 rounded-full border border-brand-border/60">
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-forest tracking-tight pt-2">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-brand-border/60">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-primary hover:text-forest transition-colors"
                  >
                    <span>View related services</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Responsible Scope Note */}
        <div className="mt-10 p-4 rounded-xl bg-brand-ivory/70 border border-brand-border/50 text-center max-w-2xl mx-auto">
          <p className="text-xs text-brand-muted">
            <span className="font-semibold text-forest">Professional Note:</span>{" "}
            We provide structured accounting and advisory support to aid internal
            management; statutory compliance and tax outcomes remain dependent
            on timely documentation and applicable revenue laws.
          </p>
        </div>
      </div>
    </section>
  );
}
