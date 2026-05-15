import { AUDIENCES } from '@/data/audiences'
import Container from '@/components/ui/Container'
import { Reveal, SectionHeader, IconArrowUR } from '@/components/ui'

export default function WhoWeHelp() {
  return (
    <section
      id="audience"
      className="py-[110px] max-md:py-20"
      style={{ background: 'linear-gradient(180deg, var(--paper), var(--paper-2))' }}
    >
      <Container>
        <SectionHeader
          tag="who we help"
          title={
            <>
              Built for the businesses{' '}
              <em className="serif-em">behind</em> the doors on Main Street.
            </>
          }
          sub="We work best with small teams who care about their craft as much as we care about ours."
        />

        <div
          className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1"
          style={{ borderTop: '1px solid var(--hair)', borderLeft: '1px solid var(--hair)' }}
        >
          {AUDIENCES.map((aud, i) => (
            <Reveal
              key={aud.name}
              delay={i * 50}
              className="flex items-start gap-4 p-8 border-r border-b group cursor-pointer transition-colors duration-300 hover:bg-white/60"
              style={{ borderColor: 'var(--hair)' }}
            >
              <div className="font-mono text-[11px] tracking-[0.08em] text-muted-2 pt-1 min-w-[22px]">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-[26px] tracking-[-0.015em] m-0 mb-1.5 font-normal leading-[1.1]">
                  {aud.name}
                </h3>
                <p className="text-[14px] text-muted m-0 leading-[1.55]">{aud.line}</p>
              </div>
              <IconArrowUR
                width={16}
                height={16}
                className="text-muted-2 transition-all duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px] group-hover:text-ink shrink-0"
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
