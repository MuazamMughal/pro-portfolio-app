"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
const socials = [
  { icon: <FaGithub />, path: 'https://github.com/MuazamMughal', label: 'GitHub' },
  { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/muazam-mughal/', label: 'LinkedIn' },
  { icon: <FaWhatsapp />, path: 'https://wa.me/+923034510773', label: 'WhatsApp' },
]

const Hero = () => {
  return (
    <div className="relative z-10 flex h-full min-h-[calc(100svh-96px)] flex-col items-center justify-end gap-3 px-4 pb-10 text-center sm:pb-14">
      {/* <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7, ease: 'easeOut' }}
        className="max-w-md text-sm text-slate-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] sm:text-base"
      >
        Full-Stack Engineer &amp; AI Product Developer building fast, elegant web experiences.
      </motion.p> */}

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.7, ease: 'easeOut' }}
        className="flex items-center gap-3 pt-1"
      >
        {socials.map((social) => (
          <Link
            key={social.label}
            href={social.path}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-slate-200 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-green-500/40 hover:bg-green-500/10 hover:text-green-400"
          >
            {social.icon}
          </Link>
        ))}
      </motion.div>
    </div>
  )
}

export default Hero
