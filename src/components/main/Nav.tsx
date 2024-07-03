"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import path from 'path'
import { text } from 'stream/consumers'
interface link {
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
const Nav = () => {
    const pathname = usePathname()
    console.log(pathname)
    return (
        <nav className='flex gap-6'>
            {links.map((link: link, index) => {
                return (
                    <Link href={link.path}
                        key={index}
                        className={`${link.path == pathname &&
                            " text-green-300 border-b-4 font-bold  border-green-800"}
           font-medium  text-slate-900  dark:text-white rounded-md p-2 transition-all hover:bg-green-600`}>
                        {link.name}

                    </Link>
                )
            })}

        </nav>
    )
}

export default Nav