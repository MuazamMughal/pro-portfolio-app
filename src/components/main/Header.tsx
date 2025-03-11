import Link from 'next/link'
import React from 'react'
import Muazam_Avatar from "@/../public/NewAvatar.png"
import Image from 'next/image'
import Nav from './Nav'
import { Button } from '../ui/button'
import MobileNav from './MobileNav'


const Header = () => {
    return (
        <header className='py-6 xl:py-6 text-zinc-200'>
            <div className=' container mx-auto flex items-center justify-between'>
                {/* adding logo there  */}


                <Link href={"/"}>
                    <h1 className='font-bold text-3xl flex pl-4'>
                        <Image src={Muazam_Avatar} alt='logo' className='h-15 w-16'>
                        </Image>

                        {/* <span className=' pt-4 text-lime-200 text-opacity-50 font-primary '>Muazam Mughal</span>
                       */} <span className='pt-5  text-green-400'>.</span>
                    </h1>
                </Link>
                {/* thier we gona add the  nevbar */}
                <div className=' hidden lg:flex xl:flex items-center pt-2 gap-6'>
                    <Nav />
                    <Link href={"https://join.skype.com/invite/Obnbkt2VCmvB"}>
                        <Button className=' text-lg  rounded-2xl px-5  bg-green-500  hover:text-white/90  hover:bg-green-700'>
                            Hire Me
                        </Button>
                    </Link>
                </div>
                {/* Now this is for the moobile nev */}
                <div className=' pr-4  lg:hidden xl:hidden'>
                    <MobileNav />
                </div>



            </div>

        </header>
    )
}

export default Header