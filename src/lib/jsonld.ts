import { siteConfig } from "@/lib/site"
import { projects, type Project } from "@/data/projects"

export const PERSON_ID = `${siteConfig.url}/#person`
export const WEBSITE_ID = `${siteConfig.url}/#website`

export const IMAGE_ID = `${siteConfig.url}/#primaryimage`

/** Portrait used as the entity image — referenced by Person and ProfilePage. */
export const primaryImageNode = () => ({
  "@type": "ImageObject",
  "@id": IMAGE_ID,
  url: `${siteConfig.url}/NewAvatar.png`,
  contentUrl: `${siteConfig.url}/NewAvatar.png`,
  width: 1024,
  height: 1024,
  caption: `${siteConfig.name}, ${siteConfig.jobTitle}`,
})

/** Full Person entity — define this ONCE (root layout) and reference elsewhere via personRef(). */
export const personNode = () => ({
  "@type": "Person",
  "@id": PERSON_ID,
  name: siteConfig.name,
  givenName: "Muazam",
  familyName: "Mughal",
  alternateName: ["Muazam Mughal Developer", "Eng. Muazam"],
  url: siteConfig.url,
  mainEntityOfPage: { "@id": `${siteConfig.url}/#webpage` },
  image: { "@id": IMAGE_ID },
  jobTitle: siteConfig.jobTitle,
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.location.locality,
    addressRegion: siteConfig.location.region,
    addressCountry: "PK",
  },
  homeLocation: {
    "@type": "Place",
    name: `${siteConfig.location.locality}, ${siteConfig.location.region}, Pakistan`,
  },
  worksFor: {
    "@type": "Organization",
    name: "AlphaSoft360",
  },
  hasOccupation: {
    "@type": "Occupation",
    name: siteConfig.jobTitle,
    description:
      "Designs and builds web and mobile applications, RESTful APIs and secure backend systems with Laravel, Node.js, Next.js and Vue.js.",
    occupationLocation: { "@type": "Country", name: "Pakistan" },
    skills: siteConfig.skills.join(", "),
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Virtual University of Pakistan",
      url: "https://www.vu.edu.pk",
    },
    { "@type": "EducationalOrganization", name: "PIAIC" },
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "BS Software Engineering",
    credentialCategory: "degree",
    recognizedBy: {
      "@type": "CollegeOrUniversity",
      name: "Virtual University of Pakistan",
    },
  },
  knowsAbout: siteConfig.skills,
  knowsLanguage: ["English", "Urdu"],
  sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
})

/** Full WebSite entity — define this ONCE (root layout) and reference elsewhere via websiteRef(). */
export const websiteNode = () => ({
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: "en",
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
