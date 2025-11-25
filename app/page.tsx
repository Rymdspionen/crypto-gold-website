
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import OpportunitySection from '@/components/sections/OpportunitySection'
import TechnologySection from '@/components/sections/TechnologySection'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <OpportunitySection />
      <TechnologySection />
      <ContactSection />
      <Footer />
    </main>
  )
}
