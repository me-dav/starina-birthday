"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import type { Memory } from "@/types"
import { WashiTape, PushPin } from "./DecorativeElements"
import { useReducedMotion } from "@/lib/useReducedMotion"

const PIN_HEX: Record<string, string> = {
  navy: "#1D3557",
  blue: "#BFDCEB",
  cream: "#EADCC8",
  brown: "#8C6F56",
}

type MemoryPolaroidProps = {
  memory: Memory
  onClick?: () => void
  index?: number
}

export default function MemoryPolaroid({ memory, onClick, index = 0 }: MemoryPolaroidProps) {
  const reducedMotion = useReducedMotion()
  const rotation = memory.rotation ?? 0
  const pinColor = memory.pinColor ?? "navy"

  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={reducedMotion ? undefined : { opacity: 0, y: 20, rotate: 0 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0, rotate: rotation }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.06, 0.6), ease: [0.16, 1, 0.3, 1] }}
      whileHover={reducedMotion ? undefined : { rotate: 0, scale: 1.04, zIndex: 10 }}
      style={reducedMotion ? { transform: `rotate(${rotation}deg)` } : undefined}
      className="group relative block w-full text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-navy focus-visible:outline-offset-4 rounded-[2px]"
      aria-label={`Buka foto: ${memory.title ?? memory.alt}`}
    >
      <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-10">
        <PushPin color={PIN_HEX[pinColor]} className="w-3 h-3 shadow-[0_2px_5px_rgba(0,0,0,0.35)]" />
      </span>

      <div className="relative bg-white p-2.5 pb-9 shadow-[var(--shadow-polaroid)] transition-shadow duration-300 group-hover:shadow-[0_16px_32px_-10px_rgba(29,53,87,0.35)]">
        {index % 3 === 0 && <WashiTape className="-top-3 -right-2 w-10 h-5" rotate={18} />}
        <div className="relative w-full aspect-[4/5] overflow-hidden bg-cream-dark">
          <Image
            src={memory.image}
            alt={memory.alt}
            fill
            sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 220px"
            className="object-cover"
          />
        </div>
        {memory.title && (
          <p className="absolute bottom-2.5 left-0 right-0 px-2 text-center font-display italic text-navy-soft text-[13px] truncate">
            {memory.title}
          </p>
        )}
      </div>
    </motion.button>
  )
}
