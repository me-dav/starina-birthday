"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { siteContent } from "@/data/site-content"
import { StarDoodle, WashiTape, SquiggleDoodle } from "./DecorativeElements"

const easeOut = [0.16, 1, 0.3, 1] as const

export default function BirthdayHero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-cream paper-grain pt-24 pb-16 px-5 sm:px-8"
    >
      {/* Ambient decorations */}
      <StarDoodle className="absolute top-[14%] left-[8%] w-6 h-6 sm:w-8 sm:h-8 opacity-70" />
      <StarDoodle className="absolute top-[22%] right-[10%] w-4 h-4 sm:w-5 sm:h-5 opacity-50" />
      <StarDoodle className="absolute bottom-[18%] left-[14%] w-5 h-5 opacity-40 hidden sm:block" />
      <div className="absolute -top-10 -right-16 w-64 h-64 rounded-full bg-baby-blue/30 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-16 -left-10 w-72 h-72 rounded-full bg-baby-blue-light/50 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1100px] w-full grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="flex flex-col gap-6 text-center md:text-left order-2 md:order-1"
        >
          <span className="font-body text-xs uppercase tracking-[0.3em] text-brown">
            {siteContent.hero.eyebrow}
          </span>

          <h1 className="font-display text-navy leading-[1.1] text-4xl sm:text-5xl">
            {siteContent.hero.titleLine1}
            <br />
            <span className="italic">{siteContent.hero.titleLine2}</span>
          </h1>

          <SquiggleDoodle className="w-24 h-4 mx-auto md:mx-0" />

          <div className="font-body text-navy-soft text-base sm:text-lg leading-relaxed">
            <p>{siteContent.hero.forLine}</p>
            <p>{siteContent.hero.fromLine}</p>
          </div>

          <div className="mt-2">
            <a
              href="#intro"
              className="group inline-flex items-center gap-2 rounded-full bg-navy text-cream px-7 py-3 font-body text-sm tracking-wide hover:bg-navy-soft transition-colors shadow-[var(--shadow-soft)]"
            >
              {siteContent.hero.ctaLabel}
              <ChevronDown size={16} className="transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        </motion.div>

        {/* Polaroid column */}
        <motion.div
          initial={{ opacity: 0, y: 32, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: -3 }}
          transition={{ duration: 0.9, ease: easeOut, delay: 0.15 }}
          className="relative mx-auto order-1 md:order-2 w-[240px] sm:w-[280px]"
        >
          <div className="relative bg-white p-3 pb-14 shadow-[var(--shadow-polaroid)] rounded-[2px]">
            <WashiTape className="-top-4 left-1/2 -translate-x-1/2" rotate={-4} />
            <div className="relative w-full aspect-[4/5] overflow-hidden bg-cream-dark">
              <Image
                src="/images/memories/sendiri.jpeg"
                alt="Foto polaroid dummy — TODO: ganti dengan foto berdua"
                fill
                sizes="(max-width: 640px) 240px, 280px"
                className="object-cover"
                priority
              />
            </div>
            <p className="absolute bottom-4 left-0 right-0 text-center font-display italic text-navy-soft text-sm">
              us, always
            </p>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#intro"
        aria-label="Scroll ke bawah"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 text-navy-soft/70 hover:text-navy transition-colors"
      >
        <ChevronDown size={22} className="animate-bounce" style={{ animationDuration: "2.2s" }} />
      </motion.a>
    </section>
  )
}
