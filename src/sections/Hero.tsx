import { scrollToId } from '@/lib/utils'
import { Reveal, Button, IconArrow, IconCheck } from '@/components/ui'
import Container from '@/components/ui/Container'

const TRUST = [
  { label: 'Mobile-Friendly', sub: '100% responsive' },
  { label: 'Fast Launch', sub: 'in 2–4 weeks' },
  { label: 'Modern Design', sub: 'built bespoke' },
  { label: 'Small-Business Focused', sub: 'no agency bloat' },
]

export default function Hero() {
  return (
    <section className="relative pt-[140px] pb-[60px] overflow-hidden isolate max-md:pt-[110px] max-md:pb-10">
      {/* Glow — uses CSS var(--accent) so it updates with the theme switcher */}
      <div
        className="absolute pointer-events-none z-0"
        style={{
          inset: '-10% -10% auto -10%',
          height: '80%',
          background:
            'radial-gradient(ellipse 60% 50% at 30% 30%, color-mix(in srgb, var(--accent) 14%, transparent), transparent 70%), radial-gradient(ellipse 50% 50% at 80% 20%, color-mix(in srgb, var(--accent) 8%, transparent), transparent 70%)',
        }}
        aria-hidden
      />
      {/* Grain */}
      <div className="hero-grain z-0" aria-hidden />

      <Container className="relative z-10">
        <Reveal>
          <span className="inline-flex items-center gap-2.5 font-mono text-[11.5px] tracking-[0.12em] uppercase text-muted">
            <span className="accent-dot" />
            Avanor Designs · est. 2021 · independent studio
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="font-serif text-[clamp(48px,7.2vw,104px)] leading-[0.96] tracking-[-0.025em] mt-4 max-w-[16ch] font-normal [text-wrap:balance] max-md:text-[clamp(40px,11vw,56px)]">
            Your business{' '}
            <em className="serif-em">deserves</em> a website that looks as good as the work you do.
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-5 max-w-[58ch] text-[clamp(16px,1.3vw,19px)] leading-[1.55] text-ink/70">
            Avanor Designs creates modern websites, landing pages, and digital experiences for small
            businesses ready to grow online.
          </p>
        </Reveal>

        <Reveal delay={240} className="flex flex-wrap gap-3 mt-8">
          <Button size="lg" onClick={() => scrollToId('contact')}>
            Get a Free Website Review <IconArrow width={16} height={16} />
          </Button>
          <Button size="lg" variant="ghost" onClick={() => scrollToId('services')}>
            View Services
          </Button>
        </Reveal>

        {/* Trust indicators */}
        <Reveal
          delay={340}
          className="grid grid-cols-4 gap-3.5 mt-14 pt-7 border-t border-[rgba(11,18,32,0.1)] max-md:grid-cols-2"
        >
          {TRUST.map(({ label, sub }) => (
            <div key={label} className="flex gap-2.5 items-start text-muted">
              <IconCheck
                width={14}
                height={14}
                className="text-accent mt-[3px] shrink-0"
              />
              <div>
                <div className="text-[14px] font-medium text-ink tracking-[-0.005em]">{label}</div>
                <div className="text-[12.5px] text-muted">{sub}</div>
              </div>
            </div>
          ))}
        </Reveal>

        {/* Hero mock */}
        <Reveal delay={420} className="mt-20 flex justify-center">
          <HeroMock />
        </Reveal>
      </Container>
    </section>
  )
}

