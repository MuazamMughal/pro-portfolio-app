import type { Metadata } from "next"
import ContactPageClient from "@/components/main/ContactPageClient"
import JsonLd from "@/components/seo/JsonLd"
import { breadcrumbNode, personRef, websiteRef } from "@/lib/jsonld"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact & Hire",
  description:
    "Get in touch with Muazam Mughal, a Full-Stack Developer based in Sahiwal, Pakistan, for web development projects, collaboration, or consulting.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Muazam Mughal | Full-Stack Developer",
    description:
      "Get in touch with Muazam Mughal for web development projects, collaboration, or consulting.",
    url: "/contact",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Contact — Muazam Mughal | Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Muazam Mughal | Full-Stack Developer",
    description:
      "Get in touch with Muazam Mughal for web development projects, collaboration, or consulting.",
    images: ["/opengraph-image"],
  },
}

const contactPageNode = {
  "@type": "ContactPage",
  "@id": `${siteConfig.url}/contact#webpage`,
  url: `${siteConfig.url}/contact`,
  name: "Contact — Muazam Mughal",
  description: metadata.description as string,
  isPartOf: websiteRef(),
  about: personRef(),
}

const ContactPage = () => {
  return (
    <>
      <JsonLd
        nodes={[
          contactPageNode,
          breadcrumbNode([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]),
        ]}
      />
      <ContactPageClient />
    </>
  )
}

export default ContactPage
