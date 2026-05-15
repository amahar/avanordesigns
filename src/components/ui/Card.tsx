import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  dark?: boolean
  featured?: boolean
}

export default function Card({ children, className, dark, featured }: CardProps) {
  return (
    <div
      className={cn(
        'relative bg-white border border-[rgba(11,18,32,0.1)] rounded-brand p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-s2 hover:border-[rgba(11,18,32,0.18)]',
        dark && 'bg-ink text-paper border-ink',
        featured && 'bg-ink text-paper border-ink -translate-y-2 shadow-s3',
        className,
      )}
    >
      {children}
    </div>
  )
}
