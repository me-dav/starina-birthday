"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { MapPin, CalendarDays, Clock, Shirt } from "lucide-react"
import { siteContent } from "@/data/site-content"
import ScrollReveal from "./ScrollReveal"
import { WashiTape } from "./DecorativeElements"
import { useReducedMotion } from "@/lib/useReducedMotion"

const details = [
  { icon: MapPin, label: "Tempat", key: "place" as const },
  { icon: CalendarDays, label: "Tanggal", key: "date" as const },
  { icon: Clock, label: "Waktu", key: "time" as const },
  { icon: Shirt, label: "Dresscode", key: "dresscode" as const },
]

export default function DinnerInvitation() {
  const reducedMotion = useReducedMotion()
  const { dinner } = siteContent

  return (
    <section id="dinner" className="relative bg-cream px-5 sm:px-8 py-20 sm:py-28 paper-grain">
      <div className="mx-auto max-w-[560px] flex flex-col items-center gap-10">
        <ScrollReveal className="text-center flex flex-col items-center gap-3">
          <span className="font-body text-xs uppercase tracking-[0.3em] text-brown">
            {dinner.label}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-navy">{dinner.title}</h2>
          <p className="font-body text-sm sm:text-base text-muted max-w-sm">{dinner.message}</p>
        </ScrollReveal>

        <motion.div
          initial={reducedMotion ? undefined : { opacity: 0, y: 30, rotate: -1 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0, rotate: -1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full"
        >
          <WashiTape className="-top-3 left-8 z-10" rotate={-10} />
          <WashiTape className="-top-3 right-8 z-10" rotate={8} />

          <div className="relative bg-white rounded-lg shadow-[var(--shadow-polaroid)] overflow-hidden">
            {/* Ticket top: details */}
            <div className="px-7 py-8 sm:px-9 sm:py-9 flex flex-col gap-5">
              <div className="text-center">
                <p className="font-display italic text-xl text-navy">
                  You&rsquo;re invited to dinner
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {details.map(({ icon: Icon, label, key }) => (
                  <div key={key} className="flex items-start gap-3">
                    <span className="mt-0.5 w-8 h-8 shrink-0 rounded-full bg-baby-blue-light flex items-center justify-center text-navy">
                      <Icon size={15} />
                    </span>
                    <div className="min-w-0">
                      <p className="font-body text-[10px] uppercase tracking-[0.18em] text-brown">
                        {label}
                      </p>
                      <p className="font-body text-sm text-ink leading-snug break-words">
                        {dinner[key]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Perforated divider */}
            <div className="relative flex items-center px-2">
              <span className="absolute -left-3.5 w-7 h-7 rounded-full bg-cream" aria-hidden="true" />
              <span className="absolute -right-3.5 w-7 h-7 rounded-full bg-cream" aria-hidden="true" />
              <span
                className="w-full border-t-2 border-dashed border-cream-dark"
                aria-hidden="true"
              />
            </div>

            {/* Ticket bottom: QR code */}
            <div className="px-7 py-8 sm:px-9 sm:py-9 flex flex-col items-center gap-3">
              <div className="w-32 h-32 sm:w-36 sm:h-36 relative rounded-md overflow-hidden ring-1 ring-cream-dark bg-white p-1.5">
                <Image
                  src={dinner.qrImage}
                  alt="QR code lokasi dinner di Google Maps"
                  fill
                  sizes="144px"
                  className="object-contain"
                />
              </div>
              <a
                href={dinner.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs text-navy-soft underline underline-offset-2 hover:text-navy transition-colors"
              >
                Scan atau tap untuk buka lokasi di Google Maps
              </a>
              <p className="font-body text-[11px] text-muted italic">{dinner.rsvpNote}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
