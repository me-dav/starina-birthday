import { cn } from "@/lib/utils"

type DoodleProps = {
  className?: string
}

/** A small hand-drawn-style star, used sparingly as scrapbook confetti. */
export function StarDoodle({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("text-baby-blue", className)}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 3 L23.5 15.5 L36 18 L23.5 21.5 L20 34 L16.5 21.5 L4 18 L16.5 15.5 Z"
        fill="currentColor"
        opacity="0.7"
      />
    </svg>
  )
}

/** A soft hand-drawn heart outline. */
export function HeartDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 40 36" className={cn("text-navy-soft", className)} fill="none" aria-hidden="true">
      <path
        d="M20 33 C7 24 2 16 2 10.5 C2 5 6 2 10.5 2 C14 2 17.5 4.3 20 8.5 C22.5 4.3 26 2 29.5 2 C34 2 38 5 38 10.5 C38 16 33 24 20 33Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** A little squiggle / wavy underline used as an accent under headings. */
export function SquiggleDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 120 16" className={cn("text-brown", className)} fill="none" aria-hidden="true">
      <path
        d="M2 8c6-8 12-8 18 0s12 8 18 0 12-8 18 0 12 8 18 0 12-8 18 0 12 8 18 0"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Washi tape strip, rotated slightly, for pinning polaroids/cards to the page. */
export function WashiTape({
  className,
  rotate = -6,
}: DoodleProps & { rotate?: number }) {
  return (
    <span
      className={cn("tape rounded-[1px]", className)}
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden="true"
    />
  )
}

/** A simple push-pin circle used at the top of timeline nodes / gallery pins. */
export function PushPin({ className, color = "navy" }: DoodleProps & { color?: string }) {
  return (
    <span
      className={cn(
        "block w-3.5 h-3.5 rounded-full shadow-[0_2px_4px_rgba(29,53,87,0.35)] ring-2 ring-white/70",
        className
      )}
      style={{ backgroundColor: color }}
      aria-hidden="true"
    />
  )
}
