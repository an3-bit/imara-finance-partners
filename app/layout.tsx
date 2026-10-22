import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "LedgerBridge Accountants | Global Accounting, Bookkeeping & Advisory",
    template: "%s | LedgerBridge Accountants",
  },
  description:
    "Professional accounting, bookkeeping, tax compliance support, payroll, and business finance advisory services for growing enterprises worldwide.",
  keywords: [
    "Global accounting services",
    "Outsourced bookkeeping for businesses",
    "Tax compliance support",
    "Payroll management services",
    "Financial reporting for small businesses",
    "Business accounting and advisory services",
    "Cloud accounting systems integration",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.siteUrl,
    title: "LedgerBridge Accountants | Global Accounting, Bookkeeping & Advisory",
    description:
      "Reliable accounting, tax compliance, payroll, and financial advisory services designed to help businesses worldwide stay organized, understand their numbers, and grow with confidence.",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "LedgerBridge Accountants | Global Accounting, Bookkeeping & Advisory",
    description:
      "Professional accounting, bookkeeping, tax compliance, payroll, and business finance advisory services for growing enterprises worldwide.",
  },
  alternates: {
    canonical: siteConfig.siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: siteConfig.name,
    description:
      "Professional accounting, bookkeeping, tax compliance support, payroll, and business finance advisory services for growing enterprises worldwide.",
    url: siteConfig.siteUrl,
    areaServed: "Worldwide",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:30",
        closes: "17:00",
      },
    ],
    priceRange: "$$",
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans text-brand-charcoal bg-brand-ivory antialiased selection:bg-brand-accent selection:text-forest">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
