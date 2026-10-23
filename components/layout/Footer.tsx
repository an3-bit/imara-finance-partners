import React from "react";
import Link from "next/link";
import {
  Mail,
  Clock,
  ArrowUpRight,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";
import BrandLogo from "@/components/ui/BrandLogo";
import { siteConfig } from "@/lib/config";
import { servicesData } from "@/lib/services-data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest text-white border-t border-forest-light/40">
      {/* Top Banner / Location Strip */}
      <div className="border-b border-white/10 bg-forest-dark/70 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/80 gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            <span>{siteConfig.locationIndicator}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-white/60">
              Hours: {siteConfig.businessHours}
            </span>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center gap-1.5 text-brand-accent hover:underline"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{siteConfig.contact.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info (2 columns) */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="light" />
            <p className="text-sm text-gray-300 leading-relaxed max-w-sm pt-2">
              LedgerBridge Accountants provides structured accounting,
              bookkeeping, statutory tax compliance support, payroll, and
              practical business finance advisory services to growing enterprises
              worldwide.
            </p>

            <div className="pt-2 text-xs text-brand-accent font-medium tracking-wide">
              {siteConfig.tagline}
            </div>

            <div className="pt-4 space-y-2.5 text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="font-mono text-xs hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
                {siteConfig.contact.isEmailPlaceholder && (
                  <span className="text-[10px] text-gray-400 border border-white/20 rounded px-1.5 py-0.5">
                    Configurable
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white border-b border-white/10 pb-2">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-brand-accent transition-colors flex items-center justify-between"
                >
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-brand-accent transition-colors flex items-center justify-between"
                >
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-brand-accent transition-colors flex items-center justify-between"
                >
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-brand-accent transition-colors flex items-center justify-between"
                >
                  <span>Contact Us</span>
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-accent hover:underline"
                >
                  <span>Request a Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links (2 columns) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white border-b border-white/10 pb-2">
              Our Core Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {servicesData.map((service) => (
                <Link
                  key={service.id}
                  href={`/services#${service.id}`}
                  className="text-gray-300 hover:text-brand-accent transition-colors truncate block text-xs py-1"
                  title={service.title}
                >
                  • {service.title}
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-brand-gold">
                <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                <span>Confidential, structured, and compliant client support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Notice Strip */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="text-center md:text-left">
            <p>
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <p className="text-[11px] text-gray-400 mt-1 max-w-2xl">
              Professional accounting, bookkeeping, and business advisory services.
              Management accounts are for internal governance; distinct from
              statutory audit or external assurance engagements.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-brand-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-brand-accent transition-colors"
            >
              Terms of Service
            </Link>
            <a
              href="#top"
              className="text-white hover:text-brand-accent transition-colors"
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
