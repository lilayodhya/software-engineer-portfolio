'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from './section-heading'

const groups = [
  {
    label: 'Languages',
    items: ['Python', 'SQL', 'Java', 'C++', 'JavaScript'],
  },
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Three.js', 'Framer Motion'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'PostgreSQL', 'MongoDB'],
  },
  {
    label: 'Infrastructure',
    items: ['Salesforce', 'AWS', 'Docker', 'PowerBI', 'Vercel'],
  },
]

const easeOut = [0.22, 1, 0.36, 1] as const

export function TechStack() {
  return (
    <section id="stack" className="relative border-y border-border px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="02"
          eyebrow="Toolkit"
          title="The stack behind the work."
        />

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {groups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: easeOut, delay: gi * 0.08 }}
              className="bg-card p-7 transition-colors hover:bg-secondary/40"
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                {group.label}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-border bg-background/40 px-3 py-1.5 text-sm text-foreground/90"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
