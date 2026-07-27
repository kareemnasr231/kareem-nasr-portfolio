import { SectionLabel } from './SectionLabel'
import { TechOrbitSystem } from './TechOrbitSystem'
import { TerminalPanel } from './TerminalPanel'

interface Star {
  top: number
  left: number
  size: number
  opacity: number
}

/** Deterministic star field — percentages within the dark panel. */
const STARS: readonly Star[] = [
  { top: 5, left: 30, size: 2, opacity: 0.5 }, { top: 8, left: 72, size: 1, opacity: 0.35 },
  { top: 13, left: 50, size: 1, opacity: 0.3 }, { top: 16, left: 90, size: 2, opacity: 0.45 },
  { top: 22, left: 26, size: 1, opacity: 0.3 }, { top: 27, left: 62, size: 1, opacity: 0.25 },
  { top: 33, left: 84, size: 2, opacity: 0.4 }, { top: 38, left: 36, size: 1, opacity: 0.35 },
  { top: 43, left: 95, size: 1, opacity: 0.3 }, { top: 48, left: 22, size: 2, opacity: 0.45 },
  { top: 53, left: 55, size: 1, opacity: 0.2 }, { top: 57, left: 78, size: 1, opacity: 0.3 },
  { top: 62, left: 30, size: 1, opacity: 0.35 }, { top: 67, left: 92, size: 2, opacity: 0.5 },
  { top: 72, left: 44, size: 1, opacity: 0.25 }, { top: 77, left: 68, size: 1, opacity: 0.35 },
  { top: 82, left: 24, size: 2, opacity: 0.4 }, { top: 86, left: 52, size: 1, opacity: 0.3 },
  { top: 91, left: 80, size: 1, opacity: 0.35 }, { top: 95, left: 38, size: 2, opacity: 0.45 },
]

/**
 * Contents of the dark navy section: layered background (gradient,
 * glows, stars, grain), the Technologies & Tools orbit system in the
 * upper area and the Currently Exploring terminal below it. The left
 * padding at lg clears the curved divider's intrusion.
 */
export function DarkShowcase() {
  return (
    <div className="relative h-full overflow-hidden bg-night">
      {/* Layered background */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(165deg,var(--color-night-deep),var(--color-night)_48%,var(--color-night-soft))]" />
        <div className="absolute -top-20 right-0 h-96 w-96 translate-x-1/4 rounded-full bg-accent-purple/14 blur-[110px]" />
        <div className="absolute bottom-0 left-0 h-80 w-80 -translate-x-1/4 translate-y-1/4 rounded-full bg-accent-blue/14 blur-[100px]" />
        {STARS.map((star, index) => (
          <span
            key={index}
            className="absolute rounded-full bg-white"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: star.size,
              height: star.size,
              opacity: star.opacity,
            }}
          />
        ))}
        <div className="bg-grain absolute inset-0 opacity-[0.07] mix-blend-overlay" />
      </div>

      <div className="relative flex h-full flex-col px-6 py-14 sm:px-10 lg:py-0 lg:pt-22 lg:pr-10 lg:pb-10 lg:pl-[19%]">
        <SectionLabel text="Technologies & Tools" />

        {/* Orbit system — pinned to the upper area so it balances the
            character's head, not the page center */}
        <div className="mt-1 flex justify-center">
          <div className="flex h-80 items-center justify-center sm:h-96 lg:h-100">
            <div className="scale-[0.58] sm:scale-75 lg:scale-[0.82] xl:scale-90">
              <TechOrbitSystem />
            </div>
          </div>
        </div>

        {/* Terminal cluster — anchored to the lower area. Extra left
            clearance: the curve bulges furthest inward here. */}
        <div className="mt-10 lg:mt-auto lg:pl-[8%]">
          <SectionLabel text="Currently Exploring" />
          <div className="relative mt-4">
            <TerminalPanel />
            {/* Bottom glow lives outside the card so it never gets clipped */}
            <div
              aria-hidden="true"
              className="absolute inset-x-10 -bottom-4 h-8 rounded-full bg-accent-purple/30 blur-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
