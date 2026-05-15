import Hero from '@/sections/Hero'
import LogoStrip from '@/sections/LogoStrip'
import ServicesSection from '@/sections/ServicesSection'
import WhoWeHelp from '@/sections/WhoWeHelp'
import ProcessSection from '@/sections/ProcessSection'
import PricingSection from '@/sections/PricingSection'
import PortfolioSection from '@/sections/PortfolioSection'
import Testimonial from '@/sections/Testimonial'
import FAQSection from '@/sections/FAQSection'
import ContactSection from '@/sections/ContactSection'

export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <ServicesSection />
      <WhoWeHelp />
      <ProcessSection />
      <PricingSection />
      <PortfolioSection />
      <Testimonial />
      <FAQSection />
      <ContactSection />
    </>
  )
}
