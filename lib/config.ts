export interface SiteConfig {
  name: string;
  legalEntityNote: string;
  tagline: string;
  locationIndicator: string;
  address: {
    building: string;
    floor: string;
    area: string;
    city: string;
    country: string;
    fullFormatted: string;
  };
  contact: {
    email: string;
    isEmailPlaceholder: boolean;
    phone: string;
    isPhonePlaceholder: boolean;
    whatsapp: string;
    isWhatsAppConfigured: boolean;
  };
  maps: {
    googleMapsUrl: string;
    searchQuery: string;
  };
  siteUrl: string;
  businessHours: string;
}

export const siteConfig: SiteConfig = {
  name: "Imara Finance Partners",
  legalEntityNote:
    "A proposed Kenyan accounting, bookkeeping, tax compliance, payroll, and business finance advisory firm.",
  tagline: "Professional Accounting. Stronger Financial Decisions.",
  locationIndicator: "Serving businesses in Kenya | Roysambu, Nairobi",
  address: {
    building: "Jeda Plaza",
    floor: "4th Floor",
    area: "Roysambu",
    city: "Nairobi",
    country: "Kenya",
    fullFormatted: "Jeda Plaza, 4th Floor, Roysambu, Nairobi, Kenya",
  },
  contact: {
    // Configurable placeholders until official business accounts are supplied
    email: "info@imarafinance.co.ke",
    isEmailPlaceholder: true,
    phone: "+254 700 000 000",
    isPhonePlaceholder: true,
    whatsapp: "+254 700 000 000",
    isWhatsAppConfigured: false,
  },
  maps: {
    searchQuery: "Jeda Plaza, Roysambu, Nairobi",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Jeda+Plaza+Roysambu+Nairobi+Kenya",
  },
  siteUrl: "https://www.imarafinance.co.ke",
  businessHours: "Monday – Friday: 8:30 AM – 5:00 PM (EAT)",
};
