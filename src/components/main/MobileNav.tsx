"use client"

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, BriefcaseBusiness, FileText, Home, Menu, MessageCircle, X } from 'lucide-react'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '../ui/sheet'
import Link from 'next/link'
import Image from 'next/image'
import Muazam_Avatar from "@/../public/NewAvatar.png"
import { cn } from '@/lib/utils'

const links = [
    { name: "Home", path: "/", description: "A little introduction", icon: Home },
    { name: "Resume", path: "/resume", description: "Experience & skills", icon: FileText },
    { name: "Work", path: "/work", description: "Selected projects", icon: BriefcaseBusiness },
    { name: "Contact", path: "/contact", description: "Start a conversation", icon: MessageCircle },
]

const MobileNav = () => {
    const pathname = usePathname()
    const [open, setOpen] = useState(false)

    useEffect(() => {
        setOpen(false)
    }, [pathname])

    useEffect(() => {
        const desktop = window.matchMedia('(min-width: 1024px)')
        const closeOnDesktop = () => {
            if (desktop.matches) setOpen(false)
        }
        desktop.addEventListener('change', closeOnDesktop)
        return () => desktop.removeEventListener('change', closeOnDesktop)
    }, [])

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger aria-label="Open navigation menu" className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/60 text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent
                hideCloseButton
                overlayClassName="z-[70] bg-black/40 backdrop-blur-sm motion-reduce:animate-none"
                className="inset-y-3 right-3 z-[80] flex h-[calc(100dvh-1.5rem)] w-[calc(100%-1.5rem)] max-w-sm flex-col gap-0 overflow-y-auto rounded-[2rem] border border-border bg-background p-6 shadow-2xl sm:max-w-sm motion-reduce:animate-none"
            >
                <div className="flex items-center justify-between gap-3">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">Explore / Portfolio</span>
                    <SheetClose aria-label="Close navigation menu" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                        <X className="h-5 w-5" />
                    </SheetClose>
                </div>

                <SheetClose asChild>
                    <Link href="/" className="my-8 flex items-center gap-4 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                        <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl ring-1 ring-border">
                            <Image src={Muazam_Avatar} alt="Muazam Mughal" fill sizes="56px" className="object-cover" />
                        </span>
                        <span>
                            <span className="block font-signature text-3xl text-foreground">Muazam Mughal</span>
                            <span className="mt-1 block text-xs text-muted-foreground">Welcome to my corner.</span>
                        </span>
                    </Link>
                </SheetClose>

                <nav aria-label="Mobile navigation" className="flex flex-col gap-2 border-t border-border pt-5">
                    {links.map(({ name, path, description, icon: Icon }) => {
                        const active = path === '/' ? pathname === path : pathname === path || pathname.startsWith(`${path}/`)
                        return (
                            <SheetClose asChild key={path}>
                                <Link
                                    href={path}
                                    aria-current={active ? 'page' : undefined}
                                    className={cn(
                                        "group flex items-center gap-4 rounded-2xl border p-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                                        active ? "border-primary/20 bg-primary/10 text-primary" : "border-transparent text-foreground hover:border-border hover:bg-muted"
                                    )}
                                >
                                    <span className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl", active ? "bg-primary/10" : "bg-muted text-muted-foreground")}>
                                        <Icon className="h-[18px] w-[18px]" />
                                    </span>
                                    <span className="flex-1">
                                        <span className="block text-base font-semibold">{name}</span>
                                        <span className="mt-1 block text-[11px] text-muted-foreground">{description}</span>
                                    </span>
                                    {active ? <span className="h-1.5 w-1.5 rounded-full bg-primary" /> : <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />}
                                </Link>
                            </SheetClose>
                        )
                    })}
                </nav>

                <div className="mt-auto pt-8 pb-[env(safe-area-inset-bottom)]">
                    <SheetClose asChild>
                        <Link href="/contact" className="flex items-center justify-between rounded-2xl bg-primary px-5 py-4 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                            Let&apos;s build something
                            <ArrowUpRight className="h-5 w-5" />
                        </Link>
                    </SheetClose>
                    <p className="mt-4 text-center text-[10px] tracking-wide text-muted-foreground">Ideas, craft & a little curiosity.</p>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav
