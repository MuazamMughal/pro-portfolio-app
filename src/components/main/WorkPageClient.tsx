"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { ArrowRight } from "lucide-react"
import { projects, type Project } from "@/data/projects"

const ProjectRow = ({ project, index }: { project: Project; index: number }) => {
  const reversed = index % 2 === 1
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="group relative grid grid-cols-1 items-center gap-0 overflow-hidden rounded-[2rem] border border-border bg-foreground/[0.02] md:grid-cols-2"
    >
      {/* Ghost number */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-10 left-4 select-none font-display text-[10rem] leading-none text-foreground/[0.03] md:text-[13rem]"
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
          alt={project.imageAlt ?? `${project.title} — screenshot of the ${project.category.toLowerCase()} project`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent md:bg-gradient-to-r" />
      </div>

      {/* Content */}
      <div className={`relative z-10 flex flex-col justify-center p-8 md:p-12 ${reversed ? "md:order-1" : ""}`}>
        <div className="mb-3 flex items-center gap-3">
          <span
            className={`h-px w-8 bg-gradient-to-r ${project.accent}`}
          />
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{project.category}</p>
        </div>

        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {project.title}
        </h2>

        <p className="mb-6 max-w-md text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        <ul className="mb-8 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border bg-foreground/[0.03] px-3 py-1 text-xs text-foreground/80"
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
              <span className="border-b border-transparent group-hover/link:border-current">Visit {project.title} live site</span>
              <BsArrowUpRight className="text-emerald-700 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 dark:text-emerald-400" />
            </Link>
          )}
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <BsGithub />
            View source on GitHub
          </Link>
        </div>
      </div>
    </motion.article>
  )
}

const WorkPageClient = () => {
  return (
    <motion.main
      id="main-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-screen overflow-hidden bg-background text-foreground"
    >
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-green-500/10 blur-[120px]" />
        <div className="absolute top-1/2 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-violet-500/[0.06] blur-[120px]" />
        <div
          className="absolute inset-0 text-foreground opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="mb-20 animate-fade-in text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
            <span className="text-xs font-medium tracking-[0.2em] text-green-600 dark:text-green-400">SELECTED WORK</span>
          </div>
          <h1 className="mx-auto max-w-2xl text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Crafted{" "}
            <span className="bg-gradient-to-r from-green-700 via-emerald-700 to-cyan-700 bg-clip-text text-transparent dark:from-green-400 dark:via-emerald-400 dark:to-cyan-400">
              Projects
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            A collection of full-stack applications spanning e-commerce, real estate, content platforms, and developer tools — built with Next.js, React and Sanity.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
            <ProjectRow key={project.title} project={project} index={index} />
          ))}
        </div>

        <div className="mt-24 flex flex-col items-center gap-4 border-t border-border pt-16 text-center">
          <p className="text-muted-foreground">Have a project in mind? Let&apos;s talk about how I can help.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/25"
          >
            Get in touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.main>
  )
}

export default WorkPageClient
