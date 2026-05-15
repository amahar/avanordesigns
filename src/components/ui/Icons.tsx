import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base: IconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconArrow(p: IconProps) {
  return (
    <svg {...base} strokeWidth="1.5" {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function IconArrowUR(p: IconProps) {
  return (
    <svg {...base} strokeWidth="1.5" {...p}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  )
}

export function IconCheck(p: IconProps) {
  return (
    <svg {...base} strokeWidth="1.75" {...p}>
      <path d="M4 12.5 10 18 20 6" />
    </svg>
  )
}

export function IconPlus(p: IconProps) {
  return (
    <svg {...base} strokeWidth="1.5" {...p}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

export function IconMinus(p: IconProps) {
  return (
    <svg {...base} strokeWidth="1.5" {...p}>
      <path d="M5 12h14" />
    </svg>
  )
}

export function IconMonitor(p: IconProps) {
  return (
    <svg {...base} strokeWidth="1.25" {...p}>
      <rect x="3" y="4" width="18" height="13" rx="1.5" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  )
}

export function IconRefresh(p: IconProps) {
  return (
    <svg {...base} strokeWidth="1.25" {...p}>
      <path d="M3 12a9 9 0 0 1 15.5-6.3L21 8M21 3v5h-5M21 12a9 9 0 0 1-15.5 6.3L3 16M3 21v-5h5" />
    </svg>
  )
}

export function IconTarget(p: IconProps) {
  return (
    <svg {...base} strokeWidth="1.25" {...p}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" />
    </svg>
  )
}

export function IconWrench(p: IconProps) {
  return (
    <svg {...base} strokeWidth="1.25" {...p}>
      <path d="M14.7 6.3a4 4 0 0 0 5.1 5.1l-9 9a2.8 2.8 0 1 1-4-4l9-9.1a4 4 0 0 0-1.1-1z" />
    </svg>
  )
}

export function IconPhone(p: IconProps) {
  return (
    <svg {...base} strokeWidth="1.25" {...p}>
      <rect x="7" y="2" width="10" height="20" rx="2.2" />
      <path d="M11 18.5h2" />
    </svg>
  )
}

export function IconSpark(p: IconProps) {
  return (
    <svg {...base} strokeWidth="1.25" {...p}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
    </svg>
  )
}

export function IconMail(p: IconProps) {
  return (
    <svg {...base} strokeWidth="1.25" {...p}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </svg>
  )
}

export function LogoMark(p: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...p}>
      <path
        d="M6 26 16 6l10 20"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M11 21h10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="16" cy="6" r="1.2" fill="currentColor" />
    </svg>
  )
}
