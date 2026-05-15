import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useScrolled } from '@/lib/hooks'
import { scrollToId } from '@/lib/utils'
import { LogoMark, IconArrow } from '@/components/ui'
import Button from '@/components/ui/Button'

const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
]

export default function Nav() {
  const scrolled = useScrolled(12)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const handleCta = () => {
    setOpen(false)
    if (location.pathname === '/') {
      scrollToId('contact')
    } else {
      navigate('/contact')
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'nav-glass border-[rgba(11,18,32,0.1)] py-[10px]'
          : 'bg-transparent border-transparent py-4'
      }`}
    >
      <div className="max-w-container mx-auto px-8 max-md:px-[22px] flex items-center gap-6">
        {/* Logo */}
        <Link
          to="/"
          className="inline-flex items-center gap-2.5 font-medium tracking-[-0.02em] text-[18px] text-ink no-underline"
        >
          <LogoMark className="w-7 h-7 text-ink" />
          <span className="font-serif text-[1.22em] tracking-[-0.02em]">
            Avanor<span className="text-accent">.</span>
          </span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex gap-1 ml-7" aria-label="Primary navigation">
          {NAV_LINKS.map(({ label, href }) => {
            const active = location.pathname === href
            return (
              <Link
                key={href}
                to={href}
                className={`px-3 py-2 rounded-lg text-[14px] tracking-[-0.005em] transition-all duration-200 hover:bg-[rgba(11,18,32,0.05)] ${
                  active ? 'text-ink opacity-100' : 'text-ink opacity-70 hover:opacity-100'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-1 ml-auto">
          <Link
            to="/contact"
            className="px-3 py-2 rounded-lg text-[14px] opacity-85 text-ink transition-all duration-200 hover:opacity-100 hover:bg-[rgba(11,18,32,0.05)]"
          >
            Contact
          </Link>
          <Button size="sm" onClick={handleCta}>
            Free Website Review <IconArrow width={14} height={14} />
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden ml-auto w-[38px] h-[38px] flex flex-col gap-[5px] items-center justify-center bg-transparent border-0"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          <span className={`bar ${open ? 'x1' : ''}`} />
          <span className={`bar ${open ? 'x2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-1 px-6 pb-6 pt-4 bg-paper border-b border-[rgba(11,18,32,0.1)]">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              to={href}
              onClick={() => setOpen(false)}
              className="py-3 px-2 text-[16px] text-ink border-b border-[rgba(11,18,32,0.1)] font-normal"
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="py-3 px-2 text-[16px] text-ink border-b border-[rgba(11,18,32,0.1)] font-normal"
          >
            Contact
          </Link>
          <div className="pt-3">
            <Button block onClick={handleCta}>
              Free Website Review <IconArrow width={14} height={14} />
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
