import { ImageResponse } from "next/og"
import { siteConfig } from "@/lib/site"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0a",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#4ade80",
            }}
          />
          <span style={{ color: "#4ade80", fontSize: 24, letterSpacing: 4, textTransform: "uppercase" }}>
            {siteConfig.jobTitle}
          </span>
        </div>
        <div style={{ display: "flex", color: "#fafafa", fontSize: 80, fontWeight: 800, lineHeight: 1.1 }}>
          {siteConfig.name}
        </div>
        <div style={{ display: "flex", color: "#a1a1aa", fontSize: 30, marginTop: 24, maxWidth: 900 }}>
          Laravel &middot; Node.js &middot; Next.js &middot; React &middot; Vue.js
        </div>
      </div>
    ),
    { ...size }
  )
}
