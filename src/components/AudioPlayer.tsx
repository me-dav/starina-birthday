"use client"

import { useEffect, useRef, useState } from "react"
import { Play, Pause, Music2 } from "lucide-react"
import { formatTime } from "@/lib/utils"

type AudioPlayerProps = {
  src?: string
  isActive: boolean
  onPlay: () => void
  onPause: () => void
}

/**
 * Poster-style audio player (progress bar on top, big centered play/pause below)
 * — modeled after an iPhone "Now Playing" widget.
 */
export default function AudioPlayer({ src, isActive, onPlay, onPause }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [hasError, setHasError] = useState(false)

  // Pause this player whenever another song becomes active.
  useEffect(() => {
    if (!isActive && audioRef.current) {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }, [isActive])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onTimeUpdate = () => setCurrentTime(audio.currentTime)
    const onLoadedMetadata = () => setDuration(audio.duration || 0)
    const onEnded = () => setIsPlaying(false)
    const onErrorEvent = () => setHasError(true)

    audio.addEventListener("timeupdate", onTimeUpdate)
    audio.addEventListener("loadedmetadata", onLoadedMetadata)
    audio.addEventListener("ended", onEnded)
    audio.addEventListener("error", onErrorEvent)

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate)
      audio.removeEventListener("loadedmetadata", onLoadedMetadata)
      audio.removeEventListener("ended", onEnded)
      audio.removeEventListener("error", onErrorEvent)
    }
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio || hasError || !src) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
      onPause()
    } else {
      onPlay()
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setHasError(true))
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current
    if (!audio || !duration) return
    const newTime = (Number(e.target.value) / 100) * duration
    audio.currentTime = newTime
    setCurrentTime(newTime)
  }

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0

  if (!src || hasError) {
    return (
      <div className="flex items-center justify-center gap-2 text-muted font-body text-xs py-2">
        <Music2 size={14} />
        <span>Audio belum tersedia — TODO: tambahkan file lagu</span>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-3 w-full">
      <audio ref={audioRef} src={src} preload="metadata" />

      <div className="flex flex-col gap-1.5">
        <input
          type="range"
          min={0}
          max={100}
          value={progress}
          onChange={handleSeek}
          aria-label="Progress lagu"
          className="w-full h-1.5 accent-navy cursor-pointer rounded-full"
          style={{
            background: `linear-gradient(to right, var(--color-navy) ${progress}%, var(--color-cream-dark) ${progress}%)`,
          }}
        />
        <div className="flex justify-between font-body text-[11px] text-muted tabular-nums">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <button
        type="button"
        onClick={togglePlay}
        aria-label={isPlaying ? "Jeda lagu" : "Putar lagu"}
        className="self-center w-14 h-14 rounded-full bg-navy text-cream flex items-center justify-center hover:bg-navy-soft active:scale-95 transition-all shadow-[var(--shadow-soft)] focus-visible:outline-2 focus-visible:outline-navy focus-visible:outline-offset-2"
      >
        {isPlaying ? <Pause size={22} /> : <Play size={22} className="ml-0.5" />}
      </button>
    </div>
  )
}
