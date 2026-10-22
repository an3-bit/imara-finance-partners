import { ImageResponse } from "next/og";

export const alt = "LedgerBridge Accountants - Global Accounting & Advisory";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0D2925 0%, #123B35 55%, #1A524A 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          color: "white",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", top: -80, right: -80, width: 420, height: 420, borderRadius: "50%", background: "rgba(168,233,134,0.06)", display: "flex" }} />
        <div style={{ position: "absolute", bottom: -100, left: -60, width: 360, height: 360, borderRadius: "50%", background: "rgba(8,122,67,0.14)", display: "flex" }} />

        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div style={{ width: 82, height: 82, borderRadius: 20, background: "#051A16", border: "2px solid #D6B56D", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ fontSize: 36, fontWeight: 900, color: "#F6E8B1", letterSpacing: 2, display: "flex", lineHeight: 1 }}>LB</span>
            <div style={{ width: 34, height: 3.5, borderRadius: 2, background: "#D6B56D", marginTop: 4, display: "flex" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 42, fontWeight: 900, letterSpacing: 3, color: "white", lineHeight: 1, display: "flex" }}>LEDGERBRIDGE</span>
            <span style={{ fontSize: 14, letterSpacing: 5, color: "#E8CE8A", textTransform: "uppercase", fontWeight: 700, marginTop: 6, display: "flex" }}>Accountants</span>
          </div>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#D6B56D", marginLeft: 12, display: "flex" }} />
          <span style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", display: "flex" }}>Global Financial Advisory</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            <span style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.13, color: "white", display: "flex" }}>Professional Accounting.</span>
            <span style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.13, color: "#A8E986", display: "flex" }}>Stronger Financial Decisions.</span>
          </div>
          <span style={{ fontSize: 22, color: "rgba(255,255,255,0.72)", maxWidth: 820, lineHeight: 1.5, display: "flex" }}>Bookkeeping · Tax Compliance · Payroll · Financial Reporting · Advisory</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(168,233,134,0.2)", paddingTop: 28, fontSize: 15 }}>
          <span style={{ color: "#A8E986", fontWeight: 500, display: "flex" }}>Remote &amp; On-Site Financial Solutions</span>
          <div style={{ display: "flex", alignItems: "center", background: "rgba(168,233,134,0.11)", border: "1px solid rgba(168,233,134,0.28)", borderRadius: 999, padding: "8px 22px" }}>
            <span style={{ color: "#A8E986", fontWeight: 700, fontSize: 14, display: "flex" }}>Serving Businesses Globally</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
