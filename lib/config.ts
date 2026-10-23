export interface SiteConfig {
  name: string;
  legalEntityNote: string;
  tagline: string;
  locationIndicator: string;
  contact: {
    email: string;
    isEmailPlaceholder: boolean;
    phone?: string;
    isPhonePlaceholder?: boolean;
    whatsapp?: string;
    isWhatsAppConfigured?: boolean;
  };
  siteUrl: string;
  businessHours: string;
}

export const siteConfig: SiteConfig = {
  name: "LedgerBridge Accountants",
  legalEntityNote:
    "A professional accounting, bookkeeping, tax compliance, payroll, and business finance advisory firm.",
  tagline: "Professional Accounting. Stronger Financial Decisions.",
  locationIndicator: "Serving Businesses Globally | Remote & Worldwide",
  contact: {
    // Configured business email address
    email: "info@ledgerbridgeaccountants.com",
    isEmailPlaceholder: false,
  },
  siteUrl: "https://www.ledgerbridge.com",
  businessHours: "Monday – Friday: 8:30 AM – 5:00 PM",
};
