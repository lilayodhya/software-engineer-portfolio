'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const socials = [
  { label: 'Email', value: 'saarthakksuri@gmail.com', href: 'mailto:saarthakksuri@gmail.com' },
  { label: 'GitHub', value: '@_____________', href: 'https://github.com' },
  { label: 'LinkedIn', value: 'in/saarthakksuri', href: 'https://www.linkedin.com/in/saarthakk-suri-275424235' },
]

export function Contact() {
  const ref = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.from(el, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%' },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="contact" className="relative px-6 py-24 md:py-36">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
          04 — Contact
        </p>
        <h2
          ref={ref}
          className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          Let&apos;s make something
          <span className="text-muted-foreground"> creating value.</span>
        </h2>

        <a
          href="mailto:saarthakksuri@gmail.com"
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
        >
          Start a conversation
          <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="group flex flex-col gap-2 bg-card p-6 transition-colors hover:bg-secondary/40"
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {s.label}
              </span>
              <span className="flex items-center gap-1 text-foreground transition-colors group-hover:text-primary">
                {s.value}
                <ArrowUpRight className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
              </span>
            </a>
          ))}
        </div>

        <footer className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p className="font-mono text-xs">Saarthakk Suri</p>
          <p className="font-mono text-xs">Designed &amp; built with love.</p>
        </footer>
      </div>
    </section>
  )
}
