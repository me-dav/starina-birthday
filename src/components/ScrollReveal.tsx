"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { useReducedMotion } from "@/lib/useReducedMotion"

type ScrollRevealProps = {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}

export default function ScrollReveal({ children, delay = 0, y = 24, className }: ScrollRevealProps) {
  const reducedMotion = useReducedMotion()

  if (reducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
