import Reveal from './Reveal'

interface SectionHeaderProps {
  tag: string
  title: React.ReactNode
  sub?: string
  align?: 'left' | 'center'
}

export default function SectionHeader({
  tag,
  title,
  sub,
  align = 'left',
}: SectionHeaderProps) {
  const center = align === 'center'
  return (
    <div
      className={`flex flex-col gap-4 max-w-2xl mb-16 ${
        center ? 'mx-auto text-center items-center' : ''
      }`}
    >
      <Reveal>
        <span className="inline-flex items-center gap-2.5 font-mono text-[11.5px] tracking-[0.12em] uppercase text-muted">
          <span className="accent-dot" />
          {tag}
        </span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="font-serif text-[clamp(36px,4.8vw,64px)] leading-[1.02] tracking-[-0.022em] font-normal m-0 [text-wrap:balance]">
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={160}>
          <p className="text-[17px] text-muted max-w-[56ch] m-0">{sub}</p>
        </Reveal>
      )}
    </div>
  )
}
