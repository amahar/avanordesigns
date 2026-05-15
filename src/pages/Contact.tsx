import Container from '@/components/ui/Container'
import { Reveal } from '@/components/ui'
import ContactSection from '@/sections/ContactSection'
import FAQSection from '@/sections/FAQSection'

export default function Contact() {
  return (
    <>
      {/* Page header */}
      <section className="pt-[140px] pb-6 max-md:pt-[110px]">
        <Container>
          <Reveal>
            <span className="inline-flex items-center gap-2.5 font-mono text-[11.5px] tracking-[0.12em] uppercase text-muted">
              <span className="accent-dot" />
              get in touch
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-serif text-[clamp(48px,6vw,88px)] leading-[0.96] tracking-[-0.025em] mt-4 max-w-[18ch] font-normal [text-wrap:balance]">
              Let's build something <em className="serif-em">worth</em> showing.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-[52ch] text-[18px] leading-[1.55] text-ink/70">
              Tell us about your business. We respond to every inquiry within one business day — no
              automations, no hand-offs, just a real reply.
            </p>
          </Reveal>
        </Container>
      </section>

      <ContactSection />
      <FAQSection />
    </>
  )
}
