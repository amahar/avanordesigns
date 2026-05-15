import Container from '@/components/ui/Container'
import { Reveal } from '@/components/ui'
import PricingSection from '@/sections/PricingSection'
import FAQSection from '@/sections/FAQSection'
import ContactSection from '@/sections/ContactSection'

const ADDONS = [
  { name: 'Copywriting', price: 'from $600', desc: 'Full page copy written by a trusted writer-partner. Structured, on-brand, and conversion-focused.' },
  { name: 'Brand Identity', price: 'from $900', desc: 'Logo, type, color, and usage guidelines — enough to build a site and launch confidently.' },
  { name: 'Photography Direction', price: 'from $400', desc: 'Art direction brief and shot list so your photographer captures exactly what the site needs.' },
  { name: 'SEO Foundations', price: '$350', desc: 'Keyword research, on-page optimization, Google Search Console setup, and a 30-day ranking baseline.' },
  { name: 'Maintenance Plan', price: '$240/mo', desc: 'Monthly updates, edits, uptime monitoring, and quarterly performance tune-ups.' },
]

export default function Pricing() {
  return (
    <>
      {/* Page header */}
      <section className="pt-[140px] pb-10 max-md:pt-[110px]">
        <Container>
          <Reveal>
            <span className="inline-flex items-center gap-2.5 font-mono text-[11.5px] tracking-[0.12em] uppercase text-muted">
              <span className="accent-dot" />
              pricing
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-serif text-[clamp(48px,6vw,88px)] leading-[0.96] tracking-[-0.025em] mt-4 max-w-[18ch] font-normal [text-wrap:balance]">
              Flat-rate packages. <em className="serif-em">No</em> surprises.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-[52ch] text-[18px] leading-[1.55] text-ink/70">
              Every project is scoped and quoted up front. You know the number before you sign
              anything.
            </p>
          </Reveal>
        </Container>
      </section>

      <PricingSection showFootnote={false} />

      {/* Add-ons */}
      <section className="pb-[110px]">
        <Container>
          <div className="mb-12">
            <Reveal>
              <span className="inline-flex items-center gap-2.5 font-mono text-[11.5px] tracking-[0.12em] uppercase text-muted">
                <span className="accent-dot" />
                add-ons
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-serif text-[clamp(32px,4vw,52px)] leading-[1.05] tracking-[-0.02em] mt-3 font-normal [text-wrap:balance]">
                Everything else, <em className="serif-em">à la carte</em>.
              </h2>
            </Reveal>
          </div>

          <div
            className="flex flex-col"
            style={{ borderTop: '1px solid var(--hair)' }}
          >
            {ADDONS.map((item, i) => (
              <Reveal
                key={item.name}
                delay={i * 50}
                className="grid grid-cols-[1fr_auto] gap-6 py-6 border-b items-start max-sm:grid-cols-1"
                style={{ borderColor: 'var(--hair)' }}
              >
                <div>
                  <h3 className="font-serif text-[24px] leading-[1.1] tracking-[-0.015em] font-normal m-0 mb-1.5">
                    {item.name}
                  </h3>
                  <p className="text-[15px] text-muted m-0 leading-[1.6] max-w-[56ch]">
                    {item.desc}
                  </p>
                </div>
                <div className="font-serif text-[28px] tracking-[-0.02em] text-ink whitespace-nowrap">
                  {item.price}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <FAQSection />
      <ContactSection />
    </>
  )
}
