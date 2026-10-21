"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  Send,
  Mail,
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  ShieldAlert,
  Info,
} from "lucide-react";
import { siteConfig } from "@/lib/config";
import { servicesData } from "@/lib/services-data";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";

  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    service: "",
    description: "",
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showMailtoModal, setShowMailtoModal] = useState(false);
  const [generatedMailto, setGeneratedMailto] = useState("");

  useEffect(() => {
    if (preselectedService) {
      // Find matching service or set directly
      const match = servicesData.find(
        (s) =>
          s.title.toLowerCase() === preselectedService.toLowerCase() ||
          s.slug.toLowerCase() === preselectedService.toLowerCase()
      );
      if (match) {
        setFormData((prev) => ({ ...prev, service: match.title }));
      } else {
        setFormData((prev) => ({ ...prev, service: preselectedService }));
      }
    }
  }, [preselectedService]);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      errs.email = "Please enter your email address.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errs.email = "Please enter a valid email address (e.g. name@company.com).";
      }
    }

    if (!formData.service) {
      errs.service = "Please select the service of interest.";
    }

    if (!formData.description.trim()) {
      errs.description = "Please provide a brief description of the support needed.";
    } else if (formData.description.trim().length < 15) {
      errs.description =
        "Please provide a little more detail (at least 15 characters).";
    }

    if (!formData.consent) {
      errs.consent =
        "You must acknowledge that this inquiry will open your email application and conforms to our privacy notice.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Construct the structured email message
    const subject = encodeURIComponent(
      `Service Inquiry: ${formData.service} - ${
        formData.businessName || formData.fullName
      }`
    );

    const bodyText = `Dear Imara Finance Partners Team,

I would like to inquire about accounting and financial services for my business.

--- INQUIRY DETAILS ---
Full Name: ${formData.fullName}
Business Name: ${formData.businessName || "Not specified / Sole proprietor"}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Service of Interest: ${formData.service}

Brief Description of Support Needed:
${formData.description}

---
Inquiry submitted via Imara Finance Partners website (Frontend Inquiry Flow)
Location: Roysambu, Nairobi, Kenya
`;

    const body = encodeURIComponent(bodyText);
    const recipient = siteConfig.contact.email;
    const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;

    setGeneratedMailto(mailtoUrl);
    setShowMailtoModal(true);

    // Trigger the mail client directly
    window.location.href = mailtoUrl;
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-brand-border/80 shadow-md">
      <div className="mb-6 space-y-1">
        <h2 className="text-xl sm:text-2xl font-bold text-forest">
          Send an Inquiry
        </h2>
        <p className="text-xs sm:text-sm text-brand-muted">
          Complete the form below. Once validated, your device email application
          will open with your pre-filled inquiry ready to send.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs font-semibold uppercase tracking-wider text-forest mb-1.5"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            placeholder="e.g. Grace Wanjiru"
            className={`w-full px-4 py-3 rounded-xl border text-sm text-brand-charcoal bg-brand-ivory/40 focus:bg-white focus:outline-none focus:ring-2 ${
              errors.fullName
                ? "border-red-400 focus:ring-red-200"
                : "border-brand-border focus:border-brand-primary focus:ring-brand-primary/20"
            }`}
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        {/* Business Name (Optional) */}
        <div>
          <label
            htmlFor="businessName"
            className="block text-xs font-semibold uppercase tracking-wider text-forest mb-1.5"
          >
            Business / Organization Name{" "}
            <span className="text-brand-muted font-normal lowercase">
              (optional)
            </span>
          </label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            value={formData.businessName}
            onChange={(e) =>
              setFormData({ ...formData, businessName: e.target.value })
            }
            placeholder="e.g. Rift Logistics Ltd / Freelance Consultant"
            className="w-full px-4 py-3 rounded-xl border border-brand-border text-sm text-brand-charcoal bg-brand-ivory/40 focus:bg-white focus:outline-none focus:ring-2 focus:border-brand-primary focus:ring-brand-primary/20"
          />
        </div>

        {/* Email & Phone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold uppercase tracking-wider text-forest mb-1.5"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="e.g. grace@company.co.ke"
              className={`w-full px-4 py-3 rounded-xl border text-sm text-brand-charcoal bg-brand-ivory/40 focus:bg-white focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-400 focus:ring-red-200"
                : "border-brand-border focus:border-brand-primary focus:ring-brand-primary/20"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-semibold uppercase tracking-wider text-forest mb-1.5"
            >
              Phone Number{" "}
              <span className="text-brand-muted font-normal lowercase">
                (optional)
              </span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              placeholder="e.g. +254 712 345 678"
              className="w-full px-4 py-3 rounded-xl border border-brand-border text-sm text-brand-charcoal bg-brand-ivory/40 focus:bg-white focus:outline-none focus:ring-2 focus:border-brand-primary focus:ring-brand-primary/20"
            />
          </div>
        </div>

        {/* Service of Interest */}
        <div>
          <label
            htmlFor="service"
            className="block text-xs font-semibold uppercase tracking-wider text-forest mb-1.5"
          >
            Service of Interest <span className="text-red-500">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={(e) =>
              setFormData({ ...formData, service: e.target.value })
            }
            className={`w-full px-4 py-3 rounded-xl border text-sm text-brand-charcoal bg-brand-ivory/40 focus:bg-white focus:outline-none focus:ring-2 ${
              errors.service
                ? "border-red-400 focus:ring-red-200"
                : "border-brand-border focus:border-brand-primary focus:ring-brand-primary/20"
            }`}
          >
            <option value="">Select a service category...</option>
            {servicesData.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Multiple Accounting Services">
              Multiple / Coordinated Accounting Services
            </option>
            <option value="General Financial Advisory Inquiry">
              General Accounting Inquiry
            </option>
          </select>
          {errors.service && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.service}</span>
            </p>
          )}
        </div>

        {/* Description of Support Needed */}
        <div>
          <label
            htmlFor="description"
            className="block text-xs font-semibold uppercase tracking-wider text-forest mb-1.5"
          >
            Brief Description of Support Needed{" "}
            <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            placeholder="Please tell us a little about your business, transaction volume, or current accounting bottlenecks..."
            className={`w-full px-4 py-3 rounded-xl border text-sm text-brand-charcoal bg-brand-ivory/40 focus:bg-white focus:outline-none focus:ring-2 ${
              errors.description
                ? "border-red-400 focus:ring-red-200"
                : "border-brand-border focus:border-brand-primary focus:ring-brand-primary/20"
            }`}
          />
          {errors.description && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.description}</span>
            </p>
          )}
          <p className="text-[11px] text-brand-muted mt-1">
            Please do not include sensitive credentials, tax portal passwords, or
            bank PINs.
          </p>
        </div>

        {/* Consent Checkbox */}
        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={(e) =>
                setFormData({ ...formData, consent: e.target.checked })
              }
              className="mt-1 w-4 h-4 rounded border-brand-border text-brand-primary focus:ring-brand-primary"
            />
            <span className="text-xs text-brand-charcoal/80 leading-relaxed">
              I acknowledge that this inquiry will open my device email
              application with pre-filled details to send to Imara Finance
              Partners, and I agree to the website{" "}
              <a
                href="/privacy-policy"
                target="_blank"
                className="text-brand-primary underline hover:text-forest"
              >
                Privacy Policy
              </a>
              .
            </span>
          </label>
          {errors.consent && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.consent}</span>
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-base font-bold bg-brand-primary text-white hover:bg-[#066537] active:scale-[0.99] transition-all shadow-md shadow-brand-primary/20 cursor-pointer"
          >
            <span>Open Email to Send Inquiry</span>
            <Send className="w-4 h-4" />
          </button>
        </div>

        {/* Notice on Frontend Hand-off */}
        <div className="p-3.5 rounded-xl bg-brand-ivory/80 border border-brand-border/60 flex items-start gap-2.5 text-xs text-brand-muted">
          <Info className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
          <p>
            <strong>Transparent Process:</strong> This website operates with a
            client-side inquiry flow. Submitting this form prepares a prefilled
            message in your default email client (e.g. Outlook, Gmail, Apple
            Mail). You must click <em>Send</em> in your email app to complete delivery.
          </p>
        </div>
      </form>

      {/* Confirmation Modal / Instructions */}
      {showMailtoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-5 border border-brand-border shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-brand-ivory text-brand-primary flex items-center justify-center mx-auto">
              <Mail className="w-6 h-6" />
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-xl font-bold text-forest">
                Inquiry Prefilled in Your Email
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Your email client should have opened automatically. If it did
                not open or you use webmail, please click the button below to
                open it or send manually to{" "}
                <span className="font-mono font-semibold text-forest">
                  {siteConfig.contact.email}
                </span>
                .
              </p>
            </div>

            {siteConfig.contact.isEmailPlaceholder && (
              <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs">
                <strong>Configurable Note:</strong> The recipient address (
                {siteConfig.contact.email}) is currently a placeholder until the
                official business email is configured in{" "}
                <code>lib/config.ts</code>.
              </div>
            )}

            <div className="flex flex-col gap-2 pt-2">
              <a
                href={generatedMailto}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-bold bg-brand-primary text-white hover:bg-[#066537] transition-all"
              >
                <span>Launch Email Client Again</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setShowMailtoModal(false)}
                className="w-full px-5 py-2.5 rounded-full text-xs font-semibold text-brand-muted hover:text-forest transition-colors"
              >
                Close This Window
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
