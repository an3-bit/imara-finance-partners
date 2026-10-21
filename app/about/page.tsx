import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Target,
  Compass,
  CheckCircle2,
  MapPin,
  ArrowRight,
  ExternalLink,
  Lock,
  Search,
  Award,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "About Imara Finance Partners | Business Accounting in Kenya",
  description:
    "Learn about Imara Finance Partners, our mission, vision, values, and practical approach to business accounting and financial advisory in Nairobi, Kenya.",
  openGraph: {
    title: "About Imara Finance Partners | Business Accounting in Kenya",
    description:
      "A proposed Kenyan accounting, bookkeeping, tax compliance, payroll, and business finance advisory firm based in Roysambu, Nairobi.",
    url: `${siteConfig.siteUrl}/about`,
  },
  alternates: {
    canonical: `${siteConfig.siteUrl}/about`,
  },
};

const coreValues = [
  {
    title: "Integrity",
    description:
      "Transparent reporting, straightforward counsel, and adherence to sound professional ethics in every engagement.",
    icon: ShieldCheck,
  },
  {
    title: "Accuracy",
    description:
      "Meticulous attention to reconciliations, source documentation, and financial recordkeeping precision.",
    icon: Search,
  },
  {
    title: "Confidentiality",
    description:
      "Guarding client financial statements, payroll records, and commercial details with strict confidentiality protocols.",
    icon: Lock,
  },
  {
    title: "Professionalism",
    description:
      "Reliable delivery schedules, prompt communication, and a disciplined approach to every client requirement.",
    icon: Award,
  },
  {
    title: "Practical Problem-Solving",
    description:
      "Developing actionable, real-world solutions that fit the realities of Kenyan business operations.",
    icon: Target,
  },
  {
    title: "Continuous Improvement",
    description:
      "Staying aligned with evolving statutory regulations, modern accounting tools, and electronic tax standards.",
    icon: Sparkles,
  },
];

export default function AboutPage() {
  return (
    <div className="bg-brand-ivory min-h-screen">
      {/* Hero Section */}
      <section className="bg-forest text-white py-16 lg:py-24 relative overflow-hidden border-b border-forest-light">
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/95 to-forest/90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-brand-accent font-medium">
              <span>About Our Firm</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              A Clearer Approach to Business Accounting
            </h1>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              Imara Finance Partners is being developed to provide practical
              accounting, bookkeeping, tax compliance support, payroll
              management, and financial advisory services to businesses in
              Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative & Positioning */}
      <section className="py-16 sm:py-20 bg-white border-b border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                Our Purpose
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-forest tracking-tight">
                Supporting Kenyan Enterprises with Financial Clarity
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-brand-charcoal/85 leading-relaxed">
                <p>
                  Our focus is on helping business owners maintain organized
                  financial information, understand their financial position,
                  and approach their responsibilities with greater clarity.
                </p>
                <p>
                  Too many growing enterprises struggle with fragmented records,
                  unreconciled bank and M-Pesa accounts, and last-minute statutory
                  panics. Imara Finance Partners establishes structured routines
                  so management always has dependable information at their
                  fingertips.
                </p>
                <p>
                  As an independent professional services firm, we intend to
                  engage appropriately qualified accounting professionals to
                  deliver coordinated, high-standard support directly to clients
                  across Kenya.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-brand-border">
                <div
                  className="relative h-[380px] w-full"
                  style={{
                    position: "relative",
                    height: "380px",
                    minHeight: "380px",
                    width: "100%",
                  }}
                >
                  <Image
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Finance professionals reviewing business performance"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-forest/20 mix-blend-multiply" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-20 bg-brand-ivory border-b border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="p-8 sm:p-10 rounded-3xl bg-forest text-white shadow-md relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-brand-accent flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xs uppercase font-bold tracking-widest text-brand-accent">
                  Our Mission
                </h3>
                <blockquote className="text-xl sm:text-2xl font-bold leading-snug">
                  “To help businesses make informed decisions through organized
                  financial records, responsible compliance support, and
                  practical financial insight.”
                </blockquote>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10 text-xs text-gray-300">
                Guiding every client consultation and reporting cycle.
              </div>
            </div>

            {/* Vision */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white text-forest shadow-md border border-brand-border flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-ivory text-brand-primary flex items-center justify-center border border-brand-border">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xs uppercase font-bold tracking-widest text-brand-primary">
                  Our Vision
                </h3>
                <blockquote className="text-xl sm:text-2xl font-bold leading-snug text-forest">
                  “To become a trusted accounting and business finance partner
                  for Kenyan enterprises.”
                </blockquote>
              </div>
              <div className="pt-6 mt-6 border-t border-brand-border/60 text-xs text-brand-muted">
                Built on steady relationships and consistent delivery.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white border-b border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              Principles We Uphold
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-forest tracking-tight">
              Our Core Values
            </h2>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              These principles guide how we handle client records, structure our
              communications, and approach financial problem-solving.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-brand-ivory border border-brand-border/80 hover:border-brand-primary/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-forest text-brand-accent flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-forest mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-brand-ivory/60 border-b border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              Operating Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-forest tracking-tight">
              How We Work With You
            </h2>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              We emphasize understanding each client's specific business model,
              agreeing on clear deliverables, maintaining organized physical and
              electronic records, communicating professionally, and handling
              financial information responsibly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-brand-border">
              <div className="text-brand-primary font-mono font-bold text-sm mb-2">
                01
              </div>
              <h3 className="text-base font-bold text-forest mb-2">
                Agreed Scope & Deliverables
              </h3>
              <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed">
                We document exactly what services will be provided, the
                frequency of reconciliations, and the scheduled delivery dates
                for management reports.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-brand-border">
              <div className="text-brand-primary font-mono font-bold text-sm mb-2">
                02
              </div>
              <h3 className="text-base font-bold text-forest mb-2">
                Structured Documentation
              </h3>
              <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed">
                Whether working from digital uploads, invoices, or cash books,
                we establish clean archiving practices that make retrieval
                effortless.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-brand-border">
              <div className="text-brand-primary font-mono font-bold text-sm mb-2">
                03
              </div>
              <h3 className="text-base font-bold text-forest mb-2">
                Confidential Partnership
              </h3>
              <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed">
                Your business records and sensitive financial movements are
                treated with total discretion, ensuring privacy and regulatory
                compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location & Contact CTA */}
      <section className="py-20 bg-forest text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
                Physical Office Location
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Based in Roysambu, Nairobi
              </h2>
              <div className="space-y-1 text-base sm:text-lg text-gray-200">
                <p className="font-semibold text-white">
                  {siteConfig.name}
                </p>
                <p>{siteConfig.address.building}, {siteConfig.address.floor}</p>
                <p>{siteConfig.address.area}, Nairobi, Kenya</p>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 max-w-xl pt-2">
                In-person consultations are arranged by appointment. Please
                contact our team to discuss your business accounting support
                needs.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-base bg-brand-accent text-forest hover:bg-white transition-all shadow-xl"
              >
                <span>Contact Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={siteConfig.maps.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-white border border-white/25 hover:bg-white/10 transition-colors"
              >
                <MapPin className="w-4 h-4 text-brand-accent" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
