import Link from 'next/link'
import Image from 'next/image'
import Muazam_Avatar from "@/../public/NewAvatar.png"
import Nav from './Nav'
import MobileNav from './MobileNav'

const Header = () => {
    return (
        <header className="sticky top-2 z-[60] px-4 pt-2">
            <div className="container mx-auto">
                <div className="flex items-center gap-4 rounded-full bg-[#0b0b12]/80 px-3 py-2.5 shadow-2xl shadow-black/60 backdrop-blur-xl lg:px-4">
                    <Link
                        href="/"
                        className="flex shrink-0 items-center gap-3 rounded-full py-1 pl-1 pr-3 transition-opacity duration-300 hover:opacity-80"
                    >
                        <span className="h-9 w-9 overflow-hidden rounded-xl ring-1 ring-white/10">
                            <Image
                                src={Muazam_Avatar}
                                alt="Muazam Mughal"
                                className="h-full w-full object-cover"
                                priority
                            />
                        </span>
                        <span className="hidden text-sm font-semibold text-white sm:block">
                            Muazam Mughal
                        </span>
                    </Link>

                    <div className="hidden flex-1 items-center justify-center gap-8 lg:flex">
                        <Nav />
                    </div>

                    <div className="ml-auto hidden lg:flex">
                        <Link
                            href="https://join.skype.com/invite/Obnbkt2VCmvB"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-white px-5 py-2.5 text-xs font-semibold tracking-wide text-black transition-all duration-300 hover:scale-105 hover:bg-slate-200"
                        >
                            Book a Call
                        </Link>
                    </div>

                    <div className="ml-auto lg:hidden">
                        <MobileNav />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
