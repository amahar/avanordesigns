export interface Testimonial {
  quote: string
  name: string
  role: string
  initials: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Our new site finally looks like the shop people walk into. Bookings doubled in the first month — and I can actually edit it myself.',
    name: 'Jules Reyes',
    role: 'Owner, Bloom Studio · Brooklyn, NY',
    initials: 'JR',
  },
  {
    quote:
      'Avanor nailed our brand on the first pass. The whole process was calm and organized — nothing like working with an agency.',
    name: 'Marcus T.',
    role: 'Founder, Nordwell Build · Portland, OR',
    initials: 'MT',
  },
  {
    quote:
      "We had a tight launch deadline and they hit it without cutting any corners. The site has been our best sales tool since day one.",
    name: 'Priya Shah',
    role: 'Co-founder, Drift Wellness · San Francisco, CA',
    initials: 'PS',
  },
]
