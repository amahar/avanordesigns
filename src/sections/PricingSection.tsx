import { useNavigate } from 'react-router-dom'
import { PLANS } from '@/data/pricing'
import Container from '@/components/ui/Container'
import { Reveal, SectionHeader, IconCheck, IconArrow } from '@/components/ui'

interface PricingSectionProps {
  showFootnote?: boolean
}

export default function PricingSection({ showFootnote = true }: PricingSectionProps) {
  const navigate = useNavigate()

  return (
    <section id="pricing" className="py-[110px] bg-paper max-md:py-20">
      <Container>
        <SectionHeader
          tag="pricing"
          title={
            <>
              Honest <em className="serif-em">flat-rate</em> packages.
            </>
          }
          sub="No hidden retainers. No surprise hours. Pick a package, we ship — or we'll quote custom work upfront."
        />

        <div className="grid grid-cols-3 gap-4 items-stretch max-lg:grid-cols-2 max-sm:grid-cols-1">
          {PLANS.map((plan, i) => (
            <Reveal
              key={plan.name}
              delay={i * 80}
              className={`relative bg-white border rounded-brandXl p-8 flex flex-col gap-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-s2 ${
                plan.featured
                  ? 'bg-ink text-paper border-ink -translate-y-2 shadow-s3 max-sm:translate-y-0'
                  : 'border-[rgba(11,18,32,0.1)]'
              }`}
            >
              {plan.featured && (
                <div
                  className="absolute top-[-12px] left-7 font-mono text-[10.5px] tracking-[0.1em] uppercase px-3 py-1.5 rounded-full font-medium"
                  style={{ background: 'var(--accent)', color: 'var(--ink)' }}
                >
                  Most picked
                </div>
              )}

              {/* Head */}
              <div className="flex flex-col gap-2">
                <h3
                  className={`font-serif text-[28px] leading-[1.05] tracking-[-0.018em] m-0 font-normal ${
                    plan.featured ? 'text-paper' : 'text-ink'
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-[14px] m-0 leading-[1.5] min-h-[42px] ${
                    plan.featured ? 'text-paper/65' : 'text-muted'
                  }`}
                >
                  {plan.blurb}
                </p>
              </div>

              {/* Price */}
              <div
                className={`flex items-baseline gap-1 py-4 border-y ${
                  plan.featured
                    ? 'border-paper/[0.14]'
                    : 'border-[rgba(11,18,32,0.1)]'
                }`}
              >
                <span
                  className={`font-mono text-[10.5px] tracking-[0.1em] uppercase mr-2 self-center ${
                    plan.featured ? 'text-paper/55' : 'text-muted-2'
                  }`}
                >
                  {plan.unit}
                </span>
                <span className={`font-serif text-[24px] ${plan.featured ? 'text-paper/70' : 'text-muted'}`}>$</span>
                <span
                  className={`font-serif text-[56px] leading-none tracking-[-0.025em] font-normal ${
                    plan.featured ? 'text-paper' : 'text-ink'
                  }`}
                >
                  {plan.price}
                </span>
              </div>

              {/* Features */}
              <ul className="list-none p-0 m-0 flex flex-col gap-2.5 flex-1">
                {plan.features.map((feat) => (
                  <li
                    key={feat}
                    className={`flex items-start gap-2.5 text-[14px] leading-[1.5] ${
                      plan.featured ? 'text-paper/90' : 'text-ink'
                    }`}
                  >
                    <IconCheck width={14} height={14} className="text-accent mt-1 shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => navigate('/contact')}
                className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-[14px] font-medium border transition-all duration-200 hover:-translate-y-px ${
                  plan.featured
                    ? 'bg-accent text-ink border-accent hover:opacity-90'
                    : 'bg-transparent text-ink border-[rgba(11,18,32,0.18)] hover:bg-paper-2 hover:border-ink'
                }`}
              >
                {plan.cta} <IconArrow width={14} height={14} />
              </button>
            </Reveal>
          ))}
        </div>

        {showFootnote && (
          <p className="mt-8 text-center text-[14px] text-muted">
            Need something between plans?{' '}
            <button
              onClick={() => navigate('/contact')}
              className="text-ink border-b border-[rgba(11,18,32,0.18)] pb-px hover:border-ink transition-colors duration-200"
            >
              Ask us about custom scope →
            </button>
          </p>
        )}
      </Container>
    </section>
  )
}
