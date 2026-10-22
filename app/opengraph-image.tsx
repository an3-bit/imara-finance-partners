import { ImageResponse } from "next/og";

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
        {/* Decorative bg circle top-right */}
        <div style={{
          position: "absolute", top: -80, right: -80,
          width: 420, height: 420, borderRadius: "50%",
          background: "rgba(168,233,134,0.06)", display: "flex",
        }} />
        {/* Decorative bg circle bottom-left */}
        <div style={{
          position: "absolute", bottom: -100, left: -60,
          width: 360, height: 360, borderRadius: "50%",
          background: "rgba(8,122,67,0.14)", display: "flex",
        }} />

        {/* TOP ROW: Logo icon + wordmark + location */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {/* Icon badge */}
          <div style={{
            width: 80, height: 80, borderRadius: 18,
            background: "#0D2925",
            border: "2px solid rgba(168,233,134,0.45)",
            display: "flex", alignItems: "flex-end",
            justifyContent: "flex-start",
            padding: "12px 14px", gap: 5, flexShrink: 0,
          }}>
            <div style={{ width: 12, height: 18, borderRadius: 4, background: "#A8E986", flexShrink: 0 }} />
            <div style={{ width: 12, height: 30, borderRadius: 4, background: "#087A43", flexShrink: 0 }} />
            <div style={{ width: 12, height: 40, borderRadius: 4, background: "#D6B56D", flexShrink: 0 }} />
          </div>

          {/* Wordmark */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 42, fontWeight: 900, letterSpacing: 3, color: "white", lineHeight: 1 }}>
              IMARA
            </span>
            <span style={{ fontSize: 14, letterSpacing: 5, color: "#A8E986", textTransform: "uppercase", fontWeight: 600, marginTop: 6 }}>
              Finance Partners
            </span>
          </div>

          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(168,233,134,0.45)", marginLeft: 12, display: "flex" }} />
          <span style={{ fontSize: 15, color: "rgba(255,255,255,0.45)" }}>Nairobi, Kenya</span>
        </div>

        {/* MIDDLE: Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.13, color: "white", maxWidth: 900 }}>
            {"Professional Accounting. "}
            <span style={{ color: "#A8E986" }}>Stronger Financial Decisions.</span>
          </div>
          <div style={{ fontSize: 22, color: "rgba(255,255,255,0.72)", maxWidth: 820, lineHeight: 1.5 }}>
            Bookkeeping · Tax Compliance · Payroll · eTIMS · Business Finance Advisory
          </div>
        </div>

        {/* BOTTOM: Address strip */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          borderTop: "1px solid rgba(168,233,134,0.2)", paddingTop: 28, fontSize: 15,
        }}>
          <span style={{ color: "#A8E986", fontWeight: 500 }}>
            Jeda Plaza, 4th Floor, Roysambu, Nairobi
          </span>
          <div style={{
            display: "flex", alignItems: "center", gap: 10,
            background: "rgba(168,233,134,0.11)",
            border: "1px solid rgba(168,233,134,0.28)",
            borderRadius: 999, padding: "8px 22px",
          }}>
            <span style={{ color: "#A8E986", fontWeight: 700, fontSize: 14 }}>
              Serving Kenyan Businesses
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}


