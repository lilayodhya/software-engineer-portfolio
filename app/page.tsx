import { SmoothScroll } from '@/components/smooth-scroll'
import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { TechStack } from '@/components/tech-stack'
import { Resume } from '@/components/resume'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <SmoothScroll>
      <SiteNav />
      <main className="relative">
        <Hero />
        <Projects />
        <TechStack />
        <Resume />
        <Contact />
      </main>
    </SmoothScroll>
  )
}
