import { useNavigate } from 'react-router-dom'
import { SERVICES } from '@/data/services'
import Container from '@/components/ui/Container'
import { Reveal, SectionHeader, IconCheck, IconArrowUR } from '@/components/ui'
import {
  IconMonitor, IconRefresh, IconTarget, IconWrench, IconPhone,
} from '@/components/ui/Icons'
import type { ServiceIcon } from '@/data/services'
import WhoWeHelp from '@/sections/WhoWeHelp'
import ContactSection from '@/sections/ContactSection'

const ICON_MAP: Record<ServiceIcon, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  monitor: IconMonitor,
  refresh: IconRefresh,
  target: IconTarget,
  wrench: IconWrench,
  phone: IconPhone,
}

export default function Services() {
  const navigate = useNavigate()

  return (
    <>
      {/* Page header */}
      <section className="pt-[140px] pb-20 max-md:pt-[110px]">
        <Container>
          <Reveal>
            <span className="inline-flex items-center gap-2.5 font-mono text-[11.5px] tracking-[0.12em] uppercase text-muted">
              <span className="accent-dot" />
              what we do
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-serif text-[clamp(48px,6vw,88px)] leading-[0.96] tracking-[-0.025em] mt-4 max-w-[18ch] font-normal [text-wrap:balance]">
              Five services. One{' '}
              <em className="serif-em">focused</em> studio.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-[52ch] text-[18px] leading-[1.55] text-ink/70">
              We don't do everything. We do five things exceptionally well — and we're honest when
              something's outside our wheelhouse.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Services list */}
      <section className="pb-[110px]">
        <Container>
          <div className="flex flex-col gap-6">
            {SERVICES.map((svc, i) => {
              const ServiceIcon = ICON_MAP[svc.icon]
              return (
                <Reveal
                  key={svc.title}
                  delay={i * 60}
                  className="grid grid-cols-[auto_1fr_1fr] gap-8 items-start bg-white border border-[rgba(11,18,32,0.1)] rounded-brand p-8 transition-all duration-300 hover:shadow-s2 hover:border-[rgba(11,18,32,0.18)] max-lg:grid-cols-1 max-lg:gap-5"
                >
                  <div className="pt-1">
                    <div
                      className="w-12 h-12 rounded-xl inline-flex items-center justify-center border"
                      style={{
                        background: 'color-mix(in srgb, var(--accent) 12%, var(--paper))',
                        color: 'var(--accent-deep)',
                        borderColor: 'color-mix(in srgb, var(--accent) 18%, transparent)',
                      }}
                    >
                      <ServiceIcon width={24} height={24} />
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h2 className="font-serif text-[32px] leading-[1.05] tracking-[-0.018em] font-normal m-0">
                      {svc.title}
                    </h2>
                    <p className="text-[16px] text-muted leading-[1.6] m-0">{svc.body}</p>
                    {svc.detail && (
                      <p className="text-[15px] text-muted leading-[1.6] m-0">{svc.detail}</p>
                    )}
                  </div>

                  <div className="flex flex-col gap-4">
                    <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                      {svc.points.map((pt) => (
                        <li key={pt} className="flex gap-2.5 items-start text-[14.5px] text-ink">
                          <IconCheck width={14} height={14} className="text-accent mt-[3px] shrink-0" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => navigate('/contact')}
                      className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-ink group"
                    >
                      Get started with this service{' '}
                      <IconArrowUR
                        width={14}
                        height={14}
                        className="transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
                      />
                    </button>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      <WhoWeHelp />
      <ContactSection />
    </>
  )
}
