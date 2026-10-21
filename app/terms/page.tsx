import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowLeft, ShieldAlert } from "lucide-react";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms of Service | Imara Finance Partners",
  description:
    "Terms of service, website usage disclaimer, and scope of engagement principles for Imara Finance Partners, Nairobi, Kenya.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/terms`,
  },
};

export default function TermsPage() {
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
              <FileText className="w-4 h-4" />
              <span>Draft Website Terms</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-forest tracking-tight">
              Terms of Website Use & Service Scope
            </h1>
            <p className="text-xs text-brand-muted">
              Last updated: October 2026 | Prepared for Imara Finance Partners,
              Roysambu, Nairobi, Kenya
            </p>
          </div>

          {/* Section 1: Informational Purpose Only */}
          <section className="space-y-3 text-sm text-brand-charcoal/85 leading-relaxed">
            <h2 className="text-lg font-bold text-forest">
              1. Informational Purpose & No Formed Client Relationship
            </h2>
            <p>
              The materials and descriptions contained on this website are
              provided for general informational purposes only. Accessing or
              browsing this website, submitting an electronic inquiry, or
              receiving an initial email response does not by itself establish a
              formal accountant-client relationship or binding engagement.
            </p>
            <p>
              A formal professional relationship is established solely upon the
              execution of a written client engagement agreement defining the
              agreed scope, deliverables, and service terms.
            </p>
          </section>

          {/* Section 2: Statutory and Advisory Distinctions */}
          <section className="space-y-3 text-sm text-brand-charcoal/85 leading-relaxed">
            <h2 className="text-lg font-bold text-forest">
              2. Nature of Professional Services & Distinctions
            </h2>
            <p>
              Imara Finance Partners provides outsourced bookkeeping, accounting
              support, management accounts preparation, statutory tax filing
              support, and business finance advisory. Please note:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>
                <strong>Management Accounts vs. Statutory Audit:</strong>{" "}
                Periodic management accounts and cash-flow reports are prepared
                for internal operational management and governance. They do not
                constitute statutory audit reports or independent assurance
                opinions.
              </li>
              <li>
                <strong>Audit Preparation:</strong> Our audit preparation
                services organize schedules, reconcile ledgers, and facilitate
                external review files. These services are distinct from
                independent statutory external audit engagements.
              </li>
              <li>
                <strong>Tax Compliance:</strong> Tax returns, computations, and
                schedules are prepared based on client-supplied records and
                current Kenyan tax regulations. The legal responsibility for
                tax declarations remains with the taxpayer.
              </li>
            </ul>
          </section>

          {/* Section 3: Intellectual Property */}
          <section className="space-y-3 text-sm text-brand-charcoal/85 leading-relaxed">
            <h2 className="text-lg font-bold text-forest">
              3. Intellectual Property & Brand Rights
            </h2>
            <p>
              All branding, text, layout structures, graphics, and logo
              treatments displayed on this website are the intellectual property
              of Imara Finance Partners or used under appropriate license.
              Unauthorized reproduction, scraping, or duplication without
              prior written consent is prohibited.
            </p>
          </section>

          {/* Section 4: Limitation of Liability */}
          <section className="space-y-3 text-sm text-brand-charcoal/85 leading-relaxed">
            <h2 className="text-lg font-bold text-forest">
              4. Limitation of Liability
            </h2>
            <p>
              While reasonable efforts are made to keep information on this
              website accurate and up to date, Imara Finance Partners makes no
              warranties regarding the completeness or timeliness of general
              website content. Imara Finance Partners shall not be liable for
              actions taken in reliance upon general website text prior to a
              formal written consultation and engagement.
            </p>
          </section>

          {/* Section 5: Governing Law */}
          <section className="space-y-3 text-sm text-brand-charcoal/85 leading-relaxed border-t border-brand-border/60 pt-6">
            <h2 className="text-lg font-bold text-forest">
              5. Governing Law & Jurisdiction
            </h2>
            <p>
              These Terms and any dispute arising from the use of this website
              shall be governed by and construed in accordance with the laws of
              the Republic of Kenya, with exclusive jurisdiction in the courts
              of Nairobi, Kenya.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
