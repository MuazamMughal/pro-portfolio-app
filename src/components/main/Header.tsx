"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Muazam_Avatar from "@/../public/NewAvatar.png"
import Nav from './Nav'
import MobileNav from './MobileNav'
import ThemeSwitch from '@/components/theme-switch'

const Header = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header className="sticky top-2 z-[60] px-4 pt-2">
            <div className="container mx-auto">
                <div
                    className={`flex items-center gap-4 rounded-full px-3 py-2.5 transition-colors duration-300 lg:px-4 ${
                        scrolled
                            ? "bg-background/80 shadow-lg shadow-black/5 backdrop-blur-md ring-1 ring-foreground/10"
                            : "bg-transparent"
                    }`}
                >
                    <Link
                        href="/"
                        className="flex shrink-0 items-center gap-3 rounded-full py-1 pl-1 pr-3 transition-opacity duration-300 hover:opacity-80"
                    >
                        <span className="h-12 w-12 overflow-hidden rounded-xl">
                            <Image
                                src={Muazam_Avatar}
                                alt="Muazam Mughal"
                                className="h-full w-full object-cover"
                                priority
                            />
                        </span>
                        <span className="hidden text-sm font-semibold text-foreground sm:block">
                            Muazam Mughal
                        </span>
                    </Link>

                    <div className="hidden flex-1 items-center justify-center gap-8 lg:flex">
                        <Nav />
                    </div>

                    <div className="ml-auto hidden items-center gap-3 lg:flex">
                        <ThemeSwitch />
                        <Link
                            href="https://wa.me/923034510773"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-gradient-to-r from-green-600 to-emerald-600 px-5 py-2.5 text-xs font-semibold tracking-wide text-white transition-all duration-300 hover:scale-105 hover:from-green-500 hover:to-emerald-500 hover:shadow-lg hover:shadow-green-500/25"
                        >
                            Let&apos;s Talk
                        </Link>
                    </div>

                    <div className="ml-auto flex items-center gap-2 lg:hidden">
                        <ThemeSwitch />
                        <MobileNav />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
