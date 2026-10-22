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
    default: "Imara Finance Partners | Accounting & Bookkeeping in Nairobi",
    template: "%s | Imara Finance Partners",
  },
  description:
    "Professional accounting, bookkeeping, tax compliance support, payroll, and business finance advisory services for Kenyan businesses. Based in Roysambu, Nairobi.",
  keywords: [
    "Accounting services in Nairobi",
    "Bookkeeping services in Kenya",
    "Outsourced accounting for SMEs",
    "Tax compliance support in Kenya",
    "Payroll services in Nairobi",
    "Financial reporting for small businesses",
    "eTIMS support in Kenya",
    "Business accounting and advisory services",
    "Accounting services in Roysambu",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
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
    locale: "en_KE",
    url: siteConfig.siteUrl,
    title: "Imara Finance Partners | Accounting & Bookkeeping in Nairobi",
    description:
      "Reliable accounting, tax compliance, payroll, and financial advisory services designed to help Kenyan businesses stay organized, understand their numbers, and grow with confidence.",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Imara Finance Partners | Accounting & Bookkeeping in Nairobi",
    description:
      "Professional accounting, bookkeeping, tax compliance, payroll, and business finance advisory services in Nairobi, Kenya.",
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
      "Professional accounting, bookkeeping, tax compliance support, payroll, and business finance advisory services for Kenyan enterprises.",
    url: siteConfig.siteUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.building}, ${siteConfig.address.floor}`,
      addressLocality: siteConfig.address.area,
      addressRegion: siteConfig.address.city,
      addressCountry: "KE",
    },
    areaServed: {
      "@type": "Country",
      name: "Kenya",
    },
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
