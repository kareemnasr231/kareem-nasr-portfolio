import type { ExperienceItem } from '../../types/content'
import { GlowCard } from '../ui/GlowCard'
import { Tag } from '../ui/Tag'

interface TimelineCardProps {
  item: ExperienceItem
}

export function TimelineCard({ item }: TimelineCardProps) {
  return (
    <GlowCard className="p-6 text-left sm:p-7">
      <p className="font-mono text-xs tracking-wide text-accent-purple uppercase">{item.role}</p>
      {/* Date shown inside the card on mobile; next to the node on desktop */}
      <p className="mt-1 font-mono text-xs text-muted md:hidden">{item.period}</p>
      <h3 className="mt-2 font-display text-xl font-semibold text-ink">{item.title}</h3>
      {item.organization && (
        <p className="mt-0.5 text-sm font-medium text-muted">{item.organization}</p>
      )}

      {item.description && (
        <p className="mt-4 text-sm leading-relaxed text-muted">{item.description}</p>
      )}

      {item.highlights && (
        <ul className="mt-4 space-y-2.5">
          {item.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2.5 text-sm leading-relaxed text-muted">
              <span
                aria-hidden="true"
                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-linear-to-r from-accent-purple to-accent-blue"
              />
              {highlight}
            </li>
          ))}
        </ul>
      )}

      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Skills and technologies">
        {item.tags.map((tag) => (
          <li key={tag}>
            <Tag label={tag} />
          </li>
        ))}
      </ul>
    </GlowCard>
  )
}
