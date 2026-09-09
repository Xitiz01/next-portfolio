'use client'

import { Testimonial } from '@/lib/types'
import { useEffect, useRef, useState } from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import TestimonialCard from './TestimonialCard'

interface TestimonialSectionProps {
  testimonials: Testimonial[]
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ testimonials }) => {
  const [activeCard, setActiveCard] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Handle auto-sliding
  useEffect(() => {
    if (!testimonials || testimonials.length === 0 || isPaused) return

    const interval = setInterval(() => {
      setActiveCard((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 3000) // Adjust speed here (3000ms = 3 seconds)

    return () => clearInterval(interval)
  }, [testimonials, isPaused])

  // Scroll the active card into view smoothly
  useEffect(() => {
    if (!scrollContainerRef.current) return

    const container = scrollContainerRef.current
    const selectedCard = container.children[activeCard] as HTMLElement

    if (selectedCard) {
      const scrollLeft =
        selectedCard.offsetLeft -
        container.offsetWidth / 2 +
        selectedCard.offsetWidth / 2

      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth',
      })
    }
  }, [activeCard])

  if (!testimonials || testimonials.length === 0) return null

  return (
    <section id="testimonials">
      <SectionHeading
        title="// Testimonials"
        subtitle="Don't just take our word for it - see what actual users of our service have to say about their experience."
      />

      <div
        ref={scrollContainerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className="hide-scrollbar my-8 flex gap-8 overflow-x-auto scroll-smooth"
      >
        {testimonials.map((testimonial, idx) => (
          <TestimonialCard
            key={idx}
            testimonial={testimonial}
            handleActiveCard={() => {
              setActiveCard(idx)
            }}
          />
        ))}
      </div>

      <div className="flex items-center justify-center gap-1 sm:hidden">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveCard(idx)}
            className={`${
              idx === activeCard ? 'bg-accent size-[12px]' : 'size-[10px] bg-white/50'
            } rounded-full transition-all duration-300`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default TestimonialSection