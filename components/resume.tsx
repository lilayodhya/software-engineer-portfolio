'use client'

import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { SectionHeading } from './section-heading'

type Role = {
  company: string
  role: string
  period: string
  summary: string
  stack: string[]
}

const roles: Role[] = [
  {
    company: 'Ashish Life Science Pvt Ltd',
    role: 'IT Intern',
    period: 'Summer 2026',
    summary:
      '',
    stack: ['SQL', 'Python', 'MERN'],
  },
  {
    company: 'Sunxora Ventures',
    role: 'Intern',
    period: 'Summer 2025',
    summary:
      '',
    stack: ['React', 'Ruby', 'GraphQL'],
  },
  {
    company: 'Drnk',
    role: 'Research Intern',
    period: '2023 — 2024',
    summary:
      '',
    stack: ['TypeScript', 'Storybook'],
  },
]

const easeOut = [0.22, 1, 0.36, 1] as const

export function Resume() {
  return (
    <section id="resume" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading index="03" eyebrow="Experience" title="A track record." />
          <motion.a
            href="/saarthakk-resume-new.pdf"
            download="saarthakk-resume-new.pdf"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="mb-12 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary md:mb-16"
          >
            <Download className="size-4" />
            Download résumé
          </motion.a>
        </div>

        <div className="border-t border-border">
          {roles.map((role, i) => (
            <motion.div
              key={role.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: easeOut, delay: i * 0.06 }}
              className="group grid gap-3 border-b border-border py-8 md:grid-cols-[1fr_2fr] md:gap-8"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {role.period}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight transition-colors group-hover:text-primary">
                  {role.company}
                </h3>
                <p className="text-sm text-muted-foreground">{role.role}</p>
              </div>
              <div>
                <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
                  {role.summary}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {role.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-full bg-secondary px-3 py-1 font-mono text-xs text-secondary-foreground"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
