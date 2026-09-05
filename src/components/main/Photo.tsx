"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const Photo = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* giant watermark word, sits behind the portrait */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 z-0 flex items-center justify-center -translate-y-[17%]"
      >
        <span className="font-display select-none whitespace-nowrap text-[26vw] leading-none tracking-tight text-green-600/20 dark:text-green-500/20">
          ENGINEER
        </span>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/10 via-background to-background/10" />
      </motion.div>

      {/* MUAZAM on left side behind portrait */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        className="absolute inset-0 z-5 flex items-center justify-start pl-[5%] translate-y-[15%]"
      >
        <span className="font-display font-black select-none whitespace-nowrap text-[15vw] leading-none tracking-tight text-foreground/[0.15] dark:text-foreground/40">
          MUAZAM
        </span>
      </motion.div>

      {/* MUGHAL on right side behind portrait */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        className="absolute inset-0 z-5 flex items-center justify-end pr-[5%] translate-y-[15%]"
      >
        <span className="font-display font-black select-none whitespace-nowrap text-[15vw] leading-none tracking-tight text-foreground/[0.15] dark:text-foreground/40">
          MUGHAL
        </span>
      </motion.div>

      {/* echo / double-exposure duplicate, offset behind the main portrait - left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.28 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-0 z-10 flex items-end justify-center"
      >
        <div className="relative -translate-x-10 translate-y-2 scale-[1.04] h-[112%] w-full max-w-[960px] blur-[3px]">
          <Image
            src="/asset/MuazamCutout.png"
            alt=""
            aria-hidden
            fill
            className="object-contain object-bottom [filter:grayscale(1)_contrast(1.05)_brightness(0.85)] dark:[filter:grayscale(1)_contrast(1.05)_brightness(0.45)]"
          />
        </div>
      </motion.div>

      {/* echo / double-exposure duplicate, offset behind the main portrait - right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.28 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-0 z-10 flex items-end justify-center"
      >
        <div className="relative translate-x-10 translate-y-2 scale-[1.04] h-[112%] w-full max-w-[960px] blur-[3px]">
          <Image
            src="/asset/MuazamCutout.png"
            alt=""
            aria-hidden
            fill
            className="object-contain object-bottom [filter:grayscale(1)_contrast(1.05)_brightness(0.85)] dark:[filter:grayscale(1)_contrast(1.05)_brightness(0.45)]"
          />
        </div>
      </motion.div>

      {/* main portrait */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut", delay: 0.15 }}
        className="absolute inset-0 z-20 flex items-end justify-center"
      >
        <div className="relative h-[116%] w-full max-w-[1000px]">
          <Image
            src="/asset/MuazamCutout.png"
            alt="Muazam Mughal"
            fill
            priority
            quality={95}
            sizes="(max-width: 768px) 100vw, 1000px"
            className="object-contain object-bottom [filter:grayscale(1)_contrast(1.05)_brightness(1)] dark:[filter:grayscale(1)_contrast(1.08)_brightness(0.75)]"
          />
        </div>
      </motion.div>

      {/* fade the portrait into the page background — thin edge bands only,
          so the fade never eats into the subject itself */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-[12%] bg-gradient-to-t from-background to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-[18%] bg-gradient-to-b from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 left-0 z-30 w-[10%] bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-30 w-[10%] bg-gradient-to-l from-background to-transparent" />
    </div>
  )
}

export default Photo
