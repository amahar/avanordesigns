import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'ghost' | 'outline' | 'light'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  block?: boolean
  to?: string
  href?: string
  sent?: boolean
}

const base =
  'inline-flex items-center justify-center gap-2 border rounded-full font-medium tracking-[-0.005em] whitespace-nowrap transition-all duration-200 ease-out hover:-translate-y-px active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

const variants: Record<Variant, string> = {
  primary:
    'bg-ink text-paper border-transparent hover:bg-navy-3 hover:shadow-[0_10px_24px_-10px_rgba(11,18,32,0.4)]',
  ghost:
    'bg-transparent text-ink border-[rgba(11,18,32,0.18)] hover:bg-ink hover:text-paper hover:border-ink',
  outline:
    'bg-transparent text-ink border-[rgba(11,18,32,0.18)] hover:bg-paper-2 hover:border-ink',
  light:
    'bg-paper text-ink border-[rgba(11,18,32,0.1)] hover:bg-white',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-[13px]',
  md: 'px-5 py-3 text-[14px]',
  lg: 'px-6 py-[15px] text-[15px]',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'primary', size = 'md', block, className, to, href, sent, children, ...rest },
    ref,
  ) => {
    const classes = cn(base, variants[variant], sizes[size], block && 'w-full', className)

    if (to) {
      return (
        <Link to={to} className={classes}>
          {children}
        </Link>
      )
    }
    if (href) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      )
    }
    return (
      <button
        ref={ref}
        className={cn(classes, sent && 'bg-accent-deep')}
        {...rest}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
export default Button
