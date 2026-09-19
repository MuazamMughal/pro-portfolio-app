export const siteConfig = {
  name: "Muazam Mughal",
  title: "Muazam Mughal | Full-Stack Developer (Laravel, Node.js, Next.js)",
  description:
    "Muazam Mughal is a full-stack developer based in Sahiwal, Pakistan, building web applications with Laravel, Node.js, Next.js, React and Vue.js.",
  url: "https://pro-portfolio-app.vercel.app",
  jobTitle: "Full-Stack Developer",
  location: {
    locality: "Sahiwal",
    region: "Punjab",
    country: "Pakistan",
  },
  email: "eng.muazam@gmail.com",
  links: {
    github: "https://github.com/MuazamMughal",
    linkedin: "https://www.linkedin.com/in/muazam-mughal/",
    whatsapp: "https://wa.me/+923034510773",
  },
} as const

export type SiteConfig = typeof siteConfig
