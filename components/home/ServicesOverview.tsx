import React from "react";
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
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { servicesData, ServiceItem } from "@/lib/services-data";

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

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-brand-ivory/60 border-b border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              Comprehensive Service Offerings
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-forest tracking-tight">
              Accounting and Finance Services That Work for Your Business
            </h2>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              From day-to-day transaction recording and payroll to electronic tax
              invoicing and periodic management accounts, our services are
              structured to support steady enterprise growth.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-forest text-white hover:bg-forest-light transition-all shadow-sm"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || BookOpenCheck;
            // Alternating subtle backgrounds to break generic template monotony
            const isHighlighted = index === 1 || index === 4;

            return (
              <div
                key={service.id}
                className={`relative p-6 rounded-2xl border transition-all duration-200 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-lg ${
                  isHighlighted
                    ? "bg-white border-brand-primary/30 ring-1 ring-brand-primary/10"
                    : "bg-white border-brand-border/80 hover:border-brand-primary/40"
                }`}
              >
                <div>
                  {/* Service Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                        isHighlighted
                          ? "bg-brand-primary text-white"
                          : "bg-brand-ivory text-forest group-hover:bg-brand-accent group-hover:text-forest"
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-brand-muted/70">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-forest tracking-tight mb-2.5 group-hover:text-brand-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  {/* Key deliverable pill */}
                  <div className="mb-4">
                    <span className="inline-block text-[11px] font-medium text-forest/90 bg-brand-ivory px-2.5 py-1 rounded-md border border-brand-border/60">
                      {service.keyHighlights[0]}
                    </span>
                  </div>
                </div>

                {/* Footer link to detail page */}
                <div className="pt-4 border-t border-brand-border/50">
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-primary hover:text-forest transition-colors group-hover:underline"
                  >
                    <span>Learn More</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Navigation CTA strip */}
        <div className="mt-12 text-center">
          <p className="text-xs text-brand-muted">
            Need a custom combination of accounting services?{" "}
            <Link
              href="/contact"
              className="text-brand-primary font-semibold hover:underline"
            >
              Request a tailored consultation
            </Link>{" "}
            to discuss your transaction volume and operational scope.
          </p>
        </div>
      </div>
    </section>
  );
}
