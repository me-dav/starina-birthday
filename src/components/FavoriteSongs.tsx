"use client"

import { useState } from "react"
import { songs } from "@/data/songs"
import { siteContent } from "@/data/site-content"
import SongCard from "./SongCard"
import ScrollReveal from "./ScrollReveal"

export default function FavoriteSongs() {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <section id="songs" className="relative bg-baby-blue-light/50 px-5 sm:px-8 py-20 sm:py-28">
      <div className="mx-auto max-w-[1000px] flex flex-col items-center gap-12">
        <ScrollReveal className="text-center flex flex-col items-center gap-3">
          <span className="font-body text-xs uppercase tracking-[0.3em] text-navy-soft">
            {siteContent.songs.label}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-navy">{siteContent.songs.title}</h2>
          <p className="font-body text-sm sm:text-base text-navy-soft/80 max-w-sm">
            {siteContent.songs.subtitle}
          </p>
        </ScrollReveal>

        {/* Mobile: horizontal snap-scroll carousel of poster cards */}
        <div className="w-full flex sm:hidden gap-4 overflow-x-auto snap-x snap-mandatory px-4 -mx-4 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {songs.map((song, i) => (
            <ScrollReveal key={song.id} delay={i * 0.06} className="shrink-0 w-[260px]">
              <SongCard
                song={song}
                isActive={activeId === song.id}
                onActivate={() => setActiveId(song.id)}
                onDeactivate={() => setActiveId((id) => (id === song.id ? null : id))}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Tablet/desktop: grid of poster cards */}
        <div className="w-full hidden sm:grid sm:grid-cols-1 gap-6 place-items-center">
          {songs.map((song, i) => (
            <ScrollReveal key={song.id} delay={i * 0.08}>
              <SongCard
                song={song}
                isActive={activeId === song.id}
                onActivate={() => setActiveId(song.id)}
                onDeactivate={() => setActiveId((id) => (id === song.id ? null : id))}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
