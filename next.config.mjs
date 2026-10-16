/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  async redirects() {
    // The project was renamed; send the old *.vercel.app host to the new one so
    // Google consolidates all ranking signals on a single URL.
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "pro-portfolio-app.vercel.app" }],
        destination: "https://muazam-mughal.vercel.app/:path*",
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ]
  },
}

export default nextConfig
