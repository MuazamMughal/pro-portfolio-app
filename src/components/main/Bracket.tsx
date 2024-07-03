import { AnimatePresence, animate, motion } from 'framer-motion'
import { exit } from 'process'
import React from 'react'

const bracketAnimation = {
    initial:{
        top: "0%",
    },
    animate:{
        top: "100%",
    },
    exit:{
        top: ["100%","0%"],
    }
}

const Bracket = () => {
  return (
   
    <motion.div
    variants={bracketAnimation}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay:0.1
    }}
    className='h-full w-full dark:bg-[#030014]  bg-white  relative' 
   
    >
        <div className='h-screen  font-extrabold dark:font-bold text-green-400 pt-48 flex item-center text-9xl justify-center' >
    
            <p> &#60; 	&#47; &#62;</p>
            
        </div>
    </motion.div>
    
  )
}

export default Bracket