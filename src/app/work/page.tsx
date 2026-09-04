"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"

const projects = [
  {
    num: "01",
    category: "Full-Stack Development",
    title: "isStartup",
    description:
      "A Next.js 15 and Sanity-powered platform for entrepreneurs to submit, browse, and showcase startup ideas in virtual pitch competitions.",
    stack: ["Next.js 15", "React 19", "Sanity", "NextAuth", "TypeScript", "TailwindCSS", "Shadcn UI"],
    image: "/asset/isSUimg.PNG",
    live: "https://is-startup-app.vercel.app/",
    github: "https://github.com/MuazamMughal/isStartup-app",
    accent: "from-emerald-400 to-cyan-400",
  },
  {
    num: "02",
    category: "Full-Stack Development",
    title: "AuraCart",
    description:
      "A modern e-commerce platform built with Next.js, Clerk, Sanity, Stripe, and PostgreSQL — secure authentication, real-time data, and smooth checkout.",
    stack: ["Next.js 15", "React 19", "Sanity", "Stripe", "Clerk", "TypeScript", "TailwindCSS"],
    image: "/asset/ACimg.PNG",
    live: "https://aura-cart-app.vercel.app/",
    github: "https://github.com/MuazamMughal/AuraCart-app",
    accent: "from-cyan-400 to-blue-400",
  },
  {
    num: "03",
    category: "Full-Stack Development",
    title: "Photo Gallery",
    description: "A fully-enhanced photo gallery in Next.js with a Cloudinary-powered backend.",
    stack: ["Next.js", "React", "TypeScript", "Cloudinary", "Context API"],
    image: "/asset/c-app.png",
    live: "",
    github: "https://github.com/MuazamMughal/cloudary-photos-app",
    accent: "from-violet-400 to-fuchsia-400",
  },
  {
    num: "04",
    category: "Full-Stack Development",
    title: "Dine Market",
    description: "E-commerce marketplace with an elegant UI and full-fledged functionality, Sanity as CMS.",
    stack: ["Next.js", "TailwindCSS", "React", "Sanity", "TypeScript", "Redux TK"],
    image: "/asset/dmart.png",
    live: "",
    github: "https://github.com/MuazamMughal/hackathon-app",
    accent: "from-amber-400 to-orange-400",
  },
  {
    num: "05",
    category: "Full-Stack Development",
    title: "NewsLand",
    description: "Multilingual news website in English and Urdu, built with Next.js and Strapi as the backend.",
    stack: ["Next.js", "TailwindCSS", "React", "TypeScript", "Strapi"],
    image: "/asset/NL-app.png",
    live: "",
    github: "https://github.com/MuazamMughal/newsland-prototype-app",
    accent: "from-green-400 to-emerald-400",
  },
]

type Project = (typeof projects)[number]

const ProjectRow = ({ project, index }: { project: Project; index: number }) => {
  const reversed = index % 2 === 1
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="group relative grid grid-cols-1 items-center gap-0 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] md:grid-cols-2"
    >
      {/* Ghost number */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-10 left-4 select-none font-display text-[10rem] leading-none text-white/[0.03] md:text-[13rem]"
      >
        {project.num}
      </span>

      {/* Image */}
      <div
        className={`relative aspect-[4/3] w-full overflow-hidden md:aspect-auto md:h-[420px] ${
          reversed ? "md:order-2" : ""
        }`}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent md:bg-gradient-to-r" />
      </div>

      {/* Content */}
      <div className={`relative z-10 flex flex-col justify-center p-8 md:p-12 ${reversed ? "md:order-1" : ""}`}>
        <div className="mb-3 flex items-center gap-3">
          <span
            className={`h-px w-8 bg-gradient-to-r ${project.accent}`}
          />
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{project.category}</p>
        </div>

        <h3 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {project.title}
        </h3>

        <p className="mb-6 max-w-md text-sm leading-relaxed text-slate-400">{project.description}</p>

        <ul className="mb-8 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-300"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6">
          {project.live && (
            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={`group/link inline-flex items-center gap-2 bg-gradient-to-r ${project.accent} bg-clip-text text-sm font-semibold text-transparent`}
            >
              <span className="border-b border-transparent group-hover/link:border-current">Visit Live Site</span>
              <BsArrowUpRight className="text-emerald-400 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </Link>
          )}
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-white"
          >
            <BsGithub />
            Source Code
          </Link>
        </div>
      </div>
    </motion.article>
  )
}

const WorkPage = () => {
  return (
    <>
      <Head>
        <title>Projects | Muazam Mughal - Software Engineer Portfolio</title>
        <meta
          name="description"
          content="Explore full-stack projects by Muazam Mughal including Next.js apps, e-commerce platforms, and more."
        />
        <meta name="keywords" content="Muazam Mughal, Software Engineer, Full Stack Developer, Next.js, Portfolio, Projects" />
        <meta name="robots" content="index, follow" />
      </Head>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative min-h-screen overflow-hidden bg-[#030014] text-white"
      >
        {/* Ambient background */}
        <div className="pointer-events-none fixed inset-0">
          <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-green-500/10 blur-[120px]" />
          <div className="absolute top-1/2 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
          <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-violet-500/[0.06] blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-16 lg:py-24">
          <div className="mb-20 animate-fade-in text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              <span className="text-xs font-medium tracking-[0.2em] text-green-400">SELECTED WORK</span>
            </div>
            <h1 className="mx-auto max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Crafted{" "}
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              A collection of full-stack applications spanning e-commerce, content platforms, and developer tools.
            </p>
          </div>

          <div className="flex flex-col gap-16">
            {projects.map((project, index) => (
              <ProjectRow key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </motion.main>
    </>
  )
}

export default WorkPage
