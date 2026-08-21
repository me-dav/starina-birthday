"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { X, ChevronLeft, ChevronRight, MapPin, Calendar } from "lucide-react"
import { memories } from "@/data/memories"
import { siteContent } from "@/data/site-content"
import MemoryPolaroid from "./MemoryPolaroid"
import ScrollReveal from "./ScrollReveal"

export default function MemoryGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const close = useCallback(() => setActiveIndex(null), [])
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + memories.length) % memories.length)),
    []
  )
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % memories.length)),
    []
  )

  useEffect(() => {
    if (activeIndex === null) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowLeft") showPrev()
      if (e.key === "ArrowRight") showNext()
    }
    window.addEventListener("keydown", onKeyDown)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = ""
    }
  }, [activeIndex, close, showPrev, showNext])

  const active = activeIndex !== null ? memories[activeIndex] : null

  return (
    <section id="memories" className="relative bg-cream-dark/50 px-5 sm:px-8 py-20 sm:py-28">
      <div className="mx-auto max-w-[1100px] flex flex-col items-center gap-14">
        <ScrollReveal className="text-center flex flex-col items-center gap-3">
          <span className="font-body text-xs uppercase tracking-[0.3em] text-brown">
            {siteContent.memories.label}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-navy">{siteContent.memories.title}</h2>
          <p className="font-body text-sm sm:text-base text-muted max-w-md">
            {siteContent.memories.subtitle}
          </p>
        </ScrollReveal>

        {/* TODO: Jumlah foto dapat ditambah/dikurangi lewat src/data/memories.ts */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-5 gap-y-10 sm:gap-x-8 sm:gap-y-12 pt-3">
          {memories.map((memory, i) => (
            <MemoryPolaroid
              key={memory.id}
              memory={memory}
              index={i}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/90 backdrop-blur-sm px-4 py-10"
            role="dialog"
            aria-modal="true"
            aria-label={active.title ?? "Foto kenangan"}
            onClick={close}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white p-3 pb-6 max-w-[420px] w-full rounded-[2px] shadow-2xl"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-cream-dark">
                <Image
                  src={active.image}
                  alt={active.alt}
                  fill
                  sizes="420px"
                  className="object-cover"
                />
              </div>

              <div className="px-1 pt-4 flex flex-col gap-1">
                {active.title && (
                  <h3 className="font-display italic text-xl text-navy">{active.title}</h3>
                )}
                {active.caption && (
                  <p className="font-body text-sm text-ink/80">{active.caption}</p>
                )}
                {(active.date || active.location) && (
                  <div className="flex items-center gap-4 pt-1 text-xs text-muted font-body">
                    {active.date && (
                      <span className="inline-flex items-center gap-1">
                        <Calendar size={12} /> {active.date}
                      </span>
                    )}
                    {active.location && (
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={12} /> {active.location}
                      </span>
                    )}
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={close}
                aria-label="Tutup"
                className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-navy text-cream flex items-center justify-center shadow-lg hover:bg-navy-soft transition-colors"
              >
                <X size={18} />
              </button>

              <button
                type="button"
                onClick={showPrev}
                aria-label="Foto sebelumnya"
                className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-14 w-10 h-10 rounded-full bg-cream text-navy flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label="Foto berikutnya"
                className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-14 w-10 h-10 rounded-full bg-cream text-navy flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
