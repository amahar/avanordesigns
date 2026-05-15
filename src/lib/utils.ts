import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function scrollToId(id: string, offset = 80) {
  const el = document.getElementById(id)
  if (el) {
    window.scrollTo({ top: el.offsetTop - offset, behavior: 'smooth' })
  }
}
