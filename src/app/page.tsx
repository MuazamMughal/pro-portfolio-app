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
      </main>
    </>
  );
}
