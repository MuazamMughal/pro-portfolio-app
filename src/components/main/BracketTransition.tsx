"use client"
import React from 'react'
import {AnimatePresence ,motion} from "framer-motion"
import { usePathname } from 'next/navigation'
import Bracket from './Bracket'


const BracketTransition = () => {
    const pathname  =usePathname()
  return (
    <AnimatePresence mode='wait'>
        <div key={pathname}>
            <div className=' h-screen w-screen fixed top-0 left-0 right-0 z-40
            flex pointer-events-none'>
               
                <Bracket/>
            </div>

        </div>
       

    </AnimatePresence>
    
  )
}

export default BracketTransition