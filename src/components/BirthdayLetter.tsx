"use client"

import { motion } from "framer-motion"
import { siteContent } from "@/data/site-content"
import { HeartDoodle } from "./DecorativeElements"
import ScrollReveal from "./ScrollReveal"
import { useReducedMotion } from "@/lib/useReducedMotion"

export function IntroMessage() {
  return (
    <section id="intro" className="relative bg-cream px-5 sm:px-8 py-20 sm:py-28">
      <div className="mx-auto max-w-xl text-center flex flex-col items-center gap-5">
        <ScrollReveal>
          <span className="font-body text-xs uppercase tracking-[0.3em] text-brown">
            {siteContent.intro.label}
          </span>
        </ScrollReveal>

        {siteContent.intro.paragraphs.map((p, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <p className="font-display text-xl sm:text-2xl leading-relaxed text-navy italic">
              {p}
            </p>
          </ScrollReveal>
        ))}

        <ScrollReveal delay={0.2}>
          <HeartDoodle className="w-7 h-7 mt-2" />
        </ScrollReveal>
      </div>
    </section>
  )
}

export default function BirthdayLetter() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="letter" className="relative bg-baby-blue-light/60 px-5 sm:px-8 py-20 sm:py-28">
      <div className="mx-auto max-w-[700px] flex flex-col items-center gap-10">
        <ScrollReveal className="w-full flex justify-center">
          <div className="text-center flex flex-col items-center gap-3">
            <span className="font-body text-xs uppercase tracking-[0.3em] text-navy-soft">
              {siteContent.letter.label}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-navy">{siteContent.letter.title}</h2>
          </div>
        </ScrollReveal>

        <motion.article
          initial={reducedMotion ? undefined : { opacity: 0, y: 30, scale: 0.98 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full bg-white rounded-sm shadow-[var(--shadow-soft)] px-6 py-10 sm:px-12 sm:py-14 paper-grain"
        >
          <div className="flex flex-col gap-5">
            {siteContent.letter.body.map((paragraph, i) => (
              <p
                key={i}
                className="font-body text-[15px] sm:text-base leading-[1.9] text-ink"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <p className="mt-10 font-display italic text-lg text-navy whitespace-pre-line text-right">
            {siteContent.letter.signature}
          </p>
        </motion.article>
      </div>
    </section>
  )
}
