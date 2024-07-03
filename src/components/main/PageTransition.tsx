"use client"
import React from 'react'
import {AnimatePresence ,motion} from "framer-motion"
import { usePathname } from 'next/navigation'

const PageTransition = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {

    const pathname = usePathname()
  return (
    <AnimatePresence>
        <div key={pathname}>
            <motion.div 
            initial={{opacity: 1}} 
            animate={{opacity: 0 , 
                transition:{ delay:0.3 ,duration:2 , ease:"easeInOut"}}}
                className=' h-screen w-screen fixed bg-[#030014] top-0 pointer-events-none' >

            </motion.div>

        </div>
        {children}
    </AnimatePresence>
  )
}

export default PageTransition