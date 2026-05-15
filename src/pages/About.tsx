import Container from '@/components/ui/Container'
import { Reveal, SectionHeader } from '@/components/ui'
import ProcessSection from '@/sections/ProcessSection'
import Testimonial from '@/sections/Testimonial'
import ContactSection from '@/sections/ContactSection'

const VALUES = [
  {
    num: '01',
    title: 'Small on purpose.',
    body: "We don't want to be a 40-person agency. We want to be the best version of a two-person studio — close to every client, obsessive about every detail.",
  },
  {
    num: '02',
    title: 'Honest before impressive.',
    body: "We'll tell you when a project is too big, when your idea needs more time, or when a simpler approach will serve you better. Trust is more valuable than a flashy proposal.",
  },
  {
    num: '03',
    title: 'Craft over quantity.',
    body: "We take on 12–16 projects a year. That's intentional. Each one gets real time, real attention, and a real human who cares about the outcome.",
  },
  {
    num: '04',
    title: 'Built to last.',
    body: "We build fast sites with clean code that you can maintain, update, and grow without depending on us indefinitely. Your site should work for you long after launch.",
  },
]

const STATS = [
  { num: '60+', label: 'Sites launched' },
  { num: '4.9', label: 'Average client rating' },
  { num: '2–4', label: 'Weeks to launch' },
  { num: '100%', label: 'On-time delivery' },
]

export default function About() {
  return (
    <>
      {/* Header */}
      <section className="pt-[140px] pb-20 max-md:pt-[110px]">
        <Container>
          <Reveal>
            <span className="inline-flex items-center gap-2.5 font-mono text-[11.5px] tracking-[0.12em] uppercase text-muted">
              <span className="accent-dot" />
              about the studio
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-serif text-[clamp(48px,6vw,88px)] leading-[0.96] tracking-[-0.025em] mt-4 max-w-[18ch] font-normal [text-wrap:balance]">
              A small studio. <em className="serif-em">Unreasonably</em> particular about good work.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-[56ch] text-[18px] leading-[1.6] text-ink/70">
              Avanor Designs is an independent web design studio based in Portland, Oregon. We
              started in 2021 with one goal: help small businesses get online with sites that feel
              as considered and crafted as the businesses themselves.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Stats */}
      <section className="pb-20">
        <Container>
          <div
            className="grid grid-cols-4 max-sm:grid-cols-2 gap-0"
            style={{ borderTop: '1px solid var(--hair)', borderLeft: '1px solid var(--hair)' }}
          >
            {STATS.map((stat) => (
              <Reveal
                key={stat.num}
                className="py-8 px-6 border-r border-b"
                style={{ borderColor: 'var(--hair)' }}
              >
                <div className="font-serif text-[52px] leading-none tracking-[-0.03em] font-normal text-ink">
                  {stat.num}
                </div>
                <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-muted mt-2">
                  {stat.label}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="pb-[110px]">
        <Container>
          <SectionHeader
            tag="what we believe"
            title={
              <>
                A few things we <em className="serif-em">won't</em> compromise on.
              </>
            }
          />
          <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
            {VALUES.map((v, i) => (
              <Reveal
                key={v.num}
                delay={i * 70}
                className="bg-white border border-[rgba(11,18,32,0.1)] rounded-brand p-8 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-s2 transition-all duration-300"
              >
                <div className="font-mono text-[11px] tracking-[0.08em] text-muted-2">
                  {v.num}
                </div>
                <h3 className="font-serif text-[28px] leading-[1.1] tracking-[-0.015em] font-normal m-0">
                  {v.title}
                </h3>
                <p className="text-[15px] text-muted leading-[1.6] m-0">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ProcessSection />
      <Testimonial />
      <ContactSection />
    </>
  )
}
