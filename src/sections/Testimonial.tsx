import { Reveal } from '@/components/ui'
import Container from '@/components/ui/Container'

export default function Testimonial() {
  return (
    <section
      className="py-20 bg-paper"
      aria-label="Customer testimonial"
    >
      <Container>
        <div className="flex flex-col gap-8 items-center text-center">
          <Reveal className="relative font-serif text-[clamp(28px,3.6vw,44px)] leading-[1.18] tracking-[-0.018em] max-w-[24ch] [text-wrap:balance] font-normal overflow-visible">
            {/* U+201C — proper open curly double quote, matches the original visual */}
            <span
              className="absolute font-serif text-[80px] leading-none text-accent max-sm:text-[60px]"
              style={{ left: '-40px', top: '-20px' }}
              aria-hidden
            >
              &#8220;
            </span>
            Our new site finally looks like the shop people walk into. Bookings doubled in the first
            month — and I can actually{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent-deep)' }}>edit</em> it myself.
          </Reveal>
          <Reveal delay={120} className="inline-flex items-center gap-3.5">
            <div
              className="w-[42px] h-[42px] rounded-full bg-ink text-paper inline-flex items-center justify-center font-mono text-[12px] tracking-[0.05em]"
              aria-hidden
            >
              JR
            </div>
            <div className="text-left">
              <div className="font-medium text-[14px]">Jules Reyes</div>
              <div className="text-[13px] text-muted">Owner, Bloom Studio · Brooklyn, NY</div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
