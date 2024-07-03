"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { CiMenuFries } from 'react-icons/ci'
import Link from 'next/link'
import Muazam_Avatar from "@/../public/Muazam_Avatar-removebg-preview.png"
import Image from 'next/image'



interface link{
    name: string,
    path: string
}
const links = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "About Me",
        path: "/aboutme"
    },
    // {
    //     name: "Services",
    //     path: "/services"
    // },
    {
        name: "Resume",
        path: "/resume"
    },
    {
        name: "Work",
        path: "/work"
    },
    {
        name: "Contact",
        path: "/contact"
    },
]

const MobileNav = () => {
    const pathname = usePathname()

  return (
    <Sheet>
        <SheetTrigger className='flex item-center justify-center '>
            <CiMenuFries className='   text-4xl  text-green-300'/>
        </SheetTrigger>
        <SheetContent className='flex flex-col bg-white/30 dark:bg-[#27272c]'>
            {/* adding the logo to the sheets */}
            <div className=' mt-12 mb-6 text-center text-2xl' >
            <Link href={"/"}>
                    <h1 className='font-bold  ml-32 text-3xl flex '>
                        <Image src={Muazam_Avatar} alt='logo' className='h-15 w-16'>
                        </Image> <span className='pt-6  text-green-400'>.</span> 
                    </h1>
                </Link>

            </div>
            <nav className='flex flex-col gap-4 items-center justify-center'>
                {links.map((link, index) =>{
                    return(
                    <Link href={link.path} 
                    key={index}
                    className={`${link.path == pathname&&
                        " text-green-300 border-b-4  px-12 border-green-800"}
                        text-xl font-semibold  px-12 text-green-200 rounded-md p-2 transition-all hover:bg-green-900`}>
                        {link.name}
                    </Link>
                    )
                })}
            </nav>

        </SheetContent>
    </Sheet>
  )
}

export default MobileNav