"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { siteContent } from "@/data/site-content"
import { cn } from "@/lib/utils"

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-colors duration-300",
        scrolled ? "bg-cream/90 backdrop-blur-sm shadow-[0_1px_0_rgba(29,53,87,0.08)]" : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-[1200px] px-5 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="font-display text-lg text-navy tracking-wide"
          onClick={() => setOpen(false)}
        >
          S &amp; D
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {siteContent.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-body text-sm text-navy-soft hover:text-navy transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 text-navy"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out bg-cream/98 backdrop-blur-sm border-t border-navy/10",
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="px-5 py-3 flex flex-col">
          {siteContent.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-body text-base text-navy-soft border-b border-navy/5 last:border-none"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
