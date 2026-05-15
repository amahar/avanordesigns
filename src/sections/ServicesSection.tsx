import { useNavigate } from 'react-router-dom'
import { SERVICES } from '@/data/services'
import Container from '@/components/ui/Container'
import { Reveal, SectionHeader, IconCheck, IconArrowUR, IconArrow, IconSpark } from '@/components/ui'
import {
  IconMonitor, IconRefresh, IconTarget, IconWrench, IconPhone,
} from '@/components/ui/Icons'
import type { ServiceIcon } from '@/data/services'

const ICON_MAP: Record<ServiceIcon, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  monitor: IconMonitor,
  refresh: IconRefresh,
  target: IconTarget,
  wrench: IconWrench,
  phone: IconPhone,
}

export default function ServicesSection() {
  const navigate = useNavigate()

  return (
    <section id="services" className="py-[110px] bg-paper max-md:py-20">
      <Container>
        <SectionHeader
          tag="what we do"
          title={
            <>
              A small studio. <em className="serif-em">Sharp</em> output.
            </>
          }
          sub="Five focused services, each built for small businesses who need to look bigger than they are."
        />

        <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {SERVICES.map((svc, i) => {
            const ServiceIcon = ICON_MAP[svc.icon]
            return (
              <Reveal
                key={svc.title}
                delay={i * 60}
                className="relative bg-white border border-[rgba(11,18,32,0.1)] rounded-brand p-7 flex flex-col gap-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-s2 hover:border-[rgba(11,18,32,0.18)] group"
              >
                <div className="font-mono text-[11px] tracking-[0.08em] text-muted-2 absolute top-[22px] right-[26px]">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div
                  className="w-11 h-11 rounded-xl inline-flex items-center justify-center border"
                  style={{
                    background: 'color-mix(in srgb, var(--accent) 12%, var(--paper))',
                    color: 'var(--accent-deep)',
                    borderColor: 'color-mix(in srgb, var(--accent) 18%, transparent)',
                  }}
                >
                  <ServiceIcon width={22} height={22} />
                </div>
                <h3 className="font-serif text-[26px] leading-[1.1] tracking-[-0.015em] font-normal m-0">
                  {svc.title}
                </h3>
                <p className="text-[14.5px] text-muted leading-[1.55] m-0 flex-1">{svc.body}</p>
                <ul className="list-none p-0 m-0 flex flex-col gap-2">
                  {svc.points.map((pt) => (
                    <li key={pt} className="flex gap-2 items-start text-[13.5px] text-ink">
                      <IconCheck
                        width={13}
                        height={13}
                        className="text-accent mt-1 shrink-0"
                      />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-3.5 border-t border-[rgba(11,18,32,0.1)] inline-flex items-center gap-1.5 text-[13.5px] font-medium text-ink transition-all duration-300 group-hover:gap-2.5">
                  Learn more <IconArrowUR width={14} height={14} />
                </div>
              </Reveal>
            )
          })}

          {/* CTA card */}
          <Reveal
            delay={SERVICES.length * 60}
            className="bg-ink text-paper border border-ink rounded-brand p-7 flex flex-col gap-3.5 transition-all duration-300 hover:-translate-y-1"
          >
            <div
              className="w-11 h-11 rounded-xl inline-flex items-center justify-center border"
              style={{
                background: 'color-mix(in srgb, var(--accent) 20%, transparent)',
                color: 'var(--accent)',
                borderColor: 'color-mix(in srgb, var(--accent) 30%, transparent)',
              }}
            >
              <IconSpark width={22} height={22} />
            </div>
            <h3 className="font-serif text-[26px] leading-[1.1] tracking-[-0.015em] font-normal m-0 text-paper">
              Not sure which fits?
            </h3>
            <p className="text-[14.5px] text-paper/70 leading-[1.55] m-0">
              Send us your current site (or sketch) — we'll send back a short, honest assessment
              within 48 hours.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="mt-auto inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium bg-paper text-ink border border-[rgba(11,18,32,0.1)] hover:bg-white transition-all duration-200"
            >
              Request a free review <IconArrow width={14} height={14} />
            </button>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
