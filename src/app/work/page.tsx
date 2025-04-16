"use client"
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import {
  BsArrowUpRight,
  BsArrowRight
  , BsGithub,

} from "react-icons/bs"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import Link from 'next/link'
import{Swiper,SwiperSlide} from "swiper/react"
import Image from 'next/image'
import Head from 'next/head'


const projects = [
  
    {
      num: "01",
     category: "Full-Stack-Development",
      title: "isStartup",
     description: "A Next.js 15 and Sanity-powered platform for entrepreneurs to submit, browse, and showcase startup ideas in virtual pitch competitions. ",
     stack: [{ name: "Next.js 15" }, { name: "React 19" },{ name: "Sanity" }, { name: "NextAuth" },{ name: "Typescript" }, { name: "TailwindCSS" },{ name: "Shadcn UI" },],
     image: "/asset/isSUimg.PNG",
      live: "https://is-startup-app.vercel.app/",
      github: "https://github.com/MuazamMughal/isStartup-app"
 
 
    },
    {
     num: "02",
    category: "Full-Stack-Development",
     title: "AuraCart",
    description: "A modern e-commerce platform built with Next.js, Clerk, Sanity, Stripe, and PostgreSQL secure authentication, real-time data fetching, and smooth checkout processing.",
    stack: [{ name: "Next.js 15" }, { name: "React 19" },{ name: "Sanity" }, { name: "Stripe" },{ name: "Clerk " },{ name: "Typescript" }, { name: "TailwindCSS" },],
     image: "/asset/ACimg.PNG",
     live: "https://aura-cart-app.vercel.app/",
     github: "https://github.com/MuazamMughal/AuraCart-app"
 
 
   },
  
  {
    num: "03",
    category: "Full-Stack-Development",
    title: "Photo Gallery using Cloudinary",
    description: "This is full-Enhanced Photo Gallery in Next.js along with Cloudinary backend",
    stack: [{ name: "Next.js" }, { name: "React" }, { name: "Typescript" },{ name: "Cloudianry" }, { name: "ContextApi" }],
    image: "/asset/c-app.png",
    live: "",
    github: "https://github.com/MuazamMughal/cloudary-photos-app"


  },
  {
    num: "04",
    category: "Full-Stack-Development",
    title: "E-Commerce Marketplace (Dine Market)",
    description: "Full-Stack Web-app having elegent UI along with Full-fledged functionalities, Sanity as CMS",
    stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }, { name: "React" },{ name: "Sanity" }, { name: "Typescript" }, { name: "ReduxTK" }],
    image: "/asset/dmart.png",
    live: "",
    github: "https://github.com/MuazamMughal/hackathon-app"


  },
  {
    num: "05",
    category: "Full-Stack-Development",
    title: "Multilangual News Website (NewsLand)",
    description: "Multilangual News Website in both English and Urdu. Using Next.js ,Strapi as Backend",
    stack:  [{ name: "Next.js" }, { name: "Tailwind CSS" }, { name: "React" }, { name: "Typescript" },{ name: "Strapi" }, ],
    image: "/asset/NL-app.png",
    live: "",
    github: "https://github.com/MuazamMughal/newsland-prototype-app"


  },
  
]
const page = () => {
  return(
<>
{/* SEO META TAGS */}
<Head>
        <title>Projects | Muazam Mughal - Software Engineer Portfolio</title>
        <meta name="description" content="Explore full-stack projects by Muazam Mughal including Next.js apps, e-commerce platforms, and more." />
        <meta name="keywords" content="Muazam Mughal, Software Engineer, Full Stack Developer, Next.js, Portfolio, Projects" />
        <meta name="robots" content="index, follow" />
      </Head>
    
  <motion.div initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
      className='min-h-[80vh] '>
       <div className='container  mb-20 flex flex-col  gap-10  mt-10 mx-auto'>
  
    {projects.map((project , index)=>{
return (
     
        <div key={index}  className='flex flex-col mx-20 '>
        <Project {...project}/>
       

        </div>
)})}
  </div>
  
       
    </motion.div>
    </>
)
}

export default page

type ProjectProps = (typeof projects)[0]
function Project (
  { category ,title ,description,stack ,image,live,github}:ProjectProps)

  {
return(
  <section className=' group bg-slate-400 dark:bg-slate-900  max-h-[220rem] max-w-[142rem] borer-2 rounded-lg overflow-hidden sm:pr-8  sm:h-[20rem] relative  even:pl-8 hover:bg-slate-300 transition'>
    <div className='py-2 px-4 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col  '>

   
    <h3 className='text-2xl font-bold '>{title}</h3>
    <h4 className='mt-2 text-xl leading-relaxed font-bold  text-white/80 dark:text-green-300'>{category}</h4>
    <p className='mt-2 leading-relaxed dark:text-gray-300  text-black/30'>{description}</p>
    <ul className='flex gap-2 pt-4 flex-wrap  ml-6'>
    {stack.map((tag , index)=>{
      return(
        <li key={index} 
        className='font-bold flex    bg-slate-700 py-2 px-4 rounded-lg text-green-500'>
          {tag.name}
        </li>
      )
    })}</ul>
     {/* <div className='pt-4  flex flex-row gap-4 items-center justify-start'>
              <Link href={github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[50px] h-[50px] rounded-full 
                      bg-black/60  dark:bg-white/20 flex justify-center items-center group ' >
                       <BsGithub className='text-green-300   text-3xl group-hover:text-green-500'/>
                     </TooltipTrigger>
                     <TooltipContent> 
                        <p>Github Link</p>                       </TooltipContent>
                    </Tooltip>

                  </TooltipProvider>
              </Link>

             </div> */}


  <Link  href={github} className=''>

<Image src={image} alt={title} quality={10} width={2000} height={2000}
className=' absolute  lg:xl:top-8 lg:xl:-right-40 lg:xl:w-[38.25rem] lg:xl:rounded-t-lg
md:top-8 md:-right-40 md:w-[28.25rem] w-[22rem] md:rounded-t-lg shadow-2xl  
transition
lg:xl:group-hover:scale-[1.04]
 lg:xl:group-hover:-translate-x-6
 lg:xl:group-hover:-translate-y-6
 lg:xl:group-hover:-rotate-2

 md:group-hover:scale-[1.04]
 md:group-hover:-translate-x-6
 md:group-hover:-translate-y-6
 md:group-hover:-rotate-2
   
  
  group-hover:bottom-1
group-hover:-rotate-2
group-hover:scale-[1.0]
   
  '/></Link>
  


 
</div> 
</section>
)
}





