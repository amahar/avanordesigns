export type ProjectColor = 'warm' | 'rose' | 'slate' | 'olive' | 'navy' | 'mint'

export interface Project {
  name: string
  tag: string
  category: string
  year: string
  color: ProjectColor
  description: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Ridgeline Coffee',
    tag: 'Restaurant · Redesign',
    category: 'Redesign',
    year: '2025',
    color: 'warm',
    description:
      'A complete redesign for a beloved Portland roastery. New brand direction, online ordering integration, and a story-first layout that brings the craft to the front page.',
  },
  {
    name: 'Bloom Studio',
    tag: 'Salon · New Site + Booking',
    category: 'New Site',
    year: '2025',
    color: 'rose',
    description:
      'Lookbook-style site with integrated booking, team pages, and a gallery that feels as polished as the salon itself.',
  },
  {
    name: 'Nordwell Build',
    tag: 'Contractor · Lead Gen Site',
    category: 'Lead Gen',
    year: '2024',
    color: 'slate',
    description:
      'A high-trust lead generation site for a general contractor — project gallery, local SEO foundation, and a streamlined quote request flow.',
  },
  {
    name: 'Field Notes Co.',
    tag: 'Coach · Personal Brand',
    category: 'Personal Brand',
    year: '2024',
    color: 'olive',
    description:
      'Personal brand site for a leadership coach — newsletter capture, paid offer pages, and a writing section that grows with the business.',
  },
  {
    name: 'Harbor & Pine',
    tag: 'Boutique · E-commerce',
    category: 'E-commerce',
    year: '2024',
    color: 'navy',
    description:
      'Editorial e-commerce site for a curated homewares boutique. Custom Shopify theme with collection storytelling and ambient photography integration.',
  },
  {
    name: 'Drift Wellness',
    tag: 'Startup · App Prototype',
    category: 'App Prototype',
    year: '2025',
    color: 'mint',
    description:
      'Investor-ready clickable prototype for a wellness app — 14 screens, full user flow, and a pitch deck–ready design system.',
  },
]

export const PROJECT_CATEGORIES = [
  'All',
  'New Site',
  'Redesign',
  'Lead Gen',
  'E-commerce',
  'Personal Brand',
  'App Prototype',
]

export const COLOR_MAP: Record<ProjectColor, string> = {
  warm: 'linear-gradient(135deg, #f3e3c8, #e3c899)',
  rose: 'linear-gradient(135deg, #f3d8d4, #d9b6b0)',
  slate: 'linear-gradient(135deg, #d6dce4, #aab6c4)',
  olive: 'linear-gradient(135deg, #dfe1c4, #b8bd92)',
  navy: 'linear-gradient(135deg, #2a3a52, #0b1220)',
  mint: 'linear-gradient(135deg, #cee9dd, #9dcbb7)',
}
