export interface Step {
  title: string
  description: string
  duration: string
}

export const STEPS: Step[] = [
  {
    title: 'Discover',
    description:
      "A 45-min kickoff. We learn the business, audit what exists, and align on goals before a pixel is drawn.",
    duration: 'Week 1',
  },
  {
    title: 'Design',
    description:
      "Moodboards, type, and layouts come together in Figma. You review in real time — no surprise reveals.",
    duration: 'Week 1–2',
  },
  {
    title: 'Build',
    description:
      "Clean, fast, accessible code. Built mobile-first and tested on real devices, not just resized browsers.",
    duration: 'Week 2–3',
  },
  {
    title: 'Launch',
    description:
      "Domains, DNS, analytics, SEO basics — handled. You press go; we make sure nothing breaks.",
    duration: 'Week 3–4',
  },
  {
    title: 'Support',
    description:
      "Optional ongoing care. Updates, edits, and a real human to answer when something's off.",
    duration: 'Ongoing',
  },
]
