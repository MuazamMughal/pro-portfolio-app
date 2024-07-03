import { icons } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaWhatsapp,
    FaInstagram

} from "react-icons/fa"
interface socialss {
    icons: string,
    path: string
}
const socials = [
    { icons: <FaGithub />, path: "https://github.com/MuazamMughal" },
    { icons: <FaLinkedin />, path: "https://www.linkedin.com/in/muazam-mughal/" },
    { icons: <FaTwitter />, path: "" },
    { icons: <FaWhatsapp />, path: "https://wa.me/+923034510773" },

]
const Social = () => {
    return (
        <div className='flex flex-row  md:flex-col xl:lg:flex-col items-center md:gap-0 xl:lg:gap-0 gap-6 pt-6 justify-center md:xl:lg:pt-0 '>
            {socials.map((social, index) => {
                return (
                    <Link key={index}
                        href={social.path}
                        className='  hover:text-slate-200 text-3xl md:text-2xl xl:lg:text-2xl m-1 bg-transparent dark:bg-black font-medium text-green-600'
                    >
                        {social.icons}
                    </Link>
                )
            })}
        </div>
    )
}

export default Social