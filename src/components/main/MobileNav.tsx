"use client"
import { usePathname } from 'next/navigation'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { CiMenuFries } from 'react-icons/ci'
import Link from 'next/link'
import Image from 'next/image'
import Muazam_Avatar from "@/../public/NewAvatar.png"
import { cn } from '@/lib/utils'

interface link {
    name: string,
    path: string
}
const links: link[] = [
    { name: "Home", path: "/" },
    { name: "Resume", path: "/resume" },
    { name: "Work", path: "/work" },
    { name: "Contact", path: "/contact" },
]

const MobileNav = () => {
    const pathname = usePathname()

    return (
        <Sheet>
            <SheetTrigger className="flex h-9 w-9 items-center justify-center opacity-90 transition-opacity hover:opacity-100">
                <CiMenuFries className="text-2xl text-green-400" />
            </SheetTrigger>
            <SheetContent className="flex flex-col border-border bg-background">
                <Link href="/" className="mb-10 mt-10 flex items-center gap-3">
                    <span className="relative h-9 w-9 overflow-hidden rounded-full">
                        <Image src={Muazam_Avatar} alt="Muazam Mughal" fill className="object-cover" />
                    </span>
                    <span className="font-signature text-2xl text-foreground">Muazam Mughal</span>
                </Link>
                <nav className="flex flex-col gap-6">
                    {links.map((link) => {
                        const active = link.path === pathname
                        return (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={cn(
                                    "text-lg font-medium transition-colors duration-300",
                                    active ? "text-green-600 dark:text-green-400" : "text-foreground/70 hover:text-foreground"
                                )}
                            >
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
