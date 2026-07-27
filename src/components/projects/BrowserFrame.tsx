import type { Project } from '../../types/content'

interface BrowserFrameProps {
  project: Project
}

/**
 * Premium browser-window preview: macOS traffic lights above the
 * project screenshot, which scales with preserved aspect ratio and
 * zooms ~3% while the card is hovered.
 */
export function BrowserFrame({ project }: BrowserFrameProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-soft">
      <div className="flex items-center gap-1.5 border-b border-line bg-white px-3.5 py-2.5" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]/80" />
      </div>

      <div className="relative aspect-16/10 overflow-hidden">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>
    </div>
  )
}
