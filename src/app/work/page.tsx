import type { Metadata } from "next"
import WorkPageClient from "@/components/main/WorkPageClient"
import JsonLd from "@/components/seo/JsonLd"
import { breadcrumbNode, personRef, websiteRef, projectsItemListNode, PROJECTS_LIST_ID } from "@/lib/jsonld"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Full-stack projects by Muazam Mughal built with Next.js, React, Sanity, Laravel and Node.js — including e-commerce, real estate, and content platforms.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Projects — Muazam Mughal | Full-Stack Developer",
    description:
      "Full-stack projects by Muazam Mughal built with Next.js, React, Sanity, Laravel and Node.js — including e-commerce, real estate, and content platforms.",
    url: "/work",
    type: "website",
  },
}

const workPageNode = {
  "@type": "CollectionPage",
  "@id": `${siteConfig.url}/work#webpage`,
  url: `${siteConfig.url}/work`,
  name: "Projects — Muazam Mughal",
  description: metadata.description as string,
  isPartOf: websiteRef(),
  about: personRef(),
  mainEntity: { "@id": PROJECTS_LIST_ID },
}

const WorkPage = () => {
  return (
    <>
      <JsonLd
        nodes={[
          workPageNode,
          projectsItemListNode(),
          breadcrumbNode([{ name: "Home", path: "/" }, { name: "Projects", path: "/work" }]),
        ]}
      />
      <WorkPageClient />
    </>
  )
}

export default WorkPage
