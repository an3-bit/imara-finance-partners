import React, { Suspense } from "react";
import type { Metadata } from "next";
import {
  MapPin,
  Mail,
  Clock,
  ExternalLink,
  ShieldCheck,
  Building,
  HelpCircle,
} from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact LedgerBridge Accountants | Global Accounting & Advisory",
  description:
    "Get in touch with LedgerBridge Accountants for professional accounting, bookkeeping, tax compliance support, payroll, and business finance advisory.",
  openGraph: {
    title: "Contact LedgerBridge Accountants | Global Accounting & Advisory",
    description:
      "Get in touch with our team for structured bookkeeping, tax compliance, payroll, and business advisory services. Virtual and in-person consultations available.",
    url: `${siteConfig.siteUrl}/contact`,
  },
  alternates: {
    canonical: `${siteConfig.siteUrl}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div className="bg-brand-ivory min-h-screen">
      {/* Hero Banner */}
      <section className="bg-forest text-white py-14 lg:py-20 relative overflow-hidden border-b border-forest-light">
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/95 via-forest to-forest-dark/90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-dark/90 backdrop-blur-md border border-brand-accent/40 text-xs text-brand-accent font-bold shadow-md">
              <span>Client Inquiries & Consultation</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Contact LedgerBridge Accountants
            </h1>
            <p className="text-base sm:text-lg text-white/95 font-normal leading-relaxed">
              Tell us about your business, transaction volume, or the specific
              accounting support you require. We provide dedicated financial
              management and advisory to growing enterprises worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Contact Form */}
            <div className="lg:col-span-7">
              <Suspense
                fallback={
                  <div className="p-12 text-center bg-white rounded-3xl border border-brand-border">
                    <p className="text-sm text-brand-muted">
                      Loading inquiry form...
                    </p>
                  </div>
                }
              >
                <ContactForm />
              </Suspense>
            </div>

            {/* Right Column: Contact Details, Address Card, Map Information */}
            <div className="lg:col-span-5 space-y-6">
              {/* Office Details Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border/80 shadow-sm space-y-6">
                <div className="flex items-center gap-3 border-b border-brand-border/60 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-forest text-brand-accent flex items-center justify-center">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-forest">
                      Office Location
                    </h2>
                    <span className="text-xs text-brand-muted">
                      In-person visits by appointment
                    </span>
                  </div>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-forest">
                        {siteConfig.name}
                      </p>
                      <p className="text-brand-charcoal/90">
                        {siteConfig.address.building},{" "}
                        {siteConfig.address.floor}
                      </p>
                      <p className="text-brand-charcoal/90">
                        {siteConfig.address.area}, Nairobi, Kenya
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-forest">Operating Hours</p>
                      <p className="text-brand-charcoal/90 text-xs">
                        {siteConfig.businessHours}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-forest">General Inquiries</p>
                      <p className="font-mono text-xs text-brand-charcoal">
                        {siteConfig.contact.email}
                      </p>
                      {siteConfig.contact.isEmailPlaceholder && (
                        <span className="text-[10px] text-amber-700 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded mt-1 inline-block">
                          Configurable placeholder
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Google Maps External Link Panel */}
                <div className="pt-4 border-t border-brand-border/60">
                  <a
                    href={siteConfig.maps.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold bg-brand-ivory text-forest hover:bg-forest hover:text-white border border-brand-border transition-all"
                  >
                    <MapPin className="w-4 h-4 text-brand-primary" />
                    <span>View Jeda Plaza on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <p className="text-[11px] text-brand-muted text-center mt-2">
                    Verified building location: Jeda Plaza, Roysambu, along
                    Thika Road, Nairobi.
                  </p>
                </div>
              </div>

              {/* Data Confidentiality Notice */}
              <div className="p-6 rounded-3xl bg-forest text-white border border-forest-light space-y-3">
                <div className="flex items-center gap-2 text-brand-accent">
                  <ShieldCheck className="w-5 h-5" />
                  <h3 className="text-sm font-bold">
                    Confidentiality Guarantee
                  </h3>
                </div>
                <p className="text-xs text-gray-200 leading-relaxed">
                  We treat all prospective client communications with complete
                  confidentiality. Please note: Never transmit banking passwords,
                  PIN codes, or tax portal passwords through web inquiry forms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
