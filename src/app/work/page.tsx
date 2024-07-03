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


const projects = [
  {
    num: "01",
    category: "Full-Stack-Development",
    title: "E-Commerce Marketplace (Dine Market)",
    description: "Full-Stack Web-app having elegent UI along with Full-fledged functionalities, Sanity as CMS",
    stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }, { name: "React" },{ name: "Sanity" }, { name: "Typescript" }, { name: "ReduxTK" }],
    image: "/asset/dmart.png",
    live: "",
    github: "https://github.com/MuazamMughal/hackathon-app"


  },
  {
    num: "02",
    category: "Full-Stack-Development",
    title: "Photo Gallery using Cloudinary",
    description: "This is full-Enhanced Photo Gallery in Next.js along with Cloudinary backend",
    stack: [{ name: "Next.js" }, { name: "React" }, { name: "Typescript" },{ name: "Cloudianry" }, { name: "ContextApi" }],
    image: "/asset/c-app.png",
    live: "",
    github: "https://github.com/MuazamMughal/cloudary-photos-app"


  },
  {
    num: "03",
    category: "Full-Stack-Development",
    title: "Multilangual News Website (NewsLand)",
    description: "Multilangual News Website in both English and Urdu. Using Next.js ,Strapi as Backend",
    stack:  [{ name: "Next.js" }, { name: "Tailwind CSS" }, { name: "React" }, { name: "Typescript" },{ name: "Strapi" }, ],
    image: "/asset/NL-app.png",
    live: "",
    github: "https://github.com/MuazamMughal/newsland-prototype-app"


  },
  // {
  //   num: "04",
  //   category: "Frontend",
  //   title: "Project 1",
  //   description: "this is the discription of the project number one",
  //   stack: [{ name: "HTML 5" }, { name: "CSS" }, { name: "Typescript" }, { name: "React" },],
  //   image: "",
  //   live: "",
  //   github: ""


  // },
]
const page = () => {
  return(
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








// const page = () => {


//   const [project, setProject] = useState(projects[0])
// const handleSlideChange = (Swiper:any) =>{
// const currentIndex = Swiper.activeIndex
// setProject(projects[currentIndex])
// }
//   return (
//     <motion.div initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'>
//       <div className='container mx-auto'>
//         <div className='flex flex-col xl:lg:flex-row xl:gap-[30px]'>
//           {/* now the text is started */}
//           <div className='w-full xl:lg:w-[50%] xl:lg:h-[460px] flex flex-col
//           xl:lg:justify-between order-2 md: xl:lg:order-none xl:lg:pl-12'>
//             <div>
//               {/* outline numbers */}
//               <div className=' text-8xl leading-none font-extrabold text-green-300 '>
//                 {project.num}

//               </div>

//               {/* for froject category */}
//               <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-green-500
//               transition-all duration-500 capitalize'>
//                 {project.category} 

//               </h2>
//               {/* projeect description */}
//               <p className='text-white/60 text-lg pl- pt-4' >
//                 {project.description}
//               </p>
//               {/* now tech stack */}

//               <ul  className='flex  pt-4 gap-4'>
//                 {project.stack.map((stk , index)=>{
//                   return <li key={index}
//                   className='text-xl font-bold bg-slate-900 py-2 px-4 rounded-lg text-green-500'>
//                     {stk.name}
//                   </li>
//                 })}
//               </ul>
//               {/* Buttons */}

//               <div className='pt-4  flex flex-row gap-4 items-center justify-start'>
//               <Link href={project.live}>
//                   <TooltipProvider delayDuration={100}>
//                     <Tooltip>
//                       <TooltipTrigger className='w-[50px] h-[50px] rounded-full 
//                       bg-white/20 flex justify-center items-center group ' >
//                         <BsGithub className='text-green-300 text-3xl group-hover:text-green-500'/>
//                       </TooltipTrigger>
//                       <TooltipContent> 
//                         <p>Github Link</p>
//                       </TooltipContent>
//                     </Tooltip>

//                   </TooltipProvider>
//                 </Link>
//                 <Link href={project.live}>
//                   <TooltipProvider delayDuration={100}>
//                     <Tooltip>
//                       <TooltipTrigger className='w-[50px] h-[50px] rounded-full 
//                       bg-white/20 flex justify-center items-center group ' >
//                         <BsArrowUpRight className='text-green-300 text-3xl group-hover:text-green-500'/>
//                       </TooltipTrigger>
//                       <TooltipContent> 
//                         <p>Live Project</p>
//                       </TooltipContent>
//                     </Tooltip>

//                   </TooltipProvider>
//                 </Link>
//               </div>

//             </div>

//           </div>



//           {/* from there we started working overr the Swiper */}
//           <div className='w-full  lg:xl:w-[50%]'>
//             <Swiper
//             spaceBetween={30}
//             slidesPerView={1}
//            className='xl:lg:h-[520px] '
//             onSlideChange={handleSlideChange}
//             >
              
//               {projects.map((project ,index )=>{
//                 return( 
//                 <div  className='w-full text-black'>

                
//                  <SwiperSlide key={index} className='w-full' >
//                   <div className='h-[460px] relative group  flex justify-center items-center
//                   bg-white text-black'>
//                     <Image src={project.image} alt={project.title} height={100} width={100}/>


//                   </div>
//                 </SwiperSlide> 
//                 </div>
//               )

//               })}
//             </Swiper>


//           </div>
//         </div>
//       </div>
//     </motion.div>
//   )}

//   export default page