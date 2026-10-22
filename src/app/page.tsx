import Link from "next/link";
import Hero from "@/components/main/Hero";
import Photo from "@/components/main/Photo";
import { siteConfig } from "@/lib/site";
import { websiteRef, personRef, IMAGE_ID } from "@/lib/jsonld";
import JsonLd from "@/components/seo/JsonLd";

const profilePageNode = {
  "@type": "ProfilePage",
  "@id": `${siteConfig.url}/#webpage`,
  url: siteConfig.url,
  name: siteConfig.title,
  description: siteConfig.description,
  inLanguage: "en",
  dateModified: "2026-10-23",
  isPartOf: websiteRef(),
  about: personRef(),
  mainEntity: personRef(),
  primaryImageOfPage: { "@id": IMAGE_ID },
};

const quickLinks = [
  { href: "/work", label: "Projects", text: "Production apps built with Next.js, Laravel, Node.js and React Native." },
  { href: "/resume", label: "Resume", text: "Experience at AlphaSoft360, DevcoSol and as a freelance developer." },
  { href: "/contact", label: "Contact", text: "Available for web development projects, collaboration and consulting." },
];

export default function Home() {
  return (
    <>
      <JsonLd nodes={[profilePageNode]} />
      <main id="main-content">
        <div className="relative min-h-[calc(100svh-96px)] w-full overflow-hidden">
          <h1 className="sr-only">
            {siteConfig.name} — {siteConfig.jobTitle} in {siteConfig.location.locality}, Pakistan
          </h1>
          <Photo />
          <Hero />
        </div>

        <section
          aria-labelledby="about-heading"
          className="mx-auto max-w-5xl px-6 py-20 lg:py-28"
        >
          <p className="font-primary text-xs tracking-[0.3em] text-green-600 dark:text-green-400">
            ABOUT
          </p>
          <h2
            id="about-heading"
            className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            {siteConfig.name} is a {siteConfig.jobTitle} based in {siteConfig.location.locality}, Pakistan
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {siteConfig.name} is a full-stack developer with 2+ years of experience designing and building web and
            mobile applications with Laravel, Node.js, Next.js, React Native and Jamstack architectures. He builds
            RESTful APIs, integrates third-party services such as Stripe and Google Calendar, and ships secure,
            production-ready backend systems. He currently works as a Software Engineer at AlphaSoft360 and holds a
            BS in Software Engineering from the Virtual University of Pakistan.
          </p>

          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Core technologies">
            {siteConfig.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-foreground/10 px-3 py-1 text-xs text-foreground/80"
              >
                {skill}
              </li>
            ))}
          </ul>

          <nav aria-label="Explore" className="mt-14 grid gap-4 sm:grid-cols-3">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-2xl border border-foreground/10 p-5 transition-colors duration-300 hover:border-green-500/40"
              >
                <h3 className="font-semibold text-foreground transition-colors group-hover:text-green-600 dark:group-hover:text-green-400">
                  {link.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{link.text}</p>
              </Link>
            ))}
          </nav>
        </section>
      </main>
    </>
  );
}
