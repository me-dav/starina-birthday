export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ")
}

/** Format seconds (e.g. 83.2) into m:ss, e.g. "1:23". Returns "0:00" for invalid input. */
export function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00"
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, "0")}`
}

export const pinColorMap: Record<string, string> = {
  navy: "bg-[var(--color-navy)]",
  blue: "bg-[var(--color-baby-blue)]",
  cream: "bg-[var(--color-cream-dark)]",
  brown: "bg-[var(--color-brown)]",
}
