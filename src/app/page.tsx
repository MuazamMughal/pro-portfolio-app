import Hero from "@/components/main/Hero";
import Photo from "@/components/main/Photo";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container">
        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row xl:flex-row items-center justify-between xl:pt-[custom-value]">
          
          {/* Text Section (Left) */}
          <div className="text-center lg:text-left order-2 md:order-none lg:order-none xl:text-left">
            <Hero />
          </div>

          {/* Image Section (Right) */}
          <div className="order-1 md:flex-row lg:order-none">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}