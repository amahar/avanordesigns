export type ServiceIcon = 'monitor' | 'refresh' | 'target' | 'wrench' | 'phone'

export interface Service {
  icon: ServiceIcon
  title: string
  body: string
  points: string[]
  detail?: string
}

export const SERVICES: Service[] = [
  {
    icon: 'monitor',
    title: 'Website Design',
    body: 'Bespoke marketing sites built around your brand — strategy, copy direction, and design that converts.',
    points: ['Up to 8 custom pages', 'On-brand identity polish', 'CMS or static handoff'],
    detail:
      'We start every project with a discovery session to understand your business goals, audience, and competitive landscape. From there we move into design — moodboards, typography, layout — all tailored to your brand. The result is a site that feels entirely yours, not a template.',
  },
  {
    icon: 'refresh',
    title: 'Website Redesigns',
    body: 'Modernize a dated site without losing your SEO or your story. We rebuild it like new.',
    points: ['Audit + scope plan', 'Content migration', 'Performance overhaul'],
    detail:
      "We audit what's working and what's holding you back, then rebuild with purpose. Existing SEO value, your customers' familiarity with your brand, and your content are all preserved — or upgraded — in the process.",
  },
  {
    icon: 'target',
    title: 'Landing Pages',
    body: 'High-conversion single pages for launches, campaigns, and lead capture — shipped fast.',
    points: ['A/B-ready structure', 'Custom illustrations', 'Analytics + forms'],
    detail:
      'Landing pages are where campaigns live or die. We design pages with a single, clear conversion goal and build in the analytics hooks so you know exactly how they perform from day one.',
  },
  {
    icon: 'wrench',
    title: 'Website Maintenance',
    body: 'Monthly care so your site stays fresh, fast, and secure while you focus on the business.',
    points: ['Updates + edits', 'Uptime monitoring', 'Quarterly tune-ups'],
    detail:
      "A website isn't a one-and-done project. We offer ongoing care plans that keep your site up to date, your content current, and your performance metrics healthy — without you having to think about it.",
  },
  {
    icon: 'phone',
    title: 'Mobile App Prototypes',
    body: 'Clickable, investor-ready prototypes for founders validating their first idea.',
    points: ['Figma + interactive prototype', 'User flows mapped', 'Hand-off to dev team'],
    detail:
      'Before you spend six months building, validate with a prototype that looks and feels real. We map user flows, design every screen, and hand off Figma files your development team can build from directly.',
  },
]
