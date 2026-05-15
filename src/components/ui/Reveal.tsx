import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface RevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
  style?: React.CSSProperties
  as?: keyof React.JSX.IntrinsicElements
}

export default function Reveal({
  children,
  delay = 0,
  className = '',
  style,
  as: As = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const Element = As as React.ElementType
  return (
    <Element
      ref={ref}
      className={cn('reveal', shown && 'is-in', className)}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Element>
  )
}
