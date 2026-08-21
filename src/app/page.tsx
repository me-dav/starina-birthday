import Navigation from "@/components/Navigation"
import BirthdayHero from "@/components/BirthdayHero"
import BirthdayLetter, { IntroMessage } from "@/components/BirthdayLetter"
import Timeline from "@/components/Timeline"
import MemoryGallery from "@/components/MemoryGallery"
import FavoriteSongs from "@/components/FavoriteSongs"
import DinnerInvitation from "@/components/DinnerInvitation"
import ClosingMessage from "@/components/ClosingMessage"

export default function Home() {
  return (
    <>
      {/* <Navigation /> */}
      <main className="flex-1">
        <BirthdayHero />
        {/* <FavoriteSongs />
        <IntroMessage />
        <Timeline />
        <MemoryGallery />
        <BirthdayLetter /> */}
        <DinnerInvitation />
      </main>
      <ClosingMessage />
    </>
  )
}
