"use client"
import { Description } from '@radix-ui/react-dialog'
import { title } from 'process'
import React from 'react'

import {
  FaHtml5,
  FaCss3,
  FaGithub,
  FaReact,
  FaFigma,
  FaPython,FaDocker
  //add or mooore tools icons there
} from 'react-icons/fa'
import {
  SiNextdotjs,
  SiTailwindcss, SiRedux, SiOpenai, SiStrapi, SiPostman, SiTypescript,
  SiFastapi ,SiGooglegemini,SiStreamlit,SiMicrosoftazure,
  SiSanity,
  SiStripe,
  SiShadcnui,
  SiClerk,
  SiPostgresql,
  SiVercel,
  SiPrisma,
  SiDrizzle
} from "react-icons/si"
import { ScrollArea } from "@/components/ui/scroll-area"
import { PiBirdBold } from "react-icons/pi";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { motion } from 'framer-motion'
import { link } from 'fs'



const about =
{
  title: 'About me',
  description: "this ismine intro duction so write some of the documentation",
  info: [
    {
      fieldname: "Name",
      fieldValue: "Muazam Mughal"
    },
    {
      fieldname: "Skype",
      fieldValue: "muazam11"
    },
    {
      fieldname: "Phone",
      fieldValue: "0300-0000000"
    },
    {
      fieldname: "Email",
      fieldValue: "muazammughal11111@gmail.com"
    },

    {
      fieldname: "Experience",
      fieldValue: "1+ year"
    },
  ]
}

const education =
{
  icons: "/asset/cap.svg",
  title: "Education",
  decription: "this is my education career secription",
  items: [
    {
      institutions: "PIAIC",
      degree: " Cloud Applied Generative AI Engineering (GenEng)",
      duration: "2023 - Present"
    },
    {
      institutions: "Virtual University of Pakistan",
      degree: "BS Software Engineering",
      duration: "late 2019 - late 2024"
    },
    {
      institutions: "PIAIC",
      degree: "Full-Stack Web Development",
      duration: "late 2022 - 2024 "
    },
     {
      institutions: "Govt. Postgraduation College Sahiwal / KIPS",
      degree: "Intermediate (Pre-Engineering)",
      duration: "2017 - 2018",
    }, {
      institutions: "Pak Forces School / KIPS",
      degree: "Matriculation",
      duration: "2015 - 2016",
    },
  ]

}

const Experience =
{
  icons: "/asset/badge.svg",
  title: "My Experience",
  decription: "this is my Experince career secription",
  items: [
    {
      company: "Local OutSourced Work",
      desigation: "Full-Stack Web Developer",
      duration: "Aug-2024 - Present"
    },
    {
      company: "DevcoSol",
      desigation: "Full-Stack developer",
      duration: "jan-2024 - May-2024"
    },
    {
      company: "",
      desigation: "",
      duration: ""
    },
  ]

}

const skills = {
  title: "My Skills",
  Description: "this is the description for the my skill segment",
  skillList: [
    
    {
      icons: <SiNextdotjs/>,
      name: "Next.js 15"
    },{
      icons: <FaReact />,
      name: "React"
    },{
      icons: <SiTypescript />,
      name: "TypeScript"
    } 
     , {
      icons: <SiTailwindcss />,
      name: "TailwindCSS"
    },   {
      icons: <SiSanity/>,
      name: "Sanity CMS"
    },
{
      icons: <FaFigma />,
      name: "Figma"
    }, {
      icons: <FaPython />,
      name: "Python"
    }, {
      icons: <SiRedux />,
      name: "Redux"
    }, {
      icons: <SiStrapi />,
      name: "Strapi CMS"
    },
    {
      icons: <SiPostman />,
      name: "Postman"
    },
    {
      icons: <SiOpenai />,
      name: "OpenAI"
    },
    {
      icons: <FaGithub />,
      name: "Git % Github"
    },
    {
      icons: <FaHtml5 />,
      name: "html 5"
    }, {
      icons: <FaCss3 />,
      name: "CSS"
    }, 
   
    {
      icons: <SiStripe/>,
      name: "Stripe Paymente Gatway"
    },
    {
      icons: <SiShadcnui/>,
      name: "Shadcn UI"
    },
    {
      icons: <SiClerk/>,
      name: "Clerk Authentication managment system"
    },
    {
      icons: <SiPostgresql/>,
      name: "Postgress"
    },
    {
      icons: <SiPrisma/>,
      name: "Prisma ORM"
    },
    {
      icons: <SiDrizzle/>,
      name: "Drizzle ORM"
    },
    {
      icons: <SiVercel/>,
      name: "Vercel"
    },
    
  ]

}

