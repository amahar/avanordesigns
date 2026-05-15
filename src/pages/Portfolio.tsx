import { useState } from 'react'
import { PROJECTS, PROJECT_CATEGORIES, COLOR_MAP } from '@/data/portfolio'
import Container from '@/components/ui/Container'
import { Reveal, IconArrowUR } from '@/components/ui'
import ContactSection from '@/sections/ContactSection'

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory)

  return (
    <>
      {/* Page header */}
      <section className="pt-[140px] pb-16 max-md:pt-[110px]">
        <Container>
          <Reveal>
            <span className="inline-flex items-center gap-2.5 font-mono text-[11.5px] tracking-[0.12em] uppercase text-muted">
              <span className="accent-dot" />
              selected work
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-serif text-[clamp(48px,6vw,88px)] leading-[0.96] tracking-[-0.025em] mt-4 max-w-[18ch] font-normal [text-wrap:balance]">
              Real sites for <em className="serif-em">real</em> businesses.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-[52ch] text-[18px] leading-[1.55] text-ink/70">
              Every project is different. Every client is a real person with a real business. Here's
              a selection of recent work.
            </p>
          </Reveal>

          {/* Category filter */}
          <Reveal delay={240} className="flex flex-wrap gap-2 mt-10">
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-[13px] font-medium border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-ink text-paper border-ink'
                    : 'bg-transparent text-ink border-[rgba(11,18,32,0.18)] hover:bg-paper-2 hover:border-ink'
                }`}
              >
                {cat}
              </button>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Grid */}
      <section className="pb-[110px]">
        <Container>
          <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {filtered.map((project, i) => (
              <Reveal key={project.name} delay={i * 70} className="flex flex-col gap-4 cursor-pointer group">
                {/* Thumbnail */}
                <div
                  className="relative rounded-brand overflow-hidden border border-[rgba(11,18,32,0.08)] transition-all duration-400 group-hover:-translate-y-1 group-hover:shadow-s2"
                  style={{ aspectRatio: '4/3', background: COLOR_MAP[project.color] }}
                >
                  <div className="absolute inset-4 bg-white rounded-xl shadow-[0_8px_20px_-10px_rgba(11,18,32,0.2)] flex flex-col overflow-hidden transition-transform duration-500 group-hover:scale-[1.03]">
                    <div className="px-2.5 py-2 border-b border-[rgba(11,18,32,0.08)] flex gap-1">
                      {[0, 1, 2].map((j) => (
                        <span key={j} className="w-1.5 h-1.5 rounded-full bg-paper-3 block" />
                      ))}
                    </div>
                    <div className="p-4 flex flex-col gap-2 flex-1">
                      <div className="font-mono text-[9px] tracking-[0.1em] uppercase text-muted">
                        — {project.name}
                      </div>
                      <div className="font-serif text-[22px] leading-none tracking-[-0.015em] text-ink">
                        {project.name.split(' ')[0]}
                        <span className="text-accent">.</span>
                      </div>
                      <div className="bg-paper-2 rounded-md flex-[2]" />
                      <div className="bg-paper-2 rounded-md flex-1 max-w-[70%]" />
                    </div>
                  </div>
                  <div className="absolute left-4 bottom-4 px-3.5 py-2.5 bg-paper rounded-full text-[13px] font-medium inline-flex items-center gap-1.5 shadow-s2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    View case study <IconArrowUR width={16} height={16} />
                  </div>
                </div>

                {/* Meta */}
                <div>
                  <div className="font-serif text-[22px] leading-[1.1] tracking-[-0.015em] font-normal">
                    {project.name}
                  </div>
                  <div className="font-mono text-[11px] tracking-[0.06em] text-muted mt-1">
                    {project.tag} · {project.year}
                  </div>
                  <p className="text-[14px] text-muted leading-[1.6] mt-2 m-0">
                    {project.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ContactSection />
    </>
  )
}
