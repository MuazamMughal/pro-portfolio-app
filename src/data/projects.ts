export interface Project {
  num: string
  category: string
  title: string
  description: string
  stack: string[]
  image: string
  imageAlt?: string
  live: string
  github: string
  accent: string
}

export const projects: Project[] = [
  {
    num: "01",
    category: "Full-Stack Development",
    title: "MadHaus",
    description:
      "A sports and café venue platform for MadHaus in Sahiwal, featuring court booking requests, shared-court conflict prevention, and a staff dashboard for bookings, payments, menu management, and reports.",
    stack: ["Next.js 16", "TypeScript", "TailwindCSS", "PostgreSQL", "Drizzle", "Sanity", "Resend"],
    image: "/asset/madhaus-homepage.png",
    imageAlt: "Screenshot of the MadHaus homepage",
    live: "https://madhaus-alpha.vercel.app/",
    github: "https://github.com/MuazamMughal/madhaus",
    accent: "from-lime-700 to-emerald-700 dark:from-lime-400 dark:to-emerald-400",
  },
  {
    num: "02",
    category: "Mobile App Development",
    title: "Mediulr",
    description:
      "A personal and family health organizer with medication schedules, doctor visits, custom reminders, and lifestyle tracking. Built with offline support, local notifications, English and Urdu, and an accessible Simple Mode.",
    stack: ["Expo", "React Native", "TypeScript", "Supabase", "React Query", "Expo Router"],
    image: "/asset/mediulr-collage.webp",
    imageAlt: "Three screenshots of Mediulr showing its calendar, medications, and profile screens",
    live: "",
    github: "https://github.com/MuazamMughal/mediulr-app",
    accent: "from-teal-700 to-cyan-700 dark:from-teal-400 dark:to-cyan-400",
  },
  {
    num: "03",
    category: "Full-Stack Development",
    title: "Trust Real Estate",
    description:
      "A sleek real estate marketing website for a construction and investment firm, showcasing premium properties with an elegant dark-themed UI, powered by Sanity as a headless CMS.",
    stack: ["Next.js", "React", "Sanity", "TailwindCSS", "TypeScript"],
    image: "/asset/RE-app.png",
    live: "https://real-estate-app-five-kappa.vercel.app/",
    github: "https://github.com/MuazamMughal/realEstate-app",
    accent: "from-yellow-700 to-amber-700 dark:from-yellow-400 dark:to-amber-400",
  },
  {
    num: "04",
    category: "Full-Stack Development",
    title: "isStartup",
    description:
      "A Next.js 15 and Sanity-powered platform for entrepreneurs to submit, browse, and showcase startup ideas in virtual pitch competitions.",
    stack: ["Next.js 15", "React 19", "Sanity", "NextAuth", "TypeScript", "TailwindCSS", "Shadcn UI"],
    image: "/asset/isSUimg.PNG",
    live: "https://is-startup-app.vercel.app/",
    github: "https://github.com/MuazamMughal/isStartup-app",
    accent: "from-emerald-700 to-cyan-700 dark:from-emerald-400 dark:to-cyan-400",
  },
  {
    num: "05",
    category: "Full-Stack Development",
    title: "AuraCart",
    description:
      "A modern e-commerce platform built with Next.js, Clerk, Sanity, Stripe, and PostgreSQL — secure authentication, real-time data, and smooth checkout.",
    stack: ["Next.js 15", "React 19", "Sanity", "Stripe", "Clerk", "TypeScript", "TailwindCSS"],
    image: "/asset/ACimg.PNG",
    live: "https://aura-cart-app.vercel.app/",
    github: "https://github.com/MuazamMughal/AuraCart-app",
    accent: "from-cyan-700 to-blue-700 dark:from-cyan-400 dark:to-blue-400",
  },
  {
    num: "06",
    category: "Full-Stack Development",
    title: "Photo Gallery",
    description: "A fully-enhanced photo gallery in Next.js with a Cloudinary-powered backend.",
    stack: ["Next.js", "React", "TypeScript", "Cloudinary", "Context API"],
    image: "/asset/c-app.png",
    live: "",
    github: "https://github.com/MuazamMughal/cloudary-photos-app",
    accent: "from-violet-700 to-fuchsia-700 dark:from-violet-400 dark:to-fuchsia-400",
  },
  {
    num: "07",
    category: "Full-Stack Development",
    title: "Dine Market",
    description: "E-commerce marketplace with an elegant UI and full-fledged functionality, Sanity as CMS.",
    stack: ["Next.js", "TailwindCSS", "React", "Sanity", "TypeScript", "Redux TK"],
    image: "/asset/dmart.png",
    live: "",
    github: "https://github.com/MuazamMughal/hackathon-app",
    accent: "from-amber-800 to-orange-700 dark:from-amber-400 dark:to-orange-400",
  },
  {
    num: "08",
    category: "Full-Stack Development",
    title: "NewsLand",
    description: "Multilingual news website in English and Urdu, built with Next.js and Strapi as the backend.",
    stack: ["Next.js", "TailwindCSS", "React", "TypeScript", "Strapi"],
    image: "/asset/NL-app.png",
    live: "",
    github: "https://github.com/MuazamMughal/newsland-prototype-app",
    accent: "from-green-700 to-emerald-700 dark:from-green-400 dark:to-emerald-400",
  },
]
