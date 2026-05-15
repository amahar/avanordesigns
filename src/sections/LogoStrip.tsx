import Container from '@/components/ui/Container'

const CLIENTS = [
  'Ridgeline Coffee',
  'Bloom Studio',
  'Harbor & Pine',
  'Foxglove Salon',
  'Nordwell Build',
  'Field Notes Co.',
]

export default function LogoStrip() {
  return (
    <section className="pt-6 pb-20" aria-label="Trusted clients">
      <Container>
        <div className="flex flex-col gap-6 items-center">
          <p className="font-mono text-[11.5px] tracking-[0.12em] uppercase text-muted">
            Trusted by independent shops, studios, and operators
          </p>
          <div className="flex flex-wrap justify-center">
            {CLIENTS.map((name) => (
              <div
                key={name}
                className="font-serif text-[22px] tracking-[-0.015em] text-ink opacity-55 px-7 border-r border-[rgba(11,18,32,0.1)] last:border-r-0 transition-opacity duration-300 hover:opacity-100 leading-none max-sm:text-[17px] max-sm:px-4"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
