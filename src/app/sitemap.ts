import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site"

// Bump these when the page content meaningfully changes — a stable lastModified
// is a stronger freshness signal than "now" on every build.
const routes = [
  { path: "", lastModified: "2026-10-16", changeFrequency: "weekly", priority: 1 },
  { path: "/work", lastModified: "2026-10-16", changeFrequency: "monthly", priority: 0.9 },
  { path: "/resume", lastModified: "2026-10-16", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", lastModified: "2026-10-16", changeFrequency: "yearly", priority: 0.6 },
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: new Date(route.lastModified),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
