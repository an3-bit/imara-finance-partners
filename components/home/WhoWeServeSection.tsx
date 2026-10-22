import React from "react";
import {
  Building2,
  Rocket,
  Store,
  BriefcaseBusiness,
  Home,
  CheckCircle,
} from "lucide-react";

const clientSectors = [
  {
    icon: Building2,
    title: "SMEs and Growing Businesses",
    description:
      "Established small and medium-sized enterprises needing outsourced accounting, timely reconciliations, and structured monthly management reports.",
    benefits: ["Outsourced finance oversight", "Cash-flow runway monitoring"],
  },
  {
    icon: Rocket,
    title: "Startups and Entrepreneurs",
    description:
      "Early-stage ventures seeking clean chart-of-accounts setup, systems alignment, and lean financial workflows from day one.",
    benefits: ["Chart-of-accounts setup", "Cloud systems onboarding"],
  },
  {
    icon: Store,
    title: "Retail and Wholesale Businesses",
    description:
      "Merchants managing inventory, high-frequency payment gateway collections, supplier invoices, and sales tax reconciliation.",
    benefits: ["Payment gateway reconciliations", "Accounts payable management"],
  },
  {
    icon: BriefcaseBusiness,
    title: "Consultants & Professional Services",
    description:
      "Law firms, engineering firms, creative agencies, and independent advisors needing straightforward invoicing and tax tracking.",
    benefits: ["Withholding tax tracking", "Clear client invoicing workflows"],
  },
  {
    icon: Home,
    title: "Landlords and Property Owners",
    description:
      "Property investors and estate managers requiring accurate tenant rent ledgers, expense tracking, and rental income tax preparation.",
    benefits: ["Rent collection ledgers", "Rental income tax support"],
  },
];

export default function WhoWeServeSection() {
  return (
    <section className="py-20 bg-brand-ivory/80 border-b border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
            Target Clients & Sectors
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-forest tracking-tight">
            Who We Serve
          </h2>
          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            Tailored accounting and finance solutions for ambitious business owners worldwide
            who value accuracy, compliance, and actionable financial visibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientSectors.map((sector, idx) => {
            const Icon = sector.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-brand-border/80 hover:border-brand-primary/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-forest text-brand-accent flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-forest mb-2">
                    {sector.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed mb-4">
                    {sector.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-border/50 space-y-2">
                  {sector.benefits.map((b, bIdx) => (
                    <div
                      key={bIdx}
                      className="flex items-center gap-2 text-xs text-forest/90 font-medium"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-brand-primary flex-shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Callout box in 6th slot */}
          <div className="p-6 rounded-2xl bg-forest text-white flex flex-col justify-between border border-forest-light">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-accent">
                Outsourced Finance Partner
              </span>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Not sure if your business model fits?
              </h3>
              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                We review your operational flow, transaction frequency, and
                reporting needs to confirm whether our services are an ideal
                fit.
              </p>
            </div>

            <div className="pt-6">
              <a
                href="/contact"
                className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-full text-xs font-semibold bg-brand-accent text-forest hover:bg-white transition-colors"
              >
                Inquire About Your Sector
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
