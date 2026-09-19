import Hero from "@/components/main/Hero";
import Photo from "@/components/main/Photo";
import { siteConfig } from "@/lib/site";
import { websiteRef, personRef } from "@/lib/jsonld";
import JsonLd from "@/components/seo/JsonLd";

const profilePageNode = {
  "@type": "ProfilePage",
  "@id": `${siteConfig.url}/#webpage`,
  url: siteConfig.url,
  name: siteConfig.title,
  description: siteConfig.description,
  isPartOf: websiteRef(),
  about: personRef(),
  mainEntity: personRef(),
}

export default function Home() {
  return (
    <>
      <JsonLd nodes={[profilePageNode]} />
      <main id="main-content" className="relative min-h-[calc(100svh-96px)] w-full overflow-hidden">
        <h1 className="sr-only">
          {siteConfig.name} — {siteConfig.jobTitle}
        </h1>
        <p className="sr-only">{siteConfig.description}</p>
        <Photo />
        <Hero />
      </main>
    </>
  );
}
