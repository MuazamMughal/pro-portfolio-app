"use client"
import Image from 'next/image'
import React from 'react'
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse"
import eng from "../../../public/2.svg"
import mm from "../../../public/mm2.svg"
import Typewriter from 'typewriter-effect';
import Link from 'next/link'
import { Button } from '../ui/button'
import Social from './Social'
import { motion } from 'framer-motion'
const Hero = () => {
  return (
    <div>
     <motion.div initial={{opacity:0}}
        animate={{opacity:1,
            transition:{delay:0.1,duration:2,ease:"easeInOut"}
        }}>
         
      <div className='flex flex-col  pl-10  justify-center items-center z-20 '>

        <MouseParallaxContainer
          globalFactorX={0.1}
          globalFactorY={0.2}
          resetOnLeave
          className='relative flex items-center  h-[220px] '>
          <MouseParallaxChild>
            <div className=' '>
              <Image
                src={eng}

                height={230}
                alt='image'
                className=" pl-4 opacity-30 " />

            </div>

          </MouseParallaxChild>


          <MouseParallaxChild className='absolute xl:left- z-30'
            factorX={0.5}
            factorY={0.5}>
            <div className=' '>
              <Image
                src={mm}

                height={500}
                alt='image'
                className=" pt-24 lg:xl:pt-36  opacity- " />

            </div>

          </MouseParallaxChild>

        </MouseParallaxContainer>


      </div>
      <motion.div initial={{opacity:0}}
        animate={{opacity:1,
            transition:{delay:0.3,duration:2,ease:"easeInOut"}
        }}>
      
      {/* this is for the text beneth */}
      <div className='flex flex-row items-center justify-center lg:md:justify-normal'>

        <div className='hidden lg:flex xl:flex items-center'>
          <Social />
        </div>

        <div className=' opacity-75 text-center  transition-all  text-lg lg:md:pl-24 lg:text-left xl:text-left'>
          <p>
            Excel at Crafting Elegant Digital Experiences
          </p>
          <p className='pl-'>  Express Feelings in Code.</p>
          <div className='flex flex-col items-center lg:md:flex-row'>
            <h1 className=" text-3xl mt-3 font-medium text-slate-800 dark:text-gray-200">Coding is My &quot; </h1>
            <h1 className='text-3xl mt-3 text-green-500 tracking-wide font-medium'>
              <Typewriter

                options={{
                  strings: [" Present", " Passion", " Pleasure"],
                  autoStart: true,
                  loop: true,

                }}
              />
            </h1>

          </div>
        </div>

      </div>
      
      <div className='lg:md:pl-36 pt-8'>
        <Link href={"/"}>
          <Button className=' text-lg hover:text-slate-200 rounded-2xl px-5  bg-transparent dark:bg-black font-medium text-green-600 hover:bg-green-600 border-2 border-green-600'>
            Download CV
          </Button>
        </Link>
      </div>
      <div className=' md:hidden xl:lg:hidden items-center'>
          <Social />
        </div>
        
        </motion.div>
        </motion.div>


        
    </div>
  )
}

export default Hero