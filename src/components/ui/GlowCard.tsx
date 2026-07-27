import type { ReactNode } from 'react'
import { usePointerGlow } from '../../hooks/usePointerGlow'

interface GlowCardProps {
  children: ReactNode
  /** Layout classes for the card's content area (padding, flex, …). */
  className?: string
}

/**
 * The shared interactive card of the design system (Projects and
 * Experience): pointer-follow radial glow written to CSS variables (no
 * React state on mousemove), clipped inside the card, hidden on touch
 * devices and under prefers-reduced-motion; ~6px hover lift with
 * border/shadow brightening, all transitions at 300ms.
 */
export function GlowCard({ children, className = '' }: GlowCardProps) {
  const { ref, onMouseMove } = usePointerGlow<HTMLElement>()

  return (
    <article
      ref={ref}
      onMouseMove={onMouseMove}
      className="group relative h-full overflow-hidden rounded-2xl border border-line bg-white shadow-soft transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1.5 hover:border-accent-purple/25 hover:shadow-lift motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      {/* Pointer-following glow — clipped by the card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:!hidden [@media(hover:hover)]:block"
        style={{
          background:
            'radial-gradient(500px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgb(124 92 255 / 0.14), transparent 45%)',
        }}
      />
      <div className={`relative h-full ${className}`}>{children}</div>
    </article>
  )
}
