import Hero from "@/components/main/Hero";
import Photo from "@/components/main/Photo";

export default function Home() {
  return (
    <section className="relative min-h-[calc(100svh-96px)] w-full overflow-hidden">
      <Photo />
      <Hero />
    </section>
  );
}
