import type { Metadata } from 'next'
import Link from 'next/link'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPython,
  FaDocker,
} from 'react-icons/fa'
import {
  SiFastapi,
  SiGooglegemini,
  SiStreamlit,
} from 'react-icons/si'
import { PiBirdBold } from 'react-icons/pi'
import { ExternalLink, ArrowUpRight, Brain, Cloud } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Resume – Muazam Mughal | Software Engineer',
  description:
    'Full-Stack Developer with 2+ years of experience building web and mobile applications with Laravel, Node.js, Next.js and React Native.',
  alternates: { canonical: 'https://muazammughal.me/resume' },
  openGraph: {
    title: 'Resume – Muazam Mughal | Software Engineer',
    description:
      'Full-Stack Developer with 2+ years of experience building web and mobile applications with Laravel, Node.js, Next.js and React Native.',
    url: 'https://muazammughal.me/resume',
    type: 'website',
  },
}

const personalInfo = {
  name: 'Muazam Mughal',
  title: 'Full-Stack Developer',
  location: 'Sahiwal, Pakistan',
  email: 'eng.muazam@gmail.com',
  phone: '+92 303 4510773',
  github: 'https://github.com/MuazamMughal',
  linkedin: 'https://www.linkedin.com/in/muazam-mughal/',
}

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '15+', label: 'Projects Shipped' },
  { value: '3', label: 'Companies' },
]

