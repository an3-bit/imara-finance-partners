import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, AlertTriangle, ArrowLeft } from "lucide-react";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy | LedgerBridge",
  description:
    "Privacy Policy and data confidentiality guidelines for visitors and prospective clients of LedgerBridge.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-brand-ivory min-h-screen py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-brand-primary hover:text-forest transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-border/80 shadow-sm space-y-8">
          {/* Header */}
          <div className="border-b border-brand-border/60 pb-6 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-primary">
              <ShieldCheck className="w-4 h-4" />
              <span>Draft Client Privacy Policy</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-forest tracking-tight">
              Privacy & Data Confidentiality Notice
            </h1>
            <p className="text-xs text-brand-muted">
              Last updated: October 2026 | Prepared for LedgerBridge
            </p>
          </div>

          {/* Security Alert Box */}
          <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 space-y-2">
            <div className="flex items-center gap-2 font-bold text-sm">
              <AlertTriangle className="w-4 h-4 text-amber-700 flex-shrink-0" />
              <span>Important Security & Inquiry Submission Warning</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed">
              Contact form inquiries submitted via this website are intended
              solely for initial business communication and service scoping.{" "}
              <strong>
                Never transmit confidential passwords, banking PIN codes,
                revenue authority login credentials, or
                unencrypted personal financial documents through web forms or
                standard email.
              </strong>
            </p>
          </div>

          {/* Section 1: Introduction */}
          <section className="space-y-3 text-sm text-brand-charcoal/85 leading-relaxed">
            <h2 className="text-lg font-bold text-forest">
              1. Information We Collect
            </h2>
            <p>
              When you submit an inquiry through our website, we may collect the
              following basic contact information:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>Your full name and professional title.</li>
              <li>Your organization or business name.</li>
              <li>Your contact email address and telephone number.</li>
              <li>
                Your selected service area of interest and a high-level summary
                of your accounting or advisory needs.
              </li>
            </ul>
          </section>

          {/* Section 2: Use of Information */}
          <section className="space-y-3 text-sm text-brand-charcoal/85 leading-relaxed">
            <h2 className="text-lg font-bold text-forest">
              2. How We Use Your Information
            </h2>
            <p>
              Information gathered through preliminary inquiries is utilized
              strictly to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>
                Evaluate the appropriate scope of accounting or advisory
                services required.
              </li>
              <li>
                Respond directly to your inquiry and schedule consultation
                meetings.
              </li>
              <li>
                Prepare formal written engagement proposals where mutually
                agreed upon.
              </li>
            </ul>
            <p>
              We do not sell, rent, commercialize, or share prospective client
              contact information with third-party marketers or unrelated commercial
              entities.
            </p>
          </section>

          {/* Section 3: Client Confidentiality */}
          <section className="space-y-3 text-sm text-brand-charcoal/85 leading-relaxed">
            <h2 className="text-lg font-bold text-forest">
              3. Client Confidentiality
            </h2>
            <p>
              LedgerBridge recognizes the sensitive nature of
              financial administration, bookkeeping, and payroll records. When an
              engagement agreement is entered into, all financial books, bank
              statements, and employee payroll details are governed by binding
              confidentiality commitments.
            </p>
          </section>

          {/* Section 4: Data Protection Principles */}
          <section className="space-y-3 text-sm text-brand-charcoal/85 leading-relaxed">
            <h2 className="text-lg font-bold text-forest">
              4. Alignment with Recognized Data Protection Principles
            </h2>
            <p>
              We observe recognized data protection principles, including
              lawful processing, purpose limitation, data minimization,
              accuracy, and storage limitation. Visitors may request the
              deletion or correction of their contact records by contacting our
              team.
            </p>
          </section>

          {/* Section 5: Contact for Privacy Concerns */}
          <section className="space-y-3 text-sm text-brand-charcoal/85 leading-relaxed border-t border-brand-border/60 pt-6">
            <h2 className="text-lg font-bold text-forest">
              5. Contacting Us Regarding Privacy
            </h2>
            <p>
              For inquiries regarding data confidentiality or our handling of
              inquiry information, please write to:
            </p>
            <div className="p-4 rounded-xl bg-brand-ivory text-xs space-y-1 font-mono">
              <p>
                <strong>LedgerBridge</strong>
              </p>
              <p>Email: {siteConfig.contact.email}</p>
              <p className="font-sans text-brand-muted pt-1">
                Formal inquiries may also be submitted via our Contact page.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
