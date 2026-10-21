import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/config";

export const alt = "Imara Finance Partners - Professional Accounting in Nairobi";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#123B35",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "sans-serif",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: "#087A43",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#A8E986",
              fontSize: "28px",
              fontWeight: "bold",
            }}
          >
            I
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: "32px",
                fontWeight: "900",
                letterSpacing: "1px",
              }}
            >
              IMARA
            </span>
            <span
              style={{
                fontSize: "14px",
                letterSpacing: "4px",
                color: "#A8E986",
                textTransform: "uppercase",
                fontWeight: "600",
              }}
            >
              Finance Partners
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "52px",
              fontWeight: "800",
              lineHeight: 1.15,
              maxWidth: "950px",
            }}
          >
            Professional Accounting. Stronger Financial Decisions.
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "#DDE5E0",
              maxWidth: "850px",
            }}
          >
            Bookkeeping, Tax Compliance, Payroll & Business Financial Advisory for
            Kenyan Enterprises.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.2)",
            paddingTop: "30px",
            fontSize: "16px",
            color: "#A8E986",
          }}
        >
          <span>Jeda Plaza, 4th Floor, Roysambu, Nairobi, Kenya</span>
          <span style={{ color: "white" }}>www.imarafinance.co.ke</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
