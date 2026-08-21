import { cn } from "@/lib/utils"

type SectionTitleProps = {
  label?: string
  title: string
  subtitle?: string
  align?: "left" | "center"
  tone?: "navy" | "cream"
}

export default function SectionTitle({
  label,
  title,
  subtitle,
  align = "center",
  tone = "navy",
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start"
  const titleColor = tone === "navy" ? "text-navy" : "text-cream"
  const labelColor = tone === "navy" ? "text-brown" : "text-baby-blue-light"
  const subtitleColor = tone === "navy" ? "text-muted" : "text-baby-blue-light/90"

  return (
    <div className={cn("flex flex-col gap-3 max-w-xl", alignClass, align === "center" && "mx-auto")}>
      {label && (
        <span
          className={cn(
            "font-body text-[0.7rem] uppercase tracking-[0.28em] font-medium",
            labelColor
          )}
        >
          {label}
        </span>
      )}
      <h2 className={cn("font-display text-3xl sm:text-4xl leading-tight", titleColor)}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("font-body text-sm sm:text-base leading-relaxed", subtitleColor)}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
