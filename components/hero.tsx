'use client'

import { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import { gsap } from 'gsap'
import { ArrowDownRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './social-icons'

const HeroCanvas = dynamic(
  () => import('./hero-canvas').then((m) => m.HeroCanvas),
  { ssr: false },
)

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('[data-hero="eyebrow"]', { y: 20, opacity: 0, duration: 0.7 })
        .from(
          '[data-hero="line"]',
          { yPercent: 110, opacity: 0, duration: 1, stagger: 0.12 },
          '-=0.4',
        )
        .from(
          '[data-hero="sub"]',
          { y: 20, opacity: 0, duration: 0.8 },
          '-=0.5',
        )
        .from(
          '[data-hero="cta"]',
          { y: 16, opacity: 0, duration: 0.6 },
          '-=0.5',
        )
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 pt-28 pb-16"
    >
      {/* 3D backdrop */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <HeroCanvas />
      </div>
      {/* vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--background)_85%)]" />

      <div className="relative mx-auto w-full max-w-5xl">
        <p
          data-hero="eyebrow"
          className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-primary"
        >
          <span className="size-1.5 rounded-full bg-primary" />
          Available for work
        </p>

        <h1 className="text-balance text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
          <span className="block overflow-hidden">
            <span data-hero="line" className="block">
              Software
            </span>
          </span>
          <span className="block overflow-hidden">
            <span data-hero="line" className="block text-muted-foreground">
              engineer solving
            </span>
          </span>
          <span className="block overflow-hidden">
            <span data-hero="line" className="block">
              real world problems.
            </span>
          </span>
        </h1>

        <p
          data-hero="sub"
          className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          I&apos;m Saarthakk, a 20 year old Computer Engineering student who spends his time 
          building projects and exploring tech. I've worked on web applications, automation tools, AI, and business focused software.
          I'm still figuring out my place in the world and I'm passionate about generating value.
        </p>

        <div data-hero="cta" className="mt-10 flex flex-nowrap items-center gap-2 sm:gap-3">
          <a
            href="#contact"
            className="group inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:scale-[1.03] sm:px-6"
          >
            Get in touch
            <ArrowDownRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <GithubIcon className="size-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/saarthakk-suri-275424235"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <LinkedinIcon className="size-5" />
          </a>
        </div>
      </div>

      <div className="relative mx-auto mt-16 w-full max-w-5xl">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-px flex-1 bg-border" />
          Scroll to explore
        </div>
      </div>
    </section>
  )
}
