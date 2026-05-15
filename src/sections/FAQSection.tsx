import { useState } from 'react'
import { FAQS } from '@/data/faq'
import Container from '@/components/ui/Container'
import { Reveal, SectionHeader, IconPlus, IconMinus } from '@/components/ui'

export default function FAQSection() {
  const [open, setOpen] = useState<number>(0)

  return (
    <section id="faq" className="py-[110px] bg-paper max-md:py-20">
      <Container>
        <SectionHeader
          tag="questions"
          title={
            <>
              Things small business owners{' '}
              <em className="serif-em">actually</em> ask.
            </>
          }
        />

        <div
          className="flex flex-col"
          style={{ borderTop: '1px solid var(--hair)' }}
        >
          {FAQS.map((faq, i) => (
            <Reveal
              key={faq.q}
              delay={i * 40}
              className={`border-b transition-colors duration-300 ${
                open === i ? 'bg-white/50' : ''
              }`}
              style={{ borderColor: 'var(--hair)' }}
            >
              <button
                className="w-full bg-transparent border-0 px-2 py-6 flex items-center gap-6 text-left text-ink font-serif text-[22px] tracking-[-0.012em] leading-[1.2] font-normal max-md:text-[18px] max-md:py-[22px]"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <span className="font-mono text-[11px] tracking-[0.08em] text-muted-2 min-w-[36px]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="flex-1 [text-wrap:pretty]">{faq.q}</span>
                <span
                  className="text-muted transition-colors duration-300 shrink-0"
                  style={{ color: open === i ? 'var(--accent-deep)' : undefined }}
                >
                  {open === i ? (
                    <IconMinus width={18} height={18} />
                  ) : (
                    <IconPlus width={18} height={18} />
                  )}
                </span>
              </button>

              <div
                className={`faq-grid-row ${open === i ? 'open' : ''}`}
              >
                <p
                  className="overflow-hidden text-[15.5px] text-muted leading-[1.6] m-0 max-w-[64ch]"
                  style={{
                    padding: open === i ? '0 8px 26px 68px' : '0 8px 0 68px',
                    transition: 'padding 0.4s ease',
                  }}
                >
                  {faq.a}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
