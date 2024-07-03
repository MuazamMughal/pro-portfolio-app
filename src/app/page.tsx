import Image from "next/image";
import Hero from "@/components/main/Hero";
import Header from "@/components/main/Header";
import cover from "../../public/asset/cover.png"
import Photo from "@/components/main/Photo";

export default function Home() {
  return (
   <section className=" h-full ">
    <div className=" container ">
      <div className=" flex flex-col lg:flex-row xl:flex-row items-center justify-between
      xl:pt-"> 
      {/* this is for the text */}
      <div className="text-center lg:text-left order-2 md:order-none lg:xl:order-none xl:text-left">
        <Hero/>
        

      </div>
      {/* this for the image */}
      <div className=" order-1  md:flex-row lg:xl:visiable lg:xl:order-none"> 
        <Photo/>
        </div>
      {/* <div className="pr-2 bg-[#030014] opacity-90 mix-blend-lighten">
        <Image src={cover}
         alt=""
         width={430}
          />

      </div> */}

      </div>
    </div>
   </section>
  );
}
