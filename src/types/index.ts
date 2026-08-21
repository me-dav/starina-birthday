export type Memory = {
  id: string
  image: string
  alt: string
  title?: string
  caption?: string
  date?: string
  location?: string
  rotation?: number
  pinColor?: "blue" | "navy" | "cream" | "brown"
}

export type Song = {
  id: string
  title: string
  artist: string
  cover: string
  audio?: string
  description?: string
}

export type TimelineItem = {
  date: string
  title: string
  description: string
}
