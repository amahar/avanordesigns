import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: keyof React.JSX.IntrinsicElements
}

export default function Container({ children, className, as: As = 'div' }: ContainerProps) {
  const Element = As as React.ElementType
  return (
    <Element
      className={cn('w-full max-w-container mx-auto px-8 max-md:px-[22px]', className)}
    >
      {children}
    </Element>
  )
}
