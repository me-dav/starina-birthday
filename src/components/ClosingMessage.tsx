"use client"

import { siteContent } from "@/data/site-content"
import { HeartDoodle } from "./DecorativeElements"
import ScrollReveal from "./ScrollReveal"

export default function ClosingMessage() {
  return (
    <footer className="relative bg-navy px-5 sm:px-8 py-20 sm:py-28 overflow-hidden">
      <div className="absolute -top-20 -left-16 w-64 h-64 rounded-full bg-navy-soft/40 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-24 -right-10 w-72 h-72 rounded-full bg-navy-soft/30 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-lg flex flex-col items-center gap-8 text-center">
        <ScrollReveal>
          <HeartDoodle className="w-8 h-8 [&>path]:stroke-baby-blue" />
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="flex flex-col gap-1">
          {siteContent.closing.id.map((line, i) => (
            <p
              key={i}
              className={
                i === siteContent.closing.id.length - 1
                  ? "font-display italic text-2xl sm:text-3xl text-cream mt-2"
                  : "font-body text-sm sm:text-base text-baby-blue-light/90"
              }
            >
              {line}
            </p>
          ))}
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="flex flex-col gap-1">
          {siteContent.closing.en.map((line, i) => (
            <p key={i} className="font-body text-xs sm:text-sm text-baby-blue-light/60 italic">
              {line}
            </p>
          ))}
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="font-body text-xs tracking-[0.25em] uppercase text-baby-blue mt-4">
            {siteContent.closing.dateNote}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <p className="font-display text-cream/70 text-sm mt-6">
            {siteContent.relationshipDateShort}
          </p>
        </ScrollReveal>
      </div>
    </footer>
  )
}
