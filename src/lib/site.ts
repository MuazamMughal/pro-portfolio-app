export const siteConfig = {
  name: "Muazam Mughal",
  title: "Muazam Mughal | Full-Stack Developer (Laravel, Node.js, Next.js)",
  description:
    "Muazam Mughal is a full-stack developer based in Sahiwal, Pakistan, building web applications with Laravel, Node.js, Next.js, React and Vue.js.",
  url: "https://muazam-mughal.vercel.app",
  jobTitle: "Full-Stack Developer",
  location: {
    locality: "Sahiwal",
    region: "Punjab",
    country: "Pakistan",
  },
  email: "eng.muazam@gmail.com",
  phone: "+92-303-4510773",
  keywords: [
    "Muazam Mughal",
    "Muazam Mughal developer",
    "Muazam Mughal software engineer",
    "full-stack developer Pakistan",
    "Laravel developer Pakistan",
    "Next.js developer Pakistan",
    "Node.js developer Sahiwal",
    "hire full-stack developer",
  ],
  skills: [
    "Laravel",
    "Node.js",
    "Next.js",
    "React",
    "Vue.js",
    "TypeScript",
    "PHP",
    "NestJS",
    "PostgreSQL",
    "MySQL",
    "REST APIs",
    "Docker",
    "Redis",
    "Stripe",
    "GitLab CI/CD",
  ],
  links: {
    github: "https://github.com/MuazamMughal",
    linkedin: "https://www.linkedin.com/in/muazam-mughal/",
    whatsapp: "https://wa.me/+923034510773",
  },
} as const

export type SiteConfig = typeof siteConfig
