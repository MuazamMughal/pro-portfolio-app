import { ImageResponse } from "next/og"

export const size = { width: 64, height: 64 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          borderRadius: 14,
          color: "#4ade80",
          fontSize: 30,
          fontWeight: 800,
          fontFamily: "sans-serif",
        }}
      >
        MM
      </div>
    ),
    { ...size }
  )
}
