import { useState } from 'react'
import { BUDGET_OPTIONS } from '@/data/pricing'
import Container from '@/components/ui/Container'
import { Reveal, IconMail, IconSpark, IconTarget, IconArrow, IconCheck } from '@/components/ui'

interface FormData {
  name: string
  email: string
  business: string
  budget: string
  message: string
}

const INITIAL_FORM: FormData = {
  name: '',
  email: '',
  business: '',
  budget: 'Business ($3.6k)',
  message: '',
}

export default function ContactSection() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const set = (key: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((prev) => ({ ...prev, [key]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Structured for future backend — replace with API call here
    setTimeout(() => {
      setLoading(false)
      setSent(true)
      setForm(INITIAL_FORM)
      setTimeout(() => setSent(false), 5000)
    }, 800)
  }

  const inputCls =
    'border border-[rgba(11,18,32,0.1)] rounded-[10px] px-3.5 py-3 font-sans text-[14.5px] text-ink bg-paper outline-none transition-all duration-200 resize-vertical focus:border-accent focus:bg-white w-full'
  const labelCls = 'font-mono text-[10.5px] tracking-[0.1em] uppercase text-muted'

  return (
    <section
      id="contact"
      className="py-[110px] max-md:py-20"
      style={{ background: 'linear-gradient(180deg, var(--paper), var(--paper-2))' }}
    >
      <Container>
        <div className="grid grid-cols-[1fr_1.1fr] gap-[60px] items-start max-md:grid-cols-1 max-md:gap-9">
          {/* Left: context */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2.5 font-mono text-[11.5px] tracking-[0.12em] uppercase text-muted">
                <span className="accent-dot" />
                let's build
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-serif text-[clamp(40px,5vw,64px)] leading-[1.02] tracking-[-0.022em] mt-3.5 mb-4 font-normal [text-wrap:balance]">
                Tell us about your{' '}
                <em className="serif-em">business</em>.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-[17px] text-muted max-w-[42ch] m-0 mb-9">
                A short form. A real human reply within one business day. No "let's hop on a
                30-minute discovery call" unless we both want to.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div
                className="flex flex-col gap-4 pt-6"
                style={{ borderTop: '1px solid var(--hair)' }}
              >
                {[
                  {
                    icon: <IconMail width={16} height={16} />,
                    label: 'Email',
                    val: 'hello@avanordesigns.com',
                  },
                  {
                    icon: <IconSpark width={16} height={16} />,
                    label: 'Now booking',
                    val: '2 projects, July–August',
                  },
                  {
                    icon: <IconTarget width={16} height={16} />,
                    label: 'Free review',
                    val: '48-hour turnaround',
                  },
                ].map(({ icon, label, val }) => (
                  <div key={label} className="flex gap-3.5 items-start">
                    <span
                      className="text-accent-deep mt-1"
                      style={{ color: 'var(--accent-deep)' }}
                    >
                      {icon}
                    </span>
                    <div>
                      <div className="font-mono text-[10.5px] tracking-[0.1em] uppercase text-muted">
                        {label}
                      </div>
                      <div className="text-[15px] text-ink">{val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal
            delay={120}
            className="bg-white border border-[rgba(11,18,32,0.1)] rounded-brandXl p-8 shadow-s2 max-md:p-[22px]"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
              {/* Name + Email */}
              <div className="grid grid-cols-2 gap-3.5 max-sm:grid-cols-1">
                <label className="flex flex-col gap-1.5">
                  <span className={labelCls}>Your name</span>
                  <input
                    type="text"
                    className={inputCls}
                    value={form.name}
                    onChange={set('name')}
                    placeholder="Jamie Chen"
                    required
                    autoComplete="name"
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className={labelCls}>Email</span>
                  <input
                    type="email"
                    className={inputCls}
                    value={form.email}
                    onChange={set('email')}
                    placeholder="you@business.com"
                    required
                    autoComplete="email"
                  />
                </label>
              </div>

              {/* Business */}
              <label className="flex flex-col gap-1.5">
                <span className={labelCls}>Business or project</span>
                <input
                  type="text"
                  className={inputCls}
                  value={form.business}
                  onChange={set('business')}
                  placeholder="Ridgeline Coffee — single-origin café"
                />
              </label>

              {/* Budget chips */}
              <div className="flex flex-col gap-1.5">
                <span className={labelCls}>Rough budget</span>
                <div className="flex flex-wrap gap-2">
                  {BUDGET_OPTIONS.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setForm((prev) => ({ ...prev, budget: b }))}
                      className={`border rounded-full px-3.5 py-2 text-[13px] transition-all duration-200 ${
                        form.budget === b
                          ? 'bg-ink text-paper border-ink'
                          : 'bg-paper border-[rgba(11,18,32,0.1)] text-ink hover:border-[rgba(11,18,32,0.18)]'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <label className="flex flex-col gap-1.5">
                <span className={labelCls}>Tell us a little more</span>
                <textarea
                  className={inputCls}
                  rows={4}
                  value={form.message}
                  onChange={set('message')}
                  placeholder="What you have today, what you'd like, and roughly when you'd like to launch."
                />
              </label>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full inline-flex items-center justify-center gap-2 px-6 py-[15px] rounded-full text-[15px] font-medium border-transparent transition-all duration-200 hover:-translate-y-px disabled:opacity-60 disabled:cursor-not-allowed ${
                  sent ? 'bg-accent-deep text-paper' : 'bg-ink text-paper hover:bg-navy-3'
                }`}
                style={{ background: sent ? 'var(--accent-deep)' : undefined }}
              >
                {sent ? (
                  <>
                    <IconCheck width={16} height={16} /> Sent — talk soon
                  </>
                ) : loading ? (
                  'Sending…'
                ) : (
                  <>
                    Send & get my free review <IconArrow width={16} height={16} />
                  </>
                )}
              </button>

              <p className="text-[12px] text-muted-2 text-center m-0">
                By sending, you agree to a single follow-up email. We don't spam, ever.
              </p>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
