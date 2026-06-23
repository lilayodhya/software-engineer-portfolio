import { Reveal } from './reveal'

export function SectionHeading({
  index,
  eyebrow,
  title,
}: {
  index: string
  eyebrow: string
  title: string
}) {
  return (
    <div className="mb-12 md:mb-16">
      <Reveal>
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
          <span>{index}</span>
          <span className="h-px w-8 bg-primary/40" />
          <span className="text-muted-foreground">{eyebrow}</span>
        </div>
      </Reveal>
      <Reveal delay={1}>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
    </div>
  )
}
