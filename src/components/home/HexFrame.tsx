import type { ReactNode } from 'react'

interface HexFrameProps {
  size: number
  children: ReactNode
  /** Accent-glow variant used for the central code emblem. */
  accent?: boolean
  className?: string
}

/**
 * Compact hexagonal frame (reference style): a clipped border layer
 * behind a slightly-inset dark translucent fill. clip-path removes real
 * borders, so the outline is drawn by the layer underneath.
 */
export function HexFrame({ size, children, accent = false, className = '' }: HexFrameProps) {
  return (
    <div style={{ width: size, height: size }} className={`relative ${className}`}>
      <div
        aria-hidden="true"
        className={`clip-hex absolute inset-0 ${accent ? 'bg-accent-purple/70' : 'bg-white/15'}`}
      />
      <div
        className={`clip-hex absolute inset-[1.5px] flex items-center justify-center ${
          accent ? 'bg-night-deep/95' : 'bg-night-soft/90'
        }`}
      >
        {children}
      </div>
    </div>
  )
}
