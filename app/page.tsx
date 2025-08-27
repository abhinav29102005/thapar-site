import { Navigation } from "@/components/navigation"
import CampusCarousel from "@/components/campus-carousel"
import NewsTicker from "@/components/news-ticker"
import { HeroSection } from "@/components/hero-section"
import { AcademicsSection } from "@/components/academics-section"
import { RankingsSection } from "@/components/rankings-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <Navigation />
      <CampusCarousel />
      <NewsTicker />
      <HeroSection />
      <AcademicsSection />
      <RankingsSection />
      <Footer />
    </main>
  )
}
