'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { ProjectImageCarousel } from './project-image-carousel'
import { SectionHeading } from './section-heading'

type Project = {
  title: string
  year: string
  category: string
  description: string
  images: string[]
  tags: string[]
}

const projects: Project[] = [
  {
    title: 'Landmark Estate Agents',
    year: '2026',
    category: 'REAL ESTATE PLATFORM',
    description:
      'A complete real estate platform combining a public-facing property website with a secure CRM dashboard. Built to manage listings, leads, and client interactions from a single system while keeping website content synchronized with CRM updates.',
    images: [
      '/projects/landmark.png',
      '/projects/landmark1.png',
      '/projects/landmark2.png',
    ],
    tags: ['React', 'Node.js', 'Tailwind CSS', 'Express', 'Supabase'],
  },
  {
    title: 'CargoIQ — Shipping volume & weight management dashboard',
    year: '2026',
    category: 'LOGISTICS TOOL',
    description:
      'Developed a full-stack logistics application for shipment planning and container utilization analysis. Implemented product catalog management, CBM calculations, gross/net weight tracking, freight mode selection, shipment aggregation, container fill monitoring, and PDF/Excel export functionality to streamline logistics operations.',
    images: [
      '/projects/cbm-calculator.png',
      '/projects/cbm-calculator1.png',
    ],
    tags: ['React', 'Node.js', 'MS SQL Server', 'Tailwind CSS'],
  },
  {
    title: 'Minerva — GST Automation Tool',
    year: '2026',
    category: 'FINANCE & TAXATION',
    description:
      'A full-stack web application that automates GST report generation for Indian businesses. The system accepts sales data in any CSV format, uses AI to intelligently map columns from any accounting software export (Tally, Zoho Books, QuickBooks, Busy Accounting), calculates CGST, SGST, and IGST across domestic and international transactions, and generates structured GSTR-1 and GSTR-3B Excel reports.',
    images: [
      '/projects/gst.png',
      '/projects/gst1.png',
      '/projects/gst2.png',
    ],
    tags: ['React', 'Python', 'CSS', 'HTML', 'Gemini AI'],
  },
  {
    title: 'ShiftSync — Overtime Report Analyzer',
    year: '2026',
    category: 'BUSINESS AUTOMATION',
    description:
      'An internal tool that automates overtime calculations and report generation for HR teams. The system processes attendance data, performs calculations automatically, and generates structured reports, reducing manual effort and improving reporting accuracy.',
    images: [
      '/projects/overtime-report-analyzer.png',
      '/projects/overtime-report-analyzer1.png',
      '/projects/overtime-report-analyzer2.png',
    ],
    tags: ['Python', 'Automation', 'Gemini AI'],
  },
  {
    title: 'Medistore',
    year: '2025',
    category: 'HEALTHCARE',
    description:
      'A healthcare management platform designed to simplify access to medical information. The application supports digital medical records, prescriptions, appointment management, and role-based access for patients, doctors, and administrators.',
    images: [
      '/projects/medistore.png',
      '/projects/medistore1.png',
      '/projects/medistore2.png',
    ],
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
        <div className={index % 2 === 1 ? 'md:order-2' : 'md:order-1'}>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-2 sm:p-3">
            <motion.div
              style={{ y }}
              className="relative w-full overflow-hidden rounded-[calc(theme(borderRadius.2xl)-0.25rem)]"
            >
              <ProjectImageCarousel
                images={project.images}
                alt={`${project.title} — ${project.category}`}
              />
            </motion.div>
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
          </div>
        </div>

        <div className={index % 2 === 1 ? 'md:order-1' : 'md:order-2'}>
          <div>
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span>{project.year}</span>
              <span className="h-px w-6 bg-border" />
              <span className="text-primary">{project.category}</span>
            </div>
            <h3 className="mt-4 flex items-center gap-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              {project.title}
              <ArrowUpRight className="size-6 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
            </h3>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  return (
    <section id="work" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="01" eyebrow="Selected Work" title="Projects I'm proud of." />
        <div className="flex flex-col gap-20 md:gap-28">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
