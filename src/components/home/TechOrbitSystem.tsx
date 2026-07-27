import type { CSSProperties } from 'react'
import { CodeXml } from 'lucide-react'
import { techOrbitRings } from '../../data/technologies'
import type { OrbitPoint, TechOrbitRing } from '../../types/content'
import { TechIcon } from '../ui/TechIcon'
import { HexFrame } from './HexFrame'

const HEX_SIZE = 62

type RingStyle = CSSProperties & { '--duration': string; '--direction': string; '--counter-direction': string }

/**
 * Reference-style orbit system: concentric guide rings, a central
 * glowing code hexagon, and rings of hexagonal tech frames rotating at
 * different speeds and directions (pure CSS transforms — see
 * `.orbit-ring` / `.orbit-counter` in index.css). Every icon carries an
 * equal counter-rotation so it stays upright. Hovering an icon pauses
 * its ring and reveals a tooltip. Reduced motion → static placement.
 */
export function TechOrbitSystem() {
  const outer = techOrbitRings[techOrbitRings.length - 1]
  const span = (outer ? outer.radius : 224) * 2 + HEX_SIZE + 16

  return (
    <div
      role="group"
      aria-label="Technologies I work with"
      className="relative"
      style={{ width: span, height: span }}
    >
      {/* Guide rings */}
      {techOrbitRings.map((ring) => (
        <div
          key={`guide-${ring.radius}`}
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/8"
          style={{ width: ring.radius * 2, height: ring.radius * 2 }}
        />
      ))}

      {/* Central glowing code hexagon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_0_18px_rgb(139_92_246/0.55)]">
        <HexFrame size={74} accent>
          <CodeXml size={28} strokeWidth={1.6} className="text-accent-purple" />
        </HexFrame>
      </div>

      {techOrbitRings.map((ring) => (
        <OrbitRing key={ring.radius} ring={ring} />
      ))}
    </div>
  )
}

function OrbitRing({ ring }: { ring: TechOrbitRing }) {
  const style: RingStyle = {
    '--duration': `${ring.duration}s`,
    '--direction': ring.direction === 'ccw' ? 'reverse' : 'normal',
    '--counter-direction': ring.direction === 'ccw' ? 'normal' : 'reverse',
  }

  return (
    <div className="orbit-ring pointer-events-none absolute inset-0" style={style}>
      {ring.items.map((item) => (
        <OrbitIcon key={item.tech.name} item={item} radius={ring.radius} />
      ))}
    </div>
  )
}

function OrbitIcon({ item, radius }: { item: OrbitPoint; radius: number }) {
  return (
    <div
      className="absolute top-1/2 left-1/2"
      style={{
        width: HEX_SIZE,
        height: HEX_SIZE,
        margin: -HEX_SIZE / 2,
        transform: `rotate(${item.angle}deg) translateX(${radius}px) rotate(${-item.angle}deg)`,
      }}
    >
      <div className="orbit-counter h-full w-full">
        <div className="orbit-hex group pointer-events-auto relative h-full w-full transition-transform duration-300 hover:scale-110 motion-reduce:transition-none">
          <HexFrame size={HEX_SIZE} className="transition-[filter] duration-300 group-hover:drop-shadow-[0_0_12px_rgb(139_92_246/0.45)]">
            <TechIcon tech={item.tech} size={24} />
          </HexFrame>
          <span
            role="tooltip"
            className="pointer-events-none absolute top-full left-1/2 z-10 mt-1.5 -translate-x-1/2 rounded-md border border-white/10 bg-night-deep px-2 py-0.5 font-mono text-[10px] whitespace-nowrap text-white/90 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          >
            {item.tech.name}
          </span>
          <span className="sr-only">{item.tech.name}</span>
        </div>
      </div>
    </div>
  )
}
