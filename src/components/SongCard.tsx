"use client"

import Image from "next/image"
import { Music4 } from "lucide-react"
import type { Song } from "@/types"
import AudioPlayer from "./AudioPlayer"
import { cn } from "@/lib/utils"

type SongCardProps = {
  song: Song
  isActive: boolean
  onActivate: () => void
  onDeactivate: () => void
}

/**
 * Portrait "poster" song card, modeled after an iPhone Now Playing widget:
 * big square cover art, title, artist, progress bar, and a centered play/pause button.
 */
export default function SongCard({ song, isActive, onActivate, onDeactivate }: SongCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 w-full max-w-[260px] mx-auto rounded-[28px] bg-white p-4 shadow-[var(--shadow-soft)] transition-shadow shrink-0 snap-center",
        isActive && "ring-1 ring-baby-blue"
      )}
    >
      <div className="relative w-full aspect-square overflow-hidden rounded-2xl bg-cream-dark shadow-inner">
        <Image
          src={song.cover}
          alt={`Cover lagu ${song.title} oleh ${song.artist}`}
          fill
          sizes="260px"
          className="object-cover"
        />
        <span className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-navy/70 backdrop-blur-sm flex items-center justify-center text-cream">
          <Music4 size={12} />
        </span>
      </div>

      <div className="flex flex-col gap-0.5 text-center px-1">
        <h3 className="font-display text-lg text-navy leading-snug truncate">{song.title}</h3>
        <p className="font-body text-xs text-muted truncate">{song.artist}</p>
        {song.description && (
          <p className="font-body text-[11px] text-muted/80 italic mt-1 line-clamp-2">
            {song.description}
          </p>
        )}
      </div>

      <AudioPlayer
        src={song.audio}
        isActive={isActive}
        onPlay={onActivate}
        onPause={onDeactivate}
      />
    </div>
  )
}
