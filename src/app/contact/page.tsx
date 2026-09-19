import type { Metadata } from "next"
import ContactPageClient from "@/components/main/ContactPageClient"
import JsonLd from "@/components/seo/JsonLd"
import { breadcrumbNode, personRef, websiteRef } from "@/lib/jsonld"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Muazam Mughal, a Full-Stack Developer based in Sahiwal, Pakistan, for web development projects, collaboration, or consulting.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Muazam Mughal | Full-Stack Developer",
    description:
      "Get in touch with Muazam Mughal for web development projects, collaboration, or consulting.",
    url: "/contact",
    type: "website",
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