const contactItems = [
  { icon: FaEnvelope, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: FaPhone, label: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, '')}` },
  { icon: FaMapMarkerAlt, label: personalInfo.location, href: undefined },
]

const socials = [
  { icon: FaGithub, label: 'GitHub', href: personalInfo.github },
  { icon: FaLinkedin, label: 'LinkedIn', href: personalInfo.linkedin },
]

const education = [
  { institution: 'PIAIC', degree: 'Cloud Applied Generative AI Engineering (GenEng)', duration: '2023 – Present' },
  { institution: 'Virtual University of Pakistan', degree: 'BS Software Engineering', duration: '2019 – 2024' },
  { institution: 'PIAIC', degree: 'Full-Stack Web Development', duration: '2022 – 2024' },
  { institution: 'Govt. Postgraduate College Sahiwal / KIPS', degree: 'Intermediate (Pre-Engineering)', duration: '2017 – 2018' },
  { institution: 'Pak Forces School / KIPS', degree: 'Matriculation', duration: '2015 – 2016' },
]

const experience = [
  {
    company: 'AlphaSoft360',
    role: 'Software Engineer',
    duration: '07/2025 – Present',
    description: 'Product-based technology company building scalable enterprise solutions for global clients.',
    technologies: ['Laravel', 'Node.js', 'Next.js', 'Stripe', 'GitLab CI/CD', 'REST APIs'],
    points: [
      'Integrated Google Calendar and Microsoft Outlook Calendar services and CRM intake forms to automate scheduling.',
      'Migrating a 10-year-old production application to the latest architecture and modernizing the codebase.',
      'Developed and consumed RESTful APIs for standalone frontend applications and third-party integrations.',
      'Developed Laravel and Node.js applications for event management platforms with Stripe integration.',
      'Automated deployments with GitLab CI/CD pipelines, enforcing code quality and testing standards.',
    ],
  },
  {
    company: 'Freelance',
    role: 'Full-Stack Developer',
    duration: '08/2024 – 06/2025',
    description: 'Self-employed, delivering custom web applications and Jamstack sites for direct clients.',
    technologies: ['Next.js', 'Laravel', 'Node.js', 'Headless CMS', 'Jamstack'],
    points: [
      'Developed high-performance Jamstack websites using Next.js with headless CMS solutions.',
      'Built custom web applications and RESTful APIs using Laravel and Node.js.',
      'Managed complete development lifecycle — requirement gathering, architecture, deployment, and maintenance.',
    ],
  },
  {
    company: 'DevcoSol',
    role: 'Associate Software Engineer',
    duration: '01/2024 – 05/2024',
    description: 'Services company delivering custom web and mobile solutions for global clients.',
    technologies: ['Next.js', 'Firebase', 'React', 'TypeScript'],
    points: [
      'Maintained and enhanced a Jamstack-based residency platform built with Next.js and Firebase.',
      'Collaborated with the development team to troubleshoot bugs and optimize frontend functionality.',
      'Integrated and maintained Firebase services including authentication, database operations, and cloud features.',
    ],
  },
]

const skillGroups = [
  { category: 'Backend', skills: ['Laravel', 'Node.js', 'PHP', 'Nest.js', 'Next.js API Routes'] },
  { category: 'Frontend', skills: ['React.js', 'Next.js', 'Vue.js', 'TypeScript', 'TailwindCSS'] },
  { category: 'Databases & ORM', skills: ['PostgreSQL', 'MySQL', 'Prisma ORM', 'Drizzle ORM', 'Eloquent ORM'] },
  { category: 'DevOps & Tools', skills: ['Git', 'GitLab CI/CD', 'Docker', 'Redis', 'Postman'] },
  { category: 'Integrations', skills: ['Stripe', 'Firebase', 'Sanity CMS', 'Strapi CMS', 'OpenAI API'] },
]

const projects = [
  {
    name: 'RoundHere',
    description: 'End-to-end community & event management SaaS platform with real-time availability and booking workflows.',
    technologies: ['Next.js', 'Laravel', 'Stripe', 'Google Calendar API', 'Outlook Calendar API'],
    contribution: 'Integrated calendar services, optimized backend architecture, built core event management workflows.',
    link: 'https://roundhere.io/',
  },
  {
    name: 'The Residency',
    description: 'Jamstack platform for builders, creators & entrepreneurs with resident onboarding and community features.',
    technologies: ['Next.js', 'Firebase', 'TypeScript', 'Cloud Functions'],
    contribution: 'Built resident onboarding, community engagement workflows, and auth/data operations.',
    link: 'https://www.livetheresidency.com/',
  },
  {
    name: 'Dhobbee',
    description: 'Multi-tenant SaaS laundry management system for operations, customers, orders, and billing.',
    technologies: ['Laravel', 'Vue.js', 'REST APIs', 'Role-based Access Control'],
    contribution: 'Developed scalable RESTful APIs with multi-tenant architecture and RBAC.',
    link: null,
  },
]

const softSkills = [
  'Communication',
  'Team Collaboration',
  'Problem Solving',
  'Critical Thinking',
  'Adaptability',
  'Time Management',
  'Mentoring Juniors',
  'Working with Seniors',
]

const learning = [
  { icon: FaPython, name: 'Python' },
  { icon: SiFastapi, name: 'FastAPI' },
  { icon: Brain, name: 'OpenAI' },
  { icon: SiGooglegemini, name: 'Gemini' },
  { icon: SiStreamlit, name: 'Streamlit' },
  { icon: FaDocker, name: 'Docker' },
  { icon: PiBirdBold, name: 'LangChain' },
  { icon: Cloud, name: 'MS Azure' },
]

const SectionLabel = ({ index, title }: { index: string; title: string }) => (
  <div className="mb-8 flex items-baseline gap-3">
    <span className="font-primary text-sm text-green-600/70 dark:text-green-400/70">{index}</span>
    <h2 className="text-2xl font-bold text-foreground">{title}</h2>
    <span className="h-px flex-1 bg-foreground/10" />
  </div>
)

const ResumePage = () => {
  const initials = personalInfo.name
    .split(' ')
    .map((n) => n[0])
    .join('')

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-green-500/10 blur-[100px]" />
        <div className="absolute top-1/2 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />
        <div
          className="absolute inset-0 text-foreground opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:col-span-4 lg:h-fit">
            <div className="animate-fade-in">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                <span className="text-xs font-medium tracking-[0.2em] text-green-600 dark:text-green-400">RESUME</span>
              </div>

             

              <h1 className="mb-1 text-3xl font-bold tracking-tight text-foreground">{personalInfo.name}</h1>
              <p className="mb-6 font-medium text-green-600 dark:text-green-400">{personalInfo.title}</p>

              <div className="mb-8 grid grid-cols-3 gap-3 border-y border-border py-5">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-lg font-bold text-foreground">{stat.value}</div>
                    <div className="text-[11px] uppercase leading-tight tracking-wide text-muted-foreground/70">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mb-8 space-y-3">
                {contactItems.map((item) => {
                  const content = (
                    <>
                      <item.icon className="h-4 w-4 shrink-0 text-green-600 dark:text-green-400" />
                      <span className="truncate">{item.label}</span>
                    </>
                  )
                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-3 text-sm text-foreground/80 transition-colors hover:text-green-600 dark:hover:text-green-400"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.label} className="flex items-center gap-3 text-sm text-foreground/80">
                      {content}
                    </div>
                  )
                })}
              </div>

              <div className="mb-8 flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-foreground/[0.03] text-foreground/80 transition-colors hover:border-green-500/40 hover:text-green-600 dark:hover:text-green-400"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
                <Link
                  href="/contact"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-green-500 px-4 text-sm font-medium text-white transition-colors hover:bg-green-600"
                >
                  Get In Touch
                </Link>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground/70">Skills</h3>
                <div className="space-y-4">
                  {skillGroups.map((group) => (
                    <div key={group.category}>
                      <p className="mb-2 text-xs text-muted-foreground/70">{group.category}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {group.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-md bg-foreground/5 px-2 py-1 text-xs text-foreground/80 transition-colors hover:bg-green-500/10 hover:text-green-600 dark:hover:text-green-400"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground/70">Soft Skills</h3>
                <div className="flex flex-wrap gap-1.5">
                  {softSkills.map((skill) => (
                    <span key={skill} className="rounded-md bg-foreground/5 px-2 py-1 text-xs text-foreground/80">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground/70">Currently Learning</h3>
                <div className="flex flex-wrap gap-1.5">
                  {learning.map((item) => (
                    <span
                      key={item.name}
                      className="flex items-center gap-1.5 rounded-md bg-foreground/5 px-2 py-1 text-xs text-foreground/80"
                    >
                      <item.icon className="h-3 w-3 text-green-600 dark:text-green-400" />
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="lg:col-span-8">
            {/* About */}
            <section className="mb-20 animate-fade-in">
              <SectionLabel index="01" title="About" />
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-foreground/80">
                  Full-Stack Developer with 2+ years of experience designing and building web and mobile
                  applications using Laravel, Node.js, Next.js, React Native, and Jamstack architectures.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  I specialize in developing RESTful APIs, integrating third-party services, and building secure
                  backend systems — with a strong commitment to writing clean, maintainable code and delivering
                  reliable, production-ready solutions in collaborative, agile environments.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Currently, I&apos;m expanding my knowledge in Cloud Applied Generative AI Engineering (GenEng),
                  exploring Python, FastAPI, OpenAI, and related technologies to stay at the forefront of modern
                  development.
                </p>
              </div>
            </section>

            {/* Experience */}
            <section className="mb-20 animate-fade-in">
              <SectionLabel index="02" title="Experience" />
              <div className="space-y-10">
                {experience.map((job) => (
                  <article key={job.company} className="group relative pl-8">
                    <div className="absolute left-0 top-1.5 h-full w-px bg-foreground/10 group-last:h-2" />
                    <div className="absolute left-0 top-1.5 h-2 w-2 -translate-x-[3px] rounded-full bg-green-500 shadow-[0_0_10px_rgba(74,222,128,0.6)] dark:bg-green-400" />
                    <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{job.role}</h3>
                        <p className="text-sm font-medium text-green-600 dark:text-green-400">{job.company}</p>
                      </div>
                      <time className="font-primary text-xs text-muted-foreground/70">{job.duration}</time>
                    </div>
                    <p className="mb-3 text-sm text-muted-foreground">{job.description}</p>
                    <ul className="mb-4 space-y-1.5">
                      {job.points.map((point) => (
                        <li key={point} className="flex gap-2 text-sm leading-relaxed text-foreground/80">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/60" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <span key={tech} className="rounded-md bg-foreground/5 px-2 py-1 text-xs text-muted-foreground/70">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section className="mb-20 animate-fade-in">
              <SectionLabel index="03" title="Featured Projects" />
              <div className="grid gap-4 sm:grid-cols-2">
                {projects.map((project) => {
                  const Wrapper = project.link ? 'a' : 'div'
                  return (
                    <Wrapper
                      key={project.name}
                      {...(project.link
                        ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      className="group flex flex-col rounded-xl border border-border bg-foreground/[0.02] p-5 transition-colors hover:border-green-500/30"
                    >
                      <div className="mb-2 flex items-start justify-between gap-2">
                        <h3 className="font-semibold text-foreground transition-colors group-hover:text-green-600 dark:group-hover:text-green-400">
                          {project.name}
                        </h3>
                        {project.link && (
                          <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground/70 transition-colors group-hover:text-green-600 dark:group-hover:text-green-400" />
                        )}
                      </div>
                      <p className="mb-3 text-sm text-muted-foreground">{project.description}</p>
                      <p className="mb-4 text-xs text-muted-foreground/70">{project.contribution}</p>
                      <div className="mt-auto flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="rounded-md bg-foreground/5 px-2 py-1 text-xs text-muted-foreground/70">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </Wrapper>
                  )
                })}
              </div>
            </section>

            {/* Education */}
            <section className="mb-20 animate-fade-in">
              <SectionLabel index="04" title="Education" />
              <div className="divide-y divide-white/5">
                {education.map((edu) => (
                  <div key={edu.degree} className="flex flex-wrap items-start justify-between gap-2 py-4">
                    <div>
                      <h3 className="font-medium text-foreground">{edu.degree}</h3>
                      <p className="text-sm text-muted-foreground">{edu.institution}</p>
                    </div>
                    <time className="font-primary text-xs text-muted-foreground/70">{edu.duration}</time>
                  </div>
                ))}
              </div>
            </section>

            {/* Footer CTA */}
            <footer className="flex flex-col items-start gap-4 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-muted-foreground">Interested in working together? Let&apos;s connect.</p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/25"
              >
                Get In Touch
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </footer>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ResumePage
