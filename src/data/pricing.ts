export interface Plan {
  name: string
  blurb: string
  price: string
  unit: string
  cta: string
  featured?: boolean
  features: string[]
}

export const PLANS: Plan[] = [
  {
    name: 'Starter Website',
    blurb: 'A clean, modern presence — perfect for new businesses and side projects.',
    price: '1,800',
    unit: 'one-time',
    cta: 'Start here',
    features: [
      'Up to 4 custom pages',
      'Mobile-first responsive design',
      'Contact form + Google Maps',
      'Basic SEO setup',
      'Launched in ~2 weeks',
    ],
  },
  {
    name: 'Business Website',
    blurb: 'Our most-picked plan. Everything a growing local business needs to look the part.',
    price: '3,600',
    unit: 'one-time',
    cta: 'Most popular',
    featured: true,
    features: [
      'Up to 8 custom pages',
      'Brand polish + copy direction',
      'Custom illustrations or photo art',
      'Lead capture + analytics',
      'CMS so you can edit yourself',
      '30 days of post-launch support',
    ],
  },
  {
    name: 'Premium Website',
    blurb: 'Bespoke design, custom interactions, and a partner that sticks around.',
    price: '6,900',
    unit: 'from',
    cta: "Let's talk",
    features: [
      'Unlimited core pages',
      'Custom motion + interactions',
      'Booking, ecommerce, or member areas',
      'Strategy + content workshops',
      'Quarterly design check-ins',
      '90 days of priority support',
    ],
  },
]

export const BUDGET_OPTIONS = [
  'Starter ($1.8k)',
  'Business ($3.6k)',
  'Premium ($6.9k+)',
  'Not sure yet',
]