function HeroMock() {
  return (
    <div className="relative w-full max-w-[1080px]" style={{ aspectRatio: '16 / 9.3' }}>
      {/* Browser window */}
      <div
        className="absolute inset-0 bg-white rounded-brand shadow-s3 overflow-hidden flex flex-col border border-[rgba(11,18,32,0.08)]"
        style={{ transform: 'rotateX(4deg) translateZ(0)', transformOrigin: '50% 60%', perspective: '1800px' }}
      >
        {/* Browser bar */}
        <div className="flex items-center gap-2 px-3.5 py-3 border-b border-[rgba(11,18,32,0.1)] bg-gradient-to-b from-[#fafaf7] to-[#f4f2ec]">
          <span className="w-[11px] h-[11px] rounded-full bg-[#ff5f57]" />
          <span className="w-[11px] h-[11px] rounded-full bg-[#ffbd2e]" />
          <span className="w-[11px] h-[11px] rounded-full bg-[#28c93f]" />
          <div className="ml-3 px-3.5 py-[5px] bg-paper-2 rounded-lg font-mono text-[11.5px] text-muted">
            avanor.studio/preview/ridgeline-coffee
          </div>
        </div>

        {/* Browser content */}
        <div className="flex-1 grid grid-cols-[1.1fr_1fr] gap-9 p-[38px_44px] items-center max-sm:grid-cols-1 max-sm:p-6 max-sm:gap-5">
          <div className="flex flex-col gap-3.5">
            <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted">
              — Ridgeline Coffee Co.
            </div>
            <div className="font-serif text-[38px] leading-[1.02] tracking-[-0.02em] font-normal max-sm:text-[24px]">
              Slow-roasted in{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--accent-deep)' }}>Portland</span>,
              since 2014.
            </div>
            <div className="text-[13.5px] text-muted max-w-[36ch]">
              Single-origin beans, hand-poured for the people who care how their morning starts.
            </div>
            <div className="flex gap-2 mt-1.5">
              <span className="inline-flex px-3.5 py-2 rounded-full text-[12.5px] font-medium bg-ink text-paper">
                Order beans
              </span>
              <span className="inline-flex px-3.5 py-2 rounded-full text-[12.5px] font-medium border border-[rgba(11,18,32,0.18)] text-ink">
                Visit shop ↗
              </span>
            </div>
            <div className="flex gap-2 text-[11.5px] text-muted-2 items-center mt-1">
              <span>★ 4.9 · 480 reviews</span>
              <span>·</span>
              <span>Open today · 7a–4p</span>
            </div>
          </div>

          <div
            className="grid gap-2.5 h-full max-sm:min-h-[200px]"
            style={{
              gridTemplateColumns: 'repeat(6, 1fr)',
              gridTemplateRows: 'repeat(6, 1fr)',
              minHeight: '280px',
            }}
          >
            <MockImage
              style={{
                gridColumn: '1 / 5',
                gridRow: '1 / 5',
                background: 'linear-gradient(135deg, #2a3a52, #0b1220)',
              }}
              label="product shot"
              dark
            />
            <MockImage
              style={{
                gridColumn: '5 / 7',
                gridRow: '1 / 4',
                background: 'linear-gradient(135deg, var(--accent-soft), #ffffff)',
              }}
              label="cafe interior"
            />
            <MockImage
              style={{ gridColumn: '5 / 7', gridRow: '4 / 7' }}
              label="brew guide"
            />
          </div>
        </div>
      </div>

      {/* Phone mockup */}
      <div
        className="absolute right-[-10px] bottom-[-50px] w-[200px] h-[410px] rounded-[36px] bg-ink p-2 shadow-s3 max-sm:hidden"
        style={{ transform: 'rotate(-3deg)', boxShadow: 'var(--shadow-3), 0 0 0 1px rgba(11,18,32,0.4)' }}
      >
        <div
          className="absolute top-3.5 left-1/2 -translate-x-1/2 w-[60px] h-4 bg-black rounded-full z-10"
        />
        <div className="w-full h-full bg-paper rounded-[30px] pt-6 px-3.5 pb-3.5 flex flex-col gap-2.5">
          <div className="flex justify-between font-mono text-[11px] text-muted px-1">
            <span>9:41</span>
            <span className="flex gap-[3px] items-center">
              {[0, 1, 2].map((i) => (
                <span key={i} className="w-1 h-1 rounded-full bg-muted block" />
              ))}
            </span>
          </div>
          <div className="flex-1 flex flex-col gap-2.5">
            <div className="font-mono text-[9.5px] tracking-[0.1em] uppercase text-muted">
              Bloom Studio
            </div>
            <div className="font-serif text-[22px] leading-[1.05] tracking-[-0.015em] text-ink">
              Book your visit
            </div>
            <div
              className="flex-1 min-h-[90px] rounded-xl flex items-end p-2"
              style={{ background: 'linear-gradient(135deg, var(--accent-soft), var(--paper-2))' }}
            >
              <span className="font-mono text-[9px] text-muted uppercase tracking-[0.08em]">
                hero image
              </span>
            </div>
            <div className="flex gap-1.5">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((d, i) => (
                <span
                  key={d}
                  className={`flex-1 text-center font-mono text-[10px] py-1.5 border rounded-lg ${
                    i === 2
                      ? 'bg-ink text-paper border-ink'
                      : 'border-[rgba(11,18,32,0.1)] text-muted'
                  }`}
                >
                  {d}
                </span>
              ))}
            </div>
            <div className="bg-ink text-paper text-center text-[11px] font-medium py-2.5 rounded-full">
              Continue
            </div>
          </div>
        </div>
      </div>

      {/* Floating tags */}
      <div
        className="absolute top-[12%] left-[-32px] bg-white rounded-[14px] px-4 py-3 flex items-center gap-3 text-[12px] shadow-s2 border border-[rgba(11,18,32,0.08)] max-sm:hidden"
        style={{ animation: 'floatY 4s ease-in-out infinite' }}
      >
        <span className="accent-dot" />
        <div>
          <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-muted">
            Lighthouse
          </div>
          <div className="font-serif text-[18px] tracking-[-0.01em] text-ink">99 / 100</div>
        </div>
      </div>
      <div
        className="absolute bottom-[32%] left-[-10px] bg-white rounded-[14px] px-4 py-3 flex items-center gap-3 text-[12px] shadow-s2 border border-[rgba(11,18,32,0.08)] max-sm:hidden"
        style={{ animation: 'floatY 4s ease-in-out -2s infinite' }}
      >
        <span
          className="w-2 h-2 rounded-full bg-ink shrink-0"
          style={{ boxShadow: '0 0 0 4px rgba(11,18,32,0.12)' }}
        />
        <div>
          <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-muted">
            Launched in
          </div>
          <div className="font-serif text-[18px] tracking-[-0.01em] text-ink">18 days</div>
        </div>
      </div>
    </div>
  )
}

function MockImage({
  style,
  label,
  dark,
}: {
  style: React.CSSProperties
  label: string
  dark?: boolean
}) {
  return (
    <div
      className="rounded-[14px] relative overflow-hidden flex items-end p-3"
      style={{
        background: 'linear-gradient(135deg, var(--paper-2), var(--paper-3))',
        ...style,
      }}
    >
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(11,18,32,0.04) 8px, rgba(11,18,32,0.04) 9px)',
        }}
      />
      <span
        className={`relative font-mono text-[10.5px] uppercase tracking-[0.08em] ${
          dark ? 'text-paper/60' : 'text-muted'
        }`}
      >
        {label}
      </span>
    </div>
  )
}
