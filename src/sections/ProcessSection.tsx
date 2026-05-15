import { useState, useEffect } from 'react'
import { STEPS } from '@/data/process'
import Container from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui'

export default function ProcessSection() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % STEPS.length), 4200)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="process" className="py-[110px] bg-ink text-paper max-md:py-20">
      <Container>
        <SectionHeader
          tag="how we work"
          title={
            <>
              Five steps. <em className="serif-em">Zero</em> mystery.
            </>
          }
          sub="A calm, transparent process you can actually follow along with — no agency theatre."
        />

        <div className="grid max-w-[880px]" style={{ gridTemplateColumns: '24px 1fr', gap: '32px' }}>
          {/* Rail */}
          <div className="relative">
            <div className="proc-rail-line" />
            <div
              className="proc-rail-fill"
              style={{ height: `${((active + 1) / STEPS.length) * 100}%` }}
            />
          </div>

          {/* Steps */}
          <ol className="list-none p-0 m-0 flex flex-col gap-1.5">
            {STEPS.map((step, i) => {
              const isActive = i === active
              const isDone = i < active
              return (
                <li
                  key={step.title}
                  className={`grid gap-6 py-5 rounded-2xl cursor-pointer transition-all duration-300 ${
                    isActive
                      ? 'opacity-100 bg-paper/[0.04]'
                      : isDone
                        ? 'opacity-75'
                        : 'opacity-55'
                  }`}
                  style={{
                    gridTemplateColumns: '24px 1fr',
                    marginLeft: '-56px',
                    paddingLeft: '56px',
                  }}
                  onMouseEnter={() => setActive(i)}
                >
                  {/* Step marker */}
                  <div
                    className={`w-6 h-6 rounded-full border inline-flex items-center justify-center shrink-0 mt-1 transition-all duration-300 ${
                      isActive ? 'scale-110' : ''
                    } ${!isActive && !isDone ? 'bg-ink border-paper/[0.14]' : ''}`}
                    style={
                      isActive
                        ? { background: 'var(--accent)', borderColor: 'var(--accent)' }
                        : isDone
                          ? {
                              background: 'color-mix(in srgb, var(--accent) 30%, var(--ink))',
                              borderColor: 'color-mix(in srgb, var(--accent) 40%, transparent)',
                            }
                          : {}
                    }
                  >
                    <span
                      className={`font-mono text-[9.5px] ${
                        isActive ? 'text-ink' : 'text-paper/60'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Step content */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-baseline gap-4 max-sm:flex-col max-sm:gap-1">
                      <h3 className="font-serif text-[32px] leading-none tracking-[-0.02em] font-normal m-0 text-paper max-sm:text-[26px]">
                        {step.title}
                      </h3>
                      <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-paper/50">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-[15px] text-paper/75 max-w-[56ch] m-0 leading-[1.55]">
                      {step.description}
                    </p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </Container>
    </section>
  )
}
