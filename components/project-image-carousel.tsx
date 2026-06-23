'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type ProjectImageCarouselProps = {
  images: string[]
  alt: string
}

function CarouselImage({ src, alt }: { src: string; alt: string }) {
  const [imageSrc, setImageSrc] = useState(src)

  return (
    <Image
      src={imageSrc}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-cover"
      onError={() => setImageSrc('/placeholder.svg')}
    />
  )
}

export function ProjectImageCarousel({ images, alt }: ProjectImageCarouselProps) {
  const slides = images.length > 0 ? images : ['/placeholder.svg']
  const [index, setIndex] = useState(0)
  const count = slides.length

  const goTo = useCallback(
    (next: number) => {
      setIndex((next + count) % count)
    },
    [count],
  )

  const goPrev = useCallback(() => goTo(index - 1), [goTo, index])
  const goNext = useCallback(() => goTo(index + 1), [goTo, index])

  useEffect(() => {
    if (count <= 1) return

    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % count)
    }, 3000)

    return () => clearInterval(timer)
  }, [count])

  return (
    <div className="group/carousel relative h-full w-full">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <CarouselImage src={slides[index]} alt={`${alt} — slide ${index + 1}`} />
        </motion.div>
      </AnimatePresence>

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-10 grid size-9 -translate-y-1/2 place-items-center rounded-full border border-border bg-background/80 text-foreground opacity-100 backdrop-blur-sm transition-opacity hover:bg-secondary sm:opacity-0 sm:group-hover/carousel:opacity-100"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-10 grid size-9 -translate-y-1/2 place-items-center rounded-full border border-border bg-background/80 text-foreground opacity-100 backdrop-blur-sm transition-opacity hover:bg-secondary sm:opacity-0 sm:group-hover/carousel:opacity-100"
          >
            <ChevronRight className="size-4" />
          </button>

          <div className="absolute inset-x-0 bottom-3 z-10 flex items-center justify-center gap-1.5">
            {slides.map((slide, i) => (
              <button
                key={slide + i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to image ${i + 1}`}
                aria-current={i === index ? 'true' : undefined}
                className={cn(
                  'h-1.5 rounded-full transition-all',
                  i === index
                    ? 'w-5 bg-primary'
                    : 'w-1.5 bg-foreground/30 hover:bg-foreground/50',
                )}
              />
            ))}
          </div>

          <p className="absolute right-3 top-3 z-10 rounded-full border border-border bg-background/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground backdrop-blur-sm">
            {index + 1} / {count}
          </p>
        </>
      )}
    </div>
  )
}
