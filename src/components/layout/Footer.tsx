import { Link } from 'react-router-dom'
import { LogoMark } from '@/components/ui'

const COLS = [
  {
    heading: 'Studio',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Process', to: '/about#process' },
      { label: 'Portfolio', to: '/portfolio' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Website Design', to: '/services' },
      { label: 'Redesigns', to: '/services' },
      { label: 'Landing Pages', to: '/services' },
      { label: 'Maintenance', to: '/services' },
      { label: 'App Prototypes', to: '/services' },
    ],
  },
  {
    heading: 'Elsewhere',
    links: [
      { label: 'Instagram ↗', href: '#' },
      { label: 'Dribbble ↗', href: '#' },
      { label: 'Read.cv ↗', href: '#' },
      { label: 'hello@avanordesigns.com', href: 'mailto:hello@avanordesigns.com' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-paper py-20 pb-10">
      <div className="max-w-container mx-auto px-8 max-md:px-[22px] flex flex-col gap-14">
        {/* Top row */}
        <div className="grid grid-cols-[1.2fr_2fr] gap-15 items-start max-lg:grid-cols-1 max-lg:gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 text-paper font-medium tracking-[-0.02em]"
            >
              <LogoMark className="w-8 h-8 text-paper" />
              <span className="font-serif text-[1.3em] tracking-[-0.02em]">
                Avanor<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="text-[14.5px] text-paper/65 max-w-[38ch] leading-[1.55] m-0">
              A small studio designing modern, mobile-friendly websites for small businesses ready to
              grow online.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-3 gap-8 max-sm:grid-cols-1 max-sm:gap-6">
            {COLS.map((col) => (
              <div key={col.heading} className="flex flex-col gap-1">
                <div className="font-mono text-[10.5px] tracking-[0.12em] uppercase text-paper/55 mb-3">
                  {col.heading}
                </div>
                {col.links.map((link) =>
                  'to' in link ? (
                    <Link
                      key={link.label}
                      to={link.to}
                      className="py-1 text-[14px] text-paper/70 hover:text-paper transition-opacity duration-200"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      className="py-1 text-[14px] text-paper/70 hover:text-paper transition-opacity duration-200"
                    >
                      {link.label}
                    </a>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex justify-between items-center pt-7 border-t border-paper/[0.14] font-mono text-[11.5px] tracking-[0.05em] text-paper/55 max-sm:flex-col max-sm:gap-2 max-sm:items-start">
          <span>© {new Date().getFullYear()} Avanor Designs LLC · Made in Portland, OR</span>
          <span>Open for July–August projects · 2 spots</span>
        </div>
      </div>
    </footer>
  )
}