const enthusiast = [
  {
    icons: <FaPython/>,
    name: "Python"
  },
   {
    icons: <SiFastapi />,
    name: "Fastapi"
  },
  {
    icons: <SiOpenai />,
    name: "OpenAI"
  },
  {
    icons: <SiGooglegemini/>,
    name: "Gemini"
  },
  {
    icons: <SiStreamlit />,
    name: "Streamlit"
  },
 
  {
    icons: < FaDocker/>,
    name: "Docker"
  },
  {
    icons: <PiBirdBold />,
    name: "LangChain"
  },
  {
    icons: <SiMicrosoftazure />,
    name: "MS Azure"
  },
  {
    icons: <SiNextdotjs />,
    name: "Next.js"
  },

]


const page = () => {
  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.5, duration: 0.4, ease: "easeIn" }
      }}
      className='min-h-[80vh] flex justify-center items-center py-8 lg:xl-py-0'>


      <div className=' container mx-auto'>


        <Tabs className=' flex  flex-col lg:xl:flex-row md:flex-row'
          defaultValue="Learning Enthusiasm"
        >
          <TabsList
            className=' flex  flex-col w-full max-w-[380px] mx-auto lg:xl:mx-0 gap-6'>
            {/* <TabsTrigger className='bg-slate-300 dark:text-white text-black/80 dark:bg-slate-900' value="about me">About Me</TabsTrigger> */}
            <TabsTrigger className='bg-slate-300 dark:text-white text-black/80 dark:bg-slate-900' value="Education">Education</TabsTrigger>
            <TabsTrigger className='bg-slate-300 dark:text-white text-black/80 dark:bg-slate-900'   value="Experience">Experience</TabsTrigger>
            <TabsTrigger  className='bg-slate-300 dark:text-white text-black/80 dark:bg-slate-900' value="Skills">Skills</TabsTrigger>
            <TabsTrigger className='bg-slate-300 dark:text-white text-black/80 dark:bg-slate-900' value="Learning Enthusiasm">Learning Enthusiasm</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className=' w-full min-h-[]'>



            {/* this is for the about me */}
            <TabsContent value='about me'>
              <div className='h-[360px] flex flex-col ml-12 gap-[30px]'>
                <h3 className='text-3xl  text-green-400 text-center font-bold'>
                  {about.title}
                </h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:lg:mx-0 '>
                  {about.description}</p>

                <ul className='grid grid-cols-1 xl:lg:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:lg:mx-0'>
                  {about.info.map((data, index) => {
                    return (
                      <li key={index} className='flex items-center justify-center xl:lg:justify-start gap-4'
                      >
                        <span className=' text-green-300/60 '>{data.fieldname}</span>
                        <span className=' text-green-300/60'>:</span>
                        <span className='text-xl'> {data.fieldValue}</span>

                      </li>
                    )
                  })}</ul></div></TabsContent>



            {/* this is for the education */}
            <TabsContent value="Education">
              <div className='flex flex-col mt-10 lg:xl:mt-0 md:mt-0 gap-[15px] text-center '>
                <h3 className='item-center  text-3xl font-bold text-green-400'>{education.title}</h3>
                {/* <p className='items-center lg:xl:text-left mx-auto lg:xl:mx-0 max-w-[600px] text-white/60'>{Experience.decription}</p> */}
                {/* when ever you add the experience make shore ou have to add the h-[400] in scrolarea */}
                <ScrollArea className='h-[360px] mt-4'>
                  <ul className='grid grid-cols-1 lg:xl:md:grid-cols-2  gap-[30px]'>
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className=' bg-slate-700 dark:bg-slate-900 rounded-xl px-10 h-[180px] flex flex-col items-center justify-center lg:xl:item-start text-white/85 text-lg font-bold'>
                          <span className='text-green-400' >{item.duration}</span>
                          <h3 className='text-xl max-w-[300px] pt-2 min-h-[50px] text-center '>{item.degree}</h3>
                          <div className='flex pr-4 flex-row items-center justify-start'>
                            <span className='w-[8px]  h-[8px] text-white/50 bg-green-400 rounded-full'></span>
                            <p className='ml-4'>{item.institutions}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* this is for the Experince */}
            <TabsContent value="Experience">
              <div className='flex flex-col mt-10 lg:xl:mt-0 md:mt-0 gap-[15px] text-center '>
                <h3 className='item-center  text-3xl font-bold text-green-400'>{Experience.title}</h3>
                {/* <p className='items-center lg:xl:text-left mx-auto lg:xl:mx-0 max-w-[600px] text-white/60'>{Experience.decription}</p> */}
                {/* when ever you add the experience make shore ou have to add the h-[400] in scrolarea */}
                <ScrollArea className='h-[360px] mt-4'>
                  <ul className='grid grid-cols-1  gap-[30px]'>
                    {Experience.items.map((item, index) => {
                      return (
                        <li key={index} className='bg-slate-700 dark:bg-slate-900 rounded-xl px-10 h-[180px] flex flex-col items-center justify-center lg:xl:item-start text-white/85 text-lg font-bold'>
                          <span className='text-green-400' >{item.duration}</span>
                          <h3 className='text-xl max-w-[300px] pt-2 min-h-[50px] text-center '>{item.desigation}</h3>
                          <div className='flex flex-row items-center justify-center'>
                            <span className='w-[8px] mr-4 h-[8px] text-white/60 bg-green-400 rounded-full'></span>
                            <p>{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>


            {/* this  is for the  Skills*/}
            <TabsContent value="Skills">
              <div className='flex flex-col mt-10 lg:xl:mt-0 md:mt-0 gap-[15px] text-center '>
                <h3 className='item-center  text-3xl font-bold text-green-400'>{skills.title}</h3>
                {/* <p className='items-center lg:xl:text-left mx-auto lg:xl:mx-0 max-w-[600px] text-white/60'>{Experience.decription}</p> */}
                {/* when ever you add the experience make shore ou have to add the h-[400] in scrolarea */}

              </div>
              {/* from ther there is a tool tip*/}
              <ul className='grid mt-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:lg:gap-[30px]'>
                {skills.skillList.map((skill, index) => {
                  return (
                    <li key={index} >
                      <TooltipProvider
                        delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-full h-[120px] bg-slate-300 dark:bg-slate-900 rounded-xl flex items-center justify-center group'>
                            <div className='text-5xl group-hover:text-green-300 transition-all duration-300'>
                              {skill.icons}
                            </div>

                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>

                      </TooltipProvider>

                    </li>
                  )
                })}
              </ul>
            </TabsContent>
            {/* this is for the learning enthusiast*/}
            <TabsContent value="Learning Enthusiasm">
            <div className='flex flex-col  mt-10 lg:xl:mt-0 md:mt-0 gap-[15px] text-center '>
                <h3 className='item-center  text-3xl font-bold text-green-400'>Enthusiast To!</h3>
                  <div> 
               <p>
                As an <span className=" text-green-400  font-bold">Learning Enthusiast</span>, I am currently learning <span className=" text-green-400  font-bold">Cutting Edge</span>
                Tecnologies such as <br /> <span className=" text-green-500 text-xl font-bold"> Cloud Applied Generative AI Engineering (GenEng)</span>
                </p>
                 <div className='mt-4'>Stack included <br /> 
                 <ul className='grid mt-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:lg:gap-[30px]'>
                {enthusiast.map((icons, index) => {
                  return (
                    <li key={index} >
                      <TooltipProvider
                        delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-full h-[120px] bg-slate-300 dark:bg-slate-900 rounded-xl flex items-center justify-center group'>
                            <div className='text-5xl group-hover:text-green-400 transition-all duration-300'>
                              {icons.icons}
                            </div>

                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{icons.name}</p>
                          </TooltipContent>
                        </Tooltip>

                      </TooltipProvider>

                    </li>
                  )
                })}
              </ul></div>
                 {/* <span className=" text-green-400  font-bold">Python</span>,
                <span className=" text-green-400  font-bold">OpenAI</span>, <span className=" text-green-400  font-bold">Containers</span> etc
                */} 
              
              
              </div>

              </div>
              


            </TabsContent>

          </div>


        </Tabs>


      </div>
    </motion.div>
  )
}

export default page