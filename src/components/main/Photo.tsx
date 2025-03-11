"use client"
import React from 'react'
import {motion} from "framer-motion"
import Image from 'next/image'

const Photo = () => {
  return (
    <div className='w-full h-full relative'>
        <motion.div initial={{opacity:0}}
        animate={{opacity:1,
            transition:{delay:1,duration:0.2,ease:"easeIn"}
        }}>
            <motion.div initial={{opacity:0}}
        animate={{opacity:1,
            transition:{delay:1,duration:0.2,ease:"easeIn"}
        }} className='w-[220px] h-[200px] md:w-[450px] md:h-[400px] lg:xl:w-[450px] md:lg:xl:h-[500px] '>
             
                <Image
                src="/asset/MuazamFinal2.png"
                alt=''
                fill
                priority
                className='object-contain transition  opacity-90 rounded-b-full mix-blend-lighten'/>
           


        </motion.div>
        </motion.div>
           
        
    </div>

  )
}

export default Photo