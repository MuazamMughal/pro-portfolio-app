"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
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

const Nav = () => {
    const pathname = usePathname()
    return (
        <nav className="flex items-center gap-8">
            {links.map((link) => {
                const active = link.path === pathname
                return (
                    <Link
                        key={link.path}
                        href={link.path}
                        className={cn(
                            "relative py-1 text-sm font-medium transition-colors duration-300",
                            active
                                ? "text-green-600 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:bg-green-600 dark:text-green-400 dark:after:bg-green-400"
                                : "text-foreground/70 hover:text-foreground"
                        )}
                    >
                        {link.name}
                    </Link>
                )
            })}
        </nav>
    )
}

export default Nav
