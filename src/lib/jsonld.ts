import { siteConfig } from "@/lib/site"
import { projects, type Project } from "@/data/projects"

export const PERSON_ID = `${siteConfig.url}/#person`
export const WEBSITE_ID = `${siteConfig.url}/#website`

/** Full Person entity — define this ONCE (root layout) and reference elsewhere via personRef(). */
export const personNode = () => ({
  "@type": "Person",
  "@id": PERSON_ID,
  name: siteConfig.name,
  url: siteConfig.url,
  image: `${siteConfig.url}/NewAvatar.png`,
  jobTitle: siteConfig.jobTitle,
  description: siteConfig.description,
  email: `mailto:${siteConfig.email}`,
  telephone: "+92-303-4510773",
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.location.locality,
    addressRegion: siteConfig.location.region,
    addressCountry: siteConfig.location.country,
  },
  worksFor: {
    "@type": "Organization",
    name: "AlphaSoft360",
  },
  alumniOf: [
    { "@type": "EducationalOrganization", name: "Virtual University of Pakistan" },
    { "@type": "EducationalOrganization", name: "PIAIC" },
  ],
  knowsAbout: [
    "Laravel",
    "Node.js",
    "Next.js",
    "React",
    "Vue.js",
    "TypeScript",
    "PostgreSQL",
    "MySQL",
    "REST APIs",
  ],
  sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
})

/** Full WebSite entity — define this ONCE (root layout) and reference elsewhere via websiteRef(). */
export const websiteNode = () => ({
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  publisher: { "@id": PERSON_ID },
  author: { "@id": PERSON_ID },
})

export const personRef = () => ({ "@id": PERSON_ID })
export const websiteRef = () => ({ "@id": WEBSITE_ID })

interface Crumb {
  name: string
  path: string
}

export const breadcrumbNode = (items: Crumb[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${siteConfig.url}${item.path}`,
  })),
})

/** One node per project: WebApplication when it has a live deployment, otherwise
 * SoftwareSourceCode for a GitHub-only project — never a generic "Product". */
const projectNode = (project: Project) => {
  const id = project.live || project.github
  const image = `${siteConfig.url}${project.image}`

  if (project.live) {
    return {
      "@type": "WebApplication",
      "@id": id,
      name: project.title,
      description: project.description,
      url: project.live,
      image,
      creator: personRef(),
      keywords: project.stack.join(", "),
      ...(project.github ? { codeRepository: project.github } : {}),
    }
  }

  return {
    "@type": "SoftwareSourceCode",
    "@id": id,
    name: project.title,
    description: project.description,
    url: project.github,
    codeRepository: project.github,
    image,
    creator: personRef(),
    keywords: project.stack.join(", "),
  }
}

export const PROJECTS_LIST_ID = `${siteConfig.url}/work#projects`

export const projectsItemListNode = () => ({
  "@type": "ItemList",
  "@id": PROJECTS_LIST_ID,
  name: `Software projects by ${siteConfig.name}`,
  itemListElement: projects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: projectNode(project),
  })),
})
