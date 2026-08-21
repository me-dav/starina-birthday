"use client"

import { siteContent } from "@/data/site-content"
import { timelineItems } from "@/data/timeline"
import ScrollReveal from "./ScrollReveal"
import { StarDoodle } from "./DecorativeElements"

export default function Timeline() {
  return (
    <section id="timeline" className="relative bg-cream px-5 sm:px-8 py-20 sm:py-28 paper-grain">
      <div className="mx-auto max-w-[1000px] flex flex-col items-center gap-14 sm:gap-16">
        <ScrollReveal className="text-center flex flex-col items-center gap-3">
          <span className="font-body text-xs uppercase tracking-[0.3em] text-brown">
            {siteContent.timeline.label}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-navy">{siteContent.timeline.title}</h2>
        </ScrollReveal>

        {/* TODO: Tambahkan atau ubah timeline sesuai cerita sebenarnya (lihat src/data/timeline.ts) */}
        <ol className="relative w-full flex flex-col gap-12 sm:gap-16 md:hidden">
          <span
            className="stitch-line absolute left-[15px] top-2 bottom-2 w-[2px]"
            aria-hidden="true"
          />
          {timelineItems.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.08}>
              <li className="relative pl-12">
                <span className="absolute left-0 top-1 w-[31px] h-[31px] rounded-full bg-navy flex items-center justify-center text-cream font-display text-xs">
                  {index + 1}
                </span>
                <p className="font-body text-xs uppercase tracking-[0.18em] text-brown mb-1">
                  {item.date}
                </p>
                <h3 className="font-display text-xl text-navy mb-1.5">{item.title}</h3>
                <p className="font-body text-sm text-ink/80 leading-relaxed">{item.description}</p>
              </li>
            </ScrollReveal>
          ))}
        </ol>

        {/* Desktop: two-column staggered timeline with a connecting stitch line */}
        <ol className="relative w-full hidden md:flex flex-col gap-4">
          <span
            className="stitch-line absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-[2px]"
            aria-hidden="true"
          />
          {timelineItems.map((item, index) => {
            const isLeft = index % 2 === 0
            return (
              <li key={item.title} className="relative grid grid-cols-2 gap-x-10 py-8">
                <span className="absolute left-1/2 top-9 -translate-x-1/2 z-10">
                  <StarDoodle className="w-6 h-6" />
                </span>

                <ScrollReveal
                  delay={index * 0.08}
                  className={isLeft ? "text-right" : "col-start-2 text-left"}
                >
                  {isLeft ? (
                    <TimelineCard item={item} align="right" />
                  ) : (
                    <span aria-hidden="true" />
                  )}
                </ScrollReveal>

                <ScrollReveal
                  delay={index * 0.08}
                  className={!isLeft ? "text-left" : "col-start-1 row-start-1 text-right"}
                >
                  {!isLeft ? <TimelineCard item={item} align="left" /> : <span aria-hidden="true" />}
                </ScrollReveal>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

function TimelineCard({
  item,
  align,
}: {
  item: (typeof timelineItems)[number]
  align: "left" | "right"
}) {
  return (
    <div className={align === "right" ? "pr-10" : "pl-10"}>
      <p className="font-body text-xs uppercase tracking-[0.18em] text-brown mb-1">{item.date}</p>
      <h3 className="font-display text-2xl text-navy mb-2">{item.title}</h3>
      <p className="font-body text-sm text-ink/80 leading-relaxed max-w-[340px] inline-block">
        {item.description}
      </p>
    </div>
  )
}
