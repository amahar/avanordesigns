import { PROJECTS, COLOR_MAP } from '@/data/portfolio'
import Container from '@/components/ui/Container'
import { Reveal, SectionHeader, IconArrowUR } from '@/components/ui'

export default function PortfolioSection() {
  return (
    <section id="work" className="py-[110px] bg-paper max-md:py-20">
      <Container>
        <SectionHeader
          tag="selected work"
          title={
            <>
              Real sites for <em className="serif-em">real</em> small businesses.
            </>
          }
          sub="A taste of recent launches — each one built custom, shipped on time."
        />

        <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.name} delay={i * 70} className="flex flex-col gap-3.5 cursor-pointer group">
              {/* Thumbnail */}
              <div
                className="relative rounded-brand overflow-hidden border border-[rgba(11,18,32,0.08)] transition-all duration-400 group-hover:-translate-y-1 group-hover:shadow-s2"
                style={{ aspectRatio: '4/3', background: COLOR_MAP[project.color] }}
              >
                {/* Mini browser mock */}
                <div className="absolute inset-4 bg-white rounded-xl shadow-[0_8px_20px_-10px_rgba(11,18,32,0.2)] flex flex-col overflow-hidden transition-transform duration-500 group-hover:scale-[1.03]">
                  <div className="px-2.5 py-2 border-b border-[rgba(11,18,32,0.08)] flex gap-1">
                    {[0, 1, 2].map((j) => (
                      <span
                        key={j}
                        className="w-1.5 h-1.5 rounded-full bg-paper-3 block"
                      />
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

                {/* Hover overlay */}
                <div className="absolute left-4 bottom-4 px-3.5 py-2.5 bg-paper rounded-full text-[13px] font-medium inline-flex items-center gap-1.5 shadow-s2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  View case study <IconArrowUR width={16} height={16} />
                </div>
              </div>

              {/* Meta */}
              <div className="flex justify-between items-baseline gap-3 px-1">
                <div className="font-serif text-[22px] leading-[1.1] tracking-[-0.015em] font-normal">
                  {project.name}
                </div>
                <div className="font-mono text-[11px] tracking-[0.06em] text-muted text-right shrink-0">
                  {project.tag} · {project.year}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
